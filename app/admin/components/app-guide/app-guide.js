(function () {
    'use strict';

    angular
        .module('admin')
        .component('appGuide', appGuide());


    function appGuide() {

        function appGuideController() {

        }

        return {
            controller: appGuideController,
            templateUrl: "admin/components/app-guide/app-guide.html"
        }
    }

}());