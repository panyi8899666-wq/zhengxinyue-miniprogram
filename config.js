/**
 * 全局配置
 *
 * IMAGE_BASE_URL：公网图片地址。
 * 网站公开发布后，把案例图片上传到公网（如 CDN / 对象存储），
 * 在此填入以 / 结尾的地址，例如：
 *   'https://cdn.example.com/zhengxinyue/'
 * 留空字符串时，小程序内所有图片位显示占位样式，不会破图。
 */
module.exports = {
  IMAGE_BASE_URL: '',

  CONTACT: {
    bizEmail: '784005231@qq.com', // 商务合作
    dailyEmail: 'panyi8899666@gmail.com' // 日常联系
    // 注：过审要求，联系页仅展示邮箱，不放电话与二维码
  },

  PRICE: {
    monthly: '¥5,000/月',
    quarterly: '¥14,250/季',
    usdNote: '≈ USD 690 / MONTH', // 全英文备注
    productionNote: '制作按规格、数量、材质、工艺另计'
  }
};
