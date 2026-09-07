import { useEffect } from "react";
import { Link } from "react-router-dom";

interface ServiceModalProps {
  title: string;
  text: string;
  howItWorks: string;
  bestFor: string;
  notFor: string;
  onClose: () => void;
}

export default function ServiceModal({
  title,
  text,
  howItWorks,
  bestFor,
  notFor,
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
      className="fixed inset-0 z-[90] bg-navyDeep/90 backdrop-blur-md flex items-center justify-center p-[clamp(16px,4vw,56px)]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-cream text-body rounded-[20px] max-w-[580px] w-full p-[clamp(28px,4vw,44px)] relative shadow-[0_30px_80px_rgba(0,0,0,0.45)] max-h-[85vh] overflow-y-auto"
      >
        <button
          type="button"
          aria-label="Cerrar"
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full border border-navy/15 bg-white text-navy text-lg leading-none cursor-pointer hover:bg-navy hover:text-cream"
        >
          ×
        </button>

        <h3 className="text-[26px] mt-2 mb-3 pr-10 text-navy">{title}</h3>
        <p className="text-[15px] text-secondary leading-[1.65] mb-6">{text}</p>

        <dl className="grid gap-[18px] text-[14.5px]">
          <div>
            <dt className="text-[11px] tracking-[0.15em] uppercase text-teal mb-1">Cómo funciona</dt>
            <dd className="leading-[1.65]">{howItWorks}</dd>
          </div>
          <div>
            <dt className="text-[11px] tracking-[0.15em] uppercase text-teal mb-1">Ideal para</dt>
            <dd className="leading-[1.65]">{bestFor}</dd>
          </div>
          <div>
            <dt className="text-[11px] tracking-[0.15em] uppercase text-teal mb-1">No es para</dt>
            <dd className="leading-[1.65]">{notFor}</dd>
          </div>
        </dl>

        <Link
          to="/#contacto"
          onClick={onClose}
          className="mt-8 inline-flex bg-navy text-cream px-6 py-3.5 rounded-full text-[14.5px] hover:bg-teal"
        >
          Consultar sobre este servicio
        </Link>
      </div>
    </div>
  );
}
