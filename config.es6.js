


export default {
  appName: 'RWD',
  componentName: 'MMR',
  apiKey: 'kprwdmmr80979953380301602816',
  webtrendsKey: 'dcs222172lwg8dmffkimwmzmu_9f8l',
  webtrendsAppName: 'my-medical-record',
  url: {
    token: '/mycare/v1.0/token',
    content: '/care/v1.0/content',
    alerts: '/mycare/v2.0/alerts',
    healthsummary: '/mycare/v2.0/healthsummary',
    testresultsummary: '/mycare/v2.0/testresultssummary',
    testresultdetails: '/mycare/v1.2/testresultdetails',
    historicalresults: '/mycare/v2.0/testresultdetails/history',
    proxyInformation: '/mycare/v2.0/proxyinformation',
    entitlements: '/mycare/v2.0/entitlements'
  },
  hcoEntitlementCode: 108,
  'allergies': {
    limit: 10,
    help: {
      nodeId: 'WPP::L48GVEMDE'
    }
  },
  'health-condition': {
    limit: 10,
    help: {
      nodeId: 'WPP::L4DLI5IKT'
    }
  },
  'immunizations': {
    limit: 10,
    help: {
      nodeId: 'WPP::L4DLGKM4K'
    }
  },
  'health-care-reminders': {
    limit: 10,
    help: {
      nodeId: 'WPP::L4DLEXM9R'
    }
  },
  'test-results': {
    limit: 10,
    help: {
      nodeId: 'WPP::L4DLJ05XX'
    }
  }
};
