## :page_with_curl: Sobre
  Projeto desenvolvido por Gabriel Harmel para o desafio técnico do processo seletivo da turma XP da Trybe, para vaga de Software Engineer em Back-End na XP Inc.
  </br>
  Aplicação construida com Node.Js, sendo que a comunicação com banco de dados foi realizada utilizando o ORM Sequelize.
  </br>
  Esta API RESTful simula o funcionamento de uma corretora de investimentos, onde é possível consultar os clientes, suas informações e seus ativos, como também é possível realizar compras e vendas de ações para cada cliente de acordo com sua carteira e seu saldo.

## :hammer_and_wrench: Ferramentas

* Node.js
* Express.js
* Sequelize.js
* DotEnv
* Docker
* MySQL

## :whale2: Instalação e execução com Docker

<details>
  <summary markdown="span"><strong>Instruções</strong></summary><br />

Para rodar está aplicação é necessário ter **Git**, **Docker** e o **Docker Compose** instalados no seu computador. O Docker Compose precisa estar na versão **1.29** ou superior.

### 1 - Clone o repositório
```sh
git clone git@github.com:harmelson/dt-psel-xp.git
```

### 2 - Rode os containers executando o comando abaixo na pasta raiz da aplicação
```sh
docker-compose up -d --build
```

### 3 - Rode o comando para abrir o terminal do container blogs_api
```sh
docker exec -it psel_xp bash
```

### 4 - No terminal do container, instale as dependências e execute a aplicação

Instalando dependências:
```sh
npm install
```

Executando aplicação:
```sh
npm start
```

<br />
</details>

## :books: Documentação

<details>
  <summary markdown="span"><strong>Endpoints e instruções de uso</strong></summary><br />
Tendo iniciado a aplicação como foi ensinado no bloco anterior, utilize um cliente de requisições HTTP de sua preferência (Insomnia, Thunder Client, etc) para fazer as chamadas para o endereço:

**localhost:3000/**

**Exemplo de requisição: localhost:3000/conta/1**

**Observação: Todos os endpoints com o verbo POST possuem validações especificas**


**Rotas:**
* /investimentos
* /ativos
* /conta

<br />
<br />

**Endpoints para rota '/investimentos'**
<details>
<summary markdown="span"><strong>Endpoints:</strong></summary><br />

* **POST** /comprar
 
 Recebe um objeto com código do cliente, código do ativo e quantidade de ações a serem compradas

* **POST** /vender

Recebe um objeto com código do cliente, código do ativo e quantidade de ações a serem vendidas
</details>
<br />

**Endpoints para rota '/ativos'**
<details>
<summary markdown="span"><strong>Endpoints:</strong></summary><br />

* **GET** /cliente/{código-do-cliente}

 Neste caso, foi adicionado o endpoint '/cliente' para diferenciar o código do cliente com o código do ativo.
 Informa todos os ativos em carteira do cliente especificado.

* **GET** /{código-do-ativo}

 Retorna o código do ativo, quantidade de ativos disponíveis para compra, valor de compra e valor de venda 
</details>
<br />

**Endpoints para rota '/conta'**
<details>
<summary markdown="span"><strong>Endpoints:</strong></summary><br />

* **GET** /{código-do-cliente}

 Retorna código do cliente, saldo em conta e moeda utilizada.

* **POST** /saque

 Recebe código do cliente e valor a ser sacado.

* **POST** /deposito

 Recebe código do cliente e valor a ser depositado.
</details>

<br />
</details>