import { useMemo, useState } from "react";
import Reveal from "./Reveal";
import ConceptModal from "./ConceptModal";
import DragRow from "./DragRow";
import CategoryChips from "./CategoryChips";
import zenithShot from "../assets/projects/zenith-shot.png";
import auraShot from "../assets/projects/aura-shot.png";
import securifyShot from "../assets/projects/securify-shot.png";
import dental2Shot from "../assets/projects/dental2-shot.png";
import certboostShot from "../assets/projects/certboost-shot.png";
import blindGlamourShot from "../assets/projects/blind-glamour-shot.webp";
import orvenShot from "../assets/projects/orven-shot.webp";
import sentidoDiarioShot from "../assets/projects/sentido-diario-shot.webp";
import draTaniaShot from "../assets/projects/dra-tania-shot.webp";
import arcariSilvinaShot from "../assets/projects/arcari-silvina-shot.webp";
import marcelaBritoShot from "../assets/projects/marcela-brito-shot.webp";
import dentaShot from "../assets/apps/denta-shot.webp";
import terraelixShot from "../assets/apps/terraelix-shot.webp";
import soulCanvasShot from "../assets/apps/soulcanvas-shot.webp";
import learnHubShot from "../assets/apps/learnhub-shot.webp";
import cozyPawsShot from "../assets/apps/cozypaws-shot.webp";
import nexarAppShot from "../assets/apps/nexar-shot.webp";
import vitalisShot from "../assets/apps/vitalis-shot.webp";
import stearyShot from "../assets/apps/steary-shot.webp";
import dentaWebShot from "../assets/projects/denta-web-shot.webp";
import cozyPawsWebShot from "../assets/projects/cozypaws-web-shot.webp";
import uiRocketShot from "../assets/projects/uirocket-shot.webp";
import learnlyShot from "../assets/projects/learnly-shot.webp";
import nimbusGridShot from "../assets/projects/nimbus-grid-shot.png";
import bakeryFacilitiesShot from "../assets/projects/bakery-facilities-shot.webp";
import estudioCobreShot from "../assets/projects/estudio-cobre-shot.png";
import bentleyShot from "../assets/projects/bentley-shot.png";
import costaSerenadeShot from "../assets/projects/costa-serenade-shot.webp";
import veloraShot from "../assets/projects/velora-shot.png";
import velarShot from "../assets/projects/velar-shot.png";
import aetherLaneShot from "../assets/projects/aether-lane-shot.webp";
import bespokeArchitectureShot from "../assets/projects/bespoke-architecture-shot.png";
import hungryTigerShot from "../assets/projects/hungry-tiger-shot.png";
import novaAiShot from "../assets/projects/nova-ai-shot.png";
import viktorOddyShot from "../assets/projects/viktor-oddy-shot.png";
import yogaCoachShot from "../assets/projects/yoga-coach-shot.png";
import vitaraShot from "../assets/projects/vitara-shot.png";

const REAL_PROJECTS = [
  {
    id: "sentido-diario",
    category: "salud",
    title: "Sentido Diario",
    thumb: sentidoDiarioShot,
    alt: "Sitio real de Sentido Diario, clínica de estética facial",
    rubro: "Estética facial y bienestar",
    objetivo: "Generar reservas de tratamientos y vender productos de skincare directo por WhatsApp.",
    description:
      "Landing de clínica de estética con catálogo de tratamientos y productos, comparativas de antes/después y turnos coordinados por WhatsApp.",
    capabilities: ["Web & Conversion", "Catálogo de productos", "Agendamiento por WhatsApp"],
    url: "https://sentidodiario.com/",
  },
  {
    id: "dra-tania",
    category: "salud",
    title: "Dra. Tania Mielnikowicz",
    thumb: draTaniaShot,
    alt: "Sitio real de la Dra. Tania Mielnikowicz, ginecóloga",
    rubro: "Ginecología y medicina reproductiva",
    objetivo: "Generar turnos mostrando trayectoria y prueba social real antes de pedir el contacto.",
    description:
      "Sitio profesional para una ginecóloga especializada en fertilidad, con formación, testimonios verificados y turnos coordinados por WhatsApp en sus tres consultorios.",
    capabilities: ["Web & Conversion", "Prueba social real", "Agendamiento por WhatsApp"],
    url: "https://drataniamielnikowicz.vercel.app/",
  },
  {
    id: "arcari-silvina",
    category: "salud",
    title: "Silvina Arcari",
    thumb: arcariSilvinaShot,
    alt: "Sitio real de Silvina Arcari, psicóloga y sexóloga clínica",
    rubro: "Psicología clínica y sexología",
    objetivo: "Resolver objeciones comunes antes de la consulta y agendar sesiones online o presenciales.",
    description:
      "Sitio profesional para una psicóloga y sexóloga clínica, con el enfoque explicado en detalle, testimonios y FAQ que despeja las dudas más frecuentes antes de agendar.",
    capabilities: ["Web & Conversion", "FAQ de objeciones", "Agendamiento por WhatsApp"],
    url: "https://arcarisilvina.com/",
  },
  {
    id: "marcela-brito",
    category: "salud",
    title: "Dra. Marcela Brito",
    thumb: marcelaBritoShot,
    alt: "Sitio real de la Dra. Marcela Brito, odontóloga en Valeria del Mar",
    rubro: "Odontología",
    objetivo: "Generar turnos por WhatsApp mostrando trayectoria y atendiendo tanto a vecinos como a turistas con urgencias.",
    description:
      "Sitio profesional para una odontóloga con más de 20 años de trayectoria en Valeria del Mar, con tratamientos, ubicación con mapa, coberturas aceptadas y turnos coordinados por WhatsApp.",
    capabilities: ["Web & Conversion", "Ubicación con mapa", "Agendamiento por WhatsApp"],
    url: "https://dramarcelabrito.vercel.app/",
  },
];

