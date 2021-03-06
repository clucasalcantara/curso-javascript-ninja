# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
const sum = (x, y) => x + y

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
const plusFive = (count) => count + 5
const sumPlusFive = (x, y) => plusFive(sum(x, y))

// Qual o valor atualizado dessa variável?
console.log(sumPlusFive(2,3))

// Declare uma nova variável, sem valor.
let content

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
const fillContent = (value) => {
  content = value
  return `O valor da variável agora é ${content}`
}

// Invoque a função criada acima.
fillContent(10)

// Qual o retorno da função? (Use comentários de bloco).
/*
* O valor da variável agora é 10.
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
const allParamsPresent = (x === undefined || y === undefined || z === undefined)

const multiply = (x,y,z) => !allParamsPresent ? "Preencha todos os valores corretamente!" : (x * y * z)

const plusTwo = (count) => !isNaN(count) ?  count + 2 : count

const multiplyAndPlusTwo = (x, y, z) => plusTwo(multiply(x,y,z))


// Invoque a função criada acima, passando só dois números como argumento.
multiplyAndPlusTwo(1,2)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// "Preencha todos os valores corretamente!"

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
multiplyAndPlusTwo(2,4,5)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 42

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
const checkArguments = (x, y, z) => {
  const arguments = [x, y, z]
  if (arguments.length === 1) return x
  if (arguments.length === 2) return x + y
  if (arguments.length === 3) return (x + y) / z
  if (arguments.length === 0) return false
  
  return null
}


// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
checkArguments(5) // 5
checkArguments(10, 2) // 7
checkArguments(10, 2, 3) // 4
checkArguments() // false
checkArguments(10, 2, 3, 5) // null
```
