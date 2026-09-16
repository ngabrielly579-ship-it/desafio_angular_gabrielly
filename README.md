# Desafio 7 - Dashboard de Veículos Ford — Angular

**Aluna:** Gabrielly Sacramento

Este projeto apresenta um painel para consulta e acompanhamento de veículos Ford. A aplicação foi construída em Angular e utiliza uma API REST para realizar o login e fornecer as informações exibidas no dashboard.

## Funcionalidades

O sistema possui:

* autenticação com usuário e senha;
* opção para manter o usuário conectado;
* página inicial com acesso ao painel;
* menu de navegação e função de logout;
* seleção entre diferentes modelos de veículos;
* exibição do total de vendas;
* quantidade de veículos conectados;
* número de atualizações de software;
* alteração da imagem conforme o veículo selecionado;
* pesquisa de informações utilizando o código VIN;
* tabela com odômetro, combustível, status e localização.

No desenvolvimento foram utilizados Angular, Bootstrap, Services, Components, rotas protegidas e recursos como `ngModel`, `ngIf` e `ngFor`. O tratamento das informações também utiliza operadores do RxJS.

## Estrutura do projeto

O projeto está dividido em duas partes:

```text
backend/    API e banco de dados
frontend/   aplicação desenvolvida em Angular
```

As imagens dos veículos estão localizadas em:

```text
frontend/src/assets/img
```

Modelos disponíveis:

* Ford Ranger;
* Ford Mustang;
* Ford Territory;
* Ford Bronco Sport.

## Como executar

É necessário ter o Node.js instalado no computador.

No Windows, execute o arquivo:

```text
INICIAR_PROJETO.bat
```

Esse arquivo inicia o backend e o frontend em janelas separadas. Na primeira execução, as dependências serão instaladas automaticamente.

Quando o carregamento terminar, acesse:

```text
http://localhost:4200
```

## Dados para login

```text
Usuário: admin
Senha: 123456
```

## Inicialização manual

Para iniciar a API, abra um terminal na pasta do projeto e execute:

```bash
cd backend
npm install
npm start
```

A API ficará disponível em:

```text
http://localhost:3000
```

Em outro terminal, execute o frontend:

```bash
cd frontend
npm install
npm start
```

A aplicação ficará disponível em:

```text
http://localhost:4200
```

## Consulta por VIN

Um código disponível para testar a pesquisa é:

```text
2FRHDUYS2Y63NHD22454
```

A consulta apresenta as seguintes informações:

* código VIN;
* quilometragem registrada;
* nível de combustível;
* situação do veículo;
* latitude;
* longitude.

## Rotas utilizadas pela aplicação

```text
POST /login
GET /vehicle
POST /vehicleData
```

O backend utiliza Express e o banco de dados `data2.db` para disponibilizar as informações necessárias ao funcionamento do dashboard.