const CONCEPTS = [
  {
    id: "zenith",
    category: "inmobiliaria",
    title: "Zenith Realty",
    thumb: zenithShot,
    alt: "Concept de landing para inmobiliaria de lujo",
    rubro: "Inmobiliaria de lujo",
    objetivo: "Captar consultas calificadas sobre propiedades premium y agendar una llamada con un asesor.",
    description:
      "Landing de inmobiliaria boutique con catálogo de propiedades exclusivas, fichas con precio, ubicación y superficie, y un CTA directo para agendar una llamada.",
    capabilities: ["Web & Conversion", "Catálogo de propiedades", "Agendamiento"],
    url: "https://zenith-haven-build.lovable.app/",
  },
  {
    id: "aura",
    category: "salud",
    title: "Aura Wellness",
    thumb: auraShot,
    alt: "Concept de landing para telemedicina y bienestar",
    rubro: "Salud y bienestar / telemedicina",
    objetivo: "Vender planes de tratamiento por suscripción y calificar al paciente antes de la consulta.",
    description:
      "Landing tipo e-commerce de telesalud, con catálogo de tratamientos, precios claros, reseñas y un flujo de \"ver si calificás\" antes de avanzar.",
    capabilities: ["Web & Conversion", "Prueba social", "Flujo de calificación"],
    url: "https://aura-wellness-layout.lovable.app/",
  },
  {
    id: "securify",
    category: "saas",
    title: "Securify",
    thumb: securifyShot,
    alt: "Concept de landing para producto SaaS",
    rubro: "SaaS / Tecnología B2B",
    objetivo: "Convertir visitantes en registros mostrando métricas de confianza y credibilidad del producto.",
    description:
      "Landing de producto SaaS enfocada en confianza, con estadísticas de uso destacadas y un único CTA de registro.",
    capabilities: ["Web & Conversion", "Social proof numérico", "CTA de conversión"],
    url: "https://secure-start-show.lovable.app/",
  },
  {
    id: "dental2",
    category: "salud",
    title: "Dental Health",
    thumb: dental2Shot,
    alt: "Concept de landing para clínica dental",
    rubro: "Clínica dental",
    objetivo: "Generar consultas y citas para tratamientos estéticos y de urgencia.",
    description:
      "Landing de clínica dental con galería de casos, servicios (carillas, coronas, blanqueamiento, implantes) y llamadas a la acción para pedir cita o consulta gratuita.",
    capabilities: ["Web & Conversion", "Galería de casos", "Agendamiento"],
    url: "https://lucid-dental-layout.lovable.app/",
  },
  {
    id: "certboost",
    category: "edtech",
    title: "Design Rocket Certificates",
    thumb: certboostShot,
    alt: "Concept de landing para certificaciones online",
    rubro: "Edtech / Certificaciones online",
    objetivo: "Convertir visitantes en solicitudes de certificado, apoyándose en el respaldo de evaluadores expertos.",
    description:
      "Landing de producto para certificar habilidades de diseño, con propuesta de valor clara, evaluación por expertos y un sello de verificación pública.",
    capabilities: ["Web & Conversion", "Prueba social", "CTA de conversión"],
    url: "https://certificate-booster.lovable.app/",
  },
  {
    id: "blind-glamour",
    category: "moda",
    title: "Blind by Glamour",
    thumb: blindGlamourShot,
    alt: "Concept de landing para marca de anteojos de alta gama",
    rubro: "Moda / Eyewear de lujo",
    objetivo: "Generar deseo por la marca y llevar a la compra de un producto de alto valor.",
    description:
      "Landing editorial para una marca de anteojos, con video de fondo que se controla con el scroll (se pausa y avanza cuadro a cuadro según bajás la página) y una card de producto que crece a medida que scrolleás.",
    capabilities: ["Web & Conversion", "Scroll-video a medida", "Ficha de producto"],
    url: "https://blind-by-glamour.vercel.app/",
  },
  {
    id: "orven",
    category: "moda",
    title: "Orven",
    thumb: orvenShot,
    alt: "Concept de landing para marca de anteojos de rendimiento",
    rubro: "Deportivo / Eyewear de performance",
    objetivo: "Comunicar especificaciones técnicas premium y generar deseo de compra.",
    description:
      "Landing con dos videos de fondo que se controlan con el scroll (uno se apaga con un cruce suave mientras el otro aparece) y paneles de especificaciones técnicas que entran y salen de pantalla a medida que scrolleás, con textos que se revelan palabra por palabra.",
    capabilities: ["Web & Conversion", "Doble scroll-video", "Paneles de specs"],
    url: "https://orven-rho.vercel.app/",
  },
  {
    id: "denta-web",
    category: "salud",
    title: "Denta Estética",
    thumb: dentaWebShot,
    alt: "Concept de landing para clínica dental estética",
    rubro: "Clínica dental estética",
    objetivo: "Generar consultas destacando un tratamiento puntual con una narrativa visual clara.",
    description:
      "Landing de pantalla completa sin scroll, con un video de fondo real de una sonrisa y una caja de anotación flotante que señala con una línea conectora animada un tratamiento puntual.",
    capabilities: ["Web & Conversion", "Interacción por viewport", "Menú móvil a medida"],
    url: "https://aesthetic-dental-clinic-sigma.vercel.app/",
  },
  {
    id: "cozy-paws-web",
    category: "ecommerce",
    title: "CozyPaws Store",
    thumb: cozyPawsWebShot,
    alt: "Concept de landing e-commerce para tienda de mascotas",
    rubro: "E-commerce / Mascotas",
    objetivo: "Vender productos para mascotas con una primera impresión visual fuerte y sin fricción.",
    description:
      "Landing de una sola pantalla sin scroll, donde perros y gatos se asoman sobre paneles de color con el título grande entre ellos, y tarjetas de producto y reseñas en video flotando a los costados.",
    capabilities: ["Landing sin scroll", "Animaciones de entrada", "E-commerce"],
    url: "https://cozy-paws-web.vercel.app/",
  },
  {
    id: "ui-rocket",
    category: "saas",
    title: "UI Rocket",
    thumb: uiRocketShot,
    alt: "Concept de landing para SaaS educativo",
    rubro: "SaaS / Educación en IA",
    objetivo: "Convertir visitantes en alumnos de un curso mostrando el producto con una estética premium.",
    description:
      "Landing con hero a pantalla completa donde un video de fondo, un dashboard flotante con vidrio líquido y una imagen en primer plano se mueven a distinta velocidad con el scroll, generando profundidad tipo parallax de cine.",
    capabilities: ["Scroll parallax a medida", "Web & Conversion", "Chat simulado"],
    url: "https://growth-marketing-saas.vercel.app/",
  },
  {
    id: "learnly",
    category: "edtech",
    title: "Learnly",
    thumb: learnlyShot,
    alt: "Concept de landing para plataforma educativa",
    rubro: "Edtech",
    objetivo: "Mostrar el catálogo de cursos de forma atractiva y llevar a la inscripción.",
    description:
      "Landing de plataforma educativa con un acordeón de tarjetas de cursos que se expanden al pasar el mouse, revelando módulo, cantidad de temas y categoría de cada uno.",
    capabilities: ["Micro-interacciones CSS", "Menú móvil animado", "Carrusel táctil"],
    url: "https://learnly-web-tan.vercel.app/",
  },
  {
    id: "nimbus-grid",
    category: "saas",
    title: "Nimbus Grid",
    thumb: nimbusGridShot,
    alt: "Concept de landing para plataforma de almacenamiento en la nube",
    rubro: "SaaS / Infraestructura en la nube B2B",
    objetivo: "Transmitir seriedad técnica a equipos de IT y procurement para que confíen su almacenamiento a la plataforma.",
    description:
      "Landing de producto SaaS con una consola con pestañas que tipea comandos en vivo, un acordeón de secciones que se apila a medida que scrolleás, barras de precios que respiran con el scroll y un cubo 3D que explota en fragmentos al hacer clic.",
    capabilities: ["Acordeón scroll-driven", "Cubo 3D interactivo", "Consola con efecto de tipeo"],
    url: "https://nimbus-grid-rosy.vercel.app/",
  },
  {
    id: "bakery-facilities",
    category: "turismo",
    title: "Bakery Facilities",
    thumb: bakeryFacilitiesShot,
    alt: "Concept de landing para empresa B2B de soluciones de panadería",
    rubro: "Panadería industrial / Foodservice B2B",
    objetivo: "Transmitir escala y calidad premium a compradores B2B (hoteles, restaurantes, retail) para que elijan al proveedor.",
    description:
      "Landing con un slider de video a pantalla completa que se revela con el scroll (cada video crece desde una elipse hasta cubrir toda la pantalla), una galería de productos tipo masonry con animación de entrada y una sección institucional con texto que se ilumina palabra por palabra a medida que scrolleás.",
    capabilities: ["Scroll-video con clip-path", "Galería masonry animada", "Web & Conversion"],
    url: "https://bakery-facilities-nu.vercel.app/",
  },
  {
    id: "calculadora-dexa",
    category: "saas",
    title: "Calculadora Mimoru Systems",
    thumb: estudioCobreShot,
    alt: "Calculadora de presupuesto de Mimoru Systems para sitios web",
    rubro: "Calculadora de presupuesto propia",
    objetivo: "Que un visitante calcule solo, en segundos, cuánto costaría su sitio con Mimoru Systems y vea por qué conviene frente a una agencia o un freelancer.",
    description:
      "Calculadora interactiva de presupuesto con selector de tipo de servicio, slider de cantidad de páginas, extras de contenido y SEO, y urgencia de entrega — recalcula el precio en vivo desde el piso de USD 599 y lo compara al instante con el costo típico de una agencia y de un freelancer.",
    capabilities: ["Calculadora interactiva", "Precio en vivo", "Web & Conversion"],
    url: "https://estudio-cobre.vercel.app/",
  },
  {
    id: "bentley",
    category: "moda",
    title: "Beyond The Collection",
    thumb: bentleyShot,
    alt: "Concept de landing para colección de perfumes de lujo",
    rubro: "Perfumería / Lujo",
    objetivo: "Generar deseo por una colección de perfumes premium y llevar a la compra sin fricción.",
    description:
      "Landing editorial de pantalla completa con un video de fondo, un reveal en forma de elipse que se abre con el scroll y una vitrina circular de frascos que gira y se detiene en cada fragancia con su nombre y descripción.",
    capabilities: ["Scroll-reveal a medida", "Vitrina circular animada", "Web & Conversion"],
    url: "https://bentley-fragrance.vercel.app/",
  },
  {
    id: "costa-serenade",
    category: "turismo",
    title: "Costa Serenade",
    thumb: costaSerenadeShot,
    alt: "Concept de landing para un grupo de nado en aguas abiertas en la costa de Liguria",
    rubro: "Turismo / Experiencias de nado en aguas abiertas",
    objetivo: "Transmitir una identidad de marca editorial y generar curiosidad para sumarse al grupo.",
    description:
      "Landing cinematográfica de una sola página para un grupo de nado en aguas abiertas, con un video de fondo que se scrubea cuadro a cuadro con el scroll, una apertura diagonal que revela un segundo video en loop, y un título que cambia de idioma letra por letra a medida que bajás.",
    capabilities: ["Scroll-video cuadro a cuadro", "Apertura diagonal animada", "Tipografía cinética"],
    url: "https://costa-serenade.vercel.app/",
  },
  {
    id: "velora",
    category: "inmobiliaria",
    title: "Velora",
    thumb: veloraShot,
    alt: "Concept de landing para inmobiliaria de lujo con galería scroll-driven",
    rubro: "Inmobiliaria de lujo / Inversores internacionales",
    objetivo: "Transmitir una identidad editorial de altísima gama y generar contacto calificado de inversores.",
    description:
      "Landing inmobiliaria de lujo con una intro animada, un menú inferior que se transforma de barra a botón circular, y una galería que se controla con el scroll: las fotos de propiedades escalan desde el centro una sobre otra hasta que la pantalla se funde de negro a blanco para cerrar con el mensaje de marca.",
    capabilities: ["Galería scroll-driven", "Menú morphing animado", "Splash intro con video"],
    url: "https://velora-orpin-psi.vercel.app/",
  },
  {
    id: "velar",
    category: "inmobiliaria",
    title: "Velar.",
    thumb: velarShot,
    alt: "Concept de landing para marca inmobiliaria de lujo con casa animada por scroll",
    rubro: "Inmobiliaria de lujo / Residencias premium",
    objetivo: "Posicionar la marca como curadora de residencias irreemplazables y generar consultas de alto valor.",
    description:
      "Landing inmobiliaria con preloader tipo máquina de escribir, una foto de mansión que flota sobre la página y escala mientras subís el scroll hasta fundirse con una sección oscura de estadísticas, y una galería de video que se expande al pasar el mouse por cada propiedad.",
    capabilities: ["Casa animada por scroll", "Preloader typewriter", "Galería de video hover-expand"],
    url: "https://velar-sable.vercel.app/",
  },
  {
    id: "aether-lane",
    category: "inmobiliaria",
    title: "Aether Lane",
    thumb: aetherLaneShot,
    alt: "Concept de landing para inmobiliaria de lujo con parallax de profundidad y texto que se ilumina con el scroll",
    rubro: "Inmobiliaria de lujo / Bienes raíces internacionales",
    objetivo: "Transmitir una identidad aspiracional y despertar el deseo de agendar una consulta privada.",
    description:
      "Landing inmobiliaria con tres capas de imagen (cielo, torre y montaña) que se mueven a distinta velocidad con el scroll para generar profundidad cinematográfica, un párrafo que se ilumina letra por letra a medida que bajás, y dos cintas de logos que corren en loop infinito en direcciones opuestas.",
    capabilities: ["Parallax multicapa", "Texto que se ilumina con el scroll", "Web & Conversion"],
    url: "https://aether-lane-bice.vercel.app/",
  },
  {
    id: "bespoke-architecture",
    category: "inmobiliaria",
    title: "Bespoke Architecture Studio",
    thumb: bespokeArchitectureShot,
    alt: "Concept de landing para estudio de arquitectura de residencias de lujo",
    rubro: "Arquitectura / Residencias de lujo",
    objetivo: "Transmitir una identidad minimalista y editorial, y generar consultas para diseñar un proyecto a medida.",
    description:
      "Landing minimalista en blanco y negro para un estudio de arquitectura, con una marquesina de imágenes de proyectos que se desliza sola y también se puede arrastrar con el mouse, con física de inercia real, enmarcada por máscaras curvas en la parte superior e inferior.",
    capabilities: ["Marquesina arrastrable con inercia", "Menú a pantalla completa", "Web & Conversion"],
    url: "https://bespoke-architecture-studio.vercel.app/",
  },
  {
    id: "hungry-tiger",
    category: "ecommerce",
    title: "Hungry Tiger",
    thumb: hungryTigerShot,
    alt: "Concept de landing para marca de salsas picantes fire-roasted",
    rubro: "Condimentos artesanales / DTC e-commerce",
    objetivo: "Que la tipografía gigante y el pote de salsa hagan de vidriera: la marca se lee como un cartel de mercado de especias antes de mirar el producto.",
    description:
      "Landing maximalista para una marca de salsas fire-roasted, con una sola paleta dorado sobre marrón quemado, tipografía de póster que ocupa toda la pantalla, botones pill, divisores punteados y fichas de producto con nivel de picor.",
    capabilities: ["Sistema tipográfico a escala póster", "Paleta mono-cromática con un acento", "Web & Conversion"],
    url: "https://hungry-tiger-lime.vercel.app/",
  },
  {
    id: "nova-ai",
    category: "saas",
    title: "NOVA_AI",
    thumb: novaAiShot,
    alt: "Concept de landing cinematográfica para un producto de IA creativa",
    rubro: "SaaS / Herramienta de IA creativa",
    objetivo: "Transmitir una identidad de producto premium y llevar de la propuesta de valor a un plan pago.",
    description:
      "Landing cinematográfica de una sola página con un video de fondo que se scrubea cuadro a cuadro con el scroll, secciones numeradas con navegación ancla, grid de funciones y planes con precios, todo con botones y CTAs realmente funcionales.",
    capabilities: ["Scroll-video cuadro a cuadro", "Planes con precios", "Web & Conversion"],
    url: "https://nova-ai-delta-eight.vercel.app/",
  },
  {
    id: "viktor-oddy",
    category: "saas",
    title: "Viktor Oddy",
    thumb: viktorOddyShot,
    alt: "Concept de landing editorial para un estudio de diseño creativo",
    rubro: "Estudio de diseño creativo / Servicios profesionales",
    objetivo: "Transmitir prestigio editorial y llevar de la propuesta de valor a coordinar un proyecto pago.",
    description:
      "Landing editorial de una sola página para un estudio de diseño, con marquee infinito de trabajos, imagen con efecto parallax, carrusel de testimonios auto-scroll, cards de planes con precio y una sección final donde miniaturas de proyectos aparecen siguiendo al mouse.",
    capabilities: ["Marquee infinito", "Carrusel de testimonios", "Web & Conversion"],
    url: "https://viktor-oddy-mauve.vercel.app/",
  },
  {
    id: "yoga-coach",
    category: "salud",
    title: "Jessica — Yoga Coach",
    thumb: yogaCoachShot,
    alt: "Concept de landing para una coach de yoga con sesiones privadas",
    rubro: "Bienestar / Coaching de yoga",
    objetivo: "Transmitir calma y cercanía, y llevar a agendar una sesión privada de yoga.",
    description:
      "Landing de pantalla completa sin scroll, con un video de fondo que se reproduce solo al hacer clic y una segunda pantalla tipo colección que sube desde abajo al terminar, mostrando tres tarjetas de video superpuestas que se reproducen al pasar el mouse.",
    capabilities: ["Video de fondo bajo demanda", "Transición de pantalla completa", "Tarjetas de video hover-play"],
    url: "https://yoga-coach-landing.vercel.app/",
  },
  {
    id: "vitara",
    category: "salud",
    title: "Vitara",
    thumb: vitaraShot,
    alt: "Concept de e-commerce de salud para medicación compuesta con seguimiento médico",
    rubro: "Salud / E-commerce de telemedicina",
    objetivo: "Vender planes de tratamiento mensuales con precio fijo y llevar al visitante a empezar sin fricción.",
    description:
      "Landing de e-commerce de salud con catálogo de tratamientos compuestos, marquesinas verticales de producto en el hero, carrusel de planes destacados y un acordeón de preguntas frecuentes — con un botón de borde degradado animado como firma visual en toda la página.",
    capabilities: ["Web & Conversion", "Catálogo de tratamientos", "FAQ con acordeón"],
    url: "https://vitara-salud.vercel.app/",
  },
];

