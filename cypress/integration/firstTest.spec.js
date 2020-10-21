/// <reference types="cypress" />

describe('Form input', () => {
    it('visit form', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
    });

    it('Fill Inline form', () => {
        cy.get('input[placeholder="Jane Doe"]').type('Muhammad Rizqi Mahendra')
        cy.get('[placeholder="Email"][type="text"]').type('mahee6232@gmail.com')
        cy.get('.custom-checkbox').first().click()
    });

    it('Fill Using the Grid', () => {
        cy.get('#inputEmail1').type('mahee6232@gmail.com')
        cy.get('#inputPassword2').type('123456')
        cy.get('.text').contains('Option 1').click()
        cy.get('.text').contains('Option 2').click()
    });

    it('Fill Basic form', () => {
        cy.get('#exampleInputEmail1').type('mahee6232@gmail.com')
        cy.get('#exampleInputPassword1').type('123456')
        cy.get('.custom-checkbox').eq(1).click()
    });

    it('Fill Form without labels', () => {
        cy.get('[placeholder="Recipients"]').type('Rizqi Mahendra')
        cy.get('[placeholder="Subject"]').type('Asalamualaikum')
        cy.get('textarea[placeholder="Message"]').type('You gonna catch a cold from the ice inside your soul')
    });

    it('Fill Horizontal form', () => {
        cy.get('#inputEmail3').type('mahee6232@gmail.com')
        cy.get('#inputPassword3').type('123456')
        cy.get('.custom-checkbox').last().click()
    });

    it('Fill Block form', () => {
        cy.get('#inputFirstName').type('Rizqi')
        cy.get('#inputLastName').type('Mahendra')
        cy.get('#inputEmail').type('mahee6232@gmail.com')
        cy.get('#inputWebsite').type('www.mul-otov.com')
    });
})