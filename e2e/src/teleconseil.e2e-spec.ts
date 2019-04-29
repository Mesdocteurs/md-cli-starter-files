import {browser, by, element} from 'protractor';

const randomNumber = Math.floor(Math.random() * Math.floor(10000));

describe('Patient teleconseil tests suite :', () => {

  it ('should be possible to accept the cookies', () => {
    browser.manage().deleteCookie('cookieconsent_status');
    browser.get('/');
    expect(element(by.css('[aria-label="cookieconsent"]')).isPresent()).toBeTruthy();
    element(by.css('.cc-dismiss')).click();
    expect(element(by.css('[aria-label="cookieconsent"]')).getAttribute('class')).toContain('cc-invisible');
  });

  describe('Inscription page tests suite', () => {

    it('should display a valid page', () => {
      browser.get('/inscription');
      browser.wait(browser.ExpectedConditions.urlContains('/inscription'), 10000);
    });

    it('should not be possible to submit an empty form', () => {
      expect(element(by.css('[type="submit"]')).getAttribute('disabled')).toBeTruthy();
    });

    it('should display 2 consentments', () => {
      expect(element.all(by.css('[name="isChosen"]')).count()).toEqual(2);
    });

    it('should not be possible to submit a form with invalid data', () => {
      element(by.css('[name="firstname"]')).sendKeys('Jean-Pierrot');
      element(by.css('[type="email"]')).sendKeys('dev+jp' + randomNumber + 'mesdocteurs.com');
      element(by.css('[type="password"]')).sendKeys('tototo');
      element.all(by.css('.form-check-label')).get(0).click();

      // Error password message
      expect(element(by.css('small.text-danger')).getText()).toBe('Le mot de passe doit contenir 8 caractères, ' +
        'au moins une majuscule et un chiffre');
      expect(element(by.css('[type="submit"]')).getAttribute('disabled')).toBeTruthy();

      element(by.css('[type="email"]')).clear();
      element(by.css('[type="email"]')).sendKeys('dev+jp' + randomNumber + '@mesdocteurs.com');
      expect(element(by.css('[type="submit"]')).getAttribute('disabled')).toBeTruthy();

      // check 2 consent
      element.all(by.css('.form-check-label')).get(1).click();
      expect(element(by.css('[type="submit"]')).getAttribute('disabled')).toBeTruthy();

      element.all(by.css('.form-check-label')).get(2).click();
      expect(element(by.css('[type="submit"]')).getAttribute('disabled')).toBeTruthy();

      // valid pass
      element(by.css('[type="password"]')).sendKeys('tototoO0');
      expect(element(by.css('[type="submit"]')).getAttribute('disabled')).toBeFalsy();
    });

    it('should be possible to submit a form with valid data', () => {
      browser.get('/inscription');
      browser.sleep(2000); // load consents

      element(by.css('[name="firstname"]')).sendKeys('Jean-Pierrot');
      element(by.css('[type="email"]')).sendKeys('dev+jp' + randomNumber + '@mesdocteurs.com');
      element(by.css('[type="password"]')).sendKeys('tototoO0');
      element.all(by.css('.form-check-label')).get(1).click();
      element.all(by.css('.form-check-label')).get(2).click();

      expect(element(by.css('[type="submit"]')).getAttribute('disabled')).toBeFalsy();

      element(by.css('[type="submit"]')).click();

      browser.wait(browser.ExpectedConditions.urlContains('/question/nouvelle'), 10000);
    });
  });

  describe('Signin', () => {

    it ('should display a logo MesDocteurs', () => {
      browser.get('/connexion');
      browser.wait(browser.ExpectedConditions.urlContains('/connexion'), 10000);
      expect(element(by.id('logo')).getAttribute('src')).toContain('assets/images/logos/logo-square.png');
    });

    it ('should be possible to go to the next step', () => {
      expect(element(by.css('[type="submit"]')).getAttribute('disabled')).toBeFalsy();
    });

    it ('should display a link password forgotten', () => {
      expect(element(by.css('a[routerlink="/mot-de-passe-perdu"]'))).toBeTruthy();
    });

    it ('should display a link not registered yet', () => {
      expect(element(by.css('a[routerlink="/inscription"]'))).toBeTruthy();
    });

    it ('should display a link doctor', () => {
      expect(element(by.id('psph-lnk-doctor'))).toBeTruthy();
    });

    it ('should not be possible to submit with an invalid email', () => {
      element(by.css('[type="email"]')).sendKeys('dev+jp' + randomNumber + 'mesdocteurs.com');
      expect(element(by.css('[type="submit"]')).getAttribute('disabled')).toBeTruthy();
    });

    it ('should not be possible to signin with invalid credentials', () => {
      element(by.css('[type="email"]')).clear();
      element(by.css('[type="email"]')).sendKeys('dev+jp+krkrkrk@mesdocteurs.com');
      element(by.css('[type="submit"]')).click();
      // browser.wait(browser.ExpectedConditions.visibilityOf(element(by.css('[type="password"]'))), 5000);
      // element(by.css('[type="password"]')).sendKeys('tototoO0');

      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.css('.alert'))), 5000);
      expect(element(by.css('.alert')).getText()).toBe('Email introuvable');
    });

    it ('should be possible to signin with valid credentials', ( ) => {
      element(by.css('[type="email"]')).clear();
      element(by.css('[type="email"]')).sendKeys('dev+jp@mesdocteurs.com');
      element(by.css('[type="submit"]')).click();
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.css('[type="password"]'))), 5000);
      element(by.css('[type="password"]')).sendKeys('tototoO0');

      expect(element(by.css('[type="submit"]')).getAttribute('disabled')).toBeFalsy();
      element(by.css('[type="submit"]')).click();

      browser.wait(browser.ExpectedConditions.urlContains('/question/nouvelle'), 10000);

    });

    it ('should display 2 consentments to accept', () => {
      browser.waitForAngularEnabled(false);
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.css('h1.display-4'))), 5000);
      expect(element(by.css('h1.display-4')).getText()).toBe('Conditions d\'utilisation');
      expect(element(by.css('[type="submit"]')).getAttribute('disabled')).toBeTruthy();
      browser.wait(browser.ExpectedConditions
        .elementToBeClickable(element.all(by.css('.form-check-label')).get(0)), 5000);
      element.all(by.css('.form-check-label')).get(0).click();
      browser.wait(browser.ExpectedConditions
        .elementToBeClickable(element.all(by.css('.form-check-label')).get(1)), 5000);
      element.all(by.css('.form-check-label')).get(1).click();
      expect(element(by.css('[type="submit"]')).getAttribute('disabled')).toBeFalsy();

      element(by.css('[type="submit"]')).click();
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-selectOffer'))), 5000);
    });
  });

  describe('Patient profil detail tests suite', () => {
    // beforeEach(() => {
    //   browser.get('/profil');
    //   browser.wait(browser.ExpectedConditions.urlContains('/profil'), 10000);
    //
    //   browser.sleep(1000);
    // });


    it('should display a filled page with the patient information', () => {
      browser.get('/profil');
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.css('.card'))), 5000);

      expect(element.all(by.css('.card-title small')).get(0).getText()).toBe('Paldir José');
      expect(element.all(by.css('.card-title small')).get(1).getText()).toBe('dev+jp@mesdocteurs.com');
      expect(element.all(by.css('.card-title small')).get(2).getText()).toBe('18 rue de l\'amour 13090 Aix en Provence');
      expect(element.all(by.css('.card-title small')).get(3).getText()).toBe('Homme');
    });

    it('should be able to go to the edit page from the details page', () => {
      expect(element(by.css('[routerlink="/profil/modifier"]')).isPresent()).toBeTruthy();
      element(by.css('[routerlink="/profil/modifier"]')).click();

      browser.wait(browser.ExpectedConditions.urlContains('/profil/modifier'), 10000);
    });

    // it ('enabled angular waiting', () => {
    //   browser.waitForAngularEnabled(true);
    // });
  });
  //
  // describe('Edit patient tests suite', () => {
  //
  //   beforeEach(() => {
  //     browser.get('/profil/modifier');
  //     browser.sleep(1000);
  //   });
  //
  //   it ('should display a filled form', () => {
  //     expect(element(by.css('[formcontrolname="lastname"]')).getAttribute('value')).toBe('Paldir');
  //     expect(element(by.css('[formcontrolname="firstname"]')).getAttribute('value')).toBe('José');
  //     expect(element(by.css('[formcontrolname="phone"]')).getAttribute('value')).toBe('');
  //     expect(element(by.css('[formcontrolname="address"]')).getAttribute('value')).toBe('18 rue de l\'amour');
  //     expect(element(by.css('[formcontrolname="zipCode"]')).getAttribute('value')).toBe('13090');
  //     expect(element(by.css('[formcontrolname="city"]')).getAttribute('value')).toBe('Aix en Provence');
  //
  //     expect(element(by.css('[type="submit"]')).getAttribute('disabled')).toBeFalsy();
  //   });
  //
  //   it ('should be possible to submit a valid form and effectively change the values', () => {
  //     element(by.css('[formcontrolname="lastname"]')).clear();
  //     element(by.css('[formcontrolname="lastname"]')).sendKeys('Bové');
  //
  //     element(by.css('[type="submit"]')).click();
  //     browser.sleep(1000);
  //
  //     browser.get('/profil');
  //     browser.sleep(1000);
  //     expect(element.all(by.css('.card-title small')).get(0).getText()).toBe('Bové José');
  //
  //   });
  // });

  describe('Remove Card Bank tests suite', () => {

    describe('Remove card with not finished paiement', () => {
      it ('should display a card', () => {
        browser.get('/informations-bancaires');
        expect(element(by.css('.card-credit')).isPresent()).toBeTruthy();
        expect(element(by.css('.card-credit .card-title')).getText()).toBe('CARTE DE PAIEMENT');
        expect(element(by.css('.card-credit .card-text')).getText()).toContain('004040******4');
      });
      // it ('enabled angular waiting', () => {
      //   browser.waitForAngularEnabled(true);
      // });
    });
  });

  describe('Remove card when possible', () => {
    beforeEach(() => {
    });

    it ('should be possible to signin with valid credentials', () => {
      browser.get('/connexion');

      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.css('[type="email"]'))), 5000);
      element(by.css('[formcontrolname="email"]')).clear();
      element(by.css('[formcontrolname="email"]')).sendKeys('dev+luiz@mesdocteurs.com');
      element(by.css('[type="submit"]')).click();
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.css('[type="password"]'))), 5000);
      element(by.css('[type="password"]')).sendKeys('tototoO0');

      expect(element(by.css('[type="submit"]')).getAttribute('disabled')).toBeFalsy();
      element(by.css('[type="submit"]')).click();

      browser.wait(browser.ExpectedConditions.urlContains('/question/nouvelle'), 10000);
    });

    it ('should display a card', () => {
      browser.get('/informations-bancaires');

      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.css('.card-credit'))), 5000);
      expect(element(by.css('.card-credit .card-title')).getText()).toBe('CARTE DE PAIEMENT');
      expect(element(by.css('.card-credit .card-text')).getText()).toBe('004040******4956');
    });

    it ('should not be possible to remove a card with a question running', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('pbbh-btn'))), 5000);
      element(by.id('pbbh-btn')).click();
      browser.sleep(1000);
      expect(element(by.css('.alert-success')).getText()).toBe('Votre carte a été correctement supprimée');
    });

  });

  describe('Should be possible to ask a question medecine générale', () => {

    it ('should be possible to signin with valid credentials', () => {
      browser.get('/connexion');

      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.css('[type="email"]'))), 5000);
      element(by.css('[formcontrolname="email"]')).clear();
      element(by.css('[formcontrolname="email"]')).sendKeys('dev+jp@mesdocteurs.com');
      element(by.css('[type="submit"]')).click();
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.css('[type="password"]'))), 5000);
      element(by.css('[type="password"]')).sendKeys('tototoO0');

      expect(element(by.css('[type="submit"]')).getAttribute('disabled')).toBeFalsy();
      element(by.css('[type="submit"]')).click();

      browser.wait(browser.ExpectedConditions.urlContains('/question/nouvelle'), 10000);
    });

    // browser.get('/question/nouvelle');
    it ('should ask to choose an offer', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-selectOffer'))), 5000);
      expect(element(by.id('question-selectOffer')).getText()).toBe('Bonjour José, sélectionnez ci-dessous comment contacter un médecin');
    });

    it ('should be possible to select question offer', () => {
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-question10'))), 5000);
      browser.executeScript('arguments[0].click();', element(by.id('btn-question10')));
    });

    it ('should display offer selected', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-selectOffer'))), 5000);
      expect(element(by.id('answer-selectOffer')).getText()).toBe('Vous avez choisi l\'offre Question à 6,00€ la question');
    });

    it ('should ask to select a thematique', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-specialityMedGen'))), 5000);
      expect(element(by.id('question-specialityMedGen')).getText()).toBe('Sachez que les médecins généralistes sont ' +
        'parfaitement à-même de prendre en charge\nla très grande majorité des problèmatiques qui se posent à vous.\n' +
        'Confirmez que vous souhaitez échanger avec un médecin généraliste');
    });

    it ('should be possible to select speciality medecine generale', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element.all(by.css('.spe-med-gen')).get(0)), 5000);
      browser.executeScript('arguments[0].click();', element.all(by.css('.spe-med-gen')).get(0));
    });

    it ('should display thematique selected', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-specialityMedGen'))), 5000);
      expect(element(by.id('answer-specialityMedGen')).getText()).toBe('Vous avez choisi la thématique médecine générale');
    });

    it ('should ask to write a question', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-setQuestion'))), 5000);
      expect(element(by.id('question-setQuestion')).getText()).toBe('José, décrivez maintenant votre symptôme');
    });

    it ('should be possible to set a question', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.css('[formcontrolname="questionText"]'))), 5000);
      element(by.css('[formcontrolname="questionText"]')).sendKeys('ma question que j\'ai très mal a mon bobo, aie aie,' +
        ' allo maman bobo pourquoi tu m\'a fait je suis pas beau');
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should display question setted', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-setQuestion'))), 5000);
      expect(element(by.id('answer-setQuestion')).getText()).toBe('Vous posez la question suivante : ma question que ' +
        'j\'ai très mal a mon bobo, aie aie, allo maman bobo pourquoi tu m\'a fait je suis pas beau');
    });

    it ('should ask for gender', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-setGender'))), 5000);
      expect(element(by.id('question-setGender')).getText()).toBe('De quel sexe êtes-vous ?');
    });

    it ('should be possible to set gender', () => {
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.css('label[for="genderM"]'))), 5000);
      element(by.css('label[for="genderM"]')).click();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should display gender selected', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-setGender'))), 5000);
      expect(element(by.id('answer-setGender')).getText()).toBe('Vous êtes de sexe masculin');
    });

    it ('should ask for date of birth', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-setDateOfBirth'))), 5000);
      expect(element(by.id('question-setDateOfBirth')).getText()).toBe('Quelle est votre date de naissance ?');
    });

    it ('should be possible to set a date of birth', () => {
      browser.sleep(1000);
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.css('[name="dateOfBirth"]'))), 5000);
      element(by.css('[name="dateOfBirth"]')).click();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.css('ngb-datepicker-navigation-select ' +
        'select.custom-select:nth-child(2) option[value="1980"]'))), 5000);
      element(by.css('ngb-datepicker-navigation-select select.custom-select:nth-child(2) option[value="1980"]')).click();
      element(by.css('ngb-datepicker-navigation-select select:nth-child(1) option[value="12"]')).click();
      element(by.css('ngb-datepicker-month-view .ngb-dp-week:nth-child(2) .ngb-dp-day:nth-child(7)')).click();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should display date of birth setted', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-setDateOfBirth'))), 5000);
      expect(element(by.id('answer-setDateOfBirth')).getText()).toBe('Vous avez 38 ans');
    });

    it ('should ask for height', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-setHeight'))), 5000);
      expect(element(by.id('question-setHeight')).getText()).toBe('Quelle taille mesurez-vous ?');
    });

    it ('should be possible to set height', () => {
      browser.sleep(1000);
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('pqc-height'))), 5000);
      browser.actions().dragAndDrop(element(by.id('pqc-height')), {x: 500, y: 0}).perform();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should display height setted', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-setHeight'))), 5000);
      expect(element(by.id('answer-setHeight')).getText()).toBe('Vous mesurez 125 centimetres');
    });

    it ('should ask for weight', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-setWeight'))), 5000);
      expect(element(by.id('question-setWeight')).getText()).toBe('Quel poids faites-vous ?');
    });

    it ('should be possible to set weight', () => {
      browser.sleep(1000);
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('pqc-weight'))), 10000);
      browser.actions().dragAndDrop(element(by.id('pqc-weight')), {x: 500, y: 0}).perform();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should display weight setted', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-setWeight'))), 5000);
      expect(element(by.id('answer-setWeight')).getText()).toBe('Vous pesez 100 kilos');
    });

    it ('should ask for current treatments', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-setCurrentTreatment'))), 5000);
      expect(element(by.id('question-setCurrentTreatment')).getText()).toBe('Suivez-vous des traitements actuellement ?');
    });

    it ('should be possible to set no treatments', () => {
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.css('label[for="isCurrentTreatmentN"]'))), 5000);
      element(by.css('label[for="isCurrentTreatmentN"]')).click();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should display no treatments setted', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-setCurrentTreatment'))), 5000);
      expect(element(by.id('answer-setCurrentTreatment')).getText()).toBe('Vous ne suivez aucun traitement');
    });

    it ('should ask for allergies', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-setAllergies'))), 5000);
      expect(element(by.id('question-setAllergies')).getText()).toBe('Avez-vous des allergies connues ?');
    });

    it ('should be possible to set no allergies', () => {
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.css('label[for="isAllergiesN"]'))), 5000);
      element(by.css('label[for="isAllergiesN"]')).click();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should display no allergies setted', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-setAllergies'))), 5000);
      expect(element(by.id('answer-setAllergies')).getText()).toBe('Vous n\'avez aucune allergie connue');
    });

    it ('should ask for medical history', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-setMedicalHistory'))), 5000);
      expect(element(by.id('question-setMedicalHistory')).getText()).toBe('Avez-vous des antécédents médicaux ?');
    });

    it ('should be possible to set no medical history', () => {
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.css('label[for="isMedicalHistoryN"]'))), 5000);
      element(by.css('label[for="isMedicalHistoryN"]')).click();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should display no medial history', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-setMedicalHistory'))), 5000);
      expect(element(by.id('answer-setMedicalHistory')).getText()).toBe('Vous n\'indiquez aucun antécédent médical');
    });

    it ('should ask for profession', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-setProfession'))), 5000);
      expect(element(by.id('question-setProfession')).getText()).toBe('Quelle est votre profession ?');
    });

    it ('should be possible to set profession', () => {
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.css('[formcontrolname="profession"]'))), 5000);
      element(by.css('[formcontrolname="profession"]')).sendKeys('Footballeur');
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should display setted profession', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-setProfession'))), 5000);
      expect(element(by.id('answer-setProfession')).getText()).toBe('Votre profession est Footballeur');
    });

    it ('should ask to use recorded card', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-cardRecorded'))), 5000);
      expect(element(by.id('question-cardRecorded')).getText()).toBe('Utiliser la carte suivante ?');
    });

    it ('should be possible to select card', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.css('.custom-control-label'))), 5000);
      expect(element(by.css('.custom-control-label')).getText()).toBe('- 004040******4957 - 0319');
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should display selected card', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-cardRecorded'))), 5000);
      expect(element(by.id('answer-cardRecorded')).getText()).toContain('Vous souhaitez utiliser la carte 004040******4');
    });

    it ('should ask to confirm and send question', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-confirm'))), 5000);
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-submit'))), 5000);
      expect(element(by.id('question-confirm')).getText()).toBe('Confirmer et poser votre question ?');
      //     element(by.id('btn-submit')).click();
    });
  });

  describe('Should be possible to ask a chat pediatry', () => {
    it ('should be possible to refresh page', () => {
      browser.get('/question/nouvelle');
    });

    it ('should be possible to select a chat', () => {
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-chat'))), 5000);
      browser.executeScript('arguments[0].click();', element(by.id('btn-chat')));
    });

    it ('should be possible to select speciality other', () => {
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.css('.speciality-item-specialiste'))), 5000);
      element(by.css('.speciality-item-specialiste')).click();
    });

    it ('should display other speciality chosen', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-specialityMedGen'))), 5000);
      expect(element(by.id('answer-specialityMedGen')).getText()).toBe('Vous avez choisi la thématique spécialiste');
    });

    it ('should ask for speciality', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-specialitySpecialist'))), 5000);
      expect(element(by.id('question-specialitySpecialist')).getText()).toBe('José, choisissez ci-dessous le thème de votre question');
    });

    it ('should be possible to set speciality', () => {
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('speciality-customer-card-5'))), 5000);
      browser.executeScript('arguments[0].click();', element(by.id('speciality-customer-card-5')));
    });

    it ('should display speciality selected', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-specialitySpecialist'))), 5000);
      expect(element(by.id('answer-specialitySpecialist')).getText()).toBe('Vous avez choisi la thématique Pédiatrie');
    });

    it ('should ask to write a question', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-setQuestion'))), 5000);
      expect(element(by.id('question-setQuestion')).getText()).toBe('Veuillez décrire le symptôme de l\'enfant');
    });

    it ('should be possible to set a question', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.css('[formcontrolname="questionText"]'))), 5000);
      element(by.css('[formcontrolname="questionText"]')).sendKeys('ma question que j\'ai très mal a mon bobo, aie aie,' +
        ' allo maman bobo pourquoi tu m\'a fait je suis pas beau');
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should ask for gender', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-setGender'))), 5000);
      expect(element(by.id('question-setGender')).getText()).toBe('De quel sexe est l\'enfant ?');
    });

    it ('should be possible to set gender', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.css('label[for="genderM"]'))), 5000);
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.css('label[for="genderM"]'))), 5000);
      element(by.css('label[for="genderM"]')).click();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should display gender selected', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-setGender'))), 5000);
      expect(element(by.id('answer-setGender')).getText()).toBe('L\'enfant est de sexe masculin');
    });

    it ('should ask for date of birth', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-setDateOfBirth'))), 5000);
      expect(element(by.id('question-setDateOfBirth')).getText()).toBe('Quel est l\'âge de l\'enfant ?');
    });

    it ('should be possible to set a date of birth', () => {
      browser.sleep(1000);
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.css('[name="dateOfBirth"]'))), 5000);
      element(by.css('[name="dateOfBirth"]')).click();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.css('ngb-datepicker-navigation-select ' +
        'select.custom-select:nth-child(2) option[value="2018"]'))), 5000);
      element(by.css('ngb-datepicker-navigation-select select.custom-select:nth-child(2) option[value="2018"]')).click();
      element(by.css('ngb-datepicker-navigation-select select:nth-child(1) option[value="12"]')).click();
      element(by.css('ngb-datepicker-month-view .ngb-dp-week:nth-child(2) .ngb-dp-day:nth-child(7)')).click();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should display date of birth setted', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-setDateOfBirth'))), 5000);
      expect(element(by.id('answer-setDateOfBirth')).getText()).toBe('L\'enfant a 4 mois');
    });


    it ('should ask for height', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-setHeight'))), 5000);
      expect(element(by.id('question-setHeight')).getText()).toBe('Quelle est la taille de l\'enfant ?');
    });

    it ('should be possible to set height', () => {
      browser.sleep(1000);
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('pqc-height'))), 5000);
      browser.actions().dragAndDrop(element(by.id('pqc-height')), {x: 500, y: 0}).perform();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should display height setted', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-setHeight'))), 5000);
      expect(element(by.id('answer-setHeight')).getText()).toBe('L\'enfant mesure 125 centimetres');
    });


    it ('should ask for weight', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-setWeight'))), 5000);
      expect(element(by.id('question-setWeight')).getText()).toBe('Quel est le poids de l\'enfant ?');
    });

    it ('should be possible to set weight', () => {
      browser.sleep(1000);
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('pqc-weight'))), 10000);
      browser.actions().dragAndDrop(element(by.id('pqc-weight')), {x: 500, y: 0}).perform();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should display weight setted', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-setWeight'))), 5000);
      expect(element(by.id('answer-setWeight')).getText()).toBe('L\'enfant pèse 100 kilos');
    });

    it ('should ask for current treatments', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-setCurrentTreatment'))), 5000);
      expect(element(by.id('question-setCurrentTreatment')).getText()).toBe('L\'enfant suit-il des traitements actuellement ?');
    });

    it ('should be possible to set no treatments', () => {
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.css('label[for="isCurrentTreatmentN"]'))), 5000);
      element(by.css('label[for="isCurrentTreatmentN"]')).click();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should display no treatments setted', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-setCurrentTreatment'))), 5000);
      expect(element(by.id('answer-setCurrentTreatment')).getText()).toBe('L\'enfant ne suit aucun traitement');
    });

    it ('should ask for allergies', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-setAllergies'))), 5000);
      expect(element(by.id('question-setAllergies')).getText()).toBe('L\'enfant a-t-il des allergies connues ?');
    });

    it ('should be possible to set no allergies', () => {
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.css('label[for="isAllergiesN"]'))), 5000);
      element(by.css('label[for="isAllergiesN"]')).click();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should display no allergies setted', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-setAllergies'))), 5000);
      expect(element(by.id('answer-setAllergies')).getText()).toBe('L\'enfant n\'a aucune allergie connue');
    });

    it ('should ask for medical history', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-setMedicalHistory'))), 5000);
      expect(element(by.id('question-setMedicalHistory')).getText()).toBe('L\'enfant a-t-il des antécédents médicaux ?');
    });

    it ('should be possible to set no medical history', () => {
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.css('label[for="isMedicalHistoryN"]'))), 5000);
      element(by.css('label[for="isMedicalHistoryN"]')).click();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should display no medical history', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-setMedicalHistory'))), 5000);
      expect(element(by.id('answer-setMedicalHistory')).getText()).toBe('L\'enfant n\'a aucun antécédent médical');
    });

    it ('should ask to use recorded card', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-cardRecorded'))), 5000);
      expect(element(by.id('question-cardRecorded')).getText()).toBe('Utiliser la carte suivante ?');
    });

    it ('should be possible to select card', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.css('.custom-control-label'))), 5000);
      expect(element(by.css('.custom-control-label')).getText()).toBe('- 004040******4957 - 0319');
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should display selected card', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-cardRecorded'))), 5000);
      expect(element(by.id('answer-cardRecorded')).getText()).toContain('Vous souhaitez utiliser la carte 004040******4');
    });

    it ('should ask to confirm and send question', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-confirm'))), 5000);
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-submit'))), 5000);
      expect(element(by.id('question-confirm')).getText()).toBe('Confirmer et poser votre question ?');
      //     element(by.id('btn-submit')).click();
    });
  });

  describe('Should be possible to ask a question medecine générale as a woman over 15', () => {

    it ('should be possible to refresh page', () => {
      browser.get('/question/nouvelle');
    });

    it ('should ask to choose an offer', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-selectOffer'))), 5000);
      expect(element(by.id('question-selectOffer')).getText()).toBe('Bonjour José, sélectionnez ci-dessous comment contacter un médecin');
    });

    it ('should be possible to select question offer', () => {
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-question10'))), 5000);
      browser.executeScript('arguments[0].click();', element(by.id('btn-question10')));
    });

    it ('should display offer selected', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-selectOffer'))), 5000);
      expect(element(by.id('answer-selectOffer')).getText()).toBe('Vous avez choisi l\'offre Question à 6,00€ la question');
    });

    it ('should ask to select a thematique', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-specialityMedGen'))), 5000);
      expect(element(by.id('question-specialityMedGen')).getText()).toBe('Sachez que les médecins généralistes sont ' +
        'parfaitement à-même de prendre en charge\nla très grande majorité des problèmatiques qui se posent à vous.\n' +
        'Confirmez que vous souhaitez échanger avec un médecin généraliste');
    });

    it ('should be possible to select speciality medecine generale', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element.all(by.css('.spe-med-gen')).get(0)), 5000);
      browser.executeScript('arguments[0].click();', element.all(by.css('.spe-med-gen')).get(0));
    });

    it ('should display thematique selected', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-specialityMedGen'))), 5000);
      expect(element(by.id('answer-specialityMedGen')).getText()).toBe('Vous avez choisi la thématique médecine générale');
    });

    it ('should ask to write a question', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-setQuestion'))), 5000);
      expect(element(by.id('question-setQuestion')).getText()).toBe('José, décrivez maintenant votre symptôme');
    });

    it ('should be possible to set a question', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.css('[formcontrolname="questionText"]'))), 5000);
      element(by.css('[formcontrolname="questionText"]')).sendKeys('ma question que j\'ai très mal a mon bobo, aie aie,' +
        ' allo maman bobo pourquoi tu m\'a fait je suis pas beau');
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should display question setted', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-setQuestion'))), 5000);
      expect(element(by.id('answer-setQuestion')).getText()).toBe('Vous posez la question suivante : ma question que ' +
        'j\'ai très mal a mon bobo, aie aie, allo maman bobo pourquoi tu m\'a fait je suis pas beau');
    });

    it ('should ask for gender', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-setGender'))), 5000);
      expect(element(by.id('question-setGender')).getText()).toBe('De quel sexe êtes-vous ?');
    });

    it ('should be possible to set gender', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.css('label[for="genderF"]'))), 5000);
      element(by.css('label[for="genderF"]')).click();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should display gender selected', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-setGender'))), 5000);
      expect(element(by.id('answer-setGender')).getText()).toBe('Vous êtes de sexe féminin');
    });

    it ('should ask for date of birth', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-setDateOfBirth'))), 5000);
      expect(element(by.id('question-setDateOfBirth')).getText()).toBe('Quelle est votre date de naissance ?');
    });

    it ('should be possible to set a date of birth', () => {
      browser.sleep(1000);
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.css('[name="dateOfBirth"]'))), 5000);
      element(by.css('[name="dateOfBirth"]')).click();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.css('ngb-datepicker-navigation-select ' +
        'select.custom-select:nth-child(2) option[value="1980"]'))), 5000);
      element(by.css('ngb-datepicker-navigation-select select.custom-select:nth-child(2) option[value="1980"]')).click();
      element(by.css('ngb-datepicker-navigation-select select:nth-child(1) option[value="12"]')).click();
      element(by.css('ngb-datepicker-month-view .ngb-dp-week:nth-child(2) .ngb-dp-day:nth-child(7)')).click();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should display date of birth setted', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-setDateOfBirth'))), 5000);
      expect(element(by.id('answer-setDateOfBirth')).getText()).toBe('Vous avez 38 ans');
    });

    it ('should ask for height', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-setHeight'))), 5000);
      expect(element(by.id('question-setHeight')).getText()).toBe('Quelle taille mesurez-vous ?');
    });

    it ('should be possible to set height', () => {
      browser.sleep(1000);
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('pqc-height'))), 10000);
      browser.actions().dragAndDrop(element(by.id('pqc-height')), {x: 500, y: 0}).perform();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should display height setted', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-setHeight'))), 5000);
      expect(element(by.id('answer-setHeight')).getText()).toBe('Vous mesurez 125 centimetres');
    });

    it ('should ask for weight', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-setWeight'))), 5000);
      expect(element(by.id('question-setWeight')).getText()).toBe('Quel poids faites-vous ?');
    });

    it ('should be possible to set weight', () => {
      browser.sleep(1000);
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('pqc-weight'))), 10000);
      browser.actions().dragAndDrop(element(by.id('pqc-weight')), {x: 500, y: 0}).perform();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should display weight setted', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-setWeight'))), 5000);
      expect(element(by.id('answer-setWeight')).getText()).toBe('Vous pesez 100 kilos');
    });

    it ('should ask for current treatments', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-setCurrentTreatment'))), 5000);
      expect(element(by.id('question-setCurrentTreatment')).getText()).toBe('Suivez-vous des traitements actuellement ?');
    });

    it ('should be possible to set no treatments', () => {
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.css('label[for="isCurrentTreatmentN"]'))), 10000);
      element(by.css('label[for="isCurrentTreatmentN"]')).click();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should display no treatments setted', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-setCurrentTreatment'))), 5000);
      expect(element(by.id('answer-setCurrentTreatment')).getText()).toBe('Vous ne suivez aucun traitement');
    });

    it ('should ask for allergies', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-setAllergies'))), 5000);
      expect(element(by.id('question-setAllergies')).getText()).toBe('Avez-vous des allergies connues ?');
    });

    it ('should be possible to set no allergies', () => {
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.css('label[for="isAllergiesN"]'))), 5000);
      element(by.css('label[for="isAllergiesN"]')).click();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should display no allergies setted', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-setAllergies'))), 5000);
      expect(element(by.id('answer-setAllergies')).getText()).toBe('Vous n\'avez aucune allergie connue');
    });

    it ('should ask for medical history', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-setMedicalHistory'))), 5000);
      expect(element(by.id('question-setMedicalHistory')).getText()).toBe('Avez-vous des antécédents médicaux ?');
    });

    it ('should be possible to set no medical history', () => {
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.css('label[for="isMedicalHistoryN"]'))), 10000);
      element(by.css('label[for="isMedicalHistoryN"]')).click();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should display no medical history', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-setMedicalHistory'))), 5000);
      expect(element(by.id('answer-setMedicalHistory')).getText()).toBe('Vous n\'indiquez aucun antécédent médical');
    });

    it ('should ask if pregnancy', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-setPregnancy'))), 5000);
      expect(element(by.id('question-setPregnancy')).getText()).toBe('Êtes-vous enceinte ?');
    });

    it ('should be possible to set not pregnant', () => {
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.css('label[for="PregnancyN"]'))), 10000);
      element(by.css('label[for="PregnancyN"]')).click();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should display pregnancy not selected', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-setPregnancy'))), 5000);
      expect(element(by.id('answer-setPregnancy')).getText()).toBe('Vous n\'êtes pas enceinte');
    });

    it ('should ask for profession', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-setProfession'))), 5000);
      expect(element(by.id('question-setProfession')).getText()).toBe('Quelle est votre profession ?');
    });

    it ('should be possible to set profession', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.css('[formcontrolname="profession"]'))), 5000);
      element(by.css('[formcontrolname="profession"]')).sendKeys('Footballeur');
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should display setted profession', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-setProfession'))), 5000);
      expect(element(by.id('answer-setProfession')).getText()).toBe('Votre profession est Footballeur');
    });

    it ('should ask to use recorded card', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-cardRecorded'))), 5000);
      expect(element(by.id('question-cardRecorded')).getText()).toBe('Utiliser la carte suivante ?');
    });

    it ('should be possible to select card', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.css('.custom-control-label'))), 5000);
      expect(element(by.css('.custom-control-label')).getText()).toBe('- 004040******4957 - 0319');
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should display selected card', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-cardRecorded'))), 5000);
      expect(element(by.id('answer-cardRecorded')).getText()).toContain('Vous souhaitez utiliser la carte 004040******4');
    });

    it ('should ask to confirm and send question', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-confirm'))), 5000);
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-submit'))), 5000);
      expect(element(by.id('question-confirm')).getText()).toBe('Confirmer et poser votre question ?');
      //     element(by.id('btn-submit')).click();
    });
  });

  describe('Should be possible to ask a question medecine générale as a woman under 15', () => {

    it ('should be possible to refresh page', () => {
      browser.get('/question/nouvelle');
    });

    it ('should ask to choose an offer', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-selectOffer'))), 5000);
      expect(element(by.id('question-selectOffer')).getText()).toBe('Bonjour José, sélectionnez ci-dessous comment contacter un médecin');
    });

    it ('should be possible to select question offer', () => {
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-question10'))), 5000);
      browser.executeScript('arguments[0].click();', element(by.id('btn-question10')));
    });

    it ('should display offer selected', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-selectOffer'))), 5000);
      expect(element(by.id('answer-selectOffer')).getText()).toBe('Vous avez choisi l\'offre Question à 6,00€ la question');
    });

    it ('should ask to select a thematique', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-specialityMedGen'))), 5000);
      expect(element(by.id('question-specialityMedGen')).getText()).toBe('Sachez que les médecins généralistes sont ' +
        'parfaitement à-même de prendre en charge\nla très grande majorité des problèmatiques qui se posent à vous.' +
        '\nConfirmez que vous souhaitez échanger avec un médecin généraliste');
    });

    it ('should be possible to select speciality medecine generale', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element.all(by.css('.spe-med-gen')).get(0)), 5000);
      browser.executeScript('arguments[0].click();', element.all(by.css('.spe-med-gen')).get(0));
    });

    it ('should display thematique selected', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-specialityMedGen'))), 5000);
      expect(element(by.id('answer-specialityMedGen')).getText()).toBe('Vous avez choisi la thématique médecine générale');
    });

    it ('should ask to write a question', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-setQuestion'))), 5000);
      expect(element(by.id('question-setQuestion')).getText()).toBe('José, décrivez maintenant votre symptôme');
    });

    it ('should be possible to set a question', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.css('[formcontrolname="questionText"]'))), 5000);
      element(by.css('[formcontrolname="questionText"]')).sendKeys('ma question que j\'ai très mal a mon bobo, aie aie,' +
        ' allo maman bobo pourquoi tu m\'a fait je suis pas beau');
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should display question setted', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-setQuestion'))), 5000);
      expect(element(by.id('answer-setQuestion')).getText()).toBe('Vous posez la question suivante : ma question que ' +
        'j\'ai très mal a mon bobo, aie aie, allo maman bobo pourquoi tu m\'a fait je suis pas beau');
    });

    it ('should ask for gender', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-setGender'))), 5000);
      expect(element(by.id('question-setGender')).getText()).toBe('De quel sexe êtes-vous ?');
    });

    it ('should be possible to set gender', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.css('label[for="genderF"]'))), 5000);
      element(by.css('label[for="genderF"]')).click();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should display gender selected', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-setGender'))), 5000);
      expect(element(by.id('answer-setGender')).getText()).toBe('Vous êtes de sexe féminin');
    });

    it ('should ask for date of birth', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-setDateOfBirth'))), 5000);
      expect(element(by.id('question-setDateOfBirth')).getText()).toBe('Quelle est votre date de naissance ?');
    });

    it ('should be possible to set a date of birth', () => {
      browser.sleep(1000);
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.css('[name="dateOfBirth"]'))), 5000);
      element(by.css('[name="dateOfBirth"]')).click();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.css('ngb-datepicker-navigation-select ' +
        'select.custom-select:nth-child(2) option[value="1980"]'))), 5000);
      element(by.css('ngb-datepicker-navigation-select select.custom-select:nth-child(2) option[value="2012"]')).click();
      element(by.css('ngb-datepicker-navigation-select select:nth-child(1) option[value="12"]')).click();
      element(by.css('ngb-datepicker-month-view .ngb-dp-week:nth-child(2) .ngb-dp-day:nth-child(7)')).click();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should display date of birth setted', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-setDateOfBirth'))), 5000);
      expect(element(by.id('answer-setDateOfBirth')).getText()).toBe('Vous avez 6 ans');
    });

    it ('should ask for height', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-setHeight'))), 5000);
      expect(element(by.id('question-setHeight')).getText()).toBe('Quelle taille mesurez-vous ?');
    });

    it ('should be possible to set height', () => {
      browser.sleep(1000);
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('pqc-height'))), 10000);
      browser.actions().dragAndDrop(element(by.id('pqc-height')), {x: 500, y: 0}).perform();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should display height setted', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-setHeight'))), 5000);
      expect(element(by.id('answer-setHeight')).getText()).toBe('Vous mesurez 125 centimetres');
    });

    it ('should ask for weight', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-setWeight'))), 5000);
      expect(element(by.id('question-setWeight')).getText()).toBe('Quel poids faites-vous ?');
    });

    it ('should be possible to set weight', () => {
      browser.sleep(1000);
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('pqc-weight'))), 10000);
      browser.actions().dragAndDrop(element(by.id('pqc-weight')), {x: 500, y: 0}).perform();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should display weight setted', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-setWeight'))), 5000);
      expect(element(by.id('answer-setWeight')).getText()).toBe('Vous pesez 100 kilos');
    });

    it ('should ask for current treatments', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-setCurrentTreatment'))), 5000);
      expect(element(by.id('question-setCurrentTreatment')).getText()).toBe('Suivez-vous des traitements actuellement ?');
    });

    it ('should be possible to set no treatments', () => {
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.css('label[for="isCurrentTreatmentN"]'))), 10000);
      element(by.css('label[for="isCurrentTreatmentN"]')).click();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should display no treatments setted', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-setCurrentTreatment'))), 5000);
      expect(element(by.id('answer-setCurrentTreatment')).getText()).toBe('Vous ne suivez aucun traitement');
    });

    it ('should ask for allergies', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-setAllergies'))), 5000);
      expect(element(by.id('question-setAllergies')).getText()).toBe('Avez-vous des allergies connues ?');
    });

    it ('should be possible to set no allergies', () => {
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.css('label[for="isAllergiesN"]'))), 5000);
      element(by.css('label[for="isAllergiesN"]')).click();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should display no allergies setted', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-setAllergies'))), 5000);
      expect(element(by.id('answer-setAllergies')).getText()).toBe('Vous n\'avez aucune allergie connue');
    });

    it ('should ask for medical history', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-setMedicalHistory'))), 5000);
      expect(element(by.id('question-setMedicalHistory')).getText()).toBe('Avez-vous des antécédents médicaux ?');
    });

    it ('should be possible to set no medical history', () => {
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.css('label[for="isMedicalHistoryN"]'))), 10000);
      element(by.css('label[for="isMedicalHistoryN"]')).click();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should display no medical history', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-setMedicalHistory'))), 5000);
      expect(element(by.id('answer-setMedicalHistory')).getText()).toBe('Vous n\'indiquez aucun antécédent médical');
    });

    it ('should not ask for pregnancy and ask for profession directly', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-setProfession'))), 5000);
      expect(element(by.id('question-setProfession')).getText()).toBe('Quelle est votre profession ?');
    });

    it ('should be possible to set profession', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.css('[formcontrolname="profession"]'))), 5000);
      element(by.css('[formcontrolname="profession"]')).sendKeys('Footballeur');
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should display setted profession', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-setProfession'))), 5000);
      expect(element(by.id('answer-setProfession')).getText()).toBe('Votre profession est Footballeur');
    });

    it ('should ask to use recorded card', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-cardRecorded'))), 5000);
      expect(element(by.id('question-cardRecorded')).getText()).toBe('Utiliser la carte suivante ?');
    });

    it ('should be possible to select card', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.css('.custom-control-label'))), 5000);
      expect(element(by.css('.custom-control-label')).getText()).toBe('- 004040******4957 - 0319');
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should display selected card', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-cardRecorded'))), 5000);
      expect(element(by.id('answer-cardRecorded')).getText()).toContain('Vous souhaitez utiliser la carte 004040******4');
    });

    it ('should ask to confirm and send question', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-confirm'))), 5000);
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-submit'))), 5000);
      expect(element(by.id('question-confirm')).getText()).toBe('Confirmer et poser votre question ?');
      //     element(by.id('btn-submit')).click();
    });
  });

  describe('Should be possible to ask a question gynecologie', () => {

    it ('should be possible to refresh page', () => {
      browser.get('/question/nouvelle');
    });

    it ('should ask to choose an offer', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-selectOffer'))), 5000);
      expect(element(by.id('question-selectOffer')).getText()).toBe('Bonjour José, sélectionnez ci-dessous comment contacter un médecin');
    });

    it ('should be possible to select question offer', () => {
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-visio'))), 5000);
      browser.executeScript('arguments[0].click();', element(by.id('btn-visio')));
    });

    it ('should display offer selected', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-selectOffer'))), 5000);
      expect(element(by.id('answer-selectOffer')).getText()).toBe('Vous avez choisi l\'offre Appel Visio à 2,00€ la minute');
    });

    it ('should be possible to select speciality other', () => {
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.css('.speciality-item-specialiste'))), 5000);
      element(by.css('.speciality-item-specialiste')).click();
    });

    it ('should display other speciality chosen', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-specialityMedGen'))), 5000);
      expect(element(by.id('answer-specialityMedGen')).getText()).toBe('Vous avez choisi la thématique spécialiste');
    });

    it ('should be possible to set speciality', () => {
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('speciality-customer-card-1'))), 5000);
      browser.executeScript('arguments[0].click();', element(by.id('speciality-customer-card-1')));
    });

    it ('should display speciality selected', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-specialitySpecialist'))), 5000);
      expect(element(by.id('answer-specialitySpecialist')).getText()).toBe('Vous avez choisi la thématique Gyneco / Grossesse');
    });

    it ('should be possible to set a question', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.css('[formcontrolname="questionText"]'))), 5000);
      element(by.css('[formcontrolname="questionText"]')).sendKeys('ma question que j\'ai très mal a mon bobo, aie aie,' +
        ' allo maman bobo pourquoi tu m\'a fait je suis pas beau');
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should ask for date of birth', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-setDateOfBirth'))), 5000);
      expect(element(by.id('question-setDateOfBirth')).getText()).toBe('Quelle est votre date de naissance ?');
    });

    it ('should be possible to set a date of birth', () => {
      browser.sleep(1000);
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.css('[name="dateOfBirth"]'))), 5000);
      element(by.css('[name="dateOfBirth"]')).click();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.css('ngb-datepicker-navigation-select ' +
        'select.custom-select:nth-child(2) option[value="1980"]'))), 5000);
      element(by.css('ngb-datepicker-navigation-select select.custom-select:nth-child(2) option[value="1980"]')).click();
      element(by.css('ngb-datepicker-navigation-select select:nth-child(1) option[value="12"]')).click();
      element(by.css('ngb-datepicker-month-view .ngb-dp-week:nth-child(2) .ngb-dp-day:nth-child(7)')).click();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });


    it ('should ask for height', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-setHeight'))), 5000);
      expect(element(by.id('question-setHeight')).getText()).toBe('Quelle taille mesurez-vous ?');
    });

    it ('should be possible to set height', () => {
      browser.sleep(1000);
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('pqc-height'))), 10000);
      browser.actions().dragAndDrop(element(by.id('pqc-height')), {x: 500, y: 0}).perform();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should display height setted', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-setHeight'))), 5000);
      expect(element(by.id('answer-setHeight')).getText()).toBe('Vous mesurez 125 centimetres');
    });

    it ('should ask for weight', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-setWeight'))), 5000);
      expect(element(by.id('question-setWeight')).getText()).toBe('Quel poids faites-vous ?');
    });

    it ('should be possible to set weight', () => {
      browser.sleep(1000);
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('pqc-weight'))), 10000);
      browser.actions().dragAndDrop(element(by.id('pqc-weight')), {x: 500, y: 0}).perform();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should display weight setted', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-setWeight'))), 5000);
      expect(element(by.id('answer-setWeight')).getText()).toBe('Vous pesez 100 kilos');
    });

    it ('should ask for current treatments', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-setCurrentTreatment'))), 5000);
      expect(element(by.id('question-setCurrentTreatment')).getText()).toBe('Suivez-vous des traitements actuellement ?');
    });

    it ('should be possible to set no treatments', () => {
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.css('label[for="isCurrentTreatmentN"]'))), 5000);
      element(by.css('label[for="isCurrentTreatmentN"]')).click();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should display no treatments setted', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-setCurrentTreatment'))), 5000);
      expect(element(by.id('answer-setCurrentTreatment')).getText()).toBe('Vous ne suivez aucun traitement');
    });

    it ('should ask for allergies', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-setAllergies'))), 5000);
      expect(element(by.id('question-setAllergies')).getText()).toBe('Avez-vous des allergies connues ?');
    });

    it ('should be possible to set no allergies', () => {
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.css('label[for="isAllergiesN"]'))), 5000);
      element(by.css('label[for="isAllergiesN"]')).click();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should display no allergies setted', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-setAllergies'))), 5000);
      expect(element(by.id('answer-setAllergies')).getText()).toBe('Vous n\'avez aucune allergie connue');
    });

    it ('should ask for medical history', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-setMedicalHistory'))), 5000);
      expect(element(by.id('question-setMedicalHistory')).getText()).toBe('Avez-vous des antécédents médicaux ?');
    });

    it ('should be possible to set no medical history', () => {
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.css('label[for="isMedicalHistoryN"]'))), 5000);
      element(by.css('label[for="isMedicalHistoryN"]')).click();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should ask if pregnancy', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-setPregnancy'))), 5000);
      expect(element(by.id('question-setPregnancy')).getText()).toBe('Êtes-vous enceinte ?');
    });

    it ('should be possible to set not pregnant', () => {
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.css('label[for="PregnancyN"]'))), 5000);
      element(by.css('label[for="PregnancyN"]')).click();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should display pregnancy not selected', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-setPregnancy'))), 5000);
      expect(element(by.id('answer-setPregnancy')).getText()).toBe('Vous n\'êtes pas enceinte');
    });

    it ('should be possible to set profession', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('profession'))), 5000);
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should be possible to select card', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.css('.custom-control-label'))), 5000);
      expect(element(by.css('.custom-control-label')).getText()).toBe('- 004040******4957 - 0319');
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should display selected card', () => {
      browser.sleep(1000);
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-cardRecorded'))), 5000);
      expect(element(by.id('answer-cardRecorded')).getText()).toContain('Vous souhaitez utiliser la carte 004040******4');
    });

    it ('should ask to confirm and send question', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-confirm'))), 5000);
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-submit'))), 5000);
      expect(element(by.id('question-confirm')).getText()).toBe('Confirmer et poser votre question ?');
      //     element(by.id('btn-submit')).click();
    });
  });

  describe('current treatments and medical history tests', () => {

    beforeEach(() => {
    });

    it ('should fill form to current treatment question', () => {
      browser.get('/question/nouvelle');

      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-question10'))), 5000);
      browser.executeScript('arguments[0].click();', element(by.id('btn-question10')));
      browser.wait(browser.ExpectedConditions.visibilityOf(element.all(by.css('.spe-med-gen')).get(0)), 5000);
      browser.executeScript('arguments[0].click();', element.all(by.css('.spe-med-gen')).get(0));
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.css('[formcontrolname="questionText"]'))), 5000);
      element(by.css('[formcontrolname="questionText"]')).sendKeys('ma question que j\'ai très mal a mon bobo, aie aie,' +
        ' allo maman bobo pourquoi tu m\'a fait je suis pas beau');
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.css('label[for="genderM"]'))), 5000);
      element(by.css('label[for="genderM"]')).click();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.css('[name="dateOfBirth"]'))), 5000);
      element(by.css('[name="dateOfBirth"]')).click();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.css('ngb-datepicker-navigation-select ' +
        'select.custom-select:nth-child(2) option[value="1980"]'))), 5000);
      element(by.css('ngb-datepicker-navigation-select select.custom-select:nth-child(2) option[value="1980"]')).click();
      element(by.css('ngb-datepicker-navigation-select select:nth-child(1) option[value="12"]')).click();
      element(by.css('ngb-datepicker-month-view .ngb-dp-week:nth-child(2) .ngb-dp-day:nth-child(7)')).click();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
      browser.sleep(1000);
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('pqc-height'))), 5000);
      browser.actions().dragAndDrop(element(by.id('pqc-height')), {x: 500, y: 0}).perform();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
      browser.sleep(1000);
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('pqc-weight'))), 5000);
      browser.actions().dragAndDrop(element(by.id('pqc-weight')), {x: 500, y: 0}).perform();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
      browser.sleep(2000);
    });

    it ('should be possible to set current treatment', () => {
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.css('label[for="isCurrentTreatmentO"]'))), 5000);
      element(by.css('label[for="isCurrentTreatmentO"]')).click();
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.css('[formcontrolname="currentTreatment"]'))), 5000);
      element(by.css('[formcontrolname="currentTreatment"]')).sendKeys('Aspirine 8x jour');
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should display treatments setted', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-setCurrentTreatment'))), 5000);
      expect(element(by.id('answer-setCurrentTreatment')).getText()).toBe('Vous suivez actuellement les traitements ' +
        'suivants :\nAspirine 8x jour');
    });

    it ('should ask for allergies', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-setAllergies'))), 5000);
      expect(element(by.id('question-setAllergies')).getText()).toBe('Avez-vous des allergies connues ?');
    });

    it ('should be possible to set allergies', () => {
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.css('label[for="isAllergiesO"]'))), 5000);
      element(by.css('label[for="isAllergiesO"]')).click();
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.css('[formcontrolname="allergies"]'))), 5000);
      element(by.css('[formcontrolname="allergies"]')).sendKeys('choucroute');
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should display allergies setted', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-setAllergies'))), 5000);
      expect(element(by.id('answer-setAllergies')).getText()).toBe('Vous avez les allergies suivantes :\nchoucroute');
    });

    it ('should be possible to set medical history', () => {
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.css('label[for="isMedicalHistoryO"]'))), 5000);
      element(by.css('label[for="isMedicalHistoryO"]')).click();
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.css('[formcontrolname="medicalHistory"]'))), 5000);
      element(by.css('[formcontrolname="medicalHistory"]')).sendKeys('Bras de secours dans le dos');
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should display historic setted', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-setMedicalHistory'))), 5000);
      expect(element(by.id('answer-setMedicalHistory')).getText()).toBe('Vous indiquez les antécedents medicaux ' +
        'suivants :\nBras de secours dans le dos');
    });
  });

});
