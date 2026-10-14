const config = require('../../config.js');

Page({
data: {
bizEmail: config.CONTACT.bizEmail,
dailyEmail: config.CONTACT.dailyEmail,
phone: config.CONTACT.phone,
phoneRaw: config.CONTACT.phoneRaw,
types: ['品牌视觉', '广告画面', '包装', '空间应用'],
typeIndex: 0,
content: '',
deadline: '',
contactWay: '',
briefText: '',
showBrief: false
},

copyText(e) {
const text = e.currentTarget.dataset.text;
const label = e.currentTarget.dataset.label || '内容';
wx.setClipboardData({
data: text,
success: () => wx.showToast({ title: label + '已复制', icon: 'success'})
});
},

callPhone() {
wx.makePhoneCall({ phoneNumber: this.data.phoneRaw});
},

onTypeChange(e) {
this.setData({ typeIndex: Number(e.detail.value)});
},

onContentInput(e) {
this.setData({ content: e.detail.value});
},

onDeadlineInput(e) {
this.setData({ deadline: e.detail.value});
},

onContactInput(e) {
this.setData({ contactWay: e.detail.value});
},

generateBrief() {
const d = this.data;
if (!d.content.trim()) {
wx.showToast({ title: '请先填写项目内容', icon: 'none'});
return;
}
if (!d.contactWay.trim()) {
wx.showToast({ title: '请留下联系方式', icon: 'none'});
return;
}
const lines = [
'',
'工作室：正鑫越文化传播个人工作室',
'项目类型：' + d.types[d.typeIndex],
'项目内容：' + d.content.trim(),
'期望交期：' + (d.deadline.trim() || '待沟通'),
'联系方式：' + d.contactWay.trim(),
'——',
'请查收，盼复。'
];
this.setData({ briefText: lines.join('\n'), showBrief: true});
wx.showToast({ title: '需求单已生成', icon: 'success'});
},

copyBrief() {
wx.setClipboardData({
data: this.data.briefText,
success: () => wx.showToast({ title: '需求单已复制，去微信粘贴发送', icon: 'none', duration: 2500})
});
}
});
