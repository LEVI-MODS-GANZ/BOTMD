const { MessageType } = require('@adiwajshing/baileys')
const fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m, { conn }) => {

let str = `››〘 *Donasi* 〙
╭══════════════════
║╭──❉ 〔  *DONASI*  〕 ❉───
║│➸ *Dana* : 081248537085
║│➸ *Ovo* : 081248537085
║│➸ *GoPay* : 081248537085
║│➸ *Pulsa Telkomsel*: 081248537085
║│➸ *Trakteer*:
║│   https://trakteer.id/venBotz/tip
║╰───────────────
╰═════════════════
let name = await conn.getName(m.sender)

let fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}

  sumberImg = await (await fetch(fla + 'donasi')).buffer()
  image = (await conn.prepareMessage('6281248537085@s.whatsapp.net', sumberImg, MessageType.image, { thumbnail: Buffer.alloc(0) })).message.imageMessage
  res = await conn.prepareMessageFromContent(m.chat, {
    "productMessage": {
      "product": {
        "productImage": image,
        "productId": "4938174216214248",
        "title": "DONASI",
        "description": '\n' + wm + '\n' + str,
        "retailerId": "Thanks For Donate !",
        "url": "▌│█║▌║▌║║▌║▌║█│▌",
        "descriptionCount": "999999999",
        "productImageCount": "1",
      },
      "businessOwnerJid": "6281248537085@s.whatsapp.net",
      "contextInfo": {
        "forwardingScore": 9999,
        "isForwarded": false
      }
    }
  },
    { quoted: fkon })
  conn.relayWAMessage(res)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(si|te)$/

module.exports = handler

let wm = global.botwm