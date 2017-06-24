'use strict';

var env = require('./support/env');
var webdriver = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');
var createSignOnPage = require('./pages/signon_page');
var createLandingPage = require('./pages/landing_page');
var createAllergiesPage = require('./pages/onGoingHealthConditions_page');

test.describe('Ongoing Health Conditions', function() {
  var signOnPage;
  var landingPage;
  var onGoingHealthConditionsPage;
  test.beforeEach(function(done) {
    signOnPage = createSignOnPage(env.driver(), env.config);
    landingPage = createLandingPage(env.driver());
    onGoingHealthConditionsPage = createAllergiesPage(env.driver());
    done();
  });

  test.it(' ---> verify SCA Immunizations page', function() {
    var signOnCredentials = env.users.findByTag('sca subscriber');
    signOnPage.signOn(signOnCredentials);
    landingPage.verifySCAlLandingPage();
    landingPage.selectMMRFeature('Ongoing Health Conditions');
    onGoingHealthConditionsPage.verifyOnGoingHealthConditionsPageSCA();
  });

  test.iit(' ---> verify NCA Immunizations page', function(done) {
    debugger;
    var signOnCredentials = env.users.findByTag('nca subscriber');
    signOnPage.signOn(signOnCredentials);
    landingPage.verifyNCAlLandingPage();
    landingPage.selectMMRFeature('Ongoing Health Conditions');
    onGoingHealthConditionsPage.verifyOnGoingHealthConditionsPageNCA();
  });

});