import Reveal from "./Reveal";
import { SOFIA_LINK } from "../config/site";

const BULLETS = [
  "Atiende hasta 20 llamadas a la vez",
  "Entiende y califica cada consulta",
  "Agenda, recuerda y reagenda",
  "Se integra a tu CRM",
  "Funciona aunque tu equipo no conteste",
  "Dashboard con la llamada completa",
  "Vas a saber si agendó y por qué",
];

export default function Sofia() {
  return (
    <section id="sofia" className="relative bg-black/20 backdrop-blur-[2px] text-cream">
      <Reveal className="max-w-[1180px] mx-auto px-6 py-[clamp(78px,11vw,150px)] grid gap-[clamp(34px,6vw,80px)] items-start [grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr))]">
        <div>
          <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-[22px]">Mimoru AI Reception System</p>
          <h2 className="font-heroDisplay text-[clamp(32px,4.6vw,56px)] leading-[1.08] text-cream mb-[26px] [text-wrap:pretty]">
            No vendemos un agente de voz. Vendemos un sistema de recepción.
          </h2>
          <p className="text-[clamp(16px,1.4vw,18px)] leading-[1.75] text-cream/80 max-w-[34em] mb-[22px]">
            Sofia es la demo en vivo de ese sistema: atiende llamadas como una persona, pero
            mejorada — sostiene hasta 20 llamadas a la vez, conversa con cada prospecto, entiende lo
            que necesita, califica la consulta y agenda, con recordatorios y reprogramación
            incluidos. Todo conectado a tu CRM, incluso cuando tu equipo no puede atender.
          </p>
          <p className="text-[clamp(16px,1.4vw,18px)] leading-[1.75] text-cream/80 max-w-[34em] mb-[34px]">
            Todo queda en un dashboard simple: escuchás la llamada completa, ves qué necesitaba el
            paciente, los datos que dejó, y si agendó turno o no — y por qué. También existe en
            versión solo chat, sin la parte de voz.
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
