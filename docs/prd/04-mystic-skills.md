# 04 — 奇术攻略模块

> 最后更新：2026-05-14
> 新增日期：2026-05-13（初版），2026-05-14（分步图文重构）

---

## 1. 模块定位

奇术（Mystic Skills）是燕云十六声中的特殊技能系统，共 45 个奇术分为四大类。本模块提供每个奇术的详细获取攻略，包括分步图文指引。

奇术攻略**内嵌在探索收集页面的「奇术」标签中**，不作为一级导航菜单项。

## 2. 奇术分类

| 类型 | Key | 中文 | 英文 | 数量 |
|------|-----|------|------|------|
| 逐寇 | offensive | 逐寇 | Offensive | 25 |
| 通用 | general | 通用 | General | 5 |
| 御风 | movement | 御风 | Movement | 13 |
| 娱乐 | entertainment | 娱乐 | Entertainment | 2 |

## 3. 数据模型

```typescript
// 攻略步骤（与宝箱/蹊跷的 GuideStep 结构对齐，增加多语言支持）
interface SkillStep {
  text: { en: string; zh: string };  // 步骤描述（中英双语）
  images?: string[];                  // 步骤图片 URL（可选，仅部分奇术有图）
}

interface MysticSkill {
  id: string;                              // 唯一标识
  name: { en: string; zh: string };        // 奇术名
  type: "offensive" | "general" | "movement" | "entertainment";
  effect: { en: string; zh: string };      // 技能效果
  steps: SkillStep[];                       // 获取步骤（分步图文攻略）
  source?: { en: string; zh: string };      // 来源说明
  isDefault?: boolean;                      // 是否默认解锁
}
```

### 设计要点

- **`steps` 数组**替代原来的纯文本 `acquire` 字段，与宝箱/蹊跷的 `GuideStep` 布局一致
- 每个步骤可带 `images`（游侠网截图），图片跟随步骤文字展示
- 使用 `t(step.text, locale)` 实现中英双语切换

## 4. 奇术完整清单

### 4.1 逐寇（Offensive）— 25 个

| ID | 中文名 | 英文名 | 获取类型 | 有图 |
|----|--------|--------|----------|------|
| tai-chi | 太极 | Tai Chi | 侠迹卷六 | - |
| meridian-touch | 金玉手 | Meridian Touch | 侠迹卷三 | - |
| celestial-seize | 摄星拿月 | Celestial Seize | 神仙渡任务 | - |
| cloud-steps | 凌云踏 | Cloud Steps | 侠迹卷二 | - |
| lions-roar | 狮吼正声 | Lion's Roar | 四钟齐鸣 | - |
| leaping-toad | 金蟾腾跃 | Leaping Toad | 偷师小游戏 | - |
| ghost-bind | 百鬼打穴手 | Ghost Bind | 无忧洞任务后 | - |
| guardian-palm | 韦陀正法 | Guardian Palm | 侠迹卷七 | - |
| flaming-meteor | 流星坠火 | Flaming Meteor | 菩提海挑战 | - |
| talon-strike | 鹰爪连凿 | Talon Strike | 偷师小游戏 | - |
| yaksha-rush | 药叉破魔 | Yaksha Rush | 侠迹终卷 | - |
| free-morph | 自在无碍 | Free Morph | 佛光顶挑战 | - |
| wolflike-frenzy | 骑龙回马 | Wolflike Frenzy | 镜潭密室 | - |
| soaring-spin | 啸风摧岳 | Soaring Spin | 武成王庙 | - |
| dragons-breath | 神龙吐火 | Dragon's Breath | 万事知任务 | ✅ 3图 |
| drunken-poet | 太白醉月 | Drunken Poet | 酒商郝久 | - |
| dragon-head | 叶龙骧首 | Dragon Head | 学35奇术 | - |
| blinding-mist | 红尘障目 | Blinding Mist | 侠迹卷四 | ✅ 7图 |
| serene-breeze | 清风霁月 | Serene Breeze | 天赋树 | - |
| golden-body | 无相金身 | Golden Body | 大相国寺 | - |
| ghostly-steps | 阴阳迷踪步 | Ghostly Steps | 鬼市子副本 | - |
| honking-havoc | 狗嘴夺食 | Honking Havoc | 无忧洞首通 | - |
| glow-of-fireflies | 萤光辉夜 | Glow of Fireflies | 萤火虫收集 | - |
| veil-of-stillness | 杳无形 | Veil of Stillness | 偷师有道 | - |
| flute-of-the-tides | 长风破浪 | Flute of the Tides | 玉门关 (v1.6) | - |

### 4.2 通用（General）— 5 个

| ID | 中文名 | 英文名 | 获取类型 | 有图 |
|----|--------|--------|----------|------|
| divine-counter | 回风照影 | Divine Counter | 天赋树 | - |
| star-shift | 移星换斗 | Star Shift | 默认解锁 | - |
| still-waters | 停渊止水 | Still Waters | 弓术教程 | - |
| touch-of-death | 凌虚一指 | Touch of Death | 侠迹卷一 | ✅ 4图 |
| wind-sense | 听风辨位 | Wind Sense | 天赋树 | - |

### 4.3 御风（Movement）— 13 个

