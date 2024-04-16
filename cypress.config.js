const { defineConfig } = require("cypress");

module.exports = defineConfig({
  retries: 1,
  video:true,
  e2e: {
    baseUrl: "https://www.demoblaze.com",
    "screenshotFolder": "cypress/screenshots",
    "screenshotOnRunFailure": true, 
    
    setupNodeEvents(on, config) {
    },
  },
});
