require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const { musicallydown, ssstik, keeptiktok, tiktokdownload } = require('./src/function')
const got = require('got')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const cheerio = require('cheerio')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const nexusnw = require('xfarr-api')


//rpg function\\
   const { 
     addInventoriDarah, 
      cekDuluJoinAdaApaKagaDiJson, 
      addDarah, 
      kurangDarah, 
     getDarah 
   }  = require('./storage/user/darah.js')
   const { 
     cekInventoryAdaAtauGak, 
      addInventori,  
       addBesi, 
       addEmas, 
       addEmerald,
       addUmpan,
       addPotion,
       kurangBesi, 
       kurangEmas, 
       kurangEmerald, 
       kurangUmpan,
       kurangPotion,
       getBesi, 
      getEmas, 
     getEmerald,
     getUmpan,
    getPotion
   } = require('./storage/user/alat_tukar.js')
   const { 
    addInventoriMonay, 
    cekDuluJoinAdaApaKagaMonaynyaDiJson, 
    addMonay, 
    kurangMonay, 
   getMonay 
   } = require('./storage/user/monay.js')
   const { 
    addInventoriLimit, 
    cekDuluJoinAdaApaKagaLimitnyaDiJson, 
    addLimit, 
    kurangLimit, 
    getLimit 
   } = require('./storage/user/limit.js')
   const { 
    cekDuluHasilBuruanNya, 
     addInventoriBuruan, 
     addIkan,
      addAyam, 
      addKelinci, 
      addDomba, 
      addSapi,
      addGajah,
      kurangIkan,
      kurangAyam, 
      kurangKelinci, 
      kurangDomba, 
      kurangSapi,
      kurangGajah,
      getIkan,
      getAyam, 
      getKelinci, 
      getDomba,
     getSapi,
    getGajah
   } = require('./storage/user/buruan.js')
   let DarahAwal =  global.rpg.darahawal
   const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
   const isCekDarah = getDarah(m.sender)
   const isUmpan = getUmpan(m.sender)
   const isPotion = getPotion(m.sender)
   const isIkan = getIkan(m.sender)
   const isAyam = getAyam(m.sender)
   const isKelinci = getKelinci(m.sender)
   const isDomba = getDomba(m.sender)
   const isSapi = getSapi(m.sender)
   const isGajah = getGajah(m.sender)
   const isMonay = getMonay(m.sender)
   const isLimit = getLimit(m.sender)
   const isBesi = getBesi(m.sender)
   const isEmas = getEmas(m.sender)
   const isEmerald = getEmerald(m.sender)
   const isInventory = cekInventoryAdaAtauGak(m.sender)
   const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
   const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
   const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
   const ikan = ['🐟','🐠','🐡']   

//rpg database\\
 let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./storage/user/hasil_buruan.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))

//Database\\
let setik = JSON.parse(fs.readFileSync('./database/setik.json'));
let vien = JSON.parse(fs.readFileSync('./database/vien.json'));
let imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))
let videox = JSON.parse(fs.readFileSync('./database/video.json'))

