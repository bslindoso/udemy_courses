// MÉTODO 1 - primeiro método de resolver o problema
function metodo1() {

  const h1 = document.querySelector('.container  h1');
  h1.innerText = criaDataAtualFormatada();

  function criaDataAtualFormatada() {
    const dataAtual = new Date();

    const dia = dataAtual.getDate();
    const mes = mesNome(dataAtual.getMonth());
    const ano = dataAtual.getFullYear();
    const diaDaSemana = diaDaSemanaNome(dataAtual.getDay());
    const hora = ajustaZeroAEsquerda(dataAtual.getHours());
    const minutos = ajustaZeroAEsquerda(dataAtual.getMinutes());

    return `${diaDaSemana}, ${dia} de ${mes} de ${ano} ${hora}:${minutos}`
  }

  function ajustaZeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
  }

  // Estas funções substituem o switch case
  function diaDaSemanaNome(diaSemana) {
    return ['domingo', 'segunda-deira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'][diaSemana];
  }

  function mesNome(mes) {
    return ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'][mes];
  }
}

// metodo1();

// MÉTODO 2 - segundo método de resolver o problema
function metodo2() {
  const h1 = document.querySelector('.container  h1');
  const data = new Date();

  h1.innerText = data.toLocaleString('pt-BR', {
    dateStyle: 'full',
    timeStyle: 'short'
  });
}

metodo2();