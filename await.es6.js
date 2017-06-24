


function awaitDirective($rootScope) {
  return {
    link: function(scope, elem, attrs) {
      scope.loading = true;

      $rootScope.$on('$routeChangeStart', function() {
        scope.loading = true;
      });

      $rootScope.$on('$routeChangeSuccess', function() {
        scope.loading = false;
      });
    }
  };
}

awaitDirective.$inject = ['$rootScope'];

export default awaitDirective;

