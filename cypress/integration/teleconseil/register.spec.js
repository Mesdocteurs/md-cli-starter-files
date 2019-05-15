describe('Register page', () => {

  it('should be possible to go to the page', () => {
    cy.cookieConsent();
    cy.visit('/inscription');
  });

  it('should display an empty form', () => {
    cy.get('[formcontrolname="firstname"]').should('be.empty');
    cy.get('[formcontrolname="email"]').should('be.empty');
    cy.get('[formcontrolname="password"]').should('be.empty');
    cy.get('[formcontrolname="isNewsletter"]').should('be.empty');
    cy.get('[formcontrolname="isChosen"]').should('be.empty');
    cy.get('[type="submit"]').should('have.attr', 'disabled');
  });

  it('should not be possible to submit an empty form', () => {
    cy.get('[type="submit"]').should('have.attr', 'disabled');
  });

  it('should display 2 consentments', () => {
    cy.get('[name="isChosen"]').its('length').should('eq', 2);
  });

  it('should not be possible to submit a form with invalid data', () => {
    cy.get('[name="firstname"]').type('Jean-Pierrot');
    cy.get('[type="email"]').type('dev+jpmesdocteurs.com');
    cy.get('[type="password"]').type('tototo');
    cy.get('.form-check-label').eq(0).click();

    // Error password message
    cy.get('small.text-danger').contains('Le mot de passe doit contenir 8 caractères, au moins une majuscule et un chiffre');
    cy.get('[type="submit"]').should('have.attr', 'disabled');

    cy.get('[type="email"]').clear();
    cy.get('[type="email"]').type('dev+jp17@mesdocteurs.com');
    cy.get('[type="submit"]').should('have.attr', 'disabled');

    // check 2 consent
    cy.get('.form-check-label').eq(1).click();
    cy.get('[type="submit"]').should('have.attr', 'disabled');

    cy.get('.form-check-label').eq(2).click();
    cy.get('[type="submit"]').should('have.attr', 'disabled');


  });

  it('should be possible to submit a form with valid data', () => {
    // valid pass
    cy.get('[type="password"]').clear();
    cy.get('[type="password"]').type('tototoO0');
    cy.get('[type="submit"]').should('not.have.attr', 'disabled');

    cy.get('[type="submit"]').click();

    cy.url().should('contain', '/question/nouvelle');
  });
});
