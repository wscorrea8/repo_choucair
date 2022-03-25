describe('Pruebas Pagina de inicio ', function(){

it('Validación registro Usuario', function(){

        cy.visit('https://www.utest.com/')
        cy.get('.unauthenticated-nav-bar__sign-up').click()
        cy.get('#firstName').type('william')
        cy.get('#lastName').type('correa')
        cy.get('#email').type('sercorrea@gmail.com')
        cy.get('#birthMonth').select('May')
        cy.get('#birthDay').select(15)
        cy.get('#birthYear').select(27)
        cy.get('.text-right > .btn').click()
        cy.get('#city').click()
        cy.get('#city').type('Pereira, Risaralda, Colombia')
        cy.focused().click()
        //cy.get('#city').contains('Pereira,Risaralda,Colombia').click()
        cy.get('#zip').type(66001)

  })
 })