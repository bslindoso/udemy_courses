/*
todo ==========================================
todo => VALIDADOR DE CPF
todo ==========================================
todo => Exemplo: 705.484.450-52 
todo => Atividade: 070.987.720-03


? ==========================================
? Primeiro Dígito Verificador
? ==========================================

Pega os 9 primeiros caracteres do CPF (Sem o dígito verificador)
e multiplica pela sequência decremental começando por 10 (10, 9, 8, 7, 6, 5, 4, 3, 2).

Em seguida, some a cadeia de resultados

  7x    0x    5x    4x    8x    4x    4x    5x    0x
  10    9     8     7     6     5     4     3     2
x ___________________________________________________________
+  70   0    40    28    48    20    16    15    0  = 237

! TOTAL: 237

Agora, para obter o primeiro digito verificador, obtenha o resto da divisão entre
o TOTAL por 11. Em seguida, subtraia 11 - O VALOR OBTIDO. 
! ATENÇÃO => Se o digito formado for MAIOR QUE 9, ele vira 0 (ZERO)
* Ex: 11 - (237 % 11) = 5 (menor que 9, mantém o valor)

? ==========================================
? Segundo Dígito Verificador
? ==========================================

Agora vamos adicionar o primeiro digito verificador na mesma conta anterior,
e multiplicando pela sequência decremental começando agora por 11 (11, 10, 9, 8, 7, 6, 5, 4, 3, 2).

Em seguida, some a cadeia de resultados

  7x    0x    5x    4x    8x    4x    4x    5x    0x    5x
  11    10    9     8     7     6     5     4     3     2
x ____________________________________________________________________
+  77   0    45    32    56    24    20    20     0    10    = 284

! TOTAL: 284

Para obter o segundo digito verificador, repita o mesmo cálculo do prmeiro. 
! ATENÇÃO => Se o digito formado for MAIOR QUE 9, ele vira 0 (ZERO)
* Ex: 11 - (284 % 11) = 2 (menor que 9, mantém o valor)

? ==========================================
? Sequências
? ==========================================

Além das validações acima, um CPF sequencial (como 111.111.111-11) mesmo validando pelo cálculo,
não deve ser validado como true. 
*/

// todo ==========================================
// todo => SOLUÇÃO DO LINDOSO
// todo ==========================================

// * Declaração da function Cpf e criando seu prototype
function Cpf(number) {

  this.number = (this.is11Digit(this.removeExtraChars(number))) ? this.removeExtraChars(number) : null;

  Object.defineProperty(this, 'formattedNumber', {
    enumerable: false,
    get: function () {
      if (!this.number) return null;
      const x1 = String(this.number).slice(0, 3) + '.';
      const x2 = String(this.number).slice(3, 6) + '.';
      const x3 = String(this.number).slice(6, 9) + '-';
      const digit = String(this.number).slice(-2);
      return x1 + x2 + x3 + digit;
    }
  })
}

Cpf.prototype.removeExtraChars = function (number) {
  return number.replace(/\D+/g, '');
}

Cpf.prototype.is11Digit = function (number) {
  const isValidNumber = !Number.isNaN(Number(number));
  if (!isValidNumber) return false;
  return (number.length === 11);
}

Cpf.prototype.isSequential = function () {
  return this.number[0].repeat(this.number.length) === this.number;
}

Cpf.prototype.validate = function () {

  if (this.isSequential()) return false;

  const partialNumber = String(this.number).substring(0, 9);
  const digit1 = this.generateDigit(partialNumber);
  const digit2 = this.generateDigit(partialNumber + digit1);

  return (partialNumber + digit1 + digit2) === this.number;
}

Cpf.prototype.generateDigit = function (partialNumber) {
  const cpfNumberList = String(partialNumber).split('');
  let startSequentialNumberDecrem = cpfNumberList.length + 1;

  const total = cpfNumberList.reduce((acc, cpfDigit) => {
    const multiply = cpfDigit * startSequentialNumberDecrem;
    startSequentialNumberDecrem--;
    return acc + multiply;
  }, 0);

  const digit = 11 - (total % 11);

  return String(digit > 9 ? 0 : digit);
}

// ? ==========================================
// ? Execução e testes
// ? ==========================================

function avaliaCpf(numero) {

  const cpf = new Cpf(numero);

  if (cpf.number == null) return { msg: 'Precisa de 11 digitos', numero: cpf.formattedNumber };

  if (!cpf.validate()) return { msg: 'CPF inválido', numero: cpf.formattedNumber };

  return { msg: 'CPF Válido', numero: cpf.formattedNumber };
}

console.log(avaliaCpf('70548445052'));
console.log(avaliaCpf('7054844505'));
console.log(avaliaCpf('70548445051'));
console.log(avaliaCpf('070.987.720-03'));
console.log(avaliaCpf('11111111111'));
console.log(avaliaCpf('77777777777'));
