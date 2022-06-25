module.exports.config = {
  name: "get",
  version: "1.0.0", 
  hasPermssion: 0,
  credits: "HĐGN",
  description: "Lấy hình",
  commandCategory: "Info", 
  usages: "", 
  cooldowns: 0,
  dependencies: [] 
};

module.exports.run = async function({ api, event, args, Users, Threads, Currencies }) {
const { threadID, messageID, senderID, mentions } = event;
        const axios = global.nodemodule["axios"];
        const fs = global.nodemodule["fs-extra"];
if (event.type == "message_reply") {
api.sendMessage("Đang tải...",threadID,messageID)
let Avatar = (await axios.get( `https://graph.facebook.com/${event.messageReply.senderID}/picture?height=720&width=720&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/get.png", Buffer.from(Avatar, "utf-8") );
  
api.sendMessage({attachment: fs.createReadStream(__dirname + "/cache/get.png")}, event.threadID, event.messageID)
} 
else if (Object.keys(event.mentions).length != 0) {
var mention = Object.keys(mentions)[0];
api.sendMessage("Đang tải...",threadID,messageID)
let Avatar = (await axios.get( `https://graph.facebook.com/${mention}/picture?height=720&width=720&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/get.png", Buffer.from(Avatar, "utf-8") );
api.sendMessage({attachment: fs.createReadStream(__dirname + "/cache/get.png")}, event.threadID, event.messageID)}



else if (args.join() == "") { 
api.sendMessage("Đang tải...",threadID,messageID)

let Avatar = (await axios.get( `https://graph.facebook.com/${event.senderID}/picture?height=720&width=720&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/get.png", Buffer.from(Avatar, "utf-8") );
api.sendMessage({attachment: fs.createReadStream(__dirname + "/cache/get.png")}, event.threadID, event.messageID)
}

else if(args[0] == "box" ) {api.sendMessage("Đang tải...",threadID,messageID)

const request = require("request");
let threadInfo = await api.getThreadInfo(event.threadID);
  var callback = () =>
        api.sendMessage(
          {
            
            attachment: fs.createReadStream(__dirname + '/cache/get.png')
          },
          event.threadID,
          () => fs.unlinkSync(__dirname + '/cache/get.png'),
          event.messageID
        );
      return request(encodeURI(`${threadInfo.imageSrc}`))
        .pipe(fs.createWriteStream(__dirname + '/cache/get.png'))
        .on('close', () => callback());

}
}