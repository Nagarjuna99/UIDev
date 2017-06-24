

function collapsible() {
  return {
    templateUrl: 'templates/directives/collapsable.html',
    transclude: true,
    scope: {
      heading: "@heading",
      display: "@display"
    },
    link: function(scope, element, attr) {
      scope.toggle = function() {
        scope.display = !scope.display;
      };
    }
  };
}
collapsible.$inject = [];
export default collapsible;

