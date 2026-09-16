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

API: `http://localhost:3000`

### Terminal 2 - Angular

```bash
cd frontend
npm install
npm start
```

Site: `http://localhost:4200`

## Como enviar para o GitHub

Execute `ENVIAR_PARA_GITHUB.bat` e cole o link HTTPS do repositório da Gabrielly quando solicitado. Na primeira utilização, o GitHub poderá abrir o navegador para solicitar autorização.

## VIN para teste

`2FRHDUYS2Y63NHD22454`

## Endpoints utilizados

- `POST http://localhost:3000/login`
- `GET http://localhost:3000/vehicle`
- `POST http://localhost:3000/vehicleData`

## Observação sobre o arquivo de suporte

O ZIP fornecido contém o banco de dados e o `server.js` original, porém as pastas internas da API vieram sem os arquivos necessários para o servidor original funcionar. Por isso, a pasta `backend` deste projeto contém uma API Express simples que usa o mesmo banco `data2.db` e disponibiliza os endpoints exigidos pelo desafio.