| ID | 中文名 | 英文名 | 获取类型 |
|----|--------|--------|----------|
| thousand-mile-flight | 一剑千里 | Thousand-Mile Flight | 登录活动 |
| meteor-flight | 飒沓流星 | Meteor Flight | 侠迹卷五 |
| fan-glider | 玉扇游山 | Fan Glider | 探索6000点 |
| wind-rider | 冯虚御风 | Wind Rider | 探索9000点 |
| wallstride-swiftstride | 飞檐·步仞 | Wallstride Swiftstride | 五音启太平 |
| wallstride-shadowdash | 飞檐·逐影 | Wallstride Shadowdash | 五音启太平 |
| threefold-skywalk | 燕三叠 | Threefold Skywalk | 默认解锁 |
| skywalk-dash | 燕朝梁 | Skywalk Dash | 默认解锁 |
| mighty-drop | 千钧坠 | Mighty Drop | 默认解锁 |
| safe-mighty-drop | 万钧坠 | Safe Mighty Drop | 神秘驻地 |
| abyss-dive | 鱼翔潜底 | Abyss Dive | 默认解锁 |
| moonleap-morph | 百鸟竞逐 | Moonleap Morph | 玉门关 (v1.6) |
| idle-wind | 登天彩戏 | Idle Wind | 世界觉醒 (v1.6) |

### 4.4 娱乐（Entertainment）— 2 个

| ID | 中文名 | 英文名 | 获取类型 |
|----|--------|--------|----------|
| goosy-slide | 滑鹅 | Goosy Slide | 世界觉醒 (v1.6) |
| stone-pier | 石锥 | Stone Pier | 凉州雪岭 (v1.6) |

## 5. 有图奇术详情

3 个奇术拥有游侠网图文攻略截图：

### 神龙吐火（3 张图）

| 步骤 | 图片 |
|------|------|
| 找到洛九 | `2023/12/21/584_2023122153304537.png` |
| 找到梁远 | `2023/12/21/584_2023122153303830.png` |
| 偷取吐火罗游记 | `2023/12/21/584_202312215330398.png` |

### 凌虚一指（4 张图）

| 步骤 | 图片 |
|------|------|
| 找到烈不尽 | `2023/12/22/584_2023122293603972.png` |
| 点燃机关 | `2023/12/22/584_2023122293602919.png` |
| 左墙谜题 | `2023/12/22/584_2023122293603106.png` |
| 右墙谜题 | `2023/12/22/584_2023122293603455.png` |

### 红尘障目（7 张图）

| 步骤 | 图片 |
|------|------|
| 找到天不收 | `2023/12/22/584_2023122295759365.png` |
| 潜水重启机关 | `2023/12/22/584_2023122295758975.png` |
| 石盘谜题 | `2023/12/22/584_2023122295759443.png` |
| 清除布条 | `2023/12/22/584_202312229580098.png` |
| 水下洞穴 | `2023/12/22/584_2023122295759274.png` |
| 铃铛谜题 | `2023/12/22/584_2023122295759742.png` |
| 月神居 | `2023/12/22/584_2023122295759827.png` |

## 6. UI 渲染

奇术攻略详情面板采用与宝箱/蹊跷**完全一致的步骤布局**：

- 圆形编号徽章（amber-600/20 底色）
- 步骤文字与编号并排
- 图片在步骤文字下方全宽显示（`max-w-xl`，垂直堆叠，每行一张）
- 步骤间细线分隔
- 点击图片打开灯箱（缩放/拖拽）
- 有图奇术底部显示游侠网来源说明

## 7. 数据来源

攻略内容综合自以下来源：

| 来源 | URL | 说明 |
|------|-----|------|
| 游侠网 | https://m.ali213.net/news/gl2501/1602693_4.html | 奇术全收集图文攻略（神龙吐火/凌虚一指/红尘障目有截图） |
| 巴哈姆特 | https://forum.gamer.com.tw/C.php?bsn=75703&snA=4054 | 13个奇术详细步骤 |
| 3DM | https://ol.3dmgame.com/gl/292193.html | 全部奇术获取方式 |
| DVG | https://www.dvg.cn/shouyougl/54551.html | 13个奇术详细攻略 |
| GC.com.cn | https://www.gc.com.cn/game/yyslsqshudaquan.htm | 39个奇术大全 |

## 8. 代码路径

| 文件 | 说明 |
|------|------|
| `src/content/mystic-skills.ts` | 奇术数据（45个，含分步图文） |
| `src/content/index.ts` | 导出 `MYSTIC_SKILLS`、`MysticSkill`、`SkillStep` |
| `src/app/[locale]/exploration/page.tsx` | 探索页（奇术标签渲染逻辑） |
| `src/i18n/dictionaries/zh.json` | `mysticSkills` 中文文案 |
| `src/i18n/dictionaries/en.json` | `mysticSkills` 英文文案 |

## 9. 变更历史

| 日期 | 变更 |
|------|------|
| 2026-05-13 | 初版：45个奇术数据，简短获取描述 |
| 2026-05-14 | 重构：`acquire` 文本字段 → `steps: SkillStep[]` 分步结构 |
| 2026-05-14 | 新增：3个奇术的游侠网攻略截图（神龙吐火3张、凌虚一指4张、红尘障目7张） |
| 2026-05-14 | 更新：详细分步获取指引（综合5个攻略源），每步含NPC名/地点/谜题解法 |
