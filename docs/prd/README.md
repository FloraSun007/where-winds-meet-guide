# 燕云十六声攻略站 — PRD 文档索引

> 最后更新：2026-05-21
> 文档结构：按业务模块拆分，每个模块独立 PRD 文件

---

## 文档目录

| 文件 | 模块 | 说明 |
|------|------|------|
| [00-overview.md](00-overview.md) | 项目总览 | 项目目标、技术栈、架构设计、用户系统 |
| [01-builds.md](01-builds.md) | 流派攻略 | 8大流派攻略页面、流派分类、心法搭配 |
| [02-quests.md](02-quests.md) | 任务攻略 | 3标签页布局、49个奇遇任务、18个分步攻略、区域筛选、搜索 |
| [03-exploration.md](03-exploration.md) | 探索收集 | 宝箱、蹊跷、猫戏收集攻略，11个类别，62个地点 |
| [04-mystic-skills.md](04-mystic-skills.md) | 奇术攻略 | 45个奇术的分步图文攻略，含游侠网截图 |
| [05-navigation-ui.md](05-navigation-ui.md) | 导航与UI | 导航结构、组件清单、Wuxia 设计规范 |
| [06-content-progress.md](06-content-progress.md) | 内容进度 | 已完成/待完成内容清单、构建信息、已知限制 |
| [07-homepage.md](07-homepage.md) | 首页改版与资讯 | Hero、CTA、功能卡片、热门资讯、攻略速查、资讯详情页 |
| [08-bosses.md](08-bosses.md) | BOSS攻略 | 16个BOSS完整攻略、副本攻略、阶段机制详解 |

---

## 模块与代码对应关系

| 模块 | 主要代码路径 |
|------|-------------|
| 首页 | `src/app/[locale]/page.tsx`, `src/app/globals.css` |
| 资讯 | `src/data/news.ts`, `src/app/[locale]/news/[slug]/page.tsx` |
| 流派攻略 | `src/app/[locale]/builds/`, `src/content/classes.ts` |
| 任务攻略 | `src/app/[locale]/quests/`, `src/data/encounter-quests.ts`, `src/data/encounter-quest-steps.ts` |
| BOSS攻略 | `src/app/[locale]/bosses/`, `src/content/bosses.ts` |
| 探索收集 | `src/app/[locale]/exploration/`, `src/data/baoxiang-guides.ts`, `src/data/qijiao-guides.ts`, `src/data/maoxi-guides.ts` |
| 奇术攻略 | `src/content/mystic-skills.ts`, 探索页奇术标签 |
| 用户系统 | `src/app/api/auth/`, `src/app/api/likes/`, `src/app/api/bookmarks/`, `src/app/api/comments/` |
| 国际化 | `src/i18n/dictionaries/en.json`, `src/i18n/dictionaries/zh.json` |

---

## 新增模块指引

新增业务线时：
1. 在 `docs/prd/` 下创建新的模块文件，编号递增（如 `09-xxx.md`）
2. 在本索引文件中添加对应条目
3. 在 `06-content-progress.md` 中更新进度
