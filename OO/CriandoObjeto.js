let obj1 = {
    frase:'Olá'
}

console.log(obj1)

function Pessoa(nome, idade){
    this.nome = nome
    this.getAnoDoNasc = () => {
        return 2023 - idade
    }
}

let pessoa1 = new Pessoa('Lucas', 23)

console.log(pessoa1.getAnoDoNasc())


function criaPessoa(nome){
    return {
        nome
    }
}

let listaDeNomes = ['Lucas', 'Diego', 'Vivian', 'Carol']

for (nome in listaDeNomes){
    console.log(criaPessoa(listaDeNomes[nome]))
}


let parente = Object.create(null)
parente.nome = 'Vilma'
console.log(parente)


const testeJson = JSON.parse('{"Info":"Isso é um Json"}')
console.log(testeJson)