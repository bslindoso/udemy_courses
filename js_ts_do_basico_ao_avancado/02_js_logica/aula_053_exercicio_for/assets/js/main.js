/// Minha solução
(() => {
  const elementos = [
    { tag: 'p', texto: 'Frase 1' },
    { tag: 'div', texto: 'Frase 2' },
    { tag: 'footer', texto: 'Frase 3' },
    { tag: 'section', texto: 'Frase 4' }
  ]

  const container = document.querySelector('.container');
  geraElementos(elementos);

  function geraElementos(elementos) {
    for (let i = 0; i < elementos.length; i++) {
      const { tag, texto } = elementos[i];
      container.appendChild(criaTag(tag, texto));
    }
  }

  function criaTag(tag, texto) {
    const tagElement = document.createElement(tag);
    tagElement.innerText = texto;
    return tagElement;
  }

})();