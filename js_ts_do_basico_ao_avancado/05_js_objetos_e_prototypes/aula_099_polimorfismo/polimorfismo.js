// * =====================================
// * =>> Superclasse Conta (abstrata)
// * =====================================
function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

// Métodos da Conta
Conta.prototype.sacar = function (valor) {
  if (this.saldo < valor) {
    console.log('Saldo insuficiente:', this.saldoBRL());
    return;
  }
  this.saldo -= valor;
  this.verSaldo();
}
Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  this.verSaldo();
}
Conta.prototype.verSaldo = function () {
  console.log(
    `Ag/c: ${this.agencia}/${this.conta} | ` +
    `Saldo: ${this.saldoBRL()}`
  );
}
Conta.prototype.saldoBRL = function () {
  return this.saldo.toLocaleString(`pt-BR`, { style: "currency", currency: "BRL" });
}

// * =====================================
// * =>> Classes herdadas de Conta
// * =====================================
// ? Conta Corrente
function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

// Linkando a herança
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

// Métodos da Conta Corrente
ContaCorrente.prototype.sacar = function (valor) {
  if (valor > (this.saldo + this.limite)) {
    console.log('Saldo insuficiente:', this.saldoBRL());
    return;
  }
  this.saldo -= valor;
  this.verSaldo();
}

// ? Conta Poupança
function ContaPoupanca(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}

// Linkando a herança
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

// ! =========================================
// !    => Execução de testes
// ! =========================================
const cc = new ContaCorrente('999', '00999999-99', 0, 500);
cc.depositar(100);
cc.sacar(300);
cc.sacar(300);
cc.sacar(1);

console.log();

const cp = new ContaPoupanca('111', '0011111-11', 0);
cp.depositar(100);
cp.sacar(300);
cp.sacar(300);
cp.sacar(1);