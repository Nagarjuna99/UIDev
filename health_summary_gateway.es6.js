import healthSummaryParser from 'parsers/health_summary_parser';

function healthSummaryGateway($http, $q, config) {
  function getHealthSummaryInternal(relationshipID) {
    return $http({
      method: "GET",
      url: config.url.healthsummary,
      headers: {
        "X-useragentcategory": "W",
        "X-useragenttype": "Chrome",
        "X-osversion": "linux",
        "X-apiKey": config.apiKey,
        "X-appName": config.appName
      },
      params: {
        relId: relationshipID
      }
    }).then(function(response) {
      var healthSummary = healthSummaryParser.parse(response.data);
      if (healthSummary === "System Error") {
        return $q.reject(response.data);
      }
      return healthSummary;
    }).catch(function(error) {
      console.log("There was an error getting healthsummary" + error);
      return $q.reject(error);
    });
  }

  function getHealthSummary(relationshipID) {
    return getHealthSummaryInternal(relationshipID);
  }

  function getAllergies(relationshipID) {
    return getHealthSummary(relationshipID).then(function(healthSummary) {
      return healthSummary.allergies;
    });
  }

  function getImmunizations(relationshipID) {
    return getHealthSummary(relationshipID).then(function(healthSummary) {
      return healthSummary.immunizations;
    });
  }

  function getHealthConditions(relationshipID) {
    return getHealthSummary(relationshipID).then(function(healthSummary) {
      return healthSummary.conditions;
    });
  }

  return {
    getHealthSummary: getHealthSummary,
    getHealthConditions: getHealthConditions,
    getAllergies: getAllergies,
    getImmunizations: getImmunizations
  };
}
healthSummaryGateway.$inject = ['$http', '$q', 'config'];
export default healthSummaryGateway;
