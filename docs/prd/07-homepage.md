# 07 — 首页改版与资讯模块

> 最后更新：2026-05-21
> 新增日期：2026-05-15（初版），2026-05-17（资讯模块），2026-05-21（BOSS速查更新）

---

## 1. 模块定位

首页是用户进入网站的第一入口，以武侠（Wuxia）沉浸式美学风格呈现，包含 Hero 大图、分类导航、攻略速查和热门资讯等核心模块。路由：`/`（即 `/{locale}/`）。

## 2. 页面结构（自上而下）

### 2.1 Hero Section

- 全屏背景图（`/images/hero-bg.jpg`），`background-position: center 25%` 聚焦上部
- 底部渐变遮罩（`from-stone-950` → 透明）保证文字可读性
- 标题：`gold-shimmer-text` 金色流光动画（6s 循环渐变）
- 副标题：两侧金色装饰线 + `tracking-wider`
- 底部滚动指示器：`scroll-bounce` 弹跳动画 + 箭头 SVG
- 响应式高度：`min-h-[420px]` / `sm:min-h-[520px]` / `lg:min-h-[620px]`

### 2.2 CTA — 攻略导航 + 下载游戏

双栏布局（`lg:grid-cols-2`）：

**左栏 — "开启你的江湖之旅"攻略导航按钮**
- 标题 + 副标题 + 2×3 网格按钮（新手入门、流派攻略、职业攻略、装备系统、BOSS攻略、探索收集）
- 每个按钮：圆角卡片 + 左侧文字 + 右侧箭头 SVG + hover 金色发光

**右栏 — "下载游戏"**
- 仅保留 2 个下载渠道：
  - **海外官方**（wherewindsmeetgame.com）— 地球仪 SVG 图标
  - **Steam**（Steam Store 链接）— Steam SVG 图标
- 下载卡片样式与攻略按钮一致（圆角 + 渐变背景 + hover 发光）

### 2.3 Feature Cards — 5 大攻略分类

5 张武侠风格功能卡片，`grid-cols-2 sm:grid-cols-3 lg:grid-cols-5`：

| 卡片 | 路由 | SVG 图标 |
|------|------|----------|
| 任务攻略 | `/{locale}/quests` | scroll（卷轴） |
| 流派攻略 | `/{locale}/builds` | swords（双剑） |
| 探索收集 | `/{locale}/exploration` | compass（罗盘） |
| 服装展示 | `/{locale}/equipment` | robe（长袍） |
| BOSS攻略 | `/{locale}/bosses` | skull（骷髅） |

卡片设计：
- `corner-accent` 金色角落装饰（`::before` / `::after` 伪元素）
- 顶部图标区域（`h-24 sm:h-28`）+ 金色光晕 `drop-shadow`
- 渐变背景：`from-stone-900/80 to-stone-950/80`
- Hover：边框变金色 + 阴影

### 2.4 热门资讯 + 攻略速查

双栏布局（`lg:grid-cols-2`），左右对齐：

**左栏 — 热门资讯**
- 标题区：金色左边框（`border-l-4 border-amber-500`）+ 标题 + 副标题
- 资讯列表：最多显示若干条新闻
- 每条资讯：缩略图（`<img>` + `loading="lazy"`）+ 标题（两行截断）+ 日期
- 点击跳转站内资讯详情页（`<Link>`，非外部链接）
- 无资讯时显示占位文案

**右栏 — 攻略速查**
- 4 个分类小节：
  - **奇遇任务**：刀环记、百戏乾坤、瘦骨罗汉、闻籁之声、杀马记、真假卧佛 → `/quests`
  - **探索收集**：宝箱、蹊跷、奇术、前尘旧物、妙妙喵、猫戏 → `/exploration`
  - **BOSS攻略**：无相皇、小十七、叶万山、田英、千夜、容鸢、郑鄂、伊刀、舞狮兄弟、睡道人、蛇郎中、煞地神、皮影师、鬼公子、白狼主 → `/bosses`
  - **新手入门**：职业推荐、开荒指南、装备强化、门派选择、常见问题 → 各对应页面
