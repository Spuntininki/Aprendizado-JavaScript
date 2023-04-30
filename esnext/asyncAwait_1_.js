function falarDepoisDe(tempo = 2000, texto = 'Executando!'){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(texto)
        }, tempo)
    })
}


async function executa(){
    a = await falarDepoisDe(2000, texto='Executando 1')
    b = await falarDepoisDe(3000, texto='Executando 2')
    console.log(b)
    c = await falarDepoisDe(1500, texto='Executando 3')
    console.log(c)

    console.log(a)
}
//O node só permite utilizar a clausula "await" dentro de uma função declarada como "async". Ou seja, não é possivel usar da clausula fora de um função.

executa()
