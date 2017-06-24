import ListLoader from 'services/list_loader';


function loadingList() {
  return {
    templateUrl: 'templates/directives/list_view.html',
    transclude: true,
    scope: {
      items: '=',
      loadLimit: '=',
      loadButtonText: '@'
    },
    link: function(scope) {
      var listLoader = new ListLoader(scope.items, scope.loadLimit);
      scope.items = listLoader.loadMore();
      scope.loadMore = function() {
        scope.items = scope.items.concat(listLoader.loadMore());
      };
      scope.canLoadMore = function() {
        return listLoader.canLoadMore();
      };
    }
  };
}
loadingList.$inject = [];
export default loadingList;

