import Reveal from "./Reveal";
import { PRICING, WHATSAPP_LINK } from "../config/site";

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-black/35 backdrop-blur-[2px] border-t border-white/10">
      <Reveal className="max-w-[1180px] mx-auto px-6 py-[clamp(78px,11vw,150px)]">
        <h2 className="font-heroDisplay text-[clamp(30px,4.2vw,50px)] leading-[1.12] mb-[clamp(38px,5vw,60px)] max-w-[22em] text-white">
          Cada proyecto se arma según lo que el negocio necesita.
        </h2>
        <div className="grid gap-[clamp(20px,2.5vw,28px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,270px),1fr))]">
          <div className="bg-white/5 border border-white/15 rounded-[20px] p-[34px] px-7 flex flex-col gap-4">
            <p className="font-heroDisplay italic text-[14.5px] text-gold">
              &ldquo;Necesito captar más oportunidades&rdquo;
            </p>
            <h3 className="font-heroDisplay text-2xl -mt-1.5 text-white">Web &amp; Conversion</h3>
            <p className="text-white/60 text-[15px] leading-[1.65] flex-1">
              Sitio premium, estructura de conversión y contenido listo para captar oportunidades.
            </p>
            <p className="font-heroDisplay text-[26px] text-white">{PRICING.web}</p>
            <a
              href="#contacto"
              className="border border-white/30 text-white text-center px-5 py-3.5 rounded-full text-[14.5px] hover:border-white hover:bg-white/10"
            >
              Consultar alcance
            </a>
          </div>
          <div className="bg-gold/10 border border-gold/40 text-cream rounded-[20px] p-[34px] px-7 flex flex-col gap-4">
            <p className="font-heroDisplay italic text-[14.5px] text-gold">
              &ldquo;Necesito atender mejor las consultas&rdquo;
            </p>
            <h3 className="font-heroDisplay text-2xl text-cream -mt-1.5">AI Agents</h3>
            <p className="text-cream/70 text-[15px] leading-[1.65] flex-1">
              Agentes de chat o voz —incluida Sofia— entrenados con la información de tu negocio.
            </p>
            <p className="font-heroDisplay text-[26px] text-gold">{PRICING.agents}</p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-navy text-center px-5 py-3.5 rounded-full text-[14.5px] hover:bg-cream"
            >
              Pedir una demo
            </a>
          </div>
          <div className="bg-white/5 border border-white/15 rounded-[20px] p-[34px] px-7 flex flex-col gap-4">
            <p className="font-heroDisplay italic text-[14.5px] text-gold">
              &ldquo;Necesito integrar todo el proceso&rdquo;
            </p>
            <h3 className="font-heroDisplay text-2xl -mt-1.5 text-white">Growth Systems</h3>
            <p className="text-white/60 text-[15px] leading-[1.65] flex-1">
              Web + Ads + IA + automatizaciones funcionando como un solo sistema comercial.
            </p>
            <p className="font-heroDisplay text-[26px] text-white">Proyecto personalizado</p>
            <a
              href="#contacto"
              className="border border-white/30 text-white text-center px-5 py-3.5 rounded-full text-[14.5px] hover:border-white hover:bg-white/10"
            >
              Hablemos del proyecto
            </a>
          </div>
        </div>
        <p className="mt-[26px] text-sm text-white/50 max-w-[46em] leading-[1.7]">
          El precio depende del alcance, integraciones, volumen y necesidades del negocio.
        </p>
      </Reveal>
    </section>
  );
}
