const fs = require('fs')
const chalk = require('chalk')

global.apikey = 'Maslent' //https://api.lolhuman.xyz
global.rosekey = '-' //https://api.itsrose.life
//—————「 Set Nama Bot & Own 」—————//
global.namabot = 'FrdyBOTzོ'
global.namaowner = 'FrdyXy ×፝֟͜×'

//—————「 Setting Owner 」—————//
global.owner = '6282297956601','13617920677'
global.ownernomer = ["6282297956601","13617920677"]
global.premium = ['6282297956601','13617920677']

//—————「 Set Wm 」—————//
global.packname = '𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝙱𝚈 𝙵𝚛𝚍𝚢𝙱𝙾𝚃𝚣\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'
global.author = '𝙹𝙰𝙽𝙶𝙰𝙽 𝙻𝚄𝙿𝙰 𝙵𝙾𝙻𝙻𝙾𝚆\n𝙸𝙶:𝙵𝚛𝚍𝚢𝚡𝚢'
global.prefa = ['', '.']
global.sp = '•'

//—————「 Set Message 」—————//
global.mess = {
    done: 'Done ✅',
    admin: 'Feature Only for _*Admin Group*_',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: 'Feature Only for _*owner*_',
    group: 'Feature Only for _*Group Chat*_',
    private: 'Feature Only for _*Admin Group*_',
    wait: 'Wait a Moment, for Process',
    endLimit: 'Your imit has run out, Wait at 12 at night',
    error: '*!!!Feature Error!!!*',
}

//—————「 Set Limit 」—————//
global.limitawal = {
    premium: "Infinity",
    free: 50,
}

//—————「 Set Image 」—————//
global.imageurl = 'https://telegra.ph/file/9f9ec41097c6ce530dec6.jpg'
global.link = 'https://www.instagram.com/frdyxy'
global.thumb = fs.readFileSync('./media/thumb.jpg')

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
