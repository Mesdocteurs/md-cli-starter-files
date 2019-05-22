describe('Rating more than 2', () => {

  it('should be possible to go to the page question 2', () => {
    cy.cookieConsent();
    cy.login('dev+jp@mesdocteurs.com', 'tototoO0');
    cy.visit('/question/2/detail');
    cy.url({timeout: 10000}).should('contain', '/question/2/detail');
  });

  it('Should display a rate popup', () => {
    cy.get('.modal-title').contains('Comment s\'est déroulée votre expérience MesDocteurs ?');
  });

  it('should be possible to rate 5', () => {
    cy.get('ngb-rating span').eq(9).click();
    cy.get('[type="submit"]').click();
  });

  it('should display a comment form', () => {
    cy.get('.modal-title').contains('Merci d\'avoir noté le service MesDocteurs !');
  });

  it('should be possible to send  a message', () => {
    cy.get('[name="description"]').type('fuck off');
    cy.get('[type="submit"]').click();
  });
});

describe('Rating less than 3 with thumbs up tests suite', () => {

  it('should be possible to go to the page question 12', () => {
    cy.cookieConsent();
    cy.login('dev+jp@mesdocteurs.com', 'tototoO0');
    cy.visit('/question/12/detail');
  });

  it('Should display a rate popup', () => {
    cy.get('.modal-title').contains('Comment s\'est déroulée votre expérience MesDocteurs ?');
  });

  it ('should be possible to rate 2', () => {
    cy.get('ngb-rating span').eq(3).click();
    cy.get('[type="submit"]').click();
  });

  it ('should be possible to click thumbs up', () => {
    cy.get('[for="thumbs-up"]').click();
    cy.get('[type="submit"]').click();
  });

  it('should be possible to send  a message', () => {
    cy.get('[name="description"]').type('fuck off');
    cy.get('[type="submit"]').click();
  });
});

describe('Rating less than 3 with thumbs down tests suite', () => {

  it('should be possible to go to the page question 12', () => {
    cy.cookieConsent();
    cy.login('dev+jp@mesdocteurs.com', 'tototoO0');
    cy.visit('/question/13/detail');
  });

  it('Should display a rate popup', () => {
    cy.get('.modal-title').contains('Comment s\'est déroulée votre expérience MesDocteurs ?');
  });

  it ('should be possible to rate 2', async () => {
    cy.get('ngb-rating span').eq(3).click();
    cy.get('[type="submit"]').click();
  });

  it ('should be possible to click thumbs down', async () => {
    cy.get('[for="thumbs-down"]').click();
    cy.get('[type="submit"]').click();
  });

  it('should be possible to select a reason', async () => {
    cy.get('[name="reason-selector"]').eq(2).click();
    cy.get('[name="description"]').type('fuck off');
    cy.get('[type="submit"]').click();
  });
});
