// Callbacks são funcoes passadas como parametros para outras funcoes

function dizer0i(callback) {
  console.log('Olá')
  callback()
}

dizer0i(() => {
  console.log('Olá eu sou a callback')
})

//Set interval usa callbacks para execucoes repetidas

/*
setInterval(() => {
  console.log('estou Executando')
}, () =>{
  console.log('Já executei')
}, 1000 )

*/