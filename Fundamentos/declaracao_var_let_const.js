var a = 1
let b = 2

/*
    uma diferença entre var e let é que "VAR"  permite "redeclarar", jpa "LET" não.
    é uma boa pratica optar por LET.

*/

const c = 30

console.log(a + b + c)



/*
String + number = concatenação
*/
a = '1'
console.log( a + c)



/*
Operações com ponto flutante possui imprecisão;
*/
console.log((0.1 + 0.7).toFixed(1))
