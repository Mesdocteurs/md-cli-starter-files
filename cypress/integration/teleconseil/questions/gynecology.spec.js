describe('Gynecology', () => {

  it('should be possible to go to the page', () => {
    cy.cookieConsent();
    cy.login('dev+jp@mesdocteurs.com', 'tototoO0');
    cy.visit('/question/nouvelle');
    cy.url({timeout: 10000}).should('contain', '/question/nouvelle');
  });

  it('should ask to choose an offer', () => {
    cy.get('#question-selectOffer').contains('Bonjour José, je suis votre assistant virtuel, sélectionnez ' +
      'ci-dessous comment contacter un médecin');
  });

  it('should be possible to select question offer', () => {
    cy.get('#btn-visio').click();
  });

  it('should display offer selected', () => {
    cy.get('#answer-selectOffer').contains('Vous avez choisi l\'offre Appel Visio à 2,00€ la minute');
  });

  it('should be possible to select speciality other', () => {
    cy.get('.speciality-item-specialiste').click();
  });

  it('should display other speciality chosen', () => {
    cy.get('#answer-specialityMedGen').contains('Vous avez choisi de consulter un spécialiste');
  });

  it('should be possible to set speciality', () => {
    cy.get('#speciality-customer-card-1').click();
  });

  it('should display speciality selected', () => {
    cy.get('#answer-specialitySpecialist').contains('Vous avez choisi de consulter un Gynécologue');
  });

  it('should be possible to set a question', () => {
    cy.get('[formcontrolname="questionText"]').type('ma question que j\'ai très mal a mon bobo, aie aie,' +
      ' allo maman bobo pourquoi tu m\'a fait je suis pas beau');
    cy.get('#btn-goToNext').click();
  });

  it('should be possible to set a date of birth', () => {
    cy.get('[name="dateOfBirth"]').type('07/12/1980');
    cy.get('#btn-goToNext').click();
  });

  it('should ask for height', () => {
    cy.get('#question-setHeight').contains('Quelle taille mesurez-vous ?');
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
    cy.get('#question-setWeight').contains('Quel poids faites-vous ?');
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
    cy.get('#question-setCurrentTreatment').contains('Suivez-vous des traitements actuellement ?');
  });

  it('should be possible to set no treatments', () => {
    cy.get('label[for="isCurrentTreatmentN"]').click();
    cy.get('#btn-goToNext').click();
  });

  it('should display no treatments setted', () => {
    cy.get('#answer-setCurrentTreatment').contains('Vous ne suivez aucun traitement');
  });

  it('should ask for allergies', () => {
    cy.get('#question-setAllergies').contains('Avez-vous des allergies connues ?');
  });

  it('should be possible to set no allergies', () => {
    cy.get('label[for="isAllergiesN"]').click();
    cy.get('#btn-goToNext').click();
  });

  it('should display no allergies setted', () => {
    cy.get('#answer-setAllergies').contains('Vous n\'avez aucune allergie connue');
  });

  it('should ask for medical history', () => {
    cy.get('#question-setMedicalHistory').contains('Avez-vous des antécédents médicaux ?');
  });

  it('should be possible to set no medical history', () => {
    cy.get('label[for="isMedicalHistoryN"]').click();
    cy.get('#btn-goToNext').click();
  });

  it('should ask if pregnancy', () => {
    cy.get('#question-setPregnancy').contains('Êtes-vous enceinte ?');
  });

  it('should be possible to set not pregnant', () => {
    cy.get('label[for="PregnancyN"]').click();
    cy.get('#btn-goToNext').click();
  });

  it('should display pregnancy not selected', () => {
    cy.get('#answer-setPregnancy').contains('Vous n\'êtes pas enceinte');
  });

  it('should be possible to set profession', () => {
    cy.get('#btn-goToNext').click();
  });

  it('should be possible to select card', () => {
    cy.get('#btn-goToNext').click();
  });

  it('should ask to confirm and send question', () => {
    cy.get('#question-confirm').contains('Confirmer et poser votre question ?');
  });
});
