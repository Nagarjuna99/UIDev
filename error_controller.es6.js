function errorController($scope, errorService) {
  $scope.errorMessage = errorService.getError().customText || "error.default";
}
errorController.$inject = ['$scope', 'errorService'];
export default errorController;
