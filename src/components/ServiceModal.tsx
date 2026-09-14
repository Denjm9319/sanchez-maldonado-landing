import { useEffect } from "react";
import { waLink } from "../config/site";

interface ServiceModalProps {
  title: string;
  text: string;
  howItWorks: string;
  bestFor: string;
  notFor: string;
  waMessage: string;
  onClose: () => void;
}

export default function ServiceModal({
  title,
  text,
  howItWorks,
  bestFor,
  notFor,
  waMessage,
  onClose,
}: ServiceModalProps) {
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
      aria-label={`Detalle del servicio ${title}`}
      onClick={onClose}
      className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-md flex items-center justify-center p-[clamp(16px,4vw,56px)]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#151515] text-cream/80 border border-white/10 rounded-[20px] max-w-[580px] w-full p-[clamp(28px,4vw,44px)] relative shadow-[0_30px_80px_rgba(0,0,0,0.45)] max-h-[85vh] overflow-y-auto"
      >
        <button
          type="button"
          aria-label="Cerrar"
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full border border-white/15 bg-white/10 text-cream text-lg leading-none cursor-pointer hover:bg-white/20"
        >
          ×
        </button>

        <h3 className="text-[26px] mt-2 mb-3 pr-10 text-cream">{title}</h3>
        <p className="text-[15px] text-cream/65 leading-[1.65] mb-6">{text}</p>

        <dl className="grid gap-[18px] text-[14.5px]">
          <div>
            <dt className="text-[11px] tracking-[0.15em] uppercase text-gold mb-1">Cómo funciona</dt>
            <dd className="leading-[1.65]">{howItWorks}</dd>
          </div>
          <div>
            <dt className="text-[11px] tracking-[0.15em] uppercase text-gold mb-1">Ideal para</dt>
            <dd className="leading-[1.65]">{bestFor}</dd>
          </div>
          <div>
            <dt className="text-[11px] tracking-[0.15em] uppercase text-gold mb-1">No es para</dt>
            <dd className="leading-[1.65]">{notFor}</dd>
          </div>
        </dl>

        <a
          href={waLink(waMessage)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="mt-8 inline-flex bg-gold text-navy px-6 py-3.5 rounded-full text-[14.5px] hover:bg-[#c79656] transition-colors"
        >
          Consultar sobre este servicio
        </a>
      </div>
    </div>
  );
}
