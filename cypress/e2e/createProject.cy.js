import data from '../fixtures/testData.json';

describe('Start a new project', () => {

  beforeEach(() => {

    // navigate to web application
    cy.visit('/')
    cy.get('#cap').find('button').first()
      .should('be.visible')
      .and('have.text', 'Start using Photopea')
      .click();

  })

  it('Create project: New Project', () => {

    // open New Project dialog
    cy.get('.bhover').first()
      .should('be.visible')
      .and('have.text', ' New Project')
      .click();

    // enter test data
    cy.get('.form').eq(1).find('input').first()
      .clear()
      .type(data.project.name);
    cy.get('.form').eq(1).find('input').eq(1)
      .clear()
      .type(data.project.width);
    cy.get('.form').eq(1).find('input').eq(2)
      .clear()
      .type(data.project.height);

      // create project
      cy.get('.spread').click();

      // check if project was created and test data
      cy.checkProjectCreation(`${data.project.name}.psd`);
        // this is suboptimal, better element to check resolution should be found
      cy.wait(100);
      cy.get('body').type('{ctrl}{alt}i');
      cy.get('.fitem.rangedropinput').first().find('input').should('have.value', data.project.width);
      cy.get('.fitem.rangedropinput').eq(1).find('input').should('have.value', data.project.height); 
  })

  it('Create project: Drag and Drop', () => {

  // open Drag and Drop project
  cy.contains('div', 'Drop any files here')
    .should('be.visible')
    .and('have.text', 'Drop any files here')
    .selectFile(data.project.filepath, {action: "drag-drop"});

  // check project was created
  cy.checkProjectCreation(data.project.filename);

  })

  it('Create project: From Computer', () => {

    // open file from computer
    cy.get('.bhover').eq(1)
      .should('be.visible')
      .and('have.text', ' Open From Computer')
      .click();
    cy.get('input[type="file"]').selectFile(data.project.filepath, { force: true });

    // check project was created
    cy.checkProjectCreation(data.project.filename);

  })

})