function sum(){
    soma = 0 
    for(i in arguments){
        soma += arguments[i];
    }
    return soma
}

console.log(sum(1, 2, 3))
console.log(sum(1, 'sdfsdfs', 2.3))