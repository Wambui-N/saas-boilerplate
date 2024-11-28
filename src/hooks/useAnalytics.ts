import { useEffect } from "react";

const useAnalytics = (trackingId: string) => {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("config", trackingId, {
        page_path: window.location.pathname,
      });
    }
  }, [trackingId]);
};

export default useAnalytics;
