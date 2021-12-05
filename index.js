/* 

HAI BANG SCRIPT INI MURNI HASIL RECODE AN SENDIRI
BUKAN SC HASIL REUPLOAD
HARGAI PEMBUAT SC YA
REUPLOAD?CREDIT WOY
 THANKS TO
❑ Tuhan Ku
❑ Orang Tua Ku
❑ Bailyes
❑ Heroku
❑ Yudha
❑ Lord Nayla🤙
❑ Lord Zeeone 🤙
❑ Lord Denis🤙
❑ Lord Yogi🤙
❑ Yeriko < saia > 
❑ Penyedia Apikey,Module,Dll
❑ Semua user script



Kalo Mau Edit Owner Di setiing.json sama ./src/setting2.json Ya
Di sini edit yg atas² aja buat vcard owner+apikey nya

beberapa udh gw siapin buat bot v2 mweheh
*/

const {
    WAConnection,
	MessageType,
	Presence,
	MessageOptions,
	Mimetype,
	WALocationMessage,
	WA_MESSAGE_STUB_TYPES,
	WA_DEFAULT_EPHEMERAL,
	ReconnectMode,
	ProxyAgent,
	ChatModification,
	GroupSettingChange,
	waChatKey,
	mentionedJid,
	processTime,
	Browsers,
} = require("@adiwajshing/baileys")
const moment = require("moment-timezone")
const speed = require('performance-now')
const { spawn, exec, execSync } = require("child_process")
const ffmpeg = require('fluent-ffmpeg')
const twitterGetUrl = require("twitter-url-direct")
//const crypto = require('crypto')
const googleImage = require('g-i-s')
const brainly = require('brainly-scraper')
const fetch = require('node-fetch');
const request = require('request');
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const axios = require("axios")
const fs = require("fs-extra")
const util = require('util')
const got = require("got");
const xa = require("xfarr-api")
//const hx = require('hxz-api');
//const { EmojiAPI } = require("emoji-api")
//const emoji = new EmojiAPI()
const qrcodes = require('qrcode');
const imgbb = require('imgbb-uploader');
const os = require('os');
const Mfake = fs.readFileSync ('./media/ganteng.jpg')
const Mthumb = fs.readFileSync('./media/ganteng.jpg')
const { virtex } = require('./virtex/virtex')
const { virtex2 } = require('./virtex/virtex2')
const { virtex3 } = require('./virtex/virtex3')
const { virtex4 } = require('./virtex/virtex4')
const { virtex5 } = require('./virtex/virtex5')
const { virtex6 } = require('./virtex/virtex6')
const { virtex7 } = require('./virtex/virtex7')
const { virtex8 } = require('./virtex/virtex8')
const { virtex9 } = require('./virtex/virtex9')
const { ngazap } = require('./virtex/ngazap')
const { virtag } = require('./virtex/virtag')
const { emoji2 } = require('./virtex/emoji2')
const timeWib = moment.tz('Asia/Jakarta').format('DD/MM')	
// stickwm
const Exif = require('./lib/exif');
const exif = new Exif();

const { downloadMenu, infoMenu, gameMenu, groupMenu, funMenu, wibuMenu, ownerMenu, stickerMenu, otherMenu, rulesBot, islamMenu, sertiMenu, ceritaMenu, makerMenu,dewasaMenu, toolsMenu} = require('./message/help.js')
const { getBuffer, getGroupAdmins, getRandom, runtime, sleep } = require('./lib/myfunc')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetch')
//const simple = require("./lib/simple.js");
const { color, bgcolor } = require('./lib/color')
const { mess } = require('./message/mess')
const { webp2mp4File } = require('./lib/webp2mp4')
const { Toxic } = require('./lib/Toxic.js')
const { cmdadd } = require('./lib/totalcmd.js')
const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./lib/uploadimage')
const { isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
const { onGoing, dadu, asupan } = require("./lib/otakudesu.js")
const { mediafireDl } = require('./lib/mediafire.js')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { yta, ytv, igdl, upload } = require('./lib/ytdl')
//const { wikiSearch } = require('./lib/wiki.js')
const premium = require("./lib/premium");
const afk = require("./lib/afk");
const _sewa = require("./lib/sewa");
const level = require("./lib/level");
const atm = require("./lib/atm");
const { herolist } = require('./lib/herolist.js')
const { herodetails } = require('./lib/herodetail.js')
const set = JSON.parse(fs.readFileSync('./src/setting2.json'))
//Biarin
var kuis = false
hit_today = []
ky_ttt = []
const setGelud = require('./lib/gameGelud.js')
const game = require("./lib/game");
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
//Apikey
//Storage
let setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
let imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
let videonye = JSON.parse(fs.readFileSync('./temp/video.json'))
let audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
let fakeimage = fs.readFileSync("./media/ganteng.jpg")
let errorImg = 'https://i.ibb.co/FBm52Pt/1e0fe6a08b67.jpg'
let setting = JSON.parse(fs.readFileSync('./setting.json'))
undef2 = fs.readFileSync('./tag1.webp')
owner = setting.owner
gamewaktu = setting.gamewaktu
petik = '```'
readGc = set.readGc
readPc = set.readPc
autovn = set.autovn
autoketik = set.autoketik
antidel = set.antidel
antical = set.antical
fake = 'No fake'

// Biarin Udh Nyambung Ke setting yg di src
NamaBot = set.NamaBot
NamaOwner = set.NamaOwner
NOwner = set.NomorOwner
NomorOwnz = set.NomorOwnz
NomorOwnc = set.NomorOwnc
HunterApi = set.HunterApi
YerikoApi = set.YerikoApi
DapaApi = set.DapaApi
ZenzApi = set.ZenzApi
HardiantoApi = set.HardiantoApi
xchillds = set.xchillds
GrubBot = set.GrubBot
GrubBot2 = set.GrubBot3
FakePdf = set.FakePdf
FakeYt = set.FakeYt
FakeText = set.FakeText
TextDiButton = set.TextDiButton
HargaPermanen = set.HargaPermanen
HargaPerbulan = set.HargaPerbulan
HargaPerminggu = set.HargaPerminggu
HargaPremium = set.HargaPremium
NomorGopay = set.NomorGopay
NomorDana = set.NomorDana
NomorOvo = set.NomorOvo

const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + `FN: ${NamaOwner}\n` 
            + `ORG: Contact ${NamaOwner};\n`
            + `TEL;type=CELL;type=VOICE;waid=${NomorOwnz}:${NomorOwnc}\n`
            + 'END:VCARD'

// Database
let _register = JSON.parse(fs.readFileSync('./database/user/register.json'))
let welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
let _premium = JSON.parse(fs.readFileSync('./database/user/premium.json'));
let ban = JSON.parse(fs.readFileSync('./database/user/ban.json'));
let _afk = JSON.parse(fs.readFileSync('./database/user/afk.json'));
let _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
let glimit = JSON.parse(fs.readFileSync('./database/user/glimit.json'));
let antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'));
const antivirtex = JSON.parse(fs.readFileSync("./database/antivirtex.json"))        
const antihidetg = JSON.parse(fs.readFileSync("./database/antihidetag.json"));    
let mute = JSON.parse(fs.readFileSync('./database/group/mute.json'));
let _update = JSON.parse(fs.readFileSync('./database/bot/update.json'))
let sewa = JSON.parse(fs.readFileSync('./database/group/sewa.json'));
let _scommand = JSON.parse(fs.readFileSync('./database/bot/scommand.json'))

     const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var tampilUcapan = '🌃Malam Kak'
                                        }
if(time2 < "19:00:00"){
var tampilUcapan = '🌇Petang Kak'
                                         }
if(time2 < "18:00:00"){
var tampilUcapan = '🌁️Sore Kak'
                                         }
if(time2 < "15:00:00"){
var tampilUcapan = '🌅Siang Kak'
                                         }
if(time2 < "11:00:00"){
var tampilUcapan = '🌄Pagi Kak'
                                         }
if(time2 < "05:00:00"){
var tampilUcapan = '🌃Malam Kak'
                                         }

// Sticker Cmd
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    _scommand.push(obj)
    fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return _scommand[position].chats
    }
}


const checkSCommand = (id) => {
    let status = false
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            status = true
        }
    })
    return status
}

module.exports = dha = async (dha, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		if (mek.key.id.startsWith('3EB0') && mek.key.id.length === 12) return
		global.ky_ttt
		global.blocked
		mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
	    const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
		const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
        const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
		const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar()
		const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar()
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/gi) : '!'
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()	
		const command1 = body.slice(2).trim().split(/ +/).shift().toLowerCase()	
		const args = body.trim().split(/ +/).slice(1)
		hit_today.push(command)
		const arg = body.substring(body.indexOf(' ') + 1)
		const ar = args.map((v) => v.toLowerCase())
		const argz = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix) 
		if (isCmd) cmdadd()
		const totalhit = JSON.parse(fs.readFileSync('./database/totalcmd.json'))[0].totalcmd
        const q = args.join(' ')
       // const m = simple.smsg(dha, mek);
	    const query = (teks) => {dha.sendMessage(from, `Kasih Query Woy`, text, {quoted:mek,contextInfo: {forwardingScore: 508, isForwarded: true}})}				
        const botNumber = dha.user.jid
        const ownerNumber = [`${NOwner}`,`6282132242606@s.whatsapp.net`,`6281252440658@s.whatsapp.net`]
		//const ownerName = setting.ownerName
	//	const botName = setting.botName
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let senderr = mek.key.fromMe ? dha.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const totalchat = await dha.chats.all()
		const groupMetadata = isGroup ? await dha.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
	    const more = String.fromCharCode(8206)
	    const readd = more.repeat(4001)
        const conts = mek.key.fromMe ? dha.user.jid : dha.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? dha.user.name : conts.notify || conts.vname || conts.name || '-'
        const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByreply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByreply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
		idttt = []
	    players1 = []
	    players2 = []
	    gilir = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    players1.push(t.player1)
	    players2.push(t.player2)
	    gilir.push(t.gilir)
}
	    const isTTT = isGroup ? idttt.includes(from) : false
	    isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
        const isOwner = ownerNumber.includes(senderr)
        const isPremium = premium.checkPremiumUser(sender, _premium)    
       // const isRegistered = checkRegisteredUser(sender)    
      //  const isBlockir = banned.checkBan(sender, ban)
        const isSewa = _sewa.checkSewaGroup(from, sewa)
        const isAfkOn = afk.checkAfkUser(sender, _afk)
        const isLevelingOn = isGroup ? _leveling.includes(from) : false
        const isMuted = isGroup ? mute.includes(from) : false
        const isAntiLink = isGroup ? antilink.includes(from) : false
        const isAntihidetag = isGroup ? antihidetg.includes(from) : false
        const isAntiVirtex = isGroup ? antivirtex.includes(from) : false
        const isWelkom = isGroup ? welkom.includes(from) : false
		const dfrply = fs.readFileSync(`./media/canss.jpg`)
		const fake = fs.readFileSync(`./media/canss.jpg`)
		//F New
		const floc3 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "liveLocationMessage": { "caption": `Runtime : ${runtime(process.uptime())}\nBy : ${NamaOwner}`} } }
