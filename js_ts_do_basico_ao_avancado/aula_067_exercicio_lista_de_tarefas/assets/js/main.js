function main() {

  const inputTarefa = document.querySelector('.input-tarefa');
  // const btnTarefa = document.querySelector('.btn-tarefa');
  const tarefas = document.querySelector('.tarefas');

  document.addEventListener('click', (e) => {
    const el = e.target;
    if (el.classList.contains('apagar')) {
      el.parentElement.remove();
      salvarTarefas();
    }
    if (el.classList.contains('btn-tarefa')) {
      if (!inputTarefa.value) return;
      criaTarefa(inputTarefa.value);
      limpaInput();
    }
  });

  // btnTarefa.addEventListener('click', () => {
  //   if (!inputTarefa.value) return;
  //   criaTarefa(inputTarefa.value);
  //   limpaInput();
  // });

  inputTarefa.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
      if (!inputTarefa.value) return;
      criaTarefa(inputTarefa.value);
      limpaInput();
    }
  });

  function criaTarefa(input) {
    const li = criaLi();
    li.innerText = input;
    tarefas.appendChild(li);
    criaBotaoApagar(li);
    salvarTarefas();
  }

  function criaLi() {
    return document.createElement('li');
  }

  function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
  }

  function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = '❌';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(botaoApagar);
  }

  function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];
    for (let tarefa of liTarefas) {
      let tarefaTexto = tarefa.innerText;
      tarefaTexto = tarefaTexto.replace('❌', '').trim();
      listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJson = JSON.stringify(listaDeTarefas);

    localStorage.setItem('tarefas', tarefasJson);
  }

  function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas) {
      criaTarefa(tarefa);
    }
  }

  adicionaTarefasSalvas();


}

main();