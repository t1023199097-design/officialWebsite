import Link from "next/link";
import { serviceCapabilities } from "@/lib/site-content.mjs";

export default function ServicesPage() {
  return (
    <div className="page-stack">
      <section className="page-hero">
        <p className="eyebrow">Brand Capabilities</p>
        <h1>LifeBee 以四個服務能力模塊，支撐保險經紀公司的全流程數字化經營。</h1>
        <p className="lede">
          本頁聚焦 LifeBee 能為保險經紀公司創造的業務價值，不羅列後台操作細節，讓管理層、營運團隊與顧問都能快速理解平台定位。
        </p>
      </section>
      <section className="section-grid">
        {serviceCapabilities.map((item) => (
          <article key={item.title} className="glass-card section-card">
            <span className="pill">{item.audience}</span>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <Link className="secondary-button" href="/demo">
              預約了解
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