const APPS = [
  {
    id: "denta",
    category: "salud",
    title: "Denta",
    thumb: dentaShot,
    alt: "Concept de app para clínica dental",
    rubro: "Clínica dental",
    objetivo: "Mostrarle a un paciente sus opciones de tratamiento y agendar una cita sin fricción.",
    description:
      "Recorrido de una app de clínica dental con selección de tratamiento, onboarding animado de un procedimiento de carillas y una videoconsulta con chat en vivo con la doctora.",
    capabilities: ["UI de producto", "Micro-interacciones", "Video-consulta simulada"],
    url: "https://dental-care-app-tau.vercel.app/",
  },
  {
    id: "terraelix",
    category: "salud",
    title: "TerraElix",
    thumb: terraelixShot,
    alt: "Concept de app para venta de suplementos",
    rubro: "Suplementos y nutrición",
    objetivo: "Vender un producto de suplementos desde el celular con la menor fricción posible.",
    description:
      "Ficha de producto de suplementos dentro de un mockup de iPhone realista, con un carrusel 3D que hace zoom y desvanece los productos adyacentes al deslizar, y un selector de cantidad que recalcula el precio al instante.",
    capabilities: ["Mobile-first UI", "Carrusel animado a medida", "Micro-interacciones"],
    url: "https://supplement-shop-ashen.vercel.app/",
  },
  {
    id: "soul-canvas",
    category: "salud",
    title: "Soul Canvas",
    thumb: soulCanvasShot,
    alt: "Concept de app de bienestar mental y registro de ánimo",
    rubro: "Salud mental y bienestar",
    objetivo: "Acompañar el registro diario de ánimo con una experiencia visual calma y cuidada.",
    description:
      "Tres pantallas de una app de bienestar mental corriendo lado a lado, cada una con su propio video de fondo en loop y tarjetas de vidrio esmerilado que aparecen en cascada al cargar.",
    capabilities: ["Mobile UI", "Video de fondo en loop", "Glassmorphism"],
    url: "https://mood-tracker-phi-rust.vercel.app/",
  },
  {
    id: "learn-hub",
    category: "edtech",
    title: "Learn Hub",
    thumb: learnHubShot,
    alt: "Concept de app de cursos online",
    rubro: "Edtech / Cursos online",
    objetivo: "Que un alumno descubra cursos y organice sus clases sin salir de la app.",
    description:
      "Showcase de una app de cursos online con onboarding en video, un feed de cursos con tarjetas en video que se reproducen en loop, y un calendario de clases interactivo.",
    capabilities: ["Mobile UI", "Video en loop nativo", "Calendario interactivo"],
    url: "https://learn-hub-sepia.vercel.app/",
  },
  {
    id: "cozy-paws",
    category: "ecommerce",
    title: "CozyPaws",
    thumb: cozyPawsShot,
    alt: "Concept de app de e-commerce para mascotas",
    rubro: "E-commerce / Mascotas",
    objetivo: "Mostrar catálogo y generar compras de productos para mascotas desde el celular.",
    description:
      "Vitrina de una app de productos para mascotas, con animaciones de aparición en cascada para texto, fotos y tarjetas de producto, y un video autoplay de fondo en una de las pantallas.",
    capabilities: ["Mobile-first UI", "Micro-animaciones en cascada", "Video autoplay embebido"],
    url: "https://pet-products-pi.vercel.app/",
  },
  {
    id: "nexar",
    category: "saas",
    title: "Nexar",
    thumb: nexarAppShot,
    alt: "Concept de app de productividad",
    rubro: "Productividad y gestión de tareas",
    objetivo: "Darle a un usuario una vista rápida de su día y sus tareas pendientes.",
    description:
      "Dashboard de productividad con video de fondo en loop, tarjetas de tareas con animación de aparición escalonada y un panel de comandos rápidos con entrada de voz simulada por un visualizador de onda de audio.",
    capabilities: ["Dashboard interactivo", "Micro-animaciones", "UI con video de fondo"],
    url: "https://nexar-productivity.vercel.app/",
  },
  {
    id: "vitalis",
    category: "salud",
    title: "Vitalis",
    thumb: vitalisShot,
    alt: "Concept de app de actividad física y bienestar",
    rubro: "Fitness y bienestar",
    objetivo: "Darle a un usuario una vista diaria clara de su actividad, hidratación y sueño.",
    description:
      "Panel diario de actividad con hidratación animada por vasos, barras de calorías y curva de peso — con controles reales (toggles, paginador, menú) en vez de elementos solo decorativos.",
    capabilities: ["Interacciones reales", "Dashboard responsive", "UI pixel-perfect"],
    url: "https://fitness-dashboard-six-lemon.vercel.app/",
  },
  {
    id: "steary",
    category: "edtech",
    title: "Steary",
    thumb: stearyShot,
    alt: "Concept de app de biblioteca digital",
    rubro: "Lectura / Biblioteca digital",
    objetivo: "Que un lector descubra, guarde y siga leyendo sus libros sin fricción.",
    description:
      "Panel de biblioteca digital con estética de vidrio líquido, carrusel de libro destacado, buscador en vivo, favoritos y modo nocturno — cada botón responde de verdad, no es solo una maqueta visual.",
    capabilities: ["Buscador y filtros en vivo", "Favoritos y descargas", "Modo nocturno"],
    url: "https://reading-library-tau.vercel.app/",
  },
];

