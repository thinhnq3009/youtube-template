(function () {
    'use strict';

    angular
        .module ('app')
        .component ('appLogin', appLogin());


    function appLogin() {

        function appLoginController(){
          
        }

        return {
            bindings: {},
            controller: appLoginController,
            templateUrl: 'components/app-login/app-login.html'
        }
    }

} ());