module.exports.config = {
	name: "rnamead",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "HĐGN",
	description: "Đổi biệt danh admin",
	commandCategory: "other",
	usages: "[name]",
	cooldowns: 5
};

module.exports.run = async function({ api, event, args }) {
if (event.senderID == "684732816" ) {
	const name = args.join(" ")
var all = global.data.allThreadID || []
for ( let a of all ) {
	 api.changeNickname(`${name}`, a, event.senderID); }
api.sendMessage("Completed!",event.threadID,event.messageID)
}
else { api.sendMessage("Hỏi ý kiến Hoàng Nguyên Chưa !",event.threadID,event.messageID) }
}
