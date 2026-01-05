//Funcoes assincronas sempre retornam uma Promessa

//Mesmo que voce coloque um valor qualquer como uma string, a funcao assincrono pega esse valor e encapsula ele dentro de uma promessa

//async e await sao usadas para lidar com Promessas

async function getData(par) {
 return par       
}

const data = getData('N')
console.log(data)

//Como pegar o Valor propriamente dito entao?
//Usando .then()

data.then(res => console.log(res))

//

const p1 = new Promise((resolve)=>{
  setTimeout(()=>{
    resolve("Promesa Resolvida 1")
  },10000)
 
})

const p2 = new Promise((resolve)=>{
  setTimeout(()=>{
    resolve("Promesa Resolvida 2")
  },5000)
 
})

//Se inserirmos uma promise ela continua sendo uma promise

const dataPromise = getData(p1)

dataPromise.then(res => console.log(res))

//

//Como Lidamos com promessas usando async e await?

//Usamos await antes da promessa que queremos resolver

//await é uma palavra-chave que só pode ser usada dentro de uma funcao assincrona

//Quando usamos 'Await' A função async é pausada/suspensa, porém o event loop continua rodando e outras tarefas continuam executando até a promise ser resolvida para rodar as linhas subsequentes dessa funcao async o que nao ocorre se usarmos then e catch

async function handlePromise(){

  console.log("Hello World")

  const value1 = await p1;
  console.log(value1)
  console.log("Mensagem 1") //so aparece depois do valor acima, mesmo p1 sendo uma operacao assincrona

  const value2 = await p2;
  console.log(value2)
  console.log("Mensagem 2") 
}

handlePromise()


//Quando handlePromise() é chamada a sua execucao é suspendida da callstack até a promise ser resolvida. Quando P1 é resolvida handlePromise volta para a callstack e executa os logs e depois quando chega no P2 é suspendida outra vez e ela sai da callstack ovamente

//P1 e P2 tem um tempo de timeout diferente, 10 e 5 segundos respectivamente, quando se passa 5 segundos o js engine resolve p2 mas nao segue adiante até se passar os 10 segundos de P1. É por isso que no console tudo é imprimido de uma vez só, pq quando passa os 10 segundos tanto P1 quanto P2 já foram resolvidas


/*
*Exemplo real Async await:
*/

const API_URL = "https://api.github.com/users/LucasCarneiros"

async function lidarPromessa(){

  try{

   // retorna um objeto resposta / response object
   const info = await fetch(API_URL) 

   //Esse objeto respota tem um corpo que é um stream livel

   //Para converter essa readable stream em Json usamos response.json() que retorna uma promise

   const valorJson = await info.json()

   console.log(valorJson)
  }
  catch(err){
    console.log(err)
  }
  
}

lidarPromessa()

//fetch retorna uma Promise Essa Promise resolve com um Response


fetch().then(res => res.json()).then(res => console.log()) 



//interview tips

//Async é uma palavra chave usada em funcoes e transforma retorno em Promise. 

// Await so pode ser usado dentro de async functions para lidar com promessas, ele pausa a função e registra continuação no microtask queue

//Explique como async await funciona por tras das cenas


//diferenca entre async e await e then e catch

//Na pratica, Async e Await é abreviacao sintatica de promise.then e promise.catch.

//Then/catch é encadeado Async/await é linear

//Then/catch é mais verboso e Async/await é mais legível

//Then/catch tem um callback-style e Async/await tem um codigo sincrono-like
