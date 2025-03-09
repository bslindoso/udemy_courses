/// For In com Arrays
const frutas = ['Pera', 'Maçã', 'Uva', 'Salada Mista']
console.log('For In com Arrays');

for (const index in frutas) {
  console.log(`Índice ${index} -> ${frutas[index]}`);
}

/// For In com Objetos
const pessoa = {
  nome: 'Bruno',
  sobrenome: 'Lindoso',
  idade: 38,
  endereco: {
    rua: 'Av. Brasil',
    numero: '500'
  }
}
console.log('\nFor In com Objetos');

for (const key in pessoa) {
  console.log(`Chave ${key} -> ${pessoa[key]}`)
}