////////////CONST GAME/RANDOM MATH
            const mekla1 = ['1','2','3','4','5','6','7','8','9']
            const mekla2 = ['1','2','3','4','5','6','7','8','9'] 
            const random1 = ['1','2','3','4','5','6','7','8','9'] 
            const random2 = ['1','2','3','4','5','6','7','8','9'] 
            const random3 = ['1','2','3','4','5','6','7','8','9'] 
            const random4 = ['1','2','3','4','5','6','7','8','9'] 
            const random5 = ['1','2','3','4','5','6','7','8','9'] 
            const mekla3 = mekla1[Math.floor(Math.random() * (mekla1.length))]
            const mekla4 = mekla2[Math.floor(Math.random() * (mekla2.length))]   
            const random6 = random1[Math.floor(Math.random() * (random1.length))]      
             const random7 = random2[Math.floor(Math.random() * (random5.length))]      
 const random8 = random3[Math.floor(Math.random() * (random5.length))]      
 const random9 = random4[Math.floor(Math.random() * (random5.length))]      
  const random10 = random5[Math.floor(Math.random() * (random5.length))]      
        // here button function
        selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''

        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''

        const gcount = setting.gcount
        
        const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = dha.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Pilih Disini","footerText": "SEMOGA DAPAT MEMBANTU","listType": "SINGLE_SELECT","sections": list}}, {})
            return dha.relayWAMessage(po, {waitForAck: true})
        }
        
        const isUrl = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
        }
        function monospace(string) {
            return '```' + string + '```'
        }   
        function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }
        function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
        }
        const sendMess = (hehe, teks) => {
           dha.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
	    (id == null || id == undefined || id == false) ? dha.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : dha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
 		}
        const sendText = (from, text) => {
           dha.sendMessage(from, text, MessageType.text)
        }
        const textImg = (teks) => {
           return dha.sendMessage(from, teks, text, {quoted: mek})
        }
        const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./media/sherlynn.jpg')
        }}}
       const math = (teks) => {
           return Math.floor(teks)
       }
       const kick = function(from, orangnya){
	       for (let i of orangnya){
	       dha.groupRemove(from, [i])
        }
        }
        const daftar1 = `Hai kak  ${pushname}\n\nSebelum Menggunakan Bot Verify Terlebih Dahulu Ya `
       const daftar2 = '```Ketik Tombol Di Bawah Untuk Verify Kak\nAtau #verify︎```'
       const daftar3 = [
          {
            buttonId: `#verify`,
            buttonText: {
              displayText: `𝘋𝘢𝘧𝘵𝘢𝘳 シ︎`,
            },
            type: 1,
          },]
//var hayuk0 = '[NOT VERIFIED]'
		///	if (isRegistered) {
	//		hayuk0 = '[√ VERIFIED]'
		//	}
       const kickMember = async(id, target = []) => {
           let group = await dha.groupMetadata(id)
           let owner = group.owner.replace("c.us", "s.whatsapp.net")
           let me = dha.user.jid
           for (i of target) {
           if (!i.includes(me) && !i.includes(owner)) {
           await dha.groupRemove(to, [i])
        } else {
           await dha.sendMessage(id, "Not Premited!", "conversation")
           break
        }
    }
}
       const add = function(from, orangnya){
	       dha.groupAdd(from, orangnya)
}
       const sendKontak = (from, nomor, nama, org = "") => {
	       const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:' + org + '\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	       dha.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {quoted: mek})
}
      const hideTag = async function(from, text){
	       let anu = await dha.groupMetadata(from)
	       let members = anu.participants
	       let ane = []
	       for (let i of members){
	       ane.push(i.jid)
}
	       dha.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('media/sherlynn.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}  
      		    const katalog = (teks) => {
             res = dha.prepareMessageFromContent(from, { "orderMessage": { "itemCount": 2021, "message": teks, "footerText": "*BY YERIKO*", "thumbnail":fs.readFileSync(`./media/canss.jpg`), "surface": 'CATALOG' }}, {quoted:mek})
             dha.relayWAMessage(res)
             }
                     const grupinv = (teks) => {
        	grup = dha.prepareMessageFromContent(from, { "groupInviteMessage": { "groupJid": '6282138919347-1616169743@g.us', "inviteCode": `${GrubBot}`, "groupName": `Gc ${NamaBot}`, "footerText": `*${NamaOwner}*`, "jpegThumbnail": dfrply, "caption": teks}}, {quoted:floc3})
            dha.relayWAMessage(grup)
        }
             const sendWebp = async(from, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './temp' + names + '.png', async function () {
                    console.log('selesai');
                    let ajg = './temp' + names + '.png'
                    let palak = './temp' + names + '.webp'
                    exec(`ffmpeg -i ${ajg} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${palak}`, (err) => {
                        let media = fs.readFileSync(palak)
                        dha.sendMessage(from, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(ajg)
                        fs.unlinkSync(palak)
                    });
                });
            }
       const sendMediaURL = async(to, url, text="", mids=[]) =>{
           if(mids.length > 0){
           text = normalizeMention(to, text, mids)
}
           const fn = Date.now() / 10000;
           const filename = fn.toString()
           let mime = ""
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           mime = res.headers['content-type']
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, filename, async function () {
           console.log('SUCCES');
           let media = fs.readFileSync(filename)
           let type = mime.split("/")[0]+"Message"
           if(mime === "image/gif"){
           type = MessageType.video
           mime = Mimetype.gif
}
           if(mime.split("/")[0] === "audio"){
           mime = Mimetype.mp4Audio
}
           dha.sendMessage(to, media, type, {quoted: mek, mimetype: mime, caption: text, thumbnail: Buffer.alloc(0), contextInfo: {"mentionedJid": mids}})
                     
           fs.unlinkSync(filename)
});
}
      const sendFileFromUrl = async(link, type, options) => {
           hasil = await getBuffer(link)
	       dha.sendMessage(from, hasil, type, options).catch(e => {
	       fetch(link).then((hasil) => {
	       dha.sendMessage(from, hasil, type, options).catch(e => {
	       dha.sendMessage(from, { url : link }, type, options).catch(e => {
	       reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	       console.log(e)
})
})
})
})
}
      const promoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  reply("No target..") }
           let g = await dha.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = dha.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           const res = await dha.groupMakeAdmin(to, [i])
           reply(`Hm..... @${mentioned[0].split('@')[0]} JABATANMU DINAIKAN AKU BANGGA PADAMU`)
}
}
}
      const demoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  reply("No target..") }
           let g = await dha.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = dha.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           const res = await dha.groupDemoteAdmin(to, [i])
           reply(`Hm..... @${mentioned[0].split('@')[0]} JABATANMU TURUNKAN SAYA IKUT SEDIH`)
				
}
}
}
          let authorname = dha.contacts[from] != undefined ? dha.contacts[from].vname || dha.contacts[from].notify : undefined	
          if (authorname != undefined) { } else { authorname = groupName }	
          function addMetadata(packname, author) {	
          if (!packname) packname = 'WABot'; if (!author) author = 'Bot';author = author.replace(/[^a-zA-Z0-9]/g, '');	
          let name = `${author}_${packname}`
          if (fs.existsSync(`./sticker/${name}.exif`)) return `./sticker/${name}.exif`
          const json = {	
         "sticker-pack-name": packname,
         "sticker-pack-publisher": author,
}
         const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
         const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	
         let len = JSON.stringify(json).length	
         let last	
         if (len > 256) {	
         len = len - 256	
         bytes.unshift(0x01)	
         } else {	
         bytes.unshift(0x00)	
}	
         if (len < 16) {	
         last = len.toString(16)	
         last = "0" + len	
         } else {	
         last = len.toString(16)	
}	
       const buf2 = Buffer.from(last, "hex")	
	   const buf3 = Buffer.from(bytes)	
	   const buf4 = Buffer.from(JSON.stringify(json))	
	   const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
	   fs.writeFile(`./sticker/${name}.exif`, buffer, (err) => {	
	   return `./sticker/${name}.exif`	
})	
}
 // FAKE REPLY BY YOGI PEWE
// PRODUCT
const ftok = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": dfrply //Gambarnye
					},
					"title": `${tampilUcapan} ${pushname}`, //Kasih namalu 
					"description": `Im Nataa Bot`, 
					"currencyCode": "USD",
					"priceAmount1000": "2000",
					"retailerId": `© YerikoBeban`,
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
// TROLI
const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `Im Nataa Bot`, //Kasih namalu
                            orderTitle: `Ownered By Yeriko`,
                            thumbnail: dfrply, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
// LOCATION
const floc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    liveLocationMessage: {
                    caption: `${tampilUcapan} ${pushname}`,
                    jpegThumbnail: dfrply
                          }
                        }
                      }
// DOCUMENT
const fdoc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: `${tampilUcapan} ${pushname}`, 
                    jpegThumbnail: dfrply
                          }
                        }
                      }
// VIDEO
const fvid = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${tampilUcapan} ${pushname}`,
                 "h": `${tampilUcapan} ${pushname}`,
                 'duration': '99999', 
                 'caption': `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
                       }
	                  }
// GROUPINVITE
const finv = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6288213840883-1616169743@g.us",
			"inviteCode": `${tampilUcapan} ${pushname}`,
			"groupName": `${tampilUcapan} ${pushname}`, 
            "caption": `${tampilUcapan} ${pushname}`, 
            'jpegThumbnail': dfrply
		}
	}
}
// STICKER
const fstick = {
"key": {
	  "participant": `0@s.whatsapp.net`,
      "remoteJid": "6289643739077-1613049930@g.us",
      "fromMe": false,
      "id": "3B64558B07848BD81108C1D14712018E"
    },
    "message": {
      "stickerMessage": {
        "fileSha256": "uZiOJzqOvrOo2WGjnMKgX2MMQMyasT+ZDgqUczpIBmY=",
		"pngThumbnail": dfrply,
	 "mimetype": "image/webp",
        "height": 64,
        "width": 64,
        "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE",
        "fileLength": "60206",
        "firstFrameLength": 3626,
        "isAnimated": false
      }
    },
    "messageTimestamp": "1614070775",
    "status": "PENDING"
  }
// GIF
const fgi = {
	 key: { 
         fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${tampilUcapan} ${pushname}`,
                 "h": `${tampilUcapan} ${pushname}`,
                 'duration': '99999', 
                 'gifPlayback': 'true', 
                 'caption': `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
                       }
	                  } 
// TEXT WITH THUMBNAIL
const ftex = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `Hai ${pushname}`,
                 "title": `Saya Nata-Bot`,
                 'jpegThumbnail': dfrply
                        }
	                  } 
                     }
// VN
const fvoc = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "99999",
                 "ptt": "true"
                        }
	                  } 
                     }
                     //By nayla / rimurubotz
			const reply = (teks) => {
			const B1C = {contentText: teks, footerText: `${TextDiButton}`, headerType: 1}      
			dha.sendMessage(from, B1C, MessageType.buttonsMessage, {quoted:mek,contextInfo: {forwardingScore: 508, isForwarded: true}})}		
