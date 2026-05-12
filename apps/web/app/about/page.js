export default function AboutPage() {
  return (
    <div className="page-stack">
      <section className="page-hero">
        <p className="eyebrow">About The Build</p>
        <h1>Built for a cross-functional AI collaboration competition.</h1>
        <p className="lede">
          这个项目骨架兼顾业务展示、API 对接、多人协作和文档沉淀，方便前端、后端和业务同学并行推进。
        </p>
      </section>
      <section className="glass-card narrative-card">
        <p>
          首版目标不是做完整产品，而是建立一个可持续扩展的平台底座。基础能力优先落下，增值模块统一预留接口、页面和后台入口。
        </p>
      </section>
    </div>
  );
}

