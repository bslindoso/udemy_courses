/// Exemplo 1
const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
  endereco: {
    rua: 'Av Brasil',
    numero: 320
  }
}

const { nome: nomePessoa = 'Sem nome', sobrenome, idade, endereco: { rua, numero } } = pessoa

console.log(nomePessoa, sobrenome, idade, rua, numero)

/// Exemplo 2
const { nome, ...resto } = pessoa
console.log(nome);
console.log(resto);