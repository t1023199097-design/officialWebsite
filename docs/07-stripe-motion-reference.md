# Stripe 官网动效参考执行文档

## 1. 目标

本文用于把 Stripe 中文官网 `https://stripe.com/zh-us` 的首页动效拆成 BeeFintech / LifeBee 官网可执行的前端实现参考。

重点参考区域：

- 页面标题：`全球商务的 支柱`
- 交互模块：标题下方 4 个统计指标
- 主题能力：破晓前、日出、日间、黄昏、日落、夜间
- 背景动效：随统计项和主题切换变化的数据可视化背景

本项目不建议直接复制 Stripe 的代码、素材或视觉资产。应借鉴交互结构和实现思路，并改造成保险科技业务场景。

## 2. 实测结论

实测时间：2026-05-07

Stripe 该区域不是普通卡片 hover，而是一个由状态驱动的动效系统：

- 统计项有 4 个按钮，点击后切换 active 状态。
- 鼠标移入统计项时，只移动顶部/底部高亮指示线，并弱化或强调文字。
- 点击统计项时，会切换当前 active 指标，并触发背景数据可视化动画变化。
- 主题切换按钮会切换时间段主题，背景渐变、文字颜色、边框颜色和 canvas 色板同步变化。
- 背景主要动效由 `canvas` 渲染，页面标注为 `three.js r178`。
- 页面提供暂停动画按钮，说明该动效系统考虑了动效控制和可访问性。

## 3. 对 LifeBee 官网的可借鉴点

当前首页已经有 `stats-band` 和 `stat-card`，适合升级为一个更有演示感的“业务能力支柱”板块。

建议把 Stripe 的金融基础设施表达，改造成 LifeBee 的保险科技表达：

| Stripe 参考 | LifeBee 改造方向 |
| --- | --- |
| 全球商务的支柱 | 保险科技服务支柱 |
| 135+ 支付方式 | 1,200+ 活跃用户 |
| US$1.9 万亿处理额 | 80,000+ 客户资料 |
| 99.999% 正常运行时间 | 300,000+ 流程个案 |
| 2 亿+ 订阅量 | 35% 平均效率提升 |
| 时间主题切换 | 专业蓝 / 暖金 / 夜间演示 |
| Three.js 数据线条 | CSS/SVG 放射线或轻量 canvas |

## 4. 推荐实现路线

### P0：无新依赖版本

目标：先用 React 状态 + CSS 变量 + SVG/CSS 背景做出 70% 的 Stripe 体验。

不引入 `three.js`，避免增加复杂度和比赛交付风险。

建议改动文件：

- `apps/web/src/lib/site-content.js`
- `apps/web/app/page.js`
- `apps/web/app/globals.css`

实现能力：

- 统计项点击切换 active。
- 鼠标移入时移动高亮指示线。
- 主题按钮切换 `day` / `gold` / `night`。
- 背景用 radial-gradient + SVG 放射线模拟数据流。
- 支持 `prefers-reduced-motion`，用户系统关闭动效时不播放动画。

### P1：组件化版本

目标：把 P0 的逻辑从首页抽成组件，方便复用到服务页或解决方案页。

建议新增文件：

- `apps/web/src/components/business-pillars.js`

建议组件接口：

```jsx
<BusinessPillars
  title="保险科技服务支柱"
  items={demoHomeContent.metrics}
  themes={demoHomeContent.pillarThemes}
/>
```

### P2：高级 canvas 版本

目标：如果 P0/P1 已经稳定，再考虑 canvas 粒子线条。

注意：不建议在比赛 P0 阶段引入 `three.js`。如果后续确实要做，可先使用原生 Canvas 2D，而不是直接上 WebGL。

## 5. P0 实现设计

### 5.1 数据结构

在 `apps/web/src/lib/site-content.js` 中新增：

```js
pillarThemes: [
  { key: "day", label: "日间", accent: "#0b5fd7" },
  { key: "gold", label: "暖金", accent: "#b6612a" },
  { key: "night", label: "夜间", accent: "#f8fbff" }
]
```

继续复用已有 `demoHomeContent.metrics`，避免重复维护数据。

### 5.2 React 状态

