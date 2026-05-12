import Link from "next/link";
import { notFound } from "next/navigation";
import { getInsightBySlug, insightArticles } from "@/lib/site-content.mjs";

export function generateStaticParams() {
  return insightArticles.map((article) => ({ slug: article.slug }));
}

export default function InsightDetailPage({ params }) {
  const article = getInsightBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="page-stack">
      <section className="page-hero">
        <p className="eyebrow">{article.category}</p>
        <h1>{article.title}</h1>
        <p className="lede">{article.summary}</p>
        <p className="muted">{article.date}</p>
      </section>

      <article className="glass-card narrative-card">
        {article.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <Link className="secondary-button" href="/insights">
          返回內容服務
        </Link>
      </article>
    </div>
  );
}
