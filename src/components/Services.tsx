import Reveal from "./Reveal";

const FEATURED = [
  {
    n: "01",
    title: "Websites",
    text: "Sitios premium orientados a conversión: estructura clara, carga rápida y una narrativa que genera confianza antes del primer contacto.",
  },
  {
    n: "02",
    title: "Performance Ads",
    text: "Campañas de Meta Ads pensadas para generar oportunidades reales, no impresiones.",
  },
];

const SERVICES = [
  {
    n: "03",
    title: "AI Chat Agents",
    text: "WhatsApp, Instagram, Messenger y Telegram, con respuestas inmediatas y tono propio.",
  },
  {
    n: "04",
    title: "AI Voice Agents",
    text: "Atención telefónica, calificación, seguimiento y reservas sin llamadas perdidas.",
  },
  {
    n: "05",
    title: "Automatizaciones",
    text: "Integraciones y sistemas que reducen el trabajo manual del equipo.",
  },
  {
    n: "06",
    title: "AI Creative",
    text: "Imágenes y contenido visual generado con IA, consistente con tu marca.",
  },
];

export default function Services() {
  return (
    <Reveal id="servicios" className="max-w-[1180px] mx-auto px-6 py-[clamp(78px,11vw,150px)]">
      <p className="text-[11px] tracking-[0.3em] uppercase text-teal mb-5">Servicios</p>
      <h2 className="text-[clamp(30px,4.2vw,50px)] leading-[1.12] max-w-[20em] mb-[clamp(40px,6vw,72px)] [text-wrap:pretty]">
        Un sistema, no una lista de servicios sueltos.
      </h2>
      <div className="grid gap-[clamp(28px,4vw,56px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]">
        <div className="col-span-full grid gap-[clamp(28px,4vw,56px)] items-end pb-[clamp(28px,4vw,48px)] border-b border-navy/10 [grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]">
          {FEATURED.map((s) => (
            <div key={s.n}>
              <span className="font-display text-[13px] text-gold">{s.n}</span>
              <h3 className="text-[clamp(26px,3vw,34px)] my-3 mb-3.5">{s.title}</h3>
              <p className="text-secondary leading-[1.7] text-base max-w-[30em]">{s.text}</p>
            </div>
          ))}
        </div>
        {SERVICES.map((s) => (
          <div key={s.n} className="pb-[clamp(24px,3vw,40px)] border-b border-navy/10">
            <span className="font-display text-[13px] text-gold">{s.n}</span>
            <h3 className="text-[23px] my-3">{s.title}</h3>
            <p className="text-secondary leading-[1.7] text-[15.5px]">{s.text}</p>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
