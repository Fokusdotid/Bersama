let handler = async (m, { conn }) => {
  try {
    const sentMsg = await conn.sendContactArrayS(m.chat, [
      [`${owner[0]}`, `${await conn.getName(owner[0] + '@s.whatsapp.net')}`, `ð Developer Bot `, `ð« Don't call me ð¡`, `raselcomel18@gmail.com`, `ð®ð© Indonesia`, `ð https://raselcomel.github.io/`, `ð¤ Gada pawang nih senggol dong ð£`],
      [`${owner[1]}`, `${await conn.getName(owner[1] + '@s.whatsapp.net')}`, `ð Developer Bot `, `ðµ Don't spam/call me ð¡`, `mr.familia13@gmail.com`, `ð®ð© Indonesia`, `ð https://instagram.com/aguzfamilia`, `ð¤ Hanya seseoarng biasa yang kadang butuh perhatian âº`],
      [`${owner[2]}`, `${await conn.getName(owner[2] + '@s.whatsapp.net')}`, `ð Developer Bot `, `ð« Don't call me ð¡`, `aniqshehyar1@gmail.com`, `ð®ð© Indonesia`, `ð https://github.com/aniq12`, `ð¤ Gada pawang nih senggol dong ð£`],
      [`${owner[3]}`, `${await conn.getName(owner[3] + '@s.whatsapp.net')}`, `ð Developer Bot `, `ð« Don't call me ð¡`, `amirul@skyn.tech`, `ð®ð© Indonesia`, `ð https://github.com/amiruldev20`, `ð¤ Sudah ada pawang banh ð£`]
    ], m)
    await conn.reply(m.chat, `Halo kak @${m.sender.split(`@`)[0]} itu nomor team developerku, jangan di apa-apain ya kakð`, sentMsg, { mentions: [m.sender] })
  } catch {
    const sentMsg = await conn.sendContact(m.chat, `${owner[0]}`, `${await conn.getName(owner[0] + '@s.whatsapp.net')}`, m)
    await conn.reply(m.chat, `Halo kak @${m.sender.split(`@`)[0]} itu nomor team developerku, jangan di apa-apain ya kakð`, sentMsg, { mentions: [m.sender] })
  }
}
handler.help = ['owner']
handler.tags = ['info']
handler.command = /^(owner)$/i

module.exports = handler
