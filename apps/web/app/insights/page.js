import Link from "next/link";
import { insightArticles } from "@/lib/site-content.mjs";

export default function InsightsPage() {
  return (
    <div className="page-stack">
      <section className="page-hero">
        <p className="eyebrow">Insights</p>
        <h1>保險科技資訊與行業政策解讀，建立可持續的專業信任。</h1>
        <p className="lede">
          內容服務聚焦保險經紀行業的數字化趨勢、市場觀察與政策理解，幫助潛在客戶更快看見 LifeBee 的專業深度。
        </p>
      </section>

      <section className="section-grid">
        {insightArticles.map((article) => (
          <article className="glass-card section-card" key={article.slug}>
            <span className="pill">{article.category}</span>
            <h2>{article.title}</h2>
            <p>{article.summary}</p>
            <p className="muted">{article.date}</p>
            <Link className="secondary-button" href={`/insights/${article.slug}`}>
              閱讀文章
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
