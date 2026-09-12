import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import { useSEO } from "../hooks/useSEO";
import { BLOG_POSTS } from "../content/blog";
import { SITE_URL } from "../config/site";

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  useSEO({
    title: "Blog",
    description:
      "Guías prácticas sobre agentes de IA, WhatsApp y automatización para dueños de negocio: qué se puede automatizar, qué no, y cómo implementarlo bien.",
    path: "/blog",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Blog de DeXa",
      url: `${SITE_URL}/blog`,
    },
  });

  return (
    <div className="pt-[64px]">
      <Reveal className="max-w-[1180px] mx-auto px-6 pt-[clamp(78px,11vw,150px)] pb-[clamp(56px,7vw,90px)]">
        <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-5">Blog</p>
        <h1 className="text-[clamp(30px,4.2vw,50px)] leading-[1.12] mb-5 max-w-[18em]">
          Ideas y guías para dueños de negocio.
        </h1>
        <p className="text-[clamp(16px,1.4vw,18px)] leading-[1.75] text-cream/70 max-w-[42em]">
          Nada de jerga técnica. Escribimos sobre lo que de verdad le importa a quien tiene que decidir si
          conviene automatizar la atención de su negocio, y cómo hacerlo sin arriesgar la relación con sus
          clientes.
        </p>
      </Reveal>

      <Reveal className="max-w-[1180px] mx-auto px-6 pb-[clamp(90px,11vw,150px)]">
        <div className="grid gap-[clamp(20px,2.5vw,28px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr))]">
          {BLOG_POSTS.slice()
            .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
            .map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group block bg-white/5 border border-white/15 rounded-[20px] p-[clamp(24px,3vw,32px)] hover:border-gold/40"
              >
                <p className="text-[11px] tracking-[0.15em] uppercase text-cream/50 mb-3">
                  {formatDate(post.publishedAt)} · {post.readingMinutes} min de lectura
                </p>
                <h2 className="text-[clamp(20px,2.2vw,25px)] leading-[1.25] mb-3 group-hover:text-gold">
                  {post.title}
                </h2>
                <p className="text-cream/65 text-[15px] leading-[1.7] mb-5">{post.excerpt}</p>
                <span className="text-gold text-[14.5px] font-medium">Leer artículo →</span>
              </Link>
            ))}
        </div>
      </Reveal>
    </div>
  );
}
