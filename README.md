# Prova S206-L1 
###### Solved by @Antonio-alexandre

> Prova realizada utilizando o Postman e o Cypress

#### Introdução

Repositório com os testes desenvolvidos para a prova da disciplina **Qualidade de Software - S206**. Neste repositório contém os códigos utilizados, os relatórios de testes e como executá-los.

#### Requisitos mínimos

- Postman
- git
- Cypress

#### Postman

Ao acessar o postman, siga esses passos para conseguir importar a coleção de requisições:
- Abra o seu Workspace
- Ao lado do nome, há um botão escrito "Import". Clique nele
- Procure o arquivo .collection no seu computador

Após isso, você pode começar a realizar cada teste separadamente, ou utilizar a opção Runner para executar todos.

## Newman

Para gerar os relatórios no newman, siga o passo a passo:

# Instalação

Execute esses comandos no terminal do git:

```
npm i newman
npm i newman-reporter-htmlextra
```

# Executar o relatório

Para executar o relatório no newman, basta executar o seguinte comando:

```
newman run Prova-S206-L1.postman_collection.json -r htmlextra
```

Após isso, basta abrir o html gerado.

### Cypress

Para executar os testes no cypress, utilize o comando:

```
npx cypress run
```

## Mochawesome

Caso queira executar o relatório em seu computador, siga o passo a passo:

# Instalação

```
npm i cypress-mochawesome-reporter
```

# Executar o relatório

Para executar os testes no mochawesome, execute o seguinte comando:

```
npx cypress run mochawesome-reporter
```

Basta então abrir o .html gerado pelo mochawesome


