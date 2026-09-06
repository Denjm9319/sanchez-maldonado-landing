import { useEffect, useState } from "react";
import { WHATSAPP_LINK } from "../config/site";

export default function WhatsAppFloat() {
  const [tip, setTip] = useState(false);
  const [tipDone, setTipDone] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (!tipDone && (window.scrollY || 0) < 40) setTip(true);
    }, 3000);
    return () => window.clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if ((window.scrollY || 0) > 40 && tip) {
        setTip(false);
        setTipDone(true);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [tip]);

  const hideTip = () => {
    setTip(false);
    setTipDone(true);
  };

  return (
    <div className="fixed right-5 bottom-5 z-[70] flex items-center gap-2.5">
      {tip && (
        <span className="bg-white text-navy text-[13.5px] px-3.5 py-2.5 rounded-full shadow-[0_6px_20px_rgba(20,43,61,0.18)] animate-tipIn whitespace-nowrap">
          ¿Hablamos?
        </span>
      )}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hablar por WhatsApp"
        onClick={hideTip}
        className="w-[58px] h-[58px] rounded-full bg-whatsapp flex items-center justify-center shadow-[0_10px_26px_rgba(20,43,61,0.2)] animate-pulseSoft transition-transform hover:scale-[1.06]"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="#FFFFFF" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.97L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.03c-.24.68-1.4 1.3-1.93 1.35-.53.05-1.02.07-1.75-.11-.42-.1-.97-.29-1.67-.59-2.95-1.27-4.88-4.24-5.03-4.44-.15-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.46.27-.3.59-.37.79-.37s.39 0 .56.01c.18.01.42-.07.66.5.24.58.82 2 .89 2.14.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.61.17.3.75 1.24 1.61 2.01 1.11.99 2.04 1.3 2.34 1.45.3.15.47.12.65-.07.17-.2.75-.87.95-1.17.2-.3.4-.25.66-.15.27.1 1.68.79 1.97.94.29.15.48.22.55.34.07.13.07.75-.17 1.43z" />
        </svg>
      </a>
    </div>
  );
}
