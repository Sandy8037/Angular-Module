(function () {
'use strict';

angular.module('Spinner')
.component('loadingSpinner', {
  templateUrl:
  'src/shoppinglist/spinner/loadingspinner.template.html',
  controller: SpinnerController,
});


SpinnerController.$inject = ['$rootScope'];
function SpinnerController($rootScope) {
  var $ctrl = this;
  var cancellers = [];

  $ctrl.$onInit = function () {
    var cancle = $rootScope.$on('$stateChangeStart',
    function (event, toState, toParams, fromState, fromParams, options) {
      $ctrl.showSpinner = true;
    });
    cancellers.push(cancle);

    cancle = $rootScope.$on('$stateChangeSuccess',
    function (event, toState, toParams, fromState, fromParams) {
      $ctrl.showSpinner = false;
    });
    cancellers.push(cancle);

    cancle = $rootScope.$on('$stateChangeError',
    function (event, toState, toParams, fromState, fromParams, error) {
      $ctrl.showSpinner = false;
    });
    cancellers.push(cancle);
  };

  $ctrl.$onDestroy = function () {
    cancellers.forEach(function (item) {
      item()
    });
  };
}

})();
