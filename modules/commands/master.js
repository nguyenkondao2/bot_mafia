module.exports.config = {
	name: "master",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "HungCatMoi",
	description: "Lien he vs Admin bot",
	commandCategory: "Info", 
	usages: "master [key]", 
	cooldowns: 10,
	dependencies: [] 
};

module.exports.run = async ({ api, event, args, client, utils }) => {
	if (args.join() == "") {api.sendMessage("Bot hiện đang có  2 Master\n👉Sử dụng .master 1 để xem thông tin master 1\n👉Sử dụng .master 2 để xem thông tin master 2",event.threadID, event.messageID);
	}
	if (args[0] == "1") {
		return api.sendMessage("==== master 1 ====\nTên: Hoàng  Nguyên\nLiên hệ:\nhttps://www.facebook.com/82quetoi.nguyenhoang.2000/", event.threadID, event.messageID);
	}
	else if (args[0] == "2") {
		return api.sendMessage("==== master 2 ====\nTên: Hoàng Trung Nguyên(Shiron)\nLiên hệ:\nhttps://www.facebook.com/82quetoi.nguyenhoang.2000/", event.threadID, event.messageID);
	}
}