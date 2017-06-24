import ListLoader from 'services/list_loader';

function allergiesController($scope, config, $window, allergies) {
  $scope.allergies = allergies;
  $scope.loadLimit = config.allergies.limit;
}

allergiesController.$inject = ['$scope', 'config', '$window', 'allergies'];
allergiesController.$resolve = {
  allergies: ['healthSummaryGateway', 'errorService', '$rootScope', 'memberService', function(healthSummaryGateway, errorService, $rootScope, memberService) {
    return healthSummaryGateway.getAllergies(memberService.getMember()).catch(function() {
      $rootScope.$emit('apiError', "error.default");
      return [];
    });
  }]
};

export default allergiesController;