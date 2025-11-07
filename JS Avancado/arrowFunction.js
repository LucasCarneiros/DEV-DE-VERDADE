// Arrow Function sao armazenadas dentro de variaveis

const somar = (a,b) => { 
  return a + b  
}

console.log(somar(1,2))

//Se a arrow function tiver uma unica linha nao precisa usar 'return' e/ou o bloco de  código

const somar2 = (a,b) => a + b

//Se a arrow function tiver um único parâmetro nao precisa usar parenteses

const quadrado = n => n * n

console.log(quadrado(2)) // 4

// Arrow function nao tem acesso ao contexto do this

const pessoa = {
  nome: 'Tomaz',
  Saudacao: () => {
    console.log(this.nome)
  }
}

pessoa.Saudacao() // undefined 

//Obs: Observe que com arrow function passamos funcoes anonimas ou seja sem nome
