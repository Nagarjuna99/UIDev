
function proxyPicker($q) {
  return {
    templateUrl: 'templates/directives/proxy_picker.html',
    transclude: true,
    controller: ['$scope', 'userGateway', 'memberService', "$route", function($scope, userGateway, memberService, $route) {
      $q.all([userGateway.getUser(), userGateway.getProxies()]).then(function(responses) {
        var user = responses[0].toJS ? responses[0].toJS() : responses[0];
        var proxies = responses[1].toJS ? responses[1].toJS() : responses[1];
        $scope.membersObj = [user].concat(proxies);
        $scope.selectedMember = $scope.membersObj[0];
        $scope.members = _.reject($scope.membersObj, function(mem) {
          return mem === $scope.selectedMember;
        });
      });

      $scope.changeMember = function($event) {
        var proxyPickerChange = $($event.target).text();
        $scope.selectedMember = _.findWhere($scope.members, {
          name: proxyPickerChange
        });
        $scope.members = _.reject($scope.membersObj, function(mem) {
          return mem === $scope.selectedMember;
        });
        memberService.selectMember($scope.selectedMember);
        $('.proxy-picker').toggleClass('-open');

        //Making the family selector accessible
        $('.member-list > li').attr('aria-hidden', 'true');
        $route.reload();
      };

      $scope.expandCollapsePicker = function() {
        $('.proxy-picker').toggleClass('-open');

        //Making the family selector accessible
        $('.member-list > li').removeAttr('aria-hidden');
      };

    }]
  };
}
proxyPicker.$inject = ['$q'];
export default proxyPicker;

