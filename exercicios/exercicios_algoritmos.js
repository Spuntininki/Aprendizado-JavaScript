//1)
function ExibeAritimetica(a, b){
	console.log(`${a} + ${b} = ${a + b}`)
	console.log(`${a} - ${b} = ${a - b}`)
	console.log(`${a} X ${b} = ${a * b}`)
	console.log(`${a} / ${b} = ${a / b}`)
}

//ExibeAritimetica(5, 4)

//2)
function RetornaTipoTriagulo(ladoA, ladoB, ladoC){
	if(ladoA == ladoB && ladoA == ladoC){
		return 'Equilátero'
	}else if(ladoA == ladoB || ladoA == ladoC){
		return 'Isósceles'
	}else{
		return 'Escaleno'
	}
}

//console.log(RetornaTipoTriagulo(5, 5 , 5))
//console.log(RetornaTipoTriagulo(4, 3, 4))
//console.log(RetornaTipoTriagulo(3, 4, 5))

//3)
function ModuloDiv(dividendo, divisor){
	return dividendo % divisor
}

//console.log(ModuloDiv(10, 3))

function retornaFloatComDuasCasasDecimais(number){
	return number.toFixed(2)
}

console.log(retornaFloatComDuasCasasDecimais(3.4000000 + 0.03))


