const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c} // não é mais nescessario esse tipo de duplicidade
// só é nescessario caso queira deixar um valor no parametro
const obj2 = {a, b, c}
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
    funcao1: function(){
        // maneira usada antes do ES2015

    },
    funcao2(){
        // funcao nova de escrever
    }
}
console.log(obj5)