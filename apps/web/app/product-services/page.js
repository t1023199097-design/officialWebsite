import Link from "next/link";
import { RoiCalculator } from "@/components/roi-calculator";
import { getProductServicesSections } from "@/lib/product-services-content.mjs";
import {
  getDemoHomeContent,
  homeFeaturePreview,
  normalizeLocale,
} from "@/lib/site-content.mjs";

export default function ProductServicesPage({ searchParams }) {
  const locale = normalizeLocale(searchParams?.lang);
  const [hero, market, member, infra, monthly, ai] = getProductServicesSections(locale);
  const demoHomeContent = getDemoHomeContent(locale);
  const languageSuffix = locale === "zh-Hant" ? "" : `?lang=${locale}`;

  return (
    <>
      <div className="lifebee-demo product-services-intro">
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
              <Link className="primary-button" href={`/demo${languageSuffix}`}>
                {demoHomeContent.hero.primaryCta}
              </Link>
              <Link className="secondary-button" href="#product-services-start">
                查看功能服務
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

        <section className="flip-section product-services-preview" aria-labelledby="home-flip-title">
          <FeatureServicePreview />
        </section>
      </div>

      <div className="product-services-page" id="product-services-start">
        <section className="ps-section ps-capabilities">
        <div className="ps-kicker">{hero.eyebrow}</div>
        <div className="ps-title-row">
          <div>
            <h1>{hero.title}</h1>
            <p>{hero.subtitle}</p>
          </div>
        </div>
        <div className="ps-capability-grid">
          {hero.cards.map((card, index) => (
            <article className={`ps-cap-card ps-${card.accent}`} key={card.title}>
              <div className="ps-cap-copy">
                <h2>
                  {card.label ? <span>{card.label}</span> : null}
                  {card.title}
                </h2>
                <ul>
                  {card.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
              <CapabilityIllustration type={card.illustration} index={index} />
            </article>
          ))}
        </div>
      </section>

      <section className="ps-section ps-market">
        <div className="ps-kicker">{market.eyebrow}</div>
        <h2>{market.title}</h2>
        <p className="ps-lede">{market.description}</p>
        <div className="ps-market-board">
          <div className="ps-blue-card">
            <span>{market.panel.label}</span>
            <strong>{market.panel.title}</strong>
            <p>{market.panel.body}</p>
            <em>{market.panel.meta}</em>
          </div>
          {market.stats.map((stat) => (
            <div className="ps-stat" key={stat.value}>
              <span className="ps-stat-region">{stat.region}</span>
              <strong>{stat.value}</strong>
              <span className="ps-stat-label">{stat.label}</span>
              <div className="ps-share-track" aria-label={`${stat.region} market share ${stat.value}`}>
                <i style={{ "--share": `${stat.share}%` }} />
              </div>
              <small>{stat.trend} YoY 增長示意</small>
            </div>
          ))}
        </div>
        <div className="ps-note-row">
          {market.notes.map((note) => (
            <span key={note}>{note}</span>
          ))}
        </div>
      </section>

      <section className="ps-section ps-member">
        <div>
          <div className="ps-kicker">{member.eyebrow}</div>
          <h2>{member.title}</h2>
          <p className="ps-lede">{member.description}</p>
        </div>
        <RoiCalculator locale={locale} />
      </section>

      <section className="ps-section ps-infra">
        <div>
          <div className="ps-kicker">{infra.eyebrow}</div>
          <h2>{infra.title}</h2>
          <ul className="ps-checks">
            {infra.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
        <aside className="ps-side-panel">
          <strong>{infra.panelTitle}</strong>
          {infra.panel.map((item) => (
            <a href={item.href} key={item.title} rel="noreferrer" target="_blank">
              <small>{item.category}</small>
              <span>{item.title}</span>
              <em>{item.meta}</em>
            </a>
          ))}
        </aside>
      </section>

      <section className="ps-section ps-monthly">
        <div className="ps-kicker">{monthly.eyebrow}</div>
        <h2>{monthly.title}</h2>
        <p className="ps-lede">{monthly.description}</p>
        <div className="ps-monthly-card">
          <div className="ps-wave-chart" aria-hidden="true">
            <span />
            <i />
          </div>
          <div className="ps-metric-row">
            {monthly.metrics.map((metric) => (
              <div key={metric.value}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ps-section ps-ai">
        <div>
          <div className="ps-kicker">{ai.eyebrow}</div>
          <h2>{ai.title}</h2>
          <p className="ps-lede">{ai.description}</p>
          <div className="ps-contact-actions">
            <Link href="/demo">預約演示</Link>
            <a href="mailto:info@beefintech.hk">聯絡我們</a>
          </div>
        </div>
        <div className="ps-ai-card">
          <span>{ai.contactTitle}</span>
          <div className="ps-contact-list">
            {ai.contacts.map((item) => {
              const content = (
                <>
                  <small>{item.label}</small>
                  <strong>{item.value}</strong>
                </>
              );
              return item.href ? (
                <a href={item.href} key={item.label} rel={item.href.startsWith("http") ? "noreferrer" : undefined} target={item.href.startsWith("http") ? "_blank" : undefined}>
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </div>
        </div>
      </section>
      </div>
    </>
  );
}

function CapabilityIllustration({ type, index }) {
  return (
    <div className={`ps-card-illustration ps-illustration-${type}`} style={{ "--float-delay": `${index * 0.35}s` }} aria-hidden="true">
      {type === "sync" ? (
        <>
          <span className="ps-illus-ground" />
          <span className="ps-illus-sheet ps-illus-sheet-left" />
          <span className="ps-illus-sheet ps-illus-sheet-right" />
          <span className="ps-illus-bars">
            <i />
            <i />
            <i />
            <i />
            <i />
          </span>
          <span className="ps-illus-person" />
        </>
      ) : null}
      {type === "eform" ? (
        <>
          <span className="ps-illus-ground" />
          <span className="ps-illus-cloud" />
          <span className="ps-illus-tablet">
            <i />
            <b />
            <em />
          </span>
          <span className="ps-illus-pen" />
          <span className="ps-illus-person ps-illus-person-left" />
          <span className="ps-illus-person ps-illus-person-right" />
        </>
      ) : null}
      {type === "archive" ? (
        <>
          <span className="ps-illus-ground" />
          <span className="ps-illus-cloud ps-illus-cloud-large" />
          <span className="ps-illus-server">
            <i />
            <i />
            <i />
          </span>
          <span className="ps-illus-paper" />
          <span className="ps-illus-lens" />
          <span className="ps-illus-person ps-illus-person-right" />
        </>
      ) : null}
      {type === "invite" ? (
        <>
          <span className="ps-illus-ground" />
          <span className="ps-illus-robot">
            <i />
            <b />
          </span>
          <span className="ps-illus-envelope" />
          <span className="ps-illus-id-card" />
          <span className="ps-illus-person ps-illus-person-right" />
        </>
      ) : null}
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
