import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GA_ID = process.env.REACT_APP_GA_MEASUREMENT_ID;
const GSC_VERIFICATION = process.env.REACT_APP_GSC_VERIFICATION;

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (!GSC_VERIFICATION) return;
    let meta = document.querySelector('meta[name="google-site-verification"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "google-site-verification");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", GSC_VERIFICATION);
  }, []);

  useEffect(() => {
    if (!GA_ID) return;

    const loadGtag = () => {
      if (window.gtag) return;
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      document.head.appendChild(script);
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() {
        window.dataLayer.push(arguments);
      };
      window.gtag("js", new Date());
      window.gtag("config", GA_ID, { send_page_view: false });
    };

    loadGtag();
  }, []);

  useEffect(() => {
    if (!GA_ID || !window.gtag) return;
    window.gtag("event", "page_view", {
      page_path: location.pathname + location.search,
      page_title: document.title,
    });
  }, [location]);

  return null;
};

export default Analytics;
