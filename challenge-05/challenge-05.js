/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
const array = [1,2,3,4,5]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
const returnArray = array => array

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
returnArray(array)[2]

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
const getIndexOf = (array, number) => array.indexOf(number)

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
const mixArray = [1, "a", 3, {}, 0.5]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
const getMixArray = array => array.map(item => item)

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
const book = (bookName) => {
  const bookShelf = {
    livro1: {
      quantidadedePaginas: 537,
      autor: "Rick Riordan",
      editora: "Sextante",
    },
    livro2: {
      quantidadedePaginas: 537,
      autor: "Rick Riordan",
      editora: "Sextante",
    },
    livro3: {
      quantidadedePaginas: 537,
      autor: "Rick Riordan",
      editora: "Sextante",
    },
  }
  
  if (typeof bookName === undefined) return bookShelf
  
  const findBook = (bookName) => {
    return Object.getOwnPropertyNames(bookShelf).filter(key => key === bookName)
  }

  console.log(`O livro ${bookName} tem bookShelf[bookName].quantidadedePaginas`)
  console.log(`O autor do livro ${bookName} é bookShelf[bookName].autor`)
  console.log(`O livro ${bookName} foi publicado pela editora bookShelf[bookName].editora`)

  return bookShelf[findBook(bookName)]
}
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book()

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
book("livro1")
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
book("livro2")

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
book("livro3")
