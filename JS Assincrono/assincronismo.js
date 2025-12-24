// O que é Assincronismo? 

/*
* Permite que tarefas que demoram a ser concluidas como, por exemplo, requisições a uma api ou leitura de arquivos sejam executadas "em paralelo", enquanto  o programa continua rodando outras partes
*/

//Diferenca entre Sincrono e Assincrono

/*
* O sincrono executa uma tarefa de cada vez, bloqueando a próxima até a atual ser concluida

*O assincrono permite que tarefas sejam realizadas ao mesmo tempo
*/


//Como o JS implementa o assincronismo?

/*
*Para lidar com o assincronismo, ele utiliza o event loop
*/

//O que é o Event Loop?

/*
*Event Loop é o que permite ao JavaScript parecer que faz várias coisas ao mesmo tempo, mesmo executando uma por vez. Ele gerencia a ordem das execuções e evita que o programa trave esperando tarefas lentas.

* 1. O JavaScript executa um comando por vez (linguagem single-thread).

* 2. Algumas tarefas demoram, como:
*     – buscar dados da internet
*     – esperar um timer (setTimeout)

* 3. Essas tarefas demoradas são enviadas para o navegador/Node cuidar em paralelo.

* 4. Quando essas tarefas terminam, elas colocam uma mensagem na fila dizendo “estou pronta para executar”.

* 5. O Event Loop fica verificando:
*   – “A stack está vazia?”
*   – “Tem algo na fila para rodar?”

* 6. Quando a stack fica livre, o Event Loop pega a próxima tarefa da fila e executa.
*/