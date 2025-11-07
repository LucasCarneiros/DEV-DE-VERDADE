/*
Crie uma variável com valor  null  e outra com  undefined . Use um  if/else  para  verificar se as variáveis têm valor ou não. Explique o comportamento no console.
*/
const vazio = null;

let indefinido

if(vazio){
  console.log("a variavel vazio tem valor")
}
else if(indefinido){
  console.log("a variavel indefinido tem valor")
}
else{
  console.log("nenhuna variavel tem valor")
}

/*
Utilize a desestruturação para extrair valores de um objeto que representa um usuário, contendo  nome ,  idade  e  email . Depois, use a desestruturação para extrair elementos de um array com três números.
*/


const usuario = {
  nome: "Matheus",
  idade: 24,
  email: "Matheus@email.com"
}

const {nome, email} = usuario

console.log(email)

const array = [1,2,3,4,5]

const [valor1, ,valor2] = array

console.log(valor2) 

/*
Implemente uma função que use o operador rest para receber uma quantidade indefinida de números como argumentos e retorne a soma deles
*/

function somar(...numeros){

  let total = 0

  numeros.forEach(numero => total += numero)

  return total

}

const resultado = somar(5,10,5)

console.log(resultado)

/*
Utilize o operador spread para combinar dois arrays e, em seguida, para criar  uma cópia de um objeto adicionando uma nova propriedade.
*/

const array1 = [1,2,3]

const array2 = [4,5,6]

const combinacao = [
  ...array1,
  ...array2
]

console.log(combinacao)

const pessoa = {
  ...usuario,
  endereco:{
    rua: "Rua cantor chico science",
    cidade: "Paulista",
    estado: "Pe",
    cep: 123456,
  }
}

console.log(pessoa)

/*
Escreva uma função que utilize arrow functions para calcular a potência de um número (base elevado ao expoente).
*/

const calcular = (base, expoente) =>{
  return base**expoente
}

console.log(calcular(5,2))

/*
Crie uma função que receba outra função como argumento (callback). A função principal deve executar a callback e exibir uma mensagem antes e depois de sua execução
*/


function apresentar(callback){

  console.log("Executando a funcao callback")
  callback()
  console.log("Funcao callback Executada")
}

apresentar(() => {
  console.log(`Olá, meu nome é e tenho anos`) 
})


/*Pratique métodos de arrays: Use  map  para dobrar os valores de um array, filter  para retornar apenas os valores pares e  reduce  para calcular a soma de todos os elementos do array.*/

const array3 = [1,2,3,4]

const array3Dobrado = array3.map((elemento)=>{
  return elemento*2
})

console.log(array3Dobrado) // [ 2, 4, 6, 8 ]

const array3Pares = array3.filter((elemento)=>{
  return elemento%2 == 0
})

console.log(array3Pares) // [ 2, 4 ]

const array3Soma = array3.reduce((acumulador, valorAtual)=>{
  return acumulador + valorAtual
}, 0);

console.log(array3Soma)

/*mplemente um código que utiliza o  for...of  para iterar sobre um array de strings e o  for...in  para iterar sobre as propriedades de um objeto.*/

const stringarray = ["Maca", "Uva", "Pera"]

for(string of stringarray){
  console.log(string)
}

for(atributo in pessoa){
  console.log(atributo)
}

/*Transforme um objeto em uma string JSON usando  JSON.stringify  e, em seguida, reconverta para um objeto usando  JSON.parse*/

const pessoaJson = JSON.stringify(pessoa)

console.log(pessoaJson)

const pessoaObjeto = JSON.parse(pessoaJson)

console.log(pessoaObjeto)

/*Crie um código que combine desestruturação, operador spread e métodos de 
arrays. Por exemplo, extraia o primeiro elemento de um array, use spread para 
pegar o restante, e aplique um método ( map ,  filter , etc.) no array restante.*/


 function combinar(...array){

    const[n1, ...resto] = array

    console.log(n1)

    const restoPar = resto.filter((e)=>{
      return e % 2 == 0
    })

    console.log(restoPar)
 }

 combinar(1,2,3,4,5) // 1
                     // [2,4]