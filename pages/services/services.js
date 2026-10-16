const config = require('../../config.js');

Page({
  data: {
    capabilities: [
      { title: '核心视觉持续推进', desc: '主视觉一次定调，后续物料统一延展，品牌越用越值钱。', tags: ['主视觉', '延展'] },
      { title: '常用尺寸快速延展', desc: '一套母版，多尺寸快速输出，社媒、电商、线下全覆盖。', tags: ['多尺寸', '快速'] },
      { title: '品牌日常更一致', desc: '日常物料有系统、有规范，不跑偏、不将就。', tags: ['规范', '统一'] },
      { title: '每周看得见进度', desc: '排期透明，每周同步交付，修改到满意为止。', tags: ['透明', '高效'] }
    ],
    steps: [
      { no: '01', title: '需求对接', desc: '一键咨询或微信直聊，把需求说清楚，输出正式 Brief。' },
      { no: '02', title: '创意与初稿', desc: '按 Brief 出创意方向与初稿，关键节点与你确认。' },
      { no: '03', title: '修改定稿', desc: '按反馈修改到满意，包月内修改不扯皮。' },
      { no: '04', title: '交付与延展', desc: '交付印刷/制作文件，按需延展全套物料。' }
    ],
    faqs: [
      { q: '包月 ¥5,000 包含什么？', a: '包含当月全部平面设计需求：品牌视觉、广告画面、包装、空间应用的创意与成稿，一人对接，24 小时内响应。', open: false },
      { q: '包月不包含什么？', a: '不包含实物制作费用。灯箱、展具、包装打样、印刷等制作，按规格、数量、材质、工艺另计，报价透明。', open: false },
      { q: '为什么选个人工作室，而不是广告公司？', a: '没有客户经理转述：你直接和设计师本人沟通，需求不失真；没有大公司 overhead，¥5,000/月拿到的是资深执行力。', open: false },
      { q: '合作流程是怎样的？', a: '四步：需求对接出 Brief → 创意与初稿 → 修改定稿 → 交付与延展。每一步都有确认节点，不返工。', open: false },
      { q: '交付周期多久？', a: '常规平面稿 2–3 个工作日出初稿；复杂项目（全套 VI、大型包装系统）在 Brief 里约定节点，排期透明。', open: false },
      { q: '修改政策是什么？', a: '包月内按反馈修改到满意为止。大方向推翻重做提前说明，避免无效返工。', open: false }
    ],
    priceMonthly: config.PRICE.monthly,
    priceQuarterly: config.PRICE.quarterly,
    usdNote: config.PRICE.usdNote,
    productionNote: config.PRICE.productionNote
  },

  toggleFaq(e) {
    const idx = e.currentTarget.dataset.idx;
    const faqs = this.data.faqs.map((f, i) => ({
      ...f,
      open: i === idx ? !f.open : false
    }));
    this.setData({ faqs });
  },

  goContact() {
    wx.switchTab({ url: '/pages/contact/contact' });
  },

  goCases() {
    wx.switchTab({ url: '/pages/cases/cases' });
  }
});
