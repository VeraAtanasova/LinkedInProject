const {} = require('@codeceptjs/configure')
//setHeadlessWhen(process.env.CI)
//setCommonPlugins()

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
        url: "http://localhost",
        show: true, 
        browser: 'chromium',
        chromium: {
          args: ['-disable-notifications',
            '--disable-extensions'
          ]
        }
    },
  },
  include: {
    I: './steps_file.js',
    LoginPage: './pageObjects/LoginPage.js',
    JobsListPage: './pageObjects/JobsListPage.js',
    HeaderPage: './pageObjects/HeaderPage.js',
  },
  name: 'playwright-codecept',
}
