import Link from "next/link";
import { heroMetrics, moduleHighlights, solutionCards } from "@/lib/site-content";

export default function HomePage() {
  return (
    <div className="page-stack">
      <section className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Competition Delivery Starter</p>
          <h1>From brochure site to insurance technology service platform.</h1>
          <p className="lede">
            BeeFintech 的首版官网骨架同时覆盖品牌表达、预约演示、后台入口和三类增值服务扩展位。
          </p>
          <div className="hero-actions">
            <Link className="primary-button" href="/demo">
              Book a Demo
            </Link>
            <Link className="secondary-button" href="/solutions">
              Explore Architecture
            </Link>
          </div>
        </div>
        <div className="hero-panel glass-card">
          {heroMetrics.map((metric) => (
            <div key={metric.label} className="metric-block">
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section-grid">
        {solutionCards.map((card) => (
          <article key={card.title} className="glass-card section-card">
            <h2>{card.title}</h2>
            <p>{card.body}</p>
          </article>
        ))}
      </section>

      <section className="module-section">
        <div className="section-heading">
          <p className="eyebrow">Reserved Service Modules</p>
          <h2>All three competition extension tracks are scaffolded now.</h2>
        </div>
        <div className="section-grid">
          {moduleHighlights.map((item) => (
            <article key={item.slug} className="glass-card section-card">
              <span className="pill">{item.category}</span>
              <h3>{item.name}</h3>
              <p>{item.tagline}</p>
              <p className="muted">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

