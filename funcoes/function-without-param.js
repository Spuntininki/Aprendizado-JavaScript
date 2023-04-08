function soma() {
    let soma = 0
    for(let i in arguments){
        soma += arguments[i]
    }
    return soma
}




//let a = 
console.log(soma(1, 2, 3))