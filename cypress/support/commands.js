// Check if the file was created correctly via name 
Cypress.Commands.add('checkProjectCreation', (name) => {
    cy.get('.mainblock > .block > .panelhead > .active')
    .should('exist')
    .and('have.text', name);
})
