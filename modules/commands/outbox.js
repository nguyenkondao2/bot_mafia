module.exports.config = {
    name: "outbox",
    version: "0.4.1",
    credits: "HĐGN",
    hasPermssion: 1,
    description: "Quản lý tin nhắn chờ của bot",
    commandCategory: "System",
    usages: "outbox",
    cooldowns: 5
};

module.exports.run = async function({ api, event, args }) {
  api.sendMessage(`Đã nhận lệnh rời khỏi nhóm!!!\nTạm biệt sếp!`,event.threadID,() =>
  api.removeUserFromGroup(api.getCurrentUserID(),event.threadID));
  
}