---
title: Vibe Coding 项目 AI 协作对话整理
date: 2026-04-29
project: BeeFintech officialWebsite
repo: officialWebsite
tags:
  - VibeCoding
  - BeeFintech
  - AI协作
  - Obsidian
  - 比赛交付
---

# Vibe Coding 项目 AI 协作对话整理

> 本笔记整理当前对话窗口中的关键内容，用于 Obsidian 留痕、团队同步和后续比赛文档补充。内容为结构化整理版，不是逐字聊天记录。

## 1. 项目背景

本项目 `officialWebsite` 是小组为 Vibe Coding 实战成长赛创建的 BeeFintech 官网改造项目。

比赛核心目标：

- 提升全员 AI 研发与协同能力。
- 将 BeeFintech 官网从静态宣传页升级为动态服务平台。
- 通过 GitHub、标准文档和过程分享沉淀团队实践。
- 形成可复用的 AI 实战经验，后续可进入公司《Vibe Coding 实战手册》。

项目交付重点：

- 品牌宣传页面。
- 预约演示 API 对接。
- 至少 1 项增值服务功能。
- GitHub 托管代码和文档。
- 每位成员都要有独立 Commit。
- 必交 5 份文档。

## 2. 比赛规则要点

### 2.1 组队要求

- 3-4 人一组。
- 需要跨岗位、跨办公室组队。
- 覆盖前端/业务、中端/流程、后端/代码三类角色。
- 非技术同学也要参与需求、文档、分享和分支提交。

### 2.2 交付要求

必交 5 份文档：

- `docs/01-requirements.md`：SPEC 需求文档。
- `docs/02-execution-plan.md`：执行规划文档。
- `docs/03-ai-collaboration-log.md`：AI 协作记录。
- `docs/04-test-report.md`：测试说明。
- `docs/05-retrospective.md`：复盘总结。

关键规则：

- 代码和文档统一托管到 GitHub。
- 每人必须有独立 Commit。
- 只有单人提交会取消评奖资格。
- 最终至少保留两个分支代码。

### 2.3 时间节点

- 4 月 30 日前：完成组队报名，安装 Codex 或 Claude、GitHub、Obsidian。
- 5 月 10 日前：提交 SPEC 需求文档和执行规划文档。
- 5 月 15 日前：完成网站开发、测试文档、AI 协作记录和复盘文档。

### 2.4 评分规则

- 过程能力：50%，重点看需求拆解、AI 协作、Git 规范和问题解决过程。
- 作品质量：40%，重点看完整性、API 对接、增值服务实用性和代码质量。
- 分享共创：10%，重点看话题圈发帖、互动和互助贡献。

## 3. 项目技术与目录现状

当前项目仓库：

```text
officialWebsite
```

项目结构：

```text
apps/
  api/        Spring Boot 后端 API
  web/        Next.js 官网门户和后台
docs/         比赛交付文档
infra/        本地数据库初始化和基础设施
README.md    项目说明
AGENTS.md    AI 专家角色协作指南
```

当前技术路线：

- 前端：Next.js。
- 后端：Spring Boot。
- 数据库：MySQL。
- 仓库组织：monorepo。
- 文档格式：Markdown，适合 GitHub 和 Obsidian。

## 4. 已完成的 AI 协作产出

### 4.1 比赛内容要点整理

已将比赛通知整理为可执行要点，包括：

- 比赛目标。
- 参赛要求。
- 作品要求。
- 文档要求。
- 过程分享机制。
- 评分规则。
- 奖项和时间节点。

### 4.2 首批文档强化

已扩展：

- `docs/01-requirements.md`
- `docs/02-execution-plan.md`
- `docs/03-ai-collaboration-log.md`
- `README.md`

其中：

- 需求文档补充了项目背景、业务目标、用户角色、P0/P1/P2 范围、核心流程、非功能需求和验收标准。
- 执行规划补充了技术路线、当前基础、分工建议、里程碑、Git 规范、AI 协作规范、测试计划和风险应对。
- AI 协作记录补充了第 5、6 轮过程记录。
- README 修正了旧本地路径链接，改成相对路径。

### 4.3 AGENTS.md 专家角色协议

已新增并扩展：

- `AGENTS.md`

该文件面向非技术同学和 AI 助手共同使用，核心思路参考 `agency-agents-zh` 的专家角色库方式。

参考仓库：

- https://github.com/jnMetaCode/agency-agents-zh

本项目定义了 9 个专家角色：

- 资深开发负责人。
- 产品经理。
- 业务流程顾问。
- 技术文档工程师。
- 前端体验专家。
- 后端接口专家。
- 测试验收专家。
- Git 协作教练。
- AI 协作记录官。

非技术同学可以直接这样使用：

```text
请以【产品经理】角色帮我梳理这个需求。
请以【技术文档工程师】角色帮我整理成比赛文档。
请以【测试验收专家】角色帮我把刚才的手工测试写成测试说明。
请以【Git 协作教练】角色告诉我怎么提交自己的文档改动。
```

AI 默认输出格式：

