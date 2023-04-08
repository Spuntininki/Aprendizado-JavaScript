
const lista = [
    {nota:10},
    {nota:5.6},

]   

let soma = 0
soma = lista.map(a =>  a.nota).reduce((acumulador=0, nota) => acumulador += nota)
console.log(soma/2)