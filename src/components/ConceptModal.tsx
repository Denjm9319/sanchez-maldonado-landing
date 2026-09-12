import { useEffect } from "react";

interface ConceptModalProps {
  title: string;
  rubro: string;
  objetivo: string;
  description: string;
  capabilities: string[];
  url: string;
  onClose: () => void;
  badge?: string;
  ctaLabel?: string;
}

export default function ConceptModal({
  title,
  rubro,
  objetivo,
  description,
  capabilities,
  url,
  onClose,
  badge = "Concept / Demo",
  ctaLabel = "Ver demo en vivo",
}: ConceptModalProps) {
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
      aria-label={`Detalle del concepto ${title}`}
      onClick={onClose}
      className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-md flex items-center justify-center p-[clamp(16px,4vw,56px)]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#151515] text-cream/80 border border-white/10 rounded-[20px] max-w-[560px] w-full p-[clamp(28px,4vw,44px)] relative shadow-[0_30px_80px_rgba(0,0,0,0.45)] max-h-[85vh] overflow-y-auto"
      >
        <button
          type="button"
          aria-label="Cerrar"
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full border border-white/15 bg-white/10 text-cream text-lg leading-none cursor-pointer hover:bg-white/20"
        >
          ×
        </button>

        <span className="text-[10.5px] tracking-[0.2em] uppercase text-gold">{badge}</span>
        <h3 className="text-[26px] mt-2 mb-5 pr-10 text-cream">{title}</h3>

        <dl className="grid gap-[18px] text-[14.5px]">
          <div>
            <dt className="text-[11px] tracking-[0.15em] uppercase text-gold mb-1">Rubro</dt>
            <dd>{rubro}</dd>
          </div>
          <div>
            <dt className="text-[11px] tracking-[0.15em] uppercase text-gold mb-1">Objetivo</dt>
            <dd>{objetivo}</dd>
          </div>
          <div>
            <dt className="text-[11px] tracking-[0.15em] uppercase text-gold mb-1">Descripción</dt>
            <dd className="leading-[1.65]">{description}</dd>
          </div>
          <div>
            <dt className="text-[11px] tracking-[0.15em] uppercase text-gold mb-2">
              Capacidades usadas
            </dt>
            <dd className="flex flex-wrap gap-2">
              {capabilities.map((c) => (
                <span
                  key={c}
                  className="bg-white/5 border border-white/15 rounded-full px-3 py-1.5 text-[13px]"
                >
                  {c}
                </span>
              ))}
            </dd>
          </div>
        </dl>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex bg-gold text-navy px-6 py-3.5 rounded-full text-[14.5px] hover:bg-cream"
        >
          {ctaLabel}
        </a>
      </div>
    </div>
  );
}
