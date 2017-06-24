function immunizationsController($scope, config, $window, immunizations) {

  $scope.immunizations = immunizations;

}

immunizationsController.$inject = ['$scope', 'config', '$window', 'immunizations'];
immunizationsController.$resolve = {
  immunizations: ['healthSummaryGateway', 'errorService', '$rootScope', function(healthSummaryGateway, errorService, $rootScope) {
    return healthSummaryGateway.getImmunizations().catch(function() {
      $rootScope.$emit('apiError', "error.default");
      return [];
    });
  }]
};

export default immunizationsController;