const data = new Date();
console.log(diaDaSemana(data));

function diaDaSemana(data) {
  return ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'][data.getDay()];
}
