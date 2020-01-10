angular
  .module("myApp", [])
  .controller("MyController", function($scope, $timeout) {
    $scope.clock = { now: "" };
    const updateClock = function() {
      $scope.clock.now = new Date().getSeconds();
      $timeout(() => {
        updateClock();
      }, 1000);
    };
    updateClock();
  });

const app = angular.module("myApp");
