//exemplo de problematica de VAR com ARRAY

const arr = []

for (var i = 0; i < 10; i++){
    arr.push(
        function(){
            console.log(i)
        }
    )
}
arr[1]()
arr[5]()
console.log(arr[1])