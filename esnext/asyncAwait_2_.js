
function generateRandomNumber(min, max, numerosProibidos = []){
    if(min > max){
        [max, min] = [min, max]
    }

    return new Promise((resolve, reject) => {
        const fator = (max - min) + min
        const numeroGerado = Math.random() * fator
        if (numerosProibidos.includes(parseInt(numeroGerado))){
            reject('Número proibido!')
        }else{
            resolve(parseInt(numeroGerado))
        }
    })
}


async function numerosMegaSena(quantidadeDeNumeros){
    const ArrayDeNumerosGerados = []
    for(let _ of Array(quantidadeDeNumeros).fill()){
        ArrayDeNumerosGerados.push(await generateRandomNumber(1, 60, ArrayDeNumerosGerados))

    }
    return ArrayDeNumerosGerados


}

numerosMegaSena(10)
    .then(console.log)
    .catch(console.log)