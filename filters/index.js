const app = angular.module("app", []);

app.controller("Controller", [
  "$scope",
  "$filter",
  function($scope, $filter) {
    $scope.name = $filter("lowercase")("Brian A. Ruff");
    $scope.number = Math.PI;
    $scope.date = new Date();
  }
]);
