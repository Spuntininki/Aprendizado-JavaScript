const fs = require('fs')

const file_path = __dirname + '/dados.txt'


//fs.appendFile(file_path, '\nlinha 5', () => {})

function readFileWithPromisse(file_path){
    return new Promise(resolve => {
        fs.readFile(file_path, 'utf-8', (err, content) => {
            resolve(content.toString())
        })
    })
}

readFileWithPromisse(file_path)
                            .then(content => content.split('\n'))
                            .then(elemento_2 => elemento_2[1])
                            .then(console.log)