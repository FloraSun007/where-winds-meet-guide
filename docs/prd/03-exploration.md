# 03 — 探索收集模块

> 最后更新：2026-05-17

---

## 1. 模块定位

提供游戏各区域的全收集图文攻略，涵盖宝箱、蹊跷、猫戏等 11 个收集类别。导航菜单名：**探索收集**（EN: Exploration），路由：`/exploration`。

## 2. 功能设计

- **类别切换**：11 个收集类别标签页（宝箱、蹊跷、奇术、千尘旧物、营地、不平事、喵喵喵、猫戏、江湖故人、曲径寻幽、天籁万籁）
- **区域切换**：按游戏区域分组浏览
- **地点列表**：网格形式展示当前区域所有地点
- **详细攻略**：点击地点展示分步收集指南（文字 + 图片）
- **图片灯箱**：站内全屏放大，支持缩放（0.5x-5x）和拖拽
- **默认展示**：页面加载后自动展示清河-将军祠的宝箱攻略

## 3. 收集类别

| Key | 图标 | 中文 | Game8 英文 |
|-----|------|------|-----------|
| baoxiang | 📦 | 宝箱 | Chests |
| qijiao | ✨ | 蹊跷 | Oddities |
| qishu | ★ | 奇术 | Mystic Skills |
| qianchenjiuwu | 🏯 | 千尘旧物 | Old Keepsakes |
| yingdi | ⛺ | 营地 | Camps |
| bupingshi | ⚖ | 不平事 | Injustice |
| miaomiaomiao | 🐱 | 喵喵喵 | Meow Meow |
| maoxi | 🐱 | 猫戏 | Cat Play |
| jianghuguren | 🤝 | 江湖故人 | Old Friends |
| qujingxinyou | 🌲 | 曲径寻幽 | Hidden Paths |
| tiandiwanlai | 🎵 | 天籁万籁 | Graceful Melodies |

## 4. 区域与地点

**5 个区域，62 个地点**：

| 区域 | 中文名 | 地点数 | 宝箱攻略 | 蹊跷攻略 | 猫戏攻略 |
|------|--------|--------|----------|----------|----------|
| qinghe | 清河 | 30 | ✅ | ✅ | ✅（10 地点） |
| kaifeng | 开封 | 21 | ✅ | ✅ | ✅（4 地点） |
| hexi | 河西 | 5 | ✅ | ✅ | ✅（5 地点） |
| hexi_liangzhou | 河西·凉州 | 1 | ✅ | ✅ | ✅（1 地点） |
| hexi_qinchuan | 河西·秦川 | 5 | ✅ | ✅ | ✅（2 地点） |

## 5. 猫戏攻略

### 5.1 概述

猫戏（Cat Play）攻略覆盖全部 5 个区域共 **22 个地点**，数据包含中英双语版本。

### 5.2 数据文件

- `src/data/maoxi-guides.ts`
- 导出 `MAOXI_GUIDES`（中文）和 `MAOXI_GUIDES_EN`（英文）
- 复用 `GuideStep` 类型（`text` + `images[]`）
- 图片来源：游侠网 CDN

### 5.3 各区域覆盖详情

| 区域 | 地点 | 猫数量（约） |
|------|------|-------------|
| 清河 | 将军祠、七阙坡、竹林旧居、浣石浦、神仙渡、烧瓷岭、不羡仙、佛爷寨、伏马庄、佛光顶 | 约 30 只 |
| 开封 | 南门大街、开封府、勾栏瓦肆、醉花阴 | 约 17 只 |
| 河西 | 迷津渡、金沙川、玉池、酒泉镇、玉露台 | 约 14 只 |
| 河西·凉州 | 饮马隘 | 约 2 只 |
| 河西·秦川 | 扶风甸、狮子坟 | 约 5 只 |

### 5.4 攻略内容特点

- 每只猫戏包含：传送指引 → 定位描述 → 互动操作
- 部分猫戏为挑战类型（限时收集磷火、砍竹子等）
- 部分猫戏需要前置条件（如风华值 > 2000）
- 佛光顶区域单地点猫戏数量最多（12 只猫）

## 6. 数据架构

```
src/data/baoxiang-guides.ts    # 宝箱攻略（中/英两套）
src/data/qijiao-guides.ts      # 蹊跷攻略（中/英两套）
src/data/maoxi-guides.ts       # 猫戏攻略（中/英两套）
src/i18n/dictionaries/zh.json  # 中文文案（类别、区域、地点名、UI文案）
src/i18n/dictionaries/en.json  # 英文文案（Game8官方地名、UI文案）
```

### 数据模型

```typescript
interface GuideStep {
  text: string;      // 步骤描述
  images: string[];  // 图片 URL 列表
}

// 按地点名索引的攻略数据
const GUIDES: Record<string, GuideStep[]> = { ... };
```

**关键设计**：攻略数据的键始终使用中文地名。英文页面通过 `regionLocationKeys` 映射。

## 7. 图片资源

- **来源**：游侠网（ali213.net）CDN
- **格式**：`.png`（早期）和 `.jpg`（后期）
- **加载**：`<img>` + `loading="lazy"` + `onError` 隐藏失败图片
- **灯箱**：全屏放大 + 滚轮缩放 + 拖拽平移

## 8. 英文地名映射

英文版使用 Game8 官方英文游戏地名。部分未在 Game8 上找到的地名为估算翻译（标记 *）。

（完整 62 个地名映射见 `en.json` 中 `regionLocations` 字段）

## 9. 代码路径

| 文件 | 说明 |
|------|------|
| `src/app/[locale]/exploration/page.tsx` | 探索收集页（含奇术标签） |
| `src/data/baoxiang-guides.ts` | 宝箱攻略数据（中/英） |
| `src/data/qijiao-guides.ts` | 蹊跷攻略数据（中/英） |
| `src/data/maoxi-guides.ts` | 猫戏攻略数据（中/英） |
| `src/content/mystic-skills.ts` | 奇术攻略数据（独立模块） |
