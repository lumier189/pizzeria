Olá! Primeiramente gostaria de agredecer ao @Vituhugo por toda a instrução dada ao decorrer deste projeto. <br>
<br>
E também apontar que seu desenvolvimento foi completamente documentado e você pode acompanhar diretamente na  <a href="https://github.com/vituhugo/pizzeria/wiki">wiki</a>.


 ## Definição do projeto e Levantamento de requisitos.
 
  O primeiro passo foi fazer o levantamento de requisitos,aonde é necessario verificar as demandas do *"cliente"* sendo o start pra começar a estruturar os proximos passos.

## Definições da database

Aqui entramos na etapa que mais me tomou tempo,aonde começamos a construir um model e fazer verificações para tirar as *"demandas/necessidades"* do mundo das ideias e encontrar uma maneira de fazer funcionar.

Essa etapa foi uma verdadeira escola para entender melhor os conceitos dos banco de dados, As entendidas e seus tiposde relacionamentos, além de fazer o meu primeiro diagrama ER

Tudo foi feito seguindo as [**regras de normalização do banco de dados**](https://github.com/vituhugo/pizzeria/wiki/Database-definition#the-concepts)

então depois de muitos artigos, videos, finalmente consegui cumprir com todas as demandas necessarias, partindo assim para o dump inicial;


## Definição das rotas

Queria eu ter aprendido esse conceito antes de ter feito [meu primeiro crud com express](). Aonde eu dei um nó na cabeça enquanto codava e definia ao mesmo tempo, e muitas vezes me perdia tendo que voltar pra descobrir em qual variavél estava armazenados os dados que eu precisava usar.


## Definição dos pedidos e respostas

É aqui que o banco de dados e o node se misturam!!

Nessa parte foram aplicados os conceitos REST

reponsabilidades REST
* **Cliente:* é o componente solicitante de um serviço e envia solicitações para vários tipos de serviços ao servidor
* **Servidor:* É o componente que é o provedor de serviços e fornece continuamente serviços ao cliente conforme as solicitações.

A comunicação entre cliente e servidor ocorre através da troca de mensagens usando um padrão de solicitação-resposta. O cliente basicamente envia uma solicitação de serviço e o servidor retorna uma resposta.


Requisições e comunicações

O REST precisa que um cliente faça uma requisição para o servidor para enviar ou modificar dados. Um requisição consiste em:

* Um verbo ou método HTTP, que define que tipo de operação o servidor vai realizar;
* Um header, com o cabeçalho da requisição que passa informações sobre a requisição;
* Um path (caminho ou rota) para o servidor;
* Informação no corpo da requisição, sendo esta informação opcional;

Métodos HTTP

* O método GET é o método mais comum, geralmente é usado para solicitar que um servidor envie um recurso;
* O método POST foi projetado para enviar dados de entrada para o servidor. Na prática, é frequentemente usado para suportar formulários HTML;
* O método PUT edita e atualiza documentos em um servidor;
* O método DELETE que como o próprio nome já diz, deleta certo dado ou coleção do servidor.

Códigos de Respostas
Cada resposta que a aplicação REST retorna, é enviado um código definindo o status da requisição. Por exemplo:

* 200 (OK), requisição atendida com sucesso;
* 201 (CREATED), objeto ou recurso criado com sucesso;
* 204 (NO CONTENT), objeto ou recurso deletado com sucesso;
* 400 (BAD REQUEST), ocorreu algum erro na requisição (podem existir inumeras causas);
* 404 (NOT FOUND), rota ou coleção não encontrada;
* 500 (INTERNAL SERVER ERROR), ocorreu algum erro no servidor.


Daqui pra frente a ferramenta [postman](https://www.postman.com/) se torna nossa melhor aliada, tanto pra ajudar a estruturar quando testar efetivamente durante o desenvolvimento,
Uma vez com a estrutura dos pedidos-respostas alinhados com o banco de dados, era só voltar aqui pra conferir exatamente o que eu precisava codar, e me concentrar totalmente em buscar um modo de faze-lo.




