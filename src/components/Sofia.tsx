import Reveal from "./Reveal";
import { SOFIA_LINK } from "../config/site";

const BULLETS = [
  "WhatsApp 24/7",
  "Atiende y hace llamadas",
  "Varias llamadas a la vez",
  "Se integra a tu CRM",
  "Calificación de pacientes",
  "Agenda automática",
  "Seguimiento",
];

export default function Sofia() {
  return (
    <section id="sofia" className="relative bg-black/20 backdrop-blur-[2px] text-cream">
      <Reveal className="max-w-[1180px] mx-auto px-6 py-[clamp(78px,11vw,150px)] grid gap-[clamp(34px,6vw,80px)] items-start [grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr))]">
        <div>
          <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-[22px]">Conocé a Sofia</p>
          <h2 className="font-heroDisplay text-[clamp(32px,4.6vw,56px)] leading-[1.08] text-cream mb-[26px] [text-wrap:pretty]">
            Tu vendedor. Tu recepcionista. El empleado que nunca duerme.
          </h2>
          <p className="text-[clamp(16px,1.4vw,18px)] leading-[1.75] text-cream/78 max-w-[34em] mb-[34px]">
            Sofia es un agente de IA especializado en clínicas dentales y estéticas que atiende por
            WhatsApp y por teléfono. Sostiene varias llamadas a la vez, puede llamar ella misma a tus
            pacientes, y se integra al CRM que ya uses — o armamos uno si todavía no tenés. También
            existe en versión solo chat, sin la parte de voz.
          </p>
          <a
            href={SOFIA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold text-navy px-7 py-4 rounded-full text-[15px] font-medium hover:bg-cream"
          >
            Solicitar demo de Sofia
          </a>
        </div>
        <ul className="list-none m-0 p-0 grid gap-y-0.5 gap-x-7 [grid-template-columns:repeat(auto-fit,minmax(min(100%,200px),1fr))]">
          {BULLETS.map((b) => (
            <li key={b} className="py-3.5 border-b border-cream/[0.14] text-[15.5px]">
              {b}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
