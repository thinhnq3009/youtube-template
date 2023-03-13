(function () {
    "use strict";

    angular.module("app").config([
        "$routeProvider",
        function config($routeProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: "views/home.html",
                })
        },
    ]);
})();