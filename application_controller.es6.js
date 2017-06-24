import angular from 'angular';
import _ from 'underscore';

function applicationController($rootScope, $scope, contentGateway, $window, errorService, $location) {
  $scope.resolved = false;
  contentGateway.getContent().finally(function() {
    $scope.resolved = true;
  });

  $rootScope.$on('$locationChangeSuccess', function() {
    $scope.errorPage = $location.path().indexOf('error') !== -1;
  });
  $rootScope.$on('$routeChangeError', function(angularEvent, current, previous, rejection) {
    errorService.setError(rejection);
    $location.path('/error');
  });
}
applicationController.$inject = ['$rootScope', '$scope', 'contentGateway', '$window', 'errorService', '$location'];

export default applicationController;
