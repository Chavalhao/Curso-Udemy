console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Biu', 'Carlita', 'Ane']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // undefined

aprovados[3] = 'Paulo'
console.log(aprovados[3])
aprovados.push('Abigaiu')
console.log(aprovados.length, aprovados[4])

aprovados[9] = 'Raphael'
console.log(aprovados, aprovados.length)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 0, 'Elemento1', 'Elemento2', 'Elemento3') // serve pra adicionar ou remover em um determinado indice
console.log(aprovados)