const pai = {nome:'Laurindo', corDoCabelo:'preto'}

const filho = Object.create(pai, {
    nome:{value:'Lucas', writable:true, enumerable:true}
})

console.log(filho)
console.log(Object.keys(filho))

for (key in filho){
    console.log(key)
}