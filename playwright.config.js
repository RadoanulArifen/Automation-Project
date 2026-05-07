const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({

  testDir: './tests',

  timeout: 60000,

reporter: [
  ['list'],
  ['html'],
  ['allure-playwright']
],

  use: {
    browserName: 'chromium',
    headless: false,

    launchOptions: {
      executablePath: '/usr/bin/google-chrome'
    }
  }

});