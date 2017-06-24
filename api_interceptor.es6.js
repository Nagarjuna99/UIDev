function httpInterceptor($q, config, errorService) {


  return {
    'request': function(requestConfig) {

      requestConfig.headers["X-featureName"] = config.featureName;
      requestConfig.headers["X-applicationName"] = config.appName;

      return requestConfig;
    },
    'responseError': function(rejection) {
      errorService.setError(rejection);
      console.log("API error");
      console.log(rejection);
      return $q.reject(rejection);
    }
  };
}

httpInterceptor.$inject = ['$q', 'config', 'errorService'];
export default httpInterceptor;

