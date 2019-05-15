describe('Home page', () => {
  it('should accept the cookies', () => {
    cy.visit('/');

    cy.get('.cc-dismiss').click();
    cy.get('[aria-label="cookieconsent"]').should('have.class', 'cc-invisible');
  });
});
