module.exports.config = {
    name: "chuibanuser",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Hoàng Trung Nguyên",
    description: "chào bot",
    commandCategory: "system",
    usages: "",
    cooldowns: 0
};
module.exports.handleEvent = async function({ api, event, client ,Users}) {
    const list = ["hello ","Hello", "lô mn", "chào", "bot ơi", "Bot ơi", "Lô","Chào","Lô mn","2"] 
    
    
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
    
    
    Xin chào ${name}, Bot thay mặt toàn thể MN, Chúc Bạn một ngày mới tốt lành, bạn sử dụng lệnh /girlxinh để xem tt nhóm nha ${time}
    
    
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