module.exports.config = {
	name: "pending",
	version: "1.0.5",
	credits: "Mirai Team",
	hasPermssion: 2,
	description: "Quản lý tin nhắn chờ của bot",
	commandCategory: "system",
	cooldowns: 5
};

module.exports.languages = {
    "vi": {
        "invaildNumber": "%1 không phải là một con số hợp lệ",
        "cancelSuccess": "Đã từ chối thành công %1 nhóm!",
        "notiBox": "𝙆ế𝙩 𝙉ố𝙞 𝙏𝙝à𝙣𝙝 𝘾ô𝙣𝙜, 𝘽𝙤𝙩 Đượ𝙘 Đ𝙞ề𝙪 𝙃à𝙣𝙝 𝘽ở𝙞 𝙉𝙜𝙪𝙮ễ𝙣 𝙃𝙤à𝙣𝙜 𝙋𝙝ú𝙘. 𝙈ọ𝙞 𝘾𝙝𝙞 𝙏𝙞ế𝙩 𝙑𝙪𝙞 𝙇ò𝙣𝙜 𝙇𝙞ê𝙣 𝙃ệ 𝙑ớ𝙞 𝙏ô𝙞 𝙌𝙪𝙖 𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠:\n𝙝𝙩𝙩𝙥𝙨://𝙬𝙬𝙬.𝙛𝙖𝙘𝙚𝙗𝙤𝙤𝙠.𝙘𝙤𝙢/𝙥𝙧𝙤𝙛𝙞𝙡𝙚.𝙥𝙝𝙥?𝙞𝙙=100040684338350\n𝘾𝙝ú𝙘 𝘾á𝙘 𝘽ạ𝙣 𝙏𝙧ả𝙞 𝙉𝙜𝙝𝙞ệ𝙢 𝘽𝙤𝙩 𝙑𝙪𝙞 𝙑ẻ 𝙑à 𝙆𝙝ô𝙣𝙜 𝙎𝙥𝙖𝙢, 𝙋𝙝á 𝘽𝙤𝙩 𝘿ướ𝙞 𝙈ọ𝙞 𝙃ì𝙣𝙝 𝙏𝙝ứ𝙘 𝙉𝙝é 𝙈ã𝙞 𝙄𝙪 𝙐𝙬𝙐 🐧❤",
        "approveSuccess": "Đã phê duyệt thành công %1 nhóm!",

        "cantGetPendingList": "Không thể lấy danh sách các nhóm đang chờ!",
        "returnListPending": "「PENDING」❮ Tổng số nhóm cần duyệt: %1 nhóm ❯\n\n%2",
        "returnListClean": "「PENDING」Hiện tại không có nhóm nào trong hàng chờ"
    },
    "en": {
        "invaildNumber": "%1 is not an invalid number",
        "cancelSuccess": "Refused %1 thread!",
        "notiBox": "Your box has been approved to use bot",
        "approveSuccess": "Approved successfully %1 threads!",

        "cantGetPendingList": "Can't get the pending list!",
        "returnListPending": "»「PENDING」«❮ The whole number of threads to approve is: %1 thread ❯\n\n%2",
        "returnListClean": "「PENDING」There is no thread in the pending list"
    }
}

module.exports.handleReply = async function({ api, event, handleReply, getText }) {
    if (String(event.senderID) !== String(handleReply.author)) return;
    const { body, threadID, messageID } = event;
    var count = 0;

    if (isNaN(body) && body.indexOf("c") == 0 || body.indexOf("cancel") == 0) {
        const index = (body.slice(1, body.length)).split(/\s+/);
        for (const singleIndex of index) {
            console.log(singleIndex);
            if (isNaN(singleIndex) || singleIndex <= 0 || singleIndex > handleReply.pending.length) return api.sendMessage(getText("invaildNumber", singleIndex), threadID, messageID);
            api.removeUserFromGroup(api.getCurrentUserID(), handleReply.pending[singleIndex - 1].threadID);
            count+=1;
        }
        return api.sendMessage(getText("cancelSuccess", count), threadID, messageID);
    }
    else {
        const index = body.split(/\s+/);
        for (const singleIndex of index) {
            if (isNaN(singleIndex) || singleIndex <= 0 || singleIndex > handleReply.pending.length) return api.sendMessage(getText("invaildNumber", singleIndex), threadID, messageID);
            api.sendMessage(getText("notiBox"), handleReply.pending[singleIndex - 1].threadID);
            count+=1;
        }
        return api.sendMessage(getText("approveSuccess", count), threadID, messageID);
    }
}

module.exports.run = async function({ api, event, getText }) {
	const { threadID, messageID } = event;
    const commandName = this.config.name;
    var msg = "", index = 1;

    try {
		var spam = await api.getThreadList(100, null, ["OTHER"]) || [];
		var pending = await api.getThreadList(100, null, ["PENDING"]) || [];
	} catch (e) { return api.sendMessage(getText("cantGetPendingList"), threadID, messageID) }

	const list = [...spam, ...pending].filter(group => group.isSubscribed && group.isGroup);

    for (const single of list) msg += `${index++}/ ${single.name}(${single.threadID})\n`;

    if (list.length != 0) return api.sendMessage(getText("returnListPending", list.length, msg), threadID, (error, info) => {
		global.client.handleReply.push({
            name: commandName,
            messageID: info.messageID,
            author: event.senderID,
            pending: list
        })
	}, messageID);
    else return api.sendMessage(getText("returnListClean"), threadID, messageID);
}