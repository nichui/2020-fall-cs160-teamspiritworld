describe('My Test Suite', function(){
    it('Verify Title of the Page', function(){
        cy.visit('http://localhost:3000/')
        cy.title().should('eq','Spirit World')
    })
})