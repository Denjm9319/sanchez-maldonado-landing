import Reveal from "./Reveal";
import { PRICING, WHATSAPP_LINK } from "../config/site";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-creamDeep border-t border-navy/[0.08]">
      <Reveal className="max-w-[1180px] mx-auto px-6 py-[clamp(78px,11vw,150px)]">
        <h2 className="text-[clamp(30px,4.2vw,50px)] leading-[1.12] mb-[clamp(38px,5vw,60px)] max-w-[22em]">
          Cada proyecto se arma según lo que el negocio necesita.
        </h2>
        <div className="grid gap-[clamp(20px,2.5vw,28px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,270px),1fr))]">
          <div className="bg-white border border-navy/[0.09] rounded-[20px] p-[34px] px-7 flex flex-col gap-4">
            <p className="font-display italic text-[14.5px] text-gold">
              &ldquo;Necesito captar más oportunidades&rdquo;
            </p>
            <h3 className="text-2xl -mt-1.5">Web &amp; Conversion</h3>
            <p className="text-secondary text-[15px] leading-[1.65] flex-1">
              Sitio premium, estructura de conversión y contenido listo para captar oportunidades.
            </p>
            <p className="font-display text-[26px]">{PRICING.web}</p>
            <a
              href="#contacto"
              className="bg-navy text-cream text-center px-5 py-3.5 rounded-full text-[14.5px] hover:bg-teal"
            >
              Consultar alcance
            </a>
          </div>
          <div className="bg-navy text-cream rounded-[20px] p-[34px] px-7 flex flex-col gap-4">
            <p className="font-display italic text-[14.5px] text-gold">
              &ldquo;Necesito atender mejor las consultas&rdquo;
            </p>
            <h3 className="text-2xl text-cream -mt-1.5">AI Agents</h3>
            <p className="text-cream/78 text-[15px] leading-[1.65] flex-1">
              Agentes de chat o voz —incluida Sofia— entrenados con la información de tu negocio.
            </p>
            <p className="font-display text-[26px] text-gold">{PRICING.agents}</p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-navy text-center px-5 py-3.5 rounded-full text-[14.5px] hover:bg-cream"
            >
              Pedir una demo
            </a>
          </div>
          <div className="bg-white border border-navy/[0.09] rounded-[20px] p-[34px] px-7 flex flex-col gap-4">
            <p className="font-display italic text-[14.5px] text-gold">
              &ldquo;Necesito integrar todo el proceso&rdquo;
            </p>
            <h3 className="text-2xl -mt-1.5">Growth Systems</h3>
            <p className="text-secondary text-[15px] leading-[1.65] flex-1">
              Web + Ads + IA + automatizaciones funcionando como un solo sistema comercial.
            </p>
            <p className="font-display text-[26px]">Proyecto personalizado</p>
            <a
              href="#contacto"
              className="bg-navy text-cream text-center px-5 py-3.5 rounded-full text-[14.5px] hover:bg-teal"
            >
              Hablemos del proyecto
            </a>
          </div>
        </div>
        <p className="mt-[26px] text-sm text-secondary max-w-[46em] leading-[1.7]">
          El precio depende del alcance, integraciones, volumen y necesidades del negocio.
        </p>
      </Reveal>
    </section>
  );
}
