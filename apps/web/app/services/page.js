import Link from "next/link";
import { moduleCatalog } from "@/lib/module-catalog.mjs";

export default function ServicesPage() {
  return (
    <div className="page-stack">
      <section className="page-hero">
        <p className="eyebrow">Service Modules</p>
        <h1>Reserved extension tracks for the competition roadmap.</h1>
        <p className="lede">所有增值服务先有统一入口，后面再根据时间决定实现深度。</p>
      </section>
      <section className="section-grid">
        {moduleCatalog.map((item) => (
          <article key={item.slug} className="glass-card section-card">
            <span className="pill">{item.category}</span>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <Link className="secondary-button" href={item.publicRoute}>
              Open placeholder
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}

