function FalarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

FalarDepoisDe(3, 'Olá mundo!')
    .then(frase => frase.concat(' Promises!'))
    .then(frase => console.log(frase))
    .catch(e => console.log(e))

//Ao retornar um objeto Promise, se pode chamar o "then" para encadear o retorno (resolve) da mesma ou chamar um "catch", 
//para um caso de negação (reject).
