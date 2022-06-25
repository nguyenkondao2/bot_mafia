module.exports.config = {
	name: "demthoigian",
	version: "2.0.9",
	hasPermssion: 0,
	credits: "Doraemon",
	description: "cỗ máy đếm thời gian của Doraemon",
	commandCategory: "Doraemon",
	usages: "[ngày/tháng/năm]",
	cooldowns: 0
};

module.exports.run = function ({ event, args, api, getText }) {
var tip = args[0];
if (!tip) return api.sendMessage(`Doraemon said: Sai cách rồi bạn ơi UwU.`,event.threadID,event.messageID);
else {
	const axios = require('axios');
	const moment = require("moment-timezone");
	var hientai = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY");
	var time = `${tip} => ${hientai}`;
	axios.get(`https://le31.glitch.me/age?q=${time}`).then(res => {
     let mess = res.data.data;
     return api.sendMessage(`Đã tải dữ liệu thành công✅\n⚡Mốc thời gian được xác định là : ${tip}\nĐến hiện tại là : \n${mess}`,event.threadID,event.messageID);
	});
}
}