///Button Text
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
dha.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await dha.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
dha.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await dha.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
dha.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await dha.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
dha.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
/// BY PEMUDA TEKNOLOGI TQ YA:v
const Sendbutdocument = async(id, text1, desc1, file1, doc1, but = [], options = {}) => {
media = file1
kma = doc1
mhan = await dha.prepareMessage(from, media, document, kma)
const buttonMessages = {
documentMessage: mhan.message.documentMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "DOCUMENT"
}
dha.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
// By Zeeone
//Auto Vn+Ktk
if (autovn) {
	if (autovn === false) return
await dha.updatePresence(from, Presence.recording)
} else if (autoketik) {
	if (autoketik === false) return
await dha.updatePresence(from, Presence.composing)
}
// Auto Read Group 
var chats = await dha.chats.array.filter(v => v.jid.endsWith('g.us'))
chats.map( async ({ jid }) => {
if (readGc === false) return
await dha.chatRead(jid)
})
// Auto Read Private 
var chatss = await dha.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
chatss.map( async ({ jid }) => {
if (readPc === true) return
await dha.chatRead(jid)
})
// By itsmevall
    antical = true
dha.on("CB:Call", json => {
if (antical === false) return
let call;
calling = JSON.parse(JSON.stringify(json))
call = calling[1].from
dha.sendMessage(call, `*Sorry Brocan't receive calls.*\n*Call = Block!*`, MessageType.text)
.then(() => dha.blockUser(call, "add"))
})
////Jan Di Jual
const replyfakelink = (teks) => {
dha.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
                "title": `Bot By ${NamaOwner}`,
                "body": "",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://i.ibb.co/JQ8x6mx/0e4d1b4b709c.jpg",
                "thumbnail": fake,
                "sourceUrl": ``
},mentionedJid:[sender]}, quoted : mek})
}
const replywa = (teks) => {
dha.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
                "title": `${NamaBot}`,
                "body": `${FakePdf}`,
                "mediaType": "10",
                "mediaUrl": `${GrubBot}`,
                "thumbnailUrl": "https://i.ibb.co/JQ8x6mx/0e4d1b4b709c.jpg",
                "thumbnail": fake,
                "sourceUrl": `${GrubBot}`,
},mentionedJid:[sender]}, quoted : mek})
}
const fakeyt = (teks) => {
dha.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `${FakeYt}` ,
"body": `${FakeYt}`,
"mediaType": "2",
"thumbnailUrl": "https://i.ibb.co/JQ8x6mx/0e4d1b4b709c.jpg",
"mediaUrl": "https://youtu.be/uygjD8rqVLE",
"thumbnail": fs.readFileSync('./media/canss.jpg'),
"sourceUrl": "",
},mentionedJid:[sender]}, quoted : mek})
}
        colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		
		/////// ANTI LINK:)
                if (budy.includes("https://chat.whatsapp.com/")) {
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply ('Admin Mah Bebas')
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply(` *「 GROUP LINK DETECTOR 」*\nAwokawok Ngemis Member Gc😍\nByee ${sender.split("@")[0]}`)
				setTimeout(() => {
				dha.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
				}, 3000)
			    }
			   /// Htag    
			 //   if (!isGroup && !isAntihidetag && !m.message[m.mtype]?.contextInfo?.mentionedJid?.length == groupMembers.length ) { console.log( color("[ANTI-HIDETAG]", "red"), color(`@${sender.split("@")[0]} mengirim pesan hidetag`, "white"))
			//    if (!isgroupOwner) return
       //        reply(`@${sender.split("@")[0]} Terdeteksi mengirim pesan hidetag!!`)
       //        dha.groupRemove(from, sender)
        //       }
               /// Virtex
               if (isGroup && isAntiVirtex && !mek.key.fromMe) {
               if (budy.length > 10000) {
               if (isGroupAdmins) return reply('Admin Mah Bebas Bwang:v')
               reply("ANTIVIRTEX DETECTED!! MAAF ANDA AKAN DIKICK")
               dha.groupRemove(from, sender);
               }
               }
        
let {
    banChats,
} = setting

function banChat() {
    if (banChats == true) {
        return false
    } else {
        return true
    }
}
        
        // Sewa
             _sewa.expiredCheck(dha, sewa)
             
        // MUTE
             if (isMuted){
             if (!isGroupAdmins && !isPremium) return
 }
 //// CHAT
       const getpc = async function(totalchat){
   let pc = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && !d.includes('g.us')){
         b.push(d)
      }
   }
   return b
}

const getGroup = async function(totalchat){
   let grup = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && d.includes('g.us')){
         b.push(d)
      }
   }
   for (e of b){
      let ingfo = await dha.groupMetadata(e)
      grup.push(ingfo)
   }
   return grup
} 
            
              const getWin = (userId) => {
              let position = false
              Object.keys(_win).forEach((i) => {
              if (_win[i].jid === userId) {
              position = i
       }
        })
              if (position !== false) {
              return _win[position].win
            }
        }
