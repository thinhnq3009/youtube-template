(function () {
    'use strict';

    angular
        .module ('app')
        .component ('updatePassword', updatePassword());


    function updatePassword() {

        function updatePasswordController(){
            var vm = this;
            
            init();

            function init(){

            }
        }

        return {
            bindings: {},
            controller: updatePasswordController,
            templateUrl: 'components/update-password/update-password.html',
            controllerAs: '${ctrl}'
        }
    }

} ());