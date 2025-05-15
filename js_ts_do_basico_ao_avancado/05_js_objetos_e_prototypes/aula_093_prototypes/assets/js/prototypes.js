//! Função construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  // this.nomeCompleto = () => `${this.nome} ${this.sobrenome}`;
}

//! prototype
Pessoa.prototype.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};

//! Instância -> objeto (instância da classe)
const pessoa1 = new Pessoa('Luiz', 'Otávio');
const pessoa2 = new Pessoa('Maria', 'Joana');

console.dir(pessoa1);
console.dir(pessoa2);
console.log(pessoa1.__proto__)