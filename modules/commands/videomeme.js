module.exports.config = {
	name: "videomeme",
	version: "2.0.9",
	hasPermssion: 0,
	credits: "HĐGN",
	description: "Tổng hợp video meme",
	commandCategory: "random-video",
	usages: "videomeme",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = global.nodemodule["axios"];
    const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];
	axios.get('https://api.leanhtruong.com/Video/Meme/meme.php').then(res => {
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/videomeme.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/videomeme.${ext}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/videomeme.${ext}`)).on("close", callback);
			})
}