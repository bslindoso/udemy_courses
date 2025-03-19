/// Geradora
console.log(`Funções Geradoras\n`)
function* geradora1() {
  // Código ...
  yield 'Valor 1';
  // Código ...
  yield 'Valor 2';
  // Código ...
  yield 'Valor 3';
}

const g1 = geradora1();

console.log(g1.next())
console.log(g1.next())
console.log(g1.next())
console.log(g1.next(), '\n')

/////////////////
/// Iterando uma função geradora

const g2 = geradora1();
for (let valor of g2) {
  console.log(valor);
}

console.log('')

/////////////////
/// Gerador infinito

function* contador() {
  let i = 0;

  while (true) {
    yield i;
    i++;
  }
}

const gContador = contador();
console.log(gContador.next().value)
console.log(gContador.next().value)
console.log(gContador.next().value)
console.log(gContador.next().value)
console.log(gContador.next().value)
console.log(gContador.next().value)
console.log(gContador.next().value)
console.log(gContador.next().value)

console.log('')

/////////////////
/// 
function* geradora2() {
  yield 0;
  yield 1;
  yield 2;
}

function* geradora3() {
  yield* geradora2();
  yield 3;
  yield 4;
  yield 5;
}

const g3 = geradora3();
for (let valor of g3) {
  console.log(valor);
}

console.log('')

/////////////////
/// 
function* geradora5() {
  yield function () {
    console.log('Vim do y1');
  }
  // Código...
  yield function () {
    console.log('Vim do y2');
  }
}

const g4 = geradora5();
const func1 = g4.next().value;
const func2 = g4.next().value;
func1();
func2();