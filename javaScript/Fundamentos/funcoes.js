console.log(typeof Object)

class Produto { }
console.log(typeof Produto)

// função
function soma(primeiro, segundo) {

    return primeiro + segundo
}

console.log(soma(20, 15))

//Armazenando uma funcao
const imprimeSoma = function (a, b) {
    console.log(a + b)
}
imprimeSoma(3, 5)

//Armazenando uma funcao arrow
const somaA = (c, d) => {
    return c + d
}
console.log(somaA(3, 8))

// retorno implicito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))