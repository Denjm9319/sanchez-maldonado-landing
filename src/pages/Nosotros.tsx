import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import { WHATSAPP_LINK } from "../config/site";

const TEAM = [
  { name: "Alexa Sánchez", role: "UX/UI · Inteligencia Artificial · Desarrollo" },
  { name: "Denis Maldonado", role: "Estrategia · Marketing · Ventas · Growth" },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("");
}

const PRINCIPLES = [
  {
    title: "Empezamos por el problema, no por la herramienta.",
    text: "Antes de proponer una web, un agente o una automatización, entendemos qué está fallando de verdad en el negocio.",
  },
  {
    title: "Lo simple que funciona, antes que lo complejo que impresiona.",
    text: "Un sistema que el dueño del negocio entiende y en el que confía vale más que uno sofisticado que nadie termina usando.",
  },
  {
    title: "Construimos en público.",
    text: "Mostramos el proceso real, con los tropiezos incluidos, no solo el resultado final pulido.",
  },
  {
    title: "Elegimos pocos proyectos para hacerlos bien.",
    text: "Preferimos dedicarle tiempo real a cada negocio antes que sumar clientes que no podemos atender como corresponde.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <Reveal className="max-w-[1180px] mx-auto px-6 pt-[132px] pb-[clamp(60px,8vw,110px)]">
        <p className="text-[11px] tracking-[0.3em] uppercase text-teal mb-5">Quiénes somos</p>
        <h1 className="text-[clamp(32px,4.6vw,54px)] leading-[1.1] mb-[clamp(20px,3vw,28px)] max-w-[20em]">
          Detrás de Sánchez &amp; Maldonado.
        </h1>
        <p className="font-display italic text-[clamp(18px,2vw,22px)] text-teal leading-[1.5] max-w-[36em] mb-[clamp(40px,5vw,64px)] [text-wrap:pretty]">
          No implementamos tecnología porque sí. Primero entendemos dónde está la fricción del negocio
          y después construimos la solución más simple que pueda generar impacto real.
        </p>
        <div className="grid gap-[clamp(20px,2.5vw,28px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,270px),1fr))]">
          {TEAM.map((p) => (
            <div
              key={p.name}
              className="bg-white border border-navy/[0.09] rounded-[20px] p-[30px] px-7 flex items-center gap-5"
            >
              <span
                aria-hidden="true"
                className="shrink-0 w-14 h-14 rounded-full bg-navy text-cream font-display text-lg flex items-center justify-center"
              >
                {initials(p.name)}
              </span>
              <div>
                <h3 className="text-xl">{p.name}</h3>
                <p className="text-secondary text-[14px] leading-[1.5] mt-1">{p.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <section className="bg-creamDeep border-t border-b border-navy/[0.08]">
        <Reveal className="max-w-[1180px] mx-auto px-6 py-[clamp(64px,8vw,110px)]">
          <p className="text-[11px] tracking-[0.3em] uppercase text-teal mb-5">Cómo pensamos el trabajo</p>
          <h2 className="text-[clamp(26px,3.4vw,40px)] leading-[1.15] mb-[clamp(38px,5vw,60px)] max-w-[22em]">
            Cuatro ideas que guían cada proyecto que aceptamos.
          </h2>
          <div className="grid gap-px bg-navy/10 [grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr))]">
            {PRINCIPLES.map((pr) => (
              <div key={pr.title} className="bg-creamDeep p-7 px-5">
                <h3 className="text-[18px] leading-[1.35] mb-2.5">{pr.title}</h3>
                <p className="text-sm text-secondary leading-[1.6]">{pr.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="bg-navy text-cream">
        <Reveal className="max-w-[1180px] mx-auto px-6 py-[clamp(64px,8vw,110px)]">
          <h2 className="text-[clamp(26px,3.4vw,40px)] leading-[1.2] max-w-[24em] mb-6 [text-wrap:pretty]">
            Estamos armando esta agencia desde cero, y lo documentamos en el camino.
          </h2>
          <p className="text-cream/78 text-[16.5px] leading-[1.8] max-w-[42em] mb-10">
            Todavía estamos consiguiendo nuestros primeros clientes pagos. Preferimos contarlo así, en
            vez de inflar resultados que no tenemos — es más útil para vos saber con quién estás
            hablando, y es la única forma en la que nos interesa construir esto.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/#contacto"
              className="bg-gold text-navy px-6 py-3.5 rounded-full text-[14.5px] font-medium hover:bg-cream"
            >
              Contanos sobre tu negocio
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-cream/30 text-cream px-6 py-3.5 rounded-full text-[14.5px] hover:border-cream"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
