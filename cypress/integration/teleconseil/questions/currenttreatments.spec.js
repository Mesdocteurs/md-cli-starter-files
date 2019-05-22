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
    cy.get('#btn-goToNext').click();
    cy.get('label[for="genderM"]').click();
    cy.get('#btn-goToNext').click();
    cy.get('[name="dateOfBirth"]').click();
    cy.get('[name="dateOfBirth"]').type('07/12/1980');
    cy.get('#btn-goToNext').click();
    cy.wait(500);
    cy.get('.noUi-handle')
      .trigger('mousedown', {which: 1})
      .trigger('mousemove', {clientX: 450, clientY: 0})
      .trigger('mouseup');
    cy.get('#btn-goToNext').click();
    cy.wait(500);
    cy.get('.noUi-handle')
      .trigger('mousedown', {which: 1})
      .trigger('mousemove', {clientX: 300, clientY: 0})
      .trigger('mouseup');
    cy.get('#btn-goToNext').click();
  });

  it ('should be possible to set current treatment', () => {
    cy.get('label[for="isCurrentTreatmentO"]').click();
    cy.get('[formcontrolname="currentTreatment"]').type('Aspirine 8x jour');
    cy.get('#btn-goToNext').click();
  });

  it ('should display treatments setted', () => {
    cy.get('#answer-setCurrentTreatment').should('have.text', 'Vous suivez actuellement les traitements suivants : Aspirine 8x jour');
  });

  it ('should ask for allergies', () => {
    cy.get('#question-setAllergies').should('have.text', 'Avez-vous des allergies connues ?');
  });

  it ('should be possible to set allergies', () => {
    cy.get('label[for="isAllergiesO"]').click();
    cy.get('[formcontrolname="allergies"]').type('choucroute');
    cy.get('#btn-goToNext').click();
  });

  it ('should display allergies setted', () => {
    cy.get('#answer-setAllergies').should('have.text', 'Vous avez les allergies suivantes : choucroute');
  });

  it ('should be possible to set medical history', () => {
    cy.get('label[for="isMedicalHistoryO"]').click();
    cy.get('[formcontrolname="medicalHistory"]').type('Bras de secours dans le dos');
    cy.get('#btn-goToNext').click();
  });

  it ('should display historic setted', () => {
    cy.get('#answer-setMedicalHistory').should('have.text', 'Vous indiquez les antécedents medicaux suivants : Bras de secours dans le dos');
  });
});
