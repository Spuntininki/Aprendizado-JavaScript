const notas = [1, 5, 6, 10]
for (let i in notas){
    console.log(`Indice ${i} = ${notas[i]}`)
}

const pessoa = {
    nome: 'Lucas',
    idade: 23,
    peso: 75
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}