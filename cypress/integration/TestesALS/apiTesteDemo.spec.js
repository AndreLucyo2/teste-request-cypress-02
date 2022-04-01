
/// <reference types='cypress'/>
describe('Basic Test API #1', () => {

    it('BODY teste Length - TESTE', () => {

        //Teste se o tamanho da body da resposta da API esta com o tamanho esperado
        cy.request('https://fakerestapi.azurewebsites.net/api/v1/Books')
            .its('body') //Acessa ...
            .should('have.length', 200)
    });

    it('Request Status - TESTE', () => {
        //Testes a resuisição esta retornando 200
        cy.request('https://fakerestapi.azurewebsites.net/api/v1/Books')
            .its('status') //Acessa ...
            .should('eq', 200)

    });

    it('Headers/Cotnem-Type - TESTE', () => {
        //Testes a resuisição esta retornando 200
        cy.request('https://fakerestapi.azurewebsites.net/api/v1/Books')
            .its('headers')//Acessa ...
            .its('content-type')//Acessa ...
            .should('include', 'application/json')
            .and('include', 'charset=utf-8')

    });

    const payloadAllBook = require('../TestesALS/payloads/ALLBooks.json')

    it('Itens Iniciais a partir do EndPoin da API', () => {

        cy.request('https://fakerestapi.azurewebsites.net/api/v1/Books')
            .its('body') //Acessa ...
            .should('deep.equal', payloadAllBook)
    });


    it.only('Valida o SCHEMA do Json retorna conforme prometido na requisição', () => {

        cy.request('https://fakerestapi.azurewebsites.net/api/v1/Books')
            .its('body') //Acessa ...
            .each(value => {
                //Verifica se o json retornado esta com o echema certo:
                expect(value).to.have.all.keys('id', 'title', 'description', 'pageCount', 'excerpt', 'publishDate')
            })
    });



});