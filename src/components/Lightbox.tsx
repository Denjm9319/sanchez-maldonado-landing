import { useEffect } from "react";

interface LightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export default function Lightbox({ src, alt, onClose }: LightboxProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Vista ampliada de ${alt}`}
      onClick={onClose}
      className="fixed inset-0 z-[90] bg-navyDeep/90 backdrop-blur-md flex items-center justify-center p-[clamp(16px,4vw,56px)] cursor-zoom-out"
    >
      <img
        src={src}
        alt={alt}
        className="max-w-full max-h-full object-contain rounded-[10px] shadow-[0_30px_80px_rgba(0,0,0,0.45)] bg-cream"
      />
      <button
        type="button"
        aria-label="Cerrar"
        onClick={onClose}
        className="fixed top-5 right-5 w-11 h-11 rounded-full border border-cream/35 bg-cream/10 text-cream text-[22px] leading-none cursor-pointer hover:bg-cream hover:text-navy"
      >
        ×
      </button>
    </div>
  );
}
