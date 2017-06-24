function immunizations() {
  return {
    templateUrl: 'templates/directives/immunizations.html',
    transclude: true,
    scope: {
      immunizations: '='
    }
  };
}
immunizations.$inject = [];
export default immunizations;

