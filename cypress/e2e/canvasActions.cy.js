import '../support/commands.js';

describe('Testing Canvas Actions', () => {

  beforeEach(() => {

    // navigate to web application
    cy.visit('https://www.photopea.com')
    cy.get('#cap > :nth-child(5)')
      .should('be.visible')
      .and('have.text', 'Start using Photopea')
      .click();

    // create a test project
    cy.get('[style="margin:0px;  text-align:center"] > :nth-child(1)')
      .should('be.visible')
      .and('have.text', ' New Project')
      .click();
    cy.get('.spread').click();

      // check if project was created
      cy.checkProjectCreation('New Project');

  })



})