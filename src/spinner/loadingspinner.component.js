(function () {
'use scrict';

angular.module('Spinner')
.component('loadingSpinner', {
  templateUrl: 'src/spinner/loadingspinner.template.html',
  controller: SpinnerController
});

SpinnerController.$inject = ['$rootScope'];
function SpinnerController($rootScope) {
  var $ctrl = this;

  var cancleListener = $rootScope.$on('shoppinglist:processing', function (event, data) {
    console.log('event ', event);
    console.log('data ', data);

    if (data.on) {
      $ctrl.showSpinner = true;
    }
    else {
      $ctrl.showSpinner = false;
    }
  });

  $ctrl.$onDestroy = function () {
    cancleListener();
  };
}

ShoppingListComponentController.$inject = ['$rootScope', '$element', '$q',
'WeightLossFilterService'];
function ShoppingListComponentController($rootScope, $element, $q, WeightLossFilterService) {
  var $ctrl = this;
  var totalItems;

  $ctrl.$onInit = function () {
    totalItems = 0;
  };

  $ctrl.$doCheck = function () {
    if ($ctrl.items.length !== totalItems) {
      totalItems = $ctrl.items.length;

      $rootScope.$broadcast('shoppinglist:processing', {on: true});
      var promises = [];
      for (var i = 0; i < $ctrl.items.length; i++) {
        promises.push(WeightLossFilterService.checkName($ctrl.items[i].name));
      }

      $q.all(promises)
      .then(function (result) {
        var warningElem = $element.find('div.error');
        warningElem.slideUp(900);
      })
      .catch (function (result) {
        var warningElem = $element.find('div.error');
        warningElem.slideDown(900);
      })
      .finally (function () {
        $rootScope.$broadcast('shoppinglist:processing', {on: false});
      });
    }
  };

  $ctrl.remove = function (myIndex) {
    $ctrl.onRemove({index: myIndex});
  };

}

})();
