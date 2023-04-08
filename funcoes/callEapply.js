function verbalizaSeusDados( idade,  sexo){
    texto =`Olá meu nome é ${this.nome}, tenho ${idade} anos, e sou do genêro ${sexo}`
    
    console.log(texto)
}

const p1 = {
    nome: 'Lucas',
    fala: verbalizaSeusDados
    
}

global.nome = 'node'

p1.fala( 21, 'masculino')
verbalizaSeusDados.apply(global, [ 21, 'dsfdfs'])
