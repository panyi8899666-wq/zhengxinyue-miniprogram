const config = require('../../config.js');
const cases = require('../../data/cases.js');

const FEATURED_IDS = [
  'coffee-pack-03',
  'pulse-outdoor',
  'mugu-bakery',
  'xinyang-safety',
  'luminous-signs',
  'tianma-ceremony'
];

Page({
  data: {
    statusLine: '可接单 · 24小时内响应',
    featured: [],
    strategyPoints: [
      { title: '核心视觉持续推进', desc: '主视觉一次定调，后续物料统一延展' },
      { title: '常用尺寸快速延展', desc: '一套母版，多尺寸快速输出' },
      { title: '品牌日常更一致', desc: '日常物料有系统，不跑偏' },
      { title: '每周看得见进度', desc: '排期透明，每周同步交付' }
    ],
    services: [
      { title: '品牌视觉', desc: 'Logo、VI 系统、品牌主视觉' },
      { title: '广告画面', desc: '电商大促、社媒企划、户外灯箱' },
      { title: '包装', desc: '瓶型、礼盒、系列包装' },
      { title: '空间应用', desc: '门头招牌、店面视觉、文化墙' }
    ],
    timeline: [
      { period: '2006 — 2019', role: '厦门正越广告 · 广告设计', desc: '一线广告设计，扎实的基本功。' },
      { period: '2019 — 2023', role: '厦门新元素广告 · 设计总监', desc: '带团队、定标准，对设计质量负责。' },
      { period: '2023 — 2025', role: '太龙集团 · 产品经理兼发光字生产部负责人', desc: '懂生产落地，设计不再是纸上谈兵。' },
      { period: '2025 — 2026', role: '慕美网络科技 · 副总经理', desc: '从经营视角看设计，更懂客户要什么。' }
    ],
    priceMonthly: config.PRICE.monthly,
    priceNote: '设计包月 · 制作按规格另计'
  },

  onLoad() {
    const base = config.IMAGE_BASE_URL;
    const featured = FEATURED_IDS.map(id => {
      const c = cases.find(x => x.id === id);
      if (!c) return null;
      return {
        id: c.id,
        isReal: c.isReal,
        realTag: c.realTag || '',
        cover: base ? base + c.views[0].src : ''
      };
    }).filter(Boolean);
    this.setData({ featured });
  },

  goCases() {
    wx.switchTab({ url: '/pages/cases/cases' });
  },

  goCaseDetail(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({ url: '/pages/case-detail/case-detail?id=' + id });
  },

  goServices() {
    wx.switchTab({ url: '/pages/services/services' });
  },

  goContact() {
    wx.switchTab({ url: '/pages/contact/contact' });
  }
});
