(function () {
    'use strict';

    angular
        .module ('app')
        .component ('appContent', appContent());


    function appContent() {

        function appContentController () {
            
        }
     

        return {
            controller: appContentController,
            templateUrl: "components/app-content/app-content.html"
        }
    }

} ());