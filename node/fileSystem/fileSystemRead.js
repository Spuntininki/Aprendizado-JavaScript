const fs = require('fs')

const filePath = __dirname + '/dataBaseParams.json'
console.log(filePath)


//sicrono
const conteudo = fs.readFileSync(filePath, 'utf-8')
console.log(conteudo)

//assicrono
fs.readFile(filePath, 'utf-8', (err, conteudo) =>{
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})