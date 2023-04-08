function getRandomNumber(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)

}


let stop = 0
while (stop != -1){
    stop = getRandomNumber(-1, 10)
    console.log(stop)
}