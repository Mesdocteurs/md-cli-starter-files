describe('Should be possible to ask a chat pediatry', () => {

  it('should be possible to go to the page', () => {
    cy.cookieConsent();
    cy.login('dev+jp@mesdocteurs.com', 'tototoO0');
    cy.visit('/question/nouvelle');
    cy.wait(2000);
    cy.url().should('contain', '/question/nouvelle');
  });

  it('should be possible to select chat offer', () => {
    cy.get('#btn-chat').click();
  });

  it ('should be possible to select speciality other', () => {
    cy.get('.icon-2-specialiste').click();
  });

  it ('should display other speciality chosen', () => {
    cy.get('#answer-specialityMedGen').contains('Vous avez choisi de consulter un spécialiste');
  });

  it ('should be possible to set speciality', () => {
    cy.get('#speciality-customer-card-5').click();
  });

  it ('should display speciality selected', () => {
    cy.get('#answer-specialitySpecialist').contains('Vous avez choisi de consulter un Pédiatre');
  });

  it ('should ask to write a question', () => {
    cy.get('#question-setQuestion').contains('Veuillez décrire le symptôme de l\'enfant');
  });

  it ('should be possible to set a question', () => {
    cy.get('[formcontrolname="questionText"]').type('ma question que j\'ai très mal a mon bobo, aie aie, allo maman bobo pourquoi tu m\'a fait je suis pas beau');
    cy.get('#btn-goToNext').click();
  });

  it ('should ask for gender', () => {
    cy.get('#question-setGender').contains('De quel sexe est l\'enfant ?');
  });

  it ('should be possible to set gender', () => {
    cy.get('label[for="genderM"]').click();
    cy.get('#btn-goToNext').click();
  });

  it ('should display gender selected', () => {
    cy.get('#answer-setGender').contains('L\'enfant est de sexe masculin');
  });

  it ('should ask for date of birth', () => {
    cy.get('#question-setDateOfBirth').contains('Quel est l\'âge de l\'enfant ?');
  });

  it ('should be possible to set a date of birth', () => {
    cy.get('[name="dateOfBirth"]').type('07/12/2018');
    cy.get('#btn-goToNext').click();
  });

  it ('should ask for height', () => {
    cy.get('#question-setHeight').contains('Quelle est la taille de l\'enfant ?');
  });

  it('should be possible to set height', () => {
    cy.wait(500);
    cy.get('.noUi-handle')
      .trigger('mousedown', {which: 1})
      .trigger('mousemove', {clientX: 450, clientY: 0})
      .trigger('mouseup');

    cy.get('#btn-goToNext').click();
  });

  it ('should ask for weight', () => {
    cy.get('#question-setWeight').contains('Quel est le poids de l\'enfant ?');
  });

  it('should be possible to set weight', () => {
    cy.wait(500);
    cy.get('.noUi-handle')
      .trigger('mousedown', {which: 1})
      .trigger('mousemove', {clientX: 300, clientY: 0})
      .trigger('mouseup');

    cy.get('#btn-goToNext').click();
  });

  it ('should ask for current treatments', () => {
    cy.get('#question-setCurrentTreatment').contains('L\'enfant suit-il des traitements actuellement ?');
  });

  it ('should be possible to set no treatments', () => {
    cy.get('label[for="isCurrentTreatmentN"]').click();
    cy.get('#btn-goToNext').click();
  });

  it ('should display no treatments setted', () => {
    cy.get('#answer-setCurrentTreatment').contains('L\'enfant ne suit aucun traitement');
  });

  it ('should ask for allergies', () => {
    cy.get('#question-setAllergies').contains('L\'enfant a-t-il des allergies connues ?');
  });

  it ('should be possible to set no allergies', () => {
    cy.get('label[for="isAllergiesN"]').click();
    cy.get('#btn-goToNext').click();
  });

  it ('should display no allergies setted', () => {
    cy.get('#answer-setAllergies').contains('L\'enfant n\'a aucune allergie connue');
  });

  it ('should ask for medical history', () => {
    cy.get('#question-setMedicalHistory').contains('L\'enfant a-t-il des antécédents médicaux ?');
  });

  it ('should be possible to set no medical history', () => {
    cy.get('label[for="isMedicalHistoryN"]').click();
    cy.get('#btn-goToNext').click();
  });

  it ('should display no medical history', () => {
    cy.get('#answer-setMedicalHistory').contains('L\'enfant n\'a aucun antécédent médical');
  });

  it ('should ask to use recorded card', () => {
    cy.get('#question-cardRecorded').contains('Utiliser la carte suivante ?');
  });

  it ('should be possible to select card', () => {
    cy.get('#btn-goToNext').click();
  });

  it ('should display selected card', () => {
    cy.get('#answer-cardRecorded').contains('Vous souhaitez utiliser la carte 004040******4');
  });

  it ('should ask to confirm and send question', () => {
    cy.get('#question-confirm').contains('Confirmer et poser votre question ?');
  });
});
