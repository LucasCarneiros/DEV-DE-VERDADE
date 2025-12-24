//Promise é um objeto que representa o valor da conclusao eventual de uma operação assincrona. Esse valor pode ser fulflled, rejected ou pending

//Exemplo Real

//Em um marketplace temos o array carrinho.

const carrinho = ["Sapatos", "Calças", "Blusa"]

//Temos também api's para criar pedidos, prosseguir para o pagamaneto etc. 


criarPedido(carrinho); 

prosseguirParaPagamento(pedidoId);

//Essas etapas assincronas sao dependentes entre si, Criar pedido → pagar → mostrar resumo → atualizar carteira. Então podemos reorganiza-las usando funcoes de retorno. 

criarPedido(carrinho, function(pedidoId){
  prosseguirParaPagamento(pedidoId)
});
//etc

//Porém, temos 2 problemas: Nesse caso, passar uma funcao de retorno dentro de outra funcao  gera a inversao de controle, pois voce entrega sua funcao para uma api externa. Além disso, encadear callbacks pode gerar callback hell


//A promessa resolve o problema da inversao de controle porque o produtor nao executa a sua funcao, ele apenas resolve ou rejeita. Quem decide o que fazer é quem consome (then e catch)

const promises = criarPedido(carrinho)

promises.then(function(pedidoId){
  prosseguirParaPagamento(pedidoId)
});

//a api de criacao de pedido retorna um objeto promessa que é um espaco reservado que será eventualmente preenchido com os dados da operacao assincrona

//Para prosseguir para o pagamento anexamos uma funcao de retorno de chamada a esse objeto promise, usando a funcao then que é uma funcao disponivel do objeto promise

//Podemos entao reorganizar essas etapas assincronas dependentes usando encadeadomento de promissas, resolvendo o callback hell

criarPedido(carrinho)
 .then(function(pedidoId){
   return prosseguirParaPagamento(pedidoId)
 })
 .then(function(infoDePagamento){
   return mostrarResumo(infoDePagamento)
 });
 //...

//Podemos tambem reescrever o codigo assim

 criarPedido(carrinho)
  .then((pedidoId) => prosseguirParaPagamento(pedidoId))
  .then((infoDePagamento) => mostrarResumo(infoDePagamento))
  //...


//Porque a Promise é melhor que callback?

//A promessa nos da confianca na nossa operacao, porque voce so pode resolver a promessa uma vez e só pode ter apenas tres estados para promessas: Pendentes, cumpridas ou rejeitadas. Além disso, a promessa é imutavel voce nao pode altera-la quando for resolvida


//Analisando um objeto promise real

const GITHUB_API = "https://api.github.com/users/LucasCarneiros"

//fetch faz requisições HTTP (GET, POST, etc.) e retorno uma Promise

const user = fetch(GITHUB_API);

console.log(user)


user.then(function (data){
  console.log(data)
})

//Criando uma PROMISE


function createOrder(cart){

 //Usamos o cosntrutor new Promise()

 //Dentro do construtor Promise, chamamos uma funcao anonima e passamos as funcoes resolve e reject como parametro. Essas funcoes sao nativas do javascript

 //resolve(valor) -> Entrega o resultado final da Promise quando deu certo.

 //reject(erro) -> Entrega o motivo do erro quando deu errado.

  const promise = new Promise(function(resolve, reject){

    // Se a validacao do carrinho der errado, criamos um objeto Error com a mensagem "Cart is not valid" e chamamos a funcao reject passando a variavel Error que armazena o objeto Error que possui a mensgem "cart is not valid"

    if(!validateCart(cart)){
      const error = new Error("Cart is not valid")
      reject(error)
      return
    }
    
    //Se o id do pedido for valido chamamos a funcao resolve que recebe o proprio id do pedido
    const orderId = "12345"
    if(orderId){
      resolve(orderId)
    }
  });

  return promise
}


const cart = ["Blusa","Calças","Bermudas"]


const promessa = createOrder(cart);


//O parametro de then() é o argumento de resolve() 

//then() é executado somente se a Promise chamar resolve().

//catch() é executado somente se a Promise chamar reject().

promessa.then(function(orderId){
  console.log(orderId)
  return orderId //Porque retornar o orderId aqui?
})
.then(function(orderId){
  return proceedToPayment(orderId) //Aqui é tudo ficticio entao n criamos uma logica para proceedToPayment
})
.then(function(paymentInfo){
  console.log(paymentInfo)
})
.catch(function(error){
  console.log(error)
})



function criarPedido(carrinho){
  return true
}


function validateCart(cart){
  return false
}




// Tanto throw new Error quanto reject fazem a promise entrar no estado rejected e envie o erro para o próximo .catch() da cadeia, porém só usamos reject dentro do executor do promise e throw dentro de then, catch, ou async/await:


