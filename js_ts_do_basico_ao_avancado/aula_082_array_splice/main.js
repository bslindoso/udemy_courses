// arrayQualquer.splice(indiceAtual, qtdElementosADeletar, elementoAAdicionar1, elementoAAdicionar2, elementoAAdicionar3)

//// REMOVENDO ELEMENTOS
console.log('REMOVENDO ELEMENTOS')

// removendo como pop() com indice positivo
const arrayQualquer1 = ['a', 'b', 'c', 'd', 'e'];
const elementoRemovido1 = arrayQualquer1.splice(4, 1);
console.log(arrayQualquer1, elementoRemovido1);

// removendo como pop() com indice negativo
const arrayQualquer2 = ['a', 'b', 'c', 'd', 'e'];
const elementoRemovido2 = arrayQualquer2.splice(-1, 1);
console.log(arrayQualquer2, elementoRemovido2);

// removendo mais de um elemento
const arrayQualquer3 = ['a', 'b', 'c', 'd', 'e'];
const elementoRemovido3 = arrayQualquer3.splice(3, 2);
console.log(arrayQualquer3, elementoRemovido3);

// removendo elementos até o final usando o Number.MAX_VALUE
const arrayQualquer4 = ['a', 'b', 'c', 'd', 'e'];
const elementoRemovido4 = arrayQualquer4.splice(2, Number.MAX_VALUE);
console.log(arrayQualquer4, elementoRemovido4);
//////////////////////////////////////////////////////////////////////

//// ADICIONANDO ELEMENTOS
console.log('\nADICIONANDO ELEMENTOS')

// adicionando como o push()
const arrayQualquer5 = ['a', 'b', 'c', 'd', 'e'];
arrayQualquer5.splice(arrayQualquer5.length, 0, 'f');
console.log(arrayQualquer5);

// adicionando mais de um elemento a partir de um indice
const arrayQualquer6 = ['a', 'b', 'c', 'd', 'e'];
arrayQualquer6.splice(3, 0, 'f', 'g', 'h');
console.log(arrayQualquer6);

//////////////////////////////////////////////////////////////////////
//// SUBSTITUINDO ELEMENTOS
console.log('\nSUBSTITUINDO ELEMENTOS')

// removendo elementos até o final usando o Number.MAX_VALUE
const arrayQualquer7 = ['a', 'b', 'c', 'd', 'e'];
const elementoRemovido7 = arrayQualquer7.splice(2, 2, 'x', 'y');
console.log(arrayQualquer7, elementoRemovido7);