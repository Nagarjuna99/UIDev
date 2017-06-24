import _ from 'underscore';

export default function() {
  var defaultEntitlementsResponse = {
    Entitlements: {
      AuthDecisions: []
    }
  };


  var entitlements = _.extend({}, defaultEntitlementsResponse);

  return {
    permit: function(id) {
      var permission = {
        "Decision": "P",
        "Id": id
      };
      entitlements.Entitlements.AuthDecisions.push(permission);
      return this;
    },
    deny: function(id) {
      var permission = {
        "Decision": "D",
        "Id": id
      };
      entitlements.Entitlements.AuthDecisions.push(permission);
      return this;
    },
    build: function() {
      return entitlements;
    }
  };
}
