describe('Patient profil tests suite', () => {

  it('should be possible to go to the page', () => {
    cy.cookieConsent();
    cy.login('dev+jp@mesdocteurs.com', 'tototoO0');
    cy.visit('/profil');
    cy.url({timeout: 10000}).should('contain', '/profil');
  });

  it('should display a filled page with the patient information', () => {
    cy.get('.card-title small').eq(0).should('have.text', 'Paldir José');
    cy.get('.card-title small').eq(1).should('have.text', 'dev+jp@mesdocteurs.com');
    cy.get('.card-title small').eq(2).should('have.text', '18 rue de l\'amour 13090 Aix en Provence');
    cy.get('.card-title small').eq(3).should('have.text', 'Homme');
  });

  it('should be able to go to the edit page from the details page', () => {
    cy.get('[routerlink="/profil/modifier"]').click();

    cy.url().should('contain', '/profil/modifier');
  });

  it ('should display a filled form', () => {
    cy.get('[formcontrolname="lastname"]').should('have.value', 'Paldir');
    cy.get('[formcontrolname="firstname"]').should('have.value', 'José');
    cy.get('[formcontrolname="phone"]').should('have.value', '');
    cy.get('[formcontrolname="address"]').should('have.value', '18 rue de l\'amour');
    cy.get('[formcontrolname="zipCode"]').should('have.value', '13090');
    cy.get('[formcontrolname="city"]').should('have.value', 'Aix en Provence');
  });
});

