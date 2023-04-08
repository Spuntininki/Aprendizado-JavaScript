console.log(this === exports)
console.log(this === module.exports)


console.log(this === global)

const teste = function(){
    console.log(this === global)
    console.log(this === exports)

}
teste()


const testeComArrowFunc = () =>{
    console.log(this === global)
    console.log(this === exports)
}

testeComArrowFunc()