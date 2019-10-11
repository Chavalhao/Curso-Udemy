const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj))

// console.log(JSON.parse("{ a: 1, b: 2, c: 3}"))  não é válido esse tipo de abertura
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3}")) não se pode abrir assim porque todo atributo no formato JSON o nome do atributo tem q ser limitado a aspas duplas
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3}'))
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": { "a": "Pedro", "b": 123}, "e": []}'))