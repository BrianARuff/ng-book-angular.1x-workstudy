const app = angular.module("customForm", []);

app.controller("customFormController", [
  "$scope",
  "$log",
  function($scope, $log) {
    $scope.name = "";
    $scope.singleClickName = function() {
      return $scope.name === "" || $scope.name === "Brian A. Ruff"
        ? ($scope.name = "Brian Ruff")
        : ($scope.name = "Brian A. Ruff");
    };
    $scope.log = function(msg) {
      $log.debug(msg);
    };
    $scope.links = [
      { name: "brian", age: 30 },
      { name: "shawn", age: 40 },
      { name: "doris", age: 60 }
    ];
    $scope.selectedOption = { name: "brian", age: 30 };
    $scope.defaultOption = { name: "Selected" };
  }
]);
