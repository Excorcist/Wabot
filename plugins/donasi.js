let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Axis [083133006690]
│ • Axis [083809976711]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6281357302007
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
