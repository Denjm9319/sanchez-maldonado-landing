import { useState } from "react";
import Reveal from "../components/Reveal";
import ProductModal from "../components/ProductModal";
import { waLink } from "../config/site";
import { useSEO } from "../hooks/useSEO";
import sofiaInstallerImg from "../assets/services/sofia-installer.webp";
import promptsPackImg from "../assets/products/prompts-alta-conversion.webp";

const PRODUCTS = [
  {
    id: "sofia-installer",
    n: "01",
    title: "Instalador de Sofia (Voz IA)",
    teaser: "El código completo para correr tu propia recepcionista de voz con IA.",
    price: "USD 99 · pago único",
    image: sofiaInstallerImg,
    tagline:
      "Con un solo comando corriendo en Claude Code activás el instalador en 1 click: solo vas siguiendo las instrucciones que te va diciendo Claude. Te doy el código completo del sistema que uso para armar agentes de voz como Sofia — vos lo configurás y lo operás con tus propias cuentas.",
    audience: [
      "Sabés usar Claude Code (o estás dispuesto a aprender).",
      "Tenés o podés crear cuentas propias en los servicios necesarios (telefonía, IA, calendario/CRM).",
      "Preferís tener el control total del sistema antes que depender de alguien mes a mes.",
      "No necesitás que alguien te resuelva los problemas — te arreglás solo con la documentación.",
    ],
    includes: [
      "Un solo comando para activar el instalador en Claude Code, siguiendo las instrucciones que te va indicando",
      "El código fuente completo del sistema",
      "Los prompts ya armados y probados en llamadas reales",
      "Documentación de cada pieza: qué hace, cómo se conecta, qué configurar",
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
    ctaMessage: "Hola, quiero comprar el instalador de Sofia (agente de voz con IA) por USD 99.",
  },
  {
    id: "prompts-alta-conversion",
    n: "02",
    title: "+150 Prompts de Alta Conversión",
    teaser: "Specs completas de páginas con efectos 3D y motion, listas para pegar en tu IA.",
    price: "USD 29 · pago único",
    image: promptsPackImg,
    tagline:
      "Más de 150 prompts que no son ideas sueltas: cada uno es la especificación completa de una página o sección (fuentes, paleta de colores, animaciones scroll-driven, preloaders, hover effects, responsive) en React + TypeScript + Tailwind CSS + Vite, lista para pegar en tu herramienta de IA y obtener un resultado profesional de una sola vez.",
    audience: [
      "Diseñadores y desarrolladores que arman landings o sitios con IA y quieren que se vean premium, no genéricos.",
      "Freelancers y agencias que necesitan entregar más rápido sin perder el nivel de detalle ni el efecto 'wow' visual.",
      "Emprendedores que arman su propia web con herramientas de IA y no saben cómo pedir efectos 3D o animaciones sin que salgan rotos.",
      "Cualquiera que ya probó pedirle 'hacé un efecto 3D lindo' a una IA y recibió algo plano, genérico o que no funcionaba.",
    ],
    includes: [
      "Más de 150 prompts, cada uno para un estilo o rubro distinto: real estate de lujo, SaaS, e-commerce, web3, fintech, dashboards, portfolios, agencias y más.",
      "Cada prompt es una especificación completa (no un efecto suelto): tipografías, paleta exacta, animaciones con sus tiempos, secciones y comportamiento responsive ya definidos.",
      "Stack consistente en los 150+: React + TypeScript + Tailwind CSS + Vite, listo para correr en Claude Code, Cursor o cualquier herramienta de generación de código con IA.",
    ],
    excludes: [
      "Soporte técnico ni corrección de tus proyectos.",
      "El código ya armado — son prompts, vos los corrés en tu propia herramienta de IA.",
      "Garantía de que un efecto se vea idéntico en toda herramienta (cada una interpreta distinto).",
      "Diseño personalizado para tu marca.",
    ],
    why: "Armar una página con animaciones scroll-driven, preloaders y efectos 3D desde cero lleva horas de prueba y error hasta que algo se vea bien y no roto. Estos son los mismos prompts que usamos nosotros para resolver eso — ya probados, con cada detalle definido, para que vos no tengas que iterar veinte veces.",
    disclaimer:
      "Es un producto digital de autoinstalación: no incluye soporte ni personalización. El resultado final depende de la herramienta de IA que uses y de cómo adaptes cada prompt a tu proyecto. Al ser un producto digital, no se aceptan devoluciones una vez entregado el acceso.",
    ctaMessage: "Hola, quiero comprar el pack de +150 prompts de alta conversión por USD 29.",
    ctaLabel: "Quiero los prompts →",
  },
];

export default function ProductosPage() {
  const [openId, setOpenId] = useState<string | null>(null);
  const active = PRODUCTS.find((p) => p.id === openId) ?? null;

  useSEO({
    title: "Productos",
    description:
      "Sistemas de IA que podés instalarte vos mismo: el instalador de Sofia, la recepcionista de voz con IA, con código real y sin intermediarios.",
    path: "/productos",
  });

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
          {PRODUCTS.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setOpenId(p.id)}
              aria-haspopup="dialog"
              className="group text-left bg-white rounded-[16px] overflow-hidden border border-navy/[0.08] p-0 cursor-pointer"
            >
              <span className="block aspect-[4/3] overflow-hidden bg-cream">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover block transition-transform duration-500 ease-[cubic-bezier(.22,.61,.36,1)] group-hover:scale-[1.03]"
                />
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
          ctaLabel={active.ctaLabel}
          onClose={() => setOpenId(null)}
        />
      )}
    </>
  );
}
