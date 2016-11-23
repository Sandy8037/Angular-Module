(function () {
'use strict';

angular.module('ShoppingList')
.service('ShoppingListService', ShoppingListService);

ShoppingListService.$inject = ['$q', '$timeout'];
function ShoppingListService($q, $timeout) {
  var service = this;

  // List of items
  var items = [];

  // Pre-populate list
  items.push({
    name: "Sugar",
    quantity: "2 bags",
    description: "sweet"
  });
  items.push({
    name: "flour",
    quantity: "1 bags",
    description: "powder"
  });
  items.push({
    name: "Chocolate chips",
    quantity: "2 bags",
    description: "sweet"
  });

  // Simulate call to server
  // Return promise not array
  service.getItems = function () {
    var deferred = $q.defer();

    // wait for 2 sec
    $timeout(function () {
      deferred.resolve(items);
    }, 800);

    return deferred.promise;
  };
}

})();
