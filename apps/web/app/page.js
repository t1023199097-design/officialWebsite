import Link from "next/link";
import { demoHomeContent } from "@/lib/site-content";

export default function HomePage() {
  const repeatedFeatures = [...demoHomeContent.serviceFeatures, ...demoHomeContent.serviceFeatures];

  return (
    <div className="lifebee-demo">
      <section className="demo-hero">
        <div className="hero-copy">
          <p className="eyebrow">{demoHomeContent.hero.eyebrow}</p>
          <h1>
            <span className="slogan-main">
              <span>客戶至上，</span>
              <span>服務為先</span>
            </span>
            <span className="slogan-sub">{demoHomeContent.hero.sloganSub}</span>
          </h1>
          <p className="lede hero-lead">
            {demoHomeContent.hero.lead.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </p>
          <div className="hero-actions">
            <Link className="primary-button" href="/demo">
              {demoHomeContent.hero.primaryCta}
            </Link>
            <Link className="secondary-button" href="/solutions">
              {demoHomeContent.hero.secondaryCta}
            </Link>
          </div>
        </div>
        <div className="hero-visual" aria-label="LifeBee 產品工作台示意">
          <div className="gradient-ribbon" />
          <ProductMockup />
        </div>
      </section>

      <section className="logo-strip" aria-label="LifeBee 能力背書">
        {demoHomeContent.trustLogos.map((logo) => (
          <span key={logo}>{logo}</span>
        ))}
      </section>

      <section className="business-pillars business-pillars--day" aria-labelledby="business-pillars-title">
        <div className="pillar-background" aria-hidden="true">
          <span className="pillar-light-plane pillar-light-plane-one" />
          <span className="pillar-light-plane pillar-light-plane-two" />
          <span className="pillar-data-grid" />
          <span className="pillar-data-lines" />
        </div>
        <div className="pillar-inner">
          <div className="pillar-heading">
            <p className="eyebrow">Insurance technology pillars</p>
            <h2 id="business-pillars-title">保險科技服務支柱</h2>
            <p>
              以 LifeBee 的業務數據為主角，讓服務規模、資料能力、流程效率與營運提升在同一個演示區裡被看見。
            </p>
          </div>
          <div className="pillar-theme-row" aria-label="展示主題">
            {demoHomeContent.pillarThemes.map((theme, index) => (
              <span className={index === 0 ? "theme-chip is-active" : "theme-chip"} key={theme.key}>
                <b>{theme.label}</b>
                <small>{theme.detail}</small>
              </span>
            ))}
          </div>
          <div className="pillar-stats" aria-label="LifeBee 核心業務數據">
            {demoHomeContent.metrics.map((metric, index) => (
              <article className={index === 0 ? "pillar-stat is-active" : "pillar-stat"} key={metric.label}>
                <span className="pillar-stat-index">0{index + 1}</span>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </article>
            ))}
            <span className="pillar-indicator" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="split-section">
        <div className="section-heading left">
          <p className="eyebrow">{demoHomeContent.workflow.eyebrow}</p>
          <h2>{demoHomeContent.workflow.title}</h2>
          <p>{demoHomeContent.workflow.description}</p>
        </div>
        <div className="value-list">
          {demoHomeContent.workflow.highlights.map((item) => (
            <div className="value-row" key={item.label}>
              <strong>{item.label}</strong>
              <span>{item.detail}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="service-showcase" id="services">
        <div className="section-heading">
          <p className="eyebrow">{demoHomeContent.serviceShowcase.eyebrow}</p>
          <h2>{demoHomeContent.serviceShowcase.title}</h2>
          <p>{demoHomeContent.serviceShowcase.description}</p>
        </div>
        <div className="service-slider" aria-label="LifeBee 工具與服務功能">
          <div className="service-track">
            {repeatedFeatures.map((item, index) => (
              <article className="service-slide" key={`${item.title}-${index}`}>
                <div className="service-icon">{index + 1 > demoHomeContent.serviceFeatures.length ? index + 1 - demoHomeContent.serviceFeatures.length : index + 1}</div>
                <span>{item.kicker}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bento-section">
        <div className="section-heading">
          <p className="eyebrow">解決方案矩陣</p>
          <h2>把複雜保險流程轉成清晰可控的數字化工作台。</h2>
        </div>
        <div className="bento-grid">
          {demoHomeContent.values.map((item, index) => (
            <article className={`bento-card ${index === 0 || index === 3 ? "wide" : ""}`} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div>
          <p className="eyebrow">{demoHomeContent.cta.eyebrow}</p>
          <h2>{demoHomeContent.cta.title}</h2>
          <p>{demoHomeContent.cta.description}</p>
        </div>
        <Link className="primary-button" href="/demo">
          {demoHomeContent.cta.button}
        </Link>
      </section>
    </div>
  );
}

function ProductMockup() {
  return (
    <div className="product-shell">
      <div className="mock-header">
        <span />
        <span />
        <span />
        <strong>lifebee.app/admin</strong>
      </div>
      <div className="mock-body">
        <aside className="mock-sidebar">
          <span className="active-dot" />
          <span />
          <span />
          <span />
        </aside>
        <div className="mock-main">
          <div className="mock-title">
            <div>
              <small>{demoHomeContent.dashboard.small}</small>
              <strong>{demoHomeContent.dashboard.title}</strong>
            </div>
            <span className="status-pill">{demoHomeContent.dashboard.status}</span>
          </div>
          <div className="signal-list">
            {demoHomeContent.dashboard.signals.map((signal) => (
              <div className="signal-row" key={signal}>
                <b>✓</b>
                <span>{signal}</span>
                <i />
              </div>
            ))}
          </div>
          <div className="chart-panel">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </div>
  );
}
