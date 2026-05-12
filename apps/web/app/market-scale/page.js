import { marketScaleContent } from "@/lib/site-content.mjs";

export default function MarketScalePage() {
  return (
    <div className="page-stack">
      <section className="page-hero">
        <p className="eyebrow">{marketScaleContent.hero.eyebrow}</p>
        <h1>{marketScaleContent.hero.title}</h1>
        <p className="lede">{marketScaleContent.hero.description}</p>
      </section>

      <section className="section-grid">
        {marketScaleContent.sections.map((section) => (
          <article className="glass-card section-card" key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </article>
        ))}
      </section>

      <section className="glass-card narrative-card">
        <p className="eyebrow">Data Notes</p>
        {marketScaleContent.notes.map((note) => (
          <p key={note}>{note}</p>
        ))}
      </section>
    </div>
  );
}
