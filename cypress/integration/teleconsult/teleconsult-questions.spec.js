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

  it('should display offer selected', () => {
    cy.get('#answer-selectOffer').should('have.text', 'Vous avez choisi l\'offre Chat écrit offerte');
  });

  it('should be possible to select speciality medecine generale', () => {
    cy.get('.icon-2-medecine-generale').eq(0).click();
  });

  it('should display thematique selected', () => {
    cy.get('#answer-specialityMedGen').should('have.text', 'Vous avez choisi de consulter un' +
      ' médecin généraliste');
  });

  it('should be possible to set a question', () => {
    cy.get('[formcontrolname="questionText"]').type('ma question que j\'ai très mal a mon bobo, aie aie, ' +
      'allo maman bobo pourquoi tu m\'a fait je suis pas beau');
    cy.get('#btn-goToNext').click();
  });

  it('should display question setted', () => {
    cy.get('#answer-setQuestion').should('have.text', 'Vous posez la question suivante : ' +
      'ma question que j\'ai très mal a mon bobo, aie aie, allo maman bobo pourquoi tu m\'a fait je suis pas beau');
  });

  it('should ask for gender', () => {
    cy.get('#question-setGender').should('have.text', 'De quel sexe êtes-vous ?');
  });

  it('should be possible to set gender', () => {
    cy.get('label[for="genderM"]').click();
    cy.get('#btn-goToNext').click();
  });

  it('should display gender selected', () => {
    cy.get('#answer-setGender').should('have.text', 'Vous êtes de sexe masculin');
  });

  it('should ask for date of birth', () => {
    cy.get('#question-setDateOfBirth').should('have.text', 'Quelle est votre date de naissance ?');
  });

  it('should be possible to set a date of birth', () => {
    // cy.get('[name="dateOfBirth"]').type('07/12/1980');
    cy.get('#btn-goToNext').click();
  });

  it('should ask for height', () => {
    cy.get('#question-setHeight').should('have.text', 'Quelle taille mesurez-vous ?');
  });

  it('should be possible to set height', () => {
    cy.wait(500);
    cy.get('.noUi-handle')
      .trigger('mousedown', {which: 1})
      .trigger('mousemove', {clientX: 450, clientY: 0})
      .trigger('mouseup');

    cy.get('#btn-goToNext').click();
  });

  it('should ask for weight', () => {
    cy.get('#question-setWeight').should('have.text', 'Quel poids faites-vous ?');
  });

  it('should be possible to set weight', () => {
    cy.wait(500);
    cy.get('.noUi-handle')
      .trigger('mousedown', {which: 1})
      .trigger('mousemove', {clientX: 300, clientY: 0})
      .trigger('mouseup');

    cy.get('#btn-goToNext').click();
  });

  it('should ask for current treatments', () => {
    cy.get('#question-setCurrentTreatment').should('have.text', 'Suivez-vous des traitements actuellement ?');
  });

  it('should be possible to set no treatments', () => {
    cy.get('label[for="isCurrentTreatmentN"]').click();
    cy.get('#btn-goToNext').click();
  });

  it('should display no treatments setted', () => {
    cy.get('#answer-setCurrentTreatment').should('have.text', 'Vous ne suivez aucun traitement');
  });

  it('should ask for allergies', () => {
    cy.get('#question-setAllergies').should('have.text', 'Avez-vous des allergies connues ?');
  });

  it('should be possible to set no allergies', () => {
    cy.get('label[for="isAllergiesN"]').click();
    cy.get('#btn-goToNext').click();
  });

  it('should display no allergies setted', () => {
    cy.get('#answer-setAllergies').should('have.text', 'Vous n\'avez aucune allergie connue');
  });

  it('should ask for medical history', () => {
    cy.get('#question-setMedicalHistory').should('have.text', 'Avez-vous des antécédents médicaux ?');
  });

  it('should be possible to set no medical history', () => {
    cy.get('label[for="isMedicalHistoryN"]').click();
    cy.get('#btn-goToNext').click();
  });

  it('should display no medical history', () => {
    cy.get('#answer-setMedicalHistory').should('have.text', 'Vous n\'indiquez aucun antécédent médical');
  });

  it('should ask to confirm and send question', () => {
    cy.get('#question-confirm').should('have.text', 'Confirmer et poser votre question ?');
  });
});
