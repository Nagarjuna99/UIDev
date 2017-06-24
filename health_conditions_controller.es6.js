function healthConditionsController($scope, config, $window, conditions) {

  $scope.conditions = conditions;
  $scope.loadLimit = config["health-condition"].limit;
}

healthConditionsController.$inject = ['$scope', 'config', '$window', 'conditions'];
healthConditionsController.$resolve = {
  conditions: ['healthSummaryGateway', 'errorService', '$rootScope', 'memberService', function(healthSummaryGateway, errorService, $rootScope, memberService) {
    return healthSummaryGateway.getHealthConditions(memberService.getMember()).catch(function() {
      $rootScope.$emit('apiError', "error.default");
      return [];
    });
  }]
};

export default healthConditionsController;