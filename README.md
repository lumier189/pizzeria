Olá! Primeiramente gostaria de agredecer ao @Vituhugo por toda a instrução dada ao decorrer deste projeto. <br>
<br>
E também apontar que seu desenvolvimento foi completamente documentado e você pode acompanhar diretamente na  <a href="https://github.com/vituhugo/pizzeria/wiki">wiki</a>.


 ## Definição do projeto e Levantamento de requisitos.
 
O primeiro passo foi fazer o levantamento de requisitos,aonde é necessario verificar as demandas do *"cliente"* sendo o start pra começar a estruturar os proximos passos.

## Definições da database

Aqui entramos na etapa que mais me tomou tempo,aonde começamos a construir um model e fazer verificações para tirar as *"demandas/necessidades"* do mundo das ideias e encontrar uma maneira de fazer funcionar.

Essa etapa foi uma verdadeira escola para entender melhor os conceitos dos banco de dados, As entendidas e seus tiposde relacionamentos, além de fazer o meu primeiro diagrama ER

Tudo foi feito seguindo um padrão para [**regras de normalização do banco de dados**](https://github.com/vituhugo/pizzeria/wiki/Database-definition#the-concepts)

então depois de muitos artigos, videos, finalmente consegui cumprir com todas as demandas necessarias, partindo assim para o dump inicial;


## Definição das rotas

Queria eu ter aprendido esse conceito antes de ter feito [meu primeiro crud com express](). Aonde eu dei um nó na cabeça enquanto codava e definia ao mesmo tempo, e muitas vezes me perdia tendo que voltar pra descobrir em qual variavél estava armazenados os dados que eu precisava usar.


## Definição dos pedidos e respostas

É aqui que o banco de dados e o node se misturam!!

Nessa parte foram aplicados os conceitos REST

reponsabilidades REST
* **Cliente:** é o componente solicitante de um serviço e envia solicitações para vários tipos de serviços ao servidor
* **Servidor:** É o componente que é o provedor de serviços e fornece continuamente serviços ao cliente conforme as solicitações.

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

fonte: <https://www.alura.com.br/artigos/rest-conceito-e-fundamentos>


Daqui pra frente a ferramenta [postman](https://www.postman.com/) se torna nossa melhor aliada, tanto pra ajudar a estruturar quando testar efetivamente durante o desenvolvimento,Uma vez com a estrutura dos pedidos-respostas alinhados com o banco de dados, era só voltar aqui pra conferir exatamente o que eu precisava codar, e me concentrar totalmente em buscar um modo de faze-lo.

como por exemplo conferir o que pedir e o que esperar da resposta:

<img width="300px" height="300px" src="https://user-images.githubusercontent.com/108551838/185509300-ae1d2e22-226c-4382-8902-e02647a34b54.png" alt=""> <img width="500px" src="https://user-images.githubusercontent.com/108551838/185508264-bb25d177-e82e-45a1-afbd-ea3cc8b9c635.png" alt="">

Confira o [resultado final](https://documenter.getpostman.com/view/2650664/VUjQm4Zw) dessa etapa.  ou a [versão simplificada](https://github.com/lumier189/pizzeria/wiki/Routes-definitions)

## Codando!!


Como tudo já estava definido, essa era a hora de fazer acontecer!


* npx express-generator
* npm i sequelize
* npm i dotenv
* npm i mysql2
* npm i bcrypt
* npm i jsonwebtoken

dependencias necessarias, hora de aplicar os conceitos MVC 


Configurar o doenv > fazer a conexão com o banco de dados através do sequelize.<br>
Então foi partir para fazer os endpoints:

1 importar as Models > 2 construir o controller > 3 construir o router 

 ![image](https://user-images.githubusercontent.com/108551838/185510838-ece74510-4e3e-4f8d-8741-02ea289d9716.png)
 ![image](https://user-images.githubusercontent.com/108551838/185513422-eda7633c-9947-44bb-8eb1-5bab7ab40722.png)
 ![image](https://user-images.githubusercontent.com/108551838/185513462-173f7cca-8f7f-4fc8-9535-65a38dafd539.png)


 
 
 middlewares de autenticação > error handler
 
 
![image](https://user-images.githubusercontent.com/108551838/185513242-20d88ed7-f8c5-4adf-bb33-6671bd070a7c.png)
![image](https://user-images.githubusercontent.com/108551838/185513263-5b342045-493f-4f7f-ba19-3254c14490ee.png)



Vale ressaltar alguns aprendizados ao longo desse processo, como fazer o relacionamento das tabelas que foi visto no começo através do mysql, agora por meio do sequelize. 1:1, 1:n e n:n.

Entender melhor os conceitos de sync e async, e como algumas funções se comportam durante esse processo.

O cuidado ao verificar os dados que são recebidos antes de manda-los ao banco de dados.

O uso de cryptografia e tokens.

Código de respostas http, middlewares.

Conceitos de SOLID e código limpo.



No final recorri ao ESLINT para dar aquele tapa no visual do código e voilá 

![image](https://user-images.githubusercontent.com/108551838/185512195-e0ff7d80-adc9-4585-b4b2-beabe61059b4.png)![image](https://user-images.githubusercontent.com/108551838/185513609-7b5a1d80-12e8-4cff-8ca8-5502555ba93f.png)









