"use client";

import { useState, useEffect } from "react";
import { Button } from "./Button";
import { X, Cookie, Shield, Settings } from "lucide-react";

interface CookieConsentProps {
  onAccept: () => void;
  onDecline: () => void;
  onCustomize: () => void;
}

export const CookieConsent = ({ onAccept, onDecline, onCustomize }: CookieConsentProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieChoice = localStorage.getItem("cookieConsent");
    if (!cookieChoice) {
      // Show popup after a short delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
    onAccept();
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
    onDecline();
  };

  const handleCustomize = () => {
    setIsExpanded(!isExpanded);
    onCustomize();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-2xl">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-start gap-4">
          {/* Cookie Icon */}
          <div className="flex-shrink-0 mt-1">
            <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
              <Cookie className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  We use cookies to enhance your experience
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  We use cookies and similar technologies to help personalize content, 
                  provide social media features, and analyze our traffic. We also share 
                  information about your use of our site with our social media, advertising, 
                  and analytics partners.
                </p>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-4 space-y-3">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-green-600 dark:text-green-400" />
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        Essential Cookies
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        Always active
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-300 ml-6">
                      These cookies are necessary for the website to function and cannot be switched off.
                    </p>

                    <div className="flex items-center gap-2">
                      <Settings className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        Analytics Cookies
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        Optional
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-300 ml-6">
                      Help us understand how visitors interact with our website.
                    </p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3">
                  <Button
                    onClick={handleAccept}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 text-sm font-medium"
                  >
                    Accept All Cookies
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleCustomize}
                    className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-6 py-2 text-sm font-medium"
                  >
                    {isExpanded ? "Hide Details" : "Customize"}
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={handleDecline}
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 px-6 py-2 text-sm font-medium"
                  >
                    Decline
                  </Button>
                </div>

                {/* Privacy Policy Link */}
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
                  By continuing to use this site, you consent to our use of cookies. 
                  Learn more in our{" "}
                  <a 
                    href="/privacy-policy" 
                    className="text-orange-600 dark:text-orange-400 hover:underline"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>

              {/* Close Button */}
              <button
                onClick={handleDecline}
                className="flex-shrink-0 w-8 h-8 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                aria-label="Close cookie consent"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
