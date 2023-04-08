const Celta = {
    velocidadeMax: 200,
    cor: 'vermelho',

}

const Ferrari = {
    velocidadeMax: 300,
    cor: 'amarelo',
    
}


console.log(Celta.__proto__)
console.log(Celta.__proto__ == Object.prototype.__proto__)
console.log(Object.prototype.__proto__ === null)


function minhaFuncao(){}
console.log([].__proto__)