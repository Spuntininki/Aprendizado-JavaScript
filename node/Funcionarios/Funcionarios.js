const axios = require('axios')
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

axios.get(url).then(requisicao => {
        const  funcionarios = requisicao.data
        console.log(funcionarios
                .filter(funcionario => { 
                    return funcionario.pais == 'China' && funcionario.genero == 'F'})
                .reduce((menorSalario, funcionario) => {
                    
                    if(funcionario.salario < menorSalario.salario){
                        return funcionario
                    }else{
                        return menorSalario
                    }
                })
            )
        
    }
)

