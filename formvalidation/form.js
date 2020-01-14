angular.module("app", []).controller("formController", function($scope) {
  $scope.emailInput = "";
  $scope.minlength = 12;
  $scope.maxlength = 16;
});
