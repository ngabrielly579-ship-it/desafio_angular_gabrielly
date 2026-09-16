# Desafio 7 - Angular | Dashboard Ford

Versão pessoal desenvolvida para Gabrielly Sacramento com Angular e os arquivos de suporte do projeto Ford.

## O que foi implementado

- Página de login com usuário e senha.
- Login usando a API REST.
- Opção "Logar automaticamente".
- Página Home com imagem de fundo, mensagem de boas-vindas, menu e link para o Dashboard.
- Logout.
- Dashboard com seleção de veículo.
- Cards com total de vendas, veículos conectados e atualizações de software.
- Troca da imagem conforme o modelo selecionado.
- Busca de veículo pelo VIN.
- Tabela com VIN, odômetro, combustível, status, latitude e longitude.
- Uso de Angular Modules, Components e Services.
- Uso de Bootstrap.
- Uso de ngModel, ngIf e ngFor.
- Uso de RxJS com map, pluck, debounceTime, filter e distinctUntilChanged.

## Imagens

As imagens em `frontend/src/assets/img` são as mesmas disponibilizadas no ZIP da atividade:

- ranger.png
- mustang.png
- territory.png
- broncoSport.png
- ford.png

## Como iniciar no Windows

A forma mais simples é executar:

`INICIAR_PROJETO.bat`

Ele abre a API e o Angular em duas janelas de terminal. Na primeira execução, também instala as dependências com `npm install`.

Depois acesse:

`http://localhost:4200`

## Login solicitado no enunciado

Usuário: `admin`

Senha: `123456`

## Execução manual

### Terminal 1 - API

```bash
cd backend
npm install
npm start
```

API: `http://localhost:3001`

### Terminal 2 - Angular

```bash
cd frontend
npm install
npm start
```

Site: `http://localhost:4200`

## VIN para teste

`2FRHDUYS2Y63NHD22454`

## Endpoints utilizados

- `POST http://localhost:3001/login`
- `GET http://localhost:3001/vehicles`
- `POST http://localhost:3001/vehicleData`

## API utilizada

O backend foi adaptado a partir da API Sprint 7 disponibilizada em `JMarcelloDias/Api-Sprint7`. A API Express fornece login, lista de veículos, imagens e consulta por VIN na porta 3001.
