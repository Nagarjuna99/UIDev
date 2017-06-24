'use strict';

var env = require('./support/env');
var webdriver = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');
var createSignOnPage = require('./pages/signon_page');
var createLandingPage = require('./pages/landing_page');
var createImmunizationsPage = require('./pages/immunizations_page');

test.describe.skip('Immunizations Page', function() {
  var signOnPage;
  var landingPage;
  var immunizationsPage;

  test.beforeEach(function(done) {
    signOnPage = createSignOnPage(env.driver(), env.config);
    landingPage = createLandingPage(env.driver());
    immunizationsPage = createImmunizationsPage(env.driver());
    done();
  });

  test.it(' ---> verify SCA Immunizations page', function() {
    var signOnCredentials = env.users.findByTag('sca subscriber');
    signOnPage.signOn(signOnCredentials);
    landingPage.verifySCAlLandingPage();
    landingPage.selectMMRFeature('Immunizations');
    immunizationsPage.verifyImmunizationsPage();
  });

  test.it('---> verify NCA Immunizations page', function() {
    var signOnCredentials = env.users.findByTag('nca subscriber');
    signOnPage.signOn(signOnCredentials);
    landingPage.verifyNCAlLandingPage();
    landingPage.selectMMRFeature('Immunizations');
    immunizationsPage.verifyImmunizationsPage();
  });
});