const LoginPage = require('./pageObjects/LoginPage')
const JobsListPage = require('./pageObjects/JobsListPage')
const HeaderPage = require('./pageObjects/HeaderPage')

Feature('Navigate LinkedIn Test')

 Before(async({ I }) => {
  console.log('BEFORE HOOK')
  const tt = I.amOnPage('http://linkedin.com')
 }),


After(({ I }) => {
  console.log('AFTER HOOK')
})

Scenario('Navigate Jobs page in LinkedIn', ({ I, LoginPage, HeaderPage, JobsListPage }) => {
    LoginPage.clickJobsIcon();
    HeaderPage.findAndPopulateLocationField();
    JobsListPage.selectFirstJob();
    JobsListPage.openNewTabCurrentUrl();
  })