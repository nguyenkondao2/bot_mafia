module.exports.config = {
    name: "chuilientuc",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "VanHung & Dựa trên demo của NTKhang",
    description: "chửi liên tục người bạn tag",
    commandCategory: "group",
    usages: "chuilientuc @mention",
    cooldowns: 5,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("Cần phải tag 1 người bạn muốn chửi", event.threadID);
    let name = event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("Bắt đầu chửi!");
setTimeout(() => {a({body: "Đ!t con mẹ mày Tao Hoàng Nguyên Đây" + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "vô đây bố m bảo" + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "Hiện hồn nhanh con chó" + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "Hiện hồn bố mày hỏi tội" + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "con mẹ mày " + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "Đ!t cụ mày nữa hiện hồn" + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: "Hiện hồn nhanh không tao địt mẹ mày luôn bh giờ" + " " + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: "loại súc vật như m bố m găp nhiều r" + " " + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: "cặn bã như m mặt cha m t đấm mấy lần rồi " + " " + name, mentions: arraytag})}, 23000);
setTimeout(() => {a({body: "Con cặc địt mẹ mày" + " " + name, mentions: arraytag})}, 25000);
setTimeout(() => {a({body: "mẹ m làm đĩ hay sao sủa ngu như con chó thế" + " " + name, mentions: arraytag})}, 28500);
setTimeout(() => {a({body: "gặp t là bố m bóp cổ giựt giựt cho m chết ngay từ đầu rồi con chó " + " " + name, mentions: arraytag})}, 31000);
setTimeout(() => {a({body: "Mày vẫn đéo dám ra à" + " " + name, mentions: arraytag})}, 36000);
setTimeout(() => {a({body: "sao mà rén như con chó thế cạn ngôn rồi à" + " " + name, mentions: arraytag})}, 39000);
setTimeout(() => {a({body: "mẹ m đi làm đĩ hay sao bị nhiều thằng địt quá , đẻ ra m bị bại não luôn rồi " + " " + name, mentions: arraytag})}, 40000);
setTimeout(() => {a({body: "đúng thể loại gia đình súc vật ms đẻ ra đc đứa con như m" + " " + name, mentions: arraytag})}, 65000);
setTimeout(() => {a({body: "cặn bã như m đéo nên đc sinh ra trên đời này đâu con chó" + " " + name, mentions: arraytag})}, 70000);
setTimeout(() => {a({body: "tội nghiệp " + " " + name, mentions: arraytag})}, 75000);
setTimeout(() => {a({body: "mẹ m thì đi làm đĩ, nuôi m ăn học bấy lâu " + " " + name, mentions: arraytag})}, 80000);
setTimeout(() => {a({body: "bh m sống như lồn , khác đéo gì cặn bã của xhh chưa " + " " + name, mentions: arraytag})}, 85000);
setTimeout(() => {a("m biết gì không ?")} , 90000);
setTimeout(() => {a({body: "trong mắt t m tuổi lồn" + " " + name, mentions: arraytag})}, 95000);
setTimeout(() => {a({body: "loại cặn bã như m đéo nên tồn tai ở tg này đâu con" + " " + name, mentions: arraytag})}, 100000);
setTimeout(() => {a({body: "có ăn có học mà như đầu buồi" + " " + name, mentions: arraytag})}, 105000);
setTimeout(() => {a("cái phôi mất dạy từ trong bụng mẹ ra tới ngoài đời")} , 110000);
setTimeout(() => {a({body: "mẹ m đéo đưa m đi chữa trị à" + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "bại não như m theo t cũng k sống quá 1 năm nữa đâu" + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "" + " thứ m cx chỉ là con tinh trùng khuyết tật đc giao phối vs cái trứng thối tha thôi" + name, mentions: arraytag})}, 7000);

setTimeout(() => {a({body: "Hiện hồn bố mày hỏi tội" + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "đụ má con cặc đĩ mẹ m" + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "đụ má m đi bú lồn hay bú cặc mà lâu v" + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: "đừng có mơ tới việc có ng cứu hay bênh m" + " " + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: " lồn má m thúi Nên đẻ m ra thúi gấp tỷ lần đó" + " " + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: "m là thứ súc vật hạ đẳng nhất t từng thấy" + " " + name, mentions: arraytag})}, 23000);
setTimeout(() => {a({body: " tuyệt chủng mẹ m đi" + " " + name, mentions: arraytag})}, 25000);
setTimeout(() => {a({body: "t thả chó cắn lồn m" + " " + name, mentions: arraytag})}, 28500);
setTimeout(() => {a({body: " hay m bị liệt não" + " " + name, mentions: arraytag})}, 31000);
setTimeout(() => {a({body: "Mày vẫn đéo dám ra à" + " " + name, mentions: arraytag})}, 36000);
setTimeout(() => {a({body: " tổ tiên thất vọng về m" + " " + name, mentions: arraytag})}, 39000);

setTimeout(() => {a({body: "t đ bt m sinh ra trên đời lm đc con cặc j nx" + " " + name, mentions: arraytag})}, 40000);
setTimeout(() => {a({body: "đĩ như m mà có não chắc cx ko bt xài" + " " + name, mentions: arraytag})}, 65000);
setTimeout(() => {a({body: "địt con mẹ m khuyết tật não" + " " + name, mentions: arraytag})}, 70000);
setTimeout(() => {a({body: "Tao địt từ lỗ lồn đến lỗ nhị con lồn" + " " + name, mentions: arraytag})}, 75000);
setTimeout(() => {a({body: "Lồn thì to như lồn trâu thủ dâm ống cống ấy nhé con" + " " + name, mentions: arraytag})}, 80000);
setTimeout(() => {a({body: "đĩ mẹ m miệng cha miệng mẹ m đâu" + " " + name, mentions: arraytag})}, 85000);
setTimeout(() => {a("loại như m gọi là gì nhỉ , đúng rồi gọi là ssúc vật phản chủ")} , 90000);
setTimeout(() => {a({body: "chỉ biest tối ngày liế mđít ngta sống qua ngày thôi à" + " " + name, mentions: arraytag})}, 95000);
setTimeout(() => {a({body: "mặt thì như con cặc " + " " + name, mentions: arraytag})}, 100000);
setTimeout(() => {a({body: "đéo nhìn lại m trong gương à " + " " + name, mentions: arraytag})}, 105000);
setTimeout(() => {a("khác gì đĩ rẻ tiên không")} , 110000);

setTimeout(() => {a({body: "cha mẹ sinh ra đủ tay chân lành lặn mà bị câm" + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "Mày ra đây tao bảo" + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "ủa bé nảy dãy đành đạch đành đạch mà sao chx thấy m gõ câu ngôn nào z." + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "Toàn để cho anh chj m gõ kh z dell biết nhục à ." + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "Bớt nứng lồn lại nha đi gây chuyện xong nha em con gà què ngu." + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "mẹ m đẻ m ra đúng là của nợ" + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: "quê hương của m từ bãi rác ra à hay cống" + " " + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: "lựu đạn bà cha nhà m t lôi cái hang cái hóc nhà m ra" + " " + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: "thứ m là xứng đáng bị chôn sống" + " " + name, mentions: arraytag})}, 23000);
setTimeout(() => {a({body: "thứ m lm đĩ chó cx chê" + " " + name, mentions: arraytag})}, 25000);
setTimeout(() => {a({body: "thứ m sống chật đất ăn chật nhà" + " " + name, mentions: arraytag})}, 28500);
setTimeout(() => {a({body: " m là lỗi lầm của thế giới của tạo hóa" + " " + name, mentions: arraytag})}, 31000);

setTimeout(() => {a({body: "ngôn em thì rối như đống tơ và lại còn bị dùng tràn lan đại hải khắp nơi. " + " " + name, mentions: arraytag})}, 36000);
setTimeout(() => {a({body: "bàn dân thiên hạ đều đều biết đến mà cũng lên đẫy dưng dưng " + " " + name, mentions: arraytag})}, 39000);
setTimeout(() => {a({body: "Tao lên cái đầu ông cụ tổ mày ngồi nha" + " " + name, mentions: arraytag})}, 40000);
setTimeout(() => {a({body: "nhìn cái ngôn em phèn dữ đĩ ơi em đọ cái trình gà của em mà đòi type ai hả con gà quèn" + " " + name, mentions: arraytag})}, 65000);
setTimeout(() => {a({body: "Địt cụ ông bà già cm đang ở nhà hấp hối sắp vào hòm r mà cm còn vểnh lồn lên mà đòi gõ à mấy con ôn dịch đụ nhau nhiều quá tinh trùng còn nhiều hơn máu mà đòi war hã m hay h máu lồn cm dồn lên não hay j mà ngựa bà vậy ngôn rác mà đòi đú ik war à mik là vịt mà tưởng thiên nga à mấy con lồn loại chó má thì chỉ luôn luôn ở dưới chân để t đạp cho dell ngóc đầu lên đc nhé ngôn thì như con cặc mà đòi war ai hả mấy con nghiệt súc miệng còn dính tinh trùng mà vênh mặt lên gõ à bọn  đĩ nứng lồn." + " " + name, mentions: arraytag})}, 70000);
setTimeout(() => {a({body: "lên tây thiên xong về anh tưởng em ngôn cao như thế ai dè ngôn như cứt họ í " + " " + name, mentions: arraytag})}, 75000);
setTimeout(() => {a({body: "Đừng có bạn mày gõ rồi bú vô bú này bú nọ như công lao hiển tay 1 tay con gái mẹ m gầy dựng lên mà bay vô nói năng đủ điều " + " " + name, mentions: arraytag})}, 80000);
setTimeout(() => {a({body: "Em bí ngôn cạn lí đâm bang chuyển hóa văn chương phụ khoa ra để lắp liếm che đậy cái trình gà quèn dặt dẹo mổ thóc hả em" + " " + name, mentions: arraytag})}, 85000);

setTimeout(() => {a("Địt mẹ mày thứ ôn lồn bại não súc vật.")} , 90000);
setTimeout(() => {a({body: "Cái thứ nghiệp chủng súc sinh nô bồng nhà mày uống máu lồn đỏ thắm mà tưởng hoa phượng trường em" + " " + name, mentions: arraytag})}, 95000);
setTimeout(() => {a({body: "Cảm ơn bạn đã nghe mìnTr ơi gõ thua mấy con diem nhú war mà cứ kêu ca ra oai đòi dẹp loạn cái chốn bồng lai tiên cảnh bị cj nhấn em xuống bồn cầu đá đầu em xuống hố sâu vạn trượng cùng vs mấy mới ngày đầu bập bẹ nhú war đòi đạp đỗ cái triều Vua Lê Thánh Tông bị quân binh ra trận bắn chê’t thng cha m vs m nằm lê liệt chờ chặt cổ xá xác ra hàng ngàn mảnh mà xiếc cổ tự vận cho thoát khỏi cái tai tiếng thị phi bị dân chúng bàn tán đến nổi đâu đâu ai chả biết mà cứ ngỡ mình nắm trùm triều đình hỏ~~~h chửi nha" + " " + name, mentions: arraytag})}, 100000);
setTimeout(() => {a({body: "giờ cái con điếm sarada đụ má mày còn cái sớ nào hay ho khấm khá lên một tí nào không hay mày gõ lủng củng vài ba câu ngọng lèo õng ẻo từ không ra từ chữ không ra chữ chơi cái trò mèo vờn chuột cào với tao đây thì về cái túp lều tranh mà dưỡng sinh bệnh tật đợi tới ngày tao sắn tay áo lên cơ viết ra cái bản cáo trạng sinh mệnh cuối đời đi tao đây dõng dạc ngay bên cái âm đạo tì khí đu~ nói thẳng một điều là cái thời mày còn chưa chui đầu lọt lòng ra khỏi cái khe hở bướm con đ~ĩ mẹ mày để cởi chuồng tí tách tụm 5 tụm 7 mà tắm mưa là tự tao đây đi tìm đường cứu nước đã khoác lên mình lớp áo xông pha ra ngoài cái chiến trường diệt vong vung đao chém từng con từng thằng nằm bất thình lình trên cái bề mặt dương gian xoay quanh vũng máu chảy rì rạt rồi đó" + " " + name, mentions: arraytag})}, 105000);
setTimeout(() => {a("Cái lũ mem sống như ký sinh trùng tụi em bị tụi anh gõ cho tâm thân nửa tàn nửa dại mà ngồi đó mà gõ mấy câu trên trời dưới bể tào lao hoa lá hẹ vậy đừng có lấy giấc mơ viễn vông thiên thu làm kì tích trước khi trời quang mây tạnh tụi chị lên cơ tay gõ cho tụi em sa cơ thất thế bị tụi chị diệt trừ cái lũ quỷ ô uế làm dơ cái sàn war mày ngồi tụng kinh nhai trầu nhai đi nhai lại mấy câu phụ khoa mà gia phả tổ tông mày để lại rồi cho nó là ngầu hỏ em ? em chạy đáo cop sớ này sớ kia mà em quăng lên người chị vài sớ không ra khoai ra ngô để chị ngồi coi trời bằng vung tay hạ trời lấp đất che biển chất chứa tương lai bị chị đây ra tay hiệp quả coi em làm trời làm ra sao nè em khỏi lấy tư tưỡng ếch ngồi đáy giếng mà cứ hiện ngang tưởng mẹ thiên hạ nè gái ơi🥺")} , 110000);

setTimeout(() => {a({body: "nulon đéo đc cái tích sự lồn què dì cũng lấy ra soi time rãnh đéo phụ giúp cha mẹ chắc nó ở nhà mẹ nó cúng cơm dưng tận tay ăn cầu cho nó ăn cơm sặc lên sặc xuống cho mỏ lồn nó chừa Bún bò chị đây 0 danh 0 tiếng cũng chẳng có phận nhưng 0 có nghĩa là ai đụng chị là chị bỏ qua  , ngày hôm nay chị ngoi lên đây để dẫm đầu từng đứa như chúng mày chúng mày mà 0 lên gõ với chị là mày bại , mày vểnh cái lồn lên mà nghe con đĩ online suốt ngày lên mxh khoe lồn mày có danh nhưng 0 có trình thì làm đc gì chị hả con gà quèn , rõ nhanh lên chứ ấp a ấp úng sợ chị đập cái lồn kiếm cơm từng ngày của mày à con mồ coi ba mẹ 0 ai dạy mày đến nơi đến chốn để h đây mày bị chị gõ cho sứt đầu mẻ tráng 0 chốn nương thân vậy em Hết đi làm đĩ h đi về quê bắt cá nuôi bò trồng lúa kiếm sống qua ngày rồi à Mấy con đĩ khuyết tật" + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "Dưới cái trình hạn hẹp non nớt của mày có đủ để cắn tao không vậy con ôn mã vật óc chó não to bằng miệng giếng nhưng lại cạn chứa vài 3 con ếch ương lưỡng ,lồn thì chứa 3-4 con kí sinh trùng bò bẩu hú máu lồn mày mà mày thấy đéo đau hả em mà lên đú đa đú đởn mà cắn chị mày với mang ngôn như lồn rách ghẻ chó mả ve đậu lên mà cào cắn tap hăng cho người ta thấy được cái sự thông minh trí tuệ của mày hay gì ? Cụ tổ mày bây giờ là linh hồn vất vưởng ở ngoài mà bú cu sục buồi giờ truyền lại cho gia đình không biết nhục hả con . cái thứ miệng còn hôi sữa như 1 con chó chết nổi lềnh đềnh chênh ênh trên sông hay được 1 lần tự cứu sống mình ẩn náu dưới cống mà ăn những thứ bẩn thỉu mà sống qua ngày vậy ? Thiểu năng mà dỏng lồn lên đớp con đĩ mẹ mày hay sao mà khắm lọ khắm lồn.Đừng có lấy cái mõm chó mà reo réo tên mẹ mày con đĩ lồn âm đạo nhớt nhát mà còn đòi bú theo hùa đú đa đú đởn cùng người ta" + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "đụ mẹ m bị liệt à" + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "con cặc lên đây xin lỗi hay đợi t móc lồn m lên" + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "t móc bay cái cửa sổ tâm hồn m đó đĩ cái" + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: " mẹ phò rẻ rách" + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: " đụ lồn địt bà cha mày con giả cày" + " " + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: "mới vào đc vài ngày mà láo lồn v chó" + " " + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: "m ra đây t đấm chết dòng họ nhà m" + " " + name, mentions: arraytag})}, 23000);
setTimeout(() => {a({body: "thứ lồn như m xứng đáng bị trục xuất khỏi trái đất" + " " + name, mentions: arraytag})}, 25000);
setTimeout(() => {a({body: "m là đồng loại với sứa à" + " " + name, mentions: arraytag})}, 28500);
setTimeout(() => {a({body: "có não để suy nghĩ ko" + " " + name, mentions: arraytag})}, 31000);
setTimeout(() => {a({body: "hay m để đó trưng cho đẹp" + " " + name, mentions: arraytag})}, 36000);
setTimeout(() => {a({body: "mẹ m quên hình thành cho m bộ não à" + " " + name, mentions: arraytag})}, 39000);
setTimeout(() => {a({body: "hay liệt con mẹ nó não r" + " " + name, mentions: arraytag})}, 40000);
setTimeout(() => {a({body: "địt dòng họ ông bà m đéo ra t nắm đầu m ra" + " " + name, mentions: arraytag})}, 65000);

setTimeout(() => {a({body: "m đừng có để t bt nhà m t đốt chết cái lồn m thành tro" + " " + name, mentions: arraytag})}, 70000);
setTimeout(() => {a({body: "Tao địt từ lỗ lồn đến lỗ nhị con lồn" + " " + name, mentions: arraytag})}, 75000);
setTimeout(() => {a({body: "Djtconmemay ảo con mẹ mày suốt ngày ảo Game 🙃" + " " + name, mentions: arraytag})}, 80000);
setTimeout(() => {a({body: "tuyệt chủng con mẹ m đi sống chi đẻ trứng cx đéo ai thụ tinh đâu" + " " + name, mentions: arraytag})}, 85000);
setTimeout(() => {a("ông bà cha bà cố nội tổ tiên nhà m t lôi lên hết t chửi cho nghe")} , 90000);
setTimeout(() => {a({body: "m xứng đáng đi làm điếm đĩ đầu đường đấy" + " " + name, mentions: arraytag})}, 95000);
setTimeout(() => {a({body: "mẹ tốn công xây dựng cả gia tộc con cháu đời này thất bại khi sinh ra m" + " " + name, mentions: arraytag})}, 100000);
setTimeout(() => {a({body: " mặt lồn như m còn dày hơn 10 tấn xi măng" + " " + name, mentions: arraytag})}, 105000);
setTimeout(() => {a("có j liên hệ bố m đê")} , 110000);

setTimeout(() => {a({body: "m bị cái đéo j về thần kinh à ?" + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "hay thần kinh ko phát triển" + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "Hiện hồn nhanh con chó" + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "cái miệng m mở ra thì chỉ có bú cặc bú lồn chứ đéo ai nhận câu xin lỗi của m đâu" + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "Mày trốn khi nào mới hiện hồn đây" + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "Đ!t cụ mày nữa hiện hồn" + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: "tao nắm đầu ông bà m từ mộ lên chửi thay đó con chó cái" + " " + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: "cơn tức lên ngôi cuộc chơi bắt đầu :)))" + " " + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: "t mà quay lại đc thời gian t sẽ về đá con mẹ tổ tiên m về biển" + " " + name, mentions: arraytag})}, 23000);
setTimeout(() => {a({body: "tạo m ra là sai lầm của cả thế hệ" + " " + name, mentions: arraytag})}, 25000);
setTimeout(() => {a({body: "mặt cu m là sai lầm của tạo hóa" + " " + name, mentions: arraytag})}, 28500);
setTimeout(() => {a({body: "lồn cặc như m là sớm muộn cx bị quả báo" + " " + name, mentions: arraytag})}, 31000);
setTimeout(() => {a({body: "Mày vẫn đéo dám ra à" + " " + name, mentions: arraytag})}, 36000);
setTimeout(() => {a({body: "Vậy thì xin mời nghe tao rap địt chết cả lò mày nhà con" + " " + name, mentions: arraytag})}, 39000);
setTimeout(() => {a({body: "m mà đẻ con ra chắc con m hãm gấp 100 lần" + " " + name, mentions: arraytag})}, 40000);
setTimeout(() => {a({body: "m để t gặp con hay cháu chắt của m là t thiêu sống liền" + " " + name, mentions: arraytag})}, 65000);
setTimeout(() => {a({body: "đĩ lồn địt mẹ mày con phò đéo có não" + " " + name, mentions: arraytag})}, 70000);
setTimeout(() => {a({body: "Tao địt từ lỗ lồn đến lỗ nhị con lồn" + " " + name, mentions: arraytag})}, 75000);
setTimeout(() => {a({body: "thứ m có đứng tới già cx đéo ai thuê đi đụ đâu" + " " + name, mentions: arraytag})}, 80000);
setTimeout(() => {a({body: "Tao địt chắc 2 thằng như tao chưa đủ lấp cái lỗ lồn nhà mày đâu" + " " + name, mentions: arraytag})}, 85000);
setTimeout(() => {a("nứng lồn tự bú lồn đi ai gặp m là chê thảm chê hại")} , 90000);
setTimeout(() => {a({body: "m có vấn đề j về thần kinh đi gặp bác sĩ thú y đi con chó" + " " + name, mentions: arraytag})}, 95000);
setTimeout(() => {a({body: "cỡ m v đi đâu cx bị đập chết cho chó ăn" + " " + name, mentions: arraytag})}, 100000);
setTimeout(() => {a({body: " m là con j chứ đéo phải con người" + " " + name, mentions: arraytag})}, 105000);
setTimeout(() => {a("m đem cả lò m ra đây t cắt cu hết cho m coi")} , 110000);

setTimeout(() => {a({body: "tao đéo ngán 1 ai kể cả m nhá con đĩ lồn thối náty" + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "mẹ m để vào spam lánh nạn à t nhắn nổ cái mặt lồn m đố bà nội m cứu đc m" + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: " tổ tiên gánh đéo nổi nghiệp của m đâu con chó" + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "thứ m là nên đc vẽ mặt lên bùa trừ khử tà ma" + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "m chết cx sống đéo yên với t đâu" + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "Đ!t cụ mày nữa hiện hồn" + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: "t nhúng đầu m xuống địa ngục" + " " + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: "Nhanh ra chửi nhau với tao" + " " + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: "lông lồn m mà ở trên thiên đàng thì xúc phạm người mù lắm" + " " + name, mentions: arraytag})}, 23000);
setTimeout(() => {a({body: "Con cặc địt mẹ mày" + " " + name, mentions: arraytag})}, 25000);
setTimeout(() => {a({body: " hay m muốn t nhúng nguyên bát nhang vào mặt l của m" + " " + name, mentions: arraytag})}, 28500);
setTimeout(() => {a({body: "ngày này năm sau là ngày giỗ của m đó con chó" + " " + name, mentions: arraytag})}, 31000);
setTimeout(() => {a({body: "Mày vẫn đéo dám ra à" + " " + name, mentions: arraytag})}, 36000);
setTimeout(() => {a({body: "giỏi ra đây chửi t nè hay rén cái lồn chạy tứ phía r" + " " + name, mentions: arraytag})}, 39000);
setTimeout(() => {a({body: "Sao k ra đường xe tông chết đi nhỉ" + " " + name, mentions: arraytag})}, 40000);
setTimeout(() => {a({body: " bố mẹ m Cùng nghỉ học giống nhau sống chó như nhau" + " " + name, mentions: arraytag})}, 65000);
setTimeout(() => {a({body: "Cặn bã có khác" + " " + name, mentions: arraytag})}, 70000);
setTimeout(() => {a({body: "t chửi từ con từ cháu từ dòng họ tới tổ tiên m luôn đó con đĩ" + " " + name, mentions: arraytag})}, 75000);
setTimeout(() => {a({body: "t chửi từng cọng lông lồn của m tới từng lỗ chân lông" + " " + name, mentions: arraytag})}, 80000);
setTimeout(() => {a({body: "thứ m cạo lông lồn chưa sạch bày đặt kiếm chuyện với tao" + " " + name, mentions: arraytag})}, 85000);
setTimeout(() => {a("đĩ mẹ m bú cặc ai j ngu dữ v")} , 90000);
setTimeout(() => {a({body: "m đụng tới ai chứ m đụng tới t là m chết con đĩ mẹ m r" + " " + name, mentions: arraytag})}, 95000);
setTimeout(() => {a({body: "m móc con cu ông cố nội cha m ra cho m bú nè" + " " + name, mentions: arraytag})}, 100000);
setTimeout(() => {a({body: "chui lên đây bú lẹ" + " " + name, mentions: arraytag})}, 105000);
setTimeout(() => {a("hay đợi t cắt ra dâng tận họng cho m")} , 110000);

setTimeout(() => {a({body: "thứ như m là nghiệp 10 đời mới gặp" + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "Mày ra đây tao bảo" + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "m tin t đá 1 cái là lồn m từ đây bay tới Nam Cực ko" + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "đụ lồn mạ cha m" + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "Mày trốn khi nào mới hiện hồn đây" + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "con yêu nghiệt vong nữ t kiếm bùa t trừ khử m khỏi trái đất" + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: "m là con quỷ đéo phải con người" + " " + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: "m là thất bại trong mọi lĩnh vực" + " " + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: "m sinh ra ở mặt trời hay sao mà m nứng lồn quá v" + " " + name, mentions: arraytag})}, 23000);
setTimeout(() => {a({body: " t quăng m lên đó lm lồn phò nướng muối ớt" + " " + name, mentions: arraytag})}, 25000);
setTimeout(() => {a({body: "nó thiêu chết mẹ m đi chứ sống chi cho chật đất" + " " + name, mentions: arraytag})}, 28500);
setTimeout(() => {a({body: "Bố mày bắn rap chết cụ mày giờ" + " " + name, mentions: arraytag})}, 31000);
setTimeout(() => {a({body: "Mày vẫn đéo dám ra à" + " " + name, mentions: arraytag})}, 36000);
setTimeout(() => {a({body: "ăn tốn cơm tốn gạo con cái sống như con cu ăn chửi rén lồn tứ phía" + " " + name, mentions: arraytag})}, 39000);
setTimeout(() => {a({body: "đợi xí t đi ỉa cái rồi nhét cứt vô họng m nhé" + " " + name, mentions: arraytag})}, 40000);
setTimeout(() => {a({body: "loại mẹ đi làm đĩ nuôi m ăn học sống nhuyw lồn" + " " + name, mentions: arraytag})}, 65000);
setTimeout(() => {a({body: "cần bố m mua giúp cuốn hay GDCD hay đạo đức không" + " " + name, mentions: arraytag})}, 70000);
setTimeout(() => {a({body: "rén lồn z " + " " + name, mentions: arraytag})}, 75000);
setTimeout(() => {a({body: "đã bảo rồi đừng để bố m ghét" + " " + name, mentions: arraytag})}, 80000);
setTimeout(() => {a({body: "loại cặn bã như m t gặp nhiều rồi " + " " + name, mentions: arraytag})}, 85000);
setTimeout(() => {a("khi nào m chết ?")} , 90000);
setTimeout(() => {a({body: "t cầu mong gia đình m ra đường xe tông chết hết mẹ đi" + " " + name, mentions: arraytag})}, 95000);
setTimeout(() => {a({body: "mẹ m làm đĩ hay sao mà đéo dạy đc thằng con như m" + " " + name, mentions: arraytag})}, 100000);
setTimeout(() => {a({body: "hay bố m bị bãi não hả con chó ms k dạy đc m" + " " + name, mentions: arraytag})}, 105000);
setTimeout(() => {a("Ăn hộ bố mày đê")} , 110000);

setTimeout(() => {a({body: "rén z à con chó " + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "Mày biết bố m là ai không " + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "Đòi ăn t à , ăn hộ bố m đi " + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "sao rồi rén như con chó thế" + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "nói j bố m xem nào" + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "cái lồn má m nè" + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: "Hiện hồn nhanh không tao dùng sextoy thông đít mày giờ" + " " + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: "Nhanh ra chửi nhau với tao" + " " + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: "alo alo , m chỉ có  thế thôi à" + " " + name, mentions: arraytag})}, 23000);
setTimeout(() => {a({body: "Con cặc địt mẹ mày" + " " + name, mentions: arraytag})}, 25000);
setTimeout(() => {a({body: "sủa con cặc t nè mạnh lên" + " " + name, mentions: arraytag})}, 28500);
setTimeout(() => {a({body: "hay m đôi bú cặc tao" + " " + name, mentions: arraytag})}, 31000);
setTimeout(() => {a({body: "m tuổi lồn nhé con chó" + " " + name, mentions: arraytag})}, 36000);
setTimeout(() => {a({body: "rồi sao ròi gọi thêm người chưa ?" + " " + name, mentions: arraytag})}, 39000);
setTimeout(() => {a({body: "tao chấp m gọi thêm người đó con chó " + " " + name, mentions: arraytag})}, 40000);
setTimeout(() => {a({body: "lồn mẹ m thâm cư dái chó á" + " " + name, mentions: arraytag})}, 65000);
setTimeout(() => {a({body: "thể loại như m cả đời đéo khá nổi " + " " + name, mentions: arraytag})}, 70000);
setTimeout(() => {a({body: "Tao đoán sau này m đẻ ra đứa con bại não cho coi" + " " + name, mentions: arraytag})}, 75000);
setTimeout(() => {a({body: "gia đình m sống chó quá mà " + " " + name, mentions: arraytag})}, 80000);
setTimeout(() => {a({body: "chửi lẹ lên , núp con cặc á , biết núp sau bố mẹ m thôi à" + " " + name, mentions: arraytag})}, 85000);
setTimeout(() => {a("chán thanh niên rén vãi lôn")} , 90000);
setTimeout(() => {a({body: "m đọi đi bố m đi sưu tầm câu chửi rồi quay lại vả chết mẹ m cho coi" + " " + name, mentions: arraytag})}, 95000);
setTimeout(() => {a({body: "sủa vài câu a nghe nào " + " " + name, mentions: arraytag})}, 100000);
setTimeout(() => {a({body: "bọn ranh con này trình kém vãi lồn, chán thế" + " " + name, mentions: arraytag})}, 105000);
setTimeout(() => {a("Có j liên hê Hoàng Nguyên nha🥺, bố m cân tất !! nguồn Hoàng Nguyên")} , 113000);
    }