/**
 * Platform detection for IAP routing.
 * - iOS/Android native (Capacitor): should use native IAP
 * - Web browser: use Stripe
 */

export type Platform = "ios" | "android" | "web";

declare global {
  interface Window {
    Capacitor?: {
      getPlatform: () => string;
      isNativePlatform: () => boolean;
    };
  }
}

export function getPlatform(): Platform {
  if (typeof window === "undefined") return "web";

  // Capacitor native detection
  if (window.Capacitor?.isNativePlatform?.()) {
    const p = window.Capacitor.getPlatform();
    if (p === "ios") return "ios";
    if (p === "android") return "android";
  }

  return "web";
}

export function isNativeApp(): boolean {
  const p = getPlatform();
  return p === "ios" || p === "android";
}
