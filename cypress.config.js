const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    
    "watchForFileChanges": false,
    "requestTimeout": 50000,
    "chromeWebSecurity":false,
    "defaultCommandTimeout":30000,
    "pageLoadTimeout":200000,
    "screenshotOnRunFailure":true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    env: {
      "baseUrl": 'https://www.saucedemo.com/v1/index.html'
    },
  },
});
