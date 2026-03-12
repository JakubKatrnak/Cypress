import '../support/commands.js';
import data from '../fixtures/testData.json';

describe('Testing Canvas Actions', () => {

  beforeEach(() => {

    // navigate to web application
    cy.visit('https://www.photopea.com');
    cy.get('#cap > :nth-child(5)')
      .should('be.visible')
      .and('have.text', 'Start using Photopea')
      .click();

    // create a new project
    cy.get('.bhover').first()
      .should('be.visible')
      .and('have.text', ' New Project')
      .click();
    cy.get('.spread').click();

    // check the project was created
    cy.checkProjectCreation('New Project.psd');

  })

  it('Draw on canvas and export', () => {


    // create a box
    cy.get('[title="Rectangle (U)"]').click();
    cy.get('.pbody').find('canvas').first()
      .click(200, 200, {force: true});
    cy.get('.fitem.spread.bbtn').click();

    // export file
    cy.get('.topbar').contains('File').click();
    cy.get('.contextpanel.cp_light').contains('Export as').click();
    cy.get('.contextpanel.cp_light').eq(1).contains('PNG').click();
    cy.get('.fitem.bbtn').contains('Save').click();

    // compare image
    cy.task('compareImages', {imgExport: data.canvas.exportedfile,imgExpected: data.canvas.comparefile}).then((imgDif) =>{

      expect(
        imgDif,
      ).to.equal(0);

    })


  })


})
