function entitlementsInterceptorGenerator(entitlement) {
  function entitlementsInterceptor($location, userGateway, errorService) {
    return userGateway.getUser().then(function(user) {
      if (user.entitlements && !user.entitlements[entitlement]) {
        errorService.setError({
          customText: 'entitlement.default'
        });
        $location.path('/error');
      }
    });
  }

  entitlementsInterceptor.$inject = ['$location', 'userGateway', 'errorService'];
  return entitlementsInterceptor;
}
export default entitlementsInterceptorGenerator;

