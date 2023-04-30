//O "for of" é um paralelo com o "for in" em javascript. No in, é iterado o valor do index da estrutura de dados, no for of é iterado nos valores em si da estrutura.
const testeArray = ['Lucas', 'diego', 'vivian', 'carol']

for (let valor of testeArray){
    console.log(valor)
}
for (let index in testeArray){
    console.log(index)
}


//O operador também pode ser aplicado em outras estruturas de dados, como o Map e o Set.
const testeSet = new Set(['a', 'b', 'c', 'd'])
const testeMap = new Map([
    ['cidade', 'São Paulo'],
    ['estado', 'São Paulo']
])

for (let valor of testeSet){
    console.log(valor)
}
for (let valor of testeMap){
    console.log(valor)
}