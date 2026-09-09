export const WHATSAPP_NUMBER = "542254538861";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hola, vi la web de DeXa y me gustaría contarles un poco sobre mi negocio para ver qué solución podría tener sentido implementar.";

export const SOFIA_MESSAGE =
  "Hola, vi la web de DeXa y quiero conocer la demo de Sofia para mi negocio.";

export function waLink(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_LINK = waLink();
export const SOFIA_LINK = waLink(SOFIA_MESSAGE);

export const FORM_ENDPOINT = "https://formspree.io/f/mkjnvaql";

export const CONTACT_EMAIL = "JavierMD135@gmail.com";

export const SOCIAL_LINKS = {
  instagram: "#",
  linkedin: "#",
};

export const PRICING = {
  web: "Desde USD 1200",
  agents: "Desde USD 330/mes + implementación",
};

export const NAV_LINKS = [
  { href: "/proyectos#servicios", label: "Servicios" },
  { href: "/#sofia", label: "Sofia" },
  { href: "/proyectos#proyectos", label: "Proyectos" },
  { href: "/productos", label: "Productos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/nosotros#proceso", label: "Cómo trabajamos" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contacto", label: "Contacto" },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export const SERVICE_CHIPS = [
  "Web",
  "Ads",
  "WhatsApp IA",
  "Voz IA",
  "Sofia",
  "Automatización",
  "AI Creative",
  "No estoy seguro",
];

export const RUBROS = [
  "Clínica dental",
  "Clínica estética",
  "Inmobiliaria",
  "Gimnasio",
  "Hotel",
  "Concesionaria",
  "Servicios profesionales",
  "Ecommerce",
  "Otro",
];

export const FAQ_ITEMS = [
  {
    q: "¿Trabajan solo con clínicas?",
    a: "No. Sofia está especializada en clínicas dentales y estéticas, pero trabajamos con inmobiliarias, gimnasios, hoteles, concesionarias y servicios profesionales.",
  },
  {
    q: "¿Un agente de IA reemplaza a mi equipo?",
    a: "No. Se ocupa de lo repetitivo y de los horarios sin cobertura, para que tu equipo dedique tiempo a las conversaciones que realmente lo necesitan.",
  },
  {
    q: "¿Se integra con WhatsApp?",
    a: "Sí, además de Instagram, Messenger y Telegram. También podemos conectar tu agenda y las herramientas que ya usás.",
  },
  {
    q: "¿También administran Meta Ads?",
    a: "Sí. Planificamos, producimos las piezas y gestionamos las campañas, siempre conectadas al sistema que atiende esas consultas.",
  },
  {
    q: "¿Puedo contratar solo una web?",
    a: "Sí. Muchos proyectos empiezan por la web y suman agentes o automatizaciones más adelante.",
  },
  {
    q: "¿Puedo probar Sofia?",
    a: "Sí. Escribinos por WhatsApp y coordinamos una demo con un escenario parecido al de tu negocio.",
  },
  {
    q: "¿Cuánto demora una implementación?",
    a: "Depende del alcance y de las integraciones. Después de entender el proyecto te damos un plazo concreto, sin sorpresas.",
  },
];
