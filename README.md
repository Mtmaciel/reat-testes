npm run-script backend
npm start

react-test-libray -> cuida da manipulação do dom(tela), renderizando objetos, procurando elementos e realizando eventos
jest -> cria mocks para as funçoes e dados que serao usados alem de ser responsavel pela validacao dos testes(expect)

modelo de arquivos {componente}.test

describe -> cria um conjusto de teste
it ou test -> cria um teste em si

imports import { fireEvent, render, screen } from "@testing-library/react";

render -> simula a renderizacao em tela do componente
screen -> pega as funções da renderezição e permite achar elementos em tela com os conjuntos de queries 
		--https://testing-library.com/docs/queries/about
fireEvent -> simula eventos em tela no codigo 
		--https://testing-library.com/docs/dom-testing-library/api-events
		
snapshot -> Cria uma simulação do html que deve ser gerado e confere se é consistente(se não há nenhum snapshot para ser comparado a cprimeira vez que testar ele irá criar o snapshot)

uma opção para o react-test-library é o enzyme
https://github.com/enzymejs/enzyme