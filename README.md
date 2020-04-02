<h1 align="center">
  <img alt="Love Pet Sitter" title="Love Pet Sitter" src="https://user-images.githubusercontent.com/35263018/78263093-806e8380-74cf-11ea-8a5d-0522c853d70a.jpg" width="300px" />
</h1>

<h3 align="center">
  Love Pet Sitter
</h3>

<h3 align="center">
  Aplicação de gerenciamento da empresa Love Pet Sitter, utilizando NodeJS, ReactJS e React Native.
</h3>

<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-instalação-e-execução-do-backend">Instalação e execução do Backend</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-instalação-e-execução-do-frontend">Instalação e execução do Frontend</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-instalação-e-execução-do-mobile">Instalação e execução do Mobile</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## :rocket: Tecnologias

Esse projeto foi desenvolvido utilizando as seguintes tecnologias: 

<ul>
  <li>
    <a href="https://nodejs.org/en/"> Node.js </a>
  </li>
  <li>
    <a href="https://reactjs.org/">React</a>
  </li>
  <li>
    <a href="https://reactnative.dev/">React Native</a>
  </li>
</ul>

## 💻 Instalação e execução do Backend

1. Faça um clone desse projeto.
2. Entre na pasta do backend: ```cd backend```
3. Rode ```yarn``` para instalar as dependências
4. Crie um banco de dados no postgres com o nome de ```lovepetsitter```
5. Preencha o arquivo ```.env``` com as suas variáveis de ambiente
6. Rode ```yarn sequelize db:migrate``` para executar as migrations
7. Rode ```yarn start``` para iniciar o servidor.

## 💻 Instalação e execução do Frontend

Antes de executar esse projeto, inicie o backend que pode ser encontrado na pasta ```backend``` e siga as instruções acima.

1. Entre na pasta do frontend: ```cd frontend```
2. Rode ```yarn``` para instalar as dependências
3. Altere a url da api para o seu IP (deve ser o mesmo colocado no arquivo .env do backend), acessando ```cd services``` ``` api.js```
4. Rode ```yarn start``` para iniciar o cliente

## 💻 Instalação e execução do Mobile

:construction: Em desenvolvimento  :construction: 

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com ♥ by Letícia Barreto :wave:
