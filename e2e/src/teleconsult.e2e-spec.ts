import { by, browser, element } from 'protractor';

const randomNumber = Math.floor(Math.random() * Math.floor(10000));

describe('PARTNER_NAMESPACE tests suite', () => {

  describe('Connexion tests suite', () => {

    it ('should be possible to accept the cookies', () => {
      browser.manage().deleteCookie('cookieconsent_status');
      browser.get('/');
      expect(element(by.css('[aria-label="cookieconsent"]')).isPresent()).toBeTruthy();
      element(by.css('.cc-dismiss')).click();
      expect(element(by.css('[aria-label="cookieconsent"]')).getAttribute('class')).toContain('cc-invisible');
    });

    it('should be possible to signin', () => {
      browser.waitForAngularEnabled(false);
      browser.get('https://0.0.0.0:3001/test/PARTNER_NAMESPACE');
    });

    it ('should display 2 consentments to accept', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element.all(by.css('h1.display-4')).get(0)), 5000);
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

  describe('Ask question tests suite', () => {
    it ('should display a valid page title', () => {
      expect(browser.getTitle()).toEqual('MesDocteurs | Poser une question');
    });

    it ('should display a bot message', () => {
      expect(element(by.id('question-selectOffer')).getText()).toContain('sélectionnez ci-dessous comment contacter un médecin');
    });

    it ('should display 3 offers', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element.all(by.css('app-patient-product-item')).get(0)), 5000);
      expect(element.all(by.css('app-patient-product-item')).count()).toEqual(3);
    });

    it ('should be possible to ask a question visio', () => {
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-visioTeleconsultation'))), 5000);
      browser.executeScript('arguments[0].click();', element(by.id('btn-visioTeleconsultation')));

      expect(element(by.id('answer-selectOffer')).getText()).toBe('Vous avez choisi l\'offre Appel Visio offerte');
    });

    // it ('should be possible to ask a question dermatology', () => {
    //   browser.sleep(1000);
    //   expect(element(by.id('question-selectSpeciality')).getText()).toBe('Mauricette, choisissez ci-dessous le thème de votre question');
    //   browser.sleep(1000);
    //
    //   element(by.id('speciality-customer-card-2')).click();
    //   expect(element(by.id('answer-selectSpeciality')).getText()).toBe('Vous avez choisi la thématique Dermatologie');
    // });

    it ('should be possible to change to select a speciality dermatology', () => {
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.css('.speciality-item-specialiste'))), 5000);
      element(by.css('.speciality-item-specialiste')).click();
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-specialityMedGen'))), 5000);
      expect(element(by.id('answer-specialityMedGen')).getText()).toBe('Vous avez choisi la thématique spécialiste');
      browser.executeScript('arguments[0].click();', element(by.id('speciality-customer-card-2')));
      // element(by.id('speciality-customer-card-2')).click();
    });

    it ('should be possible to write a question', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-setQuestion'))), 5000);
      expect(element(by.id('question-setQuestion')).getText()).toBe('Mauricette, décrivez maintenant votre symptôme');
      element(by.css('[name="questionText"]')).sendKeys('ma question que j\'ai très mal a mon bobo, aie aie, allo maman bobo pourquoi tu m\'a fait je suis pas beau');
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('answer-setQuestion'))), 5000);
      expect(element(by.id('answer-setQuestion')).getText()).toBe('Vous posez la question suivante : ma question que j\'ai très mal a mon bobo, aie aie, allo maman bobo pourquoi tu m\'a fait je suis pas beau');
    });

    it ('should be possible to select gender', () => {
      browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id('question-setGender'))), 5000);
      expect(element(by.id('question-setGender')).getText()).toBe('De quel sexe êtes-vous ?');

      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.css('label[for="genderM"]'))), 5000);
      element(by.css('label[for="genderM"]')).click();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should be possible to set a date of birth', () => {
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.css('[name="dateOfBirth"]'))), 5000);
      element(by.css('[name="dateOfBirth"]')).click();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by
        .css('ngb-datepicker-navigation-select select.custom-select:nth-child(2) option[value="1980"]'))), 5000);
      element(by.css('ngb-datepicker-navigation-select select.custom-select:nth-child(2) option[value="1980"]')).click();
      element(by.css('ngb-datepicker-navigation-select select:nth-child(1) option[value="12"]')).click();
      element(by.css('ngb-datepicker-month-view .ngb-dp-week:nth-child(2) .ngb-dp-day:nth-child(7)')).click();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
      // browser.sleep(1000);
      // element(by.css('[name="dateOfBirth"]')).click();
      // // browser.sleep(2000);
      // element(by.css('ngb-datepicker-navigation-select select.custom-select:nth-child(2) option[value="1980"]')).click();
      // // browser.sleep(2000);
      // element(by.css('ngb-datepicker-navigation-select select:nth-child(1) option[value="12"]')).click();
      // // browser.sleep(2000);
      // element(by.css('ngb-datepicker-month-view .ngb-dp-week:nth-child(2) .ngb-dp-day:nth-child(7)')).click();
      // // browser.sleep(20000);
      // element(by.id('btn-goToNext')).click();
    });


    it ('should be possible to set height', () => {
      browser.sleep(1000);
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('pqc-height'))), 5000);
      browser.actions().dragAndDrop(element(by.id('pqc-height')), {x: 500, y: 0}).perform();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should be possible to set weight', () => {
      browser.sleep(1000);
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('pqc-weight'))), 5000);
      browser.actions().dragAndDrop(element(by.id('pqc-weight')), {x: 300, y: 0}).perform();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should be possible to set current treatments', () => {
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.css('label[for="isCurrentTreatmentN"]'))), 5000);
      element(by.css('label[for="isCurrentTreatmentN"]')).click();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should be possible to set allergies', () => {
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.css('label[for="isAllergiesN"]'))), 5000);
      element(by.css('label[for="isAllergiesN"]')).click();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should be possible to set medical history', () => {
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.css('label[for="isMedicalHistoryN"]'))), 5000);
      element(by.css('label[for="isMedicalHistoryN"]')).click();
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    // it ('should be possible to set a contact phone', () => {
    //   element(by.css('[name="contactPhone"]')).sendKeys('06 43 45 43 56');
    //   element(by.id('btn-goToNext')).click();
    // });

    it ('should be possible to set a profession', () => {
      element(by.css('[name="profession"]')).sendKeys('Charpentier');
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-goToNext'))), 5000);
      element(by.id('btn-goToNext')).click();
    });

    it ('should be possible to submit form', () => {
      browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.id('btn-submit'))), 5000);
      element(by.id('btn-submit')).click();
    });
  });

  describe('Profil page test suite', () => {

    it ('should have a valid page title', () => {
      browser.get('/patient/mon-profil');
      expect(browser.getTitle()).toEqual('Harmonie Mutuelle');
    });

    it ('should display 1 blocks', () => {
      expect(element.all(by.css('.card')).count()).toEqual(1);
    });

    it ('should display a block Informations personnelles', () => {
      expect(element.all(by.css('.card .card-title')).get(0).getText()).toBe('Mes informations personnelles');
      expect(element.all(by.css('em')).get(0).getText()).toBe('Modifier mes informations');
    });

    // it ('should display a block Ma pharmacie', () => {
    //   expect(element.all(by.css('.card .card-title')).get(1).getText()).toBe('Ma pharmacie');
    //   expect(element.all(by.css('em')).get(1).getText()).toBe('Gérer ma pharmacie');
    // });

    // it ('should display a block Mes consentements', () => {
    //   expect(element.all(by.css('em')).get(2).getText()).toBe('Historique de mes factures');
    // });
  });

  describe('Profil detail page', () => {

    it ('should have a valid page title', () => {
      browser.get('/patient/mon-profil/detail');
      expect(browser.getTitle()).toEqual('MesDocteurs | Mon profil');
    });

    it ('should display a valid title', () => {
      expect(element(by.css('h1.display-4')).getText()).toBe('Mon profil');
    });

    // @todo trop compliqué a tester (selector avec seul parent pour test libelle et selector sur small pour le test réponse), reformater le html
    // it('it should display firstname and lastname', () => {
    //   expect(element.all(by.css('h4.card-title')).get(0).getText()).toBe('Nom & Prénom');
    //   // expect(element.all(by.css('h4.card-title small')).get(0).getText()).toBe('');
    //
    //   browser.sleep(30000);
    // })

    // Nom & Prénom
    // Raton Candy
    // Email
    // dev+santeclair@mesdocteurs.com
    // Adresse
    // 43 chemin du lac vert 13001 Marseille
    // Genre
    // Femme
    // Profession
    // Assistante de direction
    // Age
    // 63 ans
    // Service de téléconsultation
    // vous bénéficiez de ce service grâce à votre mutuelle
    // Crédit restant
    // Il vous reste 5 téléconsultation(s)
    // Renseignez au mieux votre profil afin que la réponse de nos médecins soit la plus pertinente possible
  });
});
