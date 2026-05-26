# 02 — 任务攻略模块

> 最后更新：2026-05-21
> 初版日期：2026-05-14

---

## 1. 模块定位

作为网站核心内容模块之一。导航菜单名：**任务攻略**（EN: Quests），路由：`/quests`。

## 2. 页面结构

### 2.1 任务列表页（`/quests`）

三标签页布局，默认显示"热门攻略"：

| 标签 | 布局 | 内容 |
|------|------|------|
| 热门攻略（Popular） | `grid-cols-2` 卡片网格 | 8个精选热门任务卡片，含类型徽章（BOSS/副本/奇遇等） |
| 剧情攻略（Story） | 垂直列表卡片 | 9个主线/支线任务，紧凑行内卡片+右箭头 |
| 奇遇（Encounters） | `grid-cols-2 sm:3 lg:4` 标签网格 | 49个奇遇任务标签按钮+区域筛选+搜索 |

**奇遇区域子标签**：全部(49) / 清河(33) / 河西(9) / 河西·秦川(3) / 天陉(4)

### 2.2 奇遇详情页（`/quests/[id]`）

Server Component + SSG（`generateStaticParams`），预渲染全部 49×2=98 个页面。

- **三级面包屑**：任务攻略 / 奇遇 / [任务名]
  - "奇遇"链接指向 `/quests?tab=encounter`（通过 URL 参数控制标签页）
- **标题区**：奇遇标签 + 区域标签 + 5星难度 + 标题 + 摘要 + 奖励
- **攻略步骤**：编号步骤 + 文字说明 + 附图（部分任务）
- **无攻略时**：显示"攻略制作中"占位

### 2.3 关键技术实现

- **标签页同步**：`useSearchParams()` + `useEffect([urlTab])` 实现 URL 参数与标签状态双向同步
- **Suspense 包裹**：`useSearchParams()` 必须在 `<Suspense>` 边界内（Next.js 16 要求）
- **模糊搜索**：子序列匹配，支持中文/英文/拼音
- **外部图片**：使用原生 `<img>` 标签（非 Next.js `<Image>`），避免域名配置问题

## 3. 数据模型

### 3.1 奇遇任务数据（`src/data/encounter-quests.ts`）

```typescript
interface EncounterQuest {
  id: string;
  title: string;
  titleEn: string;
  region: string;        // 清河、河西、河西·秦川、天陉
  regionEn: string;
  summary: string;
  summaryEn: string;
  rewards: string;
  rewardsEn: string;
  difficulty: number;     // 1-5
}
```

**统计**：49个奇遇任务，覆盖4个区域

### 3.2 奇遇攻略步骤（`src/data/encounter-quest-steps.ts`）

```typescript
interface QuestStep {
  text: string;
  textEn: string;
  images?: string[];      // 游侠网攻略截图
}
export const QUEST_STEPS: Record<string, QuestStep[]>;
```

**统计**：18个任务有完整步骤攻略（8清河 + 4天陉 + 6河西），含图文

## 4. 代码路径

| 文件 | 说明 |
|------|------|
| `src/app/[locale]/quests/page.tsx` | 任务列表页（Client Component，3标签+搜索+区域筛选） |
| `src/app/[locale]/quests/[id]/page.tsx` | 奇遇详情页（Server Component，SSG） |
| `src/data/encounter-quests.ts` | 49个奇遇任务数据 |
| `src/data/encounter-quest-steps.ts` | 18个任务的分步攻略数据 |

## 5. 内容来源

| 来源 | URL | 内容 |
|------|-----|------|
| 游侠网·奇遇全攻略 | https://gl.ali213.net/z/71111/ | 49个奇遇名称、区域、奖励 |
| 游侠网·各奇遇详情页 | 多个子页面 | 18个任务的详细步骤和截图 |
| 游民星空 | gamersky.com | 部分任务补充信息 |

## 6. 用词规范

爬取内容自动替换：
- "外媒" → "媒体"
- "国" → "中国"（独立使用时）
