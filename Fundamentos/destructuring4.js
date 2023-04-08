function rand([min = 0, max = 100]) {
    if (min > max) [min, max] = [max, min]
    valor = Math.random() * (max - min) + min
    valor = Math.floor(valor)
    return valor

}


console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))
console.log(rand())