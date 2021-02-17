// criação de objetos já com dados
let pessoa = {
    nome: 'Rafael Lemos',
    data_nasc: '10-01-2002',
    sexo: 'M',
    ocupacao: 'estudante',
    'cidade de origem': 'Franca-SP' //para colocar um atributo com espaços, é necessário coloca-lo entre aspas ''
}

console.log(pessoa.nome)
console.log(pessoa.ocupacao)

//acessando a propriedade com espaço
console.log(pessoa['cidade de origem'])

//usar os colchetes quando o atributo está em uma varíavel 
let prop = 'nome'

console.log(pessoa[prop])

prop = 'sexo'

console.log(pessoa[prop])

//visualizando o objeto
console.log(pessoa)

console.table(pessoa)


//criando objetos vazios
let veiculo = {}

//adicionando propriedas 
veiculo.marca = 'fiat'
veiculo.modelo = 'uno'
veiculo.ano = 2000
veiculo.combustivel = 'gasolina' //veiculo['combustível] = 'gasolina' para usar acentos e espaços
veiculo.cor = 'branco'

console.log(veiculo)
console.table(veiculo)


//listando propriedades de um objeto
for(let prop in pessoa){
    console.log(prop)
}

console.log('-------------------------------')

for(let x in veiculo){
    console.log(x)
}

console.log('-------------------------------')

//listando propriedades e valores do objeto
for(let atrib in veiculo){
    console.log(atrib + ' -> ' + veiculo[atrib])
}


//excluindo propriedades de um objeto

//antes da exclusão
console.table(veiculo)

//excluindo uma propriedade do objeto
delete veiculo.ano

//após a exclusão
console.table(veiculo)
