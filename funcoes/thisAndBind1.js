const pessoa = {
    'saudação': 'Bom dia!',
    falar(){
        console.log(this.saudação)
    }
}

pessoa.falar()

const funçãoFalar = pessoa.falar

funçãoFalar() //resulta em undefined devido ao conflito entre funcional e OO.

const funçãoFalar2 = pessoa.falar.bind(pessoa)
funçãoFalar2()

