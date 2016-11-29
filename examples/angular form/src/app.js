(function () {
'use strict';

angular.module('SimpleFormApp', [])
.controller('RegistrationController', RegistrationController);

function RegistrationController() {
  var reg = this;
  reg.user = {
    username: '',
    email: '',
    phone: ''
  };

  reg.submit = function () {
    reg.completed = true;
  };
}

})();
