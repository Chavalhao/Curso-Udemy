Array.prototype.filter2 = function(callback) {
    newArray = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plastico', preco: 4.99, fragil: false }
]

console.log(produtos.filter2(function(p) {
    //return p.preco > 2400
    //return false // para cada de elemento que recebi não vai estar presente no meu array final
    //return true // todos estaram presente
    return p.preco > 500 && p.fragil == true // critérios
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil))