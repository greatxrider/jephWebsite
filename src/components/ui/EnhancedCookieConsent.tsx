"use client";

import { useState, useEffect } from "react";
import { Button } from "./Button";
import { Cookie } from "lucide-react";

export const EnhancedCookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

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
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Cookie className="w-5 h-5 text-orange-500" />
          <span className="text-sm text-gray-700 dark:text-gray-300">
            We use cookies to enhance your experience. By continuing to use this
            site, you consent to our use of cookies.
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={handleAccept}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-sm"
          >
            Accept
          </Button>
          <Button
            variant="ghost"
            onClick={handleDecline}
            className="text-gray-500 hover:text-gray-700 px-4 py-2 text-sm"
          >
            Decline
          </Button>
        </div>
      </div>
    </div>
  );
};
