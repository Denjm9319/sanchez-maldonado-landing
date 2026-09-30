export const SITE_URL = "https://mimoru.com.ar";
export const SITE_NAME = "Mimoru Systems";

export const WHATSAPP_NUMBER = "542254538861";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hola, vi la web de Mimoru Systems y me gustaría contarles un poco sobre mi negocio para ver qué solución podría tener sentido implementar.";

export const SOFIA_MESSAGE =
  "Hola, vi la web de Mimoru Systems y quiero conocer la demo de Sofia para mi negocio.";

export function waLink(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_LINK = waLink();
export const SOFIA_LINK = waLink(SOFIA_MESSAGE);

export const SOCIAL_LINKS = {
  instagram: "#",
  linkedin: "#",
};

export const GOOGLE_REVIEW_LINK =
  "https://www.google.com/search?kgmid=/g/11x_bxgxpt&hl=es-419&q=Mimoru+Systems&shem=epsd1,ltae,rimspwouoe&shndl=30&source=sh/x/loc/osrp/m5/1&kgs=907fe00d31e015a1&utm_source=epsd1,ltae,rimspwouoe,sh/x/loc/osrp/m5/1#irp=&lrd=0x898e9a4d4500198b:0x560b3f860747f8e,3,,,,";

export const PRICING = {
  // "web" kept for the still-committed Precios.tsx, which this session's
  // uncommitted rewrite doesn't touch — remove once that lands for real.
  web: "Desde USD 700",
  webEntry: "Desde USD 700",
  webStandard: "Desde USD 1.200",
  webTop: "Hasta USD 15.000",
  seoMonthly: "Desde USD 250/mes",
  agents: "Desde USD 330/mes + implementación",
};

export const NAV_LINKS = [
  { href: "/proyectos", label: "Proyectos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/blog", label: "Blog" },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export const FAQ_ITEMS = [
  {
    q: "¿Cuánto cuesta una web?",
    a: "Desde USD 700 si ya tenés tus textos y fotos listos, hasta USD 15.000 para un proyecto complejo y a medida. El número exacto depende del alcance — te lo damos por WhatsApp después de entender tu proyecto, sin sorpresas ni letra chica.",
  },
  {
    q: "¿Cuánto tarda la entrega?",
    a: "Depende de la necesidad del cliente y la complejidad del proyecto. Después de definir el alcance te damos un plazo concreto, sin sorpresas.",
  },
  {
    q: "¿Qué necesito mandarles para empezar?",
    a: "Textos (o una idea de qué querés decir), tu logo si tenés, y fotos si las tenés. Si no tenés nada armado, te ayudamos a definirlo igual.",
  },
  {
    q: "¿Incluye hosting y dominio?",
    a: "El hosting queda resuelto por nosotros. Del dominio nos encargamos nosotros también — compra, configuración y conexión — para que no tengas que preocuparte por nada técnico.",
  },
  {
    q: "¿Hacen tiendas online?",
    a: "Sí, armamos e-commerce con catálogo, pagos y envíos configurados para vender de verdad, no solo mostrar productos.",
  },
  {
    q: "¿Puedo pedir cambios después de entregada?",
    a: "Sí, incluimos las rondas de revisión acordadas en la propuesta antes de la entrega final. Ajustes posteriores se cotizan aparte o entran en un plan de mantenimiento mensual.",
  },
  {
    q: "¿Cómo es la forma de pago?",
    a: "El pago es 100% por adelantado, antes de arrancar con el proyecto.",
  },
  {
    q: "¿También hacen SEO o me ayudan a aparecer en las respuestas de la IA (ChatGPT, Google AI)?",
    a: "Sí — es un trabajo aparte del armado de la web, porque implica ajustes técnicos y seguimiento mes a mes, no algo que se termina el día de la entrega. Se cotiza por separado, desde USD 250/mes con un mínimo de 3 meses de trabajo y reporte mensual de resultados.",
  },
];
