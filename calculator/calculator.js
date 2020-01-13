const app = angular.module("CalculatorApp", []);

app.controller("CalculatorController", function($scope) {
  $scope.calculator = {
    value: 0,
    total: 0,
    operator: "",
    add: _amount =>
      ($scope.calculator.total =
        Number($scope.calculator.total) + Number(_amount)),
    subtract: _amount =>
      ($scope.calculator.total =
        Number($scope.calculator.total) - Number(_amount)),
    "": ""
  };
  $scope.calculate = function(_val, operator) {
    console.log("called calculate");
    console.log(_val, operator);
    switch (operator) {
      case "-":
        console.log("-");
        $scope.calculator.subtract(_val);
        break;
      case "+":
        console.log("+");
        $scope.calculator.add(_val);
        break;
      default:
        console.log("operation not found :(");
    }
  };
});
