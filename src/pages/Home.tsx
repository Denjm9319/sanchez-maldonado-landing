import { Link } from "react-router-dom";
import { useSEO } from "../hooks/useSEO";
import Hero from "../components/Hero";
import Sofia from "../components/Sofia";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Reveal from "../components/Reveal";
import ScrollVideo from "../components/ScrollVideo";
import heroVideo from "../assets/video/hero-aether.mp4";

export default function Home() {
  useSEO({
    title: "DeXa | Agentes de IA, WhatsApp y webs que atienden por vos",
    description:
      "Diseñamos sitios web, campañas, agentes de IA y automatizaciones que ayudan a negocios a atraer, atender y convertir más clientes.",
    path: "/",
  });

  return (
    <div className="relative">
      <div className="fixed inset-0 -z-10" aria-hidden="true">
        <ScrollVideo src={heroVideo} />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      <Hero />
      <Sofia />
      <Reveal className="max-w-[1180px] mx-auto px-6 pb-[clamp(50px,6vw,76px)] flex flex-wrap gap-x-10 gap-y-3">
        <Link
          to="/proyectos#servicios"
          className="font-heroDisplay text-[19px] text-white/70 hover:text-gold"
        >
          Ver servicios →
        </Link>
        <Link
          to="/proyectos#proyectos"
          className="font-heroDisplay text-[19px] text-white/70 hover:text-gold"
        >
          Ver proyectos y demos →
        </Link>
        <Link to="/nosotros" className="font-heroDisplay text-[19px] text-white/70 hover:text-gold">
          Conocé al equipo →
        </Link>
      </Reveal>
      <Pricing />
      <FAQ />
      <Contact />
    </div>
  );
}
