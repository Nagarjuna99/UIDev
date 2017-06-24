
/**
 * Created by KennethObikwelu on 10/2/15.
 */


'use strict';

var env = require('./support/env');
var webdriver = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');
var createSignOnPage = require('./pages/signon_page');
var createLandingPage = require('./pages/landing_page');
var createAllergiesPage = require('./pages/allergies_page');


test.describe.skip('UI Entitlements for all Regions', function() {
  var signOnPage;
  var landingPage;
  var allergiesPage;


  test.beforeEach(function(done) {
    signOnPage = createSignOnPage(env.driver(), env.config);
    landingPage = createLandingPage(env.driver());
    allergiesPage = createAllergiesPage(env.driver());
    done();
  });
   
  //Self
  
   test.it(' ---> Verify that Logged in KNW Adult can view Entitled features for self ', function() {
    var signOnCredentials = env.users.findByTag('north west subscriber');
    signOnPage.signOn(signOnCredentials);
    landingPage.verifyKNwLandingPage();
    landingPage.verifyEntitlements(new Array("Test Results","Allergies","Immunizations",
    "On going Health Conditions","Health Care Reminders","Past Office Vist Informations","Health Summary",
    "Hospital Stays","Letters","Download my Health Records","Download(PVI and Hospital Stays)",
    "Transmit CE","Transmit DE","Questioneers(list of)","Personal Action Plan"));
  });

     test.it(' ---> Verify that Logged in NCA Adult can view Entitled features for self proxy'
    , function() {
      var signOnCredentials = env.users.findByTag('nca subscriber');
      signOnPage.signOn(signOnCredentials);
      landingPage.verifyNCAlLandingPage();
      landingPage.verifyEntitlements(new Array("Test Results","Allergies","Immunizations","Track my Health",
    "On going Health Conditions","Health Care Reminders","Past Office Vist Informations", "Health Summary",
    "Hospital Stays","Download my Health Records","Download(PVI and Hospital Stays)",
    "Transmit CE","Transmit DE","Questioneers(list of)","Personal Action Plan"));
    });

     test.it(' ---> Verify that Logged in SCA Adult can view Entitled features for self proxy', function() {
      var signOnCredentials = env.users.findByTag('sca subscriber');
      signOnPage.signOn(signOnCredentials);
      landingPage.verifySCAlLandingPage();
      landingPage.verifyEntitlements(new Array("Test Results","Allergies","Immunizations","Track my Health",
    "On going Health Conditions","Health Care Reminders","Past Office Vist Informations", "Health Summary",
    "Hospital Stays","Download my Health Records","Download(PVI and Hospital Stays)",
    "Transmit CE","Transmit DE","Questioneers(list of)","Personal Action Plan"));
    });

     test.it(' ---> Verify that Logged in HAW Adult can view Entitled features for self proxy', function() {
      var signOnCredentials = env.users.findByTag('HAW subscriber');
      signOnPage.signOn(signOnCredentials);
      landingPage.verifyHAWLandingPage();
      landingPage.verifyEntitlements(new Array("Test Results","Allergies","Immunizations","Wallet card",
    "On going Health Conditions","Health Care Reminders","Past Office Vist Informations", "Health Summary",
    "Hospital Stays","Growth charts","Download my Health Records","Download(PVI and Hospital Stays)",
    "Transmit CE","Transmit DE","Questioneers(list of)"));
    });

     test.it(' ---> Verify that Logged in CO Adult can view Entitled features for self proxy', function() {
      var signOnCredentials = env.users.findByTag('CO subscriber');
      signOnPage.signOn(signOnCredentials);
      landingPage.verifyCOLandingPage();
      landingPage.verifyEntitlements(new Array("Test Results","Allergies","Immunizations","Wallet card",
    "On going Health Conditions","Health Care Reminders","Past Office Vist Informations", 
    "Health Summary","Track my health","Questioneers(list of)"));
    });

     test.it(' ---> Verify that Logged in GA Adult can view Entitled features for self proxy', function() {
      var signOnCredentials = env.users.findByTag('GA subscriber');
      signOnPage.signOn(signOnCredentials);
      landingPage.verifyGALandingPage();
      landingPage.verifyEntitlements(new Array("Test Results","Allergies","Immunizations","Wallet card",
    "On going Health Conditions","Health Care Reminders","Past Office Vist Informations",
     "Health Summary","Track my health"    ));
    });

      test.it(' ---> Verify that Logged in MAS Adult can view Entitled features for self proxy', function() {
      var signOnCredentials = env.users.findByTag('mas subscriber');
      signOnPage.signOn(signOnCredentials);
      landingPage.verifyMASLandingPage();
      landingPage.verifyEntitlements(new Array("Test Results","Allergies","Immunizations","Wallet card",
    "On going Health Conditions","Health Care Reminders","Past Office Vist Informations",
     "Health Summary","Track my health"  ));
    });

      //Spouse

      test.it(' ---> Verify that Logged in KNW Adult can view Entitled features for Spouse proxy', function() {
    var signOnCredentials = env.users.findByTag('north west subscriber');
    signOnPage.signOn(signOnCredentials);
    landingPage.verifyKNwLandingPage();
    landingPage.selectSpouse(signOnCredentials);
    landingPage.verifyEntitlements(new Array("Test Results","Allergies","Immunizations",
    "On going Health Conditions","Health Care Reminders","Past Office Vist Informations","Health Summary",
    "Hospital Stays","Letters","Download my Health Records","Download(PVI and Hospital Stays)",
    "Transmit CE","Transmit DE","Questioneers(list of)","Personal Action Plan"));
  });

     test.it(' ---> Verify that Logged in NCA Adult can view Entitled features for Spouse proxy'
    , function() {
      var signOnCredentials = env.users.findByTag('nca subscriber');
      signOnPage.signOn(signOnCredentials);
      landingPage.verifyNCAlLandingPage();
      landingPage.selectSpouse(signOnCredentials);
      landingPage.verifyEntitlements(new Array("Test Results","Allergies","Immunizations","Track my Health",
    "On going Health Conditions","Health Care Reminders","Past Office Vist Informations", "Health Summary",
    "Hospital Stays","Download my Health Records","Download(PVI and Hospital Stays)",
    "Transmit CE","Transmit DE","Questioneers(list of)","Personal Action Plan"));
    });

     test.it(' ---> Verify that Logged in SCA Adult can view Entitled features for Spouse proxy', function() {
      var signOnCredentials = env.users.findByTag('sca subscriber');
      signOnPage.signOn(signOnCredentials);
      landingPage.verifySCAlLandingPage();
      landingPage.selectSpouse(signOnCredentials);
      landingPage.verifyEntitlements(new Array("Test Results","Allergies","Immunizations","Track my Health",
    "On going Health Conditions","Health Care Reminders","Past Office Vist Informations", "Health Summary",
    "Hospital Stays","Download my Health Records","Download(PVI and Hospital Stays)",
    "Transmit CE","Transmit DE","Questioneers(list of)","Personal Action Plan"));
    });

     test.it(' ---> Verify that Logged in HAW Adult can view Entitled features for Spouse proxy', function() {
      var signOnCredentials = env.users.findByTag('HAW subscriber');
      signOnPage.signOn(signOnCredentials);
      landingPage.verifyHAWLandingPage();
      landingPage.selectSpouse(signOnCredentials);
      landingPage.verifyEntitlements(new Array("Test Results","Allergies","Immunizations","Wallet card",
    "On going Health Conditions","Health Care Reminders","Past Office Vist Informations", "Health Summary",
    "Hospital Stays","Growth charts","Download my Health Records","Download(PVI and Hospital Stays)",
    "Transmit CE","Transmit DE","Questioneers(list of)"));
    });

     test.it(' ---> Verify that Logged in CO Adult can view Entitled features for Spouse proxy', function() {
      var signOnCredentials = env.users.findByTag('CO subscriber');
      signOnPage.signOn(signOnCredentials);
      landingPage.verifyCOLandingPage();
      landingPage.selectSpouse(signOnCredentials);
      landingPage.verifyEntitlements(new Array("Test Results","Allergies","Immunizations","Wallet card",
    "On going Health Conditions","Health Care Reminders","Past Office Vist Informations", 
    "Health Summary","Track my health","Questioneers(list of)"));
    });

     test.it(' ---> Verify that Logged in GA Adult can view Entitled features for Spouse proxy', function() {
      var signOnCredentials = env.users.findByTag('GA subscriber');
      signOnPage.signOn(signOnCredentials);
      landingPage.verifyGALandingPage();
      landingPage.selectSpouse(signOnCredentials);
      landingPage.verifyEntitlements(new Array("Test Results","Allergies","Immunizations","Wallet card",
    "On going Health Conditions","Health Care Reminders","Past Office Vist Informations",
     "Health Summary","Track my health"    ));
    });

      test.it(' ---> Verify that Logged in MAS Adult can view Entitled features for Spouse proxy', function() {
      var signOnCredentials = env.users.findByTag('mas subscriber');
      signOnPage.signOn(signOnCredentials);
      landingPage.verifyMASLandingPage();
      landingPage.selectSpouse(signOnCredentials);
      landingPage.verifyEntitlements(new Array("Test Results","Allergies","Immunizations","Wallet card",
     "On going Health Conditions","Health Care Reminders","Past Office Vist Informations",
     "Health Summary","Track my health"  ));
    });

    //AT

    test.it(' ---> Verify that Logged in KNW Adult  can view Entitled features for Teen proxy', function() {
      var signOnCredentials = env.users.findByTag('north west teen');
      signOnPage.signOn(signOnCredentials);
      landingPage.verifyNorthWestLandingPage();
      landingPage.selectTeen(signOnCredentials);
      landingPage.verifyEntitlements(new Array("Test Results","Allergies","Immunizations","Questioneer(list of)"));
    });
    
    test.it(' ---> Verify that Logged in NCA Adult  can view Entitled features for Teen proxy', function() {
      var signOnCredentials = env.users.findByTag('nca teen');
      signOnPage.signOn(signOnCredentials);
      landingPage.verifyNCAlLandingPage();
      landingPage.selectTeen(signOnCredentials);
      landingPage.verifyEntitlements(new Array("Test Results","Allergies","Immunizations",
        "Questioneer(list of)","Health Care Reminders","Health Summary","Track my health"));
    });

     test.it(' --> Verify that Logged in SCA Adult  can view Entitled features for Teen proxy', function() {
    var signOnCredentials = env.users.findByTag('sca teen');
    signOnPage.signOn(signOnCredentials);
    landingPage.verifySCALTeenLandingPage();
    landingPage.selectTeen(signOnCredentials);
    landingPage.verifyEntitlements(new Array("Allergies"));
    });

     test.it(' --> Verify that Logged in HAW Adult  can view Entitled features for Teen proxy', function() {
    var signOnCredentials = env.users.findByTag('HAW teen');
    signOnPage.signOn(signOnCredentials);
    landingPage.verifyHAwTeenLandingPage();
    landingPage.selectTeen(signOnCredentials);
    landingPage.verifyEntitlements(new Array("Allergies","Immunizations","Health Care Reminders",
      "Health Summary","Track my health","Growth charts","Questioneer(list of)"));
    });

     test.it(' --> Verify that Logged in CO Adult  can view Entitled features for Teen proxy', function() {
    var signOnCredentials = env.users.findByTag('CO teen');
    signOnPage.signOn(signOnCredentials);
    landingPage.verifyCOTeenLandingPage();
    landingPage.selectTeen(signOnCredentials);
    landingPage.verifyEntitlements(new Array("Allergies","Immunizations","Health Care Reminders",
      "Track my health","Questioneer(list of)"));
    });

     test.it(' --> Verify that Logged in GA Adult  can view Entitled features for Teen proxy', function() {
    var signOnCredentials = env.users.findByTag('GA teen');
    signOnPage.signOn(signOnCredentials);
    landingPage.verifyGATeenLandingPage();
    landingPage.selectTeen(signOnCredentials);
    landingPage.verifyEntitlements(new Array("Allergies","Immunizations"));
    });

   //AC

    test.it(' --> Verify that Logged in KNW Adult  can view Entitled features for Child proxy', function() {
    var signOnCredentials = env.users.findByTag('KNW Child');
    signOnPage.signOn(signOnCredentials);
    landingPage.verifyKNwChildLandingPage();
    landingPage.selectChild(signOnCredentials);
    landingPage.verifyEntitlements(new Array("Test Results","Allergies","Immunizations",
    "Health Care Reminders","Past Office Vist Informations", "Health Summary",
    "Hospital Stays","Letters","Download my Health Records","Download(PVI and Hospital Stays)",
    "Transmit CE","Transmit DE","Questioneers(list of)","Personal Action Plan"));
    });

    test.it(' --> Verify that Logged in NCA Adult  can view Entitled features for Child proxy', function() {
    var signOnCredentials = env.users.findByTag('NCA Child');
    signOnPage.signOn(signOnCredentials);
    landingPage.verifyNCAlChildLandingPage();
    landingPage.selectChild(signOnCredentials);
    landingPage.verifyEntitlements(new Array("Test Results","Allergies","Immunizations",
    "Health Care Reminders","Past Office Vist Informations", "Health Summary",
    "Hospital Stays","Ongoing Health Conditions","Download my Health Records","Download(PVI and Hospital Stays)",
    "Transmit CE","Transmit DE","Questioneers(list of)","Personal Action Plan"));
    });

    test.it(' --> Verify that Logged in SCA Adult  can view Entitled features for Child proxy', function() {
    var signOnCredentials = env.users.findByTag('SCA Child');
    signOnPage.signOn(signOnCredentials);
    landingPage.verifySCAlChildLandingPage();
    landingPage.selectChild(signOnCredentials);
    landingPage.verifyEntitlements(new Array("Test Results","Allergies","Immunizations",
    "Health Care Reminders","Past Office Vist Informations", "Health Summary",
    "Personal Action Plan","Ongoing Health Conditions","Track my Health"));
    });

    test.it(' --> Verify that Logged in HAW Adult  can view Entitled features for Child proxy', function() {
    var signOnCredentials = env.users.findByTag('HAW Child');
    signOnPage.signOn(signOnCredentials);
    landingPage.verifyHAwChildLandingPage();
    landingPage.selectChild(signOnCredentials);
    landingPage.verifyEntitlements(new Array("Test Results","Allergies","Immunizations",
    "Health Care Reminders","Past Office Vist Informations", "Health Summary",
    "Hospital Stays","Download my Health Records","Download(PVI and Hospital Stays)",
    "Transmit DE","Questioneers(list of)","Track my health","Wallet card","Growth charts"));
    });

    test.it(' --> Verify that Logged in CO Adult  can view Entitled features for Child proxy', function() {
    var signOnCredentials = env.users.findByTag('CO Child');
    signOnPage.signOn(signOnCredentials);
    landingPage.verifyCOChildLandingPage();
    landingPage.selectChild(signOnCredentials);
    landingPage.verifyEntitlements(new Array("Test Results","Allergies","Immunizations",
    "Health Care Reminders","Past Office Vist Informations", "Health Summary","Ongoing Health Conditions",
    "Questioneers(list of)","Track my health","Wallet card"));
    });

    test.it(' --> Verify that Logged in GA Adult  can view Entitled features for Child proxy', function() {
    var signOnCredentials = env.users.findByTag('GA Child');
    signOnPage.signOn(signOnCredentials);
    landingPage.verifyGAChildLandingPage();
    landingPage.selectChild(signOnCredentials);
    landingPage.verifyEntitlements(new Array("Test Results","Allergies","Immunizations",
    "Health Care Reminders","Past Office Vist Informations", "Health Summary","Ongoing Health Conditions",
    "Track my health","Wallet card"));
    });

    test.it(' --> Verify that Logged in MAS Adult  can view Entitled features for Child proxy', function() {
    var signOnCredentials = env.users.findByTag('MAS Child');
    signOnPage.signOn(signOnCredentials);
    landingPage.verifyMASChildLandingPage();
    landingPage.selectChild(signOnCredentials);
    landingPage.verifyEntitlements(new Array("Test Results","Allergies","Immunizations",
    "Health Care Reminders","Past Office Vist Informations", "Health Summary",
    "Track my health","Wallet card"));
    });

    //NMC

    test.it(' --> Verify that Logged in KNW Non member Adult  can view Entitled features for Child proxy', function() {
    var signOnCredentials = env.users.findByTag('KNW Child');
    signOnPage.signOn(signOnCredentials);
    landingPage.verifyKNwChildLandingPage();
    landingPage.selectChild(signOnCredentials);
    landingPage.verifyEntitlements(new Array("Test Results","Allergies","Immunizations",
    "Health Care Reminders","Past Office Vist Informations", "Health Summary",
    "Hospital Stays","Letters","Download my Health Records","Download(PVI and Hospital Stays)",
    "Transmit CE","Transmit DE","Questioneers(list of)","Personal Action Plan"));
    });

    test.it(' --> Verify that Logged in NCA Non member Adult  can view Entitled features for Child proxy', function() {
    var signOnCredentials = env.users.findByTag('NCA Child');
    signOnPage.signOn(signOnCredentials);
    landingPage.verifyNCAlChildLandingPage();
    landingPage.selectChild(signOnCredentials);
    landingPage.verifyEntitlements(new Array("Test Results","Allergies","Immunizations",
    "Health Care Reminders","Past Office Vist Informations", "Health Summary",
    "Hospital Stays","Ongoing Health Conditions","Download my Health Records","Download(PVI and Hospital Stays)",
    "Transmit CE","Transmit DE","Questioneers(list of)","Personal Action Plan","Track my health"));
    });

    //NMA

    test.it(' --> Verify that Logged in KNW Non member Adult  can view Entitled features for Adult proxy', function() {
    var signOnCredentials = env.users.findByTag('KNW Non member Adult');
    signOnPage.signOn(signOnCredentials);
    landingPage.verifyKNwLandingPage();
    landingPage.verifyEntitlements(new Array("Test Results","Allergies","Immunizations",
    "Health Care Reminders","Past Office Vist Informations", "Health Summary",
    "Hospital Stays","Letters","Download my Health Records","Download(PVI and Hospital Stays)",
    "Transmit CE","Transmit DE","Questioneers(list of)","Personal Action Plan","On going health Conditions"));
    });

    test.it(' --> Verify that Logged in NCA Non member Adult  can view Entitled features for Adult  proxy', function() {
    var signOnCredentials = env.users.findByTag('NCA Non member Adult');
    signOnPage.signOn(signOnCredentials);
    landingPage.verifyNCAlLandingPage();
    landingPage.verifyEntitlements(new Array("Test Results","Allergies","Immunizations",
    "Health Care Reminders","Past Office Vist Informations", "Health Summary",
    "Hospital Stays","Ongoing Health Conditions","Download my Health Records","Download(PVI and Hospital Stays)",
    "Transmit CE","Transmit DE","Questioneers(list of)","Personal Action Plan","Track my health"));
    });

    //TDA

    test.it(' ---> Verify that Logged in KNW Teen can view Entitled features for self proxy', function() {
    var signOnCredentials = env.users.findByTag('north west teen');
    signOnPage.signOn(signOnCredentials);
    landingPage.verifyKNwLandingPage();
    landingPage.verifyEntitlements(new Array("Allergies","Immunizations",
    "Questioneers(list of)"));
  });

     test.it(' ---> Verify that Logged in NCA Teen can view Entitled features for self proxy'
    , function() {
      var signOnCredentials = env.users.findByTag('nca teen');
      signOnPage.signOn(signOnCredentials);
      landingPage.verifyNCAlLandingPage();
      landingPage.verifyEntitlements(new Array("Test Results","Allergies","Immunizations","Track my Health",
    "Health Care Reminders", "Health Summary","Questioneers(list of)"));
    });

     test.it(' ---> Verify that Logged in SCA Teen can view Entitled features for self proxy', function() {
      var signOnCredentials = env.users.findByTag('sca teen');
      signOnPage.signOn(signOnCredentials);
      landingPage.verifySCAlLandingPage();
      landingPage.verifyEntitlements(new Array("Allergies","Immunizations"));
    });

     test.it(' ---> Verify that Logged in HAW Teen can view Entitled features for self proxy', function() {
      var signOnCredentials = env.users.findByTag('HAW teen');
      signOnPage.signOn(signOnCredentials);
      landingPage.verifyHAWLandingPage();
      landingPage.verifyEntitlements(new Array("Allergies","Immunizations","Wallet card",
    "Health Care Reminders","Past Office Vist Informations", "Health Summary",
    "Hospital Stays","Download my Health Records","Download(PVI and Hospital Stays)",
    "Transmit CE","Transmit DE","Questioneers(list of)","Track my health"));
    });

     test.it(' ---> Verify that Logged in CO Teen can view Entitled features for self proxy', function() {
      var signOnCredentials = env.users.findByTag('CO teen');
      signOnPage.signOn(signOnCredentials);
      landingPage.verifyCOLandingPage();
      landingPage.verifyEntitlements(new Array("Allergies","Immunizations",
    "Health Care Reminders", "Track my health","Questioneers(list of)"));
    });

     test.it(' ---> Verify that Logged in GA Teen can view Entitled features for self proxy', function() {
      var signOnCredentials = env.users.findByTag('GA teen');
      signOnPage.signOn(signOnCredentials);
      landingPage.verifyGALandingPage();
      landingPage.verifyEntitlements(new Array("Allergies","Immunizations"));
    });

      test.it(' ---> Verify that Logged in MAS Teen can view Entitled features for self proxy', function() {
      var signOnCredentials = env.users.findByTag('mas teen');
      signOnPage.signOn(signOnCredentials);
      landingPage.verifyMASLandingPage();
      landingPage.verifyEntitlements(new Array("Allergies","Immunizations","Track my health"  ));
    });

    //NMT

    test.it(' ---> Verify that Logged in KNW Non member Adult  can view Entitled features for Teen proxy', function() {
      var signOnCredentials = env.users.findByTag('north west Non member Adult');
      signOnPage.signOn(signOnCredentials);
      landingPage.verifyNorthWestLandingPage();
      landingPage.verifyEntitlements(new Array("Test Results","Allergies","Immunizations","Questioneer(list of)"));
    });
    
    test.it(' ---> Verify that Logged in NCA Non member Adult  can view Entitled features for Teen proxy', function() {
      var signOnCredentials = env.users.findByTag('nca Non member Adult');
      signOnPage.signOn(signOnCredentials);
      landingPage.verifyNCAlLandingPage();
      landingPage.verifyEntitlements(new Array("Test Results","Allergies","Immunizations",
        "Questioneer(list of)","Health Care Reminders","Health Summary","Track my health"));
         });
    });
