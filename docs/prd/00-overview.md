# 00 — 项目总览

> 最后更新：2026-05-17

---

## 1. 项目目标

为网易旗下开放世界武侠游戏 **燕云十六声（Where Winds Meet）** 海外版搭建一个**中英双语游戏攻略网站**，以图文攻略为核心内容，通过 SEO 优化获取自然搜索流量，实现广告变现。

## 2. 核心定位

- **内容类型**：流派攻略、副本BOSS攻略、主线/支线/奇遇任务攻略、探索收集攻略、奇术攻略、游戏资讯
- **目标用户**：海外华语玩家 + 英语玩家
- **商业模式**：广告位（预留）+ 会员付费（付费墙）

## 3. 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | Next.js 16（App Router, Turbopack） |
| 渲染 | RSC + SSR/SSG（`generateStaticParams`） |
| 样式 | Tailwind CSS v4（暗色主题，武侠美学风格） |
| 国际化 | URL 路径 `/en/` `/zh/`，字典 JSON 驱动 |
| 代理 | `proxy.ts`（Next.js 16 中间件，替代 middleware.ts） |
| 存储 | JSON 文件存储（`data/` 目录） |
| 部署 | Node.js 服务器 / 静态导出 |

## 4. 路由结构

```
src/app/
├── layout.tsx                    # 根布局（透传 children）
├── globals.css                   # Tailwind + Wuxia 主题样式
├── [locale]/
│   ├── layout.tsx                # 语言布局（Header + Footer）
│   ├── page.tsx                  # 首页（武侠风格，Hero + CTA + 功能卡片 + 资讯 + 速查）
│   ├── news/
│   │   └── [slug]/page.tsx       # 资讯详情页（SSG 预渲染）
│   ├── builds/
│   │   ├── page.tsx              # 流派攻略列表页
│   │   ├── [id]/page.tsx         # 动态流派详情页
│   │   └── swordsman/ ...       # 8 个流派专用页
│   ├── bosses/
│   │   ├── page.tsx              # BOSS列表页
│   │   └── [id]/page.tsx         # BOSS详情页
│   ├── quests/page.tsx           # 任务攻略页
│   ├── exploration/page.tsx      # 探索收集攻略（宝箱、蹊跷、猫戏、奇术等）
│   ├── systems/page.tsx          # 系统说明
│   ├── faq/page.tsx              # FAQ
│   └── membership/page.tsx       # 会员页面
├── api/
│   ├── builds/route.ts           # 攻略列表聚合 API
│   ├── likes/route.ts            # 点赞 API
│   ├── bookmarks/route.ts        # 收藏 API
│   ├── comments/route.ts         # 评论 API
│   └── auth/ (register/login/logout/profile)
```

## 5. 国际化方案

- **URL 结构**：`/{locale}/path`，locale 为 `en` 或 `zh`
- **字典文件**：`src/i18n/dictionaries/en.json`、`zh.json`
- **locale 检测**：`proxy.ts` 自动检测 URL，无 locale 前缀时重定向至默认语言
- **语言切换**：Header 组件保留当前路径切换语言
- **内容国际化**：结构化数据使用 `{ en, zh }` 对象 + `t()` 辅助函数

## 6. 代理（proxy.ts）职责

1. **Locale 重定向**：无 locale 前缀的请求重定向至 `/{defaultLocale}/...`
2. **游客 ID 分配**：首次访问自动设置 `guest_id` cookie
3. **付费内容拦截**：检查 `wwm_membership` cookie

## 7. 用户系统

### 7.1 设计理念

- **零门槛参与**：浏览、点赞、收藏、评论均不需要登录
- **自动游客 ID**：首次访问自动分配 UUID 作为 `guest_id`
- **可选注册**：用户名+密码注册，注册后可修改昵称、查看收藏夹

### 7.2 Cookie 策略

| Cookie | 用途 | 有效期 | httpOnly |
|--------|------|--------|----------|
| `guest_id` | 用户唯一标识 | 1年 | ✅ |
| `session_user` | 登录会话 | 30天 | ✅ |
| `wwm_membership` | 会员标识 | — | ✅ |

### 7.3 API 接口

| 路由 | 方法 | 说明 |
|------|------|------|
| `/api/builds` | GET | 获取所有攻略条目及点赞/评论统计 |
| `/api/likes` | GET/POST | 获取/切换点赞 |
| `/api/bookmarks` | GET/POST | 获取/切换收藏 |
| `/api/comments` | GET/POST | 获取/发表评论 |
| `/api/auth/register` | POST | 注册 |
| `/api/auth/login` | POST | 登录 |
| `/api/auth/logout` | POST | 退出 |
| `/api/auth/profile` | GET/PUT | 获取/修改用户资料 |

### 7.4 数据存储

```
data/
├── users.json       # 用户数据
├── likes.json       # { articleId: { count, users[] } }
├── bookmarks.json   # { userId: articleId[] }
└── comments.json    # { articleId: Comment[] }
```
