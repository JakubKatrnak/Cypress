
Cypress.Commands.add('checkProjectCreation', (name) => {
    cy.get('.mainblock > .block > .panelhead > .active')
    .should('exist')
    .and('have.text', name);
})
