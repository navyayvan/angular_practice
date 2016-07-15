// define a new module, the first argument is what you call app
// the second module is an array in which you inject dependencies

var app = angular.module("funkyPage", ['ngAnimate', 'ui.bootstrap'] );

app.controller('Ctrl1', ['$scope', '$http', '$uibModal', function($scope, $http, $uibModal) {
  $scope.var1 = 'that human';
  $scope.clickthing = false;
  $scope.toggleClick = function() {
    $scope.clickthing = !$scope.clickthing;
    }

  $scope.objectList = {
    name: 'Navya',
    occupation: 'dev',
  }

  $scope.list = ['one', 'two', 'three'];
  $scope.listitem= '';
  $scope.submitList = function() {
    $scope.list.push($scope.listitem);
    $scope.listitem = '';
  };

  $scope.navCollapsed = true;

  $scope.open = function() {
    $uibModal.open({
      animation: true,
      templateUrl: '/views/modal/html',
      cntroller: 'ModalInstanceCtrl'
    });
  }

}]);

app.controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance'], function($scope, $uibModalInstance) {
  $scope.close = function() {
    $uibModalInstance.dismiss('close');
  }

  $scope.saveChanges = function() {
    $uibModalInstance.dismiss('close');
  };

})