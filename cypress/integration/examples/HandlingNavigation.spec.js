

describe('MyTestSuite', function(){
    it ('Navigations Tests', function(){
        cy.visit('http://localhost:3000/')
        

        cy.title().should('eq','React App') // Check title of Home Page

        cy.get('.btn').contains('Login').click() // Check Login Button 
        cy.title().should('eq','React App') // Check title after clicking

        cy.go('back') //go back to homepage
        cy.title().should('eq','React App') // Check title Home

        cy.go('forward')
        cy.title().should('eq','React App') // Reg page

        cy.go('back') //go back to homepage
        cy.title().should('eq','React App') // Check title Home

        cy.get('.btn').contains('Profile').click() // Check Profile Button 
        cy.title().should('eq','React App') // Check title after clicking

        cy.go(-1) //back to home page. -1 = backward
        cy.title().should('eq','React App') // Check title Home

        cy.go(1)  // 1 = forward
        cy.title().should('eq','React App') //go back to Profile Page

        cy.go(-1) //back to home page. -1 = backward
        cy.title().should('eq','React App') // Check title Home

        cy.get('.btn').contains('Favorite List').click() // Check Favorite Button 
        cy.title().should('eq','React App') // Check title after clicking

        cy.go(-1) //back to home page. -1 = backward
        cy.title().should('eq','React App') // Check title Home

        cy.go(1)  // 1 = forward
        cy.title().should('eq','React App') //go back to Profile Page

        cy.go(-1) //back to home page. -1 = backward
        cy.title().should('eq','React App') // Check title Home

        it('cy.reload() - reload the page', () => {
            // http://localhost:3000/
            cy.reload()
        
            // reload the page without using the cache
            cy.reload(true)
        })

        cy.get('.Landingpage').contains('Login').click()

    })
})