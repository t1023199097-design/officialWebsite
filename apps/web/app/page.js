import Link from "next/link";
import {
  getDemoHomeContent,
  homeFeaturePreview,
  homeShowcaseSections,
  normalizeLocale,
} from "@/lib/site-content.mjs";

export default function HomePage({ searchParams }) {
  const locale = normalizeLocale(searchParams?.lang);
  const demoHomeContent = getDemoHomeContent(locale);
  const languageSuffix = locale === "zh-Hant" ? "" : `?lang=${locale}`;
  const homeHash = (hash) => (locale === "zh-Hant" ? `/#${hash}` : `/?lang=${locale}#${hash}`);

  return (
    <div className="lifebee-demo">
      <section className="demo-hero">
        <div className="hero-copy">
          <p className="eyebrow">{demoHomeContent.hero.eyebrow}</p>
          <h1>
            <span className="slogan-main">{demoHomeContent.hero.sloganMain}</span>
            <span className="slogan-sub">{demoHomeContent.hero.sloganSub}</span>
          </h1>
          <div className="lede hero-lead">
            {demoHomeContent.hero.lead.map((line, index) => (
              <p className={index === 0 ? "hero-lead-title" : ""} key={line}>
                {line}
              </p>
            ))}
          </div>
          <div className="hero-actions">
            <Link className="secondary-button hero-action-button" href={homeHash("brand-functions")}>
              品牌功能
            </Link>
            <Link className="secondary-button hero-action-button" href={homeHash("market-scale")}>
              市場規模
            </Link>
            <Link className="secondary-button hero-action-button" href={homeHash("about-lifeBee")}>
              關於我們
            </Link>
          </div>
        </div>
        <div className="hero-visual" aria-label="LifeBee 產品工作台示意">
          <div className="waterdrop-field" aria-hidden="true">
            <span className="waterdrop-shadow" />
            <span className="waterdrop waterdrop-main" />
            <span className="waterdrop-caustic" />
            <span className="waterdrop waterdrop-secondary" />
            <span className="waterdrop waterdrop-glint" />
            <span className="waterdrop-ripple waterdrop-ripple-one" />
            <span className="waterdrop-ripple waterdrop-ripple-two" />
          </div>
        </div>
        <HeroFeatureScroller modules={demoHomeContent.heroModules} />
      </section>

      <section className="flip-section" aria-labelledby="home-flip-title">
        <FeatureServicePreview />
        <div className="showcase-module-list">
          {homeShowcaseSections.map((section) => (
            <section className="showcase-module-block" id={section.id} key={section.id} aria-labelledby={`${section.id}-detail-title`}>
              <div className="showcase-focus-card">
                <div className="showcase-copy">
                  <p className="eyebrow">{section.eyebrow}</p>
                  <h3 id={`${section.id}-detail-title`}>{section.title}</h3>
                  <p>{section.description}</p>
                  <div className="showcase-tags" aria-label={`${section.title}重點`}>
                    {section.points.map((point) => (
                      <span key={point}>{point}</span>
                    ))}
                  </div>
                  <Link className="secondary-button" href={`${section.href}${languageSuffix}`}>
                    查看詳情
                  </Link>
                </div>
                <div className="showcase-motion" aria-hidden="true">
                  <span className="showcase-motion-label">{section.motionLabel}</span>
                  <span className="showcase-orbit showcase-orbit-one" />
                  <span className="showcase-orbit showcase-orbit-two" />
                  <span className="showcase-glowline" />
                </div>
              </div>
              <div className="module-detail-panel">
                <div className="module-detail-heading">
                  <p className="eyebrow">{section.subtitle}</p>
                  <h3>{section.title}</h3>
                  <p>{section.description}</p>
                </div>
                <div className="module-detail-grid">
                  {section.details.map((detail) => (
                    <article className="module-detail-card" key={detail.label}>
                      <strong>{detail.label}</strong>
                      <p>{detail.text}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </section>
    </div>
  );
}

function FeatureServicePreview() {
  return (
    <div className="feature-preview" aria-labelledby="home-flip-title">
      <div className="feature-visual" aria-label="LifeBee 功能服務管理台示意">
        <div className="feature-laptop">
          <div className="feature-toolbar">
            <span />
            <strong>首頁</strong>
            <small>2026-07-01</small>
          </div>
          <div className="feature-stat-row">
            {homeFeaturePreview.cards.map((card) => (
              <div className="feature-stat-card" key={card.label}>
                <strong>{card.value}</strong>
                <span>{card.label}</span>
              </div>
            ))}
          </div>
          <div className="feature-chart-grid">
            <div className="bar-chart" aria-hidden="true">
              {[36, 58, 72, 90, 52, 68, 108, 44, 55, 63].map((height, index) => (
                <span key={index} style={{ "--bar-height": `${height}%` }} />
              ))}
            </div>
            <div className="donut-chart" aria-hidden="true">
              <span />
            </div>
          </div>
        </div>
        <div className="feature-phone">
          <span className="phone-time">9:41</span>
          <strong>功能</strong>
          <div className="phone-grid">
            {homeFeaturePreview.phoneGroups.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <span className="feature-light feature-light-one" aria-hidden="true" />
        <span className="feature-light feature-light-two" aria-hidden="true" />
      </div>
      <p className="eyebrow">{homeFeaturePreview.eyebrow}</p>
      <h2 id="home-flip-title">{homeFeaturePreview.title}</h2>
    </div>
  );
}

function HeroFeatureScroller({ modules }) {
  const repeatedModules = [...modules, ...modules, ...modules, ...modules];

  return (
    <div className="hero-module-stage" aria-label="LifeBee 功能模塊展示">
      <div className="hero-module-track">
        {repeatedModules.map((item, index) => (
          <article className="hero-module-card" key={`${item.title}-${index}`}>
            <ModuleIcon type={item.icon} />
            <strong>{item.title}</strong>
            <span>{item.detail}</span>
          </article>
        ))}
      </div>
    </div>
  );
}

function ModuleIcon({ type }) {
  return (
    <span className={`module-logo module-logo-${type}`} aria-hidden="true">
      <i />
      <b />
    </span>
  );
}
