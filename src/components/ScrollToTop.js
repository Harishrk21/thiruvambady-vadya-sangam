import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Clear scroll locks from gallery, courses modal, or mobile nav
    document.body.style.overflow = "";
    document.body.classList.remove("menu-open");

    const scrollTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      const main = document.getElementById("main-content");
      if (main) {
        main.scrollTop = 0;
      }
    };

    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }

    scrollTop();
    requestAnimationFrame(scrollTop);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
