(function () {
    'use strict';

    angular
        .module ('admin')
        .component ('appHeader', appHeader());


    function appHeader() {

        function appHeaderController(){
          
        }

        return {
            controller: appHeaderController,
            templateUrl: "admin/components/app-header/app-header.html"
        }
    }

} ());