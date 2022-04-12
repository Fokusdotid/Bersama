let fs = require('fs')
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return
    let setting = global.db.data.settings

    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('Undangan untuk bergabung') || m.text.startsWith('Invitation to join') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
        let teks = `${sa}${kki} Invite Group ${kka}
${gy} 7 Day / Rp 5k
${gy} 15 Day / Rp 10k
${gy} 30 Day / Rp 15k
${gy} Up To Premium / Rp 10k
${gy} Premium + Sewa/Rent, Discount 5k
${sb}

Jika berminat hubungi: @${global.owner[0]} untuk order:)
`
        this.sendB(m.chat, teks, wm, null, [[`Sewa & Up To Premium`, `.sewa`]], m, { mentions: this.parseMention(teks) })
    }

    // salam
    let reg = /(ass?alam|اَلسَّلاَمُ عَلَيْكُمْ|السلام عليکم)/i
    let isSalam = reg.exec(m.text)
    if (isSalam && !m.fromMe) {
        m.reply(`wa\'alaikum salam`)
    }
    if (/^(te?s|ce?k)$/i.exec(m.text) && !m.fromMe) {
        m.reply('on')
    }
    if (/^terima|makasih|mksh|thank|thanks$/i.exec(m.text) && !m.fromMe) {
        let a = "https://telegra.ph/file/90d392a787612bd894610.png"
        conn.sendStimg(m.chat, a, m, { packname: packname, author: author })
    }

}

module.exports = handler
