//números
let a = 10, b = 15, c = 10

console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)

console.log('************************')

//strings
a = 'MARIA'
b = 'SEBASTIANA'
c = 'MARIA'

console.log(a > b) // a comparação com string é feita em relação a ordem alfabética 
console.log(a < b)
console.log(a == c)
console.log(a != c)

console.log('************************')

//vetores
a = [1, 2, 3, 4, 5]
b = [10, 20, 30, 40]
c = [1, 2, 3, 4, 5]

console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)

//Comparação de vetores não é consistente 

console.log('************************')

//objetos
a = {marca: 'Volkswagen', modelo: 'Fusca', ano: 1976}
b = {marca: 'Fiat', modelo: '147', ano: 1980}
c = {marca: 'Volkswagen', modelo: 'Fusca', ano: 1976}

console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)

//Comparação de objetos não é consistente 


//conclusão final: apenas números, strings e boolean são comparáveis

