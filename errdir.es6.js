


function errdir($rootScope) {
  return {
    templateUrl: 'templates/directives/errdir.html',
    restrict: 'E',
    controller: ['$scope', function($scope) {
      $rootScope.$on('apiError', function(event, errmsg) {
        $scope.errorMessage = errmsg;
      });
      $rootScope.$on('$routeChangeStart', function() {
        $scope.errorMessage = undefined;
      });

    }]
  };
}

errdir.$inject = ['$rootScope'];

export default errdir;

