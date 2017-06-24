'use strict';

var env = require('./support/env');
var webdriver = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');
var createSignOnPage = require('./pages/signon_page');
var createLandingPage = require('./pages/landing_page');
var createAllergiesPage = require('./pages/allergies_page');


test.describe.skip('Allergies Page', function() {
  var signOnPage;
  var landingPage;
  var allergiesPage;


  test.beforeEach(function(done) {
    signOnPage = createSignOnPage(env.driver(), env.config);
    landingPage = createLandingPage(env.driver());
    allergiesPage = createAllergiesPage(env.driver());
    done();
  });

  test.it('verify SCA Allergies page', function() {
    var signOnCredentials = env.users.findByTag('sca subscriber');
    signOnPage.signOn(signOnCredentials);
    landingPage.verifySCAlLandingPage();
    landingPage.selectMMRFeature('Allergies');
    allergiesPage.verifyAllergiesPage();
  });

  test.it(' ---> verify  NCA Allergies page', function() {
    var signOnCredentials = env.users.findByTag('nca subscriber');
    signOnPage.signOn(signOnCredentials);
    landingPage.verifyNCAlLandingPage();
    landingPage.selectMMRFeature('Allergies');
    allergiesPage.verifyAllergiesPage();
  });

});