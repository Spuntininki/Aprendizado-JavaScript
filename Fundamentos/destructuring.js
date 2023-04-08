const Pessoa = {
    nome: 'Lucas',
    idade: 23,
    endereco: {
        logradouro: "Rua ABC",
        numero: 44        
    }
}

// sintaxe basica da destruturação de objetos
const {nome, idade} = Pessoa

console.log(nome, idade)

//sitaxe utilizada na desustruturação de objetos aninhados
const {endereco: {logradouro, numero}} = Pessoa
console.log(logradouro)
console.log(numero)

//fazendo a desustrutração de um object aninhado é necessario que o objeto exista, pois caso o contrario será feito uma tentativa de acessar um atributo de algo "undefined".
const {conta: {agencia, numero_conta}} = Pessoa
