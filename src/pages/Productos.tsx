import { useState } from "react";
import Reveal from "../components/Reveal";
import ProductModal from "../components/ProductModal";
import { waLink } from "../config/site";

function IconCode() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M8.5 8 4 12l4.5 4M15.5 8l4.5 4-4.5 4M13.5 6.5l-3 11" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const TINTS = ["bg-navy/[0.055]", "bg-teal/[0.08]", "bg-gold/[0.12]"];

const PRODUCTS = [
  {
    id: "sofia-installer",
    n: "01",
    title: "Instalador de Sofia (Voz IA)",
    teaser: "El código completo para correr tu propia recepcionista de voz con IA.",
    price: "USD 59 · pago único",
    Icon: IconCode,
    tagline:
      "Te doy el código completo del sistema que uso para armar agentes de voz como Sofia. Vos lo instalás, lo configurás y lo operás con tus propias cuentas.",
    audience: [
      "Sabés usar Claude Code (o estás dispuesto a aprender).",
      "Tenés o podés crear cuentas propias en los servicios necesarios (telefonía, IA, calendario/CRM).",
      "Preferís tener el control total del sistema antes que depender de alguien mes a mes.",
      "No necesitás que alguien te resuelva los problemas — te arreglás solo con la documentación.",
    ],
    includes: [
      "El código fuente completo del sistema",
      "Los prompts ya armados y probados en llamadas reales",
      "Guía paso a paso para instalarse con Claude Code, sin escribir código a mano",
      "Documentación de cada pieza: qué hace, cómo se conecta, qué configurar",
      "Todo con un solo prompt de instalación",
    ],
    excludes: [
      "Soporte técnico continuo",
      "Mantenimiento ni ajustes de mi parte",
      "Las cuentas de los servicios que necesita (te digo cuáles, las contratás vos)",
      "Garantía de resultado — depende de cómo lo configures",
    ],
    why: "No a todos les sirve pagar una mensualidad por algo que pueden operar ellos mismos si tienen el conocimiento técnico. Esta versión te da exactamente lo que necesitás para hacerlo vos: el sistema real, probado, documentado — sin intermediarios.",
    disclaimer:
      "Este es un producto de autoinstalación, sin soporte incluido. Sos responsable de la configuración, el cumplimiento legal en tu jurisdicción, y la operación del sistema una vez instalado. Si en algún momento preferís que nos encarguemos de todo, podés pasarte a nuestro servicio gestionado cuando quieras.",
    ctaMessage: "Hola, quiero comprar el instalador de Sofia (agente de voz con IA) por USD 59.",
  },
];

export default function ProductosPage() {
  const [openId, setOpenId] = useState<string | null>(null);
  const active = PRODUCTS.find((p) => p.id === openId) ?? null;

  return (
    <>
      <Reveal className="max-w-[1180px] mx-auto px-6 pt-[132px] pb-[clamp(78px,11vw,150px)]">
        <p className="text-[11px] tracking-[0.3em] uppercase text-teal mb-5">Productos</p>
        <h1 className="text-[clamp(30px,4.2vw,50px)] leading-[1.12] mb-5 max-w-[20em] [text-wrap:pretty]">
          Sistemas que podés instalarte vos mismo.
        </h1>
        <p className="text-[16.5px] text-body leading-[1.75] max-w-[38em] mb-[clamp(38px,5vw,64px)]">
          Para quien prefiere tener el control técnico total en vez de un servicio gestionado. Pago
          único, código real, sin intermediarios.
        </p>
        <div className="grid gap-[clamp(18px,2.4vw,26px)] justify-center [grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),280px))]">
          {PRODUCTS.map((p, i) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setOpenId(p.id)}
              aria-haspopup="dialog"
              className="group text-left bg-white rounded-[16px] overflow-hidden border border-navy/[0.08] p-0 cursor-pointer"
            >
              <span
                className={`flex items-center justify-center aspect-[4/3] ${TINTS[i % TINTS.length]} text-navy`}
              >
                <span className="group-hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(.22,.61,.36,1)]">
                  <p.Icon />
                </span>
              </span>
              <span className="block pt-[18px] px-5 pb-[22px]">
                <span className="text-[10px] tracking-[0.2em] uppercase text-gold block">{p.n}</span>
                <h3 className="text-[17px] mt-2 mb-1 text-navy">{p.title}</h3>
                <span className="text-[13.5px] text-secondary leading-[1.55] block">{p.teaser}</span>
                <span className="flex items-center justify-between mt-3">
                  <span className="text-[13px] font-medium text-navy">{p.price}</span>
                  <span className="text-[13px] text-teal group-hover:text-navy">Ver detalle →</span>
                </span>
              </span>
            </button>
          ))}
        </div>
      </Reveal>

      {active && (
        <ProductModal
          title={active.title}
          tagline={active.tagline}
          price={active.price}
          audience={active.audience}
          includes={active.includes}
          excludes={active.excludes}
          why={active.why}
          disclaimer={active.disclaimer}
          ctaLink={waLink(active.ctaMessage)}
          onClose={() => setOpenId(null)}
        />
      )}
    </>
  );
}
