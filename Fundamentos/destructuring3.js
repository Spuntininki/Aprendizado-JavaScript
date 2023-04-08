function rand({min = 0, max = 100}) {
    valor = Math.random() * (max - min) + min
    valor = Math.floor(valor)
    return valor
}

const obj = {min: 50, max: 100}
console.log(rand(obj))
console.log(rand({}))
console.log(rand())