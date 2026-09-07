import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * React Router does client-side navigation only, so the browser's native
 * "scroll to #hash" behavior never fires. This restores it: scroll to the
 * hash target on hash links, otherwise reset to top on a real page change.
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        const raf = requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth", block: "start" }));
        return () => cancelAnimationFrame(raf);
      }
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
