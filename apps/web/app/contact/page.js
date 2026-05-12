import Link from "next/link";
import { contactContent } from "@/lib/site-content.mjs";

export default function ContactPage() {
  return (
    <div className="page-stack">
      <section className="page-hero">
        <p className="eyebrow">{contactContent.hero.eyebrow}</p>
        <h1>{contactContent.hero.title}</h1>
        <p className="lede">{contactContent.hero.description}</p>
      </section>

      <section className="section-grid">
        {contactContent.channels.map((channel) => (
          <article className="glass-card section-card" key={channel.title}>
            <h2>{channel.title}</h2>
            <p>{channel.body}</p>
          </article>
        ))}
      </section>

      <section className="cta-band">
        <div>
          <p className="eyebrow">Book a Demo</p>
          <h2>想更具體了解 LifeBee 是否適合你的團隊？</h2>
          <p>提交預約諮詢演示需求，LifeBee 團隊會根據你的業務場景安排跟進。</p>
        </div>
        <Link className="primary-button" href="/demo">
          預約諮詢演示
        </Link>
      </section>
    </div>
  );
}
