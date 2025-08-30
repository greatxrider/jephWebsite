"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { CookieManager } from "@/lib/cookieManager";

export default function CookieTestPage() {
  const [cookieStatus, setCookieStatus] = useState<string>("");
  const [preferences, setPreferences] = useState<any>(null);

  useEffect(() => {
    // Check current cookie status
    const consent = localStorage.getItem("cookieConsent");
    const prefs = CookieManager.getPreferences();
    
    setCookieStatus(consent || "No consent given");
    setPreferences(prefs);
  }, []);

  const handleTestCookies = () => {
    if (CookieManager.hasConsent()) {
      // Set test cookies
      CookieManager.setCookie("test_cookie", "test_value", 1);
      CookieManager.setAnalyticsCookie("analytics_test", "enabled");
      CookieManager.setMarketingCookie("marketing_test", "enabled");
      
      alert("Test cookies have been set! Check your browser's developer tools.");
    } else {
      alert("Please accept cookies first!");
    }
  };

  const handleClearCookies = () => {
    CookieManager.clearAll();
    setCookieStatus("No consent given");
    setPreferences(null);
    alert("All cookies and preferences have been cleared!");
  };

  const handleResetConsent = () => {
    localStorage.removeItem("cookieConsent");
    setCookieStatus("No consent given");
    alert("Cookie consent has been reset. Refresh the page to see the consent popup again.");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Cookie Consent Test Page
          </h1>
          
          <div className="space-y-6">
            {/* Current Status */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Current Cookie Status
              </h2>
              <div className="space-y-2 text-sm">
                <p><strong>Consent Status:</strong> <span className="text-blue-600 dark:text-blue-400">{cookieStatus}</span></p>
                <p><strong>Has Consent:</strong> <span className="text-blue-600 dark:text-blue-400">{CookieManager.hasConsent().toString()}</span></p>
                {preferences && (
                  <div>
                    <p><strong>Preferences:</strong></p>
                    <ul className="ml-4 space-y-1">
                      <li>Essential: <span className="text-green-600">{preferences.essential.toString()}</span></li>
                      <li>Analytics: <span className="text-blue-600">{preferences.analytics.toString()}</span></li>
                      <li>Marketing: <span className="text-purple-600">{preferences.marketing.toString()}</span></li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Test Actions */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Test Actions
              </h2>
              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={handleTestCookies}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  disabled={!CookieManager.hasConsent()}
                >
                  Set Test Cookies
                </Button>
                <Button
                  onClick={handleClearCookies}
                  variant="outline"
                  className="border-red-300 text-red-600 hover:bg-red-50"
                >
                  Clear All Cookies
                </Button>
                <Button
                  onClick={handleResetConsent}
                  variant="outline"
                  className="border-orange-300 text-orange-600 hover:bg-orange-50"
                >
                  Reset Consent
                </Button>
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
              <h2 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">
                How to Test
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-sm text-blue-800 dark:text-blue-200">
                <li>If you haven't seen the cookie consent popup, refresh the page</li>
                <li>Accept cookies (either all or selected ones)</li>
                <li>Use the "Set Test Cookies" button to create test cookies</li>
                <li>Check your browser's Developer Tools → Application → Cookies to see the cookies</li>
                <li>Use "Clear All Cookies" to remove everything and test again</li>
              </ol>
            </div>

            {/* Browser Cookies Display */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Current Browser Cookies
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded border p-3 font-mono text-sm">
                <p className="text-gray-600 dark:text-gray-400">
                  {document.cookie || "No cookies found"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
