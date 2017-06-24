import _ from 'underscore';
import Immutable from 'immutable';


var PROXY_TYPES = {
  "Adult": "adult",
  "Teen": "teen",
  "Child": "child"
};

var parseTypes = function(proxy) {
  return (proxy.Relation || "").split("_").map(function(type) {
    return PROXY_TYPES[type];
  });
};

var parseTypeFrom = function(proxiesOrDelegates, isProxies) {
  return _.reduce(proxiesOrDelegates, function(currentType, proxyOrDelegate) {
    return currentType || parseTypes(proxyOrDelegate)[isProxies ? 0 : 1];
  }, null);
};

var parseName = function(name) {
  var parsed = (name || "").split(",");
  if (parsed.length > 1) {
    return (parsed[1] + " " + parsed[0]).trim();
  }

  return name;
};

function parseDelegate(delegateData) {
  return {
    name: parseName(delegateData.Name),
    relationshipId: delegateData.RelID
  };
}

function parseUserType(proxies, delegates) {
  return parseTypeFrom(proxies, true) || parseTypeFrom(delegates, false);
}

function parse(proxyData, proxyDelegateData) {
  var types = parseTypes(proxyData);

  var delegates = _.map(proxyDelegateData, function(delegateData) {
    return parseDelegate(delegateData);
  });

  return {
    relationshipId: proxyData.RelID,
    name: parseName(proxyData.Name),
    type: types[1],
    homeDeploymentId: proxyData.DeploymentDescriptor,
    delegates: delegates,
    Id: proxyData.ID
  };
}

export default {
  parse: function(data) {
    var proxyInformation = data.ProxyInformation || {};
    var delegateData = proxyInformation.Delegates || [];
    var proxyData = proxyInformation.Proxies || [];
    var proxies = proxyData
      .map((proxy) => parse(proxy, delegateData));

    return Immutable.fromJS(proxies);
  }
};
