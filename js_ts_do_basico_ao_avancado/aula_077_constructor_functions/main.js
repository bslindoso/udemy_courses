// Função Construtora
function Pessoa(nome, sobrenome) {
  // privados
  const atributoPrivado = 1234;
  const metodoPrivado = () => {
    return 'sou privado.'
  }

  // públicos
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.metodo = () => {
    console.log(metodoPrivado())
    return (this.nome + ': sou um método')
  }
}

const p1 = new Pessoa('Luiz', 'Otávio')
console.log(p1)
console.log(p1.metodo())
// console.log(p1.metodoPrivado()) // GERA ERRO