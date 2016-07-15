// define a new module, the first argument is what you call app
// the second module is an array in which you inject dependencies

var app = angular.module("funkyPage", []);

app.controller('Ctrl1', ['$scope', '$http', function($scope, $http) {
  $scope.var1 = 'that human';
  $scope.clickthing = false;
  $scope.toggleClick = function() {
    $scope.clickthing = !$scope.clickthing;
    }

  $scope.objectList = {
    name: 'Navya',
    occupation: 'web developer',
    age: '24',
    nationality: 'brown'
  }

  $scope.list = ['one', 'two', 'three'];
  $scope.listitem= '';
  $scope.submitList = function() {
    $scope.list.push($scope.listitem);
    $scope.listitem = '';
  };

}]);