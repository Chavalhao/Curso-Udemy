// hoisting é um içamento de variaveis
// toda var é declarada antes de executar qualquer coisa
// mas é só declarada, a atribuição só ocorre na linha que foi atribuido
// hoisting com let não ocorre
console.log('a = ', a)
var a = 2
console.log('a = ', a)

 // com funcao

function teste() {
    console.log('a = ', a)
    var a = 2
    console.log('a = ', a)

}
teste()

