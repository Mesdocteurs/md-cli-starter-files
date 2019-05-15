describe('Médecine générale for a woman over 15 years old', () => {

  it('should be possible to go to the page', () => {
    cy.cookieConsent();
    cy.login('dev+jp@mesdocteurs.com', 'tototoO0');
    cy.visit('/question/nouvelle');
  });

  it('should ask to choose an offer', () => {
    cy.get('#question-selectOffer').should('have.text', 'Bonjour José, je suis votre assistant ' +
      'virtuel, sélectionnez ci-dessous comment contacter un médecin');
  });

  it('should be possible to select question offer', () => {
    cy.get('#btn-question10').click();
  });

  it('should display offer selected', () => {
    cy.get('#answer-selectOffer').should('have.text', 'Vous avez choisi l\'offre Question à 6,00€ la question');
  });

  it('should ask to select a thematique', () => {
    cy.get('#question-specialityMedGen').contains('Sachez que les médecins généralistes sont parfaitement ' +
      'à-même de prendre en charge la très grande majorité des problèmatiques qui se posent à vous.');
  });

  it('should be possible to select speciality medecine generale', () => {
    cy.get('.icon-2-medecine-generale').eq(0).click();
  });

  it('should display thematique selected', () => {
    cy.get('#answer-specialityMedGen').should('have.text', 'Vous avez choisi de consulter un' +
      ' médecin généraliste');
  });

  it('should ask to write a question', () => {
    cy.get('#question-setQuestion').should('have.text', 'José, décrivez maintenant votre symptôme');
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
    cy.get('label[for="genderF"]').click();
    cy.get('#btn-goToNext').click();
  });

  it('should display gender selected', () => {
    cy.get('#answer-setGender').should('have.text', 'Vous êtes de sexe féminin');
  });

  it('should ask for date of birth', () => {
    cy.get('#question-setDateOfBirth').should('have.text', 'Quelle est votre date de naissance ?');
  });

  it('should be possible to set a date of birth', () => {
    cy.get('[name="dateOfBirth"]').type('07/12/1980');
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

  it('should ask for pregnancy', () => {
    cy.get('#question-setPregnancy').should('have.text', 'Êtes-vous enceinte ?');
  });

  it('should be possible to set not pregnant', () => {
    cy.get('label[for="PregnancyN"]').click();
    cy.get('#btn-goToNext').click();
  });

  it('should display pregnancy not selected', () => {
    cy.get('#answer-setPregnancy').should('have.text', 'Vous n\'êtes pas enceinte');
  });

  it('should ask for profession', () => {
    cy.get('#question-setProfession').should('have.text', 'Quelle est votre profession ?');
  });

  it('should be possible to set profession', () => {
    cy.get('[formcontrolname="profession"]').clear();
    cy.get('[formcontrolname="profession"]').type('Footballeur');
    cy.get('#btn-goToNext').click();
  });

  it('should display setted profession', () => {
    cy.get('#answer-setProfession').should('have.text', 'Votre profession est Footballeur');
  });

  it('should ask to use recorded card', () => {
    cy.get('#question-cardRecorded').should('have.text', 'Utiliser la carte suivante ?');
  });

  it('should be possible to select card', () => {
    cy.get('#btn-goToNext').click();
  });

  it('should display selected card', () => {
    cy.get('#answer-cardRecorded').contains('Vous souhaitez utiliser la carte 004040******4');
  });

  it('should ask to confirm and send question', () => {
    cy.get('#question-confirm').should('have.text', 'Confirmer et poser votre question ?');
  });
});