type CategoryId =
  | "todos"
  | "inmobiliaria"
  | "salud"
  | "ecommerce"
  | "saas"
  | "edtech"
  | "moda"
  | "turismo";

const CATEGORIES: { id: CategoryId; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "inmobiliaria", label: "Inmobiliaria & Arquitectura" },
  { id: "salud", label: "Salud & Bienestar" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "saas", label: "SaaS & Tecnología" },
  { id: "edtech", label: "Edtech" },
  { id: "moda", label: "Moda & Lujo" },
  { id: "turismo", label: "Turismo & Gastronomía" },
];

const SHOWCASE = [
  ...REAL_PROJECTS.map((p) => ({
    ...p,
    badge: "Proyecto real",
    ctaLabel: "Ver sitio en vivo" as string | undefined,
  })),
  ...CONCEPTS.map((p) => ({ ...p, badge: "Concept / Demo", ctaLabel: undefined as string | undefined })),
];

type ShowcaseItem = (typeof SHOWCASE)[number];

const APPS_SHOWCASE = APPS.map((p) => ({ ...p, badge: "App Demo", ctaLabel: undefined as string | undefined }));

type AppShowcaseItem = (typeof APPS_SHOWCASE)[number];

function categoriesFor<T extends { category: string }>(items: T[]) {
  const present = new Set(items.map((i) => i.category));
  return CATEGORIES.filter((c) => c.id === "todos" || present.has(c.id));
}