// AFK
	if (isGroup) {
		if (!mek.key.fromMe && mek.key.fromMe) return
		for (let x of mentionUser) {
		    if (afk.checkAfkUser(x, _afk)) {
			const getId = afk.getAfkId(x, _afk)
			const getReason = afk.getAfkReason(getId, _afk)
			const getTime = afk.getAfkTime(getId, _afk)
			const cptl = `Ssst Ganggu Aja Dia Lagi ${getReason} Sejak ${getTime}`
      mentions(cptl, x, true)
    }}
		if (afk.checkAfkUser(sender, _afk) && !isCmd) {
		    const getTime = afk.getAfkTime(sender, _afk)
		    const getReason = afk.getAfkReason(sender, _afk)
		    const ittung = ms(await Date.now() - getTime)
		    const pep = `*${pushname}* Telah Kembali Online`
		    reply(pep)
		    _afk.splice(afk.getAfkPosition(sender, _afk), 1)
		    fs.writeFileSync('./database/user/afk.json', JSON.stringify(_afk))
		}
	    }
	        function clockString(ms) {
      let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
    }
      // CMD
        if (isCmd && !isGroup)		
            console.log(color('[ BOT ]'), color(time, 'red'), color(`${command} [${args.length}]`), 'from', color(pushname))
        
        if (isCmd && isGroup)            
            console.log(color('[ BOT ]'), color(time, 'red'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
            
            switch(command){
            //MENU NYA BG
            case 'menu':
            case 'help':
            //if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
            groups = dha.chats.array.filter(v => v.jid.endsWith('g.us'))
            privat = dha.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
            ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
            charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
            uptime = process.uptime();
            timestampe = speed();
            totalChat = await dha.chats.all()
            latensie = speed() - timestampe
            total = math(`${groups.length}*${privat.length}`)
            stst = await dha.getStatus(`${sender.split('@')[0]}@c.us`)
		    stst = stst.status == 401 ? '' : stst.status        
		    ptod = `${NOwner}`
		    utod = `${botNumber}`
            stod = `${sender}`  
            yerikoo =`${tampilUcapan} ${pushname}
┏━━━━━━━》❈《 ━━━━━━
┃
┠❑ 𝘽𝙤𝙩 𝙄𝙣𝙛𝙤
┃➪ 𝐍𝐚𝐦𝐚𝐁𝐨𝐭 : ${NamaBot}
┃➪ 𝐍𝐨𝐦𝐨𝐫𝐁𝐨𝐭 : @${utod.split('@')[0]}   
┃➪ 𝐒𝐩𝐞𝐞𝐝 : ${latensie.toFixed(4)} _sec_     
┃➪ 𝐓𝐨𝐭𝐚𝐥𝐆𝐜 : ${groups.length}
┃➪ 𝐓𝐨𝐭𝐚𝐥𝐏𝐜 : ${privat.length}       
┃➪ 𝐀𝐥𝐥𝐂𝐡𝐚𝐭 : ${totalChat.length}       
┃➪ 𝐀𝐮𝐭𝐨𝐕𝐧 : ${autovn}
┃➪ 𝐀𝐮𝐭𝐨𝐍𝐠𝐞𝐭𝐢𝐤 : ${autoketik}      
┃➪ 𝐑𝐞𝐚𝐝𝐏𝐜 : ${readPc}         
┃➪ 𝐑𝐞𝐚𝐝𝐆𝐜 : ${readGc}
┃➪ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : ${runtime(process.uptime())}
┃➪ 𝐑𝐞𝐪𝐮𝐞𝐬𝐭 : ${totalhit}
┃➪ 𝐆𝐫𝐮𝐛𝐁𝐨𝐭 : ${GrubBot}
┃
┠❑ 𝐈𝐍𝐅𝐎 𝐎𝐖𝐍𝐄𝐑
┃➪ 𝑵𝒂𝒎𝒂 : ${NamaOwner} 
┃➪ 𝑵𝒐𝒎𝒐𝒓 : ${ptod.split('@')[0]}    
┃➪ 𝑻𝒂𝒈 : @${ptod.split('@')[0]} 
┃ 
┠❑ 𝑫𝑬𝑽𝑰𝑪𝑬 𝑰𝑵𝑭𝑶
┃➪ 𝑩𝒂𝒕𝒕𝒆𝒓𝒂𝒊 : ${baterai}%
┃➪ 𝑪𝒂𝒔 : ${charger}
┃➪ 𝑾𝒂𝑽𝒆𝒓𝒔𝒊𝒐𝒏 : ${dha.user.phone.wa_version}
┃➪ 𝑯𝒐𝒔𝒕𝒏𝒂𝒎𝒆 : ${os.hostname()}
┃➪ 𝑷𝒍𝒂𝒕𝒇𝒐𝒓𝒎 : ${os.platform()}
┃
┠❑ 𝑼𝑺𝑬𝑹 𝑰𝑵𝑭𝑶
┃➪ 𝐍𝐚𝐦𝐚 : ${pushname}
┃➪ 𝐁𝐢𝐨 : ${stst}
┃➪ 𝐓𝐚𝐠 : @${stod.split('@')[0]}
┃➪ 𝐒𝐭𝐚𝐭𝐮𝐬 : ${isOwner ? '𝑂𝑤𝑛𝑒𝑟🌹' : isPremium ? '𝑃𝑟𝑒𝑚𝑖𝑢𝑚🌹' : '𝐺𝑟𝑎𝑡𝑖𝑠𝑎𝑛🦈'} 
┗❑
 THANKS TO
❑ Tuhan Ku
❑ Orang Tua Ku
❑ Bailyes
❑ Heroku
❑ Yudha
❑ Lord Nayla🤙
❑ Lord Zeeone 🤙
❑ Lord Denis🤙
❑ Lord Yogi🤙
❑ Yeriko
❑ ${NamaOwner}  
❑ Penyedia Apikey,Module,Dll
`
Sendbutdocument(from, yerikoo, `Hai Kak ${pushname} Aku Adalah ${NamaBot} Aku Bisa Membantumu Dalam Membuat Sticker Dan Lain Lain\nBagi User Wa Mod Yang Tidak Support Button Bisa Mengirimkan ${prefix}command`, fs.readFileSync('./media/Loli Hot.pdf'), {mimetype:Mimetype.pdf, thumbnail:fs.readFileSync('./media/thumbnaildokumen.jpg'), filename:`${FakePdf}`, pageCount: 9999999 }, [{buttonId:`!command`,buttonText:{displayText:'All Menu'},type:1},{buttonId:`!grubbot`,buttonText:{displayText:'Official Grub'},type:1},{buttonId:`!owner`,buttonText:{displayText:'Owner'},type:1}], {quoted:floc3, contextInfo: { mentionedJid: [utod,stod,ptod], forwardingScore: 508, isForwarded: true, externalAdReply:{title:`${FakeYt}`,mediaType:"2",thumbnail:dfrply,mediaUrl:`https://youtu.be/x-0WHkv3uc`}}})
break
//// PLISS JANGAN HAPUS CREDITS 🗡️
//COMMAND NYA BG :)
case 'command':
const iall = fs.readFileSync('./mediamenu/all.jpg')
bangke =`
╭━─━─━─≪✠≫─━─━─━
├❑ *ADMIN MENU*
│➻ ${prefix}welcome < enable/disable >
│➻ ${prefix}antilink < on/off >
│➻ ${prefix}kickall
│➻ ${prefix}promote
│➻ ${prefix}demote
│➻ ${prefix}listonline
│➻ ${prefix}tagall *teks*
│➻ ${prefix}leave
│➻ ${prefix}kick *reply*
│➻ ${prefix}add *+62xxxxxx*
│➻ ${prefix}setnamegc
│➻ ${prefix}setppgc
│➻ ${prefix}setdeskgc
│➻ ${prefix}sider *reply chat bot*
│➻ ${prefix}hidetag *teks/reply teks*
│➻ ${prefix}linkgc
╰━─━─━─≪✠≫─━─━─━
╭━─━─━─≪✠≫─━─━─━
├❑ *OWNER MENU*
│➻ ${prefix}autoread
│➻ ${prefix}auto vn/ketik on/off
│➻ ${prefix}bcnowm
│➻ ${prefix}bc
│➻ ${prefix}bc2
│➻ ${prefix}bcgc
│➻ ${prefix}bcgc2
│➻ ${prefix}clearall
╰━─━─━─≪✠≫─━─━─━
╭━─━─━─≪✠≫─━─━─━
├❑ *DOWNLOAD MENU*
│➻ ${prefix}ytmp3 < Link >
│➻ ${prefix}ytmp4 < Link >
│➻ ${prefix}playmp3 < Query >
╰━─━─━─≪✠≫─━─━─━
╭━─━─━─≪✠≫─━─━─━
├❑ *TO MENU*
│➻ ${prefix}img2url < Reply Foto >
│➻ ${prefix}tourl < Reply Foto >
│➻ ${prefix}tovideo < ReplyStikerGif >
│➻ ${prefix}toimg < ReplyStiker >
│➻ ${prefix}tomp3 < ReplyVideo >
╰━─━─━─≪✠≫─━─━─━
╭━─━─━─≪✠≫─━─━─━
├❑ *MUSIC EDIT*
│➻ ${prefix}bass < ReplyAudio/Vn >
│➻ ${prefix}balik < ReplyAudio/Vn >
│➻ ${prefix}gemuk < ReplyAudio/Vn >
│➻ ${prefix}robot < ReplyAudio/Vn >
╰━─━─━─≪✠≫─━─━─━
╭━─━─━─≪✠≫─━─━─━
├❑ *RANDOM TAG MENU*
│➻ ${prefix}ganteng
│➻ ${prefix}cantik
│➻ ${prefix}jelek
│➻ ${prefix}goblok
│➻ ${prefix}bego
│➻ ${prefix}pinter
│➻ ${prefix}jago
│➻ ${prefix}babi
│➻ ${prefix}beban
│➻ ${prefix}baik
│➻ ${prefix}jahat
│➻ ${prefix}anjing
│➻ ${prefix}monyet
│➻ ${prefix}haram
│➻ ${prefix}kontol
│➻ ${prefix}pakboy
│➻ ${prefix}pakgirl
│➻ ${prefix}sadboy
│➻ ${prefix}sadgirl
│➻ ${prefix}wibu
│➻ ${prefix}nolep
│➻ ${prefix}hebat
╰━─━─━─≪✠≫─━─━─━
╭━─━─━─≪✠≫─━─━─━
├❑ *V MENU*
│➻ ${prefix}vsadboy
│➻ ${prefix}vpakboy
│➻ ${prefix}vbaik
│➻ ${prefix}vjago
│➻ ${prefix}vjelek
│➻ ${prefix}vcantik
│➻ ${prefix}vpinter
│➻ ${prefix}vbeban
│➻ ${prefix}vkontol
│➻ ${prefix}vhebat
│➻ ${prefix}vwibu
│➻ ${prefix}vharam
│➻ ${prefix}vbabi
│➻ ${prefix}vbego
│➻ ${prefix}vganteng
│➻ ${prefix}vanjing
│➻ ${prefix}vmonyet
│➻ ${prefix}vsadgirl
│➻ ${prefix}vpakgirl
│➻ ${prefix}vjahat
│➻ ${prefix}vnolep
│➻ ${prefix}vgoblok
╰━─━─━─≪✠≫─━─━─━
╭━─━─━─≪✠≫─━─━─━
├❑ *X MENU*
│➻ ${prefix}xsadboy <@tag>
│➻ ${prefix}xpakboy <@tag>
│➻ ${prefix}xbaik <@tag>
│➻ ${prefix}xjago <@tag>
│➻ ${prefix}xjelek <@tag>
│➻ ${prefix}xcantik <@tag>
│➻ ${prefix}xpinter <@tag>
│➻ ${prefix}xbeban <@tag>
│➻ ${prefix}xkontol <@tag>
│➻ ${prefix}xhebat <@tag>
│➻ ${prefix}xwibu <@tag>
│➻ ${prefix}xharam <@tag>
│➻ ${prefix}xbabi <@tag>
│➻ ${prefix}xbego <@tag>
│➻ ${prefix}xganteng <@tag>
│➻ ${prefix}xanjing <@tag>
│➻ ${prefix}xmonyet <@tag>
│➻ ${prefix}xsadgirl <@tag>
│➻ ${prefix}xpakgirl <@tag>
│➻ ${prefix}xjahat <@tag>
│➻ ${prefix}xnolep <@tag>
│➻ ${prefix}xgoblok <@tag>
╰━─━─━─≪✠≫─━─━─━
╭━─━─━─≪✠≫─━─━─━
├❑ *Z MENU*
│➻ ${prefix}zsadboy
│➻ ${prefix}zpakboy
│➻ ${prefix}zbaik
│➻ ${prefix}zjago
│➻ ${prefix}zjelek
│➻ ${prefix}zcantik
│➻ ${prefix}zpinter
│➻ ${prefix}zbeban
│➻ ${prefix}zkontol
│➻ ${prefix}zhebat
│➻ ${prefix}zwibu
│➻ ${prefix}zharam
│➻ ${prefix}zbabi
│➻ ${prefix}zbego
│➻ ${prefix}zganteng
│➻ ${prefix}zanjing
│➻ ${prefix}zmonyet
│➻ ${prefix}zsadgirl
│➻ ${prefix}zpakgirl
│➻ ${prefix}zjahat
│➻ ${prefix}znolep
│➻ ${prefix}zgoblok
╰━─━─━─≪✠≫─━─━─━
╭━─━─━─≪✠≫─━─━─━
├❑ *CEK MENU*
│➻ ${prefix}gantengcek
│➻ ${prefix}cantikcek
│➻ ${prefix}jelekcek
│➻ ${prefix}goblokcek
│➻ ${prefix}begocek
│➻ ${prefix}pintercek
│➻ ${prefix}jagocek
│➻ ${prefix}nolepcek
│➻ ${prefix}babicek
│➻ ${prefix}bebancek
│➻ ${prefix}baikcek
│➻ ${prefix}jahatcek
│➻ ${prefix}anjingcek
│➻ ${prefix}haramcek
│➻ ${prefix}kontolcek
│➻ ${prefix}pakboycek
│➻ ${prefix}pakgirlcek
│➻ ${prefix}sangecek
│➻ ${prefix}bapercek
╰━─━─━─≪✠≫─━─━─━
╭━─━─━─≪✠≫─━─━─━
├❑ *STICKER MENU*
│➻ ${prefix}sticker < ReplyFoto >
│➻ ${prefix}sgif < ReplyVideo >
╰━─━─━─≪✠≫─━─━─━
╭━─━─━─≪✠≫─━─━─━
├❑ *OTHER MENU*
│➻ ${prefix}donasi
│➻ ${prefix}script
│➻ ${prefix}runtime
│➻ ${prefix}speed
│➻ ${prefix}delete
│➻ ${prefix}afk < alasan >
│➻ ${prefix}rules
│➻ ${prefix}snk
╰━─━─━─≪✠≫─━─━─━

║▌│█║▌│ █║▌│█│║▌║
║▌│█║▌│ █║▌│█│║▌║

    © ${NamaOwner}
`
dha.sendMessage(from, iall, image, {quoted: floc3, caption: bangke})
break
case 'infobot':
case 'rules':
case 'snk':
myinfo =`
❑  Snk + Rules!!
➸ _Snk_
➫ Bot tidak menyimpan media apapun yang anda kirimkan!!
➫ Bot tidak bertanggung jawab atas penyalahgunaan fitur!!
➫ Bot tidak pernah spam/mengirimkan pesan berupa virtex kepada anda
➫ Waspada terhadap nama palsu yang mengatasnamakan Nata Bot
➫ Nata Bot Menggunakan Script yang di susun oleh Owner bot sendiri!!
➫ Bot ini masih dalam tahap pengembangan!!

➸ _Rules_
➫ Berikan Jeda 5-10 Second / command
➫ Jangan Mengirimkan Media Mengandung 18+ Atau Sara!!
➫ Stop bandingkan bot dengan bot lain!!
➫ Jangan call bot jika tidak mau di blokir
➫ Jangan mengirimkan pesan yang mengandung virus wa!!
➫ Jika anda melakukan kesalahan di atas kami tidak segan² banned/blockir nomor anda!!
` 
reply(myinfo)
break

			case 'playmp3':
					if (args.length === 0) return reply(`Kirim perintah *${prefix}playmp3* _Judul lagu yang akan dicari_`)
		            var srch = args.join('')
		    		aramas = await yts(srch);
		    		aramat = aramas.all 
		   			var mulaikah = aramat[0].url							
		                  try {
		                    yta(mulaikah)
		                    .then((res) => {
		                        const { dl_link, thumb, title, filesizeF, filesize } = res
		                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
		                        .then(async (a) => {
		                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
		                        const captions = `🎧 *PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
		                       await sendMediaURL(from, thumb, captions)
		                        sendMediaURL(from, dl_link).catch(() => reply('error'))
		                        })                
		                        })
		                        } catch (err) {
		                        reply('Emror Woy')
		                        }
		                   break  
case 'ytmp3':
if (!isPremium && !mek.key.fromMe) return reply (mess.only.premium)
        //if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
            if (args.length < 1) return reply('Link Nya Mana?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Link Invalid')
            teks = args.join(' ')
            reply('Load')
            res = await y2mateA(teks).catch(e => {
            reply('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')
})
            result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP3*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
☞ Title : ${res[0].judul}
☞ Ext : MP3
☞ Size : ${res[0].size}

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: mek}).then((lalu) => {
            sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
})
            break
     case 'ytmp4':
     if (!isPremium) return reply (mess.only.premium)
           //if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
            if (args.length < 1) return reply('Link Nya Mana?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Link Invalid')
            teks = args.join(' ')
            reply(`Wet`)
            res = await y2mateV(teks).catch(e => {
            reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')
})
            result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
☞ Title : ${res[0].judul}
☞ Ext : MP4
☞ Size : ${res[0].size}

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: mek}).then((lalu) => {
            sendFileFromUrl(res[0].link, video, {quoted: mek, mimetype: 'video/mp4', filename: res[0].output})
})
            break
//◢◤◢◤◢◤◢◤◢◤◢◤◢◤ ADMIN FEATURED //
//◢◤◢◤◢◤◢◤◢◤◢◤◢◤ BY YERIKO NO DEBAT!! //
      case 'antilink':
//if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
        if (!isGroup) return reply(mess.only.group)
        if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
        if (args[0] == 'on') {
          if (isAntiLink) return reply('Sudah aktif!!')
          antilink.push(from)
          fs.writeFileSync(
            './database/antilink.json',
            JSON.stringify(antilink)
          )
          reply('Sukses mengaktifkan antilink!')
        } else if (args[0] == 'off') {
          antilink.splice(from, 1)
          fs.writeFileSync(
            './database/antilink.json',
            JSON.stringify(antilink)
          )
          reply('Sukses mematikan antilink!')
        } else if (!q) {
          sendButMessage(from, `FORMAT SALAH BANG!!!`, `Kalo Button Nya Gaada/Udah Di Klik Orang Gini :\nAktif : ${prefix}antilink on\nMati : ${prefix}antilink off\n\n\nKalo Bkn Admin Gwsh Banyak Tingkah Kalo Ga Bakalan Ke Kick!`, [
            {
              buttonId: `${prefix}antilink on`,
              buttonText: {
                displayText: `AKTIF`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antilink off`,
              buttonText: {
                displayText: `NON-AKTIF`,
              },
              type: 1,
            },
          ]);
        }
        break
       case 'welcome':
               if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
               if (!isGroup) return reply(mess.only.group)
               if (args.length < 1) return reply('!welcome enable/disable')
               if ((args[0]) === 'enable') {
               if (isWelkom) return reply('Udah aktif')
               welkom.push(from)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
               } else if ((args[0]) === 'disable') {
               welkom.splice(from, 1)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
               } else {
               reply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
               break
case 'linkgc':
////if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
				if (!isGroup) return reply(mess.only.group)
				linkgc = await dha.groupInviteCode (from)
				yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				dha.sendMessage(from, yeh, text, {quoted: mek})
				break
            case 'kick':
//if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
             if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
             if (!isGroup) return reply(mess.only.group)
             kick(from, mentionUser)
             break
      case 'add':
//if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
      if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
             if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
             entah = arg.split("|")[0]
             entah = entah.replace(new RegExp("[()+-/ +/]", "gi"), "")
             entah = `${entah}@s.whatsapp.net`
             dha.groupAdd(from, [entah])
             } else {
             entah = mek.message.extendedTextMessage.contextInfo.participant
             dha.groupAdd(from, [entah])
}
             break
      case 'promote':
//if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
         //     reply('🗿')
             if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
             if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
             if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
             entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
             if (entah.length > 0) {
             var mems_ids = []
             for (let ids of entah) {
             mems_ids.push(ids)
}
             dha.groupMakeAdmin(from, mems_ids)
             } else {
             dha.groupMakeAdmin(from, entah)
}
             } else {
             entah = mek.message.extendedTextMessage.contextInfo.participant
             dha.groupMakeAdmin(from, [entah])
}
             break
      case 'demote':
//if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
           //  reply('🗿')
             if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
             if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
             if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
             entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
             if (entah.length > 0) {
             var mems_ids = []
             for (let ids of entah) {
             mems_ids.push(ids)
}
             dha.groupDemoteAdmin(from, mems_ids)
             } else {
             dha.groupDemoteAdmin(from, [entah[0]])
}
             } else {
             entah = mek.message.extendedTextMessage.contextInfo.participant
             dha.groupDemoteAdmin(from, [entah])
}
             break
       case 'setgrupname':
//if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
              if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return 
              if (args.length == 0) return reply(`Penggunaan ${prefix}setgrupname name`)
              dha.groupUpdateSubject(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              break
       case 'setdesc':
//if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
              if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (args.length == 0)  return reply(`Penggunaan ${prefix}setdesc desc`)
              dha.groupUpdateDescription(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              break
       case 'setppgrup':
//if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
              if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (isQuotedImage) {
              let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
              let media = await dha.downloadMediaMessage(encmedia)
              dha.updateProfilePicture(from, media)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              } else {
              reply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
              break
case 'tagall':
//if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
              if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              let arr = [];
              let txti = `*[ TAG ALL ]*\n\n${q ? q : ''}\n\n`
              for (let i of groupMembers){
              txti += `=> @${i.jid.split("@")[0]}\n`
              arr.push(i.jid)
}
              mentions(txti, arr, true)
              break
       case 'kickall':
//if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek}) // Anti Banned
              if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
              for (let i of groupMembers) {
              await kickMember(from, [i.jid])
}
              break
       case 'leave':
//if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
              if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              setTimeout( () => {
              dha.groupLeave(from) 
              }, 2000)
              setTimeout( () => {
              reply('Byee...')
              }, 0)
              break
       case 'online':
       case 'listonline':
       case 'here':
//if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})                
             if (!isGroup) return reply(`Only group`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(dha.chats.get(ido).presences), dha.user.jid]
             dha.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: mek, contextInfo: { mentionedJid: online }})
             } catch (e) {
             reply(`${e}`)
}
             break
      case 'hidetag':
//if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
             if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
             try {
             quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
             hideTag(from, `${quotedText}`)
             } catch {
             hideTag(from, `${q}`)
}
             break
      case 'sider':
//if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
             if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
             if(!isGroup) return reply(mess.only.group)
             try {
             infom = await dha.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
             tagg = []
             teks = `*• Dibaca oleh:*\n\n`
             for(let i of infom.reads){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             teks += `*• Tersampaikan pada:*\n\n`
             for(let i of infom.deliveries){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             mentions(teks, tagg, true)
             } catch (e) {
             console.log(color(e))
             reply('Reply chat bot!')
}
             break
case 'closetime':
	//	if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return
if (!isBotGroupAdmins) return
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"0000"
} else if (args[1]=="jam") {var timer = args[0]+"00000"
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setTimeout( () => {
var nomor = mek.participant
dha.groupSettingChange (from, GroupSettingChange.messageSend, true);
}, timer)
break
case 'opentime':
	//	if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return 
if (!isGroupAdmins) return 
if (!isBotGroupAdmins) return
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"0000"
} else if (args[1]=="jam") {var timer = args[0]+"00000"
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setTimeout( () => {
var nomor = mek.participant
dha.groupSettingChange (from, GroupSettingChange.messageSend, false);
}, timer)
break
//◢◤◢◤◢◤◢◤◢◤◢◤◢◤ OWNER FEATURED //
//◢◤◢◤◢◤◢◤◢◤◢◤◢◤ BY YERIKO NO DEBAT!! //
////////////// Bc by Yeriko Insipirasi mekla
				case 'bcnowm':
					dha.updatePresence(from, Presence.composing) 
				     if (!isOwner) return reply(mess.only.owner)
					if (args.length < 1) return reply('.......')
					anu = await dha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await dha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							dha.sendMessage(_.jid, buff, image, {caption: `${body.slice(7)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `${body.slice(7)}`)
						}
						reply('*Done*')
					}
					break
				case 'bc':
					dha.updatePresence(from, Presence.composing) 
				     if (!isOwner) return reply(mess.only.owner)
					if (args.length < 1) return reply('.......')
					anu = await dha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await dha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							dha.sendMessage(_.jid, buff, image, {caption: `[ BROADCAST ]\n${body.slice(4)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ BROADCAST ]\n${body.slice(4)}`)
						}
						reply('*Done*')
					}
					break
				case 'bc2':
					dha.updatePresence(from, Presence.composing) 
				     if (!isOwner) return reply(mess.only.owner)
					if (args.length < 1) return reply('.......')
					anu = await dha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await dha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							dha.sendMessage(_.jid, buff, image, {caption: `[ BROADCAST ]\nDari : Owner\nPada : ${timi}\nBuat : All Kontak\nPesan : ${body.slice(5)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ BROADCAST ]\nDari : Owner\nPada : ${timi}\nBuat : All Kontak\nPesan : ${body.slice(5)}`)
						}
						reply('*Done*')
					}
					break
				case 'bcgc':
				     if (!isOwner) return reply(mess.only.owner)
					if (args.length < 1) return reply('Teksnya mana bosku >_<')
					anu = await groupMembers
					nom = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await dha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							dha.sendMessage(_.jid, buff, image, {caption: `*「 BC GROUP 」*\n\n☞ Dari Grup : ${groupName}\n☞ Pengirim : Owner\n☞ Pesan : ${body.slice(6)}`})
						}
						reply('*Done')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BC GROUP 」*\n\n☞ Dari Grup : ${groupName}\n☞ Pengirim : Owner\n☞ Pesan : ${body.slice(6)}`)
						}
						reply('Done')
					}
					break
				case 'bcgc2':
				     if (!isOwner) return reply(mess.only.owner)
					if (args.length < 1) return reply('Teksnya mana bosku >_<')
					anu = await groupMembers
					nom = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await dha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							dha.sendMessage(_.jid, buff, image, {caption: `${body.slice(7)}`})
						}
						reply('Done')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `${body.slice(7)}`)
						}
						reply('Done')
					}
					break
      case 'addcmd': 
       case 'setcmd':
              if (!isOwner) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
              if (isQuotedSticker) {
              if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              addCmd(kodenya, q)
              textImg("Done!")
              } else {
              reply('tag stickenya')
}
              break
       case 'delcmd':
              if (!isOwner) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
              if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
            _scommand.splice(getCommandPosition(kodenya), 1)
              fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
              textImg("Done!")
              break
       case 'listcmd':
              let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
              let cemde = [];
              for (let i of _scommand) {
              cemde.push(i.id)
              teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`
}
              mentions(teksnyee, cemde, true)
              break
				case 'clearall':
					if (!isOwner) return reply(mess.only.owner)
					anu = await dha.chats.all()
					dha.setMaxListeners(25)
					for (let _ of anu) {
						dha.deleteChat(_.jid)
					}
					reply('Succes')
					break
case 'clearpc':
					  if (!isOwner) return reply(mess.only.owner)
					  cpcp = await getpc(totalchat)
					  dha.setMaxListeners(25)
					for (let _ of cpcp) {
						dha.deleteChat(_.jid)
					}
					reply('Done')
					break					 
case 'cleargc':
				  if (!isOwner) return reply(mess.only.owner)
				  ingfoo = await getGroup(totalchat)
				  dha.setMaxListeners(25)
				  for (let _ of ingfoo) {
				  dha.deleteChat(_.jid)
					}
					reply('Done')
					break
case 'autoread':
//if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if(!isOwner)return reply(mess.only.owner)
listMsg = {
 buttonText: '🌹PILIH DI SINI',
 footerText: 'Only Owner Ya',
 description: `Hai kak @${sender.split('@')[0]}, Silahkan pilih menu disini`,
 sections: [
                     {
                      "title": `Kalo Bukan Owner Gwsh Banyak Tingkah Hmdh`,
 rows: [
                          {
                              "title": "Read Pc On",
                              "rowId": "#autoread3 pc on"
                           },
                           {
                              "title": "Read Pc Off",
                              "rowId": "#autoread3 pc off"
                           },
                           {
                              "title": "Read Gc On",
                              "rowId": "#autoread3 gc on"
                           },
                           {
                              "title": "Read Gc Off",
                              "rowId": "#autoread3 gc off"
                           },
                           {
                           "title": "Done",
                           "rowld": "#delete"
                           }                               
                           ]
                           }],
                           listType: 1
                           }
dha.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:mek})
break
        case 'autoread3':
//if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)
if (args.length < 1) return reply(`Example:\n${prefix}autoread gc on`)
if (args[0] === "gc") {
if (args.length < 2) return reply(`Example:\n${prefix}autoread gc on`)
if (args[1] === "on") {
if (readGc === true) return reply(lang.anjawaUdhOn(command))
readGc = true
reply(`Succes mengaktifkan autoread group`)
} else if (args[1] === "off") {
if (readGc === false) return
readGc = false
reply(`Succes mematikan autoread group`)
} else {
reply(`Pilih on atau off`)
}
} else if (args[0] === "pc") {
if (args.length < 2) return reply(`Example:\n${prefix}autoread pc on`)
if (args[1] === "on") {
if (readPc === true) return reply(lang.anjawaUdhOn(command))
readPc = true
reply(`Succes mengaktifkan autoread pc`)
} else if (args[1] === "off") {
if (readPc === false) return
readPc = false
reply(`Succes mematikan autoread pc`)
} else {
reply(`Pilih on atau off`)
}
} else {
reply(`*List Auto Read*\n•> gc\n•> pc`)
}
break
case 'auto':
//if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)
if (args.length < 1) return reply(`Example:\n${prefix}auto vn on`)
if (args[0] === "vn") {
if (args.length < 2) return reply(`Example:\n${prefix}auto vn on`)
if (args[1] === "on") {
if (autovn === true) return reply('Dah Aktif Oy')
autovn = true
reply(`Succes mengaktifkan auto vn`)
} else if (args[1] === "off") {
if (autovn === false) return
autovn = false
reply(`Succes mematikan auto vn`)
} else {
reply(`Pilih on atau off`)
}
} else if (args[0] === "ketik") {
if (args.length < 2) return reply(`Example:\n${prefix}auto ketik on`)
if (args[1] === "on") {
if (autoketik === true) return reply('Udh Aktif')
autoketik = true
reply(`Succes mengaktifkan auto ketik`)
} else if (args[1] === "off") {
if (autoketik === false) return
autoketik = false
reply(`Succes mematikan auto ketik`)
} else {
reply(`Pilih on atau off`)
}
} else {
reply(`*List Auto *\n•> vn\n•> ketik`)
}
break
				case 'robot':
encmedial = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
medial = await dha.downloadAndSaveMediaMessage(encmedial)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${medial} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(medial)
if (err) return reply('Ulangi Kak Tadi Error')
hah = fs.readFileSync(ran)
dha.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
case 'gemuk':
					encmediaz = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediaz = await dha.downloadAndSaveMediaMessage(encmediaz)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediaz} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mediaz)
						if (err) return ephe('Error!')
						hah = fs.readFileSync(ran)
					dha.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, duration: 359996400, quoted:mek})
						fs.unlinkSync(ran)
					})
					break
case 'balik':
	encmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	mediau = await dha.downloadAndSaveMediaMessage(encmediau)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${mediau} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediau)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
dha.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:mek})
fs.unlinkSync(ran)
	})
break
case 'bass':                 
					encmediao = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediao = await dha.downloadAndSaveMediaMessage(encmediao)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediao} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mediao)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						dha.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:mek})
						fs.unlinkSync(ran)
					})
				break      
//◢◤◢◤◢◤◢◤◢◤◢◤◢◤ CONVERT + STICKER FEATURED //
       case 'tourl':
               if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
               reply(mess.wait)
               boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               owgi = await dha.downloadMediaMessage(boij)
               res = await uploadImages(owgi)
               reply(res)
               } else {
               reply('kirim/reply gambar/video')
}
               break
       case 'imgtourl':
       case 'img2url':
               reply(mess.wait) 
               var imgbb = require('imgbb-uploader')
               var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               var media = await  dha.downloadAndSaveMediaMessage(encmedia)       
               imgbb('39d895963468b814fad0514bd28787e2', media)
              .then(data => {
               var caps = `*_IMAGE TO URL_*\n\n*~>  ID :* ${data.id}\n*~>  MimeType :* ${data.image.mime}\n*~>  Extension :* ${data.image.extension}\n*~>  URL :* ${data.display_url}`
               ibb = fs.readFileSync(media)
               dha.sendMessage(from, ibb, image, { quoted: mek, caption: caps})
})
              .catch(err => {
               throw err
})
               break
        case 'tovideo':
               if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
               reply(mess.wait)
               encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               mediaaa = await dha.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               dha.sendMessage(from, mp4, video, {mimetype: 'video/mp4', quoted: mek, caption: mess.success})
               fs.unlinkSync(mediaaa)
               } else {
               reply(mess.wrongFormat)
}
               break
            case 'tomp3':
            if (!isPremium) return reply (mess.only.premium)
					dha.updatePresence(from, Presence.composing)
					if (!isQuotedVideo) return reply('Reply Video Nya Kak')
					reply(mess.wait)
					encmediad = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					mediad = await dha.downloadAndSaveMediaMessage(encmediad)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${mediad} ${ran}`, (err) => {
						fs.unlinkSync(mediad)
						if (err) return reply('Ulangi Kak Tadi Error')
						mhee = fs.readFileSync(ran)
						dha.sendMessage(from, mhee, audio, { mimetype: 'audio/mp4', duration: 359996400, quoted: mek })
						fs.unlinkSync(ran)
					})
					break
				case 'stiker': 
				case 'sticker':
				case 's':
            //if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await dha.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Succes Gan')
								buffer = fs.readFileSync(ran)
								dha.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await dha.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								dha.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar/video/gif dengan caption \n${prefix}sticker (durasi sticker video 1-9 detik)`)
					}
					break
                  case 'toimg':
//if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
			     	if (!isQuotedSticker) return reply('Reply/tag sticker !')
			     	reply (mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await dha.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Eror Kak')
						buffer = fs.readFileSync(ran)
						dha.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih kak... '})
						fs.unlinkSync(ran)
					})
					break
        case 'togif':
               if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
               reply(mess.wait)
               encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               mediaaa = await dha.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               dha.sendMessage(from, mp4, video, {mimetype: 'video/gif', quoted: mek, caption: mess.success})
               fs.unlinkSync(mediaaa)
               } else {
               reply(mess.wrongFormat)
}
               break
            case 'stickergif':
			case 'stikergif':
			case 'sgif':
			            //if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await dha.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.stick)
							})
							.on('end', function () {
								console.log('Subrek Fernazer')
								buffer = fs.readFileSync(ran)
								dha.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await dha.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(`Wait Kak ${pushname}`)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								dha.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker atau reply/tag gambar`)
					}
					break  
                    case 'admin':  
         	        case 'owner':  
         	        case 'creator':           	        		
		            const icontact = fs.readFileSync('./mediamenu/contact.jpg')
                    dha.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                    dha.sendMessage(from, icontact, image, {quoted: mek, caption: 'Tuhh Kak Kontak Owner Ku >_<'})
					break
