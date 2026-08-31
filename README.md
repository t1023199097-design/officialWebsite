# BeeFintech Official Website Starter

BeeFintech AI 实战赛官网改造项目单仓骨架。

## Stack

- Frontend: `Next.js` in [apps/web](apps/web)
- Backend: `Spring Boot` in [apps/api](apps/api)
- Docs: [docs](docs)
- Infra: [docker-compose.yml](docker-compose.yml), [infra/mysql/init/001-init.sql](infra/mysql/init/001-init.sql)

## Repository Layout

```text
apps/
  api/        Spring Boot aggregation platform
  web/        Next.js portal and admin surface
docs/         Competition docs and architecture notes
infra/        Local infra bootstrap
```

## What Is Included

- 品牌官网首页、方案页、关于页、预约演示页
- Java 后端公开 API、后台登录 API、预约列表 API、模块注册 API
- 最小可用后台骨架：登录、预约列表、模块列表、模块占位详情
- 三类增值服务统一预留：
  - 内容服务：资讯 / 政策专栏
  - 客户赋能：FAQ / 工单 / 更新日志
  - 工具服务：ROI 计算器 / 术语词典
- 比赛必交文档模板与架构说明

## Local Run

### 1. Start MySQL

```bash
docker compose up -d mysql
```

### 2. Run Backend

```bash
mvn -pl apps/api spring-boot:run "-Dmaven.repo.local=.m2repo"
```

### 3. Run Frontend

```bash
npm install
npm run dev:web
```

## Default Admin Credentials

- Username: `admin`
- Password: `ChangeMe123!`

Use `/admin/login` to obtain a local admin session token stored in `localStorage`.

## Competition Document Index

- [需求文档](docs/01-requirements.md)
- [规划执行文档](docs/02-execution-plan.md)
- [AI 协作记录](docs/03-ai-collaboration-log.md)
- [测试说明](docs/04-test-report.md)
- [复盘总结](docs/05-retrospective.md)
- [架构说明](docs/architecture.md)

