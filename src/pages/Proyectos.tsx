import Services from "../components/Services";
import Projects from "../components/Projects";
import { useSEO } from "../hooks/useSEO";

export default function ProyectosPage() {
  useSEO({
    title: "Servicios y proyectos",
    description:
      "Sitios web, agentes de IA y automatizaciones que ya están en producción: proyectos reales y demos funcionales de DeXa por rubro.",
    path: "/proyectos",
  });

  return (
    <div className="pt-[64px]">
      <Services />
      <Projects />
    </div>
  );
}
