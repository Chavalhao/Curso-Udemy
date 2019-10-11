//esses tipos são funcoes, só quando se estancia ele vira objeto

console.log(typeof Object) // funcao
console.log(typeof new Object) // objeto

const Cliente = function(){}
console.log(typeof Cliente) // funcao
console.log(typeof new Cliente) // objeto

class Produto {} //ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto())