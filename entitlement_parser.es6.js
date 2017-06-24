import _ from 'underscore';
import Immutable from 'immutable';


function parse(response, entitlementConfig) {
  if (!entitlementConfig) {
    return {
      Entitlements: {
        AuthDecisions: []
      }
    };
  }

  var parsed = {};

  var idsToValues = {};
  _.each(response.Entitlements.AuthDecisions, function(authDecision) {
    idsToValues[authDecision.Id] = authDecision.Decision === 'P';
  });

  _.map(_.keys(entitlementConfig), function(code) {
    var entitlement = _.reduce(entitlementConfig[code], function(memo, entitlementKey) {
      return !!idsToValues[entitlementKey] && memo;
    }, true);
    parsed[code] = entitlement;
  });

  return Immutable.Map(parsed);
}

export default {
  parse: parse
};
