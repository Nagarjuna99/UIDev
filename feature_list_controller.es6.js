

function featureListController($scope, config, entitlements) {
  $scope.entitlements = entitlements;
}

featureListController.$inject = ['$scope', 'config', 'entitlements'];

featureListController.$resolve = {
  entitlements: ['userGateway', 'errorService', '$rootScope', '$q', 'memberService', function(userGateway, errorService, $rootScope, $q, memberService) {

    return userGateway.getEntitlements(memberService.getMember()).catch(function() {
      $rootScope.$emit('apiError', "error.default");
      return {};
    });

  }]
};

export default featureListController;
