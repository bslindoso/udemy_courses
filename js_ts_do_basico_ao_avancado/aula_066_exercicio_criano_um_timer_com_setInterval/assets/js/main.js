function main() {

  const relogio = document.querySelector('.relogio');

  let segundos = 0;
  let timer;

  document.addEventListener('click', (event) => {
    const element = event.target;

    if (element.classList.contains('iniciar')) {
      relogio.classList.remove('pausado');
      clearInterval(timer);
      iniciaRelogio();
    }

    if (element.classList.contains('pausar')) {
      clearInterval(timer);
      relogio.classList.add('pausado');
    }

    if (element.classList.contains('zerar')) {
      clearInterval(timer);
      relogio.classList.remove('pausado');
      relogio.innerHTML = '00:00:00';
      segundos = 0;
    }
  });

  function criaTimerDosSegundos(seconds) {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
  }

  function iniciaRelogio() {
    timer = setInterval(() => {
      segundos++;
      relogio.innerHTML = criaTimerDosSegundos(segundos);
    }, 1000);
  }

  // SOLUÇÃO ANTIGA

  // const iniciar = document.querySelector('.iniciar');
  // const pausar = document.querySelector('.pausar');
  // const zerar = document.querySelector('.zerar');

  // iniciar.addEventListener('click', (event) => {
  //   relogio.classList.remove('pausado');
  //   clearInterval(timer);
  //   iniciaRelogio();
  // });

  // pausar.addEventListener('click', (event) => {
  //   clearInterval(timer);
  //   relogio.classList.add('pausado');
  // });

  // zerar.addEventListener('click', (event) => {
  //   clearInterval(timer);
  //   relogio.innerHTML = '00:00:00';
  //   segundos = 0;
  // });









}

main();