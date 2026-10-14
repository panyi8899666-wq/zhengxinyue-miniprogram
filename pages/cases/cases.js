const config = require('../../config.js');
const cases = require('../../data/cases.js');

const FILTERS = ['全部', '品牌视觉', '广告画面', '包装', '空间应用'];

Page({
  data: {
    filters: FILTERS,
    activeFilter: '全部',
    list: []
  },

  onLoad() {
    this.applyFilter('全部');
  },

  onShow() {
    // 从详情页返回时保持当前筛选
    this.applyFilter(this.data.activeFilter);
  },

  applyFilter(filter) {
    const base = config.IMAGE_BASE_URL;
    const list = cases
      .filter(c => filter === '全部' || c.category === filter)
      .map(c => ({
        id: c.id,
        title: c.title,
        category: c.category,
        tags: c.tags,
        isReal: c.isReal,
        realTag: c.realTag || '',
        cover: base ? base + c.views[0].src : ''
      }));
    this.setData({ activeFilter: filter, list });
  },

  onFilterTap(e) {
    this.applyFilter(e.currentTarget.dataset.filter);
  },

  goDetail(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({ url: '/pages/case-detail/case-detail?id=' + id });
  }
});
