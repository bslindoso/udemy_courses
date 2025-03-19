function mostraHora() {
  let data = new Date();
  return data.toLocaleTimeString('pt-BR', {
    hour12: false
  })
}

// executa a função a cada 1 segundo (1000 milisegundos) 
const timer = setInterval(() => {
  console.log(mostraHora());
}, 1000);

// executa a função após 5 segundos (5000 milisegundos)
setTimeout(() => {
  clearInterval(timer);
}, 5000);