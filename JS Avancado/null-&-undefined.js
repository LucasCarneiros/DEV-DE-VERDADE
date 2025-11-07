// UNDEFINED são variaveis ou propriedades que ainda nao foram definidas

//É definido automaticamente pelo JS

//Ex:

//Variaveis sem valor

let variavel;

//Funcoes sem retorno

function saudacao(){
  console.log(Olá)
}

let retorno = saudacao()

console.log(retorno) //undefined

//Propriedades nao definidas de um objeto


let pessoa ={
  nome: "João"
}

console.log(pessoa.idade) //undefined

//NULL é quando você atribui o valor "null" a uma variavel ou propriedade

//É usado quando voce quer poder acessar uma variavel ou propriedade mas nao quer definir um valor para ela no momento

let vazio = null;

console.log(vazio) //null

let garota ={
  nome: "Marcela",
  idade: null,
}


//Observacoes

//Se compararmos null e undefined com '==' vai dar true porque os dois representam a ausencia de valor

//Porem, se compararmos com '===' dá false porque os tipos nao sao iguais


console.log(null == undefined)
console.log(null === undefined)