/*
*Questoes sobre Promises
*/

//1. O que é uma Promise em JavaScript e quais são os três estados possíveis que ela pode ter?

//Uma promise é um objeto responsavel pela eventual conclusao de uma operacao assincrona. A promise pode ter 3 estados: fulfilled, pending ou rejected.

//2. Observe o código abaixo e responda: o que será impresso no console?

const promessa = new Promise((resolve, reject) => {
  resolve("Sucesso!");
});

promessa.then(resultado => {
  console.log(resultado);
});

//Porque vai dar sucesso? nao precisa validar algo antes usando if para a promise ser resolvida?

//3.Qual a diferença entre usar resolve e reject dentro de uma Promise?

//Resolve muda o estado da promise para fulfilled e manda o valor para then e Reject muda o estado da promise para rejected e o valor é recebid por catch.

//4.Complete o código para que a Promise seja resolvida após 2 segundos:

const promise = new Promise((resolve, reject) => {
  setTimeout(()=>{
    resolve("Promise resolvido após 2s")
  },2000)
  

});

promise.then(function(msg){
  console.log(msg)
})

//5.Analise o código abaixo e explique a ordem das saídas no console:

console.log("Início");

const promessa2 = new Promise((resolve) => {
  resolve("Promise resolvida");
});

promessa2.then(msg => console.log(msg));

console.log("Fim");

//O JavaScript executa primeiro o código sincrono (call stack), as Microtasks (then, cacth e finally) e depois as Macrotasks (setTimeout, etc). Então, mesmo a promise sendo resolvida imediatamente, o then só roda após o codigo sincrono terminar.



//6.Crie uma Promise que:

//resolva com "Número par" se o número passado for par

//rejeite com "Número ímpar" se for ímpar

const verificarPar = num => num % 2 === 0


const valor = 3

const num = new Promise((resolve, reject)=>{

  if(verificarPar(valor)){
    resolve("O numero é par, Promise resolvida")
  }else{
    reject(new Error("O número é ímpar")) //Qual o mais correto usar apenas reject() ou usar com new Error?
  }
})

num.then((msg)=>{
  console.log(msg)
})
.catch((msg)=>{
  console.log(msg)
})




//7.Qual a função do método .catch() em Promises? Reescreva o código abaixo utilizando .catch():

//catch captura chamadas a reject e erros lancados (throw) en qauqluer then anterior

promessa.then((resultado) => {
  console.log(resultado);
})
.catch((err)=>{
  console.log(err) 
})



//8.Explique a diferença entre encadeamento de Promises e callbacks aninhados (callback hell).

//Se voce aninhar calbacks o seu codigo pode crescer horizontalmente (pyramid of doom) invez de verticalmente. Além disso, quando estamos trabalhando com apis externas aninhar callbacks pode gerar inversao de controle. 

// Com promises, a api externa nao executa sua funcao, ela apenas resolve ou rejeita. Quem consome decide quando e como lidar com o resultado (then e catch)

//9. Observe o código abaixo e explique exatamente o que será impresso no console e por quê:

Promise.resolve(1)
  .then(num => {
    console.log(num);
    return num + 1;
  })
  .then(num => {
    throw new Error("Erro!");
  })
  .then(num => {
    console.log("Isso será executado?");
  })
  .catch(err => {
    console.log("Erro capturado");
  });

  //incialmente, Promise.resolve(1) cria uma promise já em estado fulfilled com valor 1, depois o primeiro then vai mostrar esse valor 1 no console e retorna uma nova promise resolvida com valor 2 para o proximo then que esta anexado. O proximo then lanca um erro com throw (o que equivale a um reject). O próximo then não é executado, pois catch pega esse erro lancado e mostra no console "Erro capturado", mas nao mostra a mensagem "Erro" do erro lancado porque o parametro err nao foi usado.

 //10. Crie uma função buscarDados() que retorne uma Promise simulando uma requisição assíncrona:

 //após 1 segundo, a Promise deve:

 //resolver com um objeto { nome: "Ana", idade: 30 } se sucesso === true

 //rejeitar com "Erro na requisição" se sucesso === false

 function buscarDados(requisicao){

  const promise = new Promise((resolve, reject)=>{

    setTimeout(()=>{

      if(requisicao){
      resolve({nome: "Ana", idade: 30})
    }else{
      reject(new Error("Erro na requisição"))
    }
   },1000)
  })

   return promise
 
 }

 const requisicao = true

 buscarDados(requisicao)
 .then((msg)=>{
  console.log(msg)
 })
 .catch((err)=>{
  console.log(err)
 })

 /*
*Questoes sobre Async e Await
*/

//1.O que a palavra-chave async garante sobre o retorno de uma função em JavaScript?

//Garante que ela retorna um Promise

//2.Onde a palavra-chave await pode ser utilizada?

//Dentro de funcoes async

//3.O que acontece quando usamos await antes de uma Promise?

//A funcao async é Pausada até essa promise ser resolvida, Event loop continua, Call stack continua. Apenas aquela função é suspensa

//4.Qual é o valor impresso no console?

async function f() {
  return 10;
}

f().then(console.log);

//10, pois async encapsula 10 em promise.resolve(10)

//5.Qual será a saída do código?

async function teste() {
  const x = await Promise.resolve(5);
  const y = await Promise.resolve(10);
  return x + y;
}

teste().then(console.log);

// a soma de 5 + 10

//6.O que acontece se uma Promise rejeitar dentro de uma função async e não houver try/catch?

//a funcao vai retornar uma promisse rejeitada, porem como nao foi construido nenhum try/catch nao vai ter um codigo que lida com esse erro

//7. Qual a diferença prática entre os dois trechos?

await p1;
await p2;

await Promise.all([p1, p2]);

//a primeira é sequencial: a funcao para em await p1 e so depois de resolver p1 que chega em await p2 e so depois de resolver p2 a funcao termina

//Já a segunda é parelala: p1 e p2 comecam juntas, ou seja, o await esperam as duas ao mesmo tempo e a funcao asyn termina quando a mais lenta termina

//8.Qual é o problema deste código?

async function getData() {
  setTimeout(() => {
    return 42;
  }, 1000);
}

// O 42 é um retorno da callback de setTimeout e nao vai ser usada por ninguem, porquem ele nao é retorno de getData

//9.Qual será a ordem dos logs?

async function exemplo() {
  console.log(1);
  await Promise.resolve();
  console.log(2);
}

console.log(0);
exemplo();
console.log(3);

//0, 1, 3, 2 porque await pausa a funcao async 

//10. O que o código abaixo imprime?

async function f2() {
  return Promise.resolve(5);
}

f2().then(console.log);


//5