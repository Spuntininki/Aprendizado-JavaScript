const pessoa = {nome: 'Josevaldo'} 
console.log(pessoa)

pessoa.nome = 'Almir'
console.log(pessoa)
Object.freeze(pessoa) //Congela objeto negando qualquer alteração. Para alterar é necessário copiar o objeto.
pessoa.nome = null

console.log(pessoa)