首页当前是服务端组件。如果要加入 hover/click 状态，建议新增客户端组件 `BusinessPillars`，在组件顶部使用：

```js
"use client";
```

核心状态：

```js
const [activeIndex, setActiveIndex] = useState(0);
const [hoverIndex, setHoverIndex] = useState(null);
const [theme, setTheme] = useState("day");

const indicatorIndex = hoverIndex ?? activeIndex;
```

### 5.3 交互结构

组件结构建议：

```jsx
<section className={`business-pillars business-pillars--${theme}`}>
  <div className="business-pillars__background" aria-hidden="true" />

  <div className="business-pillars__inner">
    <h2>保险科技服务支柱</h2>

    <div
      className="business-pillars__stats"
      style={{ "--indicator-index": indicatorIndex }}
    >
      {items.map((item, index) => (
        <button
          key={item.label}
          type="button"
          className={index === activeIndex ? "pillar-stat is-active" : "pillar-stat"}
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
          onClick={() => setActiveIndex(index)}
        >
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </button>
      ))}

      <span className="business-pillars__indicator" aria-hidden="true" />
    </div>

    <div className="business-pillars__theme-switcher">
      {themes.map((item) => (
        <button
          key={item.key}
          type="button"
          className={theme === item.key ? "is-active" : ""}
          onClick={() => setTheme(item.key)}
        >
          {item.label}
        </button>
      ))}
    </div>
  </div>
</section>
```

## 6. CSS 实现要点

核心思想：用 CSS 变量控制高亮线位置，用主题 class 控制背景和文字颜色。

```css
.business-pillars {
  position: relative;
  overflow: hidden;
  border-radius: 32px;
  border: 1px solid var(--line);
  background: #f8fbff;
}

.business-pillars__background {
  position: absolute;
  inset: 0;
  opacity: 0.9;
  transition: background 600ms ease, opacity 600ms ease;
}

.business-pillars--day .business-pillars__background {
  background:
    radial-gradient(circle at 50% 110%, rgba(43, 120, 255, 0.45), transparent 42%),
    linear-gradient(180deg, #f8fbff 0%, #eaf3ff 100%);
}

.business-pillars--gold .business-pillars__background {
  background:
    radial-gradient(circle at 50% 110%, rgba(182, 97, 42, 0.45), transparent 42%),
    linear-gradient(180deg, #fff8ef 0%, #f1dfc7 100%);
}

.business-pillars--night .business-pillars__background {
  background:
    radial-gradient(circle at 50% 110%, rgba(92, 92, 255, 0.72), transparent 46%),
    linear-gradient(180deg, #101a45 0%, #28227a 100%);
}

.business-pillars__inner {
  position: relative;
  z-index: 1;
  padding: clamp(42px, 7vw, 96px) 28px;
}

.business-pillars__stats {
  --indicator-index: 0;
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  border-top: 1px solid rgba(80, 90, 120, 0.2);
  border-bottom: 1px solid rgba(80, 90, 120, 0.2);
}

.pillar-stat {
  appearance: none;
  border: 0;
  background: transparent;
  padding: 36px 18px;
  color: rgba(30, 48, 78, 0.48);
  cursor: pointer;
  transition: color 260ms ease, transform 260ms ease;
}

.pillar-stat:hover {
  color: rgba(30, 48, 78, 0.72);
  transform: translateY(-2px);
}

.pillar-stat.is-active {
  color: #07162d;
}

.pillar-stat strong {
  display: block;
  font-size: clamp(2rem, 5vw, 4rem);
  line-height: 1;
}

.pillar-stat span {
  display: block;
  margin-top: 12px;
  font-weight: 700;
}

.business-pillars__indicator {
  position: absolute;
  left: 0;
  top: -1px;
  width: 25%;
  height: 1px;
  transform: translateX(calc(var(--indicator-index) * 100%));
  background: linear-gradient(90deg, transparent, currentColor, transparent);
  transition: transform 400ms cubic-bezier(0.4, 0, 0.2, 1);
}

.business-pillars--night {
  color: #f8fbff;
}

.business-pillars--night .pillar-stat {
  color: rgba(248, 251, 255, 0.42);
}

.business-pillars--night .pillar-stat:hover {
  color: rgba(248, 251, 255, 0.7);
}

.business-pillars--night .pillar-stat.is-active {
  color: #fff;
}

@media (max-width: 760px) {
  .business-pillars__stats {
    grid-template-columns: 1fr 1fr;
  }

  .business-pillars__indicator {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .business-pillars *,
  .business-pillars *::before,
  .business-pillars *::after {
    transition: none !important;
    animation: none !important;
  }
}
```

