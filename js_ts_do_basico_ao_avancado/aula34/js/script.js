(() => {
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');

  const pessoas = [];

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Evento cancelado')

    saveFormData();
  })

  function saveFormData() {
    const nome = form.querySelector('.nome')
    const sobrenome = form.querySelector('.sobrenome')
    const peso = form.querySelector('.peso')
    const altura = form.querySelector('.altura')

    createPessoa(nome.value, sobrenome.value, peso.value, altura.value)
    resultado.innerHTML += `<p>Nome: ${nome.value} ${sobrenome.value}, Peso: ${peso.value} kg, Altura: ${altura.value} m</p>`
    console.log(pessoas)
  }

  function createPessoa(nome, sobrenome, peso, altura) {
    pessoas.push({ nome, sobrenome, peso, altura })
  }

})();