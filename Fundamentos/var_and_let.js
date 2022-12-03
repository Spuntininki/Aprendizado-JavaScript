//ao utilizar VAR, existem apenas dois escopos possiveis. Global ou local dentro de uma função.

var arroz = 2

function func_one(){
    var arroz = 3
    console.log(arroz)
}

{
    var arroz = 1
}


func_one()
console.log(arroz)


//ao utilizar LET, existem três escopos possíveis. Gobal, função e bloco.

let numero = 1

{
    let numero = 2
    console.log('Dentro=', numero)
}
console.log('Fora=', numero)