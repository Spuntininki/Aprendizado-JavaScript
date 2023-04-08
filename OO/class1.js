class Lancamento {
    constructor(descritivo, valor){
    this.descritivo = descritivo
    this.valor = valor
    }
}

class cicloFinanceiro {
    constructor(ano, mes){
        this.ano = ano,
        this.mes = mes,
        this.lancamentos = []
    }

    adicionaLancamento(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))

    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}


const salario = new Lancamento('Salário', 5000)
const contaDeLuz = new Lancamento('Conta de Luz', -500)
const Consolidado = new cicloFinanceiro(2023, 12)
Consolidado.adicionaLancamento(salario, contaDeLuz)
console.log(Consolidado.sumario())