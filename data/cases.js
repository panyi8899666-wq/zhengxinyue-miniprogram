/**
 * 案例数据 · 28 个：16 个概念案例 + 12 个真实项目/作品
 * （4 个早期真实客户项目 + 8 组新增：发光字系列、天马光电子为真实客户项目·实际交付；
 *  跑动的小车、机器人IP、投币盒子、春日樱花、商城展台、户外标识为真实个人作品）
 *
 * 图片地址规则：src 为相对路径，页面渲染时拼接 config.IMAGE_BASE_URL。
 * IMAGE_BASE_URL 留空时，图片位显示占位样式。
 */
module.exports = [
  // ———————— 概念案例 · 品牌视觉 ————————
  {
    id: 'lens-fest',
    title: 'LENS 影像节',
    category: '品牌视觉',
    tags: ['活动品牌', '主视觉'],
    isReal: false,
    rationale: '影像节品牌需要在"专业"与"大众亲近"之间找到平衡：主视觉以镜头光圈为母题做减法，让每一年的主题色都能直接替换而不伤骨架。',
    views: [
      { label: '平面稿', src: 'cases/lens-fest/flat.jpg' },
      { label: '渲染图 01', src: 'cases/lens-fest/render1.jpg' },
      { label: '渲染图 02', src: 'cases/lens-fest/render2.jpg' },
      { label: '实景图 01', src: 'cases/lens-fest/scene1.jpg' },
      { label: '实景图 02', src: 'cases/lens-fest/scene2.jpg' },
      { label: '材质特写', src: 'cases/lens-fest/closeup.jpg' }
    ]
  },
  {
    id: 'fold-manual',
    title: 'FOLD 家居手册',
    category: '品牌视觉',
    tags: ['产品手册', '平面系统'],
    isReal: false,
    rationale: '家居手册常犯的毛病是图多字乱：先定网格与三级标题节奏，再让产品图"住"进去，翻页即有呼吸感。',
    views: [
      { label: '平面稿', src: 'cases/fold-manual/flat.jpg' },
      { label: '渲染图 01', src: 'cases/fold-manual/render1.jpg' },
      { label: '渲染图 02', src: 'cases/fold-manual/render2.jpg' },
      { label: '实景图 01', src: 'cases/fold-manual/scene1.jpg' },
      { label: '实景图 02', src: 'cases/fold-manual/scene2.jpg' },
      { label: '材质特写', src: 'cases/fold-manual/closeup.jpg' }
    ]
  },
  {
    id: 'nexa-device',
    title: 'NEXA 智能设备',
    category: '品牌视觉',
    tags: ['产品发布', '3D视觉'],
    isReal: false,
    rationale: '智能设备发布视觉的关键是"科技感不等于冷感"：用深色底托住产品，用一束暖光点出材质，参数信息退到第二层级。',
    views: [
      { label: '平面稿', src: 'cases/nexa-device/flat.jpg' },
      { label: '渲染图 01', src: 'cases/nexa-device/render1.jpg' },
      { label: '渲染图 02', src: 'cases/nexa-device/render2.jpg' },
      { label: '实景图 01', src: 'cases/nexa-device/scene1.jpg' },
      { label: '实景图 02', src: 'cases/nexa-device/scene2.jpg' },
      { label: '材质特写', src: 'cases/nexa-device/closeup.jpg' }
    ]
  },
  {
    id: 'orbit',
    title: 'ORBIT',
    category: '品牌视觉',
    tags: ['品牌视觉', '3D渲染'],
    isReal: false,
    rationale: '为虚拟品牌做一套可延展的视觉轨道系统：核心图形一次成型，后续所有物料只换文案与色彩，品牌资产越用越值钱。',
    views: [
      { label: '平面稿', src: 'cases/orbit/flat.jpg' },
      { label: '渲染图 01', src: 'cases/orbit/render1.jpg' },
      { label: '渲染图 02', src: 'cases/orbit/render2.jpg' },
      { label: '实景图 01', src: 'cases/orbit/scene1.jpg' },
      { label: '实景图 02', src: 'cases/orbit/scene2.jpg' },
      { label: '材质特写', src: 'cases/orbit/closeup.jpg' }
    ]
  },

  // ———————— 概念案例 · 广告画面 ————————
  {
    id: 'pulse-outdoor',
    title: 'PULSE 户外灯箱',
    category: '广告画面',
    tags: ['户外灯箱', '系列海报'],
    isReal: false,
    rationale: '户外灯箱只有 3 秒：把信息压到一句标题加一个视觉锤，远看是色块、近看是细节，夜间发光状态单独做了校色。',
    views: [
      { label: '平面稿', src: 'cases/pulse-outdoor/flat.jpg' },
      { label: '渲染图 01', src: 'cases/pulse-outdoor/render1.jpg' },
      { label: '渲染图 02', src: 'cases/pulse-outdoor/render2.jpg' },
      { label: '实景图 01', src: 'cases/pulse-outdoor/scene1.jpg' },
      { label: '实景图 02', src: 'cases/pulse-outdoor/scene2.jpg' },
      { label: '材质特写', src: 'cases/pulse-outdoor/closeup.jpg' }
    ]
  },
  {
    id: 'tide-summer',
    title: 'TIDE 夏日企划',
    category: '广告画面',
    tags: ['电商大促', '社媒企划'],
    isReal: false,
    rationale: '夏日企划拼的是"清凉感"的统一：从主视觉定下水波纹理与配色比例，所有分会场与社媒图都从这个母版长出来。',
    views: [
      { label: '平面稿', src: 'cases/tide-summer/flat.jpg' },
      { label: '渲染图 01', src: 'cases/tide-summer/render1.jpg' },
      { label: '渲染图 02', src: 'cases/tide-summer/render2.jpg' },
      { label: '实景图 01', src: 'cases/tide-summer/scene1.jpg' },
      { label: '实景图 02', src: 'cases/tide-summer/scene2.jpg' },
      { label: '材质特写', src: 'cases/tide-summer/closeup.jpg' }
    ]
  },
  {
    id: 'mono-home',
    title: 'MONO 家居大促',
    category: '广告画面',
    tags: ['电商主视觉', '促销海报'],
    isReal: false,
    rationale: '家居大促的画面容易做成"家具堆砌"：用大留白托住单品，让价格信息成为唯一的红色，点进去的欲望自然产生。',
    views: [
      { label: '平面稿', src: 'cases/mono-home/flat.jpg' },
      { label: '渲染图 01', src: 'cases/mono-home/render1.jpg' },
      { label: '渲染图 02', src: 'cases/mono-home/render2.jpg' },
      { label: '实景图 01', src: 'cases/mono-home/scene1.jpg' },
      { label: '实景图 02', src: 'cases/mono-home/scene2.jpg' },
      { label: '材质特写', src: 'cases/mono-home/closeup.jpg' }
    ]
  },
  {
    id: 'pinkdust-social',
    title: 'PINK DUST 社媒',
    category: '广告画面',
    tags: ['社媒 campaign', '系列海报'],
    isReal: false,
    rationale: '社媒 campaign 活在信息流里：首图负责停留 0.5 秒，系列图用同一版式讲完一个完整故事，单张拎出来也能打。',
    views: [
      { label: '平面稿', src: 'cases/pinkdust-social/flat.jpg' },
      { label: '渲染图 01', src: 'cases/pinkdust-social/render1.jpg' },
      { label: '渲染图 02', src: 'cases/pinkdust-social/render2.jpg' },
      { label: '实景图 01', src: 'cases/pinkdust-social/scene1.jpg' },
      { label: '实景图 02', src: 'cases/pinkdust-social/scene2.jpg' },
      { label: '材质特写', src: 'cases/pinkdust-social/closeup.jpg' }
    ]
  },
  {
    id: 'double11-sale',
    title: '双11电商大促',
    category: '广告画面',
    tags: ['电商大促', '主会场'],
    isReal: false,
    rationale: '大促主会场是流量的总闸：视觉层级必须让"会场—品类—单品"三级跳转零思考，氛围做到位但不吃掉按钮。',
    views: [
      { label: '平面稿', src: 'cases/double11-sale/flat.jpg' },
      { label: '渲染图 01', src: 'cases/double11-sale/render1.jpg' },
      { label: '渲染图 02', src: 'cases/double11-sale/render2.jpg' },
      { label: '实景图 01', src: 'cases/double11-sale/scene1.jpg' },
      { label: '实景图 02', src: 'cases/double11-sale/scene2.jpg' },
      { label: '材质特写', src: 'cases/double11-sale/closeup.jpg' }
    ]
  },

  // ———————— 概念案例 · 包装 ————————
  {
    id: 'coffee-pack-03',
    title: '咖啡包装系统 03',
    category: '包装',
    tags: ['咖啡包装', '瓶型设计'],
    isReal: false,
    rationale: '咖啡包装拼的是货架 1 米辨识度：深色底色统一全系，产地色条做区分，标签随瓶身曲率走形，冷凝水珠是点睛。',
    views: [
      { label: '平面稿', src: 'cases/coffee-pack-03/flat.jpg' },
      { label: '渲染图 01', src: 'cases/coffee-pack-03/render1.jpg' },
      { label: '渲染图 02', src: 'cases/coffee-pack-03/render2.jpg' },
      { label: '实景图 01', src: 'cases/coffee-pack-03/scene1.jpg' },
      { label: '实景图 02', src: 'cases/coffee-pack-03/scene2.jpg' },
      { label: '材质特写', src: 'cases/coffee-pack-03/closeup.jpg' }
    ]
  },
  {
    id: 'mask-giftbox-20',
    title: '面膜礼盒系统 20',
    category: '包装',
    tags: ['礼盒包装', '结构设计'],
    isReal: false,
    rationale: '礼盒的"贵"来自结构：天地盖的开启阻尼、内托的分区、烫金只用在开箱第一眼，三处做好，成本不用堆。',
    views: [
      { label: '平面稿', src: 'cases/mask-giftbox-20/flat.jpg' },
      { label: '渲染图 01', src: 'cases/mask-giftbox-20/render1.jpg' },
      { label: '渲染图 02', src: 'cases/mask-giftbox-20/render2.jpg' },
      { label: '实景图 01', src: 'cases/mask-giftbox-20/scene1.jpg' },
      { label: '实景图 02', src: 'cases/mask-giftbox-20/scene2.jpg' },
      { label: '材质特写', src: 'cases/mask-giftbox-20/closeup.jpg' }
    ]
  },
  {
    id: 'aera-perfume',
    title: 'AERA 香氛礼盒',
    category: '包装',
    tags: ['香氛包装', '礼盒'],
    isReal: false,
    rationale: '香氛卖的是"看不见的味道"：包装用哑光与局部 UV 的触感对比去暗示香调，打开方式设计成仪式。',
    views: [
      { label: '平面稿', src: 'cases/aera-perfume/flat.jpg' },
      { label: '渲染图 01', src: 'cases/aera-perfume/render1.jpg' },
      { label: '渲染图 02', src: 'cases/aera-perfume/render2.jpg' },
      { label: '实景图 01', src: 'cases/aera-perfume/scene1.jpg' },
      { label: '实景图 02', src: 'cases/aera-perfume/scene2.jpg' },
      { label: '材质特写', src: 'cases/aera-perfume/closeup.jpg' }
    ]
  },
  {
    id: 'tea-pack',
    title: '茶品包装',
    category: '包装',
    tags: ['茶叶包装', '系列设计'],
    isReal: false,
    rationale: '茶包装最怕"老气"：保留东方留白与印章式点缀，但把信息层级按现代货架逻辑重排，年轻人也拿得出手。',
    views: [
      { label: '平面稿', src: 'cases/tea-pack/flat.jpg' },
      { label: '渲染图 01', src: 'cases/tea-pack/render1.jpg' },
      { label: '渲染图 02', src: 'cases/tea-pack/render2.jpg' },
      { label: '实景图 01', src: 'cases/tea-pack/scene1.jpg' },
      { label: '实景图 02', src: 'cases/tea-pack/scene2.jpg' },
      { label: '材质特写', src: 'cases/tea-pack/closeup.jpg' }
    ]
  },
  {
    id: 'soda-water',
    title: '气泡水',
    category: '包装',
    tags: ['饮料包装', '瓶标设计'],
    isReal: false,
    rationale: '气泡水的包装就是广告：瓶身即画面，标签曲率、材质高光、冷凝水珠全部按产品级 3D 标准打磨。',
    views: [
      { label: '平面稿', src: 'cases/soda-water/flat.jpg' },
      { label: '渲染图 01', src: 'cases/soda-water/render1.jpg' },
      { label: '渲染图 02', src: 'cases/soda-water/render2.jpg' },
      { label: '实景图 01', src: 'cases/soda-water/scene1.jpg' },
      { label: '实景图 02', src: 'cases/soda-water/scene2.jpg' },
      { label: '材质特写', src: 'cases/soda-water/closeup.jpg' }
    ]
  },

  // ———————— 概念案例 · 空间应用 ————————
  {
    id: 'mugu-bakery',
    title: 'MUGU 烘焙门店',
    category: '空间应用',
    tags: ['门头招牌', '店面视觉'],
    isReal: false,
    rationale: '烘焙门店的门头要在一条街里被一眼认出：立体字厚度、灯光色温、橱窗海报三件套一次定死，白天晚上都成立。',
    views: [
      { label: '平面稿', src: 'cases/mugu-bakery/flat.jpg' },
      { label: '渲染图 01', src: 'cases/mugu-bakery/render1.jpg' },
      { label: '渲染图 02', src: 'cases/mugu-bakery/render2.jpg' },
      { label: '实景图 01', src: 'cases/mugu-bakery/scene1.jpg' },
      { label: '实景图 02', src: 'cases/mugu-bakery/scene2.jpg' },
      { label: '材质特写', src: 'cases/mugu-bakery/closeup.jpg' }
    ]
  },
  {
    id: 'storefront-sign',
    title: '门头招牌',
    category: '空间应用',
    tags: ['门头设计', '发光字'],
    isReal: false,
    rationale: '门头是线下流量的第一入口：字高、离地高度、发光方式按真实街道尺度推演，日间与夜间两种状态都出效果图。',
    views: [
      { label: '平面稿', src: 'cases/storefront-sign/flat.jpg' },
      { label: '渲染图 01', src: 'cases/storefront-sign/render1.jpg' },
      { label: '渲染图 02', src: 'cases/storefront-sign/render2.jpg' },
      { label: '实景图 01', src: 'cases/storefront-sign/scene1.jpg' },
      { label: '实景图 02', src: 'cases/storefront-sign/scene2.jpg' },
      { label: '材质特写', src: 'cases/storefront-sign/closeup.jpg' }
    ]
  },

  // ———————— 真实客户项目 · 实际交付 ————————
  {
    id: 'xinyang-safety',
    title: '新阳街道安全环保主题宣传',
    category: '广告画面',
    tags: ['主题海报', '宣传物料'],
    isReal: true,
    realTag: '真实客户项目 · 实际交付',
    realBackground: '2024年8月实际交付项目：街道安全环保主题宣传，36页完整方案，覆盖系列海报与宣传物料。',
    rationale: '政务主题宣传要在"规范"与"看得进去"之间找平衡：信息层级严格按主次排布，视觉语言保持庄重但不呆板。',
    views: [
      { label: '方案页 01', src: 'cases/xinyang-safety/page1.jpg' },
      { label: '方案页 02', src: 'cases/xinyang-safety/page2.jpg' },
      { label: '方案页 03', src: 'cases/xinyang-safety/page3.jpg' },
      { label: '方案页 04', src: 'cases/xinyang-safety/page4.jpg' },
      { label: '方案页 05', src: 'cases/xinyang-safety/page5.jpg' },
      { label: '方案页 06', src: 'cases/xinyang-safety/page6.jpg' }
    ]
  },
  {
    id: 'xiaoxian-campus',
    title: '厦门市孝贤技工学校校园文化提升',
    category: '空间应用',
    tags: ['校园文化墙', '标识导视'],
    isReal: true,
    realTag: '真实客户项目 · 实际交付',
    realBackground: '2025年4月实际交付项目：技工学校校园文化提升，12页方案，覆盖文化墙与导视系统。',
    rationale: '校园文化提升的核心是"学生每天路过都愿意看一眼"：把校训拆成可打卡的视觉节点，导视系统一次做全。',
    views: [
      { label: '方案页 01', src: 'cases/xiaoxian-campus/page1.jpg' },
      { label: '方案页 02', src: 'cases/xiaoxian-campus/page2.jpg' },
      { label: '方案页 03', src: 'cases/xiaoxian-campus/page3.jpg' },
      { label: '方案页 04', src: 'cases/xiaoxian-campus/page4.jpg' },
      { label: '方案页 05', src: 'cases/xiaoxian-campus/page5.jpg' },
      { label: '方案页 06', src: 'cases/xiaoxian-campus/page6.jpg' }
    ]
  },
  {
    id: 'youth-fun-2025',
    title: '2025青年趣享时光',
    category: '品牌视觉',
    tags: ['活动主视觉', '延展物料'],
    isReal: true,
    realTag: '真实客户项目 · 实际交付',
    realBackground: '2025年11月22日实际交付项目：海沧金沙书院青年活动，活动主视觉及全套延展物料。',
    rationale: '青年活动的视觉必须"好玩但不乱"：主视觉定下高饱和的快乐基调，所有延展物料共用一套图形语言。',
    views: [
      { label: '方案页 01', src: 'cases/youth-fun-2025/page1.jpg' },
      { label: '方案页 02', src: 'cases/youth-fun-2025/page2.jpg' },
      { label: '方案页 03', src: 'cases/youth-fun-2025/page3.jpg' },
      { label: '方案页 04', src: 'cases/youth-fun-2025/page4.jpg' },
      { label: '方案页 05', src: 'cases/youth-fun-2025/page5.jpg' },
      { label: '方案页 06', src: 'cases/youth-fun-2025/page6.jpg' }
    ]
  },
  {
    id: 'shilan-jihua',
    title: '厦门士兰集华12英寸开工典礼',
    category: '品牌视觉',
    tags: ['典礼主视觉', '舞台背景'],
    isReal: true,
    realTag: '真实客户项目 · 实际交付',
    realBackground: '2026年1月4日实际交付项目：12英寸高端模拟芯片制造（一期）开工典礼，30页完整方案。',
    rationale: '重大典礼视觉的第一要求是"庄重不出错"：主视觉稳重大气，舞台背景、邀请函、现场物料全部统一输出。',
    views: [
      { label: '方案页 01', src: 'cases/shilan-jihua/page1.jpg' },
      { label: '方案页 02', src: 'cases/shilan-jihua/page2.jpg' },
      { label: '方案页 03', src: 'cases/shilan-jihua/page3.jpg' },
      { label: '方案页 04', src: 'cases/shilan-jihua/page4.jpg' },
      { label: '方案页 05', src: 'cases/shilan-jihua/page5.jpg' },
      { label: '方案页 06', src: 'cases/shilan-jihua/page6.jpg' }
    ]
  },

  // ———————— 真实个人作品 · 3D / 动画 ————————
  {
    id: 'running-car',
    title: '跑动的小车',
    category: '品牌视觉',
    tags: ['3D动画', '原创'],
    isReal: true,
    realTag: '真实个人作品',
    realBackground: '原创 3D 动画练习作品。',
    rationale: '用 3D 动画练习运动节奏与镜头语言：小车的跑动循环、场景调度一次成型。',
    views: [
      { label: '作品图 01', src: 'cases/running-car/view1.jpg' },
      { label: '作品图 02', src: 'cases/running-car/view2.jpg' },
      { label: '作品图 03', src: 'cases/running-car/view3.jpg' }
    ]
  },
  {
    id: 'robot-ip',
    title: '机器人 IP 设计',
    category: '品牌视觉',
    tags: ['IP设计', 'Blender'],
    isReal: true,
    realTag: '真实个人作品',
    realBackground: 'Blender 原创机器人 IP 形象设计。',
    rationale: 'IP 设计的关键是"一眼可爱、处处可用"：造型圆润亲和，结构拆分便于延展表情与动作。',
    views: [
      { label: '作品图 01', src: 'cases/robot-ip/view1.jpg' },
      { label: '作品图 02', src: 'cases/robot-ip/view2.jpg' },
      { label: '作品图 03', src: 'cases/robot-ip/view3.jpg' }
    ]
  },
  {
    id: 'coin-box',
    title: '投币盒子',
    category: '包装',
    tags: ['结构设计', '原创'],
    isReal: true,
    realTag: '真实个人作品',
    realBackground: '原创投币盒子结构与视觉设计。',
    rationale: '小物件的"好玩"来自结构巧思：投币的互动路径、盒体的开启方式一次设计到位。',
    views: [
      { label: '作品图 01', src: 'cases/coin-box/view1.jpg' },
      { label: '作品图 02', src: 'cases/coin-box/view2.jpg' },
      { label: '作品图 03', src: 'cases/coin-box/view3.jpg' }
    ]
  },
  {
    id: 'spring-sakura',
    title: '春日樱花',
    category: '广告画面',
    tags: ['主题视觉', '原创'],
    isReal: true,
    realTag: '真实个人作品',
    realBackground: '原创春日樱花主题视觉。',
    rationale: '季节主题拼的是氛围的"第一眼"：樱花粉的层次、花瓣的动态，一眼就是春天。',
    views: [
      { label: '作品图 01', src: 'cases/spring-sakura/view1.jpg' },
      { label: '作品图 02', src: 'cases/spring-sakura/view2.jpg' },
      { label: '作品图 03', src: 'cases/spring-sakura/view3.jpg' }
    ]
  },
  {
    id: 'mall-stage',
    title: '商城展台设计',
    category: '空间应用',
    tags: ['展台设计', '商业空间'],
    isReal: true,
    realTag: '真实个人作品',
    realBackground: '商城展台原创设计：新春 / 元旦 / 萌宠三套主题。',
    rationale: '商场展台要在人流中"被走近"：主题氛围一次拉满，动线与打卡点同步规划。',
    views: [
      { label: '新春主题', src: 'cases/mall-stage/spring.jpg' },
      { label: '元旦主题', src: 'cases/mall-stage/newyear.jpg' },
      { label: '萌宠主题', src: 'cases/mall-stage/pets.jpg' }
    ]
  },
  {
    id: 'outdoor-signage',
    title: '户外标识 · 精神堡垒',
    category: '空间应用',
    tags: ['精神堡垒', '户外标识'],
    isReal: true,
    realTag: '真实个人作品',
    realBackground: '户外标识精神堡垒原创设计（2 款）。',
    rationale: '精神堡垒是区域的"脸面"：体量、材质、灯光按真实场地尺度推演，白天庄重、夜间出彩。',
    views: [
      { label: '方案 01', src: 'cases/outdoor-signage/view1.jpg' },
      { label: '方案 02', src: 'cases/outdoor-signage/view2.jpg' }
    ]
  },

  // ———————— 真实客户项目 · 实际交付（新增） ————————
  {
    id: 'tianma-ceremony',
    title: '天马光电子奠基仪式',
    category: '品牌视觉',
    tags: ['典礼视觉', '舞台背景'],
    isReal: true,
    realTag: '真实客户项目 · 实际交付',
    realBackground: '2022年实际交付项目：天马光电子奠基仪式舞台视觉。',
    rationale: '奠基仪式的视觉要"稳"：主色沉稳大气，舞台背景层次分明，现场各角度拍摄都成立。',
    views: [
      { label: '方案页 01', src: 'cases/tianma-ceremony/page1.jpg' },
      { label: '方案页 02', src: 'cases/tianma-ceremony/page2.jpg' },
      { label: '方案页 03', src: 'cases/tianma-ceremony/page3.jpg' },
      { label: '方案页 04', src: 'cases/tianma-ceremony/page4.jpg' }
    ]
  },
  {
    id: 'luminous-signs',
    title: '发光字系列',
    category: '空间应用',
    tags: ['发光字', '门头招牌'],
    isReal: true,
    realTag: '真实客户项目 · 实际交付',
    realBackground: '实际交付项目：闪亮柚 / 哪吒汽车 / 良初肉业门头发光字，安装落地。',
    rationale: '发光字是"白天看字、晚上看光"：字型、灯光色温、安装结构按真实门头一次做对，交付即安装。',
    views: [
      { label: '闪亮柚', src: 'cases/luminous-signs/shanliangyou.jpg' },
      { label: '哪吒汽车', src: 'cases/luminous-signs/nezha.jpg' },
      { label: '良初肉业', src: 'cases/luminous-signs/liangchu.jpg' }
    ]
  }
];
