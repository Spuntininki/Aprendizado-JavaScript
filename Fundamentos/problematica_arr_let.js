//exemplo de problematica(resolução) LET com ARRAY
const arr = []


for (let i = 0; i < 10; i++){
    arr.push(
        function(){
            console.log(i)
        }
    )
}
arr[1]()
arr[5]()
console.log(arr[1])