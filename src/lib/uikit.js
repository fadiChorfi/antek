// This file ensures UIkit is properly loaded
import { useEffect } from "react";

export function useUIkit() {
  useEffect(() => {
    // Import UIkit dynamically on the client side
    const loadUIkit = async () => {
      if (typeof window !== "undefined") {
        // Load UIkit CSS and JS
        try {
          // Load UIkit from CDN
          await Promise.all([
            import("uikit/dist/css/uikit.min.css"),
            import("uikit/dist/js/uikit.min.js"),
            import("uikit/dist/js/uikit-icons.min.js"),
          ]);

          console.log("UIkit loaded successfully");
        } catch (error) {
          console.error("Failed to load UIkit:", error);
        }
      }
    };

    loadUIkit();
  }, []);
}

// Initialize UIkit for a specific element
export function initializeUIkit(element, type, options = {}) {
  if (typeof window !== "undefined" && window.UIkit && element) {
    return window.UIkit[type](element, options);
  }
  return null;
}
