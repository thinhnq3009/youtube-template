(function () {
    'use strict';

    angular
        .module('app')
        .component('appGuide', appGuide());


    function appGuide() {

        function appGuideController() {

        }

        return {
            controller: appGuideController,
            templateUrl: "components/app-guide/app-guide.html"
        }
    }

}());