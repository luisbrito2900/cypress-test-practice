const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  defaultCommandTimeout: 30000,
  retries: 2,
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "SauceDemo",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    ignoreVideos: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    specPattern: "cypress/e2e/Lumastore/**.spec.js",
  },
});
