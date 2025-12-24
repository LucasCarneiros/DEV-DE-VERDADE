//funcao assincrona sempre retorna uma promise, usamos a palavra chave async?

async function minhaFuncaoAssincrona(){
  return 'Olá eu sou a funcao assincrona'
}

const resultado = minhaFuncaoAssincrona()
.then((resultado)=>{
  console.log(resultado)
})

//o que await faz?
async function buscarDados(){
  const resultado = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  if(resultado.ok){
    //Por que colocar await faz o json ser o resultado final e nao uma promise?
    const json = await resultado.json()
  }else{
    throw new Error('Deu erro')
  }
}

console.log(buscarDados())