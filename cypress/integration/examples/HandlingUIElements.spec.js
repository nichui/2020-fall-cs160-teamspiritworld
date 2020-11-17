/// <reference types="cypress" />

describe('UI Elements', function()
{
    it ('Verify Inputbox & Radio Buttons', function(){
        cy.visit("http://localhost:3000/Signin") // Visit URL
        cy.url().should('include','Signin') //Verify URL should include 'Sign in'
        cy.title().should('eq','React App') //Title verification

        cy.get('input[name=email]')
        .should('be.visible')
        .should('be.enabled')
        .type("abcd2326576896794578gsdgdfhdfh@gmail.com");
        

        cy.get('input[name=password]')
        .should('be.visible')
        .should('be.enabled')
        .type("mercury123");


        cy.get('.btn') // Sign In button
        .contains('Sign in')
        .should('be.visible')
        .click()

        cy.get('.btn') // Sign In button
        .contains('Register')
        .should('be.visible')
        .click()

        

        //Radio Button
        
        

    })
})