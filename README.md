<h1 align="center"><strong>Abrir WhatsApp</strong></h1>

|Home| Entrando com os dados|
|---|---|
| <img src="https://user-images.githubusercontent.com/38691922/103040958-c1259580-4553-11eb-9c06-ba9a1ebd215e.jpeg" height="300" > | <img src="https://user-images.githubusercontent.com/38691922/103040965-c387ef80-4553-11eb-8323-5a15f24b848e.jpeg" height="300" >|

<h2>Projeto</h2>

O Abrir WhatsApp é um projeto que tem como intuito permitir abrir uma conversa com um número desconhecido sem a necessidade de salvá-lo nos contatos.

<h2> Mobile</h2>
<h3> Tecnologias</h3>

* React native
* Expo

Para rodar o projeto execute o comando ``` yarn start ``` na pasta onde se encontra o projeto. E com o aplicativo <strong>Expo</strong> instalado no celular leia o QRCode gerado.


<h2>Deploy</h2>
<h3>Gerar o SDK</h3>

Para gerar o SDK é necessário rodar o comando ``` yarn start ``` para rodar a aplicação e somente <strong>DEPOIS</strong> dela já está rodando executar o 
seguinte comando: ```expo build:android -t apk```.

Ao final, se tudo ocorrer bem, será retornado a URL para baixar o SDK.

> OBS: O antivírus deve está desativado durante esse processo para evitar erros!
