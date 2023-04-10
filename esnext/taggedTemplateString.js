//Segue uma funcionalidade interessante que da alguns insights de como é o funcionamento de uma 'template string' em JS

const tag = (parteDaString, ...variaveisInterpoladas) => {
    console.log(parteDaString)
    console.log(variaveisInterpoladas)
    return 'Retorno completamente diferente/fora de contexto' //apenas para mostrar que é possivel
}

const nome = 'Lucas'
const idade = '23'

console.log(tag `Olá meu nome é ${nome}, tenho ${idade} anos!`)
//O retorno dessa chamada é:
//[ 'Olá meu nome é ', ', tenho ', ' anos!' ]
//[ 'Lucas', '23' ]
//Retorno completamente diferente/fora de contexto
//Pode se notar que o primeiro console.log está mostrando a string pura (sem as variaveis interpoladas) e o segundo console.log,
//da função criada está mostrando as variaveis em si.
//A utilidade dessa funcionalidade, a primeiro momento parece limitada e especifica demais para ser utilizada, mas vejo que uma
//possivel aplicação seria, usar um tratamento nas variaveis por exemplo e retornar a string concatenada com as variaveis tratadas.

//Com certeza existem formas muito mais simples de fazer isso e sem perder a legibilidade do codigo.
