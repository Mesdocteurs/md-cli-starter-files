describe('Payment', () => {

  it('should be possible to go to the page', () => {
    cy.cookieConsent();
    cy.login('dev+jp@mesdocteurs.com', 'tototoO0');
    cy.visit('/question/nouvelle');
    cy.wait(2000);
    cy.url().should('contain', '/question/nouvelle');
  });

  it ('should ask a question', () => {
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
    cy.get('label[for="isCurrentTreatmentN"]').click();
    cy.get('#btn-goToNext').click();
    cy.get('label[for="isAllergiesN"]').click();
    cy.get('#btn-goToNext').click();
    cy.get('label[for="isMedicalHistoryN"]').click();
    cy.get('#btn-goToNext').click();
    cy.get('#question-confirm').should('have.text', 'Confirmer et poser votre question ?');
    cy.get('#btn-submit').click();
    cy.get('[name="phone"]').type('0606060606');
    cy.get('#pptf-submit').click();
  });

  it('should display the payment form', () => {
    cy.get('#card-element').should('exist');
  });

  it('should try to submit the payment form', () => {
    // Enter test card data into Stripe Elements:
    cy.wait(3000);
    cy.get('.__PrivateStripeElement > iframe').then($element => {

      const $body = $element.contents().find('body');

      let stripe = cy.wrap($body);
      stripe.find('[name="cardnumber"]').type('398352758927');

      cy.get('#card-button').click();
    });
  });

  it('should display an error message', () => {
    cy.get('#patient-question-alert-payment-error').should('exist');
  });

  it('should submit the payment form', () => {
    // Enter test card data into Stripe Elements:
    cy.get('.__PrivateStripeElement > iframe').then($element => {

      const $body = $element.contents().find('body');

      let stripe = cy.wrap($body);
      stripe.find('[name="cardnumber"]').clear().type('4242424242424242');
      stripe = cy.wrap($body);
      stripe.find('[name="exp-date"]').type('0424');
      stripe = cy.wrap($body);
      stripe.find('[name="cvc"]').type('424');
      stripe = cy.wrap($body);
      stripe.find('[name="postal"]').type('42424');

      cy.get('#card-button').click();
    });
  });

  it('should display a success message', () => {
    cy.get('#patient-question-alert-payment-success').should('exist');
  });
});
