// usando notação de chaves
const pessoa = {
  nome: "Luiz",
  sobrenome: "Otávio",
  "data de nascimento": new Date(1980, 3, 12).toLocaleDateString()
}
console.log(pessoa, pessoa.nome, pessoa.sobrenome, pessoa["data de nascimento"]);

// usando contrutor
const pessoa1 = new Object();
pessoa1.nome = 'Maria';
pessoa1.sobrenome = 'Bairro';
pessoa1["data de nascimento"] = new Date(1980, 3, 12).toLocaleDateString();
console.log(pessoa1, pessoa1.nome, pessoa1.sobrenome, pessoa1["data de nascimento"]);

// deletando uma propriedade
delete pessoa1["data de nascimento"];
console.log(pessoa1, pessoa1.nome, pessoa1.sobrenome, pessoa1["data de nascimento"]);

// criando métodos
pessoa1.falarNome = function () {
  console.log(`Meu nome é ${this.nome}`)
};
pessoa1.falarNome();