import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always required
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Delay showing banner slightly for better UX
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    savePreferences(allAccepted);
  };

  const handleRejectNonEssential = () => {
    const essentialOnly: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    savePreferences(essentialOnly);
  };

  const handleSavePreferences = () => {
    savePreferences(preferences);
  };

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('cookieConsent', JSON.stringify(prefs));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());

    // Initialize analytics if accepted
    if (prefs.analytics) {
      // TODO: Initialize Google Analytics or your analytics service
      console.log('Analytics enabled');
    }

    // Initialize marketing if accepted
    if (prefs.marketing) {
      // TODO: Initialize marketing pixels/tags
      console.log('Marketing cookies enabled');
    }

    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-white border-t-2 border-primary shadow-2xl"
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-grow">
            <h2 id="cookie-consent-title" className="text-xl font-bold text-primary mb-2">
              🍪 Cookie Settings
            </h2>
            <p id="cookie-consent-description" className="text-sm text-foreground mb-4">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
              By clicking "Accept All", you consent to our use of cookies. You can manage your preferences or learn more in our{' '}
              <a href="/privacy-policy" className="text-primary underline hover:text-primary-hover">
                Privacy Policy
              </a>
              .
            </p>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-muted-foreground hover:text-foreground p-2"
            aria-label="Close cookie banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!showPreferences ? (
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleAcceptAll}
              className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary-hover transition-all shadow-md hover:shadow-lg"
            >
              Accept All Cookies
            </button>
            <button
              onClick={handleRejectNonEssential}
              className="px-6 py-3 bg-white text-primary border-2 border-primary font-semibold rounded-lg hover:bg-gray-50 transition-all"
            >
              Reject Non-Essential
            </button>
            <button
              onClick={() => setShowPreferences(!showPreferences)}
              className="px-6 py-3 bg-white text-foreground border border-border font-semibold rounded-lg hover:bg-gray-50 transition-all"
            >
              Customize Settings
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              {/* Necessary Cookies */}
              <div className="p-4 bg-muted rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-grow">
                    <h3 className="font-semibold text-foreground mb-1">Necessary</h3>
                    <p className="text-xs text-muted-foreground">
                      Essential for the website to function properly. Cannot be disabled.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={true}
                    disabled
                    className="mt-1 w-5 h-5"
                    aria-label="Necessary cookies (always enabled)"
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Session management, security, accessibility features.
                </p>
              </div>

              {/* Analytics Cookies */}
              <div className="p-4 bg-muted rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-grow">
                    <h3 className="font-semibold text-foreground mb-1">Analytics</h3>
                    <p className="text-xs text-muted-foreground">
                      Help us understand how visitors interact with our website.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) =>
                      setPreferences({ ...preferences, analytics: e.target.checked })
                    }
                    className="mt-1 w-5 h-5 cursor-pointer accent-primary"
                    aria-label="Enable analytics cookies"
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Google Analytics, page views, user behavior analysis.
                </p>
              </div>

              {/* Marketing Cookies */}
              <div className="p-4 bg-muted rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-grow">
                    <h3 className="font-semibold text-foreground mb-1">Marketing</h3>
                    <p className="text-xs text-muted-foreground">
                      Used to deliver personalized advertisements.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) =>
                      setPreferences({ ...preferences, marketing: e.target.checked })
                    }
                    className="mt-1 w-5 h-5 cursor-pointer accent-primary"
                    aria-label="Enable marketing cookies"
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Advertising networks, remarketing, conversion tracking.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={handleSavePreferences}
                className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary-hover transition-all shadow-md hover:shadow-lg"
              >
                Save My Preferences
              </button>
              <button
                onClick={() => setShowPreferences(false)}
                className="px-6 py-3 bg-white text-foreground border border-border font-semibold rounded-lg hover:bg-gray-50 transition-all"
              >
                Back
              </button>
            </div>

            <p className="text-xs text-muted-foreground">
              You can change your cookie preferences at any time by visiting our{' '}
              <a href="/privacy-policy#cookies" className="text-primary underline hover:text-primary-hover">
                Cookie Policy
              </a>
              . For more information about how we process your data, see our{' '}
              <a href="/privacy-policy" className="text-primary underline hover:text-primary-hover">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
