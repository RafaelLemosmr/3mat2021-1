//essa função não é necessária pois a como usar recursos nativos do JS como x*x ou Math.pow(x, 2)
//caracteristicas dessa função: apenas um parametro, seu corpo tem apenas uma linha retornando o valor

function quadrado(x){
    return x * x
}

console.log(quadrado(9))

//a função acima é perfeita para ser convertida em arrow function que é um modo "abreviado"
//os parenteses do parametro são obtidos, e as chaves e palavra function tbm
// const função = parametro => retorno
const quadrado2 = x => x * x

console.log(quadrado2(9))

//funcão com mais de 1 parametro
function potencia(b, e){ //b = base, e = expoente
    return b ** e
}

console.log(potencia(2, 10))

//arrow function equivalente 
const potencia2 = (b, e) => b ** e

console.log(potencia2(2, 10))

console.log('*********************************************************')

//função sem parametros que retorna um número aleatório entre 1 e 60
function megaSena(){
    //return Math.random() //retorna um número aleatório entre 0(inclusive) e 1(exclusive)
    // Math.random() * 60 para obtivermos número entre 1 e 59
    //+ 1 para chegarmos aos parametros de 1 + 60
    return Math.ceil(Math.random() * 60 + 1)
}

console.log(megaSena(), megaSena(), megaSena(), megaSena(), megaSena(), megaSena())

//transformando a função megaSena() em uma arrow function
//os () vazios (obrigaório) marcam o lugar dos parametros
const megaSena2 = () => Math.ceil(Math.random() * 60 + 1)

console.log(megaSena2(), megaSena2(), megaSena2(), megaSena2(), megaSena2(), megaSena2())


console.log('*********************************************************')

//função com mais de 1 linha e for dentro 
function somaVet(vet){
    let soma = 0
    for(let n of vet) soma += n
    return soma
}

console.log(somaVet([1, 2, 3, 4, 5, 6, 7, 8, 9]))

//transformando em arrow function
const somaVet2 = vet => {
   let soma = 0
    for(let n of vet) soma += n
    return soma 
}

console.log(somaVet2([1, 2, 3, 4, 5, 6, 7, 8, 9]))

//não há nenhuma vantagem usar Arrow function nesse caso