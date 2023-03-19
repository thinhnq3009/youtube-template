(function () {
    "use strict";

    angular.module("admin").config([
        "$routeProvider",
        function config($routeProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: "admin/views/home.html",
                }).when("/users", {
                    templateUrl: "admin/views/users.html",
                }).when("/videos", {
                    templateUrl: "admin/views/video.html",
                })
        },
    ]);
})();