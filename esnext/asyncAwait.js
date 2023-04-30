const http = require('http')

//O intuito desse codigo é utilizar a sintaxe async e await
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

const pegaAlunos = async () => {
    const turmaA = await getAluno('A')
    const turmaB = await getAluno('B')
    const turmaC = await getAluno('C')

    return [].concat(...[turmaA, turmaB, turmaC])

}

pegaAlunos()
    .then(alunos => {for (aluno of alunos){
        console.log(aluno.nome)
    }
})


