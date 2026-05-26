const I = (path: string) => `http://img1.ali213.net/glpic/${path}`;

import type { GuideStep } from "./baoxiang-guides";

export const MAOXI_GUIDES: Record<string, GuideStep[]> = {
  // === 清河 ===
  "神仙渡": [
    { text: "传送到图中标记位置，左侧有一只猫，点击【抚摸】获得奖励。", images: [I("2024/12/29/584_2024122924617622.png"), I("2024/12/29/584_202412292461887.png")] },
    { text: "传送到曲芳后院，进入大门直走，右侧可以看到一只猫。", images: [I("2024/12/29/584_2024122924619628.png"), I("2024/12/29/584_2024122924618523.png")] },
    { text: "翻过围栏可以看到第三只猫，完成互动。", images: [I("2024/12/29/584_2024122924618184.png"), I("2024/12/29/584_2024122924618320.png")] },
    { text: "朝河边走找到第四只猫，点击【抚摸】。", images: [I("2024/12/29/584_2024122924618747.png"), I("2024/12/29/584_2024122924618743.png")] },
    { text: "过桥后跳进左侧的院子找到最后一只猫。", images: [I("2024/12/29/584_2024122924618661.png"), I("2024/12/29/584_2024122924618954.png"), I("2024/12/29/584_2024122924618657.png")] },
  ],
  "浣石浦": [
    { text: "传送到标记点，向西南走，过河找到第一只猫，点击【抚摸】获得奖励。", images: [I("2024/12/29/584_2024122923409286.png"), I("2024/12/29/584_2024122923410653.png")] },
    { text: "向西南走爬上去找到第二只猫的挑战。旋转两座石像使其面向石碑即可完成获得奖励。", images: [I("2024/12/29/584_2024122923410650.png"), I("2024/12/29/584_2024122923410781.png"), I("2024/12/29/584_2024122923410929.png"), I("2024/12/29/584_2024122923410600.png")] },
  ],
  "烧瓷岭": [
    { text: "前往瓷窑传送点，进入大门后右转找到猫，点击【抚摸】获得奖励。", images: [I("2024/12/29/584_2024122925449427.png"), I("2024/12/29/584_2024122925449100.png"), I("2024/12/29/584_2024122925450618.png"), I("2024/12/29/584_2024122925450172.png")] },
  ],
  "竹林旧居": [
    { text: "前往北竹林，向北走找到第一只猫，触摸剑柄进入挑战——在限时内收集指定数量的磷火。", images: [I("2024/12/29/584_2024122922239860.png"), I("2024/12/29/584_2024122922238402.png")] },
    { text: "回到北竹林传送点，向东穿过竹林跳下去，左转找到第二只猫挑战——限时砍竹子。", images: [I("2024/12/29/584_2024122922238451.png"), I("2024/12/29/584_2024122922239488.png")] },
    { text: "第二个挑战完成后向东跳，沿着小河向东南走找到第三只猫挑战。", images: [I("2024/12/29/584_2024122922239464.png"), I("2024/12/29/584_2024122922238939.png")] },
    { text: "沿悬崖继续向东南走，看到房屋后爬上石堆找到第四只猫挑战。", images: [I("2024/12/29/584_2024122922238644.png"), I("2024/12/29/584_2024122922238455.png")] },
    { text: "传送到北竹林，沿小路走找到最后一只猫，抚摸即可。", images: [I("2024/12/29/584_2024122922239526.png"), I("2024/12/29/584_2024122922239104.png"), I("2024/12/29/584_2024122922239218.png")] },
  ],
  "七阙坡": [
    { text: "前往北盟遗址传送点，向西北走找到棚下的猫，点击【抚摸】获得猫猫·彩背。", images: [I("2024/12/29/584_2024122920001144.png"), I("2024/12/29/584_2024122920001899.png")] },
    { text: "沿路向西南走，看到酒楼后找到前方的白猫，点击【抚摸】。", images: [I("2024/12/29/584_2024122920002380.png"), I("2024/12/29/584_20241229200013.png")] },
    { text: "传送到落星泉，猫在传送点左侧，触摸剑柄完成挑战。", images: [I("2024/12/29/584_2024122920001744.png"), I("2024/12/29/584_2024122920001300.png"), I("2024/12/29/584_2024122920001739.png"), I("2024/12/29/584_2024122920002342.png")] },
  ],
  "将军祠": [
    { text: "前往将军祠传送点，向前走翻过红墙，里面有一只白猫，点击【抚摸】获得奖励。", images: [I("2024/12/29/584_2024122914514168.png"), I("2024/12/29/584_202412291451446.png")] },
    { text: "向左走绕到祠堂后面，翻过另一面墙找到第二只猫，点击【抚摸】。", images: [I("2024/12/29/584_2024122914515958.png"), I("2024/12/29/584_2024122914514157.png")] },
    { text: "从第二只猫后面翻过墙，向前走右转进入山洞，沿箭头指示找到第三只猫，将小佛像放到指定位置完成。", images: [I("2024/12/29/584_2024122914515422.png"), I("2024/12/29/584_2024122914515469.png"), I("2024/12/29/584_202412291451535.png"), I("2024/12/29/584_2024122914515346.png"), I("2024/12/29/584_2024122914515169.png")] },
  ],
  "不羡仙": [
    { text: "前往活人医馆门口，找到猫猫「桃桃」，点击【抚摸】获得奖励。", images: [I("2025/01/13/584_2025011325322466.png"), I("2025/01/13/584_2025011325322814.png")] },
    { text: "前往正北方向商铺前，找到猫猫「老幺」，点击【抚摸】获得奖励。", images: [I("2025/01/13/584_202501132532259.png"), I("2025/01/13/584_202501132532227.png")] },
    { text: "前往小商铺右侧的竹林中，找到猫猫「有猫德」，点击【抚摸】获得奖励。", images: [I("2025/01/13/584_2025011325322201.png"), I("2025/01/13/584_2025011325322363.png")] },
    { text: "前往竹林中的茶摊旁，找到猫猫「猪油坨」，点击【抚摸】获得奖励。", images: [I("2025/01/13/584_2025011325322201.png")] },
    { text: "前往林不修后方，找到猫猫「雪姑娘」，点击【抚摸】获得奖励。", images: [I("2025/01/13/584_2025011325322363.png")] },
  ],
  "佛爷寨": [
    { text: "前往北侧院子中心，找到猫猫「小娥」，点击【抚摸】获得奖励。", images: [I("2025/01/13/584_202501133042387.png")] },
    { text: "前往东北侧河边小屋旁，找到猫猫「大放」，点击【抚摸】获得奖励。", images: [I("2025/01/13/584_2025011330423252.png")] },
  ],
  "伏马庄": [
    { text: "前往东门附近，找到王婶脚边的猫猫「马酥酪」，点击【抚摸】获得奖励。", images: [I("2025/01/13/584_2025011331342478.png"), I("2025/01/13/584_2025011331342146.png")] },
  ],
  "佛光顶": [
    { text: "猫戏1-8：位于佛光顶传送点西北侧山坡处，共有8只猫猫可互动。", images: [I("2025/01/13/584_2025011332918556.png")] },
    { text: "猫戏9：猫猫·妙七六在佛光顶传送点东南侧，点击【抚摸】获得奖励。", images: [I("2025/01/13/584_2025011332918919.png")] },
    { text: "猫戏10：猫猫·山鸡在东北侧的院子中，点击【抚摸】获得奖励。", images: [I("2025/01/13/584_2025011332918894.png")] },
    { text: "猫戏11：猫猫·橘缘位于藏经阁下方，点击【抚摸】获得奖励。", images: [I("2025/01/13/584_2025011332919573.png")] },
    { text: "猫戏12：猫猫·嘬嘬在藏经阁山脚的瀑布附近，点击【抚摸】获得奖励。", images: [I("2025/01/13/584_2025011332919510.png")] },
  ],

  // === 开封 ===
  "南门大街": [
    { text: "前往巡检司附近，找到猫猫，点击【抚摸】获得奖励。", images: [I("2025/01/16/584_2025011643733243.png")] },
    { text: "前往升平桥湖边，找到猫猫，点击【抚摸】获得奖励。", images: [I("2025/01/16/584_2025011643733702.png")] },
    { text: "前往升平桥西侧路牌旁，找到猫猫，点击【抚摸】获得奖励。", images: [I("2025/01/16/584_202501164373371.png")] },
  ],
  "开封府": [
    { text: "前往大相国寺东南侧的院子里，找到猫猫，点击【抚摸】获得奖励。", images: [I("2025/01/16/584_2025011644754871.png")] },
    { text: "前往曹门大街的院子里，找到猫猫，点击【抚摸】获得奖励。", images: [I("2025/01/16/584_2025011644754376.png")] },
  ],
  "勾栏瓦肆": [
    { text: "前往大相国寺东北侧街道旁，找到第一只猫猫，点击【抚摸】获得奖励。", images: [I("2025/01/16/584_2025011650133124.png")] },
    { text: "沿街道向东走，在巷口找到第二只猫猫，点击【抚摸】获得奖励。", images: [I("2025/01/16/584_2025011650133444.png")] },
    { text: "继续向东，在桥头附近找到第三只猫猫，点击【抚摸】获得奖励。", images: [I("2025/01/16/584_2025011650133311.png")] },
    { text: "过桥后右转，在河边找到第四只猫猫，点击【抚摸】获得奖励。", images: [I("2025/01/16/584_2025011650133436.png")] },
    { text: "回到桥头向北走，在民居旁找到第五只猫猫，点击【抚摸】获得奖励。", images: [I("2025/01/16/584_2025011650133667.png")] },
    { text: "沿巷子继续向北，在墙角处找到第六只猫猫，点击【抚摸】获得奖励。", images: [I("2025/01/16/584_2025011650133536.png")] },
    { text: "向北走到集市区域，在摊位旁找到第七只猫猫，点击【抚摸】获得奖励。", images: [I("2025/01/16/584_2025011650133777.png")] },
    { text: "在集市另一侧找到最后一只猫猫，点击【抚摸】获得奖励。", images: [I("2025/01/16/584_202501165013356.png")] },
  ],
  "醉花阴": [
    { text: "前往醉花阴主街入口处，找到第一只猫猫，点击【抚摸】获得奖励。", images: [I("2025/01/16/584_2025011651522648.png")] },
    { text: "沿主街向内走，在花坛旁找到第二只猫猫，点击【抚摸】获得奖励。", images: [I("2025/01/16/584_2025011651522987.png")] },
    { text: "继续向内走，在左侧院落中找到第三只猫猫，点击【抚摸】获得奖励。", images: [I("2025/01/16/584_2025011651522139.png")] },
    { text: "需要风华值>2000。在主街右侧的楼阁前找到第四只猫猫，点击【抚摸】获得奖励。", images: [I("2025/01/16/584_2025011651522777.png")] },
    { text: "需要风华值>2000。在楼阁后方花园中找到第五只猫猫，点击【抚摸】获得奖励。", images: [I("2025/01/16/584_2025011651522608.png")] },
    { text: "在醉花阴最深处的水池旁找到最后一只猫猫，点击【抚摸】获得奖励。", images: [I("2025/01/16/584_202501165152220.png")] },
  ],

  // === 河西 ===
  "迷津渡": [
    { text: "传送到坎尔孜传送点，进入左侧的房子里，找到猫猫并互动。", images: [I("2025/03/31/584_20250331103820762.png"), I("2025/03/31/584_20250331103820773.png"), I("2025/03/31/584_20250331103820526.png")] },
    { text: "离开房子，前往前面的小棚子处找到第二只猫猫。", images: [I("2025/03/31/584_20250331103820592.png"), I("2025/03/31/584_20250331103819593.png")] },
    { text: "转身走上楼梯，到顶部右转进入房子直走到尽头，在角落找到猫猫·古丽茉莉。", images: [I("2025/03/31/584_20250331103820220.png"), I("2025/03/31/584_20250331103819231.png"), I("2025/03/31/584_20250331103819218.png")] },
    { text: "传送到骆驼驿传送点，走到前方建筑处，在墙上找到猫猫·卢克。", images: [I("2025/03/31/584_20250331103819469.png"), I("2025/03/31/584_20250331103819726.png"), I("2025/03/31/584_20250331103819291.png")] },
  ],
  "金沙川": [
    { text: "传送到马头村传送点，向南走到箭头指示的房子旁，在墙边找到猫戏。", images: [I("2025/04/03/584_202504039315030.png"), I("2025/04/03/584_202504039315063.png"), I("2025/04/03/584_2025040393151594.png")] },
    { text: "传送到胡杨集传送点，向西南走顺着路前行，到达位置后跳到箭头指示的屋顶上找到猫戏。", images: [I("2025/04/03/584_2025040393152999.png"), I("2025/04/03/584_2025040393152398.png"), I("2025/04/03/584_2025040393151180.png"), I("2025/04/03/584_2025040393152119.png")] },
    { text: "从第二只猫的位置向东南走，走到所示位置后前往墙后找到猫戏。", images: [I("2025/04/03/584_2025040393151136.png"), I("2025/04/03/584_2025040393152342.png"), I("2025/04/03/584_2025040393152367.png")] },
  ],
  "玉池": [
    { text: "传送到清玉岸传送点，将游戏时间调整至午时，进入旁边的房子内找到猫戏。", images: [I("2025/05/20/584_2025052010412284.jpg"), I("2025/05/20/584_20250520104121241.jpg"), I("2025/05/20/584_20250520104122472.jpg"), I("2025/05/20/584_20250520104122845.jpg")] },
  ],
  "酒泉镇": [
    { text: "传送到天水集传送点，向箭头方向走到河岸边找到猫戏。", images: [I("2025/05/20/584_20250520105626508.jpg"), I("2025/05/20/584_20250520105626565.jpg"), I("2025/05/20/584_20250520105627429.jpg")] },
    { text: "互动后顺着路向上走到凉亭处，进入内部找到猫戏。", images: [I("2025/05/20/584_20250520105627502.jpg"), I("2025/05/20/584_2025052010562631.jpg"), I("2025/05/20/584_20250520105626186.jpg"), I("2025/05/20/584_20250520105627676.jpg")] },
    { text: "回到传送点，前往枯树位置找到第三只猫戏。", images: [I("2025/05/20/584_20250520105628526.jpg"), I("2025/05/20/584_20250520105627310.jpg"), I("2025/05/20/584_20250520105627832.jpg")] },
    { text: "走到箭头指示的位置，跳上棚子在前面的棚子上找到猫戏。", images: [I("2025/05/20/584_2025052010562834.jpg"), I("2025/05/20/584_20250520105628516.jpg"), I("2025/05/20/584_20250520105628571.jpg")] },
  ],
  "玉露台": [
    { text: "传送到藤王村传送点，前往箭头指示的院子，在门口找到猫戏。", images: [I("2025/05/20/584_20250520110847173.jpg"), I("2025/05/20/584_2025052011084878.jpg"), I("2025/05/20/584_20250520110847568.jpg")] },
    { text: "互动后走向箭头指示的房子，进入院子在棚子下找到猫戏。", images: [I("2025/05/20/584_20250520110848561.jpg"), I("2025/05/20/584_20250520110847719.jpg")] },
    { text: "回到传送点，跳下去沿路走到房子门口找到猫戏。", images: [I("2025/05/20/584_20250520110848615.jpg"), I("2025/05/20/584_20250520110848749.jpg"), I("2025/05/20/584_20250520110848572.jpg")] },
  ],

  // === 河西·凉州 ===
  "饮马隘": [
    { text: "传送到清玉岸传送点，前往箭头指示的房子门口，在门口找到猫戏。", images: [I("2025/05/20/584_2025052010331969.jpg"), I("2025/05/20/584_20250520103319241.jpg"), I("2025/05/20/584_20250520103319461.jpg")] },
    { text: "传送到黄沙道传送点，顺路走到达位置后，在右侧帐篷下找到猫戏。", images: [I("2025/05/20/584_2025052010332092.jpg"), I("2025/05/20/584_20250520103320846.jpg"), I("2025/05/20/584_20250520103320832.png"), I("2025/05/20/584_20250520103320810.jpg")] },
  ],

  // === 河西·秦川 ===
  "扶风甸": [
    { text: "传送到芥子庐传送点，向箭头方向走，到位置后左转到棚子上找到猫戏。", images: [I("2025/09/06/584_2025090613903973.png"), I("2025/09/06/584_2025090613903527.png"), I("2025/09/06/584_2025090613903703.png"), I("2025/09/06/584_202509061390344.png")] },
    { text: "调整视角，向箭头指示的船走去，在船上找到猫戏。", images: [I("2025/09/06/584_2025090613903782.png"), I("2025/09/06/584_2025090613903687.png")] },
  ],
  "狮子坟": [
    { text: "传送到归望野传送点，前往箭头指示的NPC旁找到猫戏。", images: [I("2025/09/06/584_2025090615224576.png"), I("2025/09/06/584_2025090615224180.png"), I("2025/09/06/584_2025090615224337.png")] },
    { text: "走到箭头指示的房子后面，爬上石头找到猫戏。", images: [I("2025/09/06/584_2025090615224611.png"), I("2025/09/06/584_2025090615224450.png"), I("2025/09/06/584_2025090615224376.png")] },
    { text: "向箭头方向走到河边，看到一座房子，走向前面找到猫戏。", images: [I("2025/09/06/584_2025090615224759.png"), I("2025/09/06/584_2025090615224343.png"), I("2025/09/06/584_2025090615224590.png")] },
  ],
};

