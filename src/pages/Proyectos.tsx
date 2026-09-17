import Projects from "../components/Projects";
import { useSEO } from "../hooks/useSEO";

export default function ProyectosPage() {
  useSEO({
    title: "Proyectos",
    description:
      "Proyectos reales y demos funcionales de Mimoru Systems por rubro: sitios web, agentes de IA y automatizaciones que ya están en producción.",
    path: "/proyectos",
  });

  return (
    <div className="pt-[64px]">
      <Projects />
    </div>
  );
}
