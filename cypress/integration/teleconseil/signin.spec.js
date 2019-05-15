describe('Signin page', () => {

  it('should be possible to go to the page', () => {
    cy.cookieConsent();
    cy.visit('/connexion');
  });

  it('should display an empty email form', () => {
    cy.get('[formcontrolname="email"]').should('be.empty');
    cy.get('[type="submit"]').should('have.attr', 'disabled');
  });

  it('should not be possible to submit an empty email', () => {
    cy.get('[type="submit"]').should('have.attr', 'disabled');
  });

  it('should display a link password forgotten', () => {
    cy.get('a[routerlink="/mot-de-passe-perdu"]');
  });

  it('should display a link not registered yet', () => {
    cy.get('a[routerlink="/inscription"]');
  });

  it('should display a link doctor', () => {
    cy.get('#psph-lnk-doctor');
  });

  it('should not be possible to submit with an invalid email', () => {
    cy.get('[formcontrolname="email"]').type('dev+jpmesdocteurs.com');
    cy.get('[type="submit"]').should('have.attr', 'disabled');
  });

  it('should not be possible to signin with invalid credentials', () => {
    cy.get('[type="email"]').clear();
    cy.get('[type="email"]').type('dev+jp+krkrkrk@mesdocteurs.com');
    cy.get('[type="submit"]').click();

    cy.get('.alert').contains('Email introuvable');
  });

  it ('should be possible to signin with valid credentials', ( ) => {
    cy.get('[type="email"]').clear();
    cy.get('[type="email"]').type('dev+jp@mesdocteurs.com');
    cy.get('[type="submit"]').click();
    cy.get('[type="password"]').type('tototoO0');

    cy.get('[type="submit"]').should('not.have.attr', 'disabled');
    cy.get('[type="submit"]').click();
    cy.url().should('contain', '/question/nouvelle');
  });
});
