# Atividade: Gerenciador de Livros
Você vai criar um gerenciador de livros que permite adicionar, editar e visualizar informações sobre livros. A atividade será dividida em etapas para que você possa praticar cada conceito.

## Etapa 1: Criar uma Factory Function
Crie uma função chamada createBook que recebe os parâmetros title, author, e year. Esta função deve retornar um objeto que representa um livro.

## Etapa 2: Criar uma Constructor Function
Crie uma constructor function chamada Book que recebe os mesmos parâmetros (title, author, year) e inicializa as propriedades do objeto.

## Etapa 3: Adicionar Getters e Setters
Adicione um getter e um setter para a propriedade year na constructor function Book. O getter deve retornar o ano e o setter deve atualizar o ano apenas se for um número válido.

## Etapa 4: Usar Object.defineProperties()
Utilize Object.defineProperties() para definir propriedades adicionais no objeto Book, como summary que deve ser uma string que combina o título e o autor.

## Etapa 5: Testar a Implementação
Crie alguns livros usando tanto a factory function quanto a constructor function e teste os getters e setters.

# Desafio Extra
1. Adicione um método displayInfo que imprime as informações do livro no console.
2. Crie uma função que permite comparar dois livros e retorna qual deles é mais recente.