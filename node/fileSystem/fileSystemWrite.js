const fs = require('fs')

const produto = {
    nome: 'celular',
    valor: 1300,
    marca: 'RedMI 15',
    estoque: 15
}
//console.log(__dirname + 'arquivoGerado.json')
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => console.log(err || 'Arquivo criado com sucesso!'))