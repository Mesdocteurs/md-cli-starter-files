// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('cookieConsent', () => {
  cy.setCookie('cookieconsent_status', 'dismiss');
});

Cypress.Commands.add('login', (email, password) => {
  const params = {
    email: email,
    password: password
  };

  cy.request('POST', 'https://0.0.0.0:3001/api/AppUsers/login?include=user', params)
    .then((response) => {
      cy.setCookie('$LoopBackSDK$created', response.body.created);
      cy.setCookie('$LoopBackSDK$id', response.body.id);
      cy.setCookie('$LoopBackSDK$rememberMe', 'true');
      cy.setCookie('$LoopBackSDK$ttl', response.body.ttl.toString());
      cy.setCookie('$LoopBackSDK$userId', response.body.userId.toString());

      cy.request({
        url: `https://0.0.0.0:3001/api/AppUsers/${response.body.userId}/customer`,
        method: 'GET',
        headers: {Authorization: response.body.id}
      }).then((response) => {
        cy.setCookie('$LoopBackSDK$user', encodeURIComponent(
          JSON.stringify(response.body)).replace(/%2C/g,',').replace(/%3A/g, ':'));
      });
    });

});
