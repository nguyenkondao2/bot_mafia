module.exports.config = {
	name: "gai",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "vip cá",
	description: "Random ảnh gái xinh nhất Việt Nam :))",
	commandCategory: "hay",
	usages: "gai",
	cooldowns: 3
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://girl.ocvat2810.repl.co/').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/gai.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/gai.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/gai.${ext}`)).on("close", callback);
			})
}