- 每个链接：圆角标签样式（`rounded-md border bg-stone-900/60 px-3 py-1.5 text-xs`）
- 右栏内容可滚动（`overflow-y-auto`）以配合左栏对齐

## 3. 资讯详情页

### 3.1 路由

`/{locale}/news/[slug]` — SSG 预渲染

### 3.2 数据结构

```typescript
// src/data/news.ts
interface NewsArticle {
  slug: string;
  title: { zh: string; en: string };
  date: string;
  source: { zh: string; en: string };
  thumbnail: string;
  content: Array<
    | { type: "paragraph"; text: { zh: string; en: string } }
    | { type: "image"; src: string; alt: string }
  >;
}
```

### 3.3 页面布局

- 面包屑导航：首页 / 热门资讯 / 文章标题
- 文章头部：标题（h1）+ 日期 + 来源
- 正文内容：段落（`text-base sm:text-lg leading-relaxed`）+ 图片（圆角 + 边框）交替排列
- 底部返回链接：左箭头 + "返回首页"

### 3.4 资讯内容规范

- 文章内容爬取自外部网站，存储在 `src/data/news.ts`
- 图片下载至 `public/images/news/` 目录
- **用词规范**（自动替换）："外媒" → "媒体"，"国" → "中国"
- 不使用外部链接跳转，所有资讯均为站内页面

### 3.5 当前资讯

| Slug | 标题 | 日期 | 来源 |
|------|------|------|------|
| `pc-performance-review` | 媒体赞《燕云十六声》PC性能：优化出色 美术封顶 | 2025-11-18 | 游侠网 |

## 4. Wuxia 主题 CSS

新增于 `src/app/globals.css`：

| 类名 / 动画 | 用途 |
|-------------|------|
| `ink-wash-bg` | 多层径向渐变水墨背景效果 |
| `wuxia-pattern` | 微弱金色网格线纹理 |
| `gold-shimmer-text` | 标题金色流光动画（6s 循环） |
| `corner-accent` | 卡片四角金色装饰线（伪元素） |
| `play-button-pulse` | 播放按钮脉冲金色阴影 |
| `skeleton` | 骨架屏加载微光动画 |
| `scroll-indicator` | 滚动箭头弹跳动画 |

### 自定义颜色（`@theme`）

| 变量 | 值 | 用途 |
|------|----|------|
| `--color-wuxia-gold` | `#d4a017` | 主金色 |
| `--color-wuxia-red` | `#8b0000` | 暗红色 |
| `--color-wuxia-dark` | `#0a0a0a` | 深黑背景 |
| `--color-wuxia-gold-light` | `#e8c547` | 亮金色 |
| `--color-wuxia-ink` | `#1a1410` | 墨色背景 |

## 5. 字典结构

`homepage` 键位于 `zh.json` / `en.json`，包含：

| 键 | 内容 |
|----|------|
| `hero` | title, subtitle, description, cta, ctaSecondary |
| `stats` | players, guides, classes, regions（各含 label + value） |
| `features` | quests, builds, exploration, costume, bosses（各含 title + desc） |
| `news` | title, subtitle, viewAll, comingSoon, placeholder, download.*, newsItems[] |
| `guideCategories` | title, sections[]（含 key, title, links[]） |
| `cta` | title, subtitle, video.*, categories.*, allGuides |

## 6. 代码路径

| 文件 | 说明 |
|------|------|
| `src/app/[locale]/page.tsx` | 首页（Server Component） |
| `src/app/globals.css` | Wuxia 主题样式 |
| `src/data/news.ts` | 资讯文章数据 |
| `src/app/[locale]/news/[slug]/page.tsx` | 资讯详情页 |
| `src/i18n/dictionaries/zh.json` | 中文文案（`homepage` 键） |
| `src/i18n/dictionaries/en.json` | 英文文案（`homepage` 键） |
| `public/images/hero-bg.jpg` | Hero 背景图 |
| `public/images/news/` | 资讯文章缩略图 |