case 'grubbot':
gcm =`
Grub 1 : ${GrubBot}
Grub 2 : ${GrubBot2}
Grub Author : *Soon*
Bantu Fullin Jagoan🌹🤗

Jangan Lupa Join Yahh *${pushname}*
`
grupinv(gcm)
break
case 'script':
const isc = fs.readFileSync('./mediamenu/sc.jpg')
mastahb =`*SCRIPT ${NamaBot}*

Script Ori : Yudha 
Recode1 : Yeriko
Recode2 : ${NamaOwner}

Link Script : Belum Upload Heheheh
`
dha.sendMessage(from, isc, image, {quoted: mek, caption: mastahb})
break
case 'donasi':
dona = fs.readFileSync('./mediamenu/donasi.jpg')
doni =`*╭─❒ 「 Donasi 」 ──────*
*│*
*│*⬡ *Mau donasi Kah?🤗*
*│*⬡ *GOPAY     :* ${NomorGopay}
*│*⬡ *DANA    : ${NomorDana}*
*│*⬡ *OVO    : ${NomorOvo}*
*└───────────────────*
1Perak Donasi Kalian Juga Membantu Perkembangan Bot Kami:)`
dha.sendMessage(from, dona, image, { quoted: floc3, thumbnail: dona, caption: doni })
break
      case 'runtime':