```markdown
【使用角色】这里写专家角色

【我的判断】用 1-3 句话说明当前问题的关键点

【建议产出】直接给可复制内容、步骤或修改建议

【需要记录】如果这是比赛过程材料，说明应该写进哪个 docs 文件

【风险提醒】只写真实风险，不制造焦虑
```

## 5. 增值服务方向决策

本次对话中将增值服务主线收敛为：

```text
ROI 计算器 + 术语词典
```

选择原因：

- 比“资讯专栏”更像可交互服务。
- 更容易在演示中体现“静态官网升级为服务平台”。
- 可以形成“工具体验 -> 预约演示”的销售线索闭环。
- 适合非技术同学参与业务参数、术语解释和测试记录整理。

重要风险提醒：

- ROI 结果必须写成估算，不得写成正式财务承诺。

推荐文案：

```text
该结果基于当前输入参数进行估算，仅用于方案评估和沟通参考，不构成正式财务承诺。
```

## 6. GitHub 与 PR 说明

本次曾确认提交：

```text
commit: fb5236e405adbcffca7688444360a8b382dba050
short: fb5236e
branch: linkuan
remote branch: origin/linkuan
author: userLine <linkuan@beefintech.net>
remote: https://github.com/t1023199097-design/officialWebsite.git
```

GitHub 页面提示：

```text
linkuan had recent pushes
Compare & pull request
```

解释：

- 这不是提交变了。
- 这是 GitHub 提示 `linkuan` 账号刚推送了一个分支。
- 当前提交在 `origin/linkuan` 分支上，还没有进入 `main`。
- 可以点击 `Compare & pull request` 创建 PR。
- 为满足比赛“至少两个分支代码”要求，PR 创建或合并后不要急着删除 `linkuan` 分支。

建议 PR 标题：

```text
docs: 扩展需求规划与 AI 协作指南
```

建议 PR 描述：

```markdown
本次提交完成比赛首批文档强化：

- 扩展 SPEC 需求文档
- 扩展执行规划文档
- 新增 AGENTS.md，定义 AI 专家角色协作方式
- 补充 AI 协作记录
- 修正 README 项目内部链接

验证：
- git diff --check 通过
- 本次仅修改文档，未运行前后端构建
```

## 7. 可复用 Prompt 模板

### 7.1 非技术同学通用提问模板

```text
我现在的角色是非技术同学。
我要为 BeeFintech 官网比赛项目完成【具体任务】。
请用我能看懂的话帮我输出【需要的产物】。
产物要能放到【文档路径或使用场景】里。
如果涉及技术，请用业务语言解释，不要直接堆代码。
```

### 7.2 AI 协作记录整理 Prompt

```text
请以【AI 协作记录官】角色，把我下面这段 AI 使用过程整理成比赛记录。
要求包含：输入背景、使用工具、关键 Prompt、AI 产出、人工取舍、最终结果、后续风险。
输出内容要能直接放进 docs/03-ai-collaboration-log.md。
```

### 7.3 测试记录整理 Prompt

```text
请以【测试验收专家】角色，把我刚才的手工测试过程整理成测试说明。
要求包含：测试人、测试时间、测试环境、测试步骤、预期结果、实际结果、问题记录、结论。
输出内容要能直接放进 docs/04-test-report.md。
```

### 7.4 Git 协作 Prompt

```text
请以【Git 协作教练】角色，教我把当前文档修改提交到自己的分支。
我是非技术同学，请每一步都解释清楚，并提醒我哪些命令不要乱用。
```

## 8. 下一步行动清单

### 8.1 5 月 10 日前优先事项

- 检查 `docs/01-requirements.md` 是否符合 SPEC 需求文档要求。
- 检查 `docs/02-execution-plan.md` 是否符合执行规划文档要求。
- 补充真实 Prompt 到 `docs/03-ai-collaboration-log.md`。
- 确认每位成员至少完成一次独立 Commit。
- 在话题圈发布带 `#VibeCoding大赛` 的团队进展。

### 8.2 5 月 15 日前优先事项

- 将 ROI 计算器从预留模块升级为可演示功能。
- 补充术语词典内容。
- 完成预约演示从前端提交到后台查看的手工联调记录。
- 完成测试说明。
- 完成复盘总结。
- 保留至少两个 GitHub 分支。

## 9. 当前风险

- ROI 计算器目前是明确主线，但仍需代码实现成可演示功能。
- 非技术同学如果没有 Commit，会影响评奖资格。
- 文档不能只写结果，还要持续补充过程证据。
- 如果真实 API 接入不稳定，应先保证本地演示链路可跑。
- 默认后台账号只适合本地演示，不能包装成生产级安全方案。

## 10. 本次对话形成的文件资产

已形成或更新的项目文件：

- `README.md`
- `AGENTS.md`
- `docs/01-requirements.md`
- `docs/02-execution-plan.md`
- `docs/03-ai-collaboration-log.md`
- `docs/obsidian/2026-04-29-vibe-coding-ai-collaboration-note.md`

建议后续把这份 Obsidian 笔记作为团队会议纪要和 AI 协作留痕的索引文件。
