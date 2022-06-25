module.exports.config = {
  name: "down",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "HĐGN",
  description: "Tải tệp đính kèm",
  commandCategory: "Group",
  usages: "",
  cooldowns: 0,
};
const request = global.nodemodule["request"];
const fs = require('fs')
const axios = require('axios')
module.exports.run = async function({ api, event, client, models, Threads, args }) {



var getURL = await request.get(event.messageReply.attachments[0].url);

        var pathname = getURL.uri.pathname;

        var ext = pathname.substring(pathname.lastIndexOf(".") + 1);

        var path = __dirname + `/cache/`+event.messageID+`.${ext}`;



var abc = event.messageReply.attachments[0].url;
    let getdata = (await axios.get(`${abc}`, { responseType: 'arraybuffer' })).data;

  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));
if ( ext == "mp4" ) {
api.sendMessage(`Đã lưu video ở `+path,event.threadID,event.messageID) }
else {
api.sendMessage(`Đã lưu ảnh ở `+path,event.threadID,event.messageID) }

}