//if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
        run = process.uptime()
        teks = `${kyun(run)}`
        reply(teks)
        break
      case 'speed':
      case 'ping':
//if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
        const timestamp = speed();
        const latensi = speed() - timestamp;
        exec(`neofetch --stdout`, (error, stdout, stderr) => {
          const child = stdout.toString("utf-8")
          const ssd = child.replace(/Memory:/, "Ram:")
          const pingnya = `*${ssd}Speed: ${latensi.toFixed(4)} Second*`
          reply(pingnya)
        })
        break
      case 'delete':
      case 'del':
					case 'd':
//if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
					//if (!isOwner)return reply(mess.only.owner)
					//if (!isGroup)return reply(mess.only.group)
				if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
					dha.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
       case 'afk': 
              if (!isGroup) return reply(mess.only.group)
              if (isAfkOn) return reply('Woe Kalo Mau Afk Jangan Nimbrung di sini')
              const reason = q ? q : 'Nothing.'
              afk.addAfkUser(sender, time, reason, _afk)
              const aluty = `Fitur AFK berhasil *diaktifkan!*\n\n☞ *Username*: ${pushname}\n☞ *Alasan*: ${reason}`
              reply(aluty)
//◢◤◢◤◢◤◢◤◢◤◢◤◢◤ CEK+RANDOM TAG FEATURED //
//◢◤◢◤◢◤◢◤◢◤◢◤◢◤ BY NAYLA CAMTEK NO DEBAT!! //
            case 'xkontol':	
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')				 	
			dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xganteng': 
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(11)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xcantik': 
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xjelek': 
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(9)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xgoblok': 
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 				  
            case 'xbego': 
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(8)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xpintar': 
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xjago': 
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(8)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xnolep': 
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(9)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
		    case 'xmonyet':		     
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 				                 	 
            case 'xbabi': 
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(8)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xbeban': 
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(9)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xbaik': 
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(8)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xjahat': 
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(9)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xanjing':  
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 				
            case 'xharam': 
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(9)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	 	
			case 'xpakboy': 
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xpakgirl':  
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(11)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 				
            case 'xwibu': 
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(8)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xhebat': 
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(9)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xsadboy': 
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
		    case 'xsadgirl': 
		    if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(11)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break  
	 	    case 'vganteng': case 'vcantik': case 'vjelek': case 'vgoblok':  
            case 'vbego': case 'vpintar': case 'vjago': case 'vnolep': case 'vmonyet':                 	 
            case 'vbabi': case 'vbeban': case 'vbaik': case 'vjahat': case 'vanjing': 
            case 'vharam': case 'vkontol': case 'vpakboy': case 'vpakgirl': 
            case 'vwibu': case 'vhebat': case 'vsadboy': case 'vsadgirl':			
			if (!isGroup) return reply("ONLY GRUP")
 		    jds = []
		    const AS1 = groupMembers
 		    const CS1 = AS1[Math.floor(Math.random() * AS1.length)]	 	                      
 		    const vcardd = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + `FN:${command1}\n` 
            + `ORG: NAK ${command1};\n`
            + `TEL;type=CELL;type=VOICE;waid=${CS1.jid.split('@')[0]}:+${CS1.jid.split('@')[0]}\n`
            + 'END:VCARD' 
            dha.sendMessage(from, {displayname: "Jeff", vcard: vcardd}, MessageType.contact, { quoted: mek})
            reply(`dia yang *ter${command1}* disini`)			
	 	    break	 	     
            case 'zganteng': case 'zcantik': case 'zjelek': case 'zgoblok':  
            case 'zbego': case 'zpintar': case 'zjago': case 'znolep': case 'zmonyet':                 	 
            case 'zbabi': case 'zbeban': case 'zbaik': case 'zjahat': case 'zanjing': 
            case 'zharam': case 'zkontol': case 'zpakboy': case 'zpakgirl': 
            case 'zwibu': case 'zhebat': case 'zsadboy': case 'zsadgirl':
            nyy = fs.readFileSync('./ztag.webp')
           	if (!isGroup) return reply("ONLY GRUB") 	 
		    const AS11 = groupMembers		     
 		    const CS21 = AS11[Math.floor(Math.random() * AS11.length)]	 	    		     
			dha.sendMessage(from, nyy, sticker, {quoted: { key: { fromMe: false, participant: `${CS21.jid.split('@')[0]}@s.whatsapp.net`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `aku adalah yang *ter${command1}* disini:v` }}})
			break
                   case 'ganteng': case 'cantik': case 'jelek': case 'goblok':  
                   case 'bego': case 'pinter': case 'jago': case 'nolep': case 'monyet':                 	 
                   case 'babi': case 'beban': case 'baik': case 'jahat': case 'anjing': 
                   case 'haram': case 'kontol': case 'pakboy': case 'pakgirl': 
               	   case 'wibu': case 'hebat': case 'sadboy': case 'sadgirl': 
