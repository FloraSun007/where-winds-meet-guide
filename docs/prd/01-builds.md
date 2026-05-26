# 01 — 流派攻略模块

> 最后更新：2026-05-14

---

## 1. 模块定位

流派攻略是网站核心内容模块，涵盖游戏全部 8 种武器组合流派的详细攻略。每个流派不止一种玩法，随游戏更新持续新增攻略。

## 2. 功能设计

- **流派属性筛选**：全部 / 鸣金 / 裂石 / 牵丝 / 破竹
- **排序维度**：点赞数（默认）、更新时间、评论数
- **动态路由**：`/builds/[id]` 基于结构化数据自动渲染
- **专用页面**：8 个流派各有独立 Client Component 页面（7 章节统一结构）

## 3. 游戏流派分类

| 流派名 | 主武器 | 副武器 | 属性 | 定位 | 评级 |
|--------|--------|--------|------|------|------|
| 鸣金虹 | 无名剑法 | 无名枪法 | 鸣金 | 近战持续输出 | T1 |
| 鸣金影 | 积矩九剑 | 九曲惊枪 | 鸣金 | 近战高爆发 | T0 |
| 裂石威 | 陌刀 | 八方风雷枪 | 裂石 | 重装坦克 | T1 |
| 牵丝霖 | 伞 | 扇 | 牵丝 | 治疗辅助 | T1 |
| 牵丝玉 | 伞 | 扇 | 牵丝 | 远程控制 | T0 |
| 破竹风 | 双刀 | 绳镖 | 破竹 | 近战刺客 | T1 |
| 破竹尘 | 绳镖 | 伞 | 破竹 | 远程爆发输出 | T0 |
| 破竹鸢 | 手甲 | 绳镖 | 破竹 | 近战格斗 | T2 |

## 4. 攻略页面统一结构（7 章节）

1. 流派定位与核心机制
2. 技能加点路线（1-30级）
3. 前期装备推荐
4. 心法搭配推荐
5. 核心连招教学
6. 副本攻略
7. 进阶技巧与常见误区

每个页面还包含：点赞/收藏按钮、评论区、B站视频 iframe 嵌入。

## 5. 数据层

- **攻略元数据**：`src/app/api/builds/route.ts` 的 `BUILDS` 数组
- **攻略内容数据**：`src/content/classes.ts`（供动态路由 `[id]` 使用）
- **交互数据**：`data/likes.json`、`data/comments.json`

## 6. 代码路径

| 文件 | 说明 |
|------|------|
| `src/app/[locale]/builds/page.tsx` | 流派列表页 |
| `src/app/[locale]/builds/[id]/page.tsx` | 动态详情页 |
| `src/app/[locale]/builds/swordsman/page.tsx` | 鸣金虹专用页 |
| `src/app/[locale]/builds/mingjin-ying/page.tsx` | 鸣金影专用页 |
| `src/app/[locale]/builds/lieshi-wei/page.tsx` | 裂石威专用页 |
| `src/app/[locale]/builds/qiansi-lin/page.tsx` | 牵丝霖专用页 |
| `src/app/[locale]/builds/qiansi-yu/page.tsx` | 牵丝玉专用页 |
| `src/app/[locale]/builds/pozhu-feng/page.tsx` | 破竹风专用页 |
| `src/app/[locale]/builds/pozhu-chen/page.tsx` | 破竹尘专用页 |
| `src/app/[locale]/builds/pozhu-yuan/page.tsx` | 破竹鸢专用页 |
| `src/content/classes.ts` | 流派结构化数据 |
| `src/app/api/builds/route.ts` | 攻略列表 API |
