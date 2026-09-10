import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { marked } from "marked";
import Reveal from "../components/Reveal";
import { useSEO } from "../hooks/useSEO";
import { BLOG_POSTS } from "../content/blog";
import { SITE_NAME, SITE_URL, waLink } from "../config/site";

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number>(-1);
  return (
    <div className="border-t border-navy/[0.12]">
      {items.map((item, i) => {
        const expanded = open === i;
        return (
          <div key={item.q} className="border-b border-navy/[0.12]">
            <button
              type="button"
              aria-expanded={expanded}
              onClick={() => setOpen(expanded ? -1 : i)}
              className="w-full flex gap-[18px] items-center justify-between text-left bg-transparent border-none py-5 cursor-pointer text-[16px] font-display"
            >
              {item.q}
              <span aria-hidden="true" className="text-teal font-sans text-xl flex-none">
                +
              </span>
            </button>
            {expanded && (
              <p className="pb-5 text-secondary leading-[1.75] text-[15px] max-w-[46em]">{item.a}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  useSEO({
    title: post ? (post.seoTitle ?? post.title) : "Artículo no encontrado",
    description: post ? post.metaDescription : "Este artículo no existe o fue movido.",
    path: `/blog/${slug ?? ""}`,
    type: "article",
    jsonLd: post
      ? [
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.metaDescription,
            ...(post.secondaryKeywords ? { keywords: post.secondaryKeywords.join(", ") } : {}),
            datePublished: post.publishedAt,
            dateModified: post.publishedAt,
            author: { "@type": "Person", name: "Denis Maldonado" },
            publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
            mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: post.faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
              { "@type": "ListItem", position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
            ],
          },
        ]
      : undefined,
  });

  if (!post) {
    return (
      <Reveal className="max-w-[720px] mx-auto px-6 pt-[clamp(120px,14vw,180px)] pb-[clamp(90px,11vw,150px)] text-center">
        <h1 className="text-[clamp(28px,3.6vw,40px)] mb-5">No encontramos este artículo.</h1>
        <p className="text-secondary mb-8">Puede que se haya movido o el link esté mal escrito.</p>
        <Link to="/blog" className="text-teal font-medium">
          ← Volver al blog
        </Link>
      </Reveal>
    );
  }

  const html = marked.parse(post.body, { async: false }) as string;
  const demoMessage = `Hola, leí el artículo "${post.title}" en el blog de DeXa y quiero pedir un diagnóstico gratuito para mi clínica.`;

  return (
    <article className="pt-[64px]">
      <Reveal className="max-w-[760px] mx-auto px-6 pt-[clamp(70px,9vw,120px)] pb-8">
        <nav aria-label="Breadcrumb" className="text-[13px] text-secondary mb-8">
          <Link to="/blog" className="hover:text-teal">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span>{post.title}</span>
        </nav>
        <p className="text-[11px] tracking-[0.15em] uppercase text-secondary mb-4">
          {formatDate(post.publishedAt)} · {post.readingMinutes} min de lectura
        </p>
        <h1 className="text-[clamp(28px,3.8vw,44px)] leading-[1.16] max-w-[22em] [text-wrap:pretty]">
          {post.title}
        </h1>
      </Reveal>

      <Reveal className="max-w-[760px] mx-auto px-6 pb-[clamp(50px,6vw,72px)]">
        <div
          className="prose prose-neutral max-w-none prose-headings:font-display prose-headings:text-navy prose-h2:text-[26px] prose-h3:text-[19px] prose-p:text-body prose-p:leading-[1.8] prose-li:text-body prose-a:text-teal prose-strong:text-navy prose-blockquote:border-teal prose-blockquote:text-secondary prose-table:text-[14.5px] prose-th:text-navy"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Reveal>

      <section className="bg-navy text-cream">
        <Reveal className="max-w-[760px] mx-auto px-6 py-[clamp(56px,7vw,88px)] text-center">
          <h2 className="text-[clamp(24px,3vw,32px)] leading-[1.25] mb-5 max-w-[20em] mx-auto [text-wrap:pretty]">
            ¿Querés detectar qué parte de la atención de tu clínica podría automatizarse?
          </h2>
          <p className="text-cream/78 text-[15.5px] leading-[1.8] max-w-[38em] mx-auto mb-9">
            Analizamos tu proceso actual y te decimos con honestidad qué conviene automatizar, qué debería
            seguir en manos del equipo, y cuál sería el punto de partida más razonable.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {/* Apunta a la demo en vivo de Sofia hasta subir el audio de la charla real */}
            <Link
              to="/#sofia"
              className="border border-cream/30 text-cream px-6 py-3.5 rounded-full text-[14.5px] hover:border-cream"
            >
              Escuchá a Sofía
            </Link>
            <a
              href={waLink(demoMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-navy px-6 py-3.5 rounded-full text-[14.5px] font-medium hover:bg-cream"
            >
              Solicitar diagnóstico gratis
            </a>
          </div>
        </Reveal>
      </section>

      <Reveal className="max-w-[760px] mx-auto px-6 py-[clamp(56px,7vw,88px)]">
        <h2 className="text-[clamp(24px,3vw,32px)] leading-[1.2] mb-8">Preguntas frecuentes</h2>
        <FaqAccordion items={post.faq} />
      </Reveal>
    </article>
  );
}
