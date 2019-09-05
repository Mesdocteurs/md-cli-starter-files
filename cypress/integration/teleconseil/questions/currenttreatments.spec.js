describe('Current treatments and medical history tests', () => {

  it('should be possible to go to the page', () => {
    cy.cookieConsent();
    cy.login('dev+jp@mesdocteurs.com', 'tototoO0');
    cy.visit('/question/nouvelle');
    cy.wait(2000);
    cy.url().should('contain', '/question/nouvelle');
  });

  it ('should fill form to current treatment question', () => {
    cy.get('#btn-question10').click();
    cy.get('.icon-2-medecine-generale').eq(0).click();
    cy.get('[formcontrolname="questionText"]').type('ma question que j\'ai très mal a mon bobo, aie ' +
      'aie, allo maman bobo pourquoi tu m\'a fait je suis pas beau');
    cy.get('#btnNext').click();
    cy.get('[name="dateOfBirth"]').click();
    cy.get('[name="dateOfBirth"]').type('07121980');
    cy.get('#btnNext').click();
    cy.wait(1000);
    cy.get('.noUi-handle')
      .trigger('mousedown', {which: 1})
      .trigger('mousemove', {clientX: 450, clientY: 0})
      .trigger('mouseup');
    cy.get('#btnNext').click();
    cy.wait(1000);
    cy.get('.noUi-handle')
      .trigger('mousedown', {which: 1})
      .trigger('mousemove', {clientX: 300, clientY: 0})
      .trigger('mouseup');
    cy.get('#btnNext').click();
  });

  it ('should be possible to set current treatment', () => {
    cy.get('label[for="isCurrentTreatmentO"]').click();
    cy.get('[formcontrolname="currentTreatment"]').type('Aspirine 8x jour');
    cy.get('#btnNext').click();
  });

  it ('should be possible to set allergies', () => {
    cy.get('label[for="isAllergiesO"]').click();
    cy.get('[formcontrolname="allergies"]').type('choucroute');
    cy.get('#btnNext').click();
  });

  it ('should be possible to set medical history', () => {
    cy.get('label[for="isMedicalHistoryO"]').click();
    cy.get('[formcontrolname="medicalHistory"]').type('Bras de secours dans le dos');
    cy.get('#btnNext').click();
  });

  it('should be possible to set the current country', () => {
    // france is prefilled
    cy.wait(600);
    cy.get('#btnNext').click();
  });

  it('should display the confirm question button', () => {
    cy.get('#btnSubmit').should('exist');
  });
});
