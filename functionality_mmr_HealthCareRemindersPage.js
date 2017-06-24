'use strict';

var env = require('./support/env');
var webdriver = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');
var createSignOnPage = require('./pages/signon_page');
var createLandingPage = require('./pages/landing_page');
var createHealthCareRemindersPage = require('./pages/healthCareReminders_Page');

test.describe.skip('Health Care Reminders Page', function() {
  var signOnPage;
  var landingPage;
  var healthCareRemindersPage;

  test.beforeEach(function(done) {
    signOnPage = createSignOnPage(env.driver(), env.config);
    landingPage = createLandingPage(env.driver());
    healthCareRemindersPage = createHealthCareRemindersPage(env.driver());
    done();
  });

  test.it(' ---> verify SCA Health Care Reminders page', function() {
    var signOnCredentials = env.users.findByTag('sca subscriber');
    signOnPage.signOn(signOnCredentials);
    landingPage.verifySCAlLandingPage();
    landingPage.selectMMRFeature('Health Care Reminders');
    healthCareRemindersPage.verifyHealthCareReminderPage();
  });

});