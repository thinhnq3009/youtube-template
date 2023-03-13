(function () {
    'use strict';

    angular
        .module ('app')
        .component ('appHeader', appHeader());


    function appHeader() {

        function appHeaderController(){
          
        }

        return {
            controller: appHeaderController,
            templateUrl: "components/app-header/app-header.html"
        }
    }

} ());