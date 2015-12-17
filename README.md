# Projeto Elrond
Projeto de exemplo de uma arquitetura extensível utilizando Angularjs, JQuery e Underscore.

## Pré-requisitos
Para rodar o projeto, você deve ter instalado:

- Nodejs 0.12 ou superior
- Bower: npm install bower -g
- Grunt: npm install grunt-cli -g
- Git: baixar o instalador do site

Atenção, caso sua rede esteja bloqueando o protocolo git, utilize o comando:

`git config --global url."https://".insteadOf git://`


## Instalação
Para instalar navega na pasta raiz e utilize o comando:

`npm install`


## Execução
Para executar sua aplicação, você deve subir o servidor http através do comando:

`npm start`

## Construção
Durante a construção da aplicação são realizadas diversas tarefas tais como: 

- Limpeza da pasta de distribuição.
- Geração do relatório de análise de código (ESLint).
- Geração do relatório de testes unitários.
- Junção e minificação dos arquivos CSS e JS.
- Geração dos relatórios de documentação do código fonte (JsDoc).

#### Gerar a documentação

`grunt docs`

#### Rodar os testes unitários

`grunt test`

#### Construção completa (documentação, testes unitários e minificação)

`grunt dist  | grunt`
