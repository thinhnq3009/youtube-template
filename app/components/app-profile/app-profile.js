(function () {
    'use strict';

    angular
        .module ('app')
        .component ('appProfile', appProfile());


    function appProfile() {

        function appProfileController(){
            var vm = this;
            
            init();

            function init(){

            }
        }

        return {
            controller: appProfileController,
            templateUrl: 'components/app-profile/app-profile.html'
        }
    }

} ());