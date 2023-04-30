const http = require('http')

//O intuito desse codigo é refatorar o "CallbackHell.js" para um codigo que utilize do promise.
function getAluno(turma){
    const url = `http://files.cod3r.com.br/curso-js/turma${turma}.json`
     return new Promise((resolve, reject) => {
        http.get(url, response => {
            let resultado = ''
            
    
            response.on('data', dados => {
                resultado += dados
            })
    
    
            response.on('end', () => {
                try{
                    resolve(JSON.parse(resultado))
                } catch(e){
                    reject(e)
                }
            })
         })
     })
     

}


let listaAlunos = []




Promise.all([getAluno('A'), getAluno('B'), getAluno('C')])
    .then(
        alunos => {
        listaAlunos = listaAlunos.concat(...alunos)
        console.log(listaAlunos.map(a => a.nome))
        }
    )
    .catch(e => console.log(e.message))

    getAluno('D').catch(e => console.log(e.message))