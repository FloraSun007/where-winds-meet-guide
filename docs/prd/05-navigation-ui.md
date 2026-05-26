# 05 — 导航与UI模块

> 最后更新：2026-05-17

---

## 1. 导航菜单

| 顺序 | Key | 中文 | English | 路由 |
|------|-----|------|---------|------|
| 1 | home | 首页 | Home | `/` |
| 2 | builds | 流派攻略 | Build Guides | `/builds` |
| 3 | equipment | 任务攻略 | Quests | `/quests` |
| 4 | exploration | 探索收集 | Exploration | `/exploration` |
| 5 | bosses | BOSS攻略 | Boss Guides | `/bosses` |
| 6 | systems | 游戏系统 | Game Systems | `/systems` |
| 7 | faq | FAQ百科 | FAQ | `/faq` |
| 8 | membership | 会员中心 | Membership | `/membership` |

> 导航 key `equipment` 为历史原因，路由已指向 `/quests`。

## 2. UI 组件

| 组件 | 路径 | 说明 |
|------|------|------|
| Header | `src/components/Header.tsx` | 导航栏 + 语言切换 + 移动端菜单 |
| Footer | `src/components/Footer.tsx` | 页脚 |
| AdBanner | `src/components/AdBanner.tsx` | 广告位（当前隐藏） |
| PremiumGate | `src/components/PremiumGate.tsx` | 付费墙弹窗 |
| AuthModal | `src/components/AuthModal.tsx` | 登录/注册弹窗 |
| ClassCard | `src/components/ClassCard.tsx` | 职业/流派卡片 |
| TableOfContents | `src/components/TableOfContents.tsx` | 文章目录导航 |
| GuideLayout | `src/components/GuideLayout.tsx` | 攻略页通用布局 |
| GuideActions | `src/components/GuideActions.tsx` | 攻略页操作按钮 |

## 3. 设计规范

### 3.1 主题与配色

- **主题**：暗色（Tailwind `dark`），石板色系（stone-xxx）
- **强调色**：琥珀金（amber-400/500），用于标题、按钮、徽章
- **危险色**：红色（red-400/500）
- **成功色**：翡翠绿（emerald-400）
- **奇术类型色**：逐寇=red、通用=blue、御风=emerald、娱乐=purple

### 3.2 Wuxia 武侠主题色（`@theme` 自定义变量）

| 变量 | 值 | 用途 |
|------|----|------|
| `--color-wuxia-gold` | `#d4a017` | 主金色，用于标题、边框、图标 |
| `--color-wuxia-red` | `#8b0000` | 暗红色，用于背景渐变点缀 |
| `--color-wuxia-dark` | `#0a0a0a` | 深黑背景 |
| `--color-wuxia-gold-light` | `#e8c547` | 亮金色，用于 hover 状态 |
| `--color-wuxia-ink` | `#1a1410` | 墨色背景 |

### 3.3 Wuxia CSS 动画与工具类

| 类名 | 效果 |
|------|------|
| `ink-wash-bg` | 多层径向渐变（金色/暗红低透明度），水墨晕染背景 |
| `wuxia-pattern` | 微弱金色网格线纹理（`repeating-linear-gradient`） |
| `gold-shimmer-text` | 标题金色流光动画（渐变文字 + 6s 循环位移） |
| `corner-accent` | 卡片四角金色装饰线（`::before` / `::after` 伪元素） |
| `play-button-pulse` | 播放按钮脉冲金色阴影（2.5s ease-in-out） |
| `skeleton` | 骨架屏加载微光动画（1.8s ease-in-out） |
| `scroll-indicator` | 滚动箭头弹跳动画（2s ease-in-out） |

### 3.4 响应式设计

- **移动优先**：`sm:` `lg:` 断点响应
- **字体**：系统默认（Tailwind sans），攻略内容 `leading-relaxed`
- **全局滚动**：`scroll-behavior: smooth`
- **选中色**：`rgba(217, 119, 6, 0.3)` 金色半透明
- **滚动条**：暗色系自定义样式（stone 色轨道 + thumb）
