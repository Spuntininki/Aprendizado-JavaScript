class Pessoa{
    constructor(nome){
        this.nome = nome
    }
    falar() {
        console.log(`Olá meu nome é ${this.nome}`)
    }
}


const p1 = new Pessoa('Lucas')

p1.falar()


function CriarPessoa(nome){
    return{
        nome,
        falar: function () {
            console.log(`Olá meu nome é  ${nome}`)
        }
    }
}

const p2 = CriarPessoa('Gabriel')

p2.falar()
console.log(p2.nome)