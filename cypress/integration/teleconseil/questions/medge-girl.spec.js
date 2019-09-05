describe('Médecine générale for a woman under 15 years old', () => {

  it('should be possible to go to the page', () => {
    cy.cookieConsent();
    cy.login('dev+sarah@mesdocteurs.com', 'tototoO0');
    cy.visit('/question/nouvelle');
    cy.wait(2000);
    cy.url().should('contain', '/question/nouvelle');
  });

  it('should be possible to select question offer', () => {
    cy.get('#btn-question10').click();
  });

  it('should be possible to select speciality medecine generale', () => {
    cy.get('.icon-2-medecine-generale').eq(0).click();
  });

  it('should be possible to set a question', () => {
    cy.get('[formcontrolname="questionText"]').type('ma question que j\'ai très mal a mon bobo, aie aie, ' +
      'allo maman bobo pourquoi tu m\'a fait je suis pas beau');
    cy.get('#btnNext').click();
  });

  it('should be possible to set a date of birth', () => {
    cy.get('[name="dateOfBirth"]').type('07122012');
    cy.get('#btnNext').click();
  });

  it('should be possible to set height', () => {
    cy.wait(500);
    cy.get('.noUi-handle')
      .trigger('mousedown', {which: 1})
      .trigger('mousemove', {clientX: 450, clientY: 0})
      .trigger('mouseup');

    cy.get('#btnNext').click();
  });

  it('should be possible to set weight', () => {
    cy.wait(500);
    cy.get('.noUi-handle')
      .trigger('mousedown', {which: 1})
      .trigger('mousemove', {clientX: 300, clientY: 0})
      .trigger('mouseup');

    cy.get('#btnNext').click();
  });

  it('should be possible to set no treatments', () => {
    cy.get('label[for="isCurrentTreatmentN"]').click();
    cy.get('#btnNext').click();
  });

  it('should be possible to set no allergies', () => {
    cy.get('label[for="isAllergiesN"]').click();
    cy.get('#btnNext').click();
  });

  it('should be possible to set no medical history', () => {
    cy.get('label[for="isMedicalHistoryN"]').click();
    cy.get('#btnNext').click();
  });

  it('should be possible to set the current country', () => {
    cy.get('ng-select').click();
    cy.get('#country').type('Fran');
    cy.get('span').contains('France').click();
    cy.get('#btnNext').click();
  });

  it('should display the confirm question button', () => {
    cy.get('#btnSubmit').should('exist');
  });
});
