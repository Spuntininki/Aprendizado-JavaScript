//arrow function
const soma = (a, b) => a + b 
// na maneira escrita acima, estou usando a arrow function com o intuito de deixar uma sitaze simples, de apenas uma linha.
//para esse caso o retorno da função é implicito.
console.log(soma(2, 3))
const multiplica = (a, b) => {
    return a * b
}
// todavia, ainda é possivel usar de chaves na sintaxe, mas ai o retorno precisa ser explicito caso necessário.

//operador rest (reste/spread)
function log(...parammetros){
    console.log(parammetros)
}
//aqui os três '.' (...) é chamado de rest, pois o mesmo está sendo usado em um contexto de função, 
//onde ele está "juntando" as entradas para a mesma, e tornando apenas uma (lista).

log(1, 3, 4, 5, 6)