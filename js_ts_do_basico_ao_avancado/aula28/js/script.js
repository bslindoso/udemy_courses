const number = Number(prompt('Digite um número:'));

let titleNumber = document.getElementById('numero-titulo');
let text = document.getElementById('texto')

titleNumber.innerText = number

text.innerHTML += `Raiz quadrada: ${Math.sqrt(number)}<br />`
text.innerHTML += `${number} é inteiro: ${Number.isInteger(number)}<br />`
text.innerHTML += `É NaN: ${Number.isNaN(number)}<br />`
text.innerHTML += `Arredondando para baixo: ${Math.floor(number)}<br />`
text.innerHTML += `Arredondando para cima: ${Math.ceil(number)}<br />`
text.innerHTML += `Com duas casas decimais: ${number.toFixed(2)}<br />`
