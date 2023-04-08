class Avo{
    constructor(sobrenome='Silva'){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo{
    constructor(sobrenome, profissao='Ferreiro'){
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai{
    constructor(){
        super()
    }
}

const filho = new Filho()

console.log(filho.sobrenome, filho.profissao)