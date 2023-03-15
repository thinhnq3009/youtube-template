(function () {
    'use strict';

    angular
        .module ('app')
        .component ('appLibrary', appLibrary());


    function appLibrary() {

        function appLibraryController(){
            var vm = this;
            
            init();

            function init(){

            }
        }

        return {
            controller: appLibraryController,
            templateUrl: "components/app-library/app-library.html"
        }
    }

} ());