function renderShowcaseCard(item: ShowcaseItem | AppShowcaseItem) {
  return (
    <>
      <span className="block aspect-[4/3] overflow-hidden bg-black/20">
        <img
          src={item.thumb}
          alt={item.alt}
          loading="lazy"
          decoding="async"
          draggable={false}
          className="w-full h-full object-cover object-top block pointer-events-none transition-transform duration-500 ease-[cubic-bezier(.22,.61,.36,1)] group-hover:scale-[1.03]"
        />
      </span>
      <span className="block pt-[18px] px-5 pb-[22px]">
        <span className="text-[10px] tracking-[0.2em] uppercase text-gold block">{item.badge}</span>
        <span className="text-[17px] mt-2 block">{item.title}</span>
        <span className="text-[13.5px] text-cream/60 block mt-1">{item.rubro}</span>
      </span>
    </>
  );
}

export default function Projects() {
  const [openId, setOpenId] = useState<string | null>(null);
  const activeItem = SHOWCASE.find((i) => i.id === openId) ?? null;
  const [category, setCategory] = useState<CategoryId>("todos");
  const filtered = useMemo(
    () => (category === "todos" ? SHOWCASE : SHOWCASE.filter((item) => item.category === category)),
    [category]
  );

  const [openAppId, setOpenAppId] = useState<string | null>(null);
  const activeApp = APPS_SHOWCASE.find((a) => a.id === openAppId) ?? null;
  const [appCategory, setAppCategory] = useState<CategoryId>("todos");
  const appCategories = useMemo(() => categoriesFor(APPS_SHOWCASE), []);
  const filteredApps = useMemo(
    () => (appCategory === "todos" ? APPS_SHOWCASE : APPS_SHOWCASE.filter((a) => a.category === appCategory)),
    [appCategory]
  );

  return (
    <section id="proyectos" className="bg-white/[0.03] border-t border-b border-white/10">
      <Reveal className="max-w-[1180px] mx-auto px-6 pt-[clamp(78px,11vw,150px)]">
        <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-5">Trabajo real</p>
        <h1 className="text-[clamp(30px,4.2vw,50px)] leading-[1.12] mb-5 max-w-[18em]">
          Proyectos que ya están en producción.
        </h1>
        <p className="text-[16.5px] text-cream/70 leading-[1.75] max-w-[38em] mb-[clamp(30px,4vw,48px)]">
          Sitios reales que armamos para nuestro propio negocio y para conocidos que confiaron en
          nosotros, más demos funcionales que probamos por rubro. Arrastrá la fila o dejala correr
          sola — todo construido desde código y ya en producción.
        </p>
        <CategoryChips categories={CATEGORIES} active={category} onChange={setCategory} />
      </Reveal>
      <Reveal className="w-screen relative left-1/2 -mx-[50vw] pb-[clamp(78px,11vw,150px)]">
        <DragRow items={filtered} key={category} onOpen={(item) => setOpenId(item.id)} renderCard={renderShowcaseCard} />
      </Reveal>

      <Reveal className="max-w-[1180px] mx-auto px-6">
        <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-5">Apps</p>
        <h2 className="text-[clamp(26px,3.6vw,42px)] leading-[1.15] mb-5 max-w-[18em]">
          También armamos apps, no solo webs.
        </h2>
        <p className="text-[16.5px] text-cream/70 leading-[1.75] max-w-[38em] mb-[clamp(30px,4vw,48px)]">
          Demos de apps completas por rubro — dashboards, e-commerce, salud, educación — para mostrar
          cómo se vería tu propio producto antes de construirlo.
        </p>
        <CategoryChips categories={appCategories} active={appCategory} onChange={setAppCategory} />
      </Reveal>
      <Reveal className="w-screen relative left-1/2 -mx-[50vw] pb-[clamp(78px,11vw,150px)]">
        <DragRow
          items={filteredApps}
          key={appCategory}
          onOpen={(item) => setOpenAppId(item.id)}
          renderCard={renderShowcaseCard}
        />
      </Reveal>

      {activeItem && (
        <ConceptModal
          title={activeItem.title}
          rubro={activeItem.rubro}
          objetivo={activeItem.objetivo}
          description={activeItem.description}
          capabilities={activeItem.capabilities}
          url={activeItem.url}
          badge={activeItem.badge}
          ctaLabel={activeItem.ctaLabel}
          onClose={() => setOpenId(null)}
        />
      )}
      {activeApp && (
        <ConceptModal
          title={activeApp.title}
          rubro={activeApp.rubro}
          objetivo={activeApp.objetivo}
          description={activeApp.description}
          capabilities={activeApp.capabilities}
          url={activeApp.url}
          badge={activeApp.badge}
          ctaLabel={activeApp.ctaLabel}
          onClose={() => setOpenAppId(null)}
        />
      )}
    </section>
  );
}
