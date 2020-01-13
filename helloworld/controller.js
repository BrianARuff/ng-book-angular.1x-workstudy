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


// $scope lifecycle steps
// 1. Creation
//  a. creates a new scope at runtime everytime a controller/directive is created.
// 2. Linking
//  a. when angular starts, all the $scope objects are attached to the view. All functions that create          $scope objects are also attached to the view. These scopes will register functions that run when         things change in the context of the angular app.
// 3. Updating
//  a. When the event loop runs (which is usually executed on the rootScope or outer most scope) each           child scope runs its own dirty checking to check for changes. If any changes are present then the        scope object will fire the callback and update the view.
// 4. Destructin
//  a. when a scope is no longer needed by its corresponding view/views then it will be destroyed by the        whatever created it via the $destroy() function.
// 5. Directives and Scopes
//  a. Directives typically don't create their own scopes, but there are cases where they do like with          ng-controller and ng-repeat where they create their own child scope and attach it to the DOM.

// controllers augment views in Angular.
