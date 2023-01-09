# Começando

## Pré-requisitos

Node.js v18.12.1 ou superior → [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

npm 9.2.0 ou superior → [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

express 4.18.2 ou superior → [https://expressjs.com/](https://expressjs.com/)

@types/express 4.17.15 ou superior → [https://github.com/DefinitelyTyped/DefinitelyTypedhttps://github.com/DefinitelyTyped/DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)

ts-node-dev 2.0.0 ou superior → [https://github.com/wclr/ts-node-dev](https://github.com/wclr/ts-node-dev)

TypeScript 4.9.4 ou superior → [https://www.typescriptlang.org/download](https://www.typescriptlang.org/download)

## Configuração

1. Baixar e instalar o Node.js através do site oficial: [https://nodejs.org/](https://nodejs.org/)
2. Checar a versão do Node e NPM através dos comandos: 

```bash
node -v
node --version

npm -v
npm --version
```

Caso os comandos retornem as versões, prossiga para a instalação das dependências, se não, verifique a instalação do Node.

3. Instale o pacote do Express.

```bash
npm install express
```

4. Instale os tipos de definição do Express

```bash
npm install @types/express
```

5. Instale o TypeScript em modo de desenvolvimento

```bash
npm install typescript --save-dev
```

6. Instale os tipos do TypeScript em modo de desenvolvimento

```bash
npm install -ts-node-dev --save-dev
```

7. Verifique se as versões das dependências estão dentro dos [Pré-requisitos](https://www.notion.so/Come-ando-622a93a0ce0b4ab2be37dc385b4cec20) do projeto

```bash
npm list
npm list -g
```

8. Inicialize as configurações do TypeScript

```bash
npx tcs --init
```

Doc Version: 0.0.1