
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


async function numerosMegaSena(quantidadeDeNumeros, retry=1){
    const ArrayDeNumerosGerados = []
    for(let _ of Array(quantidadeDeNumeros).fill()){
        try{
            ArrayDeNumerosGerados.push(await generateRandomNumber(1, 60, ArrayDeNumerosGerados))

        }catch(e){

            if(retry > 3){
                throw "Não deu certo!"
            }else{
                return numerosMegaSena(quantidadeDeNumeros, retry + 1)                
            }
        }

    }
    return ArrayDeNumerosGerados


}

numerosMegaSena(15)
    .then(console.log)
    .catch(console.log)