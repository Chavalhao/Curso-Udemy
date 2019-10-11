for(var i = 0; i < 10; i++){
    console.log(i)
}
console.log(i)

console.log(' ')
console.log(' ')
console.log(' ')
/*
for(let j = 0; j < 10; j++){
    console.log(j)
}
console.log(j)
*/

// var não tem escopo de funcao
const funcs = []

for(var i = 0; i < 10; i++){
    funcs.push(function(){ 
        console.log(i)
    })
}
funcs[2]()
funcs[8]()

console.log(' ')
console.log(' ')
console.log(' ')
// let tem escopo de funcao
const funcsA = []

for(let i = 0; i < 10; i++){
    funcsA.push(function(){ 
        console.log(i)
    })
}
funcsA[2]()
funcsA[8]()