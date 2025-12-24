/*
*Callbacks são funções passadas como argumento para outra função, com a intenção de serem executadas mais tarde, geralmente após algum evento, operação assíncrona ou processamento terminar.

*callback permite executar uma funcao depois d e uma determinada acao, ou seja, ela espera uma resposta
*/

function soma(a, b, callback){
  let operacao = a + b
  callback(operacao)
}

function multiplicacao(a, b, callback){
  let operacao = a * b
  callback(operacao)
}

function exibir(num){
  console.log('Exibindo Operacao: ' + num)
}

soma(1,2, exibir)



//Callback Hell

//É um excesso de callback aninhadas o que dificulta a leitura e manutenção

//Imagina que você queira criar um aplicacao para um marketplace

//Essa aplicacao deve ter um carrinho

const carrinho = ["Sapato", "Calça", "Blusa"]

//Nesse marketplace também temos que ter uma api para criar pedido ,outra api para prosseguir para pagamento, outra para mostrar resumo de compra, outra para aatualizar carteira...


api.criarPedido()
api.prosseguirParaPagamento()
api.mostrarResumo()


//Essas etapas assincronas sao dependentes entre si, Criar pedido → pagar → mostrar resumo → atualizar carteira.

//Sendo assim, devido a necessidade de execução sequencial poderiamos aninhar essas funcoes como callbacks

api.criarPedido(carrinho, function(){

  api.prosseguirParaPagamento( function(){
    
    api.mostrarResumo( function(){

      api.atualizarCarteira()
    })
  })
})

//O problema é que acima existem muitas funcoes de retorno aninhadas. o codigo cresce horizontalmente invez de verticalmente causando oque chamamso de piramide da perdicao

//Outro problema aqui é a inversao de controle (quando você perde o controle do fluxo da sua lógica e passa esse controle para outro código (framework, biblioteca ou API), confiando que ele chamará suas funções no momento e da forma corretos). 

// Quando voce chama uma funcao de retorno voce esta confiando cegamento na api de criarPedido, voce nao sabe como esse codigo foi escrito, e se ele der erro? e se ele chamar a api de prosseguirParaPagamento duas vezes? 



