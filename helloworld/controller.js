angular
  .module("myApp", [])
  .controller("MyController", function($scope, $timeout) {
    $scope.clock = { now: "" }; // since JS passes by value instead of reference, it's best practice to bind data as a property on an object rather than the raw object itself. This means instead of passing the value 3 and all of its properties associates with  it, we would make an object like "const num = {three: 3}", and then call "num.three" in the view layer. This makes everything much faster because it only has to find the reference to the object and display it and not load all the object properties associated with it and still display it.
    const updateClock = function() {
      $scope.clock.now = new Date().getSeconds();
      $timeout(() => {
        updateClock();
      }, 1000);
    };
    updateClock();
  });

const app = angular.module("myApp");
