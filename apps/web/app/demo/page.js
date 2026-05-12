import { DemoRequestForm } from "@/components/demo-request-form";

export default function DemoPage() {
  return (
    <div className="page-stack">
      <section className="page-hero">
        <p className="eyebrow">Book a Demo</p>
        <h1>預約 LifeBee 諮詢演示，讓團隊根據你的業務場景安排跟進。</h1>
        <p className="lede">
          表單會收集必要聯絡資料、期望預約時間與服務方向，提交後由 LifeBee 團隊跟進。若正式 API 地址變更，可透過環境配置替換。
        </p>
      </section>
      <DemoRequestForm />
    </div>
  );
}
