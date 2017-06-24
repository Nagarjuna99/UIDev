import faker from 'Faker';

import _ from 'underscore';

export default function() {

  var defaultProxy = function() {
    return {
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      region: 'MRN',
      isMember: true,
      RelID: 0,
      ID: 0,
      Relation: 'Adult_Teen'
    };
  };

  var data = {
    ProxyInformation: {
      Proxies: null,
      Delegates: null
    }
  };

  return {
    addProxy: function(proxy) {
      data.Proxies = data.Proxies || [];
      data.Proxies.push($.extend({}, defaultProxy(), proxy));
      return this;
    },
    addProxies: function(proxies) {
      var _this = this;
      proxies.forEach(function(proxy) {
        _this.addProxy(proxy);
      });

      return this;
    },
    hasNoProxies: function() {
      data.Proxies = null;
      return this;
    },
    build: function() {
      return {
        ProxyInformation: data
      };
    }
  };
}

