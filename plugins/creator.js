const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;Rhmd;;;'
                    + 'FN:Rhmd\n' // full name
                    + 'ORG:Rhmd;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=6283108164709:+62 831-0816-4709\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'Rhmd', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
