/// <reference types="Cypress" />

describe('UI Elements', function()
{
    it('Verify Inputbox & Login Button (Success)', function()
    {
        cy.visit("http://localhost:3000/login") // Visit URL
        cy.url().should('include','login') //Verify URL should include localhost:30000

        cy.get('input[name=username]').should('be.visible').should('be.enabled').type("teo1")
        cy.get('input[name=password]').should('be.visible').should('be.enabled').type("1234567")

        cy.get('.btn').should('be.visible').click()

    })

    it('Verify Inputbox & Login Button (Failed-username)', function()
    {
        cy.visit("http://localhost:3000/login") // Visit URL
        cy.url().should('include','login') //Verify URL should include localhost:30000

        cy.get('input[name=username]').should('be.visible').should('be.enabled').type("aaaaaaaaa")
        cy.get('input[name=password]').should('be.visible').should('be.enabled').type("1234567")

        cy.get('.btn').should('be.visible').click()
    })

    it('Verify Inputbox & Login Button (Failed-password)', function()
    {
        cy.visit("http://localhost:3000/login") // Visit URL
        cy.url().should('include','login') //Verify URL should include localhost:30000

        cy.get('input[name=username]').should('be.visible').should('be.enabled').type("teo1")
        cy.get('input[name=password]').should('be.visible').should('be.enabled').type("123456789")

        cy.get('.btn').should('be.visible').click()
    })

    it('Verify Inputbox & Register Button for Register Page (Failed email)', function()
    {
        cy.visit("http://localhost:3000/register") // Visit URL
        cy.url().should('include','register') //Verify URL should include localhost:30000

        cy.get('input[name=username]').should('be.visible').should('be.enabled').type("teo1")
        cy.get('input[name=email]').should('be.visible').should('be.enabled').type("teo1")
        cy.get('input[name=password]').should('be.visible').should('be.enabled').type("1234567")

        cy.get('.btn').should('be.visible').click()

    })

    it('Verify Inputbox & Register Button for Register Page (Duplicated Username)', function()
    {
        cy.visit("http://localhost:3000/register") // Visit URL
        cy.url().should('include','register') //Verify URL should include localhost:30000

        cy.get('input[name=username]').should('be.visible').should('be.enabled').type("teo1")
        cy.get('input[name=email]').should('be.visible').should('be.enabled').type("teo1@gmail.com")
        cy.get('input[name=password]').should('be.visible').should('be.enabled').type("1234567")

        cy.get('.btn').should('be.visible').click()

    })

    it('Verify Inputbox & Register Button for Register Page (Duplicated Email)', function()
    {
        cy.visit("http://localhost:3000/register") // Visit URL
        cy.url().should('include','register') //Verify URL should include localhost:30000

        cy.get('input[name=username]').should('be.visible').should('be.enabled').type("teo1aaaaaaaaaaaaa")
        cy.get('input[name=email]').should('be.visible').should('be.enabled').type("teo1@gmail.com")
        cy.get('input[name=password]').should('be.visible').should('be.enabled').type("1234567")

        cy.get('.btn').should('be.visible').click()

    })

    it('Verify Inputbox & Register Button for Register Page (Failed username (empty))', function()
    {
        cy.visit("http://localhost:3000/register") // Visit URL
        cy.url().should('include','register') //Verify URL should include localhost:30000

        cy.get('input[name=username]').should('be.visible').should('be.enabled').type("")
        cy.get('input[name=email]').should('be.visible').should('be.enabled').type("aaaaaa@sjsu.edu")
        cy.get('input[name=password]').should('be.visible').should('be.enabled').type("1234567")

        cy.get('.btn').should('be.visible').click()

    })

    it('Verify Inputbox & Register Button for Register Page (Failed password (empty))', function()
    {
        cy.visit("http://localhost:3000/register") // Visit URL
        cy.url().should('include','register') //Verify URL should include localhost:30000

        cy.get('input[name=username]').should('be.visible').should('be.enabled').type("teo1")
        cy.get('input[name=email]').should('be.visible').should('be.enabled').type("aaaaaa@sjsu.edu")
        cy.get('input[name=password]').should('be.visible').should('be.enabled').type("")

        cy.get('.btn').should('be.visible').click()

    })

    it('Verify Inputbox & Register Button for Register Page (Failed email (empty))', function()
    {
        cy.visit("http://localhost:3000/register") // Visit URL
        cy.url().should('include','register') //Verify URL should include localhost:30000

        cy.get('input[name=username]').should('be.visible').should('be.enabled').type("teo1")
        cy.get('input[name=email]').should('be.visible').should('be.enabled').type("")
        cy.get('input[name=password]').should('be.visible').should('be.enabled').type("1234567")

        cy.get('.btn').should('be.visible').click()

    })

})