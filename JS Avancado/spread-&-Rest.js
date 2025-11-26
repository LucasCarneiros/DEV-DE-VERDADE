//Operador SPREAD 

//espelha os elementos de um array ou objeto

//Exemplo com array

const numeros1 = [1,2,3]
const numeros2 = [4,5,6]

const soma = [...numeros1, ...numeros2]

console.log(soma) // [ 1, 2, 3, 4, 5, 6 ]

//Exemplo com objetos

const pessoa = {nome: "joão", idade: 18}
const endereco = {cidade: "SP", estado: "SP"}

const combinacao ={
  ...pessoa,
  ...endereco,
  idade: 28
}

console.log(combinacao) //{ nome: 'joão', idade: 28, cidade: 'SP', estado: 'SP' }

//Obs: Perceba que podemos alterar valores como foi feito com idade


// Operador REST

// Comparta valores dentro de um array ou pega o resto de alguma coisa

//Exemplo de compactacao

function somar(...numeros){

  let total = 0

  numeros.forEach(numero => total += numero)

  return total

}

const total = somar(1,2,3,4,5)

console.log(total) //15

//Exemplo de

const numeros = [1,2,3,4,5]

const[primeiro, segundo, ...resto] = numeros

console.log(resto) //[3,4,5]



