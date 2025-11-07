// Método é uma função dentro de um objeto

const numeros = [1,2,3,4,5]

//forEach executa uma funcao em cada elemento do array

numeros.forEach((elemento)=>{
  console.log(elemento)
})

//MAP retorna um novo array com base numa condicao que voce passou

const numerosDobrados = numeros.map((elemento) =>{
  return elemento*2
})

console.log(numerosDobrados)

//FILTER retorna um novo array filtrado de acordo com uma condicao que voce passou

const numerosPares = numeros.filter((elemento) => {
 return elemento % 2 === 0
})

console.log(numerosPares)

//FIND procura o primeiro elemento do array

const Pesquisa = numeros.filter((elemento) => {
 return elemento == 5
})

console.log(Pesquisa)

//SOME retona um valor boolean para um determinada condicao no array

const some = numeros.some((elemento) => {
 return elemento === 10
})

console.log(some)

//EVERY verifica se todos os elementos condizem com uma condicao e retorna um valor boolean

const every = numeros.every((elemento) => {
 return elemento === 10
})

console.log(every)

//Exercicio

const produtos = [
  {nome:'Notebook', preco:3000},
  {nome:'Teclado', preco:100},
  {nome:'Mouse', preco:50},
  {nome:'Monitor', preco:800}
]

//1 questao

const produtosMenor50 = produtos.filter((e)=>{
  return e.preco <= 50
})

console.log(produtosMenor50)

//2 questao

const produtosCaixaAlta = produtos.map((produto)=>{
  return {
    ...produto,
    nome: produto.nome.toUpperCase()
  }
}) 

console.log(produtosCaixaAlta)

//3 questao

produtosCaixaAlta.forEach((produto)=>{
  console.log(produto)
})

// 4 questao

const todosProdutos = produtos.every((produto)=>{
  return produto.preco > 100
})

console.log(todosProdutos)