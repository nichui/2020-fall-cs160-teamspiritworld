// return true test
describe('My First Test', function(){
    it ('Verify Title of the Page-True', function(){
        cy.visit('http://localhost:3000/')
        cy.title().should('eq','React App')

    })
})

//return false test
describe('My First Test-False', function(){
    it ('Verify Title of the Page', function(){
        cy.visit('http://localhost:3000/')
        cy.title().should('eq','Reac App')

    })
})