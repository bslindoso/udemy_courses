
# Funções Geradoras (Generator Functions) em JavaScript

As funções geradoras são um tipo especial de função no JavaScript que permite pausar sua execução e retomá-la posteriormente. Elas são definidas usando o símbolo `function*` e utilizam a palavra-chave `yield` para retornar valores.

## Características principais:

1. São declaradas com `function*`
2. Usam `yield` para retornar valores
3. Retornam um objeto iterador
4. Mantêm seu estado entre as chamadas

## Sintaxe básica:

```javascript
function* minhaFuncaoGeradora() {
    yield 1;
    yield 2;
    yield 3;
}

const gerador = minhaFuncaoGeradora();
console.log(gerador.next()); // { value: 1, done: false }
console.log(gerador.next()); // { value: 2, done: false }
console.log(gerador.next()); // { value: 3, done: false }
console.log(gerador.next()); // { value: undefined, done: true }
```

## Exemplo prático - Gerador de números pares:

```javascript
function* geradorNumerosPares(max) {
    let numero = 0;
    while (numero <= max) {
        yield numero;
        numero += 2;
    }
}

const pares = geradorNumerosPares(10);
for (const numero of pares) {
    console.log(numero); // 0, 2, 4, 6, 8, 10
}
```

## Exemplo com yield*:

```javascript
function* func1() {
    yield 1;
    yield 2;
}

function* func2() {
    yield* func1(); // delega para func1
    yield 3;
}

const gerador = func2();
for (const valor of gerador) {
    console.log(valor); // 1, 2, 3
}
```

## Uso com assincronismo:

```javascript
function* minhaFuncaoAssincrona() {
    const dados1 = yield fetch('https://api.exemplo.com/dados1');
    const dados2 = yield fetch('https://api.exemplo.com/dados2');
    return [dados1, dados2];
}
```

## Benefícios:

1. **Controle de fluxo**: Permite pausar e retomar a execução
2. **Memória eficiente**: Gera valores sob demanda
3. **Iteração simplificada**: Facilita a criação de iteradores
4. **Estado preservado**: Mantém variáveis locais entre chamadas

## Casos de uso comuns:

1. Geração de sequências infinitas
2. Processamento de grandes conjuntos de dados
3. Implementação de iteradores personalizados
4. Controle de fluxo assíncrono

## Exemplo de sequência infinita:

```javascript
function* fibonacci() {
    let prev = 0, curr = 1;
    while (true) {
        yield curr;
        [prev, curr] = [curr, prev + curr];
    }
}

const fib = fibonacci();
for (let i = 0; i < 10; i++) {
    console.log(fib.next().value);
}
```

## Considerações finais:

As funções geradoras são uma ferramenta poderosa para lidar com iterações e fluxos de dados de forma eficiente. Elas são especialmente úteis quando você precisa trabalhar com grandes conjuntos de dados ou quando precisa de um controle mais fino sobre o fluxo de execução do seu código.
