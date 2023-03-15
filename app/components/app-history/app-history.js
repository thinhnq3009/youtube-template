(function () {
    'use strict';

    angular
        .module ('app')
        .component ('appHistory', appHistory());


    function appHistory() {

        function appHistoryController(){
            var vm = this;
            
            init();

            function init(){

            }
        }

        return {
            controller: appHistoryController,
            templateUrl : "components/app-history/app-history.html"
        }
    }

} ());