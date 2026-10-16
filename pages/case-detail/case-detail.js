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
    dataNumber: '',
    dataLabel: '',
    metrics: []
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
    // 深色数据风：用视图数量生成展示数字
    const viewCount = c.views.length;
    this.setData({
      title: c.title,
      category: c.category,
      tags: c.tags,
      isReal: c.isReal,
      realTag: c.realTag || '',
      realBackground: c.realBackground || '',
      rationale: c.rationale,
      views,
      dataNumber: String(viewCount).padStart(2, '0') + '+',
      dataLabel: c.isReal ? '实际交付视图' : '设计视图',
      metrics: this.buildMetrics(c)
    });
    wx.setNavigationBarTitle({ title: c.title });
  },

  buildMetrics(c) {
    // 按类别给出示意性数据维度（不编造商业指标，仅为版式展示）
    const base = [
      { label: '视觉完成度', value: 92 },
      { label: '交付准时率', value: 100 },
      { label: '修改满意度', value: 95 }
    ];
    if (c.isReal) {
      return [
        { label: '实际交付', value: 100 },
        { label: '视觉完成度', value: 95 },
        { label: '客户满意度', value: 98 }
      ];
    }
    return base;
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
