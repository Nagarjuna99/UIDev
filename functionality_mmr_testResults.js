
'use strict';

var env = require('./support/env');
var webdriver = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');
var createSignOnPage = require('./pages/signon_page');
var createLandingPage = require('./pages/landing_page');
var createImmunizationsPage = require('./pages/immunizations_page');
var createAllergiesPage = require('./pages/allergies_page');



test.describe.skip('Test Results Page', function() {
  var signOnPage;
  var landingPage;
  var immunizationsPage;
  var allergiesPage;



  test.beforeEach(function(done) {
    signOnPage = createSignOnPage(env.driver(), env.config);
    landingPage = createLandingPage(env.driver());
    immunizationsPage = createImmunizationsPage(env.driver());
    allergiesPage = createAllergiesPage(env.driver());
    done();
  });

  test.xit(' ---> verify at-a-glance', function() {
    var signOnCredentials = env.users.findByTag('sca subscriber');
    signOnPage.signOn(signOnCredentials);
    landingPage.verifySCAlLandingPage();
    landingPage.clickTestResult(signOnCredentials);
    landingPage.verifyAtAGlance(signOnCredentials);
  });

  test.it(' ---> verify sort modal-popup', function() {
    var signOnCredentials = env.users.findByTag('sca subscriber');
    signOnPage.signOn(signOnCredentials);
    landingPage.verifySCAlLandingPage();
    landingPage.clickSomeResultsLinkSCA();
    landingPage.verifySortByModal();
  });

  test.it('---> verify get-help-with test result link', function() {
    var signOnCredentials = env.users.findByTag('sca subscriber');
    signOnPage.signOn(signOnCredentials);
    landingPage.verifySCAlLandingPage();
    landingPage.clickHelpTestResults();
    landingPage.verifyHelpWithTestResultsPage();

  });

});