//read database\\
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = Anony= async (Anony, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await Anony.decodeJid(Anony.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const from = mek.key.remoteJid
	    const type = Object.keys(mek.message)[0]        
	    const content = JSON.stringify(mek.message)

        //group\\
        const groupMetadata = m.isGroup ? await Anony.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	    
        //member\\
        let picaks = [flaming,fluming,flarun,flasmurf]
		let picak = picaks[Math.floor(Math.random() * picaks.length)]
		
          try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	
	//group target \\
const reply = (teks) => {
            Anony.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": ` 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ 🔐`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./Anony/anony.jpg`),"sourceUrl": "https://telegra.ph/file/6852aab70c51bf2797244.jpg"}}}, { quoted: m})
        }
        
        const replay = (teks) => {
            Anony.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": ` 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ 🔐`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./Anony/anony.jpg`),"sourceUrl": "https://telegra.ph/file/6852aab70c51bf2797244.jpg"}}}, { quoted: m})
        }
	
        //Public & Self\\
        if (!Anony.public) {
            if (!m.key.fromMe) return
        }

	
	//reset limit every 12 hours\\
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Limit Reseted')
        }, {
            scheduled: true,
            timezone: "Asia/Kolkata"
        })
        
	//auto set bio\\
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await Anony.setStatus(`${Anony.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	
	  //antilink\\
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        reply(`「 ANTI LINK 」\n\nYou have been detected sending a group link, sorry you will be kicked !`)
        if (!isBotAdmins) return reply(`I Am Not An Admin, How Could I Kick Somebody Who Send Link 😒`)
        let gclink = (`https://chat.whatsapp.com/`+await Anony.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Sent This Group Link❤️`)
        if (isAdmins) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Are An Admin Of The Group❤️`)
        if (isCreator) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Are My Owner 😘`)
        Anony.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }

 

      //Mute Chat\\
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
        
        //media detect \\
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        
        //Respon Cmd with media\\
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: Anony.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, Anony.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        Anony.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?give up|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Answer The Following Questions :\n${room.soal}\n\n\nThere Is ${room.jawaban.length} Answer ${room.jawaban.find(v => v.includes(' ')) ? `(Some Answers Have Spaces)` : ''}
${isWin ? `All Answers Answered` : isSurender ? 'Surrender!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            Anony.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Anony.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess The Song' }, type: 1 }], `🎮 Guess The Music 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, Anony.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await reply(`🎮 Math Quiz 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Send ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Anony.sendButtonText(m.chat, [{ buttonId: 'guess picture', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `🎮 Guess The Picture 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, Anony.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Anony.sendButtonText(m.chat, [{ buttonId: 'guess word', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `🎮 Guess The Word 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, Anony.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Anony.sendButtonText(m.chat, [{ buttonId: 'guess blank', buttonText: { displayText: 'Guess The Blank' }, type: 1 }], `🎮 Guess The Blank 🎮\n\nCorrect Answer 🎉\n*${deskripsi}*\n\nWant To Play Again? Press The Button Below`, Anony.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Anony.sendButtonText(m.chat, [{ buttonId: 'guess sentence', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], `🎮 Guess The Sentence 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, Anony.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Anony.sendButtonText(m.chat, [{ buttonId: 'guess lyrics', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `🎮 Guess The Lyrics 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, Anony.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Anony.sendButtonText(m.chat, [{ buttonId: 'guess riddle', buttonText: { displayText: 'Guess The Riddle' }, type: 1 }], `🎮 Guess The Riddle 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, Anony.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
        
 
switch(command) {
        case 'userlimit': 
{      
   let txt = `「 *ALL LIMIT USER* 」\n\n`
     for (let i of _limit){
     txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Limit* : ${i.limit}\n`
     }
    reply(txt)       
  }
 break

//film-bot-buy-anonyx

case 'news': {
        	Anony.sendPresenceUpdate('composing', m.chat) 
                

const anony = `https://anony-vip-edition.herokuapp.com/api/news?apikey=hiruwa`;

		const response = await got(anony);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) 
			
			var title = json.news[0].title
			var img = json.news[0].image
			var rm = json.news[0].ReadMore
			var time = json.news[0].dateAndTime
			
    
           
			
			let buttons = [
                    {buttonId: `id1`, buttonText: {displayText: '👍'}, type: 1},
                    {buttonId: `id2`, buttonText: {displayText: '❤️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: img },
                    caption: `🔐 ${title}
                    


Read News : ${rm}

${time}`,
                    footer: '🔥 Fire NEWS By Anony 🔥',
                    buttons: buttons,
                    headerType: 4
                }
                
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
	
}
break

// dr downlod 

case 'down': {
                if (!text) return reply(`Example : down link`)
	
	 Anony.sendMessage(m.chat, { document: { url: text }, mimetype: 'video/x-matroska', fileName: 'Anonymous-Films.mkv' }, { quoted: m })
	
}
break

case 'reupload-id-1a2wif': {
                     if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
 
	
	 Anony.sendMessage(m.chat, { document: { url: 'https://drive.google.com/u/2/uc?id=1XWSTZ3nQ8Lm228UT1ngLQ4jdm7YZuzuH&export=download&confirm=t&uuid=06369dd1-1906-4559-b3b0-f467f61b3773' }, mimetype: 'video/x-matroska', fileName: '𝚃𝙷𝙴 𝚆𝙸𝚃𝙲𝙷 𝙿𝙰𝚁𝚃 1 𝚃𝙷𝙴 𝚂𝚄𝙱𝚅𝙴𝚁𝚂𝙸𝙾𝙽 🔥𝔽𝕀ℝ𝔼 🎥 𝕄𝕆𝕍𝕀𝔼🔥.mkv' }, { quoted: m })
reply(`*Uploading Plase Wait.....*`)	
}
break





case 'tk': {
const download = require("@phaticusthiccy/open-apis");
if (!text) return reply(`tk ( text )`) 



download.tiktok( `${text}` ).then(async (data) => {
    console.log(data.server1.video)
    
    let buttons = [
                    {buttonId: `audio`, buttonText: {displayText: 'Audio ⇛'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: data.server1.video },
                    caption: `Tik tok ❤️🔐`,
                    footer: '🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break




case 'alive': {
   reply(`*Alive now*`)
}
break

// subtitles serch


case 'hiru': {
var cheerio = require("cheerio")
var axios = require("axios")

const url = `https://anony-vip-edition.herokuapp.com/api/news?apikey=hiruwa`;
//const Url = encodeURI(url);

    axios.get(url)
        .then(response => {

var link = response.data.news[0].ReadMore 
        


          

//console.log(link)
const Url = encodeURI(link);
    
	   
   axios.get(Url)
        .then(response => {

           
	    results = [];
            const $ = cheerio.load(response.data);
               $('.row div.col-sm-12 div.main-article-section ').each((i, element) => {
            
            
            const img = $(element).find('div.main-article-banner img.lazyload').attr('data-src');
            const del = $('script').remove();
            const news = $(element,'div.article-phara').text().replace('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n','').replace('\n\n\n\n\n\n','').replace('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n','').replace('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n','').replace('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n','').replace('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n','').replace('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n','').replace('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n','').replace('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n','').replace('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n','').replace('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n','').replace('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n','').replace('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n','').replace('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n','').replace('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n','').replace('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n','').replace('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n','').replace('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n','').replace('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n','').replace('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n','').replace('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n','').replace('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n','').replace('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n','').replace('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n','').replace('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n','').replace('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n','').replace('\n\n\n\n\n\n\n',' ');
            
             $('div center').each((i, element) => {
            
            
            const title = $(element).find('h1.main-tittle').text();
            const date = $(element).find('p').text();
            
            
            //console.log(img, date, title, news)
               results.push({ img , date , title, news })
           });
           
	       });
           
        //console.log(results[6].title)
         
         var img = results[6].img
         var date = results[6].date
         var title = results[6].title
         var news = results[6].news
           
       
             
             
             let buttons = [
                    {buttonId: `id1`, buttonText: {displayText: '👍'}, type: 1},
                    {buttonId: `id2`, buttonText: {displayText: '❤️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: img },
                    caption: `🔐 ${title}
                    


${news}

${date}`,
                    footer: '🔥 Fire Movie By Anony 🔥',
                    buttons: buttons,
                    headerType: 4
                }
                
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
	
            
           
           });
           });
}
break



case 'sub': {
                if (!text) return reply(`Example : Sub Prey`)

const anony = `https://anony-vip-edition.herokuapp.com/api/search/${text}`;

  try {
		const response = await got(anony);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) 
			
			var title = json.data[0].title
			var url = json.data[0].Url
			var thumb = json.data[0].thumbnail
			
			let buttons = [
                    {buttonId: `thanks`, buttonText: {displayText: 'Thanks 🔥'}, type: 1},
                    {buttonId: `list`, buttonText: {displayText: 'Film List'}, type: 1}
                ]
                let buttonMessage = {
                    document: { url: url },
                    mimetype: 'application/zip',
                    fileName: `${title}-Anonymous.zip`,
                    caption: `🔐 Title : ${title}
🔐 Url : ${url}`,
                    footer: '🔥 Fire Movie By Anony 🔥',
                    buttons: buttons,
                    previewType: 'PHOTO',
					thumbnailUrl: thumb,
					thumbnail: thumb,
					sourceUrl: url,
                    headerType: 4
                }
                
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
	
  }catch{
    reply('No Subtitle Found Our Database 😔')
}
}
break


//film


case 'charlie' : {
            	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
	
	const charlie = `${pushname}
	
	🍁... 777 𝙲𝙷𝙰𝚁𝙻𝙸𝙴 (2022) ...🍁
	
	📌 🄸🄼🄳🄱 - 9.1/10
	
	🗃️ 𝙲𝙰𝚃𝙴𝙶𝙾𝚁𝚈 - 𝙰𝙲𝚃𝙸𝙾𝙽 / 𝙲𝙾𝙼𝙴𝙳𝙴𝚈
	
	*🈲 𝙻𝙰𝙽𝙶𝚄𝙰𝙶𝙴 - 𝙺𝙰𝙽𝙳𝙷𝙰
	
	🎥 𝚀𝚄𝙻𝙸𝚃𝚈 - 720𝚙
	
	🔊 𝙰𝚄𝙳𝙸𝙾 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 -  6 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 192𝚔𝚋𝚙𝚜 [𝙳𝙾𝙻𝙱𝚈 𝙳𝙸𝙶𝙸𝚃𝙰𝙻 𝙿𝙻𝚄𝚂]
	
	⚙️ 𝙱𝚒𝚝 𝙳𝙴𝙿𝚃𝙷 - 8𝚋𝚒𝚝𝚜 1 𝙼𝙸𝙻𝙸𝙾𝙽 𝙲𝙾𝙻𝙾𝚁
	
	🔏 𝙴𝙽𝙲𝙾𝙳𝙴 - 𝙷.265| 𝙷𝙴𝚅𝙲 | 𝙷𝙳-𝚁𝙸𝙿
	
	⏳𝚁𝚄𝙽 𝚃𝙸𝙼𝙴 - 2𝙷 44𝙼
	
	🧾 𝚂𝚄𝙱𝚃𝙸𝚃𝙻𝙴 - සිංහල
	
	📥 𝚂𝙸𝚉𝙴 - 964𝙼𝙱`

                let buttons = [
                    {buttonId: 'fm-id-01', buttonText: {displayText: 'DOWNLOAD'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://assets.gadgets360cdn.com/pricee/assets/product/202205/777-Charlie-poster_1653245631.jpg'},
                    caption: charlie ,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break





case 'jugjugg-jeeyo' : case 'jugjugg' : {
            	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
	
	const charlie = `${pushname}
	
*🍁... 𝙹𝚄𝙶𝙹𝚄𝙶𝙶 𝙹𝙴𝙴𝚈𝙾 (2022) | දිඟුකල් සතුටින් ජීවත් වේවා! ...🍁*


*📌 🄸🄼🄳🄱* - *7.2/10*


*🗃️ 𝙲𝙰𝚃𝙴𝙶𝙾𝚁𝚈 - 𝙳𝚁𝙰𝙼𝙰 / 𝙲𝙾𝙼𝙴𝙳𝙴𝚈*

*🈲 𝙻𝙰𝙽𝙶𝚄𝙰𝙶𝙴 - 𝙷𝙸𝙽𝙳𝙸*
*🎥 𝚀𝚄𝙻𝙸𝚃𝚈 - 720𝚙*
*🔊 𝙰𝚄𝙳𝙸𝙾 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 -  6 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 192𝚔𝚋𝚙𝚜 [𝙳𝙾𝙻𝙱𝚈 𝙳𝙸𝙶𝙸𝚃𝙰𝙻 𝙿𝙻𝚄𝚂]*
*⚙️ 𝙱𝚒𝚝 𝙳𝙴𝙿𝚃𝙷 - 8𝚋𝚒𝚝𝚜 1 𝙼𝙸𝙻𝙸𝙾𝙽 𝙲𝙾𝙻𝙾𝚁*
*🔏 𝙴𝙽𝙲𝙾𝙳𝙴 - 𝙷.265| 𝙷𝙴𝚅𝙲 | 𝙷𝙳-𝚁𝙸𝙿*
*⏳𝚁𝚄𝙽 𝚃𝙸𝙼𝙴 - 2𝙷 28𝙼*
*🧾 𝚂𝚄𝙱𝚃𝙸𝚃𝙻𝙴 - සිංහල*
*📥 𝚂𝙸𝚉𝙴 - 950𝙼𝙱*

*⚔️🛡️ 𝔽𝕀ℝ𝔼 𝕄𝕆𝕍𝕀𝔼 ⚔️🛡️*`

                let buttons = [
                    {buttonId: 'fm-id-02', buttonText: {displayText: 'DOWNLOAD'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://m.media-amazon.com/images/M/MV5BMTg5YjlkZmItZWZjOC00ZWQ5LTk2MjctYmI2ZGYzODY0N2ZmXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg'},
                    caption: charlie ,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break


case 'rocketry' : case 'rocketry-the-nambi-effect' : {
            	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
	
	const charlie = `${pushname}
	
*🍁... 𝚁𝙾𝙲𝙺𝙴𝚃𝚁𝚈: 𝚃𝙷𝙴 𝙽𝙰𝙼𝙱𝙸 𝙴𝙵𝙵𝙴𝙲𝚃 (2022) ...🍁*


*📌 🄸🄼🄳🄱* - *9.2/10*


*🗃️ 𝙲𝙰𝚃𝙴𝙶𝙾𝚁𝚈 - 𝙳𝚁𝙰𝙼𝙰 / 𝙰𝙲𝚃𝙸𝙾𝙽*

*🈲 𝙻𝙰𝙽𝙶𝚄𝙰𝙶𝙴 - 𝙷𝙸𝙽𝙳𝙸 , 𝚃𝙰𝙼𝙸𝙻, 𝙺𝙰𝙽𝙽𝙰𝙳𝙰 & 𝚃𝙴𝙻𝚄𝙶𝚄*
*🎥 𝚀𝚄𝙻𝙸𝚃𝚈 - 720𝚙*
*🔊 𝙰𝚄𝙳𝙸𝙾 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 - 4 𝚊𝚞𝚍𝚒𝚘 𝚝𝚛𝚊𝚌𝚔 𝚠𝚒𝚝𝚑 2 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 61𝚔𝚋𝚙𝚜*
*⚙️ 𝙱𝚒𝚝 𝙳𝙴𝙿𝚃𝙷 - 8𝚋𝚒𝚝𝚜 1 𝙼𝙸𝙻𝙸𝙾𝙽 𝙲𝙾𝙻𝙾𝚁*
*🔏 𝙴𝙽𝙲𝙾𝙳𝙴 - 𝙷.265| 𝙷𝙴𝚅𝙲 | 𝚆𝙴𝙱-𝙳𝙻*
*⏳𝚁𝚄𝙽 𝚃𝙸𝙼𝙴 - 2𝙷 35𝙼*
*🧾 𝚂𝚄𝙱𝚃𝙸𝚃𝙻𝙴 - සිංහල(𝚐𝚘𝚘𝚐𝚕𝚎 𝚝𝚛𝚊𝚗𝚜𝚕𝚊𝚝𝚎𝚍)*
📥 𝚂𝙸𝚉𝙴 - 950𝙼𝙱*


*⚔️🛡️ 𝔽𝕀ℝ𝔼 𝕄𝕆𝕍𝕀𝔼  ⚔️🛡️*`

                let buttons = [
                    {buttonId: 'fm-id-03', buttonText: {displayText: 'DOWNLOAD'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://m.media-amazon.com/images/M/MV5BMjNjNWUxMjUtMTBkMC00NTNlLTg0NTctZmJmMDYzMTMwMWQwXkEyXkFqcGdeQXVyOTI3MzI4MzA@._V1_.jpg'},
                    caption: charlie ,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break

case 'veetla-vishesham' : {
            	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
	
	const charlie = `${pushname}
	
*🍁... Veetla Vishesham (2022) ...🍁*

*📌 🄸🄼🄳🄱* - *7.2/10*
*🎥 𝚀𝚄𝙻𝙸𝚃𝚈 - 720𝚙*
*🧾 𝚂𝚄𝙱𝚃𝙸𝚃𝙻𝙴 - සිංහල*
*📥 𝚂𝙸𝚉𝙴 - 800𝚖𝚋

*⚔️🛡️ 𝔽𝕀ℝ𝔼 𝕄𝕆𝕍𝕀𝔼 ⚔️🛡️*`

                let buttons = [
                    {buttonId: 'fm-id-04', buttonText: {displayText: 'DOWNLOAD'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://m.media-amazon.com/images/M/MV5BMjM2MzFiOTMtYWRjZC00YWUzLWI1M2QtZDUyNmU0NGRkMDVlXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg'},
                    caption: charlie ,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break

case 'forensic' : {
            	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
	
	const charlie = `${pushname}
	
🍂 ... 𝙵𝙾𝚁𝙴𝙽𝚂𝙸𝙲 (2020) | අපරාධයක විද්‍යාව ... 🍂


📌 🄸🄼🄳🄱 - 6.8/10


🗃️ 𝙲𝙰𝚃𝙴𝙶𝙾𝚁𝚈 - 𝙲𝚁𝙸𝙼𝙴 / 𝚃𝙷𝚁𝙸𝙻𝙴𝚁

🈲 𝙻𝙰𝙽𝙶𝚄𝙰𝙶𝙴 - 𝙼𝙰𝙻𝙰𝚈𝙰𝙻𝙰𝙼
🎥 𝚀𝚄𝙻𝙸𝚃𝚈 - 720𝚙
🔊 𝙰𝚄𝙳𝙸𝙾 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 - 2 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 32𝚔𝚋𝚙𝚜
⚙️ 𝙱𝚒𝚝 𝙳𝙴𝙿𝚃𝙷 - 10𝚋𝚒𝚝𝚜 1 𝙱𝙸𝙻𝙸𝙾𝙽 𝙲𝙾𝙻𝙾𝚁
🔏 𝙴𝙽𝙲𝙾𝙳𝙴 - 𝙷.265| 𝙷𝙴𝚅𝙲 | 𝚆𝙴𝙱-𝚁𝙸𝙿
⏳𝚁𝚄𝙽 𝚃𝙸𝙼𝙴 - 2𝙷 14𝙼
🧾 𝚂𝚄𝙱𝚃𝙸𝚃𝙻𝙴 - සිංහල
📥 𝚂𝙸𝚉𝙴 - 1.21𝙶𝙱


⚔️🛡️ 𝔽𝕀ℝ𝔼 𝕄𝕆𝕍𝕀𝔼  ⚔️🛡️`

                let buttons = [
                    {buttonId: 'fm-id-05', buttonText: {displayText: 'DOWNLOAD'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://m.media-amazon.com/images/M/MV5BM2ZkOTZmNTYtMWFmZi00MmY1LTkxZjgtNWViNjE3ZmU0YWJhXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_.jpg'},
                    caption: charlie ,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break

case 'ben-10' : {
            	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
	
	const charlie = `${pushname}
	
🍂 ... 𝙱𝙴𝙽 10: 𝙰𝙻𝙸𝙴𝙽 𝚂𝚆𝙰𝚁𝙼 | දැන් වැඩ පෙන්වන වෙලාව ... 🍂

📌 🄸🄼🄳🄱 - 4.5/10

🗃️ 𝙲𝙰𝚃𝙴𝙶𝙾𝚁𝚈 - 𝙰𝙲𝚃𝙸𝙾𝙽 / 𝙰𝙳𝚅𝙴𝙽𝙲𝚃𝙷𝙴𝚁

🈲 𝙻𝙰𝙽𝙶𝚄𝙰𝙶𝙴 - 𝙴𝙽𝙶𝙻𝙸𝚂𝙷
🎥 𝚀𝚄𝙻𝙸𝚃𝚈 - 1080𝚙
🔊 𝙰𝚄𝙳𝙸𝙾 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 - 6 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 384𝚔𝚋𝚙𝚜
⚙️ 𝙱𝚒𝚝 𝙳𝙴𝙿𝚃𝙷 - 10𝚋𝚒𝚝𝚜 1 𝙱𝙸𝙻𝙸𝙾𝙽 𝙲𝙾𝙻𝙾𝚁
🔏 𝙴𝙽𝙲𝙾𝙳𝙴 - 𝙷.264| 𝙰𝚅𝙲 | 𝙱𝚁-𝚁𝙸𝙿
⏳𝚁𝚄𝙽 𝚃𝙸𝙼𝙴 - 1𝙷 09𝙼
🧾 𝚂𝚄𝙱𝚃𝙸𝚃𝙻𝙴 - සිංහල
📥 𝚂𝙸𝚉𝙴 - 1.27𝙶𝙱


*⚔️🛡️ 𝔽𝕀ℝ𝔼 𝕄𝕆𝕍𝕀𝔼  ⚔️🛡️*`

                let buttons = [
                    {buttonId: 'fm-id-06', buttonText: {displayText: 'DOWNLOAD'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://m.media-amazon.com/images/M/MV5BMTc3ODA3ODY0NV5BMl5BanBnXkFtZTcwOTA3MzAwMw@@._V1_FMjpg_UX1000_.jpg'},
                    caption: charlie ,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break



case 'spider-man-no-way-home' : {                         
            	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
	
	const charlie = `${pushname}
	
🍂... 𝚂𝙿𝙸𝙳𝙴𝚁 𝙼𝙰𝙽: 𝙽𝙾 𝚆𝙰𝚈 𝙷𝙾𝙼𝙴 (2021) | මකුලු මිනිසාගේ රහස හෙළිවේවිද..? ...🍂

📌 🄸🄼🄳🄱 - 8.3/10


🗃️ 𝙲𝙰𝚃𝙴𝙶𝙾𝚁𝚈 - 𝙰𝙲𝚃𝙸𝙾𝙽 / 𝙰𝙳𝚅𝙴𝙽𝙲𝚃𝙷𝙴𝚁

🈲 𝙻𝙰𝙽𝙶𝚄𝙰𝙶𝙴 - 𝙴𝙽𝙶𝙻𝙸𝚂𝙷
🎥 𝚀𝚄𝙻𝙸𝚃𝚈 - 1080𝚙
🔊 𝙰𝚄𝙳𝙸𝙾 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 - 6 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 206𝚔𝚋𝚙𝚜
⚙️ 𝙱𝚒𝚝 𝙳𝙴𝙿𝚃𝙷 - 10𝚋𝚒𝚝𝚜 1 𝙱𝙸𝙻𝙸𝙾𝙽 𝙲𝙾𝙻𝙾𝚁
🔏 𝙴𝙽𝙲𝙾𝙳𝙴 - 𝙷.265| 𝙷𝙴𝚅𝙲 | 𝙱𝙻𝚄𝚁𝙰𝚈
⏳𝚁𝚄𝙽 𝚃𝙸𝙼𝙴 - 2𝙷 28𝙼
🧾 𝚂𝚄𝙱𝚃𝙸𝚃𝙻𝙴 - සිංහල
📥 𝚂𝙸𝚉𝙴 - 1.24𝙶𝙱


*⚔️🛡️ 𝔽𝕀ℝ𝔼 𝕄𝕆𝕍𝕀𝔼 ⚔️🛡️*`

                let buttons = [
                    {buttonId: 'fm-id-07', buttonText: {displayText: 'DOWNLOAD'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg'},
                    caption: charlie ,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break



case 'the-nun' : {
            	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
	
	const charlie = `${pushname}
	
🍂... 𝚃𝙷𝙴 𝙽𝚄𝙽 (2018) | ශාපලත් කන්‍යාරාමයේ සැගවුනු රහස සොයා ...🍂

📌 🄸🄼🄳🄱* - *5.3/10


🗃️ 𝙲𝙰𝚃𝙴𝙶𝙾𝚁𝚈 - 𝚃𝙷𝚁𝙸𝙻𝙻𝙴𝚁 / 𝙷𝙾𝚁𝚁𝙾𝚁

🈲 𝙻𝙰𝙽𝙶𝚄𝙰𝙶𝙴 - 𝙴𝙽𝙶𝙻𝙸𝚂𝙷
🎥 𝚀𝚄𝙻𝙸𝚃𝚈 - 1080𝚙
🔊 𝙰𝚄𝙳𝙸𝙾 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 - 6 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 128𝚔𝚋𝚙𝚜
⚙️ 𝙱𝚒𝚝 𝙳𝙴𝙿𝚃𝙷 - 8𝚋𝚒𝚝𝚜 1 𝙼𝙸𝙻𝙸𝙾𝙽 𝙲𝙾𝙻𝙾𝚁
🔏 𝙴𝙽𝙲𝙾𝙳𝙴 - 𝙷.265| 𝙱𝙻𝚄𝚁𝙰𝚈
⏳ 𝚁𝚄𝙽 𝚃𝙸𝙼𝙴 - 2𝙷 13𝙼
🧾 𝚂𝚄𝙱𝚃𝙸𝚃𝙻𝙴 - සිංහල
📥 𝚂𝙸𝚉𝙴 - 972𝙼𝙱



*⚔️🛡️ 𝔽𝕀ℝ𝔼 𝕄𝕆𝕍𝕀𝔼 ⚔️🛡️*`

                let buttons = [
                    {buttonId: 'fm-id-08', buttonText: {displayText: 'DOWNLOAD'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://m.media-amazon.com/images/M/MV5BMjM3NzQ5NDcxOF5BMl5BanBnXkFtZTgwNzM4MTQ5NTM@._V1_.jpg'},
                    caption: charlie ,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break



case '96-2018' : {
            	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
	
	const charlie = `${pushname}
	
🍂... 96 (2018)...🍂

📌 🄸🄼🄳🄱* - *8.5/10

🎥 𝚀𝚄𝙻𝙸𝚃𝚈 - 720𝚙
🧾 𝚂𝚄𝙱𝚃𝙸𝚃𝙻𝙴 - සිංහල
📥 𝚂𝙸𝚉𝙴 - 1.5𝙶𝚋

*⚔️🛡️ 𝔽𝕀ℝ𝔼 𝕄𝕆𝕍𝕀𝔼 ⚔️🛡️*`

                let buttons = [
                    {buttonId: 'fm-id-09', buttonText: {displayText: 'DOWNLOAD'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://m.media-amazon.com/images/M/MV5BOGM2YzI4ZjItYjA4Mi00ZDhiLTk1OGEtZmEzN2U3ODNkNTEzXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg'},
                    caption: charlie ,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break



case 'the-princess' : {
            	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
	
	const charlie = `${pushname}
	
🍂... 𝚃𝙷𝙴 𝙿𝚁𝙸𝙽𝙲𝙴𝚂𝚂 (2022) | රණශූර කුමරියගේ වික්‍රමය ...🍂

📌 🄸🄼🄳🄱 - 5.5/10


🗃️ 𝙲𝙰𝚃𝙴𝙶𝙾𝚁𝚈 - 𝙰𝙲𝚃𝙸𝙾𝙽 / 𝙳𝚁𝙰𝙼𝙰

🈲 𝙻𝙰𝙽𝙶𝚄𝙰𝙶𝙴 - 𝙴𝙽𝙶𝙻𝙸𝚂𝙷
🎥 𝚀𝚄𝙻𝙸𝚃𝚈 - 720𝚙
🔊 𝙰𝚄𝙳𝙸𝙾 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 - 2 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 96𝚔𝚋𝚙𝚜
⚙️ 𝙱𝚒𝚝 𝙳𝙴𝙿𝚃𝙷 - 8𝚋𝚒𝚝𝚜 1 𝙼𝙸𝙻𝙸𝙾𝙽 𝙲𝙾𝙻𝙾𝚁
🔏 𝙴𝙽𝙲𝙾𝙳𝙴 - 𝙷.264 | 𝙰𝚅𝙲 | 𝚆𝙴𝙱-𝚁𝙸𝙿
⏳𝚁𝚄𝙽 𝚃𝙸𝙼𝙴 - 1𝙷 34𝙼
🧾 𝚂𝚄𝙱𝚃𝙸𝚃𝙻𝙴 - සිංහල
📥 𝚂𝙸𝚉𝙴 - 791𝙼𝙱

*⚔️🛡️ 𝔽𝕀ℝ𝔼 𝕄𝕆𝕍𝕀𝔼 ⚔️🛡️*`

                let buttons = [
                    {buttonId: 'fm-id-10', buttonText: {displayText: 'DOWNLOAD'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://m.media-amazon.com/images/M/MV5BOGYyZjhkYTgtYzNlNC00NWEwLWEwMmQtZWI5Y2Y4OTk5Y2YwXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_FMjpg_UX1000_.jpg'},
                    caption: charlie ,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break



case 'antim-the-final-truth' : case 'antim' : {
            	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
	
	const charlie = `${pushname}
	
🍂... 𝙰𝙽𝚃𝙸𝙼: 𝚃𝙷𝙴 𝙵𝙸𝙽𝙰𝙻 𝚃𝚁𝚄𝚃𝙷 (2021) ...🍂


📌 🄸🄼🄳🄱 - 6.8/10


🗃️ 𝙲𝙰𝚃𝙴𝙶𝙾𝚁𝚈 - 𝙰𝙲𝚃𝙸𝙾𝙽 / 𝙲𝚁𝙸𝙼𝙴

🈲 𝙻𝙰𝙽𝙶𝚄𝙰𝙶𝙴 - 𝙷𝙸𝙽𝙳𝙸
🎥 𝚀𝚄𝙻𝙸𝚃𝚈 - 720𝚙
🔊 𝙰𝚄𝙳𝙸𝙾 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 - 2 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 64𝚔𝚋𝚙𝚜
⚙️ 𝙱𝚒𝚝 𝙳𝙴𝙿𝚃𝙷 - 8𝚋𝚒𝚝𝚜 1 𝙼𝙸𝙻𝙸𝙾𝙽 𝙲𝙾𝙻𝙾𝚁
🔏 𝙴𝙽𝙲𝙾𝙳𝙴 - 𝙷.265 | 𝙷𝙴𝚅𝙲 | 𝙷𝙳-𝚁𝙸𝙿
⏳𝚁𝚄𝙽 𝚃𝙸𝙼𝙴 - 2𝙷 15𝙼
🧾 𝚂𝚄𝙱𝚃𝙸𝚃𝙻𝙴 - සිංහල
📥 𝚂𝙸𝚉𝙴 - 672𝙼𝙱

*⚔️🛡️ 𝔽𝕀ℝ𝔼 𝕄𝕆𝕍𝕀𝔼 ⚔️🛡️*`

                let buttons = [
                    {buttonId: 'fm-id-11', buttonText: {displayText: 'DOWNLOAD'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://m.media-amazon.com/images/M/MV5BM2EzYzcxY2QtMTcyMC00Y2RiLWE1YWEtZDU1ODAzMjg4MTM0XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg'},
                    caption: charlie ,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break



case 'noah-2014' : {
            	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
	
	const charlie = `${pushname}
	
🍂... 𝙽𝙾𝙰𝙷 (2014) | මහා ජල ගැල්ම ...🍂


📌 🄸🄼🄳🄱 - 5.8/10


🗃️ 𝙲𝙰𝚃𝙴𝙶𝙾𝚁𝚈 - 𝙰𝙲𝚃𝙸𝙾𝙽 / 𝙰𝙳𝚅𝙴𝙽𝙲𝚃𝚄𝚁𝙴

🈲 𝙻𝙰𝙽𝙶𝚄𝙰𝙶𝙴 - 𝙴𝙽𝙶𝙻𝙸𝚂𝙷
🎥 𝚀𝚄𝙻𝙸𝚃𝚈 - 720𝚙
🔊 𝙰𝚄𝙳𝙸𝙾 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 - 2 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 64𝚔𝚋𝚙𝚜
⚙️ 𝙱𝚒𝚝 𝙳𝙴𝙿𝚃𝙷 - 8𝚋𝚒𝚝𝚜 1 𝙼𝙸𝙻𝙸𝙾𝙽 𝙲𝙾𝙻𝙾𝚁
🔏 𝙴𝙽𝙲𝙾𝙳𝙴 - 𝙷.265 | 𝙷𝙴𝚅𝙲 | 𝙷𝙳-𝚁𝙸𝙿
⏳𝚁𝚄𝙽 𝚃𝙸𝙼𝙴 - 2𝙷 15𝙼
🧾 𝚂𝚄𝙱𝚃𝙸𝚃𝙻𝙴 - සිංහල
📥 𝚂𝙸𝚉𝙴 - 672𝙼𝙱

*⚔️🛡️ 𝔽𝕀ℝ𝔼 𝕄𝕆𝕍𝕀𝔼 ⚔️🛡️*`

                let buttons = [
                    {buttonId: 'fm-id-12', buttonText: {displayText: 'DOWNLOAD'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://m.media-amazon.com/images/M/MV5BMjI2OTgyNTc0Ml5BMl5BanBnXkFtZTgwNDM1NTQxMTE@._V1_FMjpg_UX1000_.jpg'},
                    caption: charlie ,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break



case 'd-block' : {
            	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
	
	const charlie = `${pushname}
	
🍂... 𝙳 𝙱𝙻𝙾𝙲𝙺 (2022) ...🍂


📌 🄸🄼🄳🄱* - *7.1/10


🗃️ 𝙲𝙰𝚃𝙴𝙶𝙾𝚁𝚈 - 𝙰𝙲𝚃𝙸𝙾𝙽 / 𝙳𝚁𝙰𝙼𝙰

🈲 𝙻𝙰𝙽𝙶𝚄𝙰𝙶𝙴 - 𝚃𝙰𝙼𝙸𝙻
🎥 𝚀𝚄𝙻𝙸𝚃𝚈 - 720𝚙
🔊 𝙰𝚄𝙳𝙸𝙾 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 - 6 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 192𝚔𝚋𝚙𝚜 [𝙳𝙾𝙻𝙱𝚈 𝙳𝙸𝙶𝙸𝚃𝙰𝙻 𝙿𝙻𝚄𝚂]
⚙️ 𝙱𝚒𝚝 𝙳𝙴𝙿𝚃𝙷 - 8𝚋𝚒𝚝𝚜 1 𝙼𝙸𝙻𝙸𝙾𝙽 𝙲𝙾𝙻𝙾𝚁
🔏 𝙴𝙽𝙲𝙾𝙳𝙴 - 𝙷.265 | 𝙷𝙴𝚅𝙲 | 𝙷𝙳-𝚁𝙸𝙿
⏳𝚁𝚄𝙽 𝚃𝙸𝙼𝙴 - 2𝙷 14𝙼
🧾 𝚂𝚄𝙱𝚃𝙸𝚃𝙻𝙴 - සිංහල (𝙶𝚘𝚘𝚐𝚕𝚎 𝚝𝚛𝚊𝚗𝚜𝚕𝚊𝚝𝚎)
📥 𝚂𝙸𝚉𝙴 - 962𝙼𝙱

*⚔️🛡️ 𝔽𝕀ℝ𝔼 𝕄𝕆𝕍𝕀𝔼 ⚔️🛡️*`

                let buttons = [
                    {buttonId: 'fm-id-13', buttonText: {displayText: 'DOWNLOAD'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://m.media-amazon.com/images/M/MV5BNTlhYWE1OGQtOGFjYy00ZGQwLWI0NDMtZTYxY2VjNjVlMTJhXkEyXkFqcGdeQXVyMzYxOTQ3MDg@._V1_FMjpg_UX1000_.jpg'},
                    caption: charlie ,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break



case 'pueple-hearts' : {
            	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
	
	const charlie = `${pushname}
	
🍂... 𝙿𝚄𝚁𝙿𝙻𝙴 𝙷𝙴𝙰𝚁𝚃𝚂 (2022) ...🍂


🎯 🄸🄼🄳🄱 - 7.2/10
🍅 𝚁𝙾𝚃𝚃𝙴𝙽 𝚃𝙾𝙼𝙰𝚃𝙾𝙴𝚂 - 27%


🗃️ 𝙲𝙰𝚃𝙴𝙶𝙾𝚁𝚈 - 𝚁𝙾𝙼𝙰𝙽𝙲𝙴 / 𝙳𝚁𝙰𝙼𝙰

🈲 𝙻𝙰𝙽𝙶𝚄𝙰𝙶𝙴 - 𝙴𝙽𝙶𝙻𝙸𝚂𝙷
🎥 𝚀𝚄𝙻𝙸𝚃𝚈 - 720𝚙
🔊 𝙰𝚄𝙳𝙸𝙾 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 - 2 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 96𝚔𝚋𝚙𝚜
⚙️ 𝙱𝚒𝚝 𝙳𝙴𝙿𝚃𝙷 - 8𝚋𝚒𝚝𝚜 1 𝙼𝙸𝙻𝙸𝙾𝙽 𝙲𝙾𝙻𝙾𝚁
🔏 𝙴𝙽𝙲𝙾𝙳𝙴 - 𝙷.264 | 𝙰𝚅𝙲 | 𝚆𝙴𝙱-𝚁𝙸𝙿
⏳𝚁𝚄𝙽 𝚃𝙸𝙼𝙴 - 2𝙷 04𝙼
🧾 𝚂𝚄𝙱𝚃𝙸𝚃𝙻𝙴 - සිංහල (𝙶𝚘𝚘𝚐𝚕𝚎 𝚝𝚛𝚊𝚗𝚜𝚕𝚊𝚝𝚎)
📥 𝚂𝙸𝚉𝙴 - 796𝙼𝙱


*⚔️🛡️ 𝔽𝕀ℝ𝔼 𝕄𝕆𝕍𝕀𝔼 ⚔️🛡️*`

                let buttons = [
                    {buttonId: 'fm-id-14', buttonText: {displayText: 'DOWNLOAD'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://m.media-amazon.com/images/M/MV5BNzI4ZTAwNzEtNTk5YS00ZWJmLWI1ODMtOTU4MTM5MzQ4OWM0XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_FMjpg_UX1000_.jpg'},
                    caption: charlie ,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break


case 'doctor-strange-2' : {
            	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
	
	const charlie = `${pushname}
	
🍂... 𝙳𝙾𝙲𝚃𝙴𝚁 𝚂𝚃𝚁𝙰𝙽𝙶𝙴 𝙸𝙽 𝚃𝙷𝙴 𝙼𝚄𝙻𝚃𝙸𝚅𝙴𝚁𝚂𝙴 (2022) | අමුතු දොස්තරගේ බහු විශ්ව චාරිකාව ...🍂


🎯 🄸🄼🄳🄱 - 7.0/10
🍅 𝚁𝙾𝚃𝚃𝙴𝙽 𝚃𝙾𝙼𝙰𝚃𝙾𝙴𝚂 - 84%


🗃️ 𝙲𝙰𝚃𝙴𝙶𝙾𝚁𝚈 - 𝙰𝙲𝚃𝙸𝙾𝙽 / 𝙰𝙳𝚅𝙴𝙽𝚃𝚄𝚁𝙴

🈲 𝙻𝙰𝙽𝙶𝚄𝙰𝙶𝙴 - 𝙴𝙽𝙶𝙻𝙸𝚂𝙷
🎥 𝚀𝚄𝙻𝙸𝚃𝚈 - 1080𝚙
🔊 𝙰𝚄𝙳𝙸𝙾 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 - 2 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 96𝚔𝚋𝚙𝚜
⚙️ 𝙱𝚒𝚝 𝙳𝙴𝙿𝚃𝙷 - 8𝚋𝚒𝚝𝚜 1 𝙼𝙸𝙻𝙸𝙾𝙽 𝙲𝙾𝙻𝙾𝚁
🔏 𝙴𝙽𝙲𝙾𝙳𝙴 - 𝙷.264 | 𝙰𝚅𝙲 | 𝚆𝙴𝙱-𝚁𝙸𝙿
⏳𝚁𝚄𝙽 𝚃𝙸𝙼𝙴 - 2𝙷 06𝙼
🧾 𝚂𝚄𝙱𝚃𝙸𝚃𝙻𝙴 - සිංහල
📥 𝚂𝙸𝚉𝙴 - 1.4𝙶𝙱


*⚔️🛡️ 𝔽𝕀ℝ𝔼 𝕄𝕆𝕍𝕀𝔼 ⚔️🛡️*`

                let buttons = [
                    {buttonId: 'fm-id-15', buttonText: {displayText: 'DOWNLOAD'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://m.media-amazon.com/images/M/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_.jpg'},
                    caption: charlie ,
                    footer: 'Fire Film By 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break




//TV LIST
///=house of the dragon
		
//the sandbox
		




case 'sandman' : {
            	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
	
	const charlie = `${pushname}
	*💤...  𝚃𝙷𝙴 𝚂𝙰𝙽𝙳𝙼𝙰𝙽 (2022) ...💤*`

                let buttons = [
                    {buttonId: 'sandman-e1', buttonText: {displayText: 'Episode 01'}, type: 1},
                    {buttonId: 'sandman-e2', buttonText: {displayText: 'Episode 02'}, type: 1},
                    {buttonId: 'sandman-next', buttonText: {displayText: 'NEXT'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://m.media-amazon.com/images/M/MV5BMTIyZDEzZjEtNjJjNC00MmMzLWE3MmEtYjY1ZDg0YzA1ZWNlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UY1200_CR90,0,630,1200_AL_.jpg'},
                    caption: charlie ,
                    footer: 'Fire tv series By 🔐 ᴀɴᴏɴʏ-𝚇 ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break


case 'sandman-next' : {
            	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
	
	const charlie = `${pushname}
	*💤...  𝚃𝙷𝙴 𝚂𝙰𝙽𝙳𝙼𝙰𝙽 (2022) ...💤*`

                let buttons = [
                    {buttonId: 'sandman-e3', buttonText: {displayText: 'Episode 03'}, type: 1},
                    {buttonId: 'sandman-e4', buttonText: {displayText: 'Episode 04'}, type: 1},
                    {buttonId: 'sandman-next-1', buttonText: {displayText: 'NEXT'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://m.media-amazon.com/images/M/MV5BMTIyZDEzZjEtNjJjNC00MmMzLWE3MmEtYjY1ZDg0YzA1ZWNlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UY1200_CR90,0,630,1200_AL_.jpg'},
                    caption: charlie ,
                    footer: 'Fire tv series By 🔐 ᴀɴᴏɴʏ-𝚇 ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break



case 'sandman-next-1' : {
            	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
	
	const charlie = `${pushname}
	*💤...  𝚃𝙷𝙴 𝚂𝙰𝙽𝙳𝙼𝙰𝙽 (2022) ...💤*`

                let buttons = [
                    {buttonId: 'sandman-e5', buttonText: {displayText: 'Episode 05'}, type: 1},
                    {buttonId: 'sandman-e6', buttonText: {displayText: 'Episode 06'}, type: 1},
                    {buttonId: 'sandman-next-2', buttonText: {displayText: 'NEXT'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://m.media-amazon.com/images/M/MV5BMTIyZDEzZjEtNjJjNC00MmMzLWE3MmEtYjY1ZDg0YzA1ZWNlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UY1200_CR90,0,630,1200_AL_.jpg'},
                    caption: charlie ,
                    footer: 'Fire tv series By 🔐 ᴀɴᴏɴʏ-𝚇 ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break


case 'sandman-next-2' : {
            	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
	
	const charlie = `${pushname}
	*💤...  𝚃𝙷𝙴 𝚂𝙰𝙽𝙳𝙼𝙰𝙽 (2022) ...💤*`

                let buttons = [
                    {buttonId: 'sandman-e7', buttonText: {displayText: 'Episode 07'}, type: 1},
                    {buttonId: 'sandman-e8', buttonText: {displayText: 'Episode 08'}, type: 1},
                    {buttonId: 'sandman-next-3', buttonText: {displayText: 'NEXT'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://m.media-amazon.com/images/M/MV5BMTIyZDEzZjEtNjJjNC00MmMzLWE3MmEtYjY1ZDg0YzA1ZWNlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UY1200_CR90,0,630,1200_AL_.jpg'},
                    caption: charlie ,
                    footer: 'Fire tv series By 🔐 ᴀɴᴏɴʏ-𝚇 ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break



case 'sandman-next-3' : {
            	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
	
	const charlie = `${pushname}
	*💤...  𝚃𝙷𝙴 𝚂𝙰𝙽𝙳𝙼𝙰𝙽 (2022) ...💤*`

                let buttons = [
                    {buttonId: 'sandman-e9', buttonText: {displayText: 'Episode 09'}, type: 1},
                    {buttonId: 'sandman-e10', buttonText: {displayText: 'Episode 10'}, type: 1},
                    {buttonId: 'sandman', buttonText: {displayText: 'NEXT'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://m.media-amazon.com/images/M/MV5BMTIyZDEzZjEtNjJjNC00MmMzLWE3MmEtYjY1ZDg0YzA1ZWNlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UY1200_CR90,0,630,1200_AL_.jpg'},
                    caption: charlie ,
                    footer: 'Fire tv series By 🔐 ᴀɴᴏɴʏ-𝚇 ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break


//ep


case 'sandman-e1' : {
            	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
	
	const charlie = `*💤... 𝚃𝙷𝙴 𝚂𝙰𝙽𝙳𝙼𝙰𝙽 (2022)| යුක්තියේ නිද්‍රාව ...💤*


*🎯 🄸🄼🄳🄱 - 7.8/10*
*🍅 𝚁𝙾𝚃𝚃𝙴𝙽 𝚃𝙾𝙼𝙰𝚃𝙾𝙴𝚂 - 86%*


*🗃️ 𝙲𝙰𝚃𝙴𝙶𝙾𝚁𝚈 - 𝙵𝙰𝙽𝚃𝙰𝚂𝚈/𝙳𝚁𝙰𝙼𝙰*

*🈲 𝙻𝙰𝙽𝙶𝚄𝙰𝙶𝙴 -  𝙴𝙽𝙶𝙻𝙸𝚂𝙷*
*🎥 𝚀𝚄𝙻𝙸𝚃𝚈 - 1080𝚙*
*🔊 𝙰𝚄𝙳𝙸𝙾 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 - 6 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 192𝚔𝚋𝚙𝚜*
*⚙️ 𝙱𝚒𝚝 𝙳𝙴𝙿𝚃𝙷 - 10𝚋𝚒𝚝𝚜 1 𝙱𝙸𝙻𝙸𝙾𝙽 𝙲𝙾𝙻𝙾𝚁*
*🔏 𝙴𝙽𝙲𝙾𝙳𝙴 - 𝙷.265 | 𝙷𝙴𝚅𝙲 | 𝚆𝙴𝙱-𝙳𝙻*
*📺 𝙴𝙿𝙸𝚂𝙾𝙳𝙴 - 1 (Sleep of the Just)*
*⏳ 𝚁𝚄𝙽 𝚃𝙸𝙼𝙴 - 54𝙼*
*🧾 𝚂𝚄𝙱𝚃𝙸𝚃𝙻𝙴 - සිංහල*
*📥 𝚂𝙸𝚉𝙴 - 553𝙼𝙱*


*𝙰𝚋𝚘𝚞𝚝 𝚂𝚝𝚘𝚛𝚢 ↠*


*හා හා පුරා නිකුත් කරන පළවෙනි කොටස නිසා මං කතාව ගැන වැඩිපුර කියන්න උත්සහ කරන්නේ නැහැ. මේ කොටස හරහා ඔයාලට ඩ්‍රීම්ව (ඒ කියන්නේ සෑන්ඩ්මෑන්ව) පියවි ලෝකයේ මිනිසුන් ( ඒ කියන්නේ අපි වගේ අය) තමන්ගේ සිහින වෙනුවෙන් සිරගත කරන හැටි සහ ඩ්‍රීම් අවුරුදු සිය ගණනකට පස්සේ නිදහස් වෙලා තමන්ගේ බිඳ වැටුණු සිහින රාජධානිය නැවත ගොඩ නගන්න පා තබන හැටි බලා ගන්න පුළුවන්.*

⚔️🛡️ Fire tv series ⚔️🛡️`

                let buttons = [
                    {buttonId: 'ft-id2-01', buttonText: {displayText: 'DOWNLOAD'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://m.media-amazon.com/images/M/MV5BYTM0NjZjYjItM2JiYS00NmU5LWJmMTMtZjQ0OWU3Mzk1ZWZjXkEyXkFqcGdeQXVyMTAxNDE3MTE5._V1_.jpg'},
                    caption: charlie ,
                    footer: 'Fire tv series By 🔐 ᴀɴᴏɴʏ-𝚇 ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break




case 'sandman-e2' : {
            	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
	
	const charlie = `*💤... 𝚃𝙷𝙴 𝚂𝙰𝙽𝙳𝙼𝙰𝙽 (2022)| යුක්තියේ නිද්‍රාව ...💤*


*🎯 🄸🄼🄳🄱 - 7.8/10*
*🍅 𝚁𝙾𝚃𝚃𝙴𝙽 𝚃𝙾𝙼𝙰𝚃𝙾𝙴𝚂 - 86%*


*🗃️ 𝙲𝙰𝚃𝙴𝙶𝙾𝚁𝚈 - 𝙵𝙰𝙽𝚃𝙰𝚂𝚈/𝙳𝚁𝙰𝙼𝙰*

*🈲 𝙻𝙰𝙽𝙶𝚄𝙰𝙶𝙴 -  𝙴𝙽𝙶𝙻𝙸𝚂𝙷*
*🎥 𝚀𝚄𝙻𝙸𝚃𝚈 - 1080𝚙*
*🔊 𝙰𝚄𝙳𝙸𝙾 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 - 6 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 192𝚔𝚋𝚙𝚜*
*⚙️ 𝙱𝚒𝚝 𝙳𝙴𝙿𝚃𝙷 - 10𝚋𝚒𝚝𝚜 1 𝙱𝙸𝙻𝙸𝙾𝙽 𝙲𝙾𝙻𝙾𝚁*
*🔏 𝙴𝙽𝙲𝙾𝙳𝙴 - 𝙷.265 | 𝙷𝙴𝚅𝙲 | 𝚆𝙴𝙱-𝙳𝙻*
*📺 𝙴𝙿𝙸𝚂𝙾𝙳𝙴 - 2 (Imperfect Hosts)*
*⏳ 𝚁𝚄𝙽 𝚃𝙸𝙼𝙴 - 37𝙼*
*🧾 𝚂𝚄𝙱𝚃𝙸𝚃𝙻𝙴 - සිංහල*
*📥 𝚂𝙸𝚉𝙴 - 461𝙼𝙱*


*𝙰𝚋𝚘𝚞𝚝 𝚂𝚝𝚘𝚛𝚢 ↠*


*Morpheus කුප්‍රකට ලෙස ක්‍රියා විරහිත සහෝදරයන් යුගලයක් වෙත පැමිණීමෙන් ඔහුගේ බලයේ මෙවලම් - ඔහුගේ වැලි, රූබි සහ හෙල්ම් සොයා ගැනීමේ ඔහුගේ ගවේෂණය ආරම්භ කරයි.*

⚔️🛡️ Fire tv series ⚔️🛡️`

                let buttons = [
                    {buttonId: 'ft-id2-02', buttonText: {displayText: 'DOWNLOAD'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://m.media-amazon.com/images/M/MV5BYTM0NjZjYjItM2JiYS00NmU5LWJmMTMtZjQ0OWU3Mzk1ZWZjXkEyXkFqcGdeQXVyMTAxNDE3MTE5._V1_.jpg'},
                    caption: charlie ,
                    footer: 'Fire tv series By 🔐 ᴀɴᴏɴʏ-𝚇 ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break



case 'sandman-e3' : {
            	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
	
	const charlie = `*💤... 𝚃𝙷𝙴 𝚂𝙰𝙽𝙳𝙼𝙰𝙽 (2022) |  යුක්තියේ නිද්‍රාව ...💤*


*🎯 🄸🄼🄳🄱 - 7.8/10*
*🍅 𝚁𝙾𝚃𝚃𝙴𝙽 𝚃𝙾𝙼𝙰𝚃𝙾𝙴𝚂 - 86%*


*🗃️ 𝙲𝙰𝚃𝙴𝙶𝙾𝚁𝚈 - 𝙵𝙰𝙽𝚃𝙰𝚂𝚈/𝙳𝚁𝙰𝙼𝙰*

*🈲 𝙻𝙰𝙽𝙶𝚄𝙰𝙶𝙴 -  𝙴𝙽𝙶𝙻𝙸𝚂𝙷*
*🎥 𝚀𝚄𝙻𝙸𝚃𝚈 - 1080𝚙*
*🔊 𝙰𝚄𝙳𝙸𝙾 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 - 6 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 192𝚔𝚋𝚙𝚜*
*⚙️ 𝙱𝚒𝚝 𝙳𝙴𝙿𝚃𝙷 - 10𝚋𝚒𝚝𝚜 1 𝙱𝙸𝙻𝙸𝙾𝙽 𝙲𝙾𝙻𝙾𝚁*
*🔏 𝙴𝙽𝙲𝙾𝙳𝙴 - 𝙷.265 | 𝙷𝙴𝚅𝙲 | 𝚆𝙴𝙱-𝙳𝙻*
*📺 𝙴𝙿𝙸𝚂𝙾𝙳𝙴 - 3 (Dream a Little Dream of Me)*
*⏳ 𝚁𝚄𝙽 𝚃𝙸𝙼𝙴 - n/a*
*🧾 𝚂𝚄𝙱𝚃𝙸𝚃𝙻𝙴 - සිංහල*
*📥 𝚂𝙸𝚉𝙴 - 357𝙼𝙱*


*𝙰𝚋𝚘𝚞𝚝 𝚂𝚝𝚘𝚛𝚢 ↠*


*Morpheus ඔහුගේ වැලි සන්තකයේ අවසන් වරට දන්නා පුද්ගලයා සොයා ගනී - සහ මනුෂ්‍යත්වය පිළිබඳ අනපේක්ෂිත පාඩමක් ලබා ගනී. එතෙල් ඇගේ පුතා බැලීමට යයි.*

⚔️🛡️ Fire tv series ⚔️🛡️`

                let buttons = [
                    {buttonId: 'ft-id2-03', buttonText: {displayText: 'DOWNLOAD'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://m.media-amazon.com/images/M/MV5BYTM0NjZjYjItM2JiYS00NmU5LWJmMTMtZjQ0OWU3Mzk1ZWZjXkEyXkFqcGdeQXVyMTAxNDE3MTE5._V1_.jpg'},
                    caption: charlie ,
                    footer: 'Fire tv series By 🔐 ᴀɴᴏɴʏ-𝚇 ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break




case 'sandman-e4' : {
            	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
	
	const charlie = `*💤... 𝚃𝙷𝙴 𝚂𝙰𝙽𝙳𝙼𝙰𝙽 (2022) |  යුක්තියේ නිද්‍රාව ...💤*


*🎯 🄸🄼🄳🄱 - 7.8/10*
*🍅 𝚁𝙾𝚃𝚃𝙴𝙽 𝚃𝙾𝙼𝙰𝚃𝙾𝙴𝚂 - 86%*


*🗃️ 𝙲𝙰𝚃𝙴𝙶𝙾𝚁𝚈 - 𝙵𝙰𝙽𝚃𝙰𝚂𝚈/𝙳𝚁𝙰𝙼𝙰*

*🈲 𝙻𝙰𝙽𝙶𝚄𝙰𝙶𝙴 -  𝙴𝙽𝙶𝙻𝙸𝚂𝙷*
*🎥 𝚀𝚄𝙻𝙸𝚃𝚈 - 1080𝚙*
*🔊 𝙰𝚄𝙳𝙸𝙾 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 - 6 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 192𝚔𝚋𝚙𝚜*
*⚙️ 𝙱𝚒𝚝 𝙳𝙴𝙿𝚃𝙷 - 10𝚋𝚒𝚝𝚜 1 𝙱𝙸𝙻𝙸𝙾𝙽 𝙲𝙾𝙻𝙾𝚁*
*🔏 𝙴𝙽𝙲𝙾𝙳𝙴 - 𝙷.265 | 𝙷𝙴𝚅𝙲 | 𝚆𝙴𝙱-𝙳𝙻*
*📺 𝙴𝙿𝙸𝚂𝙾𝙳𝙴 - 4 (A Hope in Hell)*
*⏳ 𝚁𝚄𝙽 𝚃𝙸𝙼𝙴 - n/a*
*🧾 𝚂𝚄𝙱𝚃𝙸𝚃𝙻𝙴 - සිංහල*
*📥 𝚂𝙸𝚉𝙴 - 406𝙼𝙱*


*𝙰𝚋𝚘𝚞𝚝 𝚂𝚝𝚘𝚛𝚢 ↠*


*ඔහුගේ සුක්කානම කොහේද යන්න පිළිබඳ මඟ පෙන්වීමක් ලුසිෆර් සමඟ ප්‍රේක්ෂකයින් සෙවීමට මෝෆියස්ට බල කරයි. ව්‍යාකූල ජෝන්ට හොඳ සමරිතානුවෙකුගෙන් උපකාරයක් ලැබේ.*

⚔️🛡️ Fire tv series ⚔️🛡️`

                let buttons = [
                    {buttonId: 'ft-id2-04', buttonText: {displayText: 'DOWNLOAD'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://m.media-amazon.com/images/M/MV5BYTM0NjZjYjItM2JiYS00NmU5LWJmMTMtZjQ0OWU3Mzk1ZWZjXkEyXkFqcGdeQXVyMTAxNDE3MTE5._V1_.jpg'},
                    caption: charlie ,
                    footer: 'Fire tv series By 🔐 ᴀɴᴏɴʏ-𝚇 ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break





case 'sandman-e5' : {
            	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
	
	const charlie = `*💤... 𝚃𝙷𝙴 𝚂𝙰𝙽𝙳𝙼𝙰𝙽 (2022) |  යුක්තියේ නිද්‍රාව ...💤*


*🎯 🄸🄼🄳🄱 - 7.8/10*
*🍅 𝚁𝙾𝚃𝚃𝙴𝙽 𝚃𝙾𝙼𝙰𝚃𝙾𝙴𝚂 - 86%*


*🗃️ 𝙲𝙰𝚃𝙴𝙶𝙾𝚁𝚈 - 𝙵𝙰𝙽𝚃𝙰𝚂𝚈/𝙳𝚁𝙰𝙼𝙰*

*🈲 𝙻𝙰𝙽𝙶𝚄𝙰𝙶𝙴 -  𝙴𝙽𝙶𝙻𝙸𝚂𝙷*
*🎥 𝚀𝚄𝙻𝙸𝚃𝚈 - 1080𝚙*
*🔊 𝙰𝚄𝙳𝙸𝙾 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 - 6 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 192𝚔𝚋𝚙𝚜*
*⚙️ 𝙱𝚒𝚝 𝙳𝙴𝙿𝚃𝙷 - 10𝚋𝚒𝚝𝚜 1 𝙱𝙸𝙻𝙸𝙾𝙽 𝙲𝙾𝙻𝙾𝚁*
*🔏 𝙴𝙽𝙲𝙾𝙳𝙴 - 𝙷.265 | 𝙷𝙴𝚅𝙲 | 𝚆𝙴𝙱-𝙳𝙻*
*📺 𝙴𝙿𝙸𝚂𝙾𝙳𝙴 - 5 (24/7)*
*⏳ 𝚁𝚄𝙽 𝚃𝙸𝙼𝙴 - n/a*
*🧾 𝚂𝚄𝙱𝚃𝙸𝚃𝙻𝙴 - සිංහල*
*📥 𝚂𝙸𝚉𝙴 - 401𝙼𝙱*


*𝙰𝚋𝚘𝚞𝚝 𝚂𝚝𝚘𝚛𝚢 ↠*


*Morpheus අසුවීමත් සමඟ, ජෝන් ඔහු වටා සිටින මිනිසුන් නැරඹීම සඳහා රාත්‍රී භෝජන සංග්‍රහයක පදිංචි වේ - සහ සත්‍යය සහ බොරුව පිළිබඳ ඔහුගේ න්‍යාය භයානක පරීක්ෂණයකට ලක් කළේය.*

⚔️🛡️ Fire tv series ⚔️🛡️`

                let buttons = [
                    {buttonId: 'ft-id2-05', buttonText: {displayText: 'DOWNLOAD'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://m.media-amazon.com/images/M/MV5BYTM0NjZjYjItM2JiYS00NmU5LWJmMTMtZjQ0OWU3Mzk1ZWZjXkEyXkFqcGdeQXVyMTAxNDE3MTE5._V1_.jpg'},
                    caption: charlie ,
                    footer: 'Fire tv series By 🔐 ᴀɴᴏɴʏ-𝚇 ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break



case 'sandman-e6' : {
            	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
	
	const charlie = `*💤... 𝚃𝙷𝙴 𝚂𝙰𝙽𝙳𝙼𝙰𝙽 (2022) |  යුක්තියේ නිද්‍රාව ...💤*


*🎯 🄸🄼🄳🄱 - 7.8/10*
*🍅 𝚁𝙾𝚃𝚃𝙴𝙽 𝚃𝙾𝙼𝙰𝚃𝙾𝙴𝚂 - 86%*


*🗃️ 𝙲𝙰𝚃𝙴𝙶𝙾𝚁𝚈 - 𝙵𝙰𝙽𝚃𝙰𝚂𝚈/𝙳𝚁𝙰𝙼𝙰*

*🈲 𝙻𝙰𝙽𝙶𝚄𝙰𝙶𝙴 -  𝙴𝙽𝙶𝙻𝙸𝚂𝙷*
*🎥 𝚀𝚄𝙻𝙸𝚃𝚈 - 1080𝚙*
*🔊 𝙰𝚄𝙳𝙸𝙾 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 - 6 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 192𝚔𝚋𝚙𝚜*
*⚙️ 𝙱𝚒𝚝 𝙳𝙴𝙿𝚃𝙷 - 10𝚋𝚒𝚝𝚜 1 𝙱𝙸𝙻𝙸𝙾𝙽 𝙲𝙾𝙻𝙾𝚁*
*🔏 𝙴𝙽𝙲𝙾𝙳𝙴 - 𝙷.265 | 𝙷𝙴𝚅𝙲 | 𝚆𝙴𝙱-𝙳𝙻*
*📺 𝙴𝙿𝙸𝚂𝙾𝙳𝙴 - 6 (The Sound of Her Wings)*
*⏳ 𝚁𝚄𝙽 𝚃𝙸𝙼𝙴 - n/a*
*🧾 𝚂𝚄𝙱𝚃𝙸𝚃𝙻𝙴 - සිංහල*
*📥 𝚂𝙸𝚉𝙴 - 718𝙼𝙱*


*𝙰𝚋𝚘𝚞𝚝 𝚂𝚝𝚘𝚛𝚢 ↠*


*තරමක් රළු බවක් දැනේ, Morpheus ඔහුගේ වෙහෙස මහන්සි වී වැඩ කරන ලොකු සහෝදරිය සෙවනැල්ල කරයි, ඇය ඔහුට උපදෙස් ලබා දෙන අතර පැරණි හඳුනන අයෙකු සමඟ නැවත සම්බන්ධ වීමට ඔහුව දිරිමත් කරයි.*

⚔️🛡️ Fire tv series ⚔️🛡️`

                let buttons = [
                    {buttonId: 'ft-id2-06', buttonText: {displayText: 'DOWNLOAD'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://m.media-amazon.com/images/M/MV5BYTM0NjZjYjItM2JiYS00NmU5LWJmMTMtZjQ0OWU3Mzk1ZWZjXkEyXkFqcGdeQXVyMTAxNDE3MTE5._V1_.jpg'},
                    caption: charlie ,
                    footer: 'Fire tv series By 🔐 ᴀɴᴏɴʏ-𝚇 ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break



case 'sandman-e7' : {
            	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
	
	const charlie = `*💤... 𝚃𝙷𝙴 𝚂𝙰𝙽𝙳𝙼𝙰𝙽 (2022) |  යුක්තියේ නිද්‍රාව ...💤*


*🎯 🄸🄼🄳🄱 - 7.8/10*
*🍅 𝚁𝙾𝚃𝚃𝙴𝙽 𝚃𝙾𝙼𝙰𝚃𝙾𝙴𝚂 - 86%*


*🗃️ 𝙲𝙰𝚃𝙴𝙶𝙾𝚁𝚈 - 𝙵𝙰𝙽𝚃𝙰𝚂𝚈/𝙳𝚁𝙰𝙼𝙰*

*🈲 𝙻𝙰𝙽𝙶𝚄𝙰𝙶𝙴 -  𝙴𝙽𝙶𝙻𝙸𝚂𝙷*
*🎥 𝚀𝚄𝙻𝙸𝚃𝚈 - 1080𝚙*
*🔊 𝙰𝚄𝙳𝙸𝙾 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 - 6 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 192𝚔𝚋𝚙𝚜*
*⚙️ 𝙱𝚒𝚝 𝙳𝙴𝙿𝚃𝙷 - 10𝚋𝚒𝚝𝚜 1 𝙱𝙸𝙻𝙸𝙾𝙽 𝙲𝙾𝙻𝙾𝚁*
*🔏 𝙴𝙽𝙲𝙾𝙳𝙴 - 𝙷.265 | 𝙷𝙴𝚅𝙲 | 𝚆𝙴𝙱-𝙳𝙻*
*📺 𝙴𝙿𝙸𝚂𝙾𝙳𝙴 - 7 (The Doll's House)*
*⏳ 𝚁𝚄𝙽 𝚃𝙸𝙼𝙴 - n/a*
*🧾 𝚂𝚄𝙱𝚃𝙸𝚃𝙻𝙴 - සිංහල*
*📥 𝚂𝙸𝚉𝙴 - 462𝙼𝙱*


*𝙰𝚋𝚘𝚞𝚝 𝚂𝚝𝚘𝚛𝚢 ↠*


*Lucienne Morpheus වෙත පැමිණෙන්නේ කලබලකාරී පුවතක් සමඟිනි. රෝස් වෝකර් පවුල සොයා යයි. කොරින්තිවරුන්ගේ රසිකයෝ ඔහුගේ අවධානය ලබා ගැනීමට යෝජනා කරති.*

⚔️🛡️ Fire tv series ⚔️🛡️`

                let buttons = [
                    {buttonId: 'ft-id2-07', buttonText: {displayText: 'DOWNLOAD'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://m.media-amazon.com/images/M/MV5BYTM0NjZjYjItM2JiYS00NmU5LWJmMTMtZjQ0OWU3Mzk1ZWZjXkEyXkFqcGdeQXVyMTAxNDE3MTE5._V1_.jpg'},
                    caption: charlie ,
                    footer: 'Fire tv series By 🔐 ᴀɴᴏɴʏ-𝚇 ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break




case 'sandman-e8' : {
            	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
	
	const charlie = `*💤... 𝚃𝙷𝙴 𝚂𝙰𝙽𝙳𝙼𝙰𝙽 (2022) |  යුක්තියේ නිද්‍රාව ...💤*


*🎯 🄸🄼🄳🄱 - 7.8/10*
*🍅 𝚁𝙾𝚃𝚃𝙴𝙽 𝚃𝙾𝙼𝙰𝚃𝙾𝙴𝚂 - 86%*


*🗃️ 𝙲𝙰𝚃𝙴𝙶𝙾𝚁𝚈 - 𝙵𝙰𝙽𝚃𝙰𝚂𝚈/𝙳𝚁𝙰𝙼𝙰*

*🈲 𝙻𝙰𝙽𝙶𝚄𝙰𝙶𝙴 -  𝙴𝙽𝙶𝙻𝙸𝚂𝙷*
*🎥 𝚀𝚄𝙻𝙸𝚃𝚈 - 1080𝚙*
*🔊 𝙰𝚄𝙳𝙸𝙾 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 - 6 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 192𝚔𝚋𝚙𝚜*
*⚙️ 𝙱𝚒𝚝 𝙳𝙴𝙿𝚃𝙷 - 10𝚋𝚒𝚝𝚜 1 𝙱𝙸𝙻𝙸𝙾𝙽 𝙲𝙾𝙻𝙾𝚁*
*🔏 𝙴𝙽𝙲𝙾𝙳𝙴 - 𝙷.265 | 𝙷𝙴𝚅𝙲 | 𝚆𝙴𝙱-𝙳𝙻*
*📺 𝙴𝙿𝙸𝚂𝙾𝙳𝙴 - 8 (Playing House)*
*⏳ 𝚁𝚄𝙽 𝚃𝙸𝙼𝙴 - n/a*
*🧾 𝚂𝚄𝙱𝚃𝙸𝚃𝙻𝙴 - සිංහල*
*📥 𝚂𝙸𝚉𝙴 - 634𝙼𝙱*


*𝙰𝚋𝚘𝚞𝚝 𝚂𝚝𝚘𝚛𝚢 ↠*


*Morpheus ඔහුගේ අතුරුදහන් වූ එක් නිර්මාණයක් අවසන් කරන විට, රෝස් ඇගේ සහෝදරයා සොයා ගැනීමට උත්සාහ කරයි - සහ නොදැනුවත්වම මිතුරෙකුගේ සිහිනය සැබෑ කරයි.*

⚔️🛡️ Fire tv series ⚔️🛡️`

                let buttons = [
                    {buttonId: 'ft-id2-08', buttonText: {displayText: 'DOWNLOAD'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://m.media-amazon.com/images/M/MV5BYTM0NjZjYjItM2JiYS00NmU5LWJmMTMtZjQ0OWU3Mzk1ZWZjXkEyXkFqcGdeQXVyMTAxNDE3MTE5._V1_.jpg'},
                    caption: charlie ,
                    footer: 'Fire tv series By 🔐 ᴀɴᴏɴʏ-𝚇 ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break





case 'sandman-e9' : {
            	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
	
	const charlie = `*💤... 𝚃𝙷𝙴 𝚂𝙰𝙽𝙳𝙼𝙰𝙽 (2022) |  යුක්තියේ නිද්‍රාව ...💤*


*🎯 🄸🄼🄳🄱 - 7.8/10*
*🍅 𝚁𝙾𝚃𝚃𝙴𝙽 𝚃𝙾𝙼𝙰𝚃𝙾𝙴𝚂 - 86%*


*🗃️ 𝙲𝙰𝚃𝙴𝙶𝙾𝚁𝚈 - 𝙵𝙰𝙽𝚃𝙰𝚂𝚈/𝙳𝚁𝙰𝙼𝙰*

*🈲 𝙻𝙰𝙽𝙶𝚄𝙰𝙶𝙴 -  𝙴𝙽𝙶𝙻𝙸𝚂𝙷*
*🎥 𝚀𝚄𝙻𝙸𝚃𝚈 - 1080𝚙*
*🔊 𝙰𝚄𝙳𝙸𝙾 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 - 6 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 192𝚔𝚋𝚙𝚜*
*⚙️ 𝙱𝚒𝚝 𝙳𝙴𝙿𝚃𝙷 - 10𝚋𝚒𝚝𝚜 1 𝙱𝙸𝙻𝙸𝙾𝙽 𝙲𝙾𝙻𝙾𝚁*
*🔏 𝙴𝙽𝙲𝙾𝙳𝙴 - 𝙷.265 | 𝙷𝙴𝚅𝙲 | 𝚆𝙴𝙱-𝙳𝙻*
*📺 𝙴𝙿𝙸𝚂𝙾𝙳𝙴 - 9 (Collectors)*
*⏳ 𝚁𝚄𝙽 𝚃𝙸𝙼𝙴 - n/a*
*🧾 𝚂𝚄𝙱𝚃𝙸𝚃𝙻𝙴 - සිංහල*
*📥 𝚂𝙸𝚉𝙴 - 519𝙼𝙱*


*𝙰𝚋𝚘𝚞𝚝 𝚂𝚝𝚘𝚛𝚢 ↠*


*අමුතු කැළඹීම් ද ඩ්‍රීමිං සොලවයි, රෝස් නව මිතුරෙකු සමඟ මාර්ග චාරිකාවකට පිටත් වේ, සහ කොරින්තියන් අමුත්තෙකු සමඟ බියකරු සමුළුවකට පැමිණේ.*

⚔️🛡️ Fire tv series ⚔️🛡️`

                let buttons = [
                    {buttonId: 'ft-id2-09', buttonText: {displayText: 'DOWNLOAD'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://m.media-amazon.com/images/M/MV5BYTM0NjZjYjItM2JiYS00NmU5LWJmMTMtZjQ0OWU3Mzk1ZWZjXkEyXkFqcGdeQXVyMTAxNDE3MTE5._V1_.jpg'},
                    caption: charlie ,
                    footer: 'Fire tv series By 🔐 ᴀɴᴏɴʏ-𝚇 ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break






case 'sandman-10' : {
            	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
	
	const charlie = `*💤... 𝚃𝙷𝙴 𝚂𝙰𝙽𝙳𝙼𝙰𝙽 (2022) |  යුක්තියේ නිද්‍රාව ...💤*


*🎯 🄸🄼🄳🄱 - 7.8/10*
*🍅 𝚁𝙾𝚃𝚃𝙴𝙽 𝚃𝙾𝙼𝙰𝚃𝙾𝙴𝚂 - 86%*


*🗃️ 𝙲𝙰𝚃𝙴𝙶𝙾𝚁𝚈 - 𝙵𝙰𝙽𝚃𝙰𝚂𝚈/𝙳𝚁𝙰𝙼𝙰*

*🈲 𝙻𝙰𝙽𝙶𝚄𝙰𝙶𝙴 -  𝙴𝙽𝙶𝙻𝙸𝚂𝙷*
*🎥 𝚀𝚄𝙻𝙸𝚃𝚈 - 1080𝚙*
*🔊 𝙰𝚄𝙳𝙸𝙾 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 - 6 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 192𝚔𝚋𝚙𝚜*
*⚙️ 𝙱𝚒𝚝 𝙳𝙴𝙿𝚃𝙷 - 10𝚋𝚒𝚝𝚜 1 𝙱𝙸𝙻𝙸𝙾𝙽 𝙲𝙾𝙻𝙾𝚁*
*🔏 𝙴𝙽𝙲𝙾𝙳𝙴 - 𝙷.265 | 𝙷𝙴𝚅𝙲 | 𝚆𝙴𝙱-𝙳𝙻*
*📺 𝙴𝙿𝙸𝚂𝙾𝙳𝙴 - 10 (Lost Hearts)*
*⏳ 𝚁𝚄𝙽 𝚃𝙸𝙼𝙴 - n/a*
*🧾 𝚂𝚄𝙱𝚃𝙸𝚃𝙻𝙴 - සිංහල*
*📥 𝚂𝙸𝚉𝙴 - 492𝙼𝙱*


*𝙰𝚋𝚘𝚞𝚝 𝚂𝚝𝚘𝚛𝚢 ↠*


*Dream wortex වඩාත් බලවත් ලෙස වර්ධනය වන අතර ප්රාන්ත අතර බිත්ති දුර්වල වන විට, රෝස් දුෂ්කර තේරීමක් කළ යුතුය. Morpheus ද කොරින්තියන් සමඟ ගැටෙයි.*

⚔️🛡️ Fire tv series ⚔️🛡️`

                let buttons = [
                    {buttonId: 'ft-id2-10', buttonText: {displayText: 'DOWNLOAD'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://m.media-amazon.com/images/M/MV5BYTM0NjZjYjItM2JiYS00NmU5LWJmMTMtZjQ0OWU3Mzk1ZWZjXkEyXkFqcGdeQXVyMTAxNDE3MTE5._V1_.jpg'},
                    caption: charlie ,
                    footer: 'Fire tv series By 🔐 ᴀɴᴏɴʏ-𝚇 ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break

// JavaScript Document		




case 'house-of-the-dragon' : {
            	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
	
	const charlie = `${pushname}
	*🐉... 𝙷𝙾𝚄𝚂𝙴 𝙾𝙵 𝚃𝙷𝙴 𝙳𝚁𝙰𝙶𝙾𝙽 (2022) ...🐉*`

                let buttons = [
                    {buttonId: 'house-of-the-dragon-e1', buttonText: {displayText: 'Episode 01'}, type: 1},
                    {buttonId: 'house-of-the-dragon-e2', buttonText: {displayText: 'Episode 02'}, type: 1},
                    {buttonId: 'house-of-the-dragon-next', buttonText: {displayText: 'NEXT'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://m.media-amazon.com/images/M/MV5BZDBkZjRiNGMtZGU2My00ODdkLWI0MGYtNGU4MmJjN2MzOTkxXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg'},
                    caption: charlie ,
                    footer: 'Fire tv series By 🔐 ᴀɴᴏɴʏ-𝚇 ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break


case 'house-of-the-dragon-e1' : {
            	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
	
	const charlie = `${pushname}
*🐉... 𝙷𝙾𝚄𝚂𝙴 𝙾𝙵 𝚃𝙷𝙴 𝙳𝚁𝙰𝙶𝙾𝙽 (2022) ...🐉*


*🎯 🄸🄼🄳🄱 - 8.0/10*
*🍅 𝚁𝙾𝚃𝚃𝙴𝙽 𝚃𝙾𝙼𝙰𝚃𝙾𝙴𝚂 - 85%*


*🗃️ 𝙲𝙰𝚃𝙴𝙶𝙾𝚁𝚈 - 𝙰𝙲𝚃𝙸𝙾𝙽/𝙰𝙳𝚅𝙴𝙽𝙲𝚃𝚄𝚁𝙴*

*🈲 𝙻𝙰𝙽𝙶𝚄𝙰𝙶𝙴 -  𝙴𝙽𝙶𝙻𝙸𝚂𝙷*
*🎥 𝚀𝚄𝙻𝙸𝚃𝚈 - 720𝚙*
*🔊 𝙰𝚄𝙳𝙸𝙾 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 - 6 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 162𝚔𝚋𝚙𝚜*
*⚙️ 𝙱𝚒𝚝 𝙳𝙴𝙿𝚃𝙷 - 8𝚋𝚒𝚝𝚜 1 𝙼𝙸𝙻𝙸𝙾𝙽 𝙲𝙾𝙻𝙾𝚁*
*🔏 𝙴𝙽𝙲𝙾𝙳𝙴 - 𝙷.264 | 𝙰𝚅𝙲 | 𝚆𝙴𝙱-𝙳𝙻*
*📺 𝙴𝙿𝙸𝚂𝙾𝙳𝙴 - 1*
*⏳𝚁𝚄𝙽 𝚃𝙸𝙼𝙴 - 1𝙷 02𝙼*
*🧾 𝚂𝚄𝙱𝚃𝙸𝚃𝙻𝙴 - සිංහල*
*📥 𝚂𝙸𝚉𝙴 - 581𝙼𝙱*


*𝙰𝚋𝚘𝚞𝚝 𝚂𝚝𝚘𝚛𝚢 ↠*


*හවුස් ඔෆ් ද ඩ්‍රැගන් යනු ඇමරිකානු ෆැන්ටසි නාට්‍ය රූපවාහිනී කතා මාලාවක් වන අතර එය ගේම් ඔෆ් ත්‍රෝන්ස් (2011 2019) රූපවාහිනී කතා මාලාවේ පූර්විකාවක් වන අතර එය ජෝර්ජ් ආර්. ආර්. මාටින් විසින් රචිත A Song of Ice and Fire පොත් මත පදනම් වේ. පූර්ව කතා මාලාව HBO සඳහා Martin සහ Ryan J. Condal විසින් නිර්මාණය කරන ලද අතර එය මාටින්ගේ 2018 නවකතාව වන Fire & Blood හි කොටස් මත පදනම් වේ. Condal සහ Miguel Sapochnik ප්‍රදර්ශනකරුවන් වේ. හවුස් ඔෆ් ද ඩ්‍රැගන් සඳහා. ගේම් ඔෆ් ත්‍රෝන්ස් හි සිදුවීම් වලට වසර දෙසීයකට පෙර සකසන ලද මෙම කතා මාලාවේ ටර්ගේරියන් හවුස් හි අවසානයෙහි ආරම්භය, "ඩාන්ස් ඔෆ් ද ඩ්‍රෝන්ස්" ලෙස හැඳින්වෙන ටාර්ගේරියන් අනුප්‍රාප්තික යුද්ධය දක්වා දිවෙන සහ ආවරණය වන සිදුවීම් වාර්තා කරයි.*

⚔️🛡️ 𝔽𝕀ℝ𝔼 𝕄𝕆𝕍𝕀𝔼 𝔾ℝ𝕆𝕌ℙ ⚔️🛡️`

                let buttons = [
                    {buttonId: 'ft-id1-01', buttonText: {displayText: 'DOWNLOAD'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://www.lydogbilde.no/wp-content/uploads/2022/08/House-of-the-Dragon-sesong-1_44.jpg'},
                    caption: charlie ,
                    footer: 'Fire tv series By 🔐 ᴀɴᴏɴʏ-𝚇 ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break


//she-hulk

case 'she-hulk' : {
            	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
	
	const charlie = `${pushname}
	*🍁... 𝚂𝙷𝙴 𝙷𝚄𝙻𝙺: 𝙰𝚃𝚃𝙾𝚁𝙽𝙴𝚃𝚈 𝙻𝙰𝚆 (2022) ...🍁*`

                let buttons = [
                    {buttonId: 'she-hulk-e1', buttonText: {displayText: 'Episode 01'}, type: 1},
                    {buttonId: 'she-hulk-e2', buttonText: {displayText: 'Episode 02'}, type: 1},
                    {buttonId: 'she-hulk-01', buttonText: {displayText: 'NEXT'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://cdn.jeab.com/wp-content/uploads/2022/05/she-hulkSHAAL_Teaser_Printed_1Sht_v2_Lg.jpg'},
                    caption: charlie ,
                    footer: 'Fire tv series By 🔐 ᴀɴᴏɴʏ-𝚇 ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break


case 'she-hulk-e1' : {
            	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
	
	const charlie = `${pushname}
	
*🍁... 𝚂𝙷𝙴 𝙷𝚄𝙻𝙺: 𝙰𝚃𝚃𝙾𝚁𝙽𝙴𝚃𝚈 𝙻𝙰𝚆 (2022) ...🍁*


🎯 🄸🄼🄳🄱 - 5.1/10*
*🍅 𝚁𝙾𝚃𝚃𝙴𝙽 𝚃𝙾𝙼𝙰𝚃𝙾𝙴𝚂 - 𝙽/𝙰%*


*🗃️ 𝙲𝙰𝚃𝙴𝙶𝙾𝚁𝚈 - 𝙰𝙲𝚃𝙸𝙾𝙽/𝙰𝙳𝚅𝙴𝙽𝙲𝚃𝚄𝚁𝙴*

*🈲 𝙻𝙰𝙽𝙶𝚄𝙰𝙶𝙴 -  𝙴𝙽𝙶𝙻𝙸𝚂𝙷*
*🎥 𝚀𝚄𝙻𝙸𝚃𝚈 - 720𝚙*
*🔊 𝙰𝚄𝙳𝙸𝙾 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 - 2 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 96𝚔𝚋𝚙𝚜*
*⚙️ 𝙱𝚒𝚝 𝙳𝙴𝙿𝚃𝙷 - 8𝚋𝚒𝚝𝚜 1 𝙱𝙸𝙻𝙸𝙾𝙽 𝙲𝙾𝙻𝙾𝚁*
*🔏 𝙴𝙽𝙲𝙾𝙳𝙴 - 𝙷.264 | 𝙰𝚅𝙲 | 𝚆𝙴𝙱-𝚁𝙸𝙿*
*📺 𝙴𝙿𝙸𝚂𝙾𝙳𝙴 - 1*
*⏳𝚁𝚄𝙽 𝚃𝙸𝙼𝙴 - 35𝙼 22𝚂*
*🧾 𝚂𝚄𝙱𝚃𝙸𝚃𝙻𝙴 - සිංහල*
*📥 𝚂𝙸𝚉𝙴 - 249𝙼𝙱*


*⚔️🛡️ 𝔽𝕀ℝ𝔼 𝚃𝚅 𝚂𝙴𝚁𝙸𝙴𝚂 𝔾ℝ𝕆𝕌ℙ ⚔️🛡️*`

                let buttons = [
                    {buttonId: 'ft-id-01', buttonText: {displayText: 'DOWNLOAD'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://m.media-amazon.com/images/M/MV5BMjU4MTkxNzktNzUyYy00NDM2LWE5NGQtNjJlN2Q0N2MxZDAxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg'},
                    caption: charlie ,
                    footer: 'Fire tv series By 🔐 ᴀɴᴏɴʏ-𝚇 ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break


// JavaScript Document

//TVSERIES LINK

case 'ft-id-01':

case 'ft-id1-01':
		
// sand man
		
case 'ft-id2-01':
case 'ft-id2-02':
case 'ft-id2-03':
case 'ft-id2-04':
case 'ft-id2-05':
case 'ft-id2-06':
case 'ft-id2-07':
case 'ft-id2-08':
case 'ft-id2-09':
case 'ft-id2-10':
		

//film link


case 'eeswaran':
case 'dhoom-2004':
case 'bad-boys':
case 'the.witch.part.1':

case 'army-of-dead':
case 'fm-id-01':
case 'fm-id-02':
case 'fm-id-03':
case 'fm-id-04':
case 'fm-id-05':
case 'fm-id-06':
case 'fm-id-07':
case 'fm-id-08':
case 'fm-id-09':
case 'fm-id-10':
case 'fm-id-11':
case 'fm-id-12':
case 'fm-id-13':
case 'fm-id-14':
case 'fm-id-15': {
	if (!m.isGroup) return replay(`Inbox not allowed ❌
https://chat.whatsapp.com/IdAjUhxvMXbBblT1exz0OJ
join this group. ✔️`)
	
             let link

//film-index-ink

             if (/fm-id-01/.test(command)) link = 'https://drive.google.com/u/2/uc?id=1hK4cVJVZR_7aieLQMklyO42YkG1Jufww&export=download&confirm=t&uuid=0a3ecc0f-ea62-4917-b903-ea7ff3078756'
             
             if (/fm-id-02/.test(command)) link = 'https://docs.google.com/u/4/uc?id=15ScXlsrvz5JSIGI90lR50g0YGQ1Mb_9g&export=download&confirm=t&uuid=14855d3e-442a-4ee0-8b43-644fbc6e5161'
             if (/fm-id-03/.test(command)) link = 'https://drive.google.com/u/4/uc?id=1GVDFQOAEHh8lv5Ong8TU3msaMyThlw_A&export=download&confirm=t&uuid=ef21b2b1-a123-4d59-ab51-5e53fc43f0fa'
             if (/fm-id-04/.test(command)) link = 'https://drive.google.com/u/2/uc?id=1LdYWxOwWDsRFnStLCESQmuqZy_Q4zW37&export=download&confirm=t&uuid=bca8b975-83c3-431d-b37c-b586433404b4'
             if (/fm-id-05/.test(command)) link = 'https://drive.google.com/u/2/uc?id=1lCv7oEI2qhwRELpKubNgmP51J8wOnwqG&export=download&confirm=t&uuid=4347bef5-c1ff-4da1-a551-076538e1afeb'

  //benten
             if (/fm-id-06/.test(command)) link = 'https://drive.google.com/u/2/uc?id=1BKDfdLQ8nDbrj-t1J2zOXuYyaPMldUgl&export=download&confirm=t&uuid=fdbaafc6-0859-4862-84ef-71b51d91fffa'
             if (/fm-id-07/.test(command)) link = 'https://drive.google.com/u/4/uc?id=1jbSqZXsvYme4QhUg52SEKyjQz52_FGOq&export=download&confirm=t&uuid=23464276-1d3e-4f63-a28a-7e4c085b9e82'
             if (/fm-id-08/.test(command)) link = 'https://drive.google.com/u/2/uc?id=1jz-Q13yNlL6CPGOMz7FVacCNQPpkfQIM&export=download&confirm=t&uuid=4b843a0e-6742-49b6-955e-13e3c1ca6ee4'
             if (/fm-id-09/.test(command)) link = 'https://drive.google.com/u/2/uc?id=1OR3IcHE2IbXKqxsrwWc8RNOPsGjBUCUU&export=download&confirm=t&uuid=a87a8a42-ebb5-4bbf-9e4a-5cd3b1cb0b59'
             if (/fm-id-10/.test(command)) link = 'https://drive.google.com/u/4/uc?id=1fDg_0NrlwuGFF3tZ01aokFVo4Ejx7nW7&export=download&confirm=t&uuid=4cf2207b-d849-4fc3-8fcd-f51e4fc76b85'
             if (/fm-id-11/.test(command)) link = 'https://drive.google.com/u/2/uc?id=1PmmB6In83XWiKt9mcsah5-riRHxnmxny&export=download&confirm=t&uuid=4dee1304-9971-4e17-a263-8feecd939c32'
  //noha2014
             if (/fm-id-12/.test(command)) link = 'https://drive.google.com/u/4/uc?id=1JTQqdSMght9UeBwZVb-kTSXWX99TdJkK&export=download&confirm=t&uuid=eb2cb4d1-493c-4c90-880e-386d04b6d9fe'
             if (/fm-id-13/.test(command)) link = 'https://drive.google.com/u/2/uc?id=1kGIW9keuJtfETIv_R9a1Z1YW7d2PEsow&export=download&confirm=t&uuid=00127a0a-efa1-40c1-9549-c6716045c7eb'
             if (/fm-id-14/.test(command)) link = 'https://drive.google.com/u/4/uc?id=1d_9G1cOioqd59f2oqj1WsDxVJCQjCjQq&export=download&confirm=t&uuid=a6530113-fe5f-4e01-a947-6c36fb7c9b23'
             if (/fm-id-15/.test(command)) link = 'https://drive.google.com/u/2/uc?id=1pW6E2XJcQ8Jz-7eyE6AKZ2RpuaB7X5Js&export=download&confirm=t&uuid=b2d9085e-50c4-448f-96d4-7c6e3d1dff38'
 
             if (/army-of-dead/.test(command)) link = 'https://drive.google.com/u/0/uc?id=1AljWpa10S5bmH78z7J2ilHYTzhb1p4iL&export=download&confirm=t&uuid=6ad7e8eb-2d13-4ea9-83d8-0cd6ea631a09'

             if (/eeswaran/.test(command)) link = 'https://drive.google.com/u/1/uc?id=12WCNGic0SFLBZWJz8V0nfYrFfzhkvhk2&export=download&confirm=t&uuid=7b4e4496-9c6a-4316-b055-c3b06dd93fb9'
             if (/dhoom-2004/.test(command)) link = 'https://drive.google.com/u/1/uc?id=1l22pUfLsWhXaDUHvzNP2NfbRQln9-oj1&export=download&confirm=t&uuid=4de048c6-b2db-4490-80d8-08b9e2b1e619'
             if (/bad-boys/.test(command)) link = 'https://drive.google.com/u/1/uc?id=1NyFoXyvd-rDVcR6DNEovSqxkGRYpb3uq&export=download&confirm=t&uuid=96adc9ac-2157-4498-b36a-1fd7fa2653d8'


	
//tv-the-sandbox
	
             if (/ft-id2-01/.test(command)) link = 'https://drive.google.com/u/3/uc?id=1uDpqZ6QqsdZvjJQ6A-apuz-StbUe0Yzs&export=download&confirm=t&uuid=990abf89-6456-43b9-b895-d1354eef0e32'
             if (/ft-id2-02/.test(command)) link = 'https://drive.google.com/u/3/uc?id=1dLvNSXj6LMyDitPs9OSn22ld-75NgTfW&export=download&confirm=t&uuid=ca8dfe87-af6a-4bb4-b429-5f882efd9f9a'
             if (/ft-id2-03/.test(command)) link = 'https://drive.google.com/u/3/uc?id=1kdhrFyUQQ1fmgwmcKQjT6koE1cZS3JL-&export=download&confirm=t&uuid=93b25650-f05d-45fb-af1f-24fef580b392'
             if (/ft-id2-04/.test(command)) link = 'https://drive.google.com/u/3/uc?id=1Knvy-9cSkp1xoZ45j1mnMC1YPbQCIy1Z&export=download&confirm=t&uuid=dbf37f13-d777-4399-a6b2-82face07e267'
             if (/ft-id2-05/.test(command)) link = 'https://drive.google.com/uc?export=download&id=1NpPBytfePC5MuLN2jb0RQ3pud4W1CUB9&confirm=t&uuid=9dce0356-176b-4e4b-b100-110ff40bfa96'
             if (/ft-id2-06/.test(command)) link = 'https://drive.google.com/uc?export=download&id=1fIILZRvGrUBgBwjl19t6WMZBq4mYoZLo&confirm=t&uuid=2bc037dc-a128-4a13-b085-b3f8a5034e17'
             if (/ft-id2-07/.test(command)) link = 'https://drive.google.com/uc?export=download&id=1vhEEiUmivzVnKySVegEV5UDi4AJIWhRZ&confirm=t&uuid=61b2c7fa-8fae-4e41-88ac-05fad657974a'
             if (/ft-id2-08/.test(command)) link = 'https://drive.google.com/uc?export=download&id=1A6r6ynMzLhLpaVQH_n0lVk0UhNacLfWH&confirm=t&uuid=ce57ea5e-bf53-4f64-8168-d6afbde3937f'
             if (/ft-id2-09/.test(command)) link = 'https://drive.google.com/uc?export=download&id=1C--4oZtFoqYzAGodQAJ2L_Ka0KvzPRlV&confirm=t&uuid=8773d150-1de1-48ab-9b79-ed62c81667c3'
             if (/ft-id2-10/.test(command)) link = 'https://drive.google.com/uc?export=download&id=1dNZyENcvzSYB5ZoKxjqzVZ494MsIVlJ2&confirm=t&uuid=4cd8abab-1b13-482e-b96a-4460b4f97659'

	
	
//tv-series-index-link
             if (/ft-id-01/.test(command)) link = 'https://filebin2.aws.atsign.cloud/tpb87s4kt1t84ra0/She-Hulk.Attorney.at.Law.S01E01.WEB.x264-FilmsZilla.LK.mkv'


//house of dragon
             if (/ft-id1-01/.test(command)) link = 'https://drive.google.com/u/3/uc?id=10g8DP3m9O2CNmH-jozKGOaS7OH8wMdVO&export=download&confirm=t&uuid=5e9a1659-23c0-4de1-9b60-8f0378afcd21'



//film file name

             if (/fm-id-01/.test(command)) name = '777 charlie 🔥Fire Films bot🔥.mkv'
             if (/fm-id-02/.test(command)) name = 'Jugjugg Jeeyo 🔥Fire Films bot🔥.mkv'
             if (/fm-id-03/.test(command)) name = 'Rocketry: The Nambi Effect 🔥Fire Films bot🔥.mkv'
             if (/fm-id-04/.test(command)) name = 'Veetla Vishesham (2022)  🔥Fire Films bot🔥.mkv'
             if (/fm-id-05/.test(command)) name = '𝙵𝙾𝚁𝙴𝙽𝚂𝙸𝙲 (2020) 🔥Fire Films bot🔥.mkv'
             if (/fm-id-06/.test(command)) name = '𝙱𝙴𝙽 10: 𝙰𝙻𝙸𝙴𝙽 𝚂𝚆𝙰𝚁𝙼 🔥Fire Films bot🔥.mkv'
             if (/fm-id-07/.test(command)) name = '𝚂𝙿𝙸𝙳𝙴𝚁 𝙼𝙰𝙽: 𝙽𝙾 𝚆𝙰𝚈 𝙷𝙾𝙼𝙴 (2021) 🔥Fire Films bot🔥.mkv'
             if (/fm-id-08/.test(command)) name = '𝚃𝙷𝙴 𝙽𝚄𝙽 (2018) 🔥Fire Films bot🔥.mkv'
             if (/fm-id-09/.test(command)) name = '96 (2018) 🔥Fire Films bot🔥.mkv'
             if (/fm-id-10/.test(command)) name = '𝚃𝙷𝙴 𝙿𝚁𝙸𝙽𝙲𝙴𝚂𝚂 (2022) 🔥Fire Films bot🔥.mkv'
             if (/fm-id-11/.test(command)) name = '𝙰𝙽𝚃𝙸𝙼: 𝚃𝙷𝙴 𝙵𝙸𝙽𝙰𝙻 𝚃𝚁𝚄𝚃𝙷 (2021) 🔥Fire Films bot🔥.mkv'
             if (/fm-id-12/.test(command)) name = '𝙽𝙾𝙰𝙷 (2014) 🔥Fire Films bot🔥.mkv'
             if (/fm-id-13/.test(command)) name = '𝙳 𝙱𝙻𝙾𝙲𝙺 (2022) 🔥Fire Films bot🔥.mkv'
             if (/fm-id-14/.test(command)) name = '𝙿𝚄𝚁𝙿𝙻𝙴 𝙷𝙴𝙰𝚁𝚃𝚂 (2022) 🔥Fire Films bot🔥.mkv'
             if (/fm-id-15/.test(command)) name = '𝙳𝙾𝙲𝚃𝙴𝚁 𝚂𝚃𝚁𝙰𝙽𝙶𝙴 𝙸𝙽 𝚃𝙷𝙴 𝙼𝚄𝙻𝚃𝙸𝚅𝙴𝚁𝚂𝙴 (2022) 🔥Fire Films bot🔥.mkv'

             if (/eeswaran/.test(command)) name = '𝙴𝙴𝚂𝚆𝙰𝚁𝙽 (2021) by 🔥Fire Films bot🔥.mkv'
             if (/dhoom-2004/.test(command)) name = '𝙳𝙷𝙾𝙾𝙼 (2004) by  🔥Fire Films bot🔥.mkv'
             if (/bad-boys/.test(command)) name = '𝙱𝙰𝙳 𝙱𝙾𝚈𝚂 𝙵𝙾𝚁 𝙻𝙸𝙵𝙴 (2020) by 🔥Fire Films bot🔥.mkv'

             if (/army-of-dead/.test(command)) name = 'Army of Dead 🔥Fire Films bot🔥.mkv'

//tv series name

             if (/ft-id-01/.test(command)) name = '𝚂𝙷𝙴 𝙷𝚄𝙻𝙺: 𝙰𝚃𝚃𝙾𝚁𝙽𝙴𝚃𝚈 𝙻𝙰𝚆 (2022) S1 E1 🔥Fire tv series by anony-x bot🔥.mkv'

             if (/ft-id1-01/.test(command)) name = '𝙷𝙾𝚄𝚂𝙴 𝙾𝙵 𝚃𝙷𝙴 𝙳𝚁𝙰𝙶𝙾𝙽 (2022) S1 E1 🔥Fire tv series by anony-x bot🔥.mkv'
//the sandman

             if (/ft-id2-01/.test(command)) name = '𝚃𝙷𝙴 𝚂𝙰𝙽𝙳𝙼𝙰𝙽 S1 E1 🔥Fire Films by ᴀɴᴏɴʏ-𝚇 bot🔥.mkv'
             if (/ft-id2-02/.test(command)) name = '𝚃𝙷𝙴 𝚂𝙰𝙽𝙳𝙼𝙰𝙽 S1 E2 🔥Fire Films by ᴀɴᴏɴʏ-𝚇 bot🔥.mkv'
             if (/ft-id2-03/.test(command)) name = '𝚃𝙷𝙴 𝚂𝙰𝙽𝙳𝙼𝙰𝙽 S1 E3 🔥Fire Films by ᴀɴᴏɴʏ-𝚇 bot🔥.mkv'
             if (/ft-id2-04/.test(command)) name = '𝚃𝙷𝙴 𝚂𝙰𝙽𝙳𝙼𝙰𝙽 S1 E4 🔥Fire Films by ᴀɴᴏɴʏ-𝚇 bot🔥.mkv'
             if (/ft-id2-05/.test(command)) name = '𝚃𝙷𝙴 𝚂𝙰𝙽𝙳𝙼𝙰𝙽 S1 E5 🔥Fire Films by ᴀɴᴏɴʏ-𝚇 bot🔥.mkv'
             if (/ft-id2-06/.test(command)) name = '𝚃𝙷𝙴 𝚂𝙰𝙽𝙳𝙼𝙰𝙽 S1 E6 🔥Fire Films by ᴀɴᴏɴʏ-𝚇 bot🔥.mkv'
             if (/ft-id2-07/.test(command)) name = '𝚃𝙷𝙴 𝚂𝙰𝙽𝙳𝙼𝙰𝙽 S1 E7 🔥Fire Films by ᴀɴᴏɴʏ-𝚇 bot🔥.mkv'
             if (/ft-id2-08/.test(command)) name = '𝚃𝙷𝙴 𝚂𝙰𝙽𝙳𝙼𝙰𝙽 S1 E8 🔥Fire Films by ᴀɴᴏɴʏ-𝚇 bot🔥.mkv'
             if (/ft-id2-09/.test(command)) name = '𝚃𝙷𝙴 𝚂𝙰𝙽𝙳𝙼𝙰𝙽 S1 E9 🔥Fire Films by ᴀɴᴏɴʏ-𝚇 bot🔥.mkv'
             if (/ft-id2-10/.test(command)) name = '𝚃𝙷𝙴 𝚂𝙰𝙽𝙳𝙼𝙰𝙽 S1 E10 🔥Fire Films by ᴀɴᴏɴʏ-𝚇 bot🔥.mkv'

	



             let anony = await(link)
             let fname = await(name)
              reply(`*DOWNLOAING PLEASE WAIT....*`)
                Anony.sendMessage(m.chat, { document: { url: anony }, mimetype: 'video/x-matroska', fileName: fname }, { quoted: m })
             }
	break				
		

case 'up': {
	Anony.sendPresenceUpdate('composing', m.chat) 
                
              
                await axios
          .get(`https://api.single-developers.software/hirunews?type=main`)
          .then(async (response) => {
            const {
              title,img,text,date,url,
            } = response.data
              
            
                let buttons = [
                    
                    {buttonId: `like`, buttonText: {displayText: '👍'}, type: 1},
                    {buttonId: `unlike`, buttonText: {displayText: '👎'}, type: 1},
                    {buttonId: `heart`, buttonText: {displayText: '❤️'}, type: 1}
                   
                ]
                let buttonMessage = {
                    image: { url: img },
                    caption: `${title} 😬

${text}

${date}
`,

                    footer: botname,
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
         
         
         })
          }
	    break

			
             
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    Anony.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
// JavaScript Document
