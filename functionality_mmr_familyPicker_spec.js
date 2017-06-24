'use strict';

var env = require('./support/env');
var webdriver = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');
var createSignOnPage = require('./pages/signon_page');
var createLandingPage = require('./pages/landing_page');
var createAllergiesPage = require('./pages/allergies_page');


test.describe('UI family-selector for all Regions', function() {
  var signOnPage;
  var landingPage;
  var allergiesPage;


  test.beforeEach(function(done) {
    signOnPage = createSignOnPage(env.driver(), env.config);
    landingPage = createLandingPage(env.driver());
    allergiesPage = createAllergiesPage(env.driver());
    done();
  });

  test.it(' ---> verify family-selector for SCA subscriber', function() {
    var signOnCredentials = env.users.findByTag('sca subscriber');
    signOnPage.tempsignOn(signOnCredentials);
    //signOnPage.signOn(signOnCredentials);
    //signOnPage.localTempUrl();
    landingPage.verifyLandingPage();

    landingPage.selectTeen();
   // landingPage.verifyLandingPage();
    //landingPage.selectChild(signOnCredentials);
   // landingPage.verifyLandingPage();*/
    //allergiesPage.verifyAllergiesPage();
    /*landingPage.selectSpouse(signOnCredentials);
    landingPage.verifyLandingPage();*/
    //landingPage.selectChild(signOnCredentials);
    //landingPage.verifySCAlLandingPage();

  });

  test.xit(' ---> verify family-selector for NCA subscriber', function() {
    //var signOnCredentials = env.users.findByTag('nca subscriber');
    signOnPage.localTempUrl();
    landingPage.verifyNCAlLandingPage();

    //landingPage.selectTeen(signOnCredentials);
    //allergiesPage.verifyAllergiesPage();
    //        landingPage.selectChild(signOnCredentials);
    //        landingPage.verifyNCAlLandingPage();
    landingPage.selectSpouse(signOnCredentials);
    //landingPage.verifyNCAlLandingPage();
  });

  test.xit(' ---> verify family-selector for KNW subscriber', function() {
    var signOnCredentials = env.users.findByTag('nca subscriber');
    signOnPage.signOn(signOnCredentials);
    landingPage.verifyNorthWestLandingPage();
    landingPage.selectTeen(signOnCredentials);
    allergiesPage.verifyAllergiesPage();
    landingPage.selectChild(signOnCredentials);
    landingPage.verifyNorthWestLandingPage();
    landingPage.selectSpouse(signOnCredentials);
    landingPage.verifyNorthWestLandingPage();
  });

  test.xit(' ---> verify family-selector for MAS subscriber', function() {
    var signOnCredentials = env.users.findByTag('mas subscriber');
    signOnPage.signOn(signOnCredentials);
    landingPage.verifyMASLandingPage();
    landingPage.selectTeen(signOnCredentials);
    allergiesPage.verifyAllergiesPage();
    landingPage.selectChild(signOnCredentials);
    landingPage.verifyMASLandingPage();
    landingPage.selectSpouse(signOnCredentials);
    landingPage.verifyMASLandingPage();
  });

  test.xit(' ---> verify family-selector for HI subscriber', function() {
    var signOnCredentials = env.users.findByTag('HI subscriber');
    signOnPage.signOn(signOnCredentials);
    landingPage.verifyHiLandingPage();
    landingPage.selectTeen(signOnCredentials);
    allergiesPage.verifyAllergiesPage();
    landingPage.selectChild(signOnCredentials);
    landingPage.verifyHiLandingPage();
    landingPage.selectSpouse(signOnCredentials);
    landingPage.verifyHiLandingPage();
  });

  test.xit(' ---> verify family-selector for CO subscriber', function() {
    var signOnCredentials = env.users.findByTag('CO subscriber');
    signOnPage.signOn(signOnCredentials);
    landingPage.verifyCoLandingPage();
    landingPage.selectTeen(signOnCredentials);
    allergiesPage.verifyAllergiesPage();
    landingPage.selectChild(signOnCredentials);
    landingPage.verifyCoLandingPage();
    landingPage.selectSpouse(signOnCredentials);
    landingPage.verifyCoLandingPage();
  });

  test.xit(' ---> verify family-selector for GA subscriber', function() {
    var signOnCredentials = env.users.findByTag('GA subscriber');
    signOnPage.signOn(signOnCredentials);
    landingPage.verifyGaLandingPage();
    landingPage.selectTeen(signOnCredentials);
    allergiesPage.verifyAllergiesPage();
    landingPage.selectChild(signOnCredentials);
    landingPage.verifyGaLandingPage();
    landingPage.selectSpouse(signOnCredentials);
    landingPage.verifyGaLandingPage();
  });



});