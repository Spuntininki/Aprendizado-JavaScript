/* setTimeout(function (){
    console.log('Opa!')
    setTimeout(function(){
        console.log('Epa')
        setTimeout(function (){
            console.log('Oia')
        }, 2000)
    }, 2000)
}, 2000) */

function falarDepoisDe(tempo = 2000){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Executando!')
        }, tempo)
    })
}

falarDepoisDe()
    .then(resultado => resultado + ' Random String concat')
    .then(console.log)