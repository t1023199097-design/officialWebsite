import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-stack">
      <section className="page-hero">
        <p className="eyebrow">404</p>
        <h1>找不到你要瀏覽的頁面。</h1>
        <p className="lede">頁面可能已移動、暫時不可用，或網址輸入有誤。你可以返回首頁，或直接預約 LifeBee 諮詢演示。</p>
      </section>
      <section className="cta-band">
        <div>
          <p className="eyebrow">Next Step</p>
          <h2>繼續了解 LifeBee 的保險經紀數字化服務。</h2>
          <p>首頁、預約演示和聯絡我們都可以幫你回到主要路徑。</p>
        </div>
        <Link className="primary-button" href="/">
          返回首頁
        </Link>
        <Link className="secondary-button" href="/demo">
          預約演示
        </Link>
        <Link className="secondary-button" href="/contact">
          聯絡我們
        </Link>
      </section>
    </div>
  );
}
