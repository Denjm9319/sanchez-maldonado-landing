import { useEffect } from "react";
import { waLink } from "../config/site";

interface ServiceModalProps {
  eyebrow: string;
  n: string;
  title: string;
  tagline: string;
  priceLines: string[];
  bulletsLabel?: string;
  bullets: string[];
  notes?: string[];
  ctaLabel: string;
  waMessage: string;
  onClose: () => void;
}

export default function ServiceModal({
  eyebrow,
  n,
  title,
  tagline,
  priceLines,
  bulletsLabel,
  bullets,
  notes,
  ctaLabel,
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

        <p className="text-[11px] tracking-[0.15em] uppercase text-gold mb-2 pr-10">
          {n} — {eyebrow}
        </p>
        <h3 className="text-[24px] leading-[1.2] mb-3 pr-10 text-cream">{title}</h3>
        <p className="text-[15px] text-cream/65 leading-[1.65] mb-6">{tagline}</p>

        <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-[18px] mb-6">
          {priceLines.map((line, i) => {
            const isPrice = /USD|\$/.test(line);
            const isSeparator = line.trim().toLowerCase() === "o";
            return (
              <p
                key={i}
                className={
                  isSeparator
                    ? "text-[12px] text-cream/40 uppercase tracking-[0.15em] my-1"
                    : isPrice
                      ? "text-[22px] text-gold font-medium leading-[1.3]"
                      : "text-[13px] text-cream/55 leading-[1.4]"
                }
              >
                {line}
              </p>
            );
          })}
        </div>

        {bulletsLabel && (
          <p className="text-[11px] tracking-[0.15em] uppercase text-gold mb-2">{bulletsLabel}</p>
        )}
        <ul className="grid gap-[9px] text-[14.5px] mb-6">
          {bullets.map((b) => (
            <li key={b} className="flex gap-2.5 leading-[1.5]">
              <span className="text-gold shrink-0">✓</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        {notes && notes.length > 0 && (
          <div className="grid gap-3 mb-2">
            {notes.map((note, i) => (
              <p
                key={i}
                className="text-[13px] leading-[1.6] text-cream/60 border-l-2 border-gold/40 pl-3.5"
              >
                {note}
              </p>
            ))}
          </div>
        )}

        <a
          href={waLink(waMessage)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="mt-6 inline-flex bg-gold text-navy px-6 py-3.5 rounded-full text-[14.5px] hover:bg-[#c79656] transition-colors"
        >
          {ctaLabel}
        </a>
      </div>
    </div>
  );
}
