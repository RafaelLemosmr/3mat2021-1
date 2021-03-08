function buscaSeq(vetor, valor_busca, fnComp){
    for(let i = 0; i < vetor.length; i++){
        //fnComp é a função externa comparaNome que está sendo passada
        if(fnComp(vetor[i], valor_busca)) return i // "===" além de comparar o valor, compara o tipo também
    }
    return -1
}

/*
//retorna true caso a propriedade "first_name" seja igual ao valor de busca passado
function comparaNome(objNome, valor_busca){
    return objName.first_name == valor_busca
}
*/
const comparaNome = (objNome, valor_busca) => objNome.first_name === valor_busca

import { objNomes } from './includes/vetor-obj-nomes.mjs'

console.time('Buscando ZILMAR')
console.log(buscaSeq(objNomes, 'ZILMAR', comparaNome))
console.timeEnd('Buscando ZILMAR')


function buscaSeq(vetor, fnComp){
    for(let i = 0; i < vetor.length; i++){
        //fnComp é a função externa comparaNome que está sendo passada
        if(fnComp(vetor[i], valor_busca)) return i // "===" além de comparar o valor, compara o tipo também
    }
    return -1
}

//usando função anônima
console.time('Buscando ABRAAO')
console.log(buscaSeq(objNomes, obj => obj.fist_name === 'ABRAAO'))
console.timeEnd('Buscando ABRAAO')


console.time('Buscando ZILMAR')
console.log(buscaSeq(objNomes, obj => obj.fist_name === 'ZILMAR'))
console.timeEnd('Buscando ZILMAR')