//if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})  
				   if (!isGroup) return reply(`Ini Bukan Grub Ya Ajg🌹🤙`)
 				   jds = []
				   const A1 = groupMembers
  		 		   const B1 = groupMembers
 				   const C1 = A1[Math.floor(Math.random() * A1.length)]
				   D1 = `yang *ter${command}* disini adalah @${C1.jid.split('@')[0]}`                  
				   jds.push(C1.jid)
				   mentions(D1, jds, true)
				   break
                    case 'gantengcek':
//if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})                      	  
                    N = `KE *GANTENGAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 😎`
                    reply(N)
                    break 
                    case 'cantikcek':
//if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})                      	  
                    N = `KE *CANTIKAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}% 😁*`
                    reply(N)
                    break
                    case 'jelekcek':
//if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})                        	
                    N = `KE *J3L3K4N* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 🤢`
                    reply(N)
                    break 
                    case 'goblokcek':
//if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})                      	  
                    N = `KE *GOBLOKAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 🤣`
                    reply(N)
                    break 
                    case 'begocek':
//if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})                      	 
                    N = `KE *BEGO* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 😂`
                    reply(N)
                    break 
                    case 'pintercek':
//if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})                      	  
                    N = `KE *PINTARAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 😗`
                    reply(N)
                    break 
                    case 'jagocek':
//if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})                      	 
                    N = `KE *JAGOAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 💪`
                    reply(N)
                    break 
                    case 'nolepcek':
//if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})                      	  
                    N = `KE *NOLEPAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 🧐`
                    reply(N)
                    break 
                    case 'babicek':
//if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})                      	  
                    N = `KE *BABIAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 🤪`
                    reply(N)
                    break 
                    case 'bebancek':
//if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})                      	  
                    N = `KE *BEBANAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 🤬`
                    reply(N)
                    break 
                    case 'baikcek':
//if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})                      	  
                    N = `KE *BAIKAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 😇`
                    reply(N)
                    break 
                    case 'jahatcek':
//if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})                      	  
                    N = `KE *JAHATAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 😈`
                    reply(N)
                    break 
                    case 'anjingcek':
//if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})                      	   
                    N = `KE *ANJINGAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 👀`
                    reply(N)
                    break                      
                    case 'haramcek':
//if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})                      	  
                    N = `KE *HARAMAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 🥴`
                    reply(N)
                    break  
                    case 'kontolcek':
//if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})                      	   
                    N = `KE *KOMTOLAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 🙂`
                    reply(N)
                    break 
                    case 'pakboycek':
//if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})                      	   
                    N = `KE *PAKBOYZ* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 😏`
                    reply(N)
                    break 
                    case 'pakgirlcek':
//if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})                      	  	
                    N = `KE *PAKGILR* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 😏`
                    reply(N)
                    break             
                    case 'sangecek':
//if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})                      	  
                    N = `JIWA *SANGE* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 🤤`
                    reply(N)
                    break
                    case 'bapercek':
//if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})                      	  
                    N = `JIWA *BEPERAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 😘`
                    reply(N)
                    break      


//////////// SEWA BY YERIKO COPAS?KASIH CREDITS:)
/////////// ERROR? CHAT ME ON WHATSAPP
				case 'sewabot':
				if (!isOwner) return reply(`Sorry Bro Gw Close Dulu Buat All User Soalnya Ntar Jadinya Lu Mainin ♥️`)
				listMsg = {
 buttonText: 'Click Here',
 footerText: `Sewabot By ${NamaBot}`,
 description: `Hai kak @${sender.split('@')[0]}, Silahkan pilih list sewabot yang tersedia`,
 sections: [
                     {
                      "title": `Silahkan Kak🌹🤙`,
 rows: [
                          {
                              "title": "Sewa Permanen",
                              "rowId": "#permanen"
                           },
                           {
                              "title": "Sewa 1 Bulan",
                              "rowId": "#bulanan"
                           },
                           {
                              "title": "Sewa 1 Minggu",
                              "rowId": "#mingguan"
                           },
                                                      {
                              "title": "Sewa User Premium",
                              "rowId": "#buyprem"
                           },
                           {
                              "title": "All Price",
                              "rowId": "#priceall"
                           }        
                           ]
                           }],
                           listType: 1
                           }
dha.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:mek})
break
///// FOR LIST🤙
case 'permanen':
if (!isOwner) return reply(`Sorry Bro Gw Close Dulu Buat All User Soalnya Ntar Jadinya Lu Mainin ♥️`)
sendButMessage(from, `Request : Permanen\nHarga : ${HargaPermanen}\nSilahkan Pilih Salah Satu Payment Yang Tersedia`, `© _${NamaOwner}_`, [
            {
              buttonId: `${prefix}gopayp`,
              buttonText: {
                displayText: `Gopay💴`,
              },
              type: 1,
            },
            {
            buttonId: `${prefix}danap`,
            buttonText: {
            displayText: `Dana💶`,
            },
            type: 1,
            },
            {
              buttonId: `${prefix}ovop`,
              buttonText: {
                displayText: `Ovo💷`,
              },
              type: 1,
            },
          ])        
break
case 'bulanan':
if (!isOwner) return reply(`Sorry Bro Gw Close Dulu Buat All User Soalnya Ntar Jadinya Lu Mainin ♥️`)
sendButMessage(from, `Request : 1 Bulan\nHarga : ${HargaPerbulan}\nSilahkan Pilih Salah Satu Payment Yang Tersedia`, `© _${NamaOwner}_`, [
            {
              buttonId: `${prefix}gopayb`,
              buttonText: {
                displayText: `Gopay💴`,
              },
              type: 1,
            },
            {
            buttonId: `${prefix}danab`,
            buttonText: {
            displayText: `Dana💶`,
            },
            type: 1,
            },
            {
              buttonId: `${prefix}ovob`,
              buttonText: {
                displayText: `Ovo💷`,
              },
              type: 1,
            },
          ])        
break
case 'mingguan':
if (!isOwner) return reply(`Sorry Bro Gw Close Dulu Buat All User Soalnya Ntar Jadinya Lu Mainin ♥️`)
sendButMessage(from, `Request : 1 Minggu\nHarga : ${HargaPerminggu}\nSilahkan Pilih Salah Satu Payment Yang Tersedia`, `© _${NamaOwner}_`, [
            {
              buttonId: `${prefix}gopaym`,
              buttonText: {
                displayText: `Gopay💴`,
              },
              type: 1,
            },
            {
            buttonId: `${prefix}danam`,
            buttonText: {
            displayText: `Dana💶`,
            },
            type: 1,
            },
            {
              buttonId: `${prefix}ovom`,
              buttonText: {
                displayText: `Ovo💷`,
              },
              type: 1,
            },
          ])        
break
case 'buyprem':
if (!isOwner) return reply(`Sorry Bro Gw Close Dulu Buat All User Soalnya Ntar Jadinya Lu Mainin ♥️`)
sendButMessage(from, `Request : Buy Premium\nHarga : ${HargaPremium}\nAktif : Permanen\nSilahkan Pilih Salah Satu Payment Yang Tersedia`, `© _${NamaOwner}_`, [
            {
              buttonId: `${prefix}gopaya`,
              buttonText: {
                displayText: `Gopay💴`,
              },
              type: 1,
            },
            {
            buttonId: `${prefix}danaa`,
            buttonText: {
            displayText: `Dana💶`,
            },
            type: 1,
            },
            {
              buttonId: `${prefix}ovoa`,
              buttonText: {
                displayText: `Ovo💷`,
              },
              type: 1,
            },
          ])        
break

//// FOR PAYMENT 🤙
// PERMANEN PAYMENT

