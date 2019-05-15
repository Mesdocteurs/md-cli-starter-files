describe('Card Bank page', () => {

  describe('Remove card with not finished paiement', () => {

    it('should be possible to go to the page', () => {
      cy.cookieConsent();
      cy.login('dev+jp@mesdocteurs.com', 'tototoO0');
      cy.visit('/informations-bancaires');
    });

    it('should display a card', () => {
      cy.get('.card-credit');
      cy.get('.card-credit .card-title').contains('CARTE DE PAIEMENT');
      cy.get('.card-credit .card-text').contains('004040******4');
    });
  });
});

describe('Remove card when possible (another user)', () => {

  it('should be possible to go to the page', () => {
    cy.cookieConsent();
    cy.login('dev+luiz@mesdocteurs.com', 'tototoO0');
    cy.visit('/informations-bancaires');
  });

  it('should display a card', () => {
    cy.get('.card-credit');
    cy.get('.card-credit .card-title').contains('CARTE DE PAIEMENT');
    cy.get('.card-credit .card-text').contains('004040******4956');
  });

  it('should be possible to remove a card', () => {
    cy.get('#pbbh-btn').click();
    cy.get('.alert-success').contains('Votre carte a été correctement supprimée');
  });

});
