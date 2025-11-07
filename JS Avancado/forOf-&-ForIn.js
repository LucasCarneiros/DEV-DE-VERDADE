//FOR OF é usada para iterar arrays

const numeros = [1,2,3,4,5]

for (const numero of numeros) {
  console.log(numero)
}

//Se iteramos sobre uma string, ele itera cada caracter dessa string

const palavra = "Lucas"

for(const caracter of palavra){
  console.log(caracter)
}

//FOR IN é usado para iterar propriedades de objetos

const produtos ={
  nome: 'Notebook',
  preco: 1500,
  temEstoque: true,
  marca: 'Dell'
}

for(const propriedades in produtos){
      console.log(`${propriedades}: ${produtos[propriedades]}`)
}

//OBS: 

//'propriedades' nao pega o valor de cada propriedade e sim o nome (string) da propriedade, nesse caso "nome", "preco"...

//Entao,nao podemos usar "produtos.propriedades", porque propriedades é apenas uma string. para pegar o valor devemos usar "produtos[propriedades]

