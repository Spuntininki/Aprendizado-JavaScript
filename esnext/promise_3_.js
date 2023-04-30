function generateRandomNumber(min, max){
    if(min > max){
        [max, min] = [min, max]
    }


    return new Promise(resolve => {
        const fator = (max - min) + min
        resolve(parseInt(Math.random() * fator))
    })
}
for(let i = 0; i < 10; i++){
    generateRandomNumber(1, 60)
        .then(resultado => `O valor aleatório é ${resultado}`)
        .then(console.log)
}