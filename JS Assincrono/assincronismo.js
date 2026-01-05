/*

*Assincronismo

Permite que tarefas que demoram a ser concluidas como, por exemplo, requisições a uma api ou leitura de arquivos sejam executadas "em paralelo", enquanto  o programa continua rodando outras partes


*Sincrono VS Assincrono

O sincrono executa uma tarefa de cada vez, bloqueando a próxima até a atual ser concluida

O assincrono permite que tarefas sejam realizadas ao mesmo tempo


*Event Loop 

é o mecanismo do ambiente de execução (browser ou Node.js) que coordena a execução do código JavaScript, monitorando a call stack e as filas de tarefas, e movendo callbacks para a call stack quando ela está vazia, garantindo execução não bloqueante em uma linguagem single-thread.


*Call Stack ou Pilha de chamada

É onde o JavaScript executa o seu codigo. Cada chamada de funcao empilha um contexto de execucao na pilha de chamada, quando uma funcao termina ela é removida da stack

Quando voce executa um codigo no js um contexto de execucao global é criado na callstack
 
*Single Thread

O JavaScript é uma linguagem single thread o que significa que ele possui uma única call stack e executa uma coisa por vez.Além disso, o o mecanismo do javaScript nao espera por nada

*Timers

O JavaScript nao possui timers, ele nao sabe contar. Quem controla o tempo é o ambiente de execucao (browser ou Node.js). O JS apenas registra callbacks e as executa quando sao empurradas para  a call stack

*Web API's

SetTimeout; Dom apis; fetch; localstorage; console; location não fazem parte da linguagem JavaScript e sim do ambiente de execucao (browser ou Node.js).

Quem expoe essas apis/disponibiliza essas funcoes é o objeto global windows.

*Fila de chamada de retorno ou callback queue/task queue

É onde as funcoes de retorno aguardam para serem executadas 

Ex: 
  
  setTimeout

  1.Ao usar um setTiemout, ele é registrado na web API
  2.Wuando seu timer expira, o seu callback vai para a task queue (callback queue)
  3.Depois o event loop verifica se a call stack esta vazia
  4.Se estiver vazia, ele move a callback para a call stack e executa
  
  addEventListener (dom api)

  1.Quando usamos um addEventListener, a sua callback fica registrada na web API
  2.Quando o evento ocorre, a callback é enviada para a task Queue
  3.Depois o event loop verifica se a call stack esta vazia
  4.Se estiver vazia, ele move a callback para a call stack e executa
 
  
*/





//ta mas porque precisamos de um fila de retorno de chamada (callback queue)? Em um app da vida real há muitos ouvintes de evento, temporizadores etc. É por isso que precisamos sinalizar todas essas funcao de retorno de chamadas juntas para que elas tem uma chance de ser executada uma apos a outra porque o js so tem uma unica pilha de chamadas

//fetch é uma excecao:

//Além da fila de retorno de chamada temos a fila de microtarefas que tem prioridade mais alto, as uncoes dentro dela sao executadas primeiro. Funcao de retorno de chamadas de promessas e observadores de mutacao (o que é isso?) vao para a fila de microtarefas,  

//Se uma microterafa cria outra microtarefa dentro dela as outras microtarefas continuam tendo prioridade em relacao a fila de retorno de chaamda isso se chama inanicao