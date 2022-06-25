module.exports.config = {
    name: "chuibanuser",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Phạm Minh Duy",
    description: "Chửi bot",
    commandCategory: "system",
    usages: "",
    cooldowns: 0
};
module.exports.handleEvent = async function({ api, event, client ,Users}) {
const list = ["Bot lồn", "Bot cặc", "Bot ngu", "bot ngu", "bot gà", "Bot gà", "con bot lol", "Con bot lol", "Bot ngu lol", "bot ngu lol", "Bot chó", "bot chó", "dm bot", "Dm bot", "Đm bot", "đm bot", "dmm bot", "Dmm bot", "Đmm bot", "đmm bot", "đb bot", "Đb bot", "bot điên", "Bot điên", "bot dở", "Bot dở", "Bot khùng", "bot khùng", "đĩ bot", "Đĩ bot", "Địt mẹ bot", "con bot lồn", "Con bot lòn", "cmm bot", "Cmm bot", "clap bot", "Clap bot", "bot ncc", "Bot ncc", "bot oc", "Bot oc", "bot óc", "Bot óc", "bot óc chó", "Bot óc chó", "cc bot", "Cc bot", "Bot sida", "Bot tiki", "Lozz bottt", "lol bot", "Lol bot", "Loz bot", "loz bot", "lồn bot", "Lồn bot", "bot lồn", "Bot lồn", "bot lon", "Bot lon", "Bot cac", "bot cac", "bot nhu lon", "Bot nhu lon", "bot như cc", "Bot như cc", "bot như bìu", "Bot như bìu", "Bot sida", "bot sida", "bot fake", "Bot fake", "Hanh ngu", "Hoàng Anh ngu"]


    var { threadID, messageID,senderID} = event;
const moment = require("moment-timezone");
const time = moment.tz("Asia/Ho_Chi_minh").format("HH:mm:ss || D/MM/YYYY");
if ( list.includes(event.body )  ) {
const name = await Users.getNameUser(senderID)
var threadInfo = await 
api.getThreadInfo(event.threadID);
let data = (await Users.getData(senderID)).data || {};
                data.banned = true;
                data.reason = `Chửi bot là ${event.body}`;
                data.dateAdded = time;
                await Users.setData(senderID, { data });
                global.data.userBanned.set(senderID, { reason: data.reason, dateAdded: data.dateAdded });
api.sendMessage({body: `»   Cảnh Báo   «


Xin chào ${name}, bạn thật ngu ngok khi đã chửi bot câu: ${event.body} nên đã được vinh hạnh cho một vé vào sổ ban vào lúc ${time}


💌 Liên hệ Admin bot qua Facebook: https://www.facebook.com/82quetoi.nguyenhoang.2000/

để được gỡ ban nhé bạn 

🎭Thả tym cho bạn nè <3`,
mentions: [{ tag: name, id: event.senderID }] },threadID,messageID)
api.sendMessage({body: `=== Bot Notification ===

🆘 Tội Nhân: ${name}
🔰 ID: ${senderID}
🤷‍♂️ Box: ${threadInfo.threadName}
😥 Chửi bot: ${event.body}

Đã bị ban khỏi hệ thống
`, mentions: [{ id: senderID, tag: name}]},global.config.ADMINBOT[0])
}} 
module.exports.run = () => {}