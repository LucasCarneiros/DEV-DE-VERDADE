//Desestruturar é extrair valores de objetos ou variaveis e atribui-los a novas variaveis

//Exemplo com objeto

const pessoa = {
  nome: "Lucas",
  idade: 18
};

//Desestruturando o objeto acima

//Usamos chaves {}, pois é um objeto

const {nome, idade} = pessoa

console.log(nome) //Lucas
console.log(idade) //18


//Exemplo com Arrays

const numeros = [1,2,3,4,5]

//Desestruturando o array acima

//Usamos colchetes [], pois é um array

const [valor1, valor2] = numeros

console.log(valor1) // 1
console.log(valor2) // 2

//Obs: Podemos pular valores deixando espacoes em brancos com virgula

const [a, ,b] = numeros

console.log(a) // 1
console.log(b) // 3

//Desestruturando objetos dentro de funcoes

function apresentar({nome, idade}){
  console.log(`Meu nome é ${nome} e tenho ${idade} anos`)
}

const person = {
  nome: 'João',
  idade: 18,
  cidade: 'SP'
}

apresentar(person) // Meu nome é João e tenho 18 anos

//Desestrutuando o retorno de uma funcao

function somarEMultiplicar(a,b){
  
  return [a + b, a * b]

}

const [soma, multiplicacao] = somarEMultiplicar(1,3)

console.log(soma) // 4
console.log(multiplicacao) // 3

//OBSERVACOES

//Se tivermos 2 objetos com propriedades com nomes semelhante, não podemos decalarar variaveis com o mesmo nome na hora de desestruturar

//Ex:

/* 
*     const {nome, idade} = pessoa1
*                                      ❌
*     const {nome, idade} = pessoa2
*/

//Uma solucao seria renomear as variaveis na hora de desestruturar

/* 
*     const {nome: nome1, idade: idade1} = pessoa1
*                                                    ✅
*     const {nome: nome2, idade: idade2} = pessoa2
*/