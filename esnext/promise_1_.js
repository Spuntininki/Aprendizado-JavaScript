p = new Promise(resolve => {
    resolve('Retornando o nome Lucas Fonseca')
})



p
    .then(retorno => retorno.slice(10))
    .then(retorno => console.log(retorno))
    .then(retorno => a = retorno)
