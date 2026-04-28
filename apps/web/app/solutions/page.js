import { moduleHighlights, solutionCards } from "@/lib/site-content";

export default function SolutionsPage() {
  return (
    <div className="page-stack">
      <section className="page-hero">
        <p className="eyebrow">Architecture Direction</p>
        <h1>Java aggregation platform + Next.js portal</h1>
        <p className="lede">
          前端负责门户和后台页面，后端负责预约编排、统一 API、后台会话和模块扩展注册。
        </p>
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
          <p className="eyebrow">Module Roadmap</p>
          <h2>Reserved APIs, routes and admin entrypoints</h2>
        </div>
        <div className="section-grid">
          {moduleHighlights.map((item) => (
            <article key={item.slug} className="glass-card section-card">
              <span className="pill">{item.status}</span>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="muted">
                Public route: {item.publicRoute}
                <br />
                Admin route: {item.adminRoute}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

