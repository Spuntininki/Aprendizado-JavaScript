const http = require('http')


function getAluno(turma, callback){
    const url = `http://files.cod3r.com.br/curso-js/turma${turma}.json`
    
     http.get(url, response => {
        let resultado = ''
        

        response.on('data', dados => {
            resultado += dados
        })


        response.on('end', () => {
            callback(JSON.parse(resultado))
            
        })
     })

}


let nomeDosAlunos = []

getAluno('A', response => {
    
    nomeDosAlunos = nomeDosAlunos.concat(response.map(element =>  `A: ${element.nome}`))
    getAluno('B', response => {
        nomeDosAlunos = nomeDosAlunos.concat(response.map(element => `B: ${element.nome}`))
        
        getAluno('C', response => {
            nomeDosAlunos = nomeDosAlunos.concat(response.map(element => `C: ${element.nome}`))
            console.log(nomeDosAlunos)
        })
    })

})


setTimeout(() => {
    console.log(nomeDosAlunos)
}, 2000)

