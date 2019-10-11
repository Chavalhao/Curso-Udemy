let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return implicito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um param
console.log(ola())


//maior = a => a < 10 ? 'menor que 10' : 10
//console.log(maior(6))

olaMundo = _ => 'Olá mundo!!'
console.log(olaMundo())

const maior = (a, b) => { return a < b ? b : a}

console.log(maior(10 , 9))