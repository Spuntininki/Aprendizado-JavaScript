const Animal = {
    vivo: true,
    
}

const Mamifero = {
    __proto__:Animal,
    MamaPeito: true,
    colocaOvo: false   
}

const Cachorro = {
    __proto__: Mamifero,
    fofo: true,
    peludin: true,

}

console.log(Cachorro.vivo)

const Bruce = Object.create(Cachorro)


console.log(Bruce.fofo)