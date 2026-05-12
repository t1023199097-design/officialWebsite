import { DemoRequestForm } from "@/components/demo-request-form";

export default function DemoPage() {
  return (
    <div className="page-stack">
      <section className="page-hero">
        <p className="eyebrow">Book a Demo</p>
        <h1>Collect leads through the platform, not a static contact block.</h1>
        <p className="lede">
          表单会提交到 Java 后端，由后端统一做校验、落库和后续第三方预约流程编排。
        </p>
      </section>
      <DemoRequestForm />
    </div>
  );
}

