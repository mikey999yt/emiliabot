let fs = require('fs')
global.owner = ['919556416715'] // Letakan nomor kamu disini
global.mods = [] // Moderator?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Pengguna premium tidak memerlukan limit
global.APIs = { // API Prefix
  // nama: 'https://website'
  bx: 'https://bx-hunter.herokuapp.com',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz',
  xteam: 'https://api.xteam.xyz',
  fxc7: 'https://fxc7-api.herokuapp.com',
  l0lhuman: 'https://api.lolhuman.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zekais: 'http://zekais-api.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
}
global.APIKeys = { // APIKey nya disini
  // 'https://website': 'apikey'
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://fxc7-api.herokuapp.com':'pnj8NAJb',
  'https://pencarikode.xyz': 'pais',
  'https://api.xteam.xyz': 'sonycovery',
  'https://api.lolhuman.xyz': 'HIRO',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'DitzzRestKey',
}

// Sticker WM
global.packname = 'WHATSAPP BOT'
global.author = 'bot.wibusoft.cloud'

global.wait = '_𝐖𝐚𝐢𝐭 𝐚 𝐦𝐢𝐧𝐮𝐭𝐞 ⏳_'
global.eror = '_*𝐒𝐞𝐫𝐯𝐞𝐫 𝐄𝐫𝐫𝐨𝐫*_'
global.fla = 'https://telegra.ph/file/fb6c8346c7eb7297e5572.jpg'

global.watermark = '*EMILIA BOT🌟*'

global.multiplier = 69 // Semakin tinggi, semakin sulit naik level

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
