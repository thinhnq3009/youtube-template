(function () {
    'use strict';

    angular
        .module ('app')
        .component ('newPassword', newPassword());


    function newPassword() {

        function newPasswordController(){
            var vm = this;
            
            init();

            function init(){

            }
        }

        return {
            controller: newPasswordController,
            templateUrl: 'components/new-password/new-password.html'
        }
    }

} ());