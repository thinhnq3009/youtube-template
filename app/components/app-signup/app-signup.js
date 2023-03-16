(function () {
    'use strict';

    angular
        .module ('app')
        .component ('appSignup', appSignup());


    function appSignup() {

        function appSignupController(){
        
        }

        return {
            bindings: {},
            controller: appSignupController,
            templateUrl: 'components/app-signup/app-signup.html'
        }
    }

} ());