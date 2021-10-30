let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
Tagged..
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /@628988293493/i
handler.command = new RegExp

module.exports = handler
