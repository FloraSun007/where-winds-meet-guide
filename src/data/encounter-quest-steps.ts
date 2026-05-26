export interface QuestStep {
  text: string;
  textEn: string;
  images?: string[];
}

export const QUEST_STEPS: Record<string, QuestStep[]> = {
  // ── 清河 (8 detailed) ──────────────────────────

  "qh-jingzhongren": [
    { text: "来到图中标记的位置触发奇遇。", textEn: "Go to the marked location to trigger.", images: ["http://img1.ali213.net/glpic/2024/06/11/584_2024061154948984.png"] },
    { text: "将时间调到亥时，靠近井口对话。", textEn: "Set time to Hai hour and talk near the well.", images: ["http://img1.ali213.net/glpic/2024/06/11/584_2024061154946652.jpg", "http://img1.ali213.net/glpic/2024/06/11/584_2024061154948535.jpg"] },
    { text: "调至子时，向井中询问对话，交付衣服和把子肉。", textEn: "Set time to Zi hour, talk to the well and deliver clothes and meat.", images: ["http://img1.ali213.net/glpic/2024/06/11/584_2024061154947737.jpg", "http://img1.ali213.net/glpic/2024/06/11/584_202406115494798.jpg"] },
    { text: "击败周围出现的小混混。", textEn: "Defeat the thugs that appear.", images: ["http://img1.ali213.net/glpic/2024/06/11/584_2024061155141722.png"] },
    { text: "调至子时，击败再次出现的小混混。", textEn: "Set time to Zi hour and defeat the thugs again.", images: ["http://img1.ali213.net/glpic/2024/06/11/584_2024061154947104.jpg", "http://img1.ali213.net/glpic/2024/06/11/584_2024061154948843.jpg"] },
    { text: "击败最后的小混混，调查尸体完成任务。", textEn: "Defeat the last thug and investigate the body to complete.", images: ["http://img1.ali213.net/glpic/2024/06/11/584_2024061154947650.jpg", "http://img1.ali213.net/glpic/2024/06/11/584_2024061154947653.jpg"] },
  ],

  "qh-suoweibaoying": [
    { text: "传送到图中标记的位置。", textEn: "Teleport to the marked location.", images: ["http://img1.ali213.net/glpic/2024/06/12/584_20240612102829578.png"] },
    { text: "与两位猎户对话交谈。", textEn: "Talk to the two hunters.", images: ["http://img1.ali213.net/glpic/2024/06/12/584_20240612102829697.png"] },
    { text: "跟随指引来到指定位置。", textEn: "Follow the guide to the designated location.", images: ["http://img1.ali213.net/glpic/2024/06/12/584_20240612102829435.png"] },
    { text: "与算命先生对话，他会让你去找刀疤两NPC。", textEn: "Talk to the fortune teller, who will ask you to find Daoba NPC.", images: ["http://img1.ali213.net/glpic/2024/06/12/584_20240612102830287.png", "http://img1.ali213.net/glpic/2024/06/12/584_20240612102830755.png"] },
    { text: "完成对话领取奖励。", textEn: "Finish the dialog and claim rewards.", images: ["http://img1.ali213.net/glpic/2024/06/12/584_20240612102830250.png"] },
  ],

  "qh-yuanshengyuanmie": [
    { text: "传送到标记位置，找惊慌的村民对话。", textEn: "Teleport to the marked location and talk to the panicked villager.", images: ["http://img1.ali213.net/glpic/2024/06/12/584_20240612113953645.png"] },
    { text: "了解迷雾信息后，调整时间前往指定位置。", textEn: "Learn about the fog, adjust time and go to the location.", images: ["http://img1.ali213.net/glpic/2024/06/12/584_20240612113953969.png"] },
    { text: "找到少年，通过侍卫对话获得玉佩。", textEn: "Find the youth and get a jade pendant from the guard.", images: ["http://img1.ali213.net/glpic/2024/06/12/584_20240612113954802.png"] },
    { text: "把玉佩交给少女获得定情信物，去找白衣少年。", textEn: "Give the jade pendant to the girl for a love token, then find the man in white.", images: ["http://img1.ali213.net/glpic/2024/06/12/584_20240612113954416.png"] },
    { text: "把定情信物交给白衣少年完成任务。", textEn: "Give the love token to the man in white to complete.", images: ["http://img1.ali213.net/glpic/2024/06/12/584_20240612113954175.png"] },
  ],

  "qh-yingxiongyumei": [
    { text: "来到标记位置围观触发奇遇。", textEn: "Watch the scene at the marked location to trigger.", images: ["http://img1.ali213.net/glpic/2024/06/12/584_2024061213111955.png", "http://img1.ali213.net/glpic/2024/06/12/584_2024061213111790.png"] },
    { text: "第一项挑战：击败黑熊获取毛发。", textEn: "Challenge 1: Defeat the black bear for fur.", images: ["http://img1.ali213.net/glpic/2024/06/12/584_2024061213111718.png"] },
    { text: "第二项挑战：弹琴（随便按即可）。", textEn: "Challenge 2: Play the lute (just press any key).", images: ["http://img1.ali213.net/glpic/2024/06/12/584_2024061213112432.png"] },
    { text: "静坐等待偷听对话完成。", textEn: "Sit quietly and eavesdrop to complete.", images: ["http://img1.ali213.net/glpic/2024/06/12/584_2024061213111637.png", "http://img1.ali213.net/glpic/2024/06/12/584_2024061213112380.png", "http://img1.ali213.net/glpic/2024/06/12/584_2024061213112621.png"] },
  ],

  "qh-zhirenyao": [
    { text: "在标记位置偷听开启任务。", textEn: "Eavesdrop at the marked location to start.", images: ["http://img1.ali213.net/glpic/2024/06/12/584_2024061215052231.png"] },
    { text: "与甄暖对话，收集曼陀罗花。", textEn: "Talk to Zhen Nuan and collect datura flowers.", images: ["http://img1.ali213.net/glpic/2024/06/12/584_2024061215053197.png", "http://img1.ali213.net/glpic/2024/06/12/584_2024061215053409.png"] },
    { text: "采集曼陀罗花提交完成。", textEn: "Submit the collected datura flowers.", images: ["http://img1.ali213.net/glpic/2024/06/12/584_2024061215053896.png"] },
    { text: "到达任务地点，用弓箭消灭纸人。", textEn: "Go to the location and use arrows to eliminate paper figures.", images: ["http://img1.ali213.net/glpic/2024/06/12/584_2024061215052694.png"] },
    { text: "返回初始任务点，消灭所有纸人。", textEn: "Return to the starting point and eliminate all paper figures.", images: ["http://img1.ali213.net/glpic/2024/06/12/584_2024061215052349.png"] },
    { text: "与NPC对话。", textEn: "Talk to the NPC.", images: ["http://img1.ali213.net/glpic/2024/06/12/584_2024061215053905.png"] },
    { text: "回到甄暖处对话完成任务。", textEn: "Return to Zhen Nuan and talk to complete.", images: ["http://img1.ali213.net/glpic/2024/06/12/584_2024061215053135.png"] },
  ],

  "qh-geyiyongzhi": [
    { text: "在神仙渡西找到钱飞飞对话触发。", textEn: "Find Qian Feifei at Shenxiandu West and talk.", images: ["http://img1.ali213.net/glpic/2024/06/12/584_2024061221153347.png", "http://img1.ali213.net/glpic/2024/06/12/584_2024061221154980.png"] },
    { text: "来到医馆与NPC对话。", textEn: "Go to the clinic and talk to the NPC.", images: ["http://img1.ali213.net/glpic/2024/06/12/584_2024061221153117.png"] },
    { text: "与小孩对话，取最高点的物品。", textEn: "Talk to the child and take the item from the highest point.", images: ["http://img1.ali213.net/glpic/2024/06/12/584_2024061221154763.png"] },
    { text: "与NPC对话调查酒窖线索。", textEn: "Talk to NPC and investigate the wine cellar.", images: ["http://img1.ali213.net/glpic/2024/06/12/584_2024061221154945.png"] },
    { text: "稍晚时根据声音指引打开地窖。", textEn: "Later, follow the sound to open the cellar.", images: ["http://img1.ali213.net/glpic/2024/06/12/584_2024061221154795.png"] },
    { text: "地窖内发现宝箱和猫咪。", textEn: "Find a chest and a cat inside the cellar.", images: ["http://img1.ali213.net/glpic/2024/06/12/584_2024061221237340.png"] },
    { text: "对猫咪使用定身，抓起来带回医馆交付。", textEn: "Immobilize the cat, catch it and bring it to the clinic.", images: ["http://img1.ali213.net/glpic/2024/06/12/584_2024061221237547.png"] },
    { text: "调至第二天，与医馆NPC和钱飞飞对话赠礼。", textEn: "Set time to next day, talk to clinic NPC and Qian Feifei to give a gift.", images: ["http://img1.ali213.net/glpic/2024/06/12/584_2024061221238346.png", "http://img1.ali213.net/glpic/2024/06/12/584_2024061221237188.png"] },
    { text: "完成所有流程，领取奖励。", textEn: "Complete all steps and claim rewards.", images: ["http://img1.ali213.net/glpic/2024/06/12/584_202406122123711.png"] },
  ],

  "qh-shenmejiuliu": [
    { text: "触发奇遇后与NPC对话展开任务。", textEn: "Talk to NPC after triggering.", images: ["http://img1.ali213.net/glpic/2024/06/12/584_2024061223109671.png", "http://img1.ali213.net/glpic/2024/06/12/584_2024061223110245.png"] },
    { text: "使用炸药桶炸开洞口。", textEn: "Use explosive barrels to blast open the cave.", images: ["http://img1.ali213.net/glpic/2024/06/12/584_202406122311073.png"] },
    { text: "用火焰驱逐大鹅。", textEn: "Use fire to drive away the geese.", images: ["http://img1.ali213.net/glpic/2024/06/12/584_2024061223110772.png", "http://img1.ali213.net/glpic/2024/06/12/584_2024061223109133.png"] },
    { text: "与NPC对话制作大碗宽面。", textEn: "Talk to NPC and make noodles.", images: ["http://img1.ali213.net/glpic/2024/06/12/584_2024061223109357.png"] },
    { text: "偷听NPC对话完成。", textEn: "Eavesdrop on NPC dialog to complete.", images: ["http://img1.ali213.net/glpic/2024/06/12/584_2024061223110330.png", "http://img1.ali213.net/glpic/2024/06/12/584_2024061223109112.png"] },
  ],

  "qh-meishijichengzhe": [
    { text: "在七伐坡附近与NPC对话触发。", textEn: "Talk to NPC near Qifapo to trigger.", images: ["http://img1.ali213.net/glpic/2024/06/14/584_2024061420238832.png"] },
    { text: "NPC让你寻找山鸡交给他。", textEn: "The NPC asks you to find a pheasant.", images: ["http://img1.ali213.net/glpic/2024/06/14/584_2024061420238930.png"] },
    { text: "遇到白发男人，按他的方式烹饪山鸡。", textEn: "Meet the white-haired man and cook the pheasant his way.", images: ["http://img1.ali213.net/glpic/2024/06/14/584_2024061420239809.png"] },
    { text: "制作山鸡酥（一次三份）。", textEn: "Make pheasant pastry (3 portions at once).", images: ["http://img1.ali213.net/glpic/2024/06/14/584_2024061420238656.png"] },
    { text: "交付三份山鸡酥给NPC完成任务。", textEn: "Deliver 3 portions to the NPC to complete.", images: ["http://img1.ali213.net/glpic/2024/06/14/584_202406142023839.png"] },
  ],

  // ── 天陉 (4 detailed) ──────────────────────────

  "tj-huishuohuadexiaofen": [
    { text: "传送至七色坪传送点。", textEn: "Teleport to Qise Ping waypoint.", images: ["http://img1.ali213.net/glpic/2025/11/25/584_2025112520827202.jpg"] },
    { text: "沿水边跑到发出声音的供台位置。", textEn: "Follow the water to the sounding altar.", images: ["http://img1.ali213.net/glpic/2025/11/25/584_2025112520827566.jpg"] },
    { text: "调查供台触发机关即可。", textEn: "Investigate the altar to trigger.", images: ["http://img1.ali213.net/glpic/2025/11/25/584_202511252082770.jpg"] },
  ],

  "tj-zhulangguangyin": [
    { text: "传送至碧水云涛传送点，一直往右边走。", textEn: "Teleport to Bishui Yuntao and walk right.", images: ["http://img1.ali213.net/glpic/2025/11/25/584_2025112521020912.jpg"] },
    { text: "在水中间与余伯仲进行对话即可。", textEn: "Talk to Yu Bozhong in the water.", images: ["http://img1.ali213.net/glpic/2025/11/25/584_202511252102065.jpg"] },
  ],

  "tj-qimozhoulailou": [
    { text: "传送至莘野坊传送点。", textEn: "Teleport to Xinyefang waypoint.", images: ["http://img1.ali213.net/glpic/2025/11/25/584_2025112520827513.jpg"] },
    { text: "到达后往前走一点即可触发。", textEn: "Walk forward a bit to trigger.", images: ["http://img1.ali213.net/glpic/2025/11/25/584_2025112520828251.jpg"] },
  ],

  "tj-yinleiren": [
    { text: "传送至浮英野传送点，往箭头方向走。", textEn: "Teleport to Fuying Wild, walk toward the arrow.", images: ["http://img1.ali213.net/glpic/2025/11/25/584_2025112520828514.jpg"] },
    { text: "需半小时内没到达过该区域才能触发，可跑到位置后下线，半小时后再上线。", textEn: "Must not have visited for 30 min. Log off at the spot and come back in 30 min." },
    { text: "也可在叮当桥打开相机使用雷雨天气，保持不退出跑过去触发。", textEn: "Alternative: use storm camera at Dangdang Bridge and run to the spot." },
  ],

  // ── 河西 (13 detailed) ──────────────────────────

  "hx-daohuanji": [
    { text: "传送至白雀经阁，往北走到路口触发。", textEn: "Teleport to White Sparrow Scripture Pavilion, walk north to the intersection." },
    { text: "与雪地上的老兵对话。", textEn: "Talk to the old soldier on the snow.", images: ["https://img1.ali213.net/glpic/2025/05/17/584_20250517103929716.png"] },
    { text: "使用听风辩位技能跟随脚印。", textEn: "Use Listen to Wind skill to follow footprints.", images: ["https://img1.ali213.net/glpic/2025/05/17/584_20250517103930474.png"] },
    { text: "找到郑五四对话。", textEn: "Find Zheng Wusi and talk.", images: ["https://img1.ali213.net/glpic/2025/05/17/584_20250517103930579.png"] },
    { text: "治疗他的疾病。", textEn: "Treat his illness.", images: ["https://img1.ali213.net/glpic/2025/05/17/584_20250517103930541.png"] },
    { text: "调整时间，去附近岩石上捡信阅读。", textEn: "Adjust time, pick up and read the letter on the rock.", images: ["https://img1.ali213.net/glpic/2025/05/17/584_20250517103930971.png"] },
    { text: "回去与老兵对话。", textEn: "Go back and talk to the old soldier.", images: ["https://img1.ali213.net/glpic/2025/05/17/584_20250517103929684.png"] },
    { text: "两次对话后被传送，找到郑五四对话。", textEn: "After two conversations you'll be teleported. Find Zheng Wusi.", images: ["https://img1.ali213.net/glpic/2025/05/17/584_20250517103930617.png"] },
    { text: "继续往上走。", textEn: "Continue walking up.", images: ["https://img1.ali213.net/glpic/2025/05/17/584_20250517103930811.png"] },
    { text: "在山顶调查，与郑五四对话。", textEn: "Investigate at the top and talk to Zheng Wusi.", images: ["https://img1.ali213.net/glpic/2025/05/17/584_20250517103930304.png"] },
    { text: "回去找老兵对话。", textEn: "Go back and talk to the old soldier.", images: ["https://img1.ali213.net/glpic/2025/05/17/584_20250517103930916.png"] },
    { text: "任务完成。", textEn: "Quest complete.", images: ["https://img1.ali213.net/glpic/2025/05/17/584_20250517103930380.png"] },
  ],

  "hx-baixiqiankun": [
    { text: "前往天水集传送点，然后跟随任务指引往东方走。", textEn: "Go to the Tianshui Market teleport point, then follow the quest guide eastward.", images: ["http://img1.ali213.net/glpic/2025/05/19/584_2025051935431668.png"] },
    { text: "找到房子前方的庆轻轻。", textEn: "Find Qing Qingqing in front of the house.", images: ["http://img1.ali213.net/glpic/2025/05/19/584_2025051935430425.png"] },
    { text: "接取任务后需前往途中标记点处。", textEn: "After accepting the quest, go to the marked point on the way.", images: ["http://img1.ali213.net/glpic/2025/05/19/584_2025051935430569.png"] },
    { text: "然后过完剧情即可通关，并获得一个外观奖励。", textEn: "Watch the cutscene to complete and receive a cosmetic reward.", images: ["http://img1.ali213.net/glpic/2025/05/19/584_2025051935431742.png", "http://img1.ali213.net/glpic/2025/05/19/584_202505193543051.png"] },
  ],

  "hx-shougluohan": [
    { text: "传送至天水集，前往市场触发。", textEn: "Teleport to Tianshui Market to trigger." },
    { text: "与妇人对话。", textEn: "Talk to the woman.", images: ["https://img1.ali213.net/glpic/2025/05/30/584_2025053053901881.png"] },
    { text: "传送至无垢塔偷听。", textEn: "Teleport to Stainless Pagoda and eavesdrop.", images: ["https://img1.ali213.net/glpic/2025/05/30/584_2025053053901842.png", "https://img1.ali213.net/glpic/2025/05/30/584_2025053053901516.png"] },
    { text: "跟随指引调查发光点。", textEn: "Follow the guide to investigate the glowing spot.", images: ["https://img1.ali213.net/glpic/2025/05/30/584_2025053053901597.png"] },
    { text: "出来找僧人对话。", textEn: "Come out and find the monk.", images: ["https://img1.ali213.net/glpic/2025/05/30/584_2025053053901225.png"] },
    { text: "提交物品，回去与妇人对话。", textEn: "Submit the item and go back to the woman.", images: ["https://img1.ali213.net/glpic/2025/05/30/584_2025053053901301.png"] },
    { text: "再去无垢塔偷听。", textEn: "Go to the Stainless Pagoda again to eavesdrop.", images: ["https://img1.ali213.net/glpic/2025/05/30/584_202505305390165.png"] },
    { text: "回去找僧人对话。", textEn: "Go back and talk to the monk.", images: ["https://img1.ali213.net/glpic/2025/05/30/584_2025053053901343.png"] },
    { text: "调至第二天，与僧人对话。", textEn: "Set time to next day and talk to the monk.", images: ["https://img1.ali213.net/glpic/2025/05/30/584_2025053053901804.png"] },
    { text: "完成所有对话，任务完成。", textEn: "Complete all dialogues to finish." },
  ],

  "hx-yinglvzhiren": [
    { text: "首先前往图中箭头指向的位置，然后一直往前走。", textEn: "First, go to the location the arrow points to and keep walking forward.", images: ["http://img1.ali213.net/glpic/2025/06/04/584_2025060425327140.png"] },
    { text: "到达帐篷处完成与图中NPC的对话，注意选择第一个选项，就能获得黄钟碎片。", textEn: "Reach the tent and talk to the NPC. Choose the first option to get the Yellow Bell Fragment.", images: ["http://img1.ali213.net/glpic/2025/06/04/584_2025060425327416.png"] },
    { text: "接着前往图中标记点处。", textEn: "Then go to the marked location on the map.", images: ["http://img1.ali213.net/glpic/2025/06/04/584_2025060425327684.png"] },
    { text: "到达后跳到塔顶，然后从上方进入室内。", textEn: "Jump to the top of the tower and enter from above.", images: ["http://img1.ali213.net/glpic/2025/06/04/584_202506042532729.png"] },
    { text: "跟随指引完成与屋顶的神秘人对话。", textEn: "Follow the guide and talk to the mysterious person on the roof.", images: ["http://img1.ali213.net/glpic/2025/06/04/584_2025060425327344.png"] },
    { text: "将游戏时间调整至亥时后，再次与其进行对话。", textEn: "Adjust the time to Hai hour and talk to them again.", images: ["http://img1.ali213.net/glpic/2025/06/04/584_2025060425327702.png"] },
    { text: "过完剧情后即可通关，并获得对应的奖励。", textEn: "Watch the cutscene to complete and receive the reward.", images: ["http://img1.ali213.net/glpic/2025/06/04/584_2025060425327759.png"] },
  ],

  "hx-wenlaizhisheng": [
    { text: "传送至月湖暗道传送点，拾取花种触发。", textEn: "Teleport to Moon Lake Hidden Path, pick up flower seeds.", images: ["https://img1.ali213.net/glpic/2025/05/30/584_2025053052714545.png"] },
    { text: "左转下去进入里面的门。", textEn: "Turn left, go down and enter the door.", images: ["https://img1.ali213.net/glpic/2025/05/30/584_202505305271473.png"] },
    { text: "在楼梯处走湖边左边的路下楼梯。", textEn: "At the stairs, take the left path by the lake.", images: ["https://img1.ali213.net/glpic/2025/05/30/584_2025053052714203.png"] },
    { text: "经过衣服继续往前走。", textEn: "Pass by the clothes and keep walking.", images: ["https://img1.ali213.net/glpic/2025/05/30/584_2025053052714395.png"] },
    { text: "下去看到信件，拾取。", textEn: "Go down and pick up the letter.", images: ["https://img1.ali213.net/glpic/2025/05/30/584_2025053052714154.png"] },
    { text: "调查旁边的花朵。", textEn: "Investigate the flower nearby.", images: ["https://img1.ali213.net/glpic/2025/05/30/584_2025053052714199.png"] },
    { text: "去附近的花海（如无反应调至子时）。", textEn: "Go to the flower sea (adjust to Zi hour if nothing happens).", images: ["https://img1.ali213.net/glpic/2025/05/30/584_202505305271416.png"] },
    { text: "在此处种花。", textEn: "Plant the flower here.", images: ["https://img1.ali213.net/glpic/2025/05/30/584_2025053052714681.png"] },
    { text: "跟随指引跑向发光房屋。", textEn: "Follow the guide to the glowing house.", images: ["https://img1.ali213.net/glpic/2025/05/30/584_2025053052714417.png"] },
    { text: "在发光房屋交互，去下一个发光房屋交互。", textEn: "Interact at the glowing house, then the next one.", images: ["https://img1.ali213.net/glpic/2025/05/30/584_2025053052714913.png"] },
    { text: "等待剧情结束，任务完成。", textEn: "Wait for the cutscene. Quest complete.", images: ["https://img1.ali213.net/glpic/2025/05/30/584_2025053052714691.png"] },
  ],

  "hx-shamaji": [
    { text: "传送至清玉岸路边触发。", textEn: "Teleport to Qingyu An and trigger by the road.", images: ["https://img1.ali213.net/glpic/2025/06/09/584_2025060955446592.png"] },
    { text: "与士卒对话。", textEn: "Talk to the soldier.", images: ["https://img1.ali213.net/glpic/2025/06/09/584_2025060955446446.png"] },
    { text: "与队正对话。", textEn: "Talk to the squad leader.", images: ["https://img1.ali213.net/glpic/2025/06/09/584_202506095544661.png"] },
    { text: "观察附近的马。", textEn: "Observe the horse nearby.", images: ["https://img1.ali213.net/glpic/2025/06/09/584_202506095544575.png"] },
    { text: "给马喂草。", textEn: "Feed the horse some grass.", images: ["https://img1.ali213.net/glpic/2025/06/09/584_2025060955445839.png"] },
    { text: "找老卒对话。", textEn: "Find and talk to the old soldier.", images: ["https://img1.ali213.net/glpic/2025/06/09/584_2025060955445486.png"] },
    { text: "剧情后与虞候对话。", textEn: "After cutscene, talk to the adjutant.", images: ["https://img1.ali213.net/glpic/2025/06/09/584_2025060955446531.png"] },
    { text: "调查倒下的老士兵。", textEn: "Investigate the fallen old soldier.", images: ["https://img1.ali213.net/glpic/2025/06/09/584_202506095544556.png", "https://img1.ali213.net/glpic/2025/06/09/584_2025060955445288.png"] },
    { text: "跟随指引与队正对话。", textEn: "Follow the guide and talk to the squad leader.", images: ["https://img1.ali213.net/glpic/2025/06/09/584_2025060955445662.png"] },
    { text: "找到老兵对话完成任务。", textEn: "Find the veteran and talk to complete.", images: ["https://img1.ali213.net/glpic/2025/06/09/584_2025060955445848.png"] },
  ],

  "hx-huweiliangyuan": [
    { text: "通过藤王村传送点在河边找到两个NPC进行对话。", textEn: "Use the Tengwang Village teleport point and find two NPCs by the river to talk.", images: [] },
    { text: "对话完成将玉碗恢复原状后提交。", textEn: "After the dialogue, restore the jade bowl and submit it.", images: ["https://img1.ali213.net/glpic/2025/05/17/584_20250517111558434.png"] },
    { text: "根据指引追随前往的NPC。", textEn: "Follow the NPC as guided.", images: ["https://img1.ali213.net/glpic/2025/05/17/584_20250517111558274.png"] },
    { text: "进行线索调查，将两个线索连接起来。", textEn: "Investigate the clues and connect the two pieces of evidence.", images: ["https://img1.ali213.net/glpic/2025/05/17/584_20250517111558470.png", "https://img1.ali213.net/glpic/2025/05/17/584_20250517111558698.png", "https://img1.ali213.net/glpic/2025/05/17/584_2025051711155877.png"] },
    { text: "最后等待对话完成即可完成奇遇。", textEn: "Wait for the dialogue to end to complete the encounter.", images: ["https://img1.ali213.net/glpic/2025/05/17/584_2025051711155845.png"] },
  ],

  "hx-tademingzi": [
    { text: "前往河西的望安屯北边的火堆处触发奇遇。", textEn: "Go to the campfire north of Wang'an Village in Hexi to trigger.", images: ["http://img1.ali213.net/glpic/2025/04/03/584_2025040332026848.png"] },
    { text: "未触发奇遇，可将时间调整到辰时。", textEn: "If the encounter doesn't trigger, adjust the time to Chen hour.", images: ["http://img1.ali213.net/glpic/2025/04/03/584_2025040332025920.png"] },
    { text: "在火堆处拾取树枝，进入剧情。", textEn: "Pick up a branch at the campfire to enter the cutscene.", images: ["http://img1.ali213.net/glpic/2025/04/03/584_2025040332026687.png"] },
    { text: "剧情结束后，继续与树枝互动。", textEn: "After the cutscene, continue interacting with the branch.", images: ["http://img1.ali213.net/glpic/2025/04/03/584_2025040332026271.png"] },
    { text: "根据指引前往光点位置。", textEn: "Follow the guide to the glowing point.", images: ["http://img1.ali213.net/glpic/2025/04/03/584_2025040332025795.png"] },
    { text: "需要寻找三个道具。", textEn: "Find three items.", images: ["http://img1.ali213.net/glpic/2025/04/03/584_2025040332025797.png", "http://img1.ali213.net/glpic/2025/04/03/584_2025040332025547.png", "http://img1.ali213.net/glpic/2025/04/03/584_2025040332026613.png"] },
    { text: "找到所有道具后，返回至指引位置进行互动。", textEn: "After finding all items, return to the guided location and interact.", images: ["http://img1.ali213.net/glpic/2025/04/03/584_2025040332026641.png"] },
    { text: "对话结束即可完成奇遇。", textEn: "The encounter completes when the dialogue ends.", images: ["http://img1.ali213.net/glpic/2025/04/03/584_202504033202590.png"] },
  ],

  "hx-huweiyinguo": [
    { text: "与楚芎进行对话开始奇遇任务。", textEn: "Talk to Chu Qiong to start the encounter.", images: ["https://img1.ali213.net/glpic/2025/04/01/584_20250401102630360.png"] },
    { text: "对话完成后视角后转前往前方光点处。", textEn: "After the dialogue, turn around and go to the glowing point ahead.", images: ["https://img1.ali213.net/glpic/2025/04/01/584_20250401102631974.png"] },
    { text: "在大树处会触发动画，然后与NPC进行对话。", textEn: "A cutscene triggers at the big tree, then talk to the NPC.", images: ["https://img1.ali213.net/glpic/2025/04/01/584_20250401102631760.png"] },
    { text: "之后一直跟随那个NPC走就行。", textEn: "Keep following the NPC.", images: ["https://img1.ali213.net/glpic/2025/04/01/584_20250401102630729.png"] },
    { text: "最后偷听他们之间的对话。", textEn: "Finally, eavesdrop on their conversation.", images: ["https://img1.ali213.net/glpic/2025/04/01/584_20250401102630320.png"] },
    { text: "对话完成后上前参与进行对话。", textEn: "After eavesdropping, step forward and join the conversation.", images: ["https://img1.ali213.net/glpic/2025/04/01/584_20250401102631901.png"] },
    { text: "对话完成后跟随他们一直走。", textEn: "After the dialogue, follow them as they walk.", images: ["https://img1.ali213.net/glpic/2025/04/01/584_20250401102630642.png"] },
    { text: "任务完成。", textEn: "Quest complete.", images: ["https://img1.ali213.net/glpic/2025/04/01/584_20250401102631632.png"] },
  ],

  "hx-qujingzhihou": [
    { text: "前往迷津渡，在路边找到NPC触发任务。", textEn: "Go to Mijindu and find the NPC by the road to trigger the quest.", images: ["http://img1.ali213.net/glpic/2025/04/03/584_2025040334400628.png", "http://img1.ali213.net/glpic/2025/04/03/584_2025040334359863.png"] },
    { text: "将时间调整到巳时，前往迷津渡触发任务。", textEn: "Adjust the time to Si hour and go to Mijindu to trigger the quest." },
    { text: "在迷津渡路边找到僧人并与他进行对话。", textEn: "Find the monk by the road at Mijindu and talk to him.", images: ["http://img1.ali213.net/glpic/2025/04/03/584_2025040334359863.png"] },
    { text: "对话完成后，将时间调整到次日的卯时。", textEn: "After the dialogue, adjust the time to Mao hour the next day.", images: ["http://img1.ali213.net/glpic/2025/04/03/584_2025040334359296.png"] },
    { text: "根据指引，再次找到僧人并与其对话。", textEn: "Follow the guide, find the monk again and talk.", images: ["http://img1.ali213.net/glpic/2025/04/03/584_2025040334359903.png"] },
    { text: "对话结束后，跟随地上的脚印一直向前走。", textEn: "After the dialogue, follow the footprints on the ground.", images: ["http://img1.ali213.net/glpic/2025/04/03/584_2025040334402849.png"] },
    { text: "在前方遇到强盗，偷听对话后将其消灭，拾取经书和舍利匣。", textEn: "Encounter bandits ahead, eavesdrop, defeat them, and pick up scriptures and the relic box.", images: ["http://img1.ali213.net/glpic/2025/04/03/584_2025040334401676.png", "http://img1.ali213.net/glpic/2025/04/03/584_2025040334359260.png", "http://img1.ali213.net/glpic/2025/04/03/584_2025040334359148.png"] },
    { text: "拿到物品后，返回僧人处提交。", textEn: "After getting the items, return to the monk and submit them.", images: ["http://img1.ali213.net/glpic/2025/04/03/584_2025040334400230.png"] },
    { text: "将时间调整到次天的卯时。", textEn: "Adjust the time to Mao hour the next day.", images: ["http://img1.ali213.net/glpic/2025/04/03/584_2025040334400698.png"] },
    { text: "继续找到僧人进行对话，结束后根据指引收集枯枝。", textEn: "Find the monk again, talk, then follow the guide to collect dead branches.", images: ["http://img1.ali213.net/glpic/2025/04/03/584_2025040334400186.png", "http://img1.ali213.net/glpic/2025/04/03/584_2025040334402344.png"] },
    { text: "拾取后返回，偷听对话，前往提交柴火并再次与僧人对话。", textEn: "After picking up, return, eavesdrop, submit the firewood, and talk to the monk again.", images: ["http://img1.ali213.net/glpic/2025/04/03/584_2025040334400728.png", "http://img1.ali213.net/glpic/2025/04/03/584_2025040334401131.png", "http://img1.ali213.net/glpic/2025/04/03/584_2025040334401309.png"] },
    { text: "等僧人睡觉后，将时间调整到次天的卯时。", textEn: "Wait for the monk to sleep, then adjust the time to Mao hour the next day.", images: ["http://img1.ali213.net/glpic/2025/04/03/584_2025040334401892.png"] },
    { text: "根据指引，找到僧人进行对话。", textEn: "Follow the guide and find the monk to talk.", images: ["http://img1.ali213.net/glpic/2025/04/03/584_2025040334401373.png"] },
    { text: "去打一下白头城的镇守。", textEn: "Go defeat the guardian of Baitou City." },
    { text: "打完后，再次与僧人对话，即可完成奇遇。", textEn: "After defeating, talk to the monk again to complete the encounter.", images: ["http://img1.ali213.net/glpic/2025/04/03/584_2025040334403312.png", "http://img1.ali213.net/glpic/2025/04/03/584_2025040334402359.png"] },
  ],

  "hx-huangjinxiang": [
    { text: "前置条件：完成河西卷二·沙海无舟。", textEn: "Prerequisite: Complete Hexi Volume 2 - Sand Sea Without Boat." },
    { text: "抵达胡杨集界碑附近，找到杨婆婆并与其对话。", textEn: "Arrive near the Huyang Market boundary marker, find Yang Popo and talk to her.", images: ["http://img1.ali213.net/glpic/2025/04/03/584_2025040323406281.png", "http://img1.ali213.net/glpic/2025/04/03/584_2025040323405491.png"] },
    { text: "与杨婆婆对话后，给她治病。", textEn: "After talking to Yang Popo, heal her illness.", images: ["http://img1.ali213.net/glpic/2025/04/03/584_2025040323406634.png"] },
    { text: "跟随杨婆婆向前走，途中遇到人群，与人群对话收集线索。", textEn: "Follow Yang Popo forward, meet a crowd, talk to them and collect clues.", images: ["http://img1.ali213.net/glpic/2025/04/03/584_2025040323406789.png"] },
    { text: "前往金沙川左边的建筑，跳进房子内获取胡杨叶账本。", textEn: "Go to the building on the left of Jinshachuan, jump inside to get the Poplar Leaf Ledger.", images: ["http://img1.ali213.net/glpic/2025/04/03/584_2025040323406945.png", "http://img1.ali213.net/glpic/2025/04/03/584_2025040323408988.png", "http://img1.ali213.net/glpic/2025/04/03/584_2025040323407607.png"] },
    { text: "返回人群继续对话，根据指引调查痕迹。", textEn: "Return to the crowd, continue talking, and investigate traces as guided.", images: ["http://img1.ali213.net/glpic/2025/04/03/584_2025040323407359.png", "http://img1.ali213.net/glpic/2025/04/03/584_2025040323407718.png", "http://img1.ali213.net/glpic/2025/04/03/584_2025040323407483.png", "http://img1.ali213.net/glpic/2025/04/03/584_2025040323407437.png", "http://img1.ali213.net/glpic/2025/04/03/584_202504032340854.png"] },
    { text: "找到康明珞交付旧物。", textEn: "Find Kang Mingluo and deliver the old items.", images: ["http://img1.ali213.net/glpic/2025/04/03/584_2025040323409640.png"] },
    { text: "爬上大树调查线索，调查完成后返回提交。", textEn: "Climb the big tree to investigate clues, then return to submit.", images: ["http://img1.ali213.net/glpic/2025/04/03/584_2025040323409850.png", "http://img1.ali213.net/glpic/2025/04/03/584_2025040323408659.png", "http://img1.ali213.net/glpic/2025/04/03/584_2025040323408898.png", "http://img1.ali213.net/glpic/2025/04/03/584_2025040323409212.png", "http://img1.ali213.net/glpic/2025/04/03/584_2025040323408262.png"] },
    { text: "去图中箭头处观察水井。", textEn: "Go to the arrow in the image and observe the well.", images: ["http://img1.ali213.net/glpic/2025/04/03/584_2025040323410316.png"] },
    { text: "返回告知水井的位置。", textEn: "Return and report the well's location.", images: ["http://img1.ali213.net/glpic/2025/04/03/584_2025040323409829.png"] },
    { text: "追上杨婆婆，拾取道具。", textEn: "Catch up with Yang Popo and pick up the items.", images: ["http://img1.ali213.net/glpic/2025/04/03/584_20250403234102.png"] },
    { text: "疏通枯井，剧情结束即可完成奇遇。", textEn: "Clear the dry well. The encounter completes after the cutscene.", images: ["http://img1.ali213.net/glpic/2025/04/03/584_2025040323410375.png", "http://img1.ali213.net/glpic/2025/04/03/584_2025040323409685.png"] },
  ],

  "hx-shenmidejietiao": [
    { text: "传送至迷津渡传送点，前置需寻找三个物品。", textEn: "Teleport to Mijindu waypoint. Prerequisite: find three items.", images: ["http://img1.ali213.net/glpic/2025/04/01/584_20250401111447932.png"] },
    { text: "落地后将视角往后转，在草堆里找到第一个物品。", textEn: "After landing, turn around and find the first item in the haystack.", images: ["http://img1.ali213.net/glpic/2025/04/01/584_20250401111446479.png"] },
    { text: "对话结束后再次将视角往后转，在箱子上找到第二个物品。", textEn: "After the dialogue, turn around again and find the second item on the box.", images: ["http://img1.ali213.net/glpic/2025/04/01/584_20250401111447643.png"] },
    { text: "第三个物品在枯树下，回到传送点就能看到。", textEn: "The third item is under the dead tree, visible from the teleport point.", images: ["http://img1.ali213.net/glpic/2025/04/01/584_20250401111447307.png"] },
    { text: "找到全部物品后开启奇遇，和僧人进行交谈。", textEn: "After finding all items, the encounter starts. Talk to the monk.", images: ["http://img1.ali213.net/glpic/2025/04/01/584_20250401111447725.png"] },
    { text: "寻找三个借条，第一个在旗帜下方，之后跟随指引找齐。", textEn: "Find three IOUs. The first is under the flag, then follow the guide to find the rest.", images: ["http://img1.ali213.net/glpic/2025/04/01/584_2025040111144791.png"] },
    { text: "全部拾取后返回迷津渡传送点。", textEn: "After collecting all, return to the Mijindu teleport point.", images: ["http://img1.ali213.net/glpic/2025/04/01/584_20250401111447895.png"] },
    { text: "最后找到NPC交付借条即可通关。", textEn: "Finally, find the NPC and deliver the IOUs to complete.", images: ["http://img1.ali213.net/glpic/2025/04/01/584_20250401111447906.png"] },
  ],

  "hx-maoyinhuanzhe": [
    { text: "前往阿依苏左下角的房子附近触发奇遇。", textEn: "Go to the house southwest of Ayisu to trigger the encounter.", images: ["http://img1.ali213.net/glpic/2025/04/03/584_2025040330830937.png"] },
    { text: "在阿依苏左下角的房子找到猫猫南南，与之互动五次触发奇遇。", textEn: "Find Cat Nannan at the house southwest of Ayisu. Interact five times to trigger.", images: ["http://img1.ali213.net/glpic/2025/04/03/584_2025040330830387.png", "http://img1.ali213.net/glpic/2025/04/03/584_2025040330831876.png"] },
    { text: "根据指引，在旁边找到仙人毛并进行互动。", textEn: "Follow the guide and find Xianren Mao nearby to interact.", images: ["http://img1.ali213.net/glpic/2025/04/03/584_2025040330831695.png"] },
    { text: "视角后转，前往前方将敌人消灭，获取所需道具。", textEn: "Turn around, go ahead and defeat the enemies to get the required items.", images: ["http://img1.ali213.net/glpic/2025/04/03/584_2025040330831981.png", "http://img1.ali213.net/glpic/2025/04/03/584_2025040330831502.png"] },
    { text: "拿到道具后返回，提交给相关NPC。", textEn: "After getting the items, return and submit them to the NPC.", images: ["http://img1.ali213.net/glpic/2025/04/03/584_2025040330831596.png"] },
    { text: "对话结束后，再与旁边的仙人帽进行对话。", textEn: "After the dialogue, talk to Xianren Mao nearby.", images: ["http://img1.ali213.net/glpic/2025/04/03/584_2025040330832577.png"] },
    { text: "与仙人帽对话结束后，与猫进行对话。", textEn: "After talking to Xianren Mao, talk to the cat.", images: ["http://img1.ali213.net/glpic/2025/04/03/584_2025040330832640.png"] },
    { text: "剧情结束即可完成奇遇。", textEn: "The encounter completes after the cutscene.", images: ["http://img1.ali213.net/glpic/2025/04/03/584_2025040330832880.png"] },
  ],

  // ── 清河 (10 newly scraped) ──────────────────────────

  "qh-qingheyoudiao": [
    { text: "先传送到神仙渡附近，在大树下找到老先生并和他对话。", textEn: "Teleport near Shenxiandu, find the old gentleman under the tree and talk.", images: ["http://img1.ali213.net/glpic/2024/07/26/584_2024072622222724.jpg"] },
    { text: "触发这个奇遇任务后，根据任务指引在附近找到雕八爷。", textEn: "After triggering the encounter, follow the guide to find Diao Baye nearby.", images: ["http://img1.ali213.net/glpic/2024/07/26/584_2024072622222764.jpg"] },
    { text: "完成相关对话剧情后即可完成这个奇遇任务。", textEn: "Complete the dialogue cutscene to finish this encounter." },
  ],

  "qh-shibaidexuanlan": [
    { text: "先打开地图，选择传送到图中位置。", textEn: "Open the map and teleport to the marked location.", images: ["http://img1.ali213.net/glpic/2024/07/19/584_20240719112052920.jpg"] },
    { text: "触发任务后，和周围的NPC进行话术比拼。", textEn: "After triggering, compete in rhetoric with the surrounding NPCs.", images: ["http://img1.ali213.net/glpic/2024/07/19/584_20240719112052822.jpg"] },
    { text: "完成话术比拼后，在周围找到杨明并和他进行对话。", textEn: "After the rhetoric competition, find Yang Ming nearby and talk." },
    { text: "将时间调整到第二天，根据提示发射火箭。", textEn: "Adjust time to the next day and launch the rocket as prompted.", images: ["http://img1.ali213.net/glpic/2024/07/19/584_20240719112052594.jpg"] },
    { text: "最后在图中位置找到杨明，完成对话剧情即可获得任务奖励。", textEn: "Find Yang Ming at the marked location and complete the dialogue to get rewards.", images: ["http://img1.ali213.net/glpic/2024/07/19/584_20240719112052488.jpg"] },
  ],

  "qh-guiqulaixi": [
    { text: "首先通过传送来到北盟遗址，在这里和烈不尽和烈不灭对话后即可触发奇遇。", textEn: "Teleport to Beimeng Ruins and talk to Liebu Jin and Liebu Mie to trigger.", images: ["http://img1.ali213.net/glpic/2024/07/17/584_20240717101431956.png", "http://img1.ali213.net/glpic/2024/07/17/584_20240717101433270.png"] },
    { text: "接着来到奇遇地点，与这里的农夫对话后开始任务。", textEn: "Go to the encounter location and talk to the farmer to start.", images: ["http://img1.ali213.net/glpic/2024/07/17/584_20240717101712926.png", "http://img1.ali213.net/glpic/2024/07/17/584_20240717101432411.png"] },
    { text: "然后和燕谷多对话按照要求完成相关线索调查。", textEn: "Talk to Yan Guduo and complete the clue investigation as requested.", images: ["http://img1.ali213.net/glpic/2024/07/17/584_20240717101433253.png"] },
    { text: "之后返回到北盟遗址，和烈不灭继续对话。", textEn: "Return to Beimeng Ruins and continue talking to Liebu Mie.", images: ["http://img1.ali213.net/glpic/2024/07/17/584_20240717101433542.png"] },
    { text: "结束后前往到老者的位置处与其对话可以获得密信。", textEn: "Go to the old man's location and talk to get the secret letter.", images: ["http://img1.ali213.net/glpic/2024/07/17/584_20240717101432774.png", "http://img1.ali213.net/glpic/2024/07/17/584_2024071710143220.png"] },
    { text: "当对话结束桌上的密信将会呈现出来。", textEn: "After the dialogue, the secret letter on the table will appear.", images: ["http://img1.ali213.net/glpic/2024/07/17/584_20240717101433319.png"] },
    { text: "最后只需要协助老者处理后事，把信提交后即可完成任务。", textEn: "Help the old man handle his affairs and submit the letter to complete.", images: ["http://img1.ali213.net/glpic/2024/07/17/584_20240717101433995.png"] },
  ],

  "qh-yumahang": [
    { text: "首先通过地图传送来到伏马庄附近，在下方图中位置可以触发任务。", textEn: "Teleport to Fuma Village and trigger the quest at the marked location.", images: ["http://img1.ali213.net/glpic/2024/07/17/584_2024071795211738.jpg"] },
    { text: "在对应的位置找到NPC李阿骊对话。", textEn: "Find NPC Li Ali at the location and talk.", images: ["http://img1.ali213.net/glpic/2024/07/17/584_2024071795210559.jpg"] },
    { text: "结束后来到丰禾村的村口围观即可触发奇遇。", textEn: "Go to Fenghe Village entrance and watch the scene to trigger.", images: ["http://img1.ali213.net/glpic/2024/07/17/584_202407179521259.jpg", "http://img1.ali213.net/glpic/2024/07/17/584_2024071795211853.jpg"] },
    { text: "触发后去和祁飞俊、李阿骊进行对话。", textEn: "Talk to Qi Feijun and Li Ali after triggering.", images: ["http://img1.ali213.net/glpic/2024/07/17/584_2024071795212482.jpg"] },
    { text: "接着将时间调整到第二天的子时，跟着任务指引来到指定位置偷听，可以了解到马不在了。", textEn: "Adjust time to next day's Zi hour, follow the guide to eavesdrop and learn the horse is gone.", images: ["http://img1.ali213.net/glpic/2024/07/17/584_2024071795211139.jpg"] },
    { text: "来到临江驿的监狱，需要击败山上的绿林匪，接着在监狱里和小六对话。", textEn: "Go to Linjiang Post prison, defeat the bandits on the hill, then talk to Xiao Liu in the prison.", images: ["http://img1.ali213.net/glpic/2024/07/17/584_2024071795211488.jpg", "http://img1.ali213.net/glpic/2024/07/17/584_2024071795212884.jpg"] },
    { text: "继续跟着指引来到二楼，在这里的书桌上找到账簿，接着会发现破碎的窗户，翻出去在屋顶能找到一把生锈的短刀。", textEn: "Follow the guide to the second floor, find the ledger on the desk, spot the broken window, and find a rusty dagger on the roof.", images: ["http://img1.ali213.net/glpic/2024/07/17/584_2024071795248458.jpg"] },
    { text: "之后跟着指引找到祁飞俊，和他进行对话。", textEn: "Follow the guide to find Qi Feijun and talk.", images: ["http://img1.ali213.net/glpic/2024/07/17/584_2024071795248729.jpg"] },
    { text: "然后来到不伏马庄的野林子中，打败林子中的熊后调查地上的尸体发现怪处一。", textEn: "Go to the wild forest near Fuma Village, defeat the bear and investigate the body to find Guaichuyi.", images: ["http://img1.ali213.net/glpic/2024/07/17/584_2024071795248171.jpg"] },
    { text: "接着使用听风辨位跟随祭品的气味来到山上的一处房子前，去和小摩诃对话，了解到其中的故事。", textEn: "Use Listen to Wind to follow the scent of offerings to a house on the mountain, talk to Xiao Mohe to learn the story.", images: ["http://img1.ali213.net/glpic/2024/07/17/584_2024071795248693.jpg"] },
    { text: "最后只要继续跟着指引即可完成奇遇任务。", textEn: "Follow the guide to complete the encounter.", images: ["http://img1.ali213.net/glpic/2024/07/17/584_2024071795249660.jpg"] },
  ],

  "qh-huahaiwuyan": [
    { text: "通过传送来到花海，之后按G键可进行窃听。", textEn: "Teleport to the flower sea, then press G to eavesdrop.", images: ["http://img1.ali213.net/glpic/2024/07/15/584_2024071533733384.png", "http://img1.ali213.net/glpic/2024/07/15/584_2024071533733545.png"] },
    { text: "窃听后会触发奇遇任务，接着去和小孩对话。", textEn: "After eavesdropping, the encounter triggers. Go talk to the child.", images: ["http://img1.ali213.net/glpic/2024/07/15/584_2024071533733452.png"] },
    { text: "然后拉掉房间中与丑娘对话，结束后要检查丑娘房间。", textEn: "Enter the room and talk to Chou Niang, then inspect her room.", images: ["http://img1.ali213.net/glpic/2024/07/15/584_2024071533733376.png", "http://img1.ali213.net/glpic/2024/07/15/584_2024071533733550.png"] },
    { text: "再次与小孩对话后，按指引抓捕螳螂并交付。", textEn: "Talk to the child again, then catch the mantis as directed and deliver it.", images: ["http://img1.ali213.net/glpic/2024/07/15/584_202407153373444.png", "http://img1.ali213.net/glpic/2024/07/15/584_2024071533734338.png"] },
    { text: "剧情将至吃糕点昏迷，使用感知探索脚印。", textEn: "After eating pastries and fainting, use perception to explore footprints.", images: ["http://img1.ali213.net/glpic/2024/07/15/584_2024071533734600.png"] },
    { text: "跟随脚印调查后需要进入瀑布。", textEn: "Follow the footprints, investigate, then enter the waterfall.", images: ["http://img1.ali213.net/glpic/2024/07/15/584_2024071533813107.png"] },
    { text: "点燃藤蔓后可见丑娘。", textEn: "Light the vines to reveal Chou Niang.", images: ["http://img1.ali213.net/glpic/2024/07/15/584_2024071533814212.png"] },
    { text: "击败丑娘后，需要跟着剧情继续进行。", textEn: "After defeating Chou Niang, continue following the story.", images: ["http://img1.ali213.net/glpic/2024/07/15/584_2024071533813797.png"] },
    { text: "之后需要和NPC姚药药对话后，前往丑娘房间。", textEn: "Talk to NPC Yao Yaoyao, then go to Chou Niang's room.", images: ["http://img1.ali213.net/glpic/2024/07/15/584_20240715338140.png"] },
    { text: "最后只需要来到丑娘坟墓献花后，任务即可完成。", textEn: "Go to Chou Niang's grave and offer flowers to complete the quest.", images: ["http://img1.ali213.net/glpic/2024/07/15/584_2024071533813202.png", "http://img1.ali213.net/glpic/2024/07/15/584_2024071533813211.png"] },
  ],

  "qh-jiufengzhiji": [
    { text: "首先传送到神仙渡的传送点。", textEn: "Teleport to Shenxiandu waypoint." },
    { text: "到达后，直走会碰到一个酒摊。", textEn: "Walk straight ahead to find a wine stall.", images: ["http://img1.ali213.net/glpic/2024/07/15/584_2024071523056961.jpg"] },
    { text: "在酒摊处，找到一个名为独饮客的NPC，与他对话选择「请前辈喝点好酒」。", textEn: "Find the lone drinker NPC at the wine stall and choose 'Offer good wine'.", images: ["http://img1.ali213.net/glpic/2024/07/15/584_2024071523056909.jpg"] },
    { text: "通过选择将触发奇遇任务酒逢知己上，根据游戏指引前往后面的架子拿酒。", textEn: "This triggers Wine Meets a Kindred Spirit (Upper). Follow the guide to get wine from the shelf.", images: ["http://img1.ali213.net/glpic/2024/07/15/584_2024071523056726.jpg"] },
    { text: "接下来开启一个喝酒的比拼环节，完成比拼后酒逢知己上奇遇即可完成。", textEn: "Start the drinking contest. Complete it to finish the Upper part.", images: ["http://img1.ali213.net/glpic/2024/07/15/584_2024071523056876.jpg"] },
    { text: "打开游戏地图找到酒逢知己上奇遇相关标记位置，传送至该位置触发酒逢知己下奇遇。", textEn: "Open the map, find the marker for the Upper quest, teleport there to trigger the Lower part.", images: ["http://img1.ali213.net/glpic/2024/07/15/584_2024071523323999.jpg"] },
    { text: "到达后按N键进入独饮客所在区域，等待独饮客回家进行对话。", textEn: "Press N to enter the lone drinker's area, wait for him to return home and talk.", images: ["http://img1.ali213.net/glpic/2024/07/15/584_2024071523324837.jpg"] },
    { text: "通过对话得知独饮客家中留有一封信的线索，阅读信件后前往信中指示的石头堆位置。", textEn: "Learn about a letter left at home, read it and go to the stone pile indicated.", images: ["http://img1.ali213.net/glpic/2024/07/15/584_2024071523323300.jpg"] },
    { text: "在石头堆处寻找留下的东西，找到玉笛后将其进行埋葬即可完成酒逢知己下奇遇。", textEn: "Search the stone pile, find the jade flute and bury it to complete the Lower part.", images: ["http://img1.ali213.net/glpic/2024/07/15/584_2024071523323460.jpg", "http://img1.ali213.net/glpic/2024/07/15/584_2024071523323620.jpg"] },
  ],

  "qh-zhizijianghu3": [
    { text: "首先在游戏中找到门派商店，在这里兑换八方风雷枪。", textEn: "Find the sect shop and exchange for the Eight Directions Wind Thunder Spear.", images: ["http://img1.ali213.net/glpic/2024/06/13/584_2024061335505577.jpg", "http://img1.ali213.net/glpic/2024/06/13/584_2024061335506510.jpg"] },
    { text: "之后将它装备到手中，接着使用八方风雷枪的1技能。", textEn: "Equip it and use the spear's skill 1.", images: ["http://img1.ali213.net/glpic/2024/06/13/584_2024061335506982.png"] },
    { text: "然后来到NPC小平安的位置，上前去和他对话。", textEn: "Go to NPC Xiao Ping'an and talk.", images: ["http://img1.ali213.net/glpic/2024/06/13/584_2024061335506125.png"] },
    { text: "最后只需要将对话结束，稚子江湖三奇遇就可以完成了。", textEn: "Finish the dialogue to complete Children's Jianghu III.", images: ["http://img1.ali213.net/glpic/2024/06/13/584_2024061335505350.png"] },
  ],

  "qh-zhizijianghu2": [
    { text: "进入到游戏当中玩家需要到了下图当中的位置，然后开启任务。", textEn: "Go to the marked location in the game to start the quest.", images: ["http://img1.ali213.net/glpic/2024/07/06/584_20240706110536363.png"] },
    { text: "到了位置之后玩家需要将看到的怪物全部消灭掉。", textEn: "Defeat all the monsters at the location.", images: ["http://img1.ali213.net/glpic/2024/07/06/584_20240706110535429.png"] },
    { text: "接着找到小平安开始对话。", textEn: "Find Xiao Ping'an and start a conversation.", images: ["http://img1.ali213.net/glpic/2024/07/06/584_20240706110536485.png"] },
    { text: "向他展示积矩九剑一技能就完成任务了。", textEn: "Show him the Jiju Nine Swords skill 1 to complete.", images: ["http://img1.ali213.net/glpic/2024/07/06/584_20240706110536975.png", "http://img1.ali213.net/glpic/2024/07/06/584_20240706110536945.png"] },
  ],

  "qh-yishengjianfo": [
    { text: "首先传送至不伏马场，到达后按G键偷听，触发任务。", textEn: "Teleport to Bufu Ranch, then press G to eavesdrop and trigger the quest.", images: ["http://img1.ali213.net/glpic/2024/07/17/584_202407179404952.jpg", "http://img1.ali213.net/glpic/2024/07/17/584_2024071794049358.jpg"] },
    { text: "触发后需要击败两名绑匪。", textEn: "Defeat the two kidnappers.", images: ["http://img1.ali213.net/glpic/2024/07/17/584_2024071794050611.jpg"] },
    { text: "拯救被绑的和尚并进行对话。", textEn: "Rescue the tied-up monk and talk to him." },
    { text: "对话结束后与两名绑匪进行对话。", textEn: "After the conversation, talk to the two kidnappers.", images: ["http://img1.ali213.net/glpic/2024/07/17/584_2024071794049353.jpg"] },
    { text: "对话结束后出现一个土匪，使用狮吼正声将其赶走。", textEn: "A bandit appears after the conversation. Use Lion Roar to drive him away.", images: ["http://img1.ali213.net/glpic/2024/07/17/584_2024071794049726.jpg"] },
    { text: "最后再次与和尚对话即可完成并领取奖励。", textEn: "Talk to the monk again to complete the quest and receive rewards.", images: ["http://img1.ali213.net/glpic/2024/07/17/584_2024071794049977.jpg"] },
  ],

  "qh-xunxunji": [
    { text: "首先需要传送到特定位置，与一个小女孩进行对话，完成前置任务。", textEn: "Teleport to a specific location and talk to a little girl to complete prerequisites.", images: ["http://img1.ali213.net/glpic/2024/07/29/584_2024072991117681.jpg"] },
    { text: "接下来再次与小女孩对话，触发寻蕈记奇遇任务。", textEn: "Talk to the little girl again to trigger the Mushroom Hunt encounter.", images: ["http://img1.ali213.net/glpic/2024/07/29/584_202407299110348.jpg"] },
    { text: "然后跟随指引前往标记好的位置，并在最高点与小女孩进行对话。", textEn: "Follow the guide to the marked location and talk to the girl at the highest point.", images: ["http://img1.ali213.net/glpic/2024/07/29/584_2024072991111847.jpg", "http://img1.ali213.net/glpic/2024/07/29/584_2024072991108961.jpg"] },
    { text: "之后前往千佛谷的位置，继续与小女孩进行对话。", textEn: "Go to Thousand Buddha Valley and continue talking to the little girl.", images: ["http://img1.ali213.net/glpic/2024/07/29/584_2024072991123851.jpg"] },
    { text: "在对话过程中了解到小女孩患病。", textEn: "During the conversation, learn that the little girl is sick.", images: ["http://img1.ali213.net/glpic/2024/07/29/584_2024072991120942.jpg"] },
    { text: "使用悬壶本领救治小女孩。", textEn: "Use the gourd skill to heal the little girl." },
    { text: "成功救治后，完成寻蕈记奇遇任务。", textEn: "After successfully healing her, complete the Mushroom Hunt encounter.", images: ["http://img1.ali213.net/glpic/2024/07/29/584_2024072991126506.jpg"] },
  ],

  // ── 清河 (12 newly scraped from Ali213) ──────────────────────────

  "qh-qifapo": [
    { text: "首先来到地图中的位置靠近NPC", textEn: "First, go to the marked location on the map and approach the NPC.", images: ["http://img1.ali213.net/glpic/2025/01/02/584_2025010293625965.jpg"] },
    { text: "与其对话，以此激活奇遇", textEn: "Talk to them to activate the encounter.", images: ["http://img1.ali213.net/glpic/2025/01/02/584_2025010293627419.jpg"] },
    { text: "之后全是任务追踪，无脑点击，跟随去做即可", textEn: "After that, just follow the quest tracker and proceed.", images: ["http://img1.ali213.net/glpic/2025/01/02/584_202501029362728.jpg"] },
    { text: "最后，完成任务【七伐坡奇遇】", textEn: "Finally, complete the Qifapo encounter quest.", images: ["http://img1.ali213.net/glpic/2025/01/02/584_2025010293629550.jpg"] },
  ],

  "qh-yaohongyimeng": [
    { text: "触发奇遇：来到【清河-曲坊后院】传送点，往后走进门触发奇遇", textEn: "Trigger the encounter: Go to the Qinghe - Qufang Backyard teleport point, walk backward through the gate to trigger." },
    { text: "获取藏宝图1：往前面走，在对面架子上拿到【藏宝图1】", textEn: "Get Treasure Map 1: Walk forward and pick up Treasure Map 1 from the opposite shelf." },
    { text: "前往神仙渡西：根据藏宝图1的指引去【神仙渡西】", textEn: "Go to Shenxiandu West: Follow Treasure Map 1's guidance to Shenxiandu West." },
    { text: "获取藏宝图2：从左边坡一路上山，对话钓鱼的老人并完成任务，获得【藏宝图2】", textEn: "Get Treasure Map 2: Go up the hill from the left slope, talk to the fishing old man and complete his task for Treasure Map 2." },
    { text: "前往将军祠：根据藏宝图2的指引去【将军祠】", textEn: "Go to Jiangjun Shrine: Follow Treasure Map 2's guidance to Jiangjun Shrine." },
    { text: "获取藏宝图3：在将军祠完成信件任务，然后进入祠内打破罐子拿到【藏宝图3】", textEn: "Get Treasure Map 3: Complete the letter task at Jiangjun Shrine, then break the jar inside to get Treasure Map 3." },
    { text: "前往烧瓷岭：根据藏宝图3的指引传送到【烧瓷岭】往前走", textEn: "Go to Shaoci Ridge: Follow Treasure Map 3's guidance and teleport to Shaoci Ridge, walk forward." },
    { text: "获取藏宝图4：在烧瓷岭对话树下的【樵夫】，然后上树跳到右边的房顶上互动光点，找到【藏宝图4】", textEn: "Get Treasure Map 4: Talk to the Woodcutter under the tree at Shaoci Ridge, then climb the tree, jump to the right rooftop and interact with the glowing spot for Treasure Map 4." },
    { text: "前往北竹林：根据藏宝图4的指引去【北竹林】", textEn: "Go to North Bamboo Forest: Follow Treasure Map 4's guidance to North Bamboo Forest." },
    { text: "获取藏宝图5：左边上山对话【猎户】，拿到【藏宝图5】并读信", textEn: "Get Treasure Map 5: Go up the hill on the left, talk to the Hunter, get Treasure Map 5 and read the letter." },
    { text: "完成奇遇：在屋子周围寻找道具并阅读【红线的信】，即可完成奇遇", textEn: "Complete the encounter: Search for items around the house and read Hongxian's Letter to finish." },
  ],

  "qh-rongyuan": [
    { text: "玩家必须先达到40级，并完成至开封章节的主线任务", textEn: "You must first reach level 40 and complete the main story up to the Kaifeng chapter." },
    { text: "在满足这些前提后，玩家可在金明池周边区域领取任务，并登上指定的海盗船", textEn: "After meeting these prerequisites, you can accept the quest around Jinming Pool and board the designated pirate ship.", images: ["http://img1.ali213.net/glpic/2025/01/07/584_2025010743821744.png"] },
    { text: "根据任务指引，玩家需解开海盗船的入口大门，进而迎战NPC首领容鸢", textEn: "Follow the quest guide to unlock the pirate ship's entrance door, then face the NPC boss Rong Yuan." },
    { text: "该BOSS拥有两种战斗形态，最初将以长剑与玩家交锋", textEn: "This boss has two combat forms. She will initially fight with a long sword." },
    { text: "当容鸢的生命值降至50%以下，她会激活第二形态，并召唤机械装置焚毁船舱", textEn: "When Rong Yuan's HP drops below 50%, she activates her second form and summons mechanical devices to burn the cabin.", images: ["http://img1.ali213.net/glpic/2025/01/07/584_2025010743821367.png"] },
    { text: "面对这一情况，玩家应利用走位和技能进行有效防御，对木鸢展开反击", textEn: "In this situation, use positioning and skills to defend effectively and counterattack the wooden kite." },
    { text: "成功战胜容鸢后，迅速撤离海盗船，标志着金明池逃离任务的圆满完成", textEn: "After defeating Rong Yuan, quickly evacuate the pirate ship to complete the Jinming Pool escape quest." },
  ],

  "qh-tianxiawudan": [
    { text: "先抵达任务指定地点，在亥时之后与相邻屋内的角色【小杰】进行交流", textEn: "Go to the designated location and talk to Xiao Jie in the adjacent room after Hai hour.", images: ["http://img1.ali213.net/glpic/2025/01/14/584_2025011431534413.png", "http://img1.ali213.net/glpic/2025/01/14/584_2025011431535867.png"] },
    { text: "紧接着，寻找【老杨头】和【仙师】，注意必须让【仙师】同行，否则该NPC将不会移动。随后，抵达【十三间楼客店】，与【老李头】展开对话，完成这次意外的探险", textEn: "Next, find Lao Yangtou and the Immortal Master. Note that the Immortal Master must accompany you or the NPC won't move. Then arrive at Shisijianlou Inn and talk to Lao Litou to complete this unexpected adventure.", images: ["http://img1.ali213.net/glpic/2025/01/14/584_2025011431534490.png", "http://img1.ali213.net/glpic/2025/01/14/584_202501143153424.png", "http://img1.ali213.net/glpic/2025/01/14/584_2025011431534513.png", "http://img1.ali213.net/glpic/2025/01/14/584_2025011431535791.png", "http://img1.ali213.net/glpic/2025/01/14/584_2025011431532345.png"] },
  ],

  "qh-zhaogongji": [
    { text: "沿着任务指示，通过连续对话抵达监听阶段，发现神秘莫测之人便藏身于我足下的屋舍中", textEn: "Follow the quest guide through successive dialogues to reach the eavesdropping stage, discovering the mysterious person hiding in the house below.", images: ["http://img1.ali213.net/glpic/2025/01/14/584_202501143275753.png", "http://img1.ali213.net/glpic/2025/01/14/584_2025011432759851.png", "http://img1.ali213.net/glpic/2025/01/14/584_202501143275758.png"] },
    { text: "在持续执行任务并于沈平波相遇后，将时间线推进至翌日午间，前往寻找张文清，并将会面时间安排在两天后的正午", textEn: "After continuing the quest and meeting Shen Pingbo, advance time to the next noon, find Zhang Wenqing, and schedule the meeting for noon two days later.", images: ["http://img1.ali213.net/glpic/2025/01/14/584_2025011432757547.png", "http://img1.ali213.net/glpic/2025/01/14/584_2025011432800968.png", "http://img1.ali213.net/glpic/2025/01/14/584_2025011432800278.png"] },
    { text: "面对张文清，玩家可以自由选择是施以惩罚还是宽恕，这一选择将决定这段冒险的最终结局", textEn: "Facing Zhang Wenqing, you can freely choose to punish or forgive — this choice determines the final outcome of this adventure.", images: ["http://img1.ali213.net/glpic/2025/01/14/584_202501143280083.png", "http://img1.ali213.net/glpic/2025/01/14/584_2025011432759997.png"] },
  ],

  "qh-langzaiyangzhong": [
    { text: "在主线任务达成后，前往【开封-勾栏瓦肆】，按图示直接前行并聆听对话内容", textEn: "After completing the main quest, go to Kaifeng - Goulan Wasi, walk straight as shown and listen to the dialogue.", images: ["http://img1.ali213.net/glpic/2025/01/14/584_2025011433407615.png", "http://img1.ali213.net/glpic/2025/01/14/584_2025011433406992.png"] },
    { text: "动画剧情启动后，运用【金玉手】技能将【鱼大郎】固定住", textEn: "After the cutscene starts, use the Golden Jade Hand skill to immobilize Yu Dalang.", images: ["http://img1.ali213.net/glpic/2025/01/14/584_2025011433408411.png"] },
    { text: "阅读旁边的留言，便会激活神秘事件【狼在羊中】，随后按照提示前往【军巡铺】", textEn: "Read the note nearby to activate the mysterious event Wolf Among Sheep, then follow the prompt to go to Junxunpu.", images: ["http://img1.ali213.net/glpic/2025/01/14/584_2025011433406905.png", "http://img1.ali213.net/glpic/2025/01/14/584_202501143340810.png"] },
    { text: "接下来的进程都会有任务提示相伴，最终与【刘白玉】对话，顺利结束这场奇遇", textEn: "The rest of the process is guided by quest prompts. Finally, talk to Liu Baiyu to complete this encounter.", images: ["http://img1.ali213.net/glpic/2025/01/14/584_2025011433408797.png", "http://img1.ali213.net/glpic/2025/01/14/584_2025011433406338.png"] },
  ],

  // ── 河西 (4 newly scraped from Ali213) ──────────────────────────

  "hx-daxiayudaxia": [
    { text: "首先打开地图，找到白雀金阁传送点", textEn: "First, open the map and find the White Sparrow Golden Pavilion teleport point.", images: ["http://img1.ali213.net/glpic/2025/05/19/584_202505193195432.png"] },
    { text: "到达后往北方向走，就能看到前面有很多树", textEn: "After arriving, walk north and you will see many trees ahead.", images: ["http://img1.ali213.net/glpic/2025/05/19/584_2025051931954970.png"] },
    { text: "距离我们最近的这一棵树的地上是一个尸体，玩家需点击【查看】按钮", textEn: "On the ground near the closest tree is a corpse. Click the Inspect button.", images: ["http://img1.ali213.net/glpic/2025/05/19/584_2025051931955282.png"] },
    { text: "然后往东方走，前面还有一个尸体", textEn: "Then walk east. There is another corpse ahead.", images: ["http://img1.ali213.net/glpic/2025/05/19/584_2025051931954268.png"] },
    { text: "点击【查看】按钮后，往东走，找到河边的尸体并点击【查看】", textEn: "After clicking Inspect, walk east, find the corpse by the river and click Inspect.", images: ["http://img1.ali213.net/glpic/2025/05/19/584_2025051931954391.png"] },
    { text: "接着往南方走，和图中的小结巴进行对话", textEn: "Next, walk south and talk to the Xiao Jieba (little stutterer) shown in the image.", images: ["http://img1.ali213.net/glpic/2025/05/19/584_2025051931955437.png"] },
    { text: "玩家需要给关自在进行疗伤，就能获得对应的奖励了", textEn: "You need to heal Guan Zizai to receive the corresponding rewards.", images: ["http://img1.ali213.net/glpic/2025/05/19/584_2025051931954593.png", "http://img1.ali213.net/glpic/2025/05/19/584_2025051931955538.png"] },
  ],

  "hx-yuexiashihui": [
    { text: "首先前往图中的酒泉传送点，然后前往玉池左上角区域", textEn: "First, go to the Jiuquan teleport point shown on the map, then head to the upper-left area of Yuchi (Jade Pool).", images: ["http://img1.ali213.net/glpic/2025/05/19/584_2025051934329247.png"] },
    { text: "接着将游戏时间调整为夜晚", textEn: "Then adjust the in-game time to nighttime.", images: ["http://img1.ali213.net/glpic/2025/05/19/584_2025051934328723.png"] },
    { text: "然后跟随路标走就可以了", textEn: "Then just follow the path markers.", images: ["http://img1.ali213.net/glpic/2025/05/19/584_2025051934328265.png"] },
    { text: "找到下图两个NPC并进行对话，就能通关", textEn: "Find the two NPCs shown below and talk to them to complete the quest.", images: ["http://img1.ali213.net/glpic/2025/05/19/584_2025051934329207.png"] },
  ],

  "hx-yihubugui": [
    { text: "传送到节度使府传送点", textEn: "Teleport to the Jiedushi Prefecture waypoint.", images: ["http://img1.ali213.net/glpic/2025/08/02/584_2025080220316444.jpg"] },
    { text: "到达后，往箭头的方向走", textEn: "After arriving, walk toward the arrow direction.", images: ["http://img1.ali213.net/glpic/2025/08/02/584_2025080220317930.jpg"] },
    { text: "过来后开鹰眼，可以看到有个葫芦", textEn: "Turn on Eagle Eye and you can see a gourd.", images: ["http://img1.ali213.net/glpic/2025/08/02/584_2025080220316664.jpg"] },
    { text: "过来捡起来", textEn: "Go over and pick it up.", images: ["http://img1.ali213.net/glpic/2025/08/02/584_2025080220317475.jpg"] },
    { text: "传送到行苦所传送点", textEn: "Teleport to the Xingku Suo waypoint.", images: ["http://img1.ali213.net/glpic/2025/08/02/584_2025080220316579.jpg"] },
    { text: "到达后，往箭头方向的石头处走，可以触发奇遇", textEn: "After arriving, walk toward the stone in the arrow direction to trigger the encounter.", images: ["http://img1.ali213.net/glpic/2025/08/02/584_2025080220316327.jpg", "http://img1.ali213.net/glpic/2025/08/02/584_2025080220317222.jpg"] },
    { text: "根据指引，找到老者进行对话", textEn: "Follow the guide and find the old man to talk.", images: ["http://img1.ali213.net/glpic/2025/08/02/584_202508022031728.jpg"] },
    { text: "对话结束后，在图中的的扶乩问灵", textEn: "After the dialogue, perform the Fuji spirit divination at the location shown.", images: ["http://img1.ali213.net/glpic/2025/08/02/584_2025080220317178.jpg"] },
    { text: "前往天水集购买粮油酒", textEn: "Go to Tianshui Market to buy grain, oil, and wine.", images: ["http://img1.ali213.net/glpic/2025/08/02/584_2025080220317588.jpg"] },
    { text: "买完后，回到郭怀烈身边，摆放祭品", textEn: "After purchasing, return to Guo Huailie and arrange the offerings.", images: ["http://img1.ali213.net/glpic/2025/08/02/584_2025080220317216.jpg", "http://img1.ali213.net/glpic/2025/08/02/584_2025080220317312.jpg"] },
    { text: "摆放祭品后，再次扶乩问灵", textEn: "After arranging the offerings, perform the Fuji spirit divination again.", images: ["http://img1.ali213.net/glpic/2025/08/02/584_2025080220317961.jpg"] },
    { text: "传送到卧佛寺传送点", textEn: "Teleport to the Reclining Buddha Temple waypoint.", images: ["http://img1.ali213.net/glpic/2025/08/02/584_202508022031779.jpg"] },
    { text: "到达后，往箭头处走", textEn: "After arriving, walk toward the arrow.", images: ["http://img1.ali213.net/glpic/2025/08/02/584_202508022031725.jpg"] },
    { text: "进入大殿，找到劝农使进行对话", textEn: "Enter the main hall and find the Agricultural Commissioner to talk.", images: ["http://img1.ali213.net/glpic/2025/08/02/584_2025080220317499.jpg"] },
    { text: "传送到天水集传送点", textEn: "Teleport to the Tianshui Market waypoint.", images: ["http://img1.ali213.net/glpic/2025/08/02/584_2025080220317377.jpg"] },
    { text: "在图中的位置找到卖油老兵进行对话", textEn: "Find the oil-selling veteran at the location shown and talk.", images: ["http://img1.ali213.net/glpic/2025/08/02/584_2025080220317642.jpg"] },
    { text: "传送到藤王村传送点", textEn: "Teleport to the Tengwang Village waypoint.", images: ["http://img1.ali213.net/glpic/2025/08/02/584_2025080220317489.jpg"] },
    { text: "到达后，往箭头处走", textEn: "After arriving, walk toward the arrow.", images: ["http://img1.ali213.net/glpic/2025/08/02/584_2025080220317773.jpg"] },
    { text: "与树下的李芳醪进行对话", textEn: "Talk to Li Fanglao under the tree.", images: ["http://img1.ali213.net/glpic/2025/08/02/584_2025080220317379.jpg"] },
    { text: "回到郭怀烈身边，摆放祭品，再次扶乩问灵", textEn: "Return to Guo Huailie, arrange the offerings, and perform the Fuji spirit divination again.", images: ["http://img1.ali213.net/glpic/2025/08/02/584_2025080220716596.jpg", "http://img1.ali213.net/glpic/2025/08/02/584_2025080220317764.jpg"] },
    { text: "前往武威山巅", textEn: "Go to the peak of Wuwei Mountain.", images: ["http://img1.ali213.net/glpic/2025/08/02/584_2025080220716762.jpg"] },
    { text: "到达后，自动进入剧情，剧情结束即可完成任务", textEn: "After arriving, a cutscene plays automatically. The quest completes when it ends.", images: ["http://img1.ali213.net/glpic/2025/08/02/584_2025080220716329.jpg"] },
  ],

  // ── 河西·秦川 (2 newly scraped from Ali213) ──────────────────────

  "hxqc-chuanshangyulong": [
    { text: "传送到破门村传送点", textEn: "Teleport to the Pomen Village waypoint." },
    { text: "来到图中的位置完成打鼓，顺序是533244", textEn: "Go to the location shown and complete the drumming sequence. The order is 533244.", images: ["http://img1.ali213.net/glpic/2025/09/06/584_2025090643946159.jpg"] },
    { text: "完成后，走到图中的位置触发奇遇", textEn: "After completing, walk to the location shown to trigger the encounter.", images: ["http://img1.ali213.net/glpic/2025/09/06/584_2025090643946977.jpg"] },
    { text: "往箭头方向走，会看到两位老头，进行对话", textEn: "Walk toward the arrow. You will see two old men. Talk to them.", images: ["http://img1.ali213.net/glpic/2025/09/06/584_2025090643946786.jpg", "http://img1.ali213.net/glpic/2025/09/06/584_2025090643946514.jpg"] },
    { text: "对话结束，去箭头处的桥头", textEn: "After the dialogue, go to the bridge at the arrow.", images: ["http://img1.ali213.net/glpic/2025/09/06/584_2025090643946618.jpg"] },
    { text: "过来后，查看地上的NPC", textEn: "After arriving, inspect the NPC on the ground.", images: ["http://img1.ali213.net/glpic/2025/09/06/584_2025090643947285.jpg"] },
    { text: "打开袁不语的锦囊", textEn: "Open Yuan Buyu's silk pouch.", images: ["http://img1.ali213.net/glpic/2025/09/06/584_2025090643946858.jpg"] },
    { text: "将时间调到两日后", textEn: "Adjust the time to two days later.", images: ["http://img1.ali213.net/glpic/2025/09/06/584_2025090643946426.jpg"] },
    { text: "与张娘子进行对话", textEn: "Talk to Zhang Niangzi.", images: ["http://img1.ali213.net/glpic/2025/09/06/584_2025090643947824.jpg"] },
    { text: "回去找两位老者进行对话", textEn: "Go back and talk to the two old men.", images: ["http://img1.ali213.net/glpic/2025/09/06/584_2025090643946757.jpg"] },
    { text: "根据指引，在图中位置进行帮忙，并调查尸体", textEn: "Follow the guide, help at the location shown, and investigate the body.", images: ["http://img1.ali213.net/glpic/2025/09/06/584_2025090643946629.jpg", "http://img1.ali213.net/glpic/2025/09/06/584_2025090643946187.jpg"] },
    { text: "打开姜无鱼的锦囊", textEn: "Open Jiang Wuyu's silk pouch.", images: ["http://img1.ali213.net/glpic/2025/09/06/584_2025090643946253.jpg"] },
    { text: "将时间调到次日", textEn: "Adjust the time to the next day.", images: ["http://img1.ali213.net/glpic/2025/09/06/584_2025090643947996.jpg"] },
    { text: "去箭头处的河边对话", textEn: "Go to the riverside at the arrow and talk.", images: ["http://img1.ali213.net/glpic/2025/09/06/584_2025090643947828.jpg", "http://img1.ali213.net/glpic/2025/09/06/584_2025090643947677.jpg"] },
    { text: "带李家兄弟过来认尸", textEn: "Bring the Li brothers over to identify the body.", images: ["http://img1.ali213.net/glpic/2025/09/06/584_2025090643947483.jpg"] },
    { text: "回去找两位老者进行对话，并提交道具", textEn: "Go back and talk to the two old men, then submit the items.", images: ["http://img1.ali213.net/glpic/2025/09/06/584_2025090643947724.jpg", "http://img1.ali213.net/glpic/2025/09/06/584_2025090643947953.jpg"] },
    { text: "查看袁不语的手、姜无鱼的腿", textEn: "Inspect Yuan Buyu's hand and Jiang Wuyu's leg.", images: ["http://img1.ali213.net/glpic/2025/09/06/584_2025090643947997.jpg", "http://img1.ali213.net/glpic/2025/09/06/584_2025090643947426.jpg"] },
    { text: "对话结束，去对面与任侠进行对话，即可完成奇遇", textEn: "After the dialogue, go across and talk to Ren Xia to complete the encounter.", images: ["http://img1.ali213.net/glpic/2025/09/06/584_2025090643947339.jpg"] },
  ],

  "hxqc-zhulandashui": [
    { text: "前置条件：天气晴天，午时至申时之间", textEn: "Prerequisites: Clear weather, between noon and Shen hour (3-5 PM)." },
    { text: "传送到松树湾传送点", textEn: "Teleport to the Songshu Bay waypoint.", images: ["http://img1.ali213.net/glpic/2025/09/06/584_2025090635907971.jpg"] },
    { text: "到达后，往箭头方向的房子走", textEn: "After arriving, walk toward the house in the arrow direction.", images: ["http://img1.ali213.net/glpic/2025/09/06/584_2025090635907360.jpg"] },
    { text: "走到图中的位置，进行偷听", textEn: "Walk to the location shown and eavesdrop.", images: ["http://img1.ali213.net/glpic/2025/09/06/584_2025090635907213.jpg"] },
    { text: "偷听完，与箭头处的NPC进行对话，选择安大贵和绿衣服", textEn: "After eavesdropping, talk to the NPC at the arrow and choose An Dagui and green clothes.", images: ["http://img1.ali213.net/glpic/2025/09/06/584_2025090635907298.jpg", "http://img1.ali213.net/glpic/2025/09/06/584_2025090635907420.jpg", "http://img1.ali213.net/glpic/2025/09/06/584_2025090635907136.jpg"] },
    { text: "对话完，往箭头方向走", textEn: "After the dialogue, walk toward the arrow.", images: ["http://img1.ali213.net/glpic/2025/09/06/584_2025090635907649.jpg"] },
    { text: "走到图中的位置进行挖掘", textEn: "Walk to the location shown and dig.", images: ["http://img1.ali213.net/glpic/2025/09/06/584_2025090635907679.jpg"] },
    { text: "与秋娘进行对话", textEn: "Talk to Qiu Niang.", images: ["http://img1.ali213.net/glpic/2025/09/06/584_2025090635907726.jpg"] },
    { text: "再与僧人进行对话，即可完成奇遇", textEn: "Then talk to the monk to complete the encounter.", images: ["http://img1.ali213.net/glpic/2025/09/06/584_2025090635907633.jpg"] },
  ],

  "hxqc-yizhenwushi": [
    { text: "传送到破门村传送点", textEn: "Teleport to the Pomen Village waypoint.", images: ["http://img1.ali213.net/glpic/2025/09/06/584_2025090650129539.jpg"] },
    { text: "到达后，往箭头方向走，即可触发", textEn: "After arriving, walk toward the arrow to trigger.", images: ["http://img1.ali213.net/glpic/2025/09/06/584_2025090650129167.jpg", "http://img1.ali213.net/glpic/2025/09/06/584_2025090650129887.jpg"] },
    { text: "在图中的位置，与柳娘子进行对话", textEn: "At the location shown, talk to Liu Niangzi.", images: ["http://img1.ali213.net/glpic/2025/09/06/584_2025090650129698.jpg"] },
    { text: "去传送点旁，与郝友闲进行对话", textEn: "Go near the teleport point and talk to Hao Youxian.", images: ["http://img1.ali213.net/glpic/2025/09/06/584_2025090650129966.jpg"] },
    { text: "对话结束，离远一点，使用奇术偷郝友闲身上的物品", textEn: "After the dialogue, step away and use a special skill to steal the item from Hao Youxian.", images: ["http://img1.ali213.net/glpic/2025/09/06/584_2025090650129255.jpg", "http://img1.ali213.net/glpic/2025/09/06/584_2025090650129386.jpg"] },
    { text: "回去将东西交给柳娘子", textEn: "Go back and give the item to Liu Niangzi.", images: ["http://img1.ali213.net/glpic/2025/09/06/584_2025090650129971.jpg"] },
    { text: "跟随指引，在河边找到季有德进行对话", textEn: "Follow the guide and find Ji Youde by the river to talk.", images: ["http://img1.ali213.net/glpic/2025/09/06/584_2025090650129394.jpg"] },
    { text: "跟随指引，找到王福贵进行对话", textEn: "Follow the guide and find Wang Fugui to talk.", images: ["http://img1.ali213.net/glpic/2025/09/06/584_2025090650129868.jpg"] },
    { text: "对话结束，拾取字条", textEn: "After the dialogue, pick up the note.", images: ["http://img1.ali213.net/glpic/2025/09/06/584_2025090650129421.jpg"] },
    { text: "跟随指引，来到图中的位置进行调查", textEn: "Follow the guide and investigate at the location shown.", images: ["http://img1.ali213.net/glpic/2025/09/06/584_2025090650129876.jpg"] },
    { text: "将时间调整到子时", textEn: "Adjust the time to Zi hour (11 PM - 1 AM).", images: ["http://img1.ali213.net/glpic/2025/09/06/584_2025090650129873.jpg"] },
    { text: "在香炉前进行供奉", textEn: "Make an offering at the incense burner.", images: ["http://img1.ali213.net/glpic/2025/09/06/584_2025090650129257.jpg"] },
    { text: "使用太极，驱散雾气", textEn: "Use Tai Chi to disperse the fog.", images: ["http://img1.ali213.net/glpic/2025/09/06/584_202509065012994.jpg"] },
    { text: "与旁边的倒爷进行对话，并查看掉落的物品", textEn: "Talk to the peddler nearby and inspect the dropped items.", images: ["http://img1.ali213.net/glpic/2025/09/06/584_2025090650129135.jpg", "http://img1.ali213.net/glpic/2025/09/06/584_2025090650533772.jpg"] },
    { text: "传送到破门村传送点", textEn: "Teleport to the Pomen Village waypoint.", images: ["http://img1.ali213.net/glpic/2025/09/06/584_2025090650129539.jpg"] },
    { text: "找到柳娘子进行对话", textEn: "Find Liu Niangzi and talk.", images: ["http://img1.ali213.net/glpic/2025/09/06/584_2025090650129116.jpg"] },
    { text: "击败郝友闲", textEn: "Defeat Hao Youxian.", images: ["http://img1.ali213.net/glpic/2025/09/06/584_2025090650129673.jpg"] },
    { text: "帮柳娘子看病，即可完成奇遇", textEn: "Treat Liu Niangzi's illness to complete the encounter.", images: ["http://img1.ali213.net/glpic/2025/09/06/584_2025090650241263.jpg"] },
  ],

  // ── 清河 (batch 2 - 9 newly scraped) ──────────────────────────

  "qh-fohuayushu-shang": [
    { text: "玩家首先需要前往慈心镇入口，在这里完成不平事，救出居民。", textEn: "Go to the entrance of Cixin Town, complete the injustice event, and rescue the residents.", images: ["http://img1.ali213.net/glpic/2024/07/29/584_2024072992433369.jpg", "http://img1.ali213.net/glpic/2024/07/29/584_2024072992434261.jpg"] },
    { text: "然后再夜晚的时候前往老鼠洞，找到伏梁鼠对话，解锁传闻老鼠的抗争。", textEn: "At night, go to the Rat Hole, find Fuliang Rat and talk to it to unlock the rumor 'Rat's Resistance'.", images: ["http://img1.ali213.net/glpic/2024/07/29/584_202407299243447.jpg", "http://img1.ali213.net/glpic/2024/07/29/584_2024072992434751.jpg"] },
    { text: "接着来到距离老鼠洞最近的房子屋檐下，找到吉小鼠，点击戳戳，多戳几次。", textEn: "Go to the eaves of the nearest house to the Rat Hole, find Ji Xiaoshu, and poke it several times.", images: ["http://img1.ali213.net/glpic/2024/07/29/584_2024072992434957.jpg", "http://img1.ali213.net/glpic/2024/07/29/584_2024072992433609.jpg"] },
    { text: "完成以上内容后，需要把时间调到三天后，调完后来到老鼠洞。", textEn: "After completing the above, advance the time to three days later, then go to the Rat Hole." },
    { text: "最后会在这里发现四鼠在门口找吉小鼠，上前和绣锦鼠触发对话，然后跟着流程走就行了。", textEn: "You'll find the Four Rats looking for Ji Xiaoshu at the entrance. Talk to Xiujin Rat and follow the quest flow.", images: ["http://img1.ali213.net/glpic/2024/07/29/584_2024072992434447.jpg"] },
  ],

  "qh-nandehaohuo": [
    { text: "首先，前往丰禾村下方的道路上，找到王族长，与其对话，触发任务。", textEn: "Go to the road below Fenghe Village, find Clan Leader Wang, and talk to him to trigger the quest.", images: ["http://img1.ali213.net/glpic/2024/07/29/584_2024072992358977.jpg", "http://img1.ali213.net/glpic/2024/07/29/584_2024072992357233.jpg"] },
    { text: "接着，在公示栏附近找到杜牙人，进行对话，使用乾坤挪移技能带着王览前往林场。", textEn: "Find Du Yaren near the notice board, talk to him, then use the Qiankun Nuoyi skill to bring Wang Lan to the lumber yard.", images: ["http://img1.ali213.net/glpic/2024/07/29/584_202407299235845.jpg", "http://img1.ali213.net/glpic/2024/07/29/584_2024072992358635.jpg"] },
    { text: "在林场中，与木工对话，随后，调整游戏时间至第二天，再次与木工对话。", textEn: "In the lumber yard, talk to the carpenter. Then adjust the game time to the next day and talk to the carpenter again.", images: ["http://img1.ali213.net/glpic/2024/07/29/584_2024072992357821.jpg"] },
    { text: "最后，带着王族长跟随任务指引来到监狱，看到王览在监狱中过的还不错，即可完成任务。", textEn: "Bring Clan Leader Wang and follow the quest marker to the prison. See that Wang Lan is doing well in prison to complete the quest.", images: ["http://img1.ali213.net/glpic/2024/07/29/584_2024072992357347.jpg"] },
  ],

  "qh-fohuayushu-xia": [
    { text: "首先需要玩家完成佛花与鼠上奇遇，之后再将时间调整到三四天之后。", textEn: "Complete the Buddha Flower and Rat (Upper) quest first, then advance time by three to four days.", images: ["http://img1.ali213.net/glpic/2024/07/29/584_2024072993741974.png"] },
    { text: "来到图中的位置，从洞口出去，找到npc对话。", textEn: "Go to the location shown in the image, exit through the cave opening, and find an NPC to talk to.", images: ["http://img1.ali213.net/glpic/2024/07/29/584_2024072993742410.png"] },
    { text: "结束对话后会要求回答一些问题，然后才能继续调查。", textEn: "After the dialogue ends, you'll need to answer some questions before continuing the investigation.", images: ["http://img1.ali213.net/glpic/2024/07/29/584_2024072993953792.png"] },
    { text: "在调查完后需要使用探索来对周围进入探索。", textEn: "After investigating, use the explore function to search the surrounding area.", images: ["http://img1.ali213.net/glpic/2024/07/29/584_2024072993741964.png"] },
    { text: "探索中会遇到一些怪物，将他们都击败即可。", textEn: "You'll encounter some monsters during exploration. Defeat all of them.", images: ["http://img1.ali213.net/glpic/2024/07/29/584_202407299374193.png"] },
    { text: "接着跟着指引来到下方房子位置，在外面进行窃听。", textEn: "Follow the guide to the house below and eavesdrop outside.", images: ["http://img1.ali213.net/glpic/2024/07/29/584_2024072993741418.png"] },
    { text: "结束窃听后需要击败一个信徒，然后去和另一个信徒对话。", textEn: "After eavesdropping, defeat a believer, then go talk to another believer.", images: ["http://img1.ali213.net/glpic/2024/07/29/584_2024072993742693.png"] },
    { text: "然后跟着信徒来到下方图中的位置，将小鼠放出。", textEn: "Follow the believer to the location shown below and release the little rat.", images: ["http://img1.ali213.net/glpic/2024/07/29/584_2024072993742662.png"] },
    { text: "最后只需要再回到洞中，将最后的剧情完成后即可。", textEn: "Finally, return to the cave and complete the final story scene.", images: ["http://img1.ali213.net/glpic/2024/07/29/584_2024072993742329.png"] },
  ],

  "qh-daorenmenglv": [
    { text: "首先玩家需要来到临江驿监狱门口，在这里才可以触发奇遇。", textEn: "Go to the entrance of Linjiangyi Prison to trigger the encounter.", images: ["http://img1.ali213.net/glpic/2024/07/29/584_2024072995005771.png"] },
    { text: "达到后在和驴肉火烧店老板交流互动后，即可触发任务。", textEn: "After arriving, interact with the donkey meat burger shop owner to trigger the quest.", images: ["http://img1.ali213.net/glpic/2024/07/29/584_2024072995005532.png"] },
    { text: "接着找到睡道人后，使用香炉放入药草，进入到睡道人的梦境中。", textEn: "Find the Sleeping Taoist, place herbs in the incense burner, and enter his dream.", images: ["http://img1.ali213.net/glpic/2024/07/29/584_2024072995005181.png"] },
    { text: "进入后需要去和青驴、痴心驴、忧郁驴对话，然后再退出梦境。", textEn: "Inside the dream, talk to the Green Donkey, Infatuated Donkey, and Melancholy Donkey, then exit the dream.", images: ["http://img1.ali213.net/glpic/2024/07/29/584_2024072995005761.png"] },
    { text: "退出后和睡道人对话，再次来到驴肉火烧的摊子，对话后购买一个黑心驴肉火烧。", textEn: "After exiting, talk to the Sleeping Taoist, return to the donkey meat burger stall, and buy a Black Heart Donkey Burger.", images: ["http://img1.ali213.net/glpic/2024/07/29/584_2024072995004271.png"] },
    { text: "然后从背包中找到进行食用，接着假装肚子疼，最后再去和睡道人对话后即可完成任务。", textEn: "Eat it from your inventory, pretend to have a stomachache, then talk to the Sleeping Taoist to complete the quest.", images: ["http://img1.ali213.net/glpic/2024/07/29/584_2024072995004917.png"] },
  ],

  "qh-zhizijianghu1": [
    { text: "打开地图前往百草野将军祠附近的营地，清理掉周围的敌人。", textEn: "Open the map and go to the camp near the General's Shrine in Baicao Wild. Clear out the surrounding enemies.", images: ["http://img1.ali213.net/glpic/2024/07/29/584_2024072995840421.jpg"] },
    { text: "前往指定地点表演剑技给无名剑客看，这样即可完成稚子江湖·一。", textEn: "Go to the designated location and perform sword skills for the Nameless Swordsman to complete 'Young Jianghu - Part 1'." },
    { text: "等到现实时间的第二天，前往营地，使用积矩九剑将营地中的敌人清理掉。", textEn: "Wait until the next day in real time, go to the camp, and use the Jiju Nine Swords to clear the enemies.", images: ["http://img1.ali213.net/glpic/2024/07/29/584_2024072995839998.jpg"] },
    { text: "在附近找到NPC小平安，根据提示释放积矩九剑的一技能即可完成稚子江湖·二。", textEn: "Find NPC Xiao Ping'an nearby and use the Jiju Nine Swords' first skill as prompted to complete 'Young Jianghu - Part 2'.", images: ["http://img1.ali213.net/glpic/2024/07/29/584_2024072995839143.jpg"] },
    { text: "点击菜单中的门派选项，在门派商店中购买八方风雷枪武器。", textEn: "Click the sect option in the menu and purchase the Bafang Fenglei Spear from the sect shop.", images: ["http://img1.ali213.net/glpic/2024/07/29/584_2024072995840859.jpg"] },
    { text: "选择学习八方风雷枪，在现实时间的第二天继续清理营地的敌人。", textEn: "Select to learn the Bafang Fenglei Spear, then on the next day in real time, continue clearing enemies at the camp.", images: ["http://img1.ali213.net/glpic/2024/07/29/584_2024072995839101.jpg"] },
    { text: "跟随指引来到河边找到NPC小平安，在特定任务表演八方风雷枪1技能即可完成稚子江湖·三。", textEn: "Follow the guide to the river to find NPC Xiao Ping'an, perform the Bafang Fenglei Spear skill 1 to complete 'Young Jianghu - Part 3'." },
    { text: "再次来到将军祠附近的一处营地，将时间调整到晚上后，击败出现的敌人即可触发任务。", textEn: "Go to a camp near the General's Shrine again, adjust the time to night, and defeat the enemies that appear to trigger the quest.", images: ["http://img1.ali213.net/glpic/2024/07/29/584_2024072995839780.jpg"] },
    { text: "最后跟随任务指引完成对话剧情，就可以完成任务稚子江湖·四了。", textEn: "Finally, follow the quest guide and complete the dialogue scenes to finish 'Young Jianghu - Part 4'." },
  ],

  "qh-xunxiazhilu": [
    { text: "传送到丰禾村附近，找到燕阿牛并和他对话触发奇遇任务。", textEn: "Teleport near Fenghe Village, find Yan Aniu and talk to him to trigger the encounter.", images: ["http://img1.ali213.net/glpic/2024/07/29/584_20240729100633642.jpg"] },
    { text: "前往图中位置，点击拾取物品，和周围的燕大铁进行对话。", textEn: "Go to the location shown, pick up the item, and talk to Yan Datie nearby.", images: ["http://img1.ali213.net/glpic/2024/07/29/584_20240729100633176.jpg"] },
    { text: "击败附近的敌人后，根据提示击败营地中的敌人。", textEn: "After defeating nearby enemies, follow the prompt to defeat the enemies in the camp.", images: ["http://img1.ali213.net/glpic/2024/07/29/584_20240729100633904.jpg"] },
    { text: "最后在营地附近找到燕大铁，完成对话剧情后即可获得奖励。", textEn: "Finally, find Yan Datie near the camp and complete the dialogue scene to receive rewards.", images: ["http://img1.ali213.net/glpic/2024/07/29/584_20240729100633365.jpg"] },
  ],

  "qh-butongfangou": [
    { text: "打开地图，传送到荧渊正南位置触发奇遇。", textEn: "Open the map and teleport to the south of Yingyuan to trigger the encounter.", images: ["http://img1.ali213.net/glpic/2024/07/29/584_20240729101537310.png"] },
    { text: "在附近找到捕快并和他对话，为捕快疗伤。", textEn: "Find the constable nearby, talk to him, and heal his injuries.", images: ["http://img1.ali213.net/glpic/2024/07/29/584_20240729101537637.png"] },
    { text: "然后走到牢头背后，选择吓唬他。", textEn: "Walk behind the jailer and choose to scare him." },
    { text: "和尤福保进行对话，选择和他一起喝水。", textEn: "Talk to You Fubao and choose to drink water with him.", images: ["http://img1.ali213.net/glpic/2024/07/29/584_20240729101537921.png"] },
    { text: "跟随尤福保到达指定位置，用奇术狮吼正声将小狗赶走。", textEn: "Follow You Fubao to the designated location and use Qishu Lion's Roar to drive the dog away.", images: ["http://img1.ali213.net/glpic/2024/07/29/584_20240729101537699.png"] },
    { text: "最后等到次日完成对话剧情就可以完成这个任务了。", textEn: "Wait until the next day and complete the dialogue scene to finish the quest.", images: ["http://img1.ali213.net/glpic/2024/07/29/584_20240729101537995.png"] },
  ],

  "qh-zhuiguangderen": [
    { text: "抵达叶不休的棋局所在地，尾随小猫直至抵达牌坊之下。", textEn: "Arrive at Ye Buxiu's chess game location, follow the kitten until you reach the memorial archway.", images: ["http://img1.ali213.net/glpic/2024/09/07/584_2024090713311446.png"] },
    { text: "在牌坊隐蔽处聆听两位人物的交谈，从而激活任务领取。", textEn: "Hide near the archway and eavesdrop on the conversation between two people to activate the quest.", images: ["http://img1.ali213.net/glpic/2024/09/07/584_2024090713310252.png"] },
    { text: "在背包中寻得南为情道具并使用它，你将得到一封信。将此信件递交给名为单儿的人物。", textEn: "Find the Nan Weiqing item in your backpack and use it to receive a letter. Deliver the letter to someone named Dan'er.", images: ["http://img1.ali213.net/glpic/2024/09/07/584_2024090713310467.png"] },
    { text: "依序挑选以下选项：一、二、三。", textEn: "Select the following dialogue options in order: 1, 2, 3.", images: ["http://img1.ali213.net/glpic/2024/09/07/584_2024090713312991.png"] },
    { text: "与遇到的贵妇人进行对话，并选择以下选项的顺序：一、三、二。", textEn: "Talk to the noblewoman you meet and select dialogue options in order: 1, 3, 2.", images: ["http://img1.ali213.net/glpic/2024/09/07/584_2024090713309633.png"] },
    { text: "寻见负责站蛹的人物，并阻止他的行动。", textEn: "Find the person responsible for standing cocoons and stop his actions.", images: ["http://img1.ali213.net/glpic/2024/09/07/584_2024090713310145.png"] },
    { text: "运用你的智慧和口才去收买或说服他。", textEn: "Use your wisdom and eloquence to bribe or persuade him.", images: ["http://img1.ali213.net/glpic/2024/09/07/584_2024090713312654.png"] },
    { text: "对话一旦展开，选择以下选项：一、二、三。", textEn: "Once the dialogue starts, select the following options: 1, 2, 3.", images: ["http://img1.ali213.net/glpic/2024/09/07/584_2024090713310869.png"] },
    { text: "对话结束后，把游戏的内时间设定为翌日，即可宣告任务完成。", textEn: "After the dialogue ends, set the in-game time to the next day to complete the quest.", images: ["http://img1.ali213.net/glpic/2024/09/07/584_2024090713311797.png"] },
  ],

  "qh-laoruofuru": [
    { text: "触发地点：将军祠区域，具体位置如图所示。", textEn: "Trigger location: General's Shrine area. The exact location is shown in the image.", images: ["http://img1.ali213.net/glpic/2024/12/29/584_2024122911434210.png"] },
    { text: "触发方法：玩家在到达后找到npc杜乔仙并进行对话和战斗，然后就能成功触发该奇遇。", textEn: "Trigger method: After arriving, find NPC Du Qiaoxian, talk and fight, then successfully trigger the encounter.", images: ["http://img1.ali213.net/glpic/2024/12/29/584_2024122911434646.png"] },
    { text: "接着玩家需要和擂台旁边的袁金刚、公孙登和公孙大爷三人进行切磋。", textEn: "Then you need to spar with Yuan Jingang, Gong Sundeng, and Gongsun Daye near the arena.", images: ["http://img1.ali213.net/glpic/2024/12/29/584_202412291143420.png"] },
    { text: "大家可在基础设置中调整难度或开启下方的辅助卸势。", textEn: "You can adjust difficulty in basic settings or enable the assist parry option below.", images: ["http://img1.ali213.net/glpic/2024/12/29/584_2024122911434208.png"] },
    { text: "然后和袁金刚对战时，大家需要了解他的招式，然后注意躲开其弓箭攻击。", textEn: "When fighting Yuan Jingang, learn his moves and watch out for his bow attacks.", images: ["http://img1.ali213.net/glpic/2024/12/29/584_2024122911434435.png"] },
    { text: "这场战斗中主要需要减少袁金刚的真气条才能快速通关。", textEn: "In this battle, you mainly need to reduce Yuan Jingang's qi bar to clear it quickly." },
    { text: "建议大家在和公孙登作战时攻击后快速保持安全距离，公孙大爷则主要需要避开其连招即可。", textEn: "When fighting Gong Sundeng, attack then quickly maintain a safe distance. For Gongsun Daye, mainly avoid his combo attacks.", images: ["http://img1.ali213.net/glpic/2024/12/29/584_2024122911434946.png"] },
  ],
};
