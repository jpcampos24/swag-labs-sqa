const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
      baseUrl: 'https://www.saucedemo.com/v1/index.html',
      specPattern: 'cypress/e2e/**/*.cy.js',
      supportFile: 'cypress/support/e2e.js',
      video: true, // ✅ activa la grabación de video
      screenshotOnRunFailure: true, // ✅ toma screenshots en errores
    },
  },
);
