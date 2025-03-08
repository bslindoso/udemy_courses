(function () {

  const h1 = document.querySelector('.container  h1');
  const dataAtual = new Date();

  const dia = dataAtual.getDate();
  const mes = mesNome(dataAtual.getMonth());
  const ano = dataAtual.getFullYear();
  const diaDaSemana = diaDaSemanaNome(dataAtual.getDay());
  const hora = dataAtual.getHours();
  const minutos = dataAtual.getMinutes();

  h1.innerText = `${diaDaSemana}, ${dia} de ${mes} de ${ano} ${hora}:${minutos}`

  // Estas funções substituem o switch case
  function diaDaSemanaNome(diaSemana) {
    return ['domingo', 'segunda-deira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'][diaSemana];
  }

  function mesNome(mes) {
    return ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'][mes];
  }

})();