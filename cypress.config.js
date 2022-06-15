const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "qa-automation-front",
  video: false,
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 60000,
  requestTimeout: 5000,
  discardUncaughtJsExceptions: false,
  failOnStatusCode: false,
  chromeWebSecurity: false,
  viewportWidth: 2560,
  viewportHeight: 1080,
  reporter: "mochawesome",

  reporterOptions: {
    reportDir: "reports",
    embeddedScreenshots: true,
    overwrite: true,
    html: true,
    json: true,
  },

  // env: {
  //   URL_AUTOMATION: "https://automacaocombatista.herokuapp.com/users/new",
  // },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
