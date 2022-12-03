//função anonima em variavel/constante

const num = function (a, b) {
        console.log(a + b, " Porreta!!")


}

num(1, 2)


// arrow function
const sum = (a, b) => {
    console.log(a * b)
}


sum(2, 3)


// arrow function returno implicito
const test_num = a => a**2

console.log(test_num(25))



