// let vs var
{
    var a = 1
    let b = 2
    //Basicamente o que diferencia uma da outra é o escopo de bloco. 
    //Na declaração let só é possivel evocar a variavel dentro do bloco, 
    //na declara var é mais "flexivel" (ruim ao meu ver).
}
//------------------------------------------------------------------------
//Template string

let armagedon = 'randomName'

console.log(`printando o ${armagedon}!
muahahahhaa
`)// um ponto sobre o as template string, é que elas leem os espaços que vc inserir dentro da mesma, diferente de um string default.


// -----------------------------------------------------------------------
// destructuring e operador spread
const [primeiraLetra, segundaLetra, terceiraLetra, ...restoDoNome] = 'Lucas'
console.log(primeiraLetra, segundaLetra, terceiraLetra, restoDoNome)
//Esse operador funciona de forma interessante, onde nos da a possibilidade de estar desustrutrando estruturas de dados nativas da linguagem, 
//como string, lista e dicionário 
//(necessário confirmar se é posssivel estar configurando para uma estrutura de dados fora da linguagem).

//O operador rest, seria um operador que dá flexibilidade em situações que o input de variaveis é algo indefinido/generalizado.

//outro exemplo:
const [d , , f] = 'def'
console.log(d, f)
 // Nesse exemplo, como o intuito era omitir o terceiro elemento da string, na operação de destructuring eu apenas inseri uma variavel "invisivel" pode se dizer.


 //exemplo usando um objeto.
let {noe, value} = {nome:'asdadas', valor:15} // nesse caso de destructuring, o nome da variavel precisa ser igual ao nome da chave.

 console.log(noe, value)

let {nome: n, valor} = {nome:'adadas', valor:15} // nesse caso para usar um nome diferente da chave do objeto, é necessário usar o ":" em seguida da declaração da variavel.
console.log(n, valor)