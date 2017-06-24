'use strict';

var env = require('./support/env');
var test = require('selenium-webdriver/testing');
var createSignOnPage = require('./pages/signon_page');
var createLandingPage = require('./pages/landing_page');
var createTestDetailsLandingPage = require('./pages/testDetails_page');


test.describe.skip('Test details Page', function() {
  var signOnPage;
  var landingPage;
  var testDetailsPage;

  test.beforeEach(function() {
    signOnPage = createSignOnPage(env.driver(), env.config);
    landingPage = createLandingPage(env.driver());
    testDetailsPage = createTestDetailsLandingPage(env.driver());
  });

  test.it(' verify Test Details Page for SCA', function() {
    var signOnCredentials = env.users.findByTag('sca subscriber');
    signOnPage.signOn(signOnCredentials);
    landingPage.verifySCAlLandingPage();
    landingPage.clickItemInBucketListForTestResults(signOnCredentials);
    landingPage.verifyAtAGlance(signOnCredentials);
    landingPage.clickMoreDetailsLink();
    testDetailsPage.toggleTestDetailsPage();
    testDetailsPage.verifyTestResultsDetailsPage();
  });

});