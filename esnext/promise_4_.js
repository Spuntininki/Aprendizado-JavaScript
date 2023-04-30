function generateRandomNumber(min, max, time){
    if(min > max){
        [max, min] = [min, max]
    }
    return new Promise(resolve => {
        setTimeout(() => {      
        
            const fator = (max - min) + min
            resolve(parseInt(Math.random() * fator))
        })
    }, time)

}


function generateRandomNumbers(){

    return Promise.all(
        [
            generateRandomNumber(1, 60, 2000),
            generateRandomNumber(1, 60, 1000),
            generateRandomNumber(1, 60, 1900),
            generateRandomNumber(1, 60, 100),
            generateRandomNumber(1, 60, 500),
            generateRandomNumber(1, 60, 3000),
            generateRandomNumber(1, 60, 4000),
        ]
    )
}

generateRandomNumbers()
                    .then(console.log)