(function () {
    'use strict';

    angular
        .module ('app')
        .component ('myProfile', myProfile());


    function myProfile() {

        function myProfileController(){
            var vm = this;
            
            init();

            function init(){

            }
        }

        return {
            bindings: {},
            controller: myProfileController,
            templateUrl: 'components/my-profile/my-profile.html'
        }
    }

} ());