const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto legal'] = 0.40 // evitar atributos com espaco

console.log(prod1)

const prod2 = {
    nome: 'Camisa polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }

}

console.log(prod2)
