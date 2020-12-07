/// <reference types="Cypress" />
describe('Locating Elements', function(){
    it('Verify types of locators(Search Type and Search Button)', function(){
        cy.visit("http://localhost:3000/resources") // Opens the URL
        cy.url().should('include','resources') // Check if it's right resource page
        cy.get('input[name="search"]').type("oo") // Type Searching
        cy.get('.input-group-append').click() // click on Search button
    })

    it('View More Button after search', function(){
        cy.visit("http://localhost:3000/login") // Visit URL
        cy.url().should('include','login') //Verify URL should include localhost:30000

        cy.get('input[name=username]').should('be.visible').should('be.enabled').type("teo1")
        cy.get('input[name=password]').should('be.visible').should('be.enabled').type("1234567")

        //cy.get('.btn').should('be.visible').click()
        cy.visit("http://localhost:3000/resources") // Opens the URL
        cy.url().should('include','resources') // Check if it's right resource page
        cy.get('input[name="search"]').type("oo") // Type Searching
        cy.get('.input-group-append').click() // click on Search button
        
    })

})