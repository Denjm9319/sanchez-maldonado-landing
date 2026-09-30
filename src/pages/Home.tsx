import { useSEO } from "../hooks/useSEO";
import Hero from "../components/Hero";
import Capabilities from "../components/Capabilities";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import { FAQ_ITEMS } from "../config/site";

export default function Home() {
  useSEO({
    title: "Mimoru Systems | Diseño y desarrollo de sitios web para pymes",
    description:
      "Diseñamos sitios web a medida, pensados para convertir visitas en consultas reales. Landing pages, sitios completos y tiendas online.",
    path: "/",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  });

  return (
    <div className="relative">
      <div className="fixed inset-0 -z-10 bg-navy" aria-hidden="true" />
      <Hero />
      <Capabilities />
      <FAQ />
      <Contact />
    </div>
  );
}
