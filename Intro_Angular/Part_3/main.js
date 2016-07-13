// Create a Module
angular.module('myAppThree', []);
// Create a Controller
angular.module('myAppThree', [])
.controller('myControllerThree', ['$scope', function($scope) {
  $scope.showPopUp = false;

  $scope.showPopUpFunction = function() {
    $scope.showPopUp = !$scope.showPopUp;
  }

  $scope.closePopUpFunction = function() {
    $scope.showPopUp = false;
  }
}]);
