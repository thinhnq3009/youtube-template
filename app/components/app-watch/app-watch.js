(function () {
    'use strict';

    angular
        .module ('app')
        .component ('appWatch', appWatch());


    function appWatch() {

        function appWatchController(){
          
        }

        return {
            controller: appWatchController,
            templateUrl: "components/app-watch/app-watch.html"
        }
    }

} ());