case 'gopayp':
if (!isOwner) return reply(`Sorry Bro Gw Close Dulu Buat All User Soalnya Ntar Jadinya Lu Mainin ♥️`)
sendButMessage(from, `> Nama : _${pushname}_\n•> Nomor : _${sender.split("@")[0]}_\n•> Sewa : _Permanen_\n •> Harga : ${HargaPermanen}\nCaranya :\n1. Buka Aplikasi Gopay via HP-mu.\n2. Pilih Bayar\n3. Masukan Nomor ${NomorGopay}\n4. dan Masukkan Nominal ${HargaPermanen}\n5. Transfer`, `© ${NamaOwner}`, [
            {
              buttonId: `#menu`,
              buttonText: {
                displayText: `BACK TO MENU`,
              },
              type: 1,
            }
          ]);        
break
case 'danap':
if (!isOwner) return reply(`Sorry Bro Gw Close Dulu Buat All User Soalnya Ntar Jadinya Lu Mainin ♥️`)
sendButMessage(from, `> Nama : _${pushname}_\n•> Nomor : _${sender.split("@")[0]}_\n•> Sewa : _Permanen_\n •> Harga : ${HargaPermanen}\nCaranya :\n1. Buka Aplikasi Dana via HP-mu.\n2. Pilih Bayar\n3. Masukan Nomor ${NomorDana}\n4. dan Masukkan Nominal ${HargaPermanen}\n5. Transfer`, `© ${NamaOwner}`, [
            {
              buttonId: `#menu`,
              buttonText: {
                displayText: `BACK TO MENU`,
              },
              type: 1,
            }
          ]);
        break
case 'ovop':
if (!isOwner) return reply(`Sorry Bro Gw Close Dulu Buat All User Soalnya Ntar Jadinya Lu Mainin ♥️`)
sendButMessage(from, `> Nama : _${pushname}_\n•> Nomor : _${sender.split("@")[0]}_\n•> Sewa : _Permanen_\n •> Harga : ${HargaPermanen}\nCaranya :\n1. Buka Aplikasi Ovo via HP-mu.\n2. Pilih Bayar\n3. Masukan Nomor ${NomorOvo}\n4. dan Masukkan Nominal ${HargaPermanen}\n5. Transfer`, `© ${NamaOwner}`, [
            {
              buttonId: `#menu`,
              buttonText: {
                displayText: `BACK TO MENU`,
              },
              type: 1,
            }
          ]);        
break

//BULAN PAYMENT

case 'gopayb':
if (!isOwner) return reply(`Sorry Bro Gw Close Dulu Buat All User Soalnya Ntar Jadinya Lu Mainin ♥️`)
sendButMessage(from, `> Nama : _${pushname}_\n•> Nomor : _${sender.split("@")[0]}_\n•> Sewa : _1 Bulan_\n •> Harga : ${HargaPerbulan}\nCaranya :\n1. Buka Aplikasi Gopay via HP-mu.\n2. Pilih Bayar\n3. Masukan Nomor ${NomorGopay}\n4. dan Masukkan Nominal ${HargaPerbulan}\n5. Transfer`, `© ${NamaOwner}`, [
            {
              buttonId: `#menu`,
              buttonText: {
                displayText: `BACK TO MENU`,
              },
              type: 1,
            }
          ]);        
break
case 'danab':
if (!isOwner) return reply(`Sorry Bro Gw Close Dulu Buat All User Soalnya Ntar Jadinya Lu Mainin ♥️`)
sendButMessage(from, `> Nama : _${pushname}_\n•> Nomor : _${sender.split("@")[0]}_\n•> Sewa : _1 Bulan_\n •> Harga : ${HargaPerbulan}\nCaranya :\n1. Buka Aplikasi Dana via HP-mu.\n2. Pilih Bayar\n3. Masukan Nomor ${NomorDana}\n4. dan Masukkan Nominal ${HargaPerbulan}\n5. Transfer`, `© ${NamaOwner}`, [
            {
              buttonId: `#menu`,
              buttonText: {
                displayText: `BACK TO MENU`,
              },
              type: 1,
            }
          ]);
        break
case 'ovob':
if (!isOwner) return reply(`Sorry Bro Gw Close Dulu Buat All User Soalnya Ntar Jadinya Lu Mainin ♥️`)
sendButMessage(from, `> Nama : _${pushname}_\n•> Nomor : _${sender.split("@")[0]}_\n•> Sewa : _1 Bulan_\n •> Harga : ${HargaPerbulan}\nCaranya :\n1. Buka Aplikasi Ovo via HP-mu.\n2. Pilih Bayar\n3. Masukan Nomor ${NomorOvo}\n4. dan Masukkan Nominal ${HargaPerbulan}\n5. Transfer`, `© ${NamaOwner}`, [
            {
              buttonId: `#menu`,
              buttonText: {
                displayText: `BACK TO MENU`,
              },
              type: 1,
            }
          ]);
        break

// MINGGU PAYMENT

case 'gopaym':
if (!isOwner) return reply(`Sorry Bro Gw Close Dulu Buat All User Soalnya Ntar Jadinya Lu Mainin ♥️`)
sendButMessage(from, `> Nama : _${pushname}_\n•> Nomor : _${sender.split("@")[0]}_\n•> Sewa : _1 Minggu_\n •> Harga : ${HargaPerminggu}\nCaranya :\n1. Buka Aplikasi Gopay via HP-mu.\n2. Pilih Bayar\n3. Masukan Nomor ${NomorGopay}\n4. dan Masukkan Nominal ${HargaPerminggu}\n5. Transfer`, `© ${NamaOwner}`, [
            {
              buttonId: `#menu`,
              buttonText: {
                displayText: `BACK TO MENU`,
              },
              type: 1,
            }
          ]);
        break
case 'danam':
if (!isOwner) return reply(`Sorry Bro Gw Close Dulu Buat All User Soalnya Ntar Jadinya Lu Mainin ♥️`)
sendButMessage(from, `> Nama : _${pushname}_\n•> Nomor : _${sender.split("@")[0]}_\n•> Sewa : _1 Minggu_\n •> Harga : ${HargaPerminggu}\nCaranya :\n1. Buka Aplikasi Dana via HP-mu.\n2. Pilih Bayar\n3. Masukan Nomor ${NomorDana}\n4. dan Masukkan Nominal ${HargaPerminggu}\n5. Transfer`, `© ${NamaOwner}`, [
            {
              buttonId: `#menu`,
              buttonText: {
                displayText: `BACK TO MENU`,
              },
              type: 1,
            }
          ]);
        break
case 'ovom':
if (!isOwner) return reply(`Sorry Bro Gw Close Dulu Buat All User Soalnya Ntar Jadinya Lu Mainin ♥️`)
sendButMessage(from, `> Nama : _${pushname}_\n•> Nomor : _${sender.split("@")[0]}_\n•> Sewa : _1 Minggu_\n •> Harga : ${HargaPerminggu}\nCaranya :\n1. Buka Aplikasi Ovo via HP-mu.\n2. Pilih Bayar\n3. Masukan Nomor ${NomorOvo}\n4. dan Masukkan Nominal ${HargaPerminggu}\n5. Transfer`, `© ${NamaOwner}`, [
            {
              buttonId: `#menu`,
              buttonText: {
                displayText: `BACK TO MENU`,
              },
              type: 1,
            }
          ]);
        break

// PREMIUM PAYMENT

case 'gopaya':
if (!isOwner) return reply(`Sorry Bro Gw Close Dulu Buat All User Soalnya Ntar Jadinya Lu Mainin ♥️`)
sendButMessage(from, `> Nama : _${pushname}_\n•> Nomor : _${sender.split("@")[0]}_\n•> Sewa : _User Premium\n•> Aktif : Permanen •> Harga : ${HargaPremium}\nCaranya :\n1. Buka Aplikasi Gopay via HP-mu.\n2. Pilih Bayar\n3. Masukan Nomor ${NomorGopay}\n4. dan Masukkan Nominal ${HargaPremium}\n5. Transfer`, `© ${NamaOwner}`, [
            {
              buttonId: `#menu`,
              buttonText: {
                displayText: `BACK TO MENU`,
              },
              type: 1,
            }
          ]);
        break
case 'danaa':
if (!isOwner) return reply(`Sorry Bro Gw Close Dulu Buat All User Soalnya Ntar Jadinya Lu Mainin ♥️`)
sendButMessage(from, `> Nama : _${pushname}_\n•> Nomor : _${sender.split("@")[0]}_\n•> Sewa : _User Premium\n•> Aktif : Permanen •> Harga : ${HargaPremium}\nCaranya :\n1. Buka Aplikasi Dana via HP-mu.\n2. Pilih Bayar\n3. Masukan Nomor ${NomorDana}\n4. dan Masukkan Nominal ${HargaPremium}\n5. Transfer`, `© ${NamaOwner}`, [
            {
              buttonId: `#menu`,
              buttonText: {
                displayText: `BACK TO MENU`,
              },
              type: 1,
            }
          ]);
        break
case 'ovoa':
if (!isOwner) return reply(`Sorry Bro Gw Close Dulu Buat All User Soalnya Ntar Jadinya Lu Mainin ♥️`)
sendButMessage(from, `> Nama : _${pushname}_\n•> Nomor : _${sender.split("@")[0]}_\n•> Sewa : _User Premium\n•> Aktif : Permanen •> Harga : ${HargaPremium}\nCaranya :\n1. Buka Aplikasi Ovo via HP-mu.\n2. Pilih Bayar\n3. Masukan Nomor ${NomorOvo}\n4. dan Masukkan Nominal ${HargaPremium}\n5. Transfer`, `© ${NamaOwner}`, [
            {
              buttonId: `#menu`,
              buttonText: {
                displayText: `BACK TO MENU`,
              },
              type: 1,
            }
          ]);        
break
case 'tes':
case 'test':
reply('On')
break
if (budy.startsWith('x')){
if (!isOwner) return
try {
return dha.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}
if (budy.startsWith('=>')){
if (!isOwner && !mek.key.fromMe) return
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mWOWO\x1b[1;37m', ']', time, color("=>", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}
if (budy.startsWith('$')){
if (!mek.key.fromMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`@Bot Wangsaf:~ ${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (budy.startsWith('>')){
if (!mek.key.fromMe && !isOwner) return
try {
return dha.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}
if (!isOwner) return
if (budy.startsWith('+')) {
try {
console.log(color('[ EVAL ]', 'pink'), color(time), budy, color('dari', 'yellow'), pushname, color('di'), isGroup ? groupName : 'Private Chat')
reply(require('util').format(eval(`;(async () => { ${budy.slice(2)} })()`)))
} catch(e) {
console.log(e)
err = String(e)
js = JSON.stringify(e, null, 2)
if (js == '{}') js = { err }
js = JSON.stringify(js, null, 2)
js = '```' + js + '```'
reply('_' + err + '_\n\n' + js)
}
}
	} 
if (isGroup && budy != undefined) {
} else {
console.log('[',color('TEXT','teal'),']',`Message : ${budy} From`, color(pushname))
}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	}
}



