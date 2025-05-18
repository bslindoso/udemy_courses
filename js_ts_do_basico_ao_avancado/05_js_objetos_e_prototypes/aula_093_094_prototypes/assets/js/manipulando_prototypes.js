// ! ===========================================================
// !    => PROTOTYPE : Explicação
// ! ===========================================================
(() => {
  // aqui, o JS automaticamente cria uma instância com o construtor do Object como se utilizasse o new Object
  const objA = {
    chaveA: "A"
    // e por debaixo dos panos, cria o __proto__ do Object
    // __proto__: Object.prototype 
  }

  // Agora, neste ponto temos acesso ao Object.prototype
  console.log("objA", objA);
  // console.log(objA.__proto__);
  console.log(Object.getPrototypeOf(objA));


  const objB = {
    chaveB: "B"
  }

  // Aqui definimos o objeto B como "filho" do objeto A
  Object.setPrototypeOf(objB, objA);
  console.log("objB", objB);
  console.log(objB.chaveA);
  console.log(Object.getPrototypeOf(objB));

  const objC = new Object();
  objC.chaveC = 'C';

  Object.setPrototypeOf(objC, objB);
  console.log("objC", objC);
  console.log(objC.chaveA);
  console.log(objC.chaveB);
  console.log(Object.getPrototypeOf(objC));

});

// ! ===========================================================
// !    => Usando prototype para métodos
// ! ===========================================================
function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - (this.preco * (percentual / 100));
}

Produto.prototype.aumento = function (percentual) {
  this.preco = this.preco + (this.preco * (percentual / 100));
}

// ? Teste
const coca = new Produto('Coca-Cola', 9.8);
console.log(coca);
coca.desconto(10);
console.log(coca);