// JSON — JavaScript Object Notation - Notacao de Objeto do JavaScript

// É uma forma de outras linguagens usarem a sintaxe de objetos do JS e se comunicarem 

// Todas as propriedades têm que ter aspas
// Strings devem ter aspas duplas
//Podemos ter arrays, objetos ...


// Metodos importantes

//PARSE converte um json em objeto js

const pessoas = JSON.parse(`
{
  "nome": "erick",
  "idade": 50,
  "hobbies": ["tocar guitarra", "academia"],
  "endereco": {
    "rua": "rua x",
    "bairro": "bairro y"
  }
}
`);

console.log(pessoas.endereco)

//STRINGiFY converte objeto em json

const pessoa = {
  nome: "erick",
  idade: 50,
  hobbies: ["tocar guitarra", "academia"],
  endereco: {
    rua: "rua x",
    bairro: "bairro y"
  }
}


console.log(JSON.stringify(pessoa))