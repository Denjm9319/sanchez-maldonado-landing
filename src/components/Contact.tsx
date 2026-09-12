import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";
import { FORM_ENDPOINT, RUBROS, SERVICE_CHIPS, WHATSAPP_LINK } from "../config/site";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [picked, setPicked] = useState<string[]>([]);

  const toggleChip = (label: string) => {
    setPicked((prev) => (prev.includes(label) ? prev.filter((x) => x !== label) : [...prev, label]));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    fd.append("servicios", picked.join(", "));
    setStatus("sending");
    fetch(FORM_ENDPOINT, { method: "POST", body: fd, headers: { Accept: "application/json" } })
      .then((r) => (r.ok ? r.json().catch(() => ({})) : Promise.reject(r)))
      .then(() => {
        form.reset();
        setPicked([]);
        setStatus("sent");
      })
      .catch(() => setStatus("error"));
  };

  return (
    <section id="contacto" className="relative bg-black/25 backdrop-blur-[2px] text-cream">
      <Reveal className="max-w-[1180px] mx-auto px-6 py-[clamp(78px,11vw,150px)] grid gap-[clamp(36px,6vw,76px)] items-start [grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr))]">
        <div>
          <h2 className="font-heroDisplay text-[clamp(32px,4.6vw,54px)] leading-[1.08] text-cream mb-6 [text-wrap:pretty]">
            Contanos qué querés mejorar.
          </h2>
          <p className="text-[clamp(16px,1.4vw,18px)] leading-[1.75] text-cream/78 max-w-[32em] mb-9">
            No hace falta que tengas definida la solución. Contanos sobre tu negocio y analizamos qué
            tendría sentido implementar.
          </p>
          <div className="border-t border-cream/[0.16] pt-7">
            <p className="font-display text-xl mb-4">¿Preferís hablar directamente?</p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-whatsapp text-[#08361A] px-6 py-[15px] rounded-full text-[15px] font-medium hover:bg-cream hover:text-navy"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.97L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.03c-.24.68-1.4 1.3-1.93 1.35-.53.05-1.02.07-1.75-.11-.42-.1-.97-.29-1.67-.59-2.95-1.27-4.88-4.24-5.03-4.44-.15-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.46.27-.3.59-.37.79-.37s.39 0 .56.01c.18.01.42-.07.66.5.24.58.82 2 .89 2.14.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.61.17.3.75 1.24 1.61 2.01 1.11.99 2.04 1.3 2.34 1.45.3.15.47.12.65-.07.17-.2.75-.87.95-1.17.2-.3.4-.25.66-.15.27.1 1.68.79 1.97.94.29.15.48.22.55.34.07.13.07.75-.17 1.43z" />
              </svg>
              Hablar por WhatsApp
            </a>
          </div>
        </div>

        {status === "sent" ? (
          <div className="bg-cream/[0.06] border border-gold/50 rounded-[20px] p-10 px-8">
            <p className="font-display text-[26px] text-gold mb-3.5">Gracias, recibimos tu mensaje.</p>
            <p className="text-cream/80 leading-[1.7] text-[15.5px]">
              Te vamos a contactar a la brevedad. Si preferís avanzar ahora, escribinos por WhatsApp.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-6 bg-transparent border border-cream/35 text-cream px-5 py-3 rounded-full text-sm cursor-pointer hover:border-gold hover:text-gold"
            >
              Enviar otro mensaje
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} action={FORM_ENDPOINT} method="POST" className="grid gap-[18px]">
            <div className="grid gap-[18px] [grid-template-columns:repeat(auto-fit,minmax(min(100%,180px),1fr))]">
              <label className="grid gap-2 text-[12.5px] tracking-[0.1em] uppercase text-cream/70">
                Nombre *
                <input
                  type="text"
                  name="nombre"
                  required
                  className="bg-cream/[0.07] border border-cream/20 rounded-[10px] p-3.5 text-cream text-[15px] normal-case tracking-normal"
                />
              </label>
              <label className="grid gap-2 text-[12.5px] tracking-[0.1em] uppercase text-cream/70">
                Email *
                <input
                  type="email"
                  name="email"
                  required
                  className="bg-cream/[0.07] border border-cream/20 rounded-[10px] p-3.5 text-cream text-[15px] normal-case tracking-normal"
                />
              </label>
              <label className="grid gap-2 text-[12.5px] tracking-[0.1em] uppercase text-cream/70">
                WhatsApp
                <input
                  type="tel"
                  name="whatsapp"
                  className="bg-cream/[0.07] border border-cream/20 rounded-[10px] p-3.5 text-cream text-[15px] normal-case tracking-normal"
                />
              </label>
              <label className="grid gap-2 text-[12.5px] tracking-[0.1em] uppercase text-cream/70">
                Web o Instagram
                <input
                  type="text"
                  name="web"
                  className="bg-cream/[0.07] border border-cream/20 rounded-[10px] p-3.5 text-cream text-[15px] normal-case tracking-normal"
                />
              </label>
            </div>

            <label className="grid gap-2 text-[12.5px] tracking-[0.1em] uppercase text-cream/70">
              Rubro
              <select
                name="rubro"
                className="bg-cream/[0.07] border border-cream/20 rounded-[10px] p-3.5 text-cream text-[15px] normal-case tracking-normal"
              >
                {RUBROS.map((r) => (
                  <option key={r} className="text-navy">
                    {r}
                  </option>
                ))}
              </select>
            </label>

            <fieldset className="border-none m-0 p-0 grid gap-3">
              <legend className="text-[12.5px] tracking-[0.1em] uppercase text-cream/70 pb-3">
                ¿En qué podemos ayudarte?
              </legend>
              <div className="flex flex-wrap gap-2">
                {SERVICE_CHIPS.map((label) => {
                  const on = picked.includes(label);
                  return (
                    <button
                      key={label}
                      type="button"
                      aria-pressed={on}
                      onClick={() => toggleChip(label)}
                      className={`rounded-full px-[15px] py-2.5 text-[13.5px] cursor-pointer normal-case tracking-normal transition-colors ${
                        on
                          ? "bg-gold text-navy border border-gold"
                          : "bg-cream/[0.06] text-cream border border-cream/24"
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <label className="grid gap-2 text-[12.5px] tracking-[0.1em] uppercase text-cream/70">
              Mensaje
              <textarea
                name="mensaje"
                rows={4}
                placeholder="Ej: recibimos muchas consultas por WhatsApp y tardamos en responderlas..."
                className="bg-cream/[0.07] border border-cream/20 rounded-[10px] p-3.5 text-cream text-[15px] normal-case tracking-normal resize-y"
              />
            </label>

            {status === "error" && (
              <p className="text-sm text-[#FFD9A8] leading-[1.6]">
                No pudimos enviar el mensaje. Probá de nuevo o escribinos por WhatsApp.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-gold text-navy border-none px-[26px] py-4 rounded-full text-[15px] font-medium cursor-pointer justify-self-start hover:bg-cream disabled:opacity-60"
            >
              {status === "sending" ? "Enviando…" : "Analizar mi negocio"}
            </button>
          </form>
        )}
      </Reveal>
    </section>
  );
}
