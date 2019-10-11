
function criarProduto(nome, preco){

    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('iPad', 1199.49))

function criarProduto2(nome, preco){

    return {
        nome: nome,
        preco: preco
    }
}

console.log(criarProduto2('Carrinho', 125))