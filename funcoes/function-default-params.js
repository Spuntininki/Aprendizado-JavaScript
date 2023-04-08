function soma(a, b, c){
    a = isNaN(a) ? 1:a 
    b = b != undefined ? b:1
    return a + b + c
}

console.log(soma(5, 0, 3))