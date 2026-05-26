# 08 — BOSS攻略模块

> 最后更新：2026-05-21
> 新增日期：2026-05-21

---

## 1. 模块定位

游戏核心战斗挑战模块。导航菜单名：**BOSS攻略**（EN: Boss Guides），路由：`/bosses`。覆盖主线BOSS、世界BOSS、副本BOSS的完整技能机制详解与应对策略。

## 2. 页面结构

### 2.1 BOSS列表页（`/bosses`）

Server Component，按类型分组展示：

| 分组 | 说明 |
|------|------|
| 副本攻略 | 10人团本卡片（含BOSS标签链接、队伍配置、核心提示） |
| 主线BOSS | 按难度排序的卡片列表 |
| 世界BOSS | 按难度排序的卡片列表 |
| 副本BOSS | 按难度排序的卡片列表 |

每个BOSS卡片显示：名称、位置、难度评级（1-10，颜色编码）、核心要点摘要。

### 2.2 BOSS详情页（`/bosses/[id]`）

Server Component + SSG（`generateStaticParams`），预渲染全部 16×2=32 个页面。

- **面包屑**：首页 / BOSS攻略 / [BOSS名]
- **头部**：类型标签 + 难度评级 + 位置
- **奖励区**：金色边框卡片
- **核心要点**：绿色边框卡片
- **阶段详解**：每个阶段独立section
  - 总体策略
  - 技能机制卡片列表（名称 + 攻击类型标签 + 描述 + 应对方式）
- **其他BOSS推荐**：底部6个其他BOSS链接

### 2.3 攻击类型标签

| 类型 | 标识 | 说明 |
|------|------|------|
| `red_light` | 红光（需卸式） | 必须弹反/卸势的攻击 |
| `yellow_light` | 黄光（需闪避） | 不可弹反，必须闪避 |
| `aoe` | 范围攻击 | 大范围AOE伤害 |
| `grab` | 投技/抓取 | 投技或抓取类攻击 |
| `buff` | 增益阶段 | Boss强化状态 |
| `other` | 特殊机制 | 其他特殊机制 |

## 3. 数据模型

### 3.1 BOSS数据（`src/content/bosses.ts`）

```typescript
interface BossGuide {
  id: string;
  name: { en: string; zh: string };
  type: "story" | "world" | "dungeon";
  location: { en: string; zh: string };
  difficulty: number;     // 1-10
  phases: BossPhase[];
  rewards: { en: string; zh: string };
  tips: { en: string; zh: string };
}

interface BossPhase {
  phase: string;
  mechanics: {
    name: { en: string; zh: string };
    description: { en: string; zh: string };
    counter: { en: string; zh: string };
    type: "red_light" | "yellow_light" | "aoe" | "grab" | "buff" | "other";
  }[];
  strategy: { en: string; zh: string };
}
```

### 3.2 副本数据（`src/content/bosses.ts`）

```typescript
interface DungeonGuide {
  id: string;
  name: { en: string; zh: string };
  type: "5man" | "10man";
  bosses: string[];       // BossGuide.id[]
  overview: { en: string; zh: string };
  teamComp: { en: string; zh: string };
  tips: { en: string; zh: string };
}
```

## 4. BOSS清单（16个）

### 主线BOSS（6个）

| ID | 名称 | 位置 | 难度 | 阶段数 |
|----|------|------|------|--------|
| `wuxiang-huang` | 荧渊·无相皇 | 荧渊 | 4/10 | 2 |
| `xunxin` | 溺水岸·寻心 | 弱水岸 | 6/10 | 2 |
| `ye-wanshan` | 菩提苦海·叶万山 | 菩提苦海 | 7/10 | 2 |
| `zheng-e` | 郑鄂 | 开封·常平仓 | 7/10 | 3 |
| `tian-ying` | 佛光顶·田英 | 佛光顶 | 9/10 | 3 |
| `qianye` | 不羡仙·千夜 | 不羡仙·地宫 | 9/10 | 3 |

### 世界BOSS（6个）

| ID | 名称 | 位置 | 难度 | 阶段数 |
|----|------|------|------|--------|
| `she-langzhong` | 蛇郎中 | 清河·抱山湖 | 4/10 | 2 |
| `yi-dao` | 伊刀 | 不羡仙·梦中世界 | 6/10 | 2 |
| `sha-dishen` | 煞地神 | 清河·百草野 | 6/10 | 2 |
| `piying-muqi` | 皮影师·绳武 | 清河·北竹林 | 8/10 | 2 |
| `gui-gongzi` | 鬼公子 | 开封·雾隐之林 | 8/10 | 2 |
| `bai-langzhu` | 白狼主 | 清河·三碗酒馆 | 9/10 | 2 |

### 副本BOSS（4个）

| ID | 名称 | 位置 | 难度 | 阶段数 |
|----|------|------|------|--------|
| `xiao-shiqi` | 春秋别馆·小十七 | 春秋别馆 | 5/10 | 2 |
| `lion-dance-brothers` | 舞狮兄弟 | 开封（10人本） | 5/10 | 2 |
| `sleeping-daoist` | 睡道人 | 璧泉山/金明池（10人本） | 7/10 | 2 |
| `rong-yuan` | 金明池·容鸢 | 金明池（10人本） | 8/10 | 2 |

### 副本攻略（2个）

| ID | 名称 | 类型 | 包含BOSS |
|----|------|------|----------|
| `jinmingchi` | 云梦金明池 | 10人 | 睡道人 → 容鸢 |
| `lion-dance-raid` | 侠境·舞狮兄弟 | 10人 | 舞狮兄弟 |

## 5. 代码路径

| 文件 | 说明 |
|------|------|
| `src/content/bosses.ts` | BOSS数据、副本数据、类型定义 |
| `src/content/index.ts` | 导出 `bossGuides`、`dungeonGuides`、`t()` |
| `src/app/[locale]/bosses/page.tsx` | BOSS列表页（按类型分组） |
| `src/app/[locale]/bosses/[id]/page.tsx` | BOSS详情页（阶段+机制+策略） |

## 6. 内容来源

| 来源 | URL | 内容 |
|------|-----|------|
| 游侠网·BOSS攻略总汇 | https://gl.ali213.net/z/71111/#bsgl | 16个BOSS攻略索引 |
| 游侠网·各BOSS详情页 | 16个独立攻略页面 | 技能机制、阶段详解、打法策略 |
| 游民星空 | gamersky.com | 浴血难度补充信息 |
| 3DM、17173、Game8 等 | 多个补充来源 | 补充机制细节和英文术语 |

## 7. 用词规范

爬取内容自动替换：
- "外媒" → "媒体"
- "国" → "中国"（独立使用时）
