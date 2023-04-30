function worksOrNot(value, errorChance){
    return new Promise((resolve, reject) => {
        if(Math.random() < errorChance){
            reject('Ocorreu um erro...')
        }else{
            resolve(value)
        }
    })

}

worksOrNot('Funcionou', 0.5)
        .then(console.log)
        .catch(err => console.log(err)) // Por convesão é colocado o "catch" no final, depois dos "then's", tendo em vista que caso usemos um then depois do catch será retornando undefined.
        .then(() => console.log('Acabou!'))