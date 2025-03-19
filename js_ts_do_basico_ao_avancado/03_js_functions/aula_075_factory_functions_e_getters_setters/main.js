// Uma factory function é uma função que cria e retorna um objeto.
// Ela permite encapsular a criação do objeto e a lógica de inicialização,
// podendo ser utilizada para gerar múltiplos objetos com uma mesma estrutura,
// sem a necessidade de usar classes ou construtores.

function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    // Propriedades do objeto retornado
    nome,
    sobrenome,
    altura,
    peso,

    // Método que utiliza as propriedades para retornar uma string informativa.
    fala(assunto = 'falando sobre NADA') {
      return `${nome} está ${assunto}.`;
    },

    // Getter para calcular e retornar o Índice de Massa Corporal (IMC)
    // Um getter permite acessar um valor computado como se fosse uma propriedade.
    // Aqui, ao acessar p1.imc, automaticamente é executada a função que calcula 
    // o IMC com base no peso e altura. 
    get imc() {
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
    },
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    // Setter para definir o nome e sobrenome do objeto.
    // Um setter permite definir um valor para uma propriedade.
    // Aqui, ao atribuir um valor a p1.nomeCompleto, o setter é acionado,
    // dividindo o nome completo em nome e sobrenome e atribuindo-os às propriedades correspondentes.
    set nomeCompleto(nomeCompleto) {
      const [nome, ...sobrenome] = nomeCompleto.split(' ');
      this.nome = nome;
      this.sobrenome = sobrenome.join(' ');
    }

  }
}

// Utilização da factory function para criar um objeto Pessoa.
// Cada chamada a criaPessoa retorna um novo objeto com as propriedades e métodos definidos.
const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);

// Exibe as propriedades e métodos do objeto gerado.
console.log(`${p1.nomeCompleto} tem ${p1.altura}m e pesa ${p1.peso}kg.`);
console.log(p1.fala('falando sobre JS'));

// Quando usamos o getter 'imc', ele executa a função definida e retorna o IMC calculado.
console.log(p1.imc);

p1.nomeCompleto = 'Maria Oliveira Silva';
console.log(p1.nome, p1.sobrenome);
