import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Problem from "../components/Problem";
import Pillars from "../components/Pillars";
import Sofia from "../components/Sofia";
import OtherBusinesses from "../components/OtherBusinesses";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Reveal from "../components/Reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Pillars />
      <Sofia />
      <OtherBusinesses />
      <Reveal className="max-w-[1180px] mx-auto px-6 pb-[clamp(50px,6vw,76px)] flex flex-wrap gap-x-10 gap-y-3">
        <Link to="/proyectos#servicios" className="font-display text-[19px] text-teal hover:text-navy">
          Ver servicios →
        </Link>
        <Link to="/proyectos#proyectos" className="font-display text-[19px] text-teal hover:text-navy">
          Ver proyectos y demos →
        </Link>
        <Link to="/nosotros" className="font-display text-[19px] text-teal hover:text-navy">
          Conocé al equipo →
        </Link>
      </Reveal>
      <Pricing />
      <FAQ />
      <Contact />
    </>
  );
}
