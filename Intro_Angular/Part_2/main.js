// Create Module
angular.module('myAppTwo', []);
// Create Controller
angular.module('myAppTwo', [])
.controller('myControllerTwo', ['$scope', function($scope) {
  // JS4.1 - Part II
  $scope.turnPink = function() {
    angular.element(event.target).css('color', 'pink');
  };

  $scope.confirmGoToURL = function() {
    $scope.confirmURL = confirm('Continue to website?');

    if (!$scope.confirmURL) {
      event.preventDefault();
      angular.element(event.target).remove();
    }
  };

}]);
