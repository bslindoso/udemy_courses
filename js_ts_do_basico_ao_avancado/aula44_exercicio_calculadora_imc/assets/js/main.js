(function () {

  // Capturar evento de submit do formulário
  const form = document.querySelector('#formulario');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    // event.target é o elemento que disparou o evento, no caso o formulário
    const inputPeso = event.target.querySelector('#peso-input');
    const inputAltura = event.target.querySelector('#altura-input');

    // Define valores padrão, para facilitar meus testes quando inputar vazio
    // if (!inputPeso.value) inputPeso.value = "91";
    // if (!inputAltura.value) inputAltura.value = "1.66";

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
      setResultado('Peso inválido', false);
      return;
    }

    if (!altura) {
      setResultado('Altura inválida', false);
      return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    setResultado(`Seu IMC é ${imc} (${nivelImc}).`, true);
  });

  function setResultado(msg, isSuccess) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = (isSuccess) ? createParagraphTag(['paragrafo-resultado', 'success']) : createParagraphTag(['paragrafo-resultado', 'error']);
    p.innerHTML = msg;
    resultado.appendChild(p);
  }

  function createParagraphTag(classList) {
    const paragraph = document.createElement('p');
    if (classList) addClassOnElement(classList, paragraph);
    return paragraph;
  }

  function addClassOnElement(classList, element) {
    classList.forEach(e => {
      element.classList.add(e);
    });
  }

  function getImc(peso, altura) {
    return (peso / altura ** 2).toFixed();
  }

  /*
  Menos do que 18,5 => Abaixo do peso
  Entre 18,5 e 24,9 => Peso normal
  Entre 25 e 29,9 => Sobrepeso
  Entre 30 e 34,9 => Obesidade grau 1
  Entre 35 e 39,9 => Obesidade grau 2
  Mais do que 40 => Obesidade grau 3
  */

  function getNivelImc(imc) {
    const resultadosImc = document.querySelector('#resultados-imc').querySelectorAll('p');
    const nivelImc = [];

    // ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']
    resultadosImc.forEach((value, key) => nivelImc.push(resultadosImc.item(key).innerText));

    if (imc >= 39.9) return nivelImc.at(-1);
    if (imc >= 34.9) return nivelImc.at(-2);
    if (imc >= 29.9) return nivelImc.at(-3);
    if (imc >= 24.9) return nivelImc.at(-4);
    if (imc >= 18.5) return nivelImc.at(-5);
    if (imc < 18.5) return nivelImc.at(-6);
  }

})();