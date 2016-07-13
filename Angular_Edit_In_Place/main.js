// Create a module
angular.module('myAppOne',[]);
// Create Controller
angular.module('myAppOne',[])
.controller('myControllerOne', ['$scope', function($scope) {
  // JS4.1 - Part I
  $scope.show = false;

  $scope.printMessage = function() {
    $scope.show = !$scope.show;
    $scope.message = "Hello, Joe London!";
