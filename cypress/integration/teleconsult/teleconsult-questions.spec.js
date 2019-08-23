describe('Médecine générale for a man', () => {

  it('should be possible to go to the page by auth', () => {
    cy.cookieConsent();
    cy.visit('https://0.0.0.0:3001/test/PARTNER_NAMESPACE');
    cy.url({timeout: 10000}).should('contain', '/question/nouvelle');
  });

  it('should display 2 consentments to accept', () => {
    cy.get('h1.display-4').contains('Conditions d\'utilisation');
    cy.get('[type="submit"]').should('have.attr', 'disabled');
    cy.get('.form-check-label').eq(0).click();
    cy.get('.form-check-label').eq(1).click();
    cy.get('[type="submit"]').should('not.have.attr', 'disabled');

    cy.get('[type="submit"]').click();
  });

  it('should be possible to select question offer', () => {
    cy.get('#btn-chatTeleconsultation').click();
  });

  it('should be possible to select speciality medecine generale', () => {
    cy.get('.icon-2-medecine-generale').eq(0).click();
  });

  it('should be possible to set a question', () => {
    cy.get('[formcontrolname="questionText"]').type('ma question que j\'ai très mal a mon bobo, aie aie, ' +
      'allo maman bobo pourquoi tu m\'a fait je suis pas beau');
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

  it('should display the confirm question button', () => {
    cy.get('#btnSubmit').should('exist');
  });
});
