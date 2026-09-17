import Services from "../components/Services";
import { useSEO } from "../hooks/useSEO";

export default function ServiciosPage() {
  useSEO({
    title: "Servicios",
    description:
      "Websites, agentes de IA para chat y voz, y automatizaciones — un sistema pensado para atender y convertir más clientes, no una lista de servicios sueltos.",
    path: "/servicios",
  });

  return (
    <div className="pt-[64px]">
      <Services />
    </div>
  );
}
