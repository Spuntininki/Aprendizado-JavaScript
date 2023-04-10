// funções built-in de Object. Object.values() && Object.entries()

const obj = {
    nome: 'Lukita',
    profissao: 'analista',
    idade: 23
}

console.log(Object.entries(obj)) 
//Essa função converte o dicionário em uma lista. 
//a separação entre a chave e o valor é feita atrvés de pequeas listas. 
//ou seja retorna uma matriz.
console.log(Object.values(obj))
//Uma função intuitiva que retorna os valores do objeto. Vale citar que a função Object.keys() será a mesma coisa.

//------------------------------------------------//
//Vale ressaltar que a notação literal de um objeto em JS é flexivel, exemplo:
let nome = 'randomName'
const obj2 = {
    nome,
    printa(){
        console.log('teste')
    }
}
//na inicialização do objeto acima, note que eu não precisei explicitar a chave, nem para a variavel nome e nem para a função.
console.log(obj2.nome)
obj2.printa()


//------------------------------------//
//notação de classe em JS
class Animal{}
class cachorro extends Animal {
    late(params) {
        console.log('au au')
    }
}

const a = new cachorro
a.late()

//a classe em javascript é apenas um "artificio de sintaxe", pois no fundo é apenas uma função, por exemplo o "extends", internamente é o prototype