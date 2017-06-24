import contentNodeBuilder from 'builders/content_node_builder';
import _ from 'underscore';


function contentGateway($http, $q, config, contentConfig, userGateway) {


  function getContent(nodeFlavor, region) {
    region = contentConfig.Regions[region] || "NAT";

    var customConfig = {};
    if (nodeFlavor) {
      customConfig = contentConfig.Flavors[nodeFlavor];
    }
    var contentParam = _.extend({}, contentNodeBuilder().build(), customConfig);
    contentParam.region = region;

    return $http.get(config.url.content, {
      headers: {
        "X-useragentcategory": "W",
        "X-useragenttype": "Chrome",
        "X-osversion": "linux",
        "X-apiKey": config.apiKey,
        "X-appName": config.appName,
        "Accept": 'text/html'
      },
      params: contentParam
    }).then(function(response) {
      return response.data;
    }).catch(function(error) {
      console.log("There was an error getting content: " + contentParam.nodeName);
      return $q.reject(new Error("Failed to get content."));
    });
  }


  return {
    getContent: function(nodeFlavor) {
      return userGateway.getUser().then(function(user) {
        return $q.all([getContent(nodeFlavor), getContent(nodeFlavor, user.get("region"))]).then(function(responses) {
          var isHTML = contentConfig.Flavors[nodeFlavor] && contentConfig.Flavors[nodeFlavor].htmlContent;
          var national = responses[0];
          var regional = responses[1];
          if (!isHTML) {
            return _.extend({}, national, regional);
          } else {
            return regional ? regional : national;
          }

        });
      });

    }
  };
}

contentGateway.$inject = ['$http', '$q', 'config', 'contentConfig', 'userGateway'];

export default contentGateway;

