import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import { waLink } from "../config/site";

const INSTALLER_WA_LINK = waLink(
  "Hola, quiero comprar el instalador de Sofia (agente de voz con IA) por USD 59."
);

function IconCheck() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M4 12.5l5 5L20 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconCross() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}

const AUDIENCE = [
  "Sabés usar Claude Code (o estás dispuesto a aprender).",
  "Tenés o podés crear cuentas propias en los servicios necesarios (telefonía, IA, calendario/CRM).",
  "Preferís tener el control total del sistema antes que depender de alguien mes a mes.",
  "No necesitás que alguien te resuelva los problemas — te arreglás solo con la documentación.",
];

const INCLUDES = [
  "El código fuente completo del sistema",
  "Los prompts ya armados y probados en llamadas reales",
  "Una guía paso a paso pensada para instalarse con Claude Code, sin tener que escribir código a mano",
  "Documentación de cada pieza: qué hace, cómo se conecta, qué configurar",
  "Todo con un solo prompt de instalación",
];

const EXCLUDES = [
  "Soporte técnico continuo",
  "Mantenimiento ni ajustes de mi parte",
  "Las cuentas de los servicios que necesita para funcionar (te digo cuáles, las contratás vos, a tu nombre)",
  "Garantía de resultado — la calidad de la instalación depende de cómo lo configures",
];

export default function ProductosPage() {
  return (
    <div className="pt-[64px]">
      <Reveal className="max-w-[1180px] mx-auto px-6 pt-[68px] pb-[clamp(60px,8vw,100px)]">
        <p className="text-[11px] tracking-[0.3em] uppercase text-teal mb-5">Productos</p>
        <h1 className="text-[clamp(30px,4.2vw,50px)] leading-[1.14] mb-6 max-w-[18em] [text-wrap:pretty]">
          ¿Sos técnico? Instalate tu propia recepcionista de IA.
        </h1>
        <p className="text-[clamp(16px,1.5vw,19px)] leading-relaxed text-body max-w-[42em] mb-9">
          Te doy el código completo del sistema que uso para armar agentes de voz como Sofia. Vos lo
          instalás, lo configurás y lo operás con tus propias cuentas.
        </p>
        <a
          href={INSTALLER_WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex bg-navy text-cream px-7 py-4 rounded-full text-[15px] font-medium hover:bg-teal"
        >
          Quiero el código →
        </a>
      </Reveal>

      <Reveal className="border-t border-navy/[0.09]" style={{ display: "block" }}>
        <div className="max-w-[1180px] mx-auto px-6 py-[clamp(60px,8vw,96px)]">
          <p className="text-[11px] tracking-[0.3em] uppercase text-teal mb-5">Para quién es esto</p>
          <h2 className="text-[clamp(24px,3vw,34px)] leading-[1.2] mb-8 max-w-[20em] [text-wrap:pretty]">
            Esta opción no es para todos — es para vos si:
          </h2>
          <ul className="grid gap-4 max-w-[42em] mb-8">
            {AUDIENCE.map((item) => (
              <li key={item} className="flex gap-3 items-start text-[15px] leading-[1.6] text-body">
                <span className="mt-0.5 shrink-0 text-teal">
                  <IconCheck />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-[14.5px] text-secondary">
            Si preferís que nos encarguemos de todo,{" "}
            <Link to="/proyectos#servicios" className="text-teal hover:text-navy underline underline-offset-2">
              esa es nuestra otra opción →
            </Link>
          </p>
        </div>
      </Reveal>

      <section className="bg-creamDeep border-t border-b border-navy/[0.08]">
        <Reveal className="max-w-[1180px] mx-auto px-6 py-[clamp(60px,8vw,96px)]">
          <p className="text-[11px] tracking-[0.3em] uppercase text-teal mb-5">Qué incluye</p>
          <h2 className="text-[clamp(24px,3vw,34px)] leading-[1.2] mb-10 max-w-[22em] [text-wrap:pretty]">
            Todo lo que necesitás para instalarlo vos mismo.
          </h2>
          <div className="grid gap-[clamp(20px,2.5vw,28px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr))]">
            <div className="bg-white border border-navy/[0.09] rounded-[20px] p-[30px] px-7">
              <h3 className="text-[13px] tracking-[0.12em] uppercase text-navy mb-5">Incluye</h3>
              <ul className="grid gap-3.5">
                {INCLUDES.map((item) => (
                  <li key={item} className="flex gap-3 items-start text-[14.5px] leading-[1.6] text-body">
                    <span className="mt-0.5 shrink-0 text-teal">
                      <IconCheck />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-navy/[0.09] rounded-[20px] p-[30px] px-7">
              <h3 className="text-[13px] tracking-[0.12em] uppercase text-navy mb-5">No incluye</h3>
              <ul className="grid gap-3.5">
                {EXCLUDES.map((item) => (
                  <li key={item} className="flex gap-3 items-start text-[14.5px] leading-[1.6] text-secondary">
                    <span className="mt-0.5 shrink-0 text-navy/40">
                      <IconCross />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      <Reveal className="max-w-[1180px] mx-auto px-6 py-[clamp(60px,8vw,96px)]">
        <p className="text-[11px] tracking-[0.3em] uppercase text-teal mb-5">Por qué existe esta opción</p>
        <p className="text-[16px] leading-[1.8] text-body max-w-[42em]">
          No a todos les sirve pagar una mensualidad por algo que pueden operar ellos mismos si tienen el
          conocimiento técnico. Esta versión te da exactamente lo que necesitás para hacerlo vos: el
          sistema real, probado, documentado — sin intermediarios.
        </p>
      </Reveal>

      <section className="bg-navy text-cream">
        <Reveal className="max-w-[1180px] mx-auto px-6 py-[clamp(60px,8vw,96px)]">
          <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-5">Precio</p>
          <p className="font-display text-[clamp(36px,5vw,54px)] mb-3">Pago único: USD 59</p>
          <p className="text-cream/78 text-[15.5px] leading-[1.7] max-w-[40em] mb-9">
            Acceso de por vida al código y la documentación. Los costos de los servicios que uses para
            operarlo (telefonía, IA, etc.) corren por tu cuenta, directo con cada proveedor.
          </p>
          <a
            href={INSTALLER_WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-gold text-navy px-7 py-4 rounded-full text-[15px] font-medium hover:bg-cream"
          >
            Quiero el código →
          </a>
        </Reveal>
      </section>

      <Reveal className="max-w-[1180px] mx-auto px-6 py-[clamp(50px,7vw,80px)]">
        <div className="border-l-[3px] border-gold bg-navy/[0.04] rounded-r-[12px] p-[26px] px-7 max-w-[46em]">
          <p className="text-[11px] tracking-[0.15em] uppercase text-navy/60 mb-3">Aviso importante</p>
          <p className="text-[14.5px] leading-[1.7] text-secondary">
            Este es un producto de autoinstalación, sin soporte incluido. Sos responsable de la
            configuración, el cumplimiento legal en tu jurisdicción, y la operación del sistema una vez
            instalado. Si en algún momento preferís que nos encarguemos de todo, podés pasarte a nuestro
            servicio gestionado cuando quieras.
          </p>
        </div>
      </Reveal>
    </div>
  );
}
