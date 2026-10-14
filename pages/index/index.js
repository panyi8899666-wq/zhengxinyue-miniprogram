const config = require('../../config.js');
const cases = require('../../data/cases.js');

const FEATURED_IDS = [
  'coffee-pack-03',
  'pulse-outdoor',
  'mugu-bakery',
  'xinyang-safety',
  'lens-fest',
  'aera-perfume'
];

Page({
  data: {
    studioName: '正鑫越文化传播个人工作室',
    studioNameEn: 'ZHENGXINYUE CULTURE STUDIO',
    statusLine: '可接单 · 24小时内响应',
    heroTitle: '把复杂需求，做成清楚、统一、能落地的设计系统',
    heroDesc: '从品牌视觉、广告主画面到包装与空间应用，包月制合作，一个人对接到底。',
    featured: [],
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
        title: c.title,
        category: c.category,
        isReal: c.isReal,
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
