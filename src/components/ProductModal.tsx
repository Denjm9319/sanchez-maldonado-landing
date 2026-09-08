import { useEffect } from "react";

function IconCheck() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M4 12.5l5 5L20 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconCross() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}

interface ProductModalProps {
  title: string;
  tagline: string;
  price: string;
  audience: string[];
  includes: string[];
  excludes: string[];
  why: string;
  disclaimer: string;
  ctaLink: string;
  onClose: () => void;
}

export default function ProductModal({
  title,
  tagline,
  price,
  audience,
  includes,
  excludes,
  why,
  disclaimer,
  ctaLink,
  onClose,
}: ProductModalProps) {
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
      aria-label={`Detalle del producto ${title}`}
      onClick={onClose}
      className="fixed inset-0 z-[90] bg-navyDeep/90 backdrop-blur-md flex items-center justify-center p-[clamp(16px,4vw,56px)]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-cream text-body rounded-[20px] max-w-[640px] w-full p-[clamp(28px,4vw,44px)] relative shadow-[0_30px_80px_rgba(0,0,0,0.45)] max-h-[85vh] overflow-y-auto"
      >
        <button
          type="button"
          aria-label="Cerrar"
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full border border-navy/15 bg-white text-navy text-lg leading-none cursor-pointer hover:bg-navy hover:text-cream"
        >
          ×
        </button>

        <span className="text-[10.5px] tracking-[0.2em] uppercase text-gold">Producto digital</span>
        <h3 className="text-[26px] mt-2 mb-2 pr-10 text-navy">{title}</h3>
        <p className="text-[15px] text-secondary leading-[1.6] mb-5">{tagline}</p>
        <p className="font-display text-[22px] text-navy mb-7">{price}</p>

        <div className="grid gap-7 text-[14.5px]">
          <div>
            <p className="text-[11px] tracking-[0.15em] uppercase text-teal mb-3">Para quién es esto</p>
            <ul className="grid gap-2.5">
              {audience.map((item) => (
                <li key={item} className="flex gap-2.5 items-start leading-[1.6]">
                  <span className="mt-0.5 shrink-0 text-teal">
                    <IconCheck />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr))]">
            <div>
              <p className="text-[11px] tracking-[0.15em] uppercase text-teal mb-3">Incluye</p>
              <ul className="grid gap-2.5">
                {includes.map((item) => (
                  <li key={item} className="flex gap-2.5 items-start leading-[1.55]">
                    <span className="mt-0.5 shrink-0 text-teal">
                      <IconCheck />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] tracking-[0.15em] uppercase text-secondary mb-3">No incluye</p>
              <ul className="grid gap-2.5 text-secondary">
                {excludes.map((item) => (
                  <li key={item} className="flex gap-2.5 items-start leading-[1.55]">
                    <span className="mt-0.5 shrink-0 text-navy/40">
                      <IconCross />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <p className="text-[11px] tracking-[0.15em] uppercase text-teal mb-2">Por qué existe esta opción</p>
            <p className="leading-[1.65]">{why}</p>
          </div>

          <div className="border-l-[3px] border-gold bg-navy/[0.04] rounded-r-[10px] p-4 px-5">
            <p className="text-[10.5px] tracking-[0.15em] uppercase text-navy/60 mb-2">Aviso importante</p>
            <p className="text-[13.5px] leading-[1.6] text-secondary">{disclaimer}</p>
          </div>
        </div>

        <a
          href={ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex bg-navy text-cream px-6 py-3.5 rounded-full text-[14.5px] hover:bg-teal"
        >
          Quiero el código →
        </a>
      </div>
    </div>
  );
}