## 7. 背景动效可选方案

### 方案 A：纯 CSS 放射光

优点：最稳、无依赖、实现快。

做法：

- 用 `radial-gradient` 做光源。
- 用 `::before` 叠加重复线性渐变模拟数据线。
- 用 `transform: translateY()` 或 `opacity` 做缓慢流动。

适合当前比赛版本。

### 方案 B：SVG 放射线

优点：线条可控，视觉比纯 CSS 更精细。

做法：

- 在组件里放一个 `svg`。
- 用多条 `line` 或 `path` 从底部中心向外发散。
- activeIndex 变化时切换不同线条组合。

适合 P1 版本。

### 方案 C：Canvas 2D 粒子

优点：更接近 Stripe 的动态数据感。

风险：

- 需要处理暂停、销毁、resize、低性能设备降级。
- 测试成本高于 CSS/SVG。

建议放到 P2。

## 8. 任务拆解

### 第 1 步：新增客户端组件

文件：`apps/web/src/components/business-pillars.js`

验收：

- 组件能接收 `items` 和 `themes`。
- 点击统计项能切换 active。
- hover 能移动指示线。

### 第 2 步：替换首页 stats-band

文件：`apps/web/app/page.js`

做法：

- 引入 `BusinessPillars`。
- 用 `BusinessPillars` 替换当前 `stats-band`。

验收：

- 首页仍可正常打开。
- 原有 4 个指标内容不丢失。

### 第 3 步：补充主题数据

文件：`apps/web/src/lib/site-content.js`

做法：

- 在 `demoHomeContent` 内新增 `pillarThemes`。

验收：

- 页面展示 3 个主题按钮。
- 点击主题按钮能切换视觉风格。

### 第 4 步：补充样式

文件：`apps/web/app/globals.css`

做法：

- 新增 `business-pillars` 相关样式。
- 移动端改成 2 列或单列。
- 增加 `prefers-reduced-motion` 降级。

验收：

- 桌面端 4 列展示。
- 移动端不横向溢出。
- 系统关闭动效时没有持续动画。

## 9. 验收标准

功能验收：

- 用户可以点击 4 个统计项，active 状态正确变化。
- 鼠标移入不同统计项时，高亮线跟随移动。
- 用户可以切换 3 个主题。
- 主题切换后背景、文字、按钮状态同步变化。
- 移动端布局可读，不出现横向滚动。

视觉验收：

- 首屏信息仍然清楚，不被动效抢走注意力。
- 指标数字是主视觉，描述文字可读。
- 夜间主题对比度足够。
- 动效节奏偏慢，适合保险科技官网，不做游戏化效果。

工程验收：

- 不新增依赖。
- `npm run test:web` 通过。
- `npm run build:web` 通过。
- 无 console error。
- 组件销毁不产生定时器或动画泄漏。

## 10. 风险提醒

- 不要直接照搬 Stripe 静态资源、CSS 文件或 JS 文件。
- 不要为了复刻 WebGL 效果提前引入 `three.js`，当前比赛阶段更需要稳定和可解释。
- 统计数据如果用于正式官网，需要确认真实口径；如果是演示数据，要标明为演示或估算。
- 夜间主题不要默认开启，保险科技官网更适合默认清晰、专业、可信的日间或暖金主题。

## 11. 推荐落地版本

当前最推荐落地的是 P0：

- React 客户端组件控制 active、hover、theme。
- CSS 变量控制指示线位置。
- CSS 渐变模拟主题背景。
- SVG 或 CSS 轻量模拟数据放射线。

这样可以在不增加依赖的情况下，快速把首页统计区从普通卡片升级成有交互记忆点的演示模块。
