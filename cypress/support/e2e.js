// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
// Evita que errores JS tempranos corten la prueba mientras diagnosticamos
Cypress.on('uncaught:exception', () => false);

// Intercepta tanto con dominio absoluto como cuando llega como ruta relativa (/api/...)
beforeEach(() => {
  // Con dominio (p.ej. https://events.backtrace.io/...)
  cy.intercept('POST', '**/events.backtrace.io/**', { statusCode: 204, body: '' });

  // Rutas relativas vistas en tu log
  cy.intercept('POST', '**/api/unique-events/submit**', { statusCode: 204, body: '' });
  cy.intercept('POST', '**/api/summed-events/submit**', { statusCode: 204, body: '' });

  // (Opcional) otros terceros típicos
  cy.intercept('GET',  '**/www.googletagmanager.com/**', { statusCode: 204, body: '' });
  cy.intercept('POST', '**/google-analytics.com/**',      { statusCode: 204, body: '' });
  cy.intercept('POST', '**/stats.g.doubleclick.net/**',   { statusCode: 204, body: '' });
});