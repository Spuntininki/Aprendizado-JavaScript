Array.prototype.pseudoMap = function(callBack){
    let returnArray = []
    for(let i = 0; i < this.length; i++){
        returnArray[i] = callBack(this[i])
    }
    return returnArray
}

const estoque = [
    '{"produto":"Caderno", "valor":5.3}',
    '{"produto":"Caneta", "valor":2.3}',
    '{"produto":"Borracha", "valor":3.0}',
    '{"produto":"Lapis", "valor":1}',
]

valores = estoque.pseudoMap(e => JSON.parse(e)['valor'] )
console.log(valores)