(function () {
    "use strict";

    angular.module("app").config([
        "$routeProvider",
        function config($routeProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: "views/home.html",
                }).when("/watch", {
                    templateUrl: "views/watch.html"
                })
                .when("/history", {
                    templateUrl: "views/history.html"
                }).when("/library", {
                    templateUrl: "views/library.html"
                })
        },
    ]);
})();