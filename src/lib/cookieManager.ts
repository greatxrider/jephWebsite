export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
}

export class CookieManager {
  private static readonly COOKIE_CONSENT_KEY = "cookieConsent";
  private static readonly COOKIE_PREFERENCES_KEY = "cookiePreferences";
  private static readonly COOKIE_EXPIRY_DAYS = 365;

  /**
   * Check if user has given cookie consent
   */
  static hasConsent(): boolean {
    if (typeof window === "undefined") return false;
    return localStorage.getItem(this.COOKIE_CONSENT_KEY) === "accepted";
  }

  /**
   * Get user's cookie preferences
   */
  static getPreferences(): CookiePreferences {
    if (typeof window === "undefined") {
      return this.getDefaultPreferences();
    }

    const stored = localStorage.getItem(this.COOKIE_PREFERENCES_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        return this.getDefaultPreferences();
      }
    }

    return this.getDefaultPreferences();
  }

  /**
   * Set cookie preferences
   */
  static setPreferences(preferences: Partial<CookiePreferences>): void {
    if (typeof window === "undefined") return;

    const current = this.getPreferences();
    const updated = {
      ...current,
      ...preferences,
      timestamp: Date.now(),
    };

    localStorage.setItem(this.COOKIE_PREFERENCES_KEY, JSON.stringify(updated));
  }

  /**
   * Set a cookie with proper expiration
   */
  static setCookie(name: string, value: string, days: number = this.COOKIE_EXPIRY_DAYS): void {
    if (typeof window === "undefined") return;

    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
  }

  /**
   * Get a cookie value
   */
  static getCookie(name: string): string | null {
    if (typeof window === "undefined") return null;

    const nameEQ = name + "=";
    const ca = document.cookie.split(";");
    
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    
    return null;
  }

  /**
   * Delete a cookie
   */
  static deleteCookie(name: string): void {
    if (typeof window === "undefined") return;

    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
  }

  /**
   * Clear all cookies and preferences
   */
  static clearAll(): void {
    if (typeof window === "undefined") return;

    // Clear localStorage
    localStorage.removeItem(this.COOKIE_CONSENT_KEY);
    localStorage.removeItem(this.COOKIE_PREFERENCES_KEY);

    // Clear all cookies
    const cookies = document.cookie.split(";");
    cookies.forEach(cookie => {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      this.deleteCookie(name.trim());
    });
  }

  /**
   * Check if analytics cookies are allowed
   */
  static canSetAnalytics(): boolean {
    const preferences = this.getPreferences();
    return preferences.analytics && this.hasConsent();
  }

  /**
   * Check if marketing cookies are allowed
   */
  static canSetMarketing(): boolean {
    const preferences = this.getPreferences();
    return preferences.marketing && this.hasConsent();
  }

  /**
   * Set analytics cookie if allowed
   */
  static setAnalyticsCookie(name: string, value: string): boolean {
    if (this.canSetAnalytics()) {
      this.setCookie(name, value, 30); // Analytics cookies expire in 30 days
      return true;
    }
    return false;
  }

  /**
   * Set marketing cookie if allowed
   */
  static setMarketingCookie(name: string, value: string): boolean {
    if (this.canSetMarketing()) {
      this.setCookie(name, value, 90); // Marketing cookies expire in 90 days
      return true;
    }
    return false;
  }

  /**
   * Get default cookie preferences
   */
  private static getDefaultPreferences(): CookiePreferences {
    return {
      essential: true, // Essential cookies are always enabled
      analytics: false,
      marketing: false,
      timestamp: Date.now(),
    };
  }

  /**
   * Initialize Google Analytics if consent is given
   */
  static initializeAnalytics(gaId: string): void {
    if (!this.canSetAnalytics()) return;

    // Set Google Analytics cookie
    this.setAnalyticsCookie("_ga", `GA1.1.${Date.now()}.${Date.now()}`);
    
    // Initialize GA4 if available
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }
  }

  /**
   * Initialize marketing pixels if consent is given
   */
  static initializeMarketing(): void {
    if (!this.canSetMarketing()) return;

    // Set marketing consent cookie
    this.setMarketingCookie("marketing_consent", "true");
    
    // Initialize Facebook Pixel if available
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("consent", "grant");
    }
  }
}
