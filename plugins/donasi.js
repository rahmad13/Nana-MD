let handler = async (m) => {
	m.reply(`
*── 「 DONATE 」 ──*

Hai 👋
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
┌〔 Donasi • Emoney 〕
├🏧 083108164709 (Dana)
└────
Berapapun donasi kalian akan sangat berarti 👍

Arigatou!

Contact person Owner:
wa.me/6283108164709 (Owner)`)
}

handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)|bagiduit$/i

module.exports = handler
