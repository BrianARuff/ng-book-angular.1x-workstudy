const app = angular
  .module("app", [])
  .controller("Controller", function($scope) {
    $scope.name = "brian A. Ruff";
  });

app.filter("capitalize", function() {
  return function(input) {
    if (input) {
      return input
        .split(" ")
        .map(word => {
          return word[0].toUpperCase() + word.slice(1);
        })
        .join(" ");
    }
  };
});
