/**
 * In-App Purchase service using RevenueCat.
 * Handles native iOS/Android subscriptions via Capacitor.
 *
 * Setup required:
 * 1. Create RevenueCat account at https://www.revenuecat.com
 * 2. Add iOS/Android apps and configure products
 * 3. Set NEXT_PUBLIC_RC_IOS_KEY and NEXT_PUBLIC_RC_ANDROID_KEY in .env
 */

import { getPlatform, isNativeApp } from "./platform";
import { getDeviceId } from "./device-id";

// RevenueCat types (loaded dynamically to avoid SSR issues)
type Purchases = typeof import("@revenuecat/purchases-capacitor").Purchases;

let purchasesModule: { Purchases: Purchases } | null = null;
let initialized = false;

const PRODUCT_ID = "premium_monthly";
const ENTITLEMENT_ID = "premium";

async function loadPurchases(): Promise<Purchases | null> {
  if (typeof window === "undefined") return null;
  if (!isNativeApp()) return null;

  if (!purchasesModule) {
    try {
      purchasesModule = await import("@revenuecat/purchases-capacitor");
    } catch {
      console.warn("RevenueCat plugin not available");
      return null;
    }
  }

  return purchasesModule.Purchases;
}

/** Initialize RevenueCat SDK. Call once on app start. */
export async function initIAP(): Promise<boolean> {
  if (initialized) return true;
  if (!isNativeApp()) return false;

  const Purchases = await loadPurchases();
  if (!Purchases) return false;

  const platform = getPlatform();
  const apiKey =
    platform === "ios"
      ? (process.env.NEXT_PUBLIC_RC_IOS_KEY ?? "")
      : (process.env.NEXT_PUBLIC_RC_ANDROID_KEY ?? "");

  if (!apiKey) {
    console.warn("RevenueCat API key not configured for", platform);
    return false;
  }

  try {
    await Purchases.configure({
      apiKey,
      appUserID: getDeviceId(),
    });
    initialized = true;
    return true;
  } catch (e) {
    console.error("RevenueCat init failed:", e);
    return false;
  }
}

/** Check if user has active premium entitlement. */
export async function checkNativePremium(): Promise<boolean> {
  const Purchases = await loadPurchases();
  if (!Purchases) return false;

  try {
    const { customerInfo } = await Purchases.getCustomerInfo();
    const entitlement = customerInfo.entitlements.active[ENTITLEMENT_ID];
    return !!entitlement;
  } catch {
    return false;
  }
}

/** Purchase the premium monthly subscription. */
export async function purchasePremium(): Promise<{
  success: boolean;
  error?: string;
}> {
  const Purchases = await loadPurchases();
  if (!Purchases) {
    return { success: false, error: "IAP not available" };
  }

  try {
    // Get available packages
    const offerings = await Purchases.getOfferings();
    const currentOffering = offerings.current;

    if (!currentOffering) {
      return { success: false, error: "No offerings available" };
    }

    // Find the monthly package
    const monthlyPackage =
      currentOffering.monthly ??
      currentOffering.availablePackages.find(
        (pkg: { product: { identifier: string } }) =>
          pkg.product.identifier === PRODUCT_ID
      );

    if (!monthlyPackage) {
      return { success: false, error: "Monthly package not found" };
    }

    const { customerInfo } = await Purchases.purchasePackage({
      aPackage: monthlyPackage,
    });

    const isPremium = !!customerInfo.entitlements.active[ENTITLEMENT_ID];

    if (isPremium) {
      // Notify server about the purchase
      await notifyServerOfPurchase();
    }

    return { success: isPremium };
  } catch (e: unknown) {
    // User cancelled
    if (e && typeof e === "object" && "userCancelled" in e) {
      return { success: false, error: "cancelled" };
    }
    const msg = e instanceof Error ? e.message : "Purchase failed";
    return { success: false, error: msg };
  }
}

/** Restore previous purchases (required by App Store). */
export async function restorePurchases(): Promise<boolean> {
  const Purchases = await loadPurchases();
  if (!Purchases) return false;

  try {
    const { customerInfo } = await Purchases.restorePurchases();
    const isPremium = !!customerInfo.entitlements.active[ENTITLEMENT_ID];

    if (isPremium) {
      await notifyServerOfPurchase();
    }

    return isPremium;
  } catch {
    return false;
  }
}

/** Notify our server that this device has an active native subscription. */
async function notifyServerOfPurchase(): Promise<void> {
  try {
    const deviceId = getDeviceId();
    await fetch("/api/iap-verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-device-id": deviceId,
      },
      body: JSON.stringify({
        deviceId,
        platform: getPlatform(),
      }),
    });
  } catch {
    // Non-critical: server will eventually sync via RevenueCat webhook
  }
}
