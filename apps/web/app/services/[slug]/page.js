import { getModuleBySlug } from "@/lib/module-catalog.mjs";

export default function ServicePlaceholderPage({ params }) {
  const moduleEntry = getModuleBySlug(params.slug);

  if (!moduleEntry) {
    return (
      <div className="page-stack">
        <section className="page-hero">
          <p className="eyebrow">Service Module</p>
          <h1>Unknown module.</h1>
        </section>
      </div>
    );
  }

  return (
    <div className="page-stack">
      <section className="page-hero">
        <p className="eyebrow">{moduleEntry.category}</p>
        <h1>{moduleEntry.name}</h1>
        <p className="lede">{moduleEntry.tagline}</p>
      </section>
      <article className="glass-card narrative-card">
        <p>{moduleEntry.description}</p>
        <p>Current status: {moduleEntry.status}</p>
        <p>这个页面已经预留好公开路由，后续可以直接替换成真实功能页。</p>
      </article>
    </div>
  );
}
