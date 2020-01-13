angular
  .module("MyApp", [])
  .controller("MyController", function($scope, $parse) {
    // access watcher of expression model
    $scope.$watch("expression", function(newValue, oldValue) {
      console.log("old", oldValue);
      console.log("new", newValue + "\n");
      if (newValue !== oldValue) {
        // parse function
        const parseFunction = $parse(newValue);
        // get value of parsed function
        $scope.parsedValue = parseFunction($scope);
      }
      if (eval(String(newValue) + " === 1")) {
        $scope.parsedValue = true;
      }
    });
  });
