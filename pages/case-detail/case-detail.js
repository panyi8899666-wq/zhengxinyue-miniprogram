const config = require('../../config.js');
const cases = require('../../data/cases.js');

Page({
  data: {
    title: '',
    category: '',
    tags: [],
    isReal: false,
    realTag: '',
    realBackground: '',
    rationale: '',
    views: [],
    hasImages: false
  },

  onLoad(options) {
    const id = options.id || '';
    const c = cases.find(x => x.id === id);
    if (!c) {
      wx.showToast({ title: '案例不存在', icon: 'none' });
      return;
    }
    const base = config.IMAGE_BASE_URL;
    const views = c.views.map(v => ({
      label: v.label,
      src: base ? base + v.src : ''
    }));
    this.setData({
      title: c.title,
      category: c.category,
      tags: c.tags,
      isReal: c.isReal,
      realTag: c.realTag || '',
      realBackground: c.realBackground || '',
      rationale: c.rationale,
      views,
      hasImages: !!base
    });
    wx.setNavigationBarTitle({ title: c.title });
  },

  previewImage(e) {
    const src = e.currentTarget.dataset.src;
    if (!src) return;
    const urls = this.data.views.map(v => v.src).filter(Boolean);
    wx.previewImage({ current: src, urls });
  },

  goContact() {
    wx.switchTab({ url: '/pages/contact/contact' });
  }
});
