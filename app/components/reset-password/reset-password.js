(function () {
    'use strict';

    angular
        .module ('app')
        .component ('resetPassword', resetPassword());


    function resetPassword() {

        function resetPasswordController(){
            var vm = this;
            
            init();

            function init(){

            }
        }

        return {
            controller: resetPasswordController,
            templateUrl: 'components/reset-password/reset-password.html'
        }
    }

} ());