export const MAOXI_GUIDES_EN: Record<string, GuideStep[]> = {
  // === Qinghe ===
  "神仙渡": [
    { text: "Teleport to the marked location. There's a cat on the left side. Click [Pet] for rewards.", images: [I("2024/12/29/584_2024122924617622.png"), I("2024/12/29/584_202412292461887.png")] },
    { text: "Teleport to Qufang Back Courtyard. Enter the gate and walk straight — you'll see a cat on the right.", images: [I("2024/12/29/584_2024122924619628.png"), I("2024/12/29/584_2024122924618523.png")] },
    { text: "Jump over the fence to find the third cat. Complete the interaction.", images: [I("2024/12/29/584_2024122924618184.png"), I("2024/12/29/584_2024122924618320.png")] },
    { text: "Head toward the riverbank to find the fourth cat. Click [Pet].", images: [I("2024/12/29/584_2024122924618747.png"), I("2024/12/29/584_2024122924618743.png")] },
    { text: "Cross the bridge, jump left into the courtyard to find the last cat.", images: [I("2024/12/29/584_2024122924618661.png"), I("2024/12/29/584_2024122924618954.png"), I("2024/12/29/584_2024122924618657.png")] },
  ],
  "浣石浦": [
    { text: "Teleport to the marked point, walk southwest. Cross the river to find the first cat. Click [Pet] for rewards.", images: [I("2024/12/29/584_2024122923409286.png"), I("2024/12/29/584_2024122923410653.png")] },
    { text: "Head southwest and climb up to find the second cat challenge. Rotate the two statues to face the stone tablet to complete and earn rewards.", images: [I("2024/12/29/584_2024122923410650.png"), I("2024/12/29/584_2024122923410781.png"), I("2024/12/29/584_2024122923410929.png"), I("2024/12/29/584_2024122923410600.png")] },
  ],
  "烧瓷岭": [
    { text: "Go to the porcelain kiln teleport point. Enter the front gate, turn right to find the cat. Click [Pet] for rewards.", images: [I("2024/12/29/584_2024122925449427.png"), I("2024/12/29/584_2024122925449100.png"), I("2024/12/29/584_2024122925450618.png"), I("2024/12/29/584_2024122925450172.png")] },
  ],
  "竹林旧居": [
    { text: "Go to North Bamboo Grove. Walk north to find the first cat. Touch the sword hilt to enter a challenge — collect ghost flames (磷火) within the time limit.", images: [I("2024/12/29/584_2024122922239860.png"), I("2024/12/29/584_2024122922238402.png")] },
    { text: "Return to North Bamboo Grove teleport point, walk east through the bamboo forest and jump down. Turn left to find the second cat challenge — chop bamboo within the time limit.", images: [I("2024/12/29/584_2024122922238451.png"), I("2024/12/29/584_2024122922239488.png")] },
    { text: "After the second challenge, jump east, follow the small river southeast to find the third cat challenge.", images: [I("2024/12/29/584_2024122922239464.png"), I("2024/12/29/584_2024122922238939.png")] },
    { text: "Continue along the cliff to the southeast. When you see a house, climb the stone pile to find the fourth cat challenge.", images: [I("2024/12/29/584_2024122922238644.png"), I("2024/12/29/584_2024122922238455.png")] },
    { text: "Teleport to North Bamboo Grove, follow the small path to find the last cat. Just pet it.", images: [I("2024/12/29/584_2024122922239526.png"), I("2024/12/29/584_2024122922239104.png"), I("2024/12/29/584_2024122922239218.png")] },
  ],
  "七阙坡": [
    { text: "Go to the North Alliance Ruins teleport point. Head northwest to find a cat under a shed. Click [Pet] to receive Cat Cat: Colorful Back.", images: [I("2024/12/29/584_2024122920001144.png"), I("2024/12/29/584_2024122920001899.png")] },
    { text: "Walk southwest along the path until you see a restaurant. Find the white cat in front. Click [Pet].", images: [I("2024/12/29/584_2024122920002380.png"), I("2024/12/29/584_20241229200013.png")] },
    { text: "Teleport to Falling Star Spring. The cat is on the left side of the teleport point. Touch the sword hilt and complete the challenge.", images: [I("2024/12/29/584_2024122920001744.png"), I("2024/12/29/584_2024122920001300.png"), I("2024/12/29/584_2024122920001739.png"), I("2024/12/29/584_2024122920002342.png")] },
  ],
  "将军祠": [
    { text: "Go to General Shrine teleport point. Walk forward. Climb over the red wall to find a white cat inside. Click [Pet] for rewards.", images: [I("2024/12/29/584_2024122914514168.png"), I("2024/12/29/584_202412291451446.png")] },
    { text: "Walk left, go around the back of the shrine, climb over another wall to find the second cat. Click [Pet].", images: [I("2024/12/29/584_2024122914515958.png"), I("2024/12/29/584_2024122914514157.png")] },
    { text: "Climb over the wall behind the second cat, walk forward, turn right, enter a cave and follow the arrow to find the third cat. Place the small Buddha statue in the designated position to complete.", images: [I("2024/12/29/584_2024122914515422.png"), I("2024/12/29/584_2024122914515469.png"), I("2024/12/29/584_202412291451535.png"), I("2024/12/29/584_2024122914515346.png"), I("2024/12/29/584_2024122914515169.png")] },
  ],
  "不羡仙": [
    { text: "Go to the entrance of the Living Clinic to find the cat \"Taotao\". Click [Pet] for rewards.", images: [I("2025/01/13/584_2025011325322466.png"), I("2025/01/13/584_2025011325322814.png")] },
    { text: "Go to the shop directly north to find the cat \"Laoyao\". Click [Pet] for rewards.", images: [I("2025/01/13/584_202501132532259.png"), I("2025/01/13/584_202501132532227.png")] },
    { text: "Go to the bamboo grove on the right side of the small shop to find the cat \"Youmaode\". Click [Pet] for rewards.", images: [I("2025/01/13/584_2025011325322201.png"), I("2025/01/13/584_2025011325322363.png")] },
    { text: "Go to the tea stall in the bamboo grove to find the cat \"Zhuyoutuo\". Click [Pet] for rewards.", images: [I("2025/01/13/584_2025011325322201.png")] },
    { text: "Go behind Lin Buxiu to find the cat \"Xueguniang\". Click [Pet] for rewards.", images: [I("2025/01/13/584_2025011325322363.png")] },
  ],
  "佛爷寨": [
    { text: "Go to the center of the northern courtyard to find the cat \"Xiao'e\". Click [Pet] for rewards.", images: [I("2025/01/13/584_202501133042387.png")] },
    { text: "Go to the riverside hut on the northeast side to find the cat \"Dafang\". Click [Pet] for rewards.", images: [I("2025/01/13/584_2025011330423252.png")] },
  ],
  "伏马庄": [
    { text: "Go to the East Gate and find the cat \"Masulao\" at Aunt Wang's feet. Click [Pet] for rewards.", images: [I("2025/01/13/584_2025011331342478.png"), I("2025/01/13/584_2025011331342146.png")] },
  ],
  "佛光顶": [
    { text: "Cat Play 1-8: Located on the northwest hillside of the Halo Peak teleport point. 8 cats to interact with.", images: [I("2025/01/13/584_2025011332918556.png")] },
    { text: "Cat Play 9: Cat \"Miaoqiliu\" is on the southeast side of the Halo Peak teleport point. Click [Pet] for rewards.", images: [I("2025/01/13/584_2025011332918919.png")] },
    { text: "Cat Play 10: Cat \"Shanji\" is in the courtyard on the northeast side. Click [Pet] for rewards.", images: [I("2025/01/13/584_2025011332918894.png")] },
    { text: "Cat Play 11: Cat \"Juyuan\" is located below the Scripture Library. Click [Pet] for rewards.", images: [I("2025/01/13/584_2025011332919573.png")] },
    { text: "Cat Play 12: Cat \"Zuozuo\" is near the waterfall at the foot of the Scripture Library mountain. Click [Pet] for rewards.", images: [I("2025/01/13/584_2025011332919510.png")] },
  ],

  // === Kaifeng ===
  "南门大街": [
    { text: "Go near the Patrol Office to find a cat. Click [Pet] for rewards.", images: [I("2025/01/16/584_2025011643733243.png")] },
    { text: "Go to the lakeside near Shengping Bridge to find a cat. Click [Pet] for rewards.", images: [I("2025/01/16/584_2025011643733702.png")] },
    { text: "Go to the west side of Shengping Bridge by the signpost to find a cat. Click [Pet] for rewards.", images: [I("2025/01/16/584_202501164373371.png")] },
  ],
  "开封府": [
    { text: "Go to the courtyard southeast of Daxiangguo Temple to find a cat. Click [Pet] for rewards.", images: [I("2025/01/16/584_2025011644754871.png")] },
    { text: "Go to the courtyard on Caomen Avenue to find a cat. Click [Pet] for rewards.", images: [I("2025/01/16/584_2025011644754376.png")] },
  ],
  "勾栏瓦肆": [
    { text: "Go to the street northeast of Daxiangguo Temple to find the first cat. Click [Pet] for rewards.", images: [I("2025/01/16/584_2025011650133124.png")] },
    { text: "Walk east along the street. Find the second cat at the alley entrance. Click [Pet] for rewards.", images: [I("2025/01/16/584_2025011650133444.png")] },
    { text: "Continue east. Find the third cat near the bridge. Click [Pet] for rewards.", images: [I("2025/01/16/584_2025011650133311.png")] },
    { text: "Cross the bridge and turn right. Find the fourth cat by the river. Click [Pet] for rewards.", images: [I("2025/01/16/584_2025011650133436.png")] },
    { text: "Return to the bridge and head north. Find the fifth cat by the houses. Click [Pet] for rewards.", images: [I("2025/01/16/584_2025011650133667.png")] },
    { text: "Continue north along the alley. Find the sixth cat at the corner. Click [Pet] for rewards.", images: [I("2025/01/16/584_2025011650133536.png")] },
    { text: "Walk north to the market area. Find the seventh cat by the stalls. Click [Pet] for rewards.", images: [I("2025/01/16/584_2025011650133777.png")] },
    { text: "Find the last cat on the other side of the market. Click [Pet] for rewards.", images: [I("2025/01/16/584_202501165013356.png")] },
  ],
  "醉花阴": [
    { text: "Go to the main street entrance of Velvet Shade to find the first cat. Click [Pet] for rewards.", images: [I("2025/01/16/584_2025011651522648.png")] },
    { text: "Walk along the main street. Find the second cat by the flower bed. Click [Pet] for rewards.", images: [I("2025/01/16/584_2025011651522987.png")] },
    { text: "Continue inward. Find the third cat in the courtyard on the left. Click [Pet] for rewards.", images: [I("2025/01/16/584_2025011651522139.png")] },
    { text: "Requires Elegance > 2000. Find the fourth cat in front of the pavilion on the right side of the main street. Click [Pet] for rewards.", images: [I("2025/01/16/584_2025011651522777.png")] },
    { text: "Requires Elegance > 2000. Find the fifth cat in the garden behind the pavilion. Click [Pet] for rewards.", images: [I("2025/01/16/584_2025011651522608.png")] },
    { text: "Find the last cat by the pool at the deepest part of Velvet Shade. Click [Pet] for rewards.", images: [I("2025/01/16/584_202501165152220.png")] },
  ],

  // === Hexi ===
  "迷津渡": [
    { text: "Teleport to Kan'erzi teleport point. Enter the house on the left to find and interact with a cat.", images: [I("2025/03/31/584_20250331103820762.png"), I("2025/03/31/584_20250331103820773.png"), I("2025/03/31/584_20250331103820526.png")] },
    { text: "Leave the house and go to the small shed ahead to find the second cat.", images: [I("2025/03/31/584_20250331103820592.png"), I("2025/03/31/584_20250331103819593.png")] },
    { text: "Turn around, go up the stairs, turn right at the top, enter the house and walk to the end. Find Cat \"Gulimoli\" in the corner.", images: [I("2025/03/31/584_20250331103820220.png"), I("2025/03/31/584_20250331103819231.png"), I("2025/03/31/584_20250331103819218.png")] },
    { text: "Teleport to Camel Post teleport point. Walk to the building ahead. Find Cat \"Luke\" on the wall.", images: [I("2025/03/31/584_20250331103819469.png"), I("2025/03/31/584_20250331103819726.png"), I("2025/03/31/584_20250331103819291.png")] },
  ],
  "金沙川": [
    { text: "Teleport to Matou Village. Walk south to the house shown by the arrow. Find Cat Play by the wall.", images: [I("2025/04/03/584_202504039315030.png"), I("2025/04/03/584_202504039315063.png"), I("2025/04/03/584_2025040393151594.png")] },
    { text: "Teleport to Huyang Market. Walk southwest along the road. Jump onto the roof shown by the arrow to find Cat Play.", images: [I("2025/04/03/584_2025040393152999.png"), I("2025/04/03/584_2025040393152398.png"), I("2025/04/03/584_2025040393151180.png"), I("2025/04/03/584_2025040393152119.png")] },
    { text: "From the second cat, walk southeast. Go behind the wall at the shown location to find Cat Play.", images: [I("2025/04/03/584_2025040393151136.png"), I("2025/04/03/584_2025040393152342.png"), I("2025/04/03/584_2025040393152367.png")] },
  ],
  "玉池": [
    { text: "Teleport to Jade Bank. Set the in-game time to noon (Wu Shi). Enter the house next to the teleport point to find Cat Play.", images: [I("2025/05/20/584_2025052010412284.jpg"), I("2025/05/20/584_20250520104121241.jpg"), I("2025/05/20/584_20250520104122472.jpg"), I("2025/05/20/584_20250520104122845.jpg")] },
  ],
  "酒泉镇": [
    { text: "Teleport to Tianshui Market. Walk toward the arrow to the riverbank to find Cat Play.", images: [I("2025/05/20/584_20250520105626508.jpg"), I("2025/05/20/584_20250520105626565.jpg"), I("2025/05/20/584_20250520105627429.jpg")] },
    { text: "After interacting, walk up the road to the pavilion. Enter inside to find Cat Play.", images: [I("2025/05/20/584_20250520105627502.jpg"), I("2025/05/20/584_2025052010562631.jpg"), I("2025/05/20/584_20250520105626186.jpg"), I("2025/05/20/584_20250520105627676.jpg")] },
    { text: "Return to the teleport point. Head to the dead tree location to find the third Cat Play.", images: [I("2025/05/20/584_20250520105628526.jpg"), I("2025/05/20/584_20250520105627310.jpg"), I("2025/05/20/584_20250520105627832.jpg")] },
    { text: "Walk to the arrow location. Jump onto the shed to find Cat Play on the shed ahead.", images: [I("2025/05/20/584_2025052010562834.jpg"), I("2025/05/20/584_20250520105628516.jpg"), I("2025/05/20/584_20250520105628571.jpg")] },
  ],
  "玉露台": [
    { text: "Teleport to Tengwang Village. Go to the courtyard shown by the arrow. Find Cat Play at the entrance.", images: [I("2025/05/20/584_20250520110847173.jpg"), I("2025/05/20/584_2025052011084878.jpg"), I("2025/05/20/584_20250520110847568.jpg")] },
    { text: "Go to the house shown by the arrow. Enter the courtyard and find Cat Play under the shed.", images: [I("2025/05/20/584_20250520110848561.jpg"), I("2025/05/20/584_20250520110847719.jpg")] },
    { text: "Return to the teleport point. Jump down and follow the road to the house entrance to find Cat Play.", images: [I("2025/05/20/584_20250520110848615.jpg"), I("2025/05/20/584_20250520110848749.jpg"), I("2025/05/20/584_20250520110848572.jpg")] },
  ],

  // === Hexi · Liangzhou ===
  "饮马隘": [
    { text: "Teleport to Jade Bank. Go to the house entrance shown by the arrow. Find Cat Play at the door.", images: [I("2025/05/20/584_2025052010331969.jpg"), I("2025/05/20/584_20250520103319241.jpg"), I("2025/05/20/584_20250520103319461.jpg")] },
    { text: "Teleport to Yellow Sand Path. Follow the road. Find Cat Play under the tent on the right side.", images: [I("2025/05/20/584_2025052010332092.jpg"), I("2025/05/20/584_20250520103320846.jpg"), I("2025/05/20/584_20250520103320832.png"), I("2025/05/20/584_20250520103320810.jpg")] },
  ],

  // === Hexi · Qinchuan ===
  "扶风甸": [
    { text: "Teleport to Jiezilu. Walk toward the arrow, then turn left to the shed to find Cat Play.", images: [I("2025/09/06/584_2025090613903973.png"), I("2025/09/06/584_2025090613903527.png"), I("2025/09/06/584_2025090613903703.png"), I("2025/09/06/584_202509061390344.png")] },
    { text: "Adjust your view and walk toward the boat shown by the arrow. Find Cat Play on the boat.", images: [I("2025/09/06/584_2025090613903782.png"), I("2025/09/06/584_2025090613903687.png")] },
  ],
  "狮子坟": [
    { text: "Teleport to Guiwang Field. Go to the NPC shown by the arrow to find Cat Play.", images: [I("2025/09/06/584_2025090615224576.png"), I("2025/09/06/584_2025090615224180.png"), I("2025/09/06/584_2025090615224337.png")] },
    { text: "Go behind the house shown by the arrow. Climb onto the rocks to find Cat Play.", images: [I("2025/09/06/584_2025090615224611.png"), I("2025/09/06/584_2025090615224450.png"), I("2025/09/06/584_2025090615224376.png")] },
    { text: "Walk toward the arrow to the riverside. Find Cat Play near the house ahead.", images: [I("2025/09/06/584_2025090615224759.png"), I("2025/09/06/584_2025090615224343.png"), I("2025/09/06/584_2025090615224590.png")] },
  ],
};
