(function () {
'use scrict';

angular.module('ShoppingList')
.controller('ShoppingListController', ShoppingListController);

ShoppingListController.$inject = ['ShoppingListFactory'];
function ShoppingListController(ShoppingListFactory) {
  var list = this;

  // Use factory to create new shopping list service
  var shoppingList = ShoppingListFactory();

  list.items = shoppingList.getItems();
  var origTitle = 'Shopping List1';
  list.title = origTitle + "(" + list.items.length + " items )";

  list.warning = "COOKIES DETECTED";

  list.itemName = "";
  list.itemQuantity = "";

  list.addItem = function () {
    shoppingList.addItem(list.itemName, list.itemQuantity);
    list.title = origTitle + "(" + list.items.length + " items )";
  };

  list.removeItem = function (itemIndex) {
    console.log('this is: ', this);
    this.lastRemoved = 'last removed ' + this.items[itemIndex].name;
    shoppingList.removeItem(itemIndex);
    list.title = origTitle + "(" + list.items.length + " items )";
  }
}

})();
