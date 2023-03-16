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
                }).when("/signin", {
                    templateUrl: "views/signin.html"
                }).when("/signup", {
                    templateUrl: "views/signup.html"
                }).when("/reset-password", {
                    templateUrl: "views/reset-password.html"
                }).when("/new-password", {
                    templateUrl: "views/new-password.html"
                }).when("/profile", {
                    templateUrl: "views/profile.html"
                }).when("/upload", {
                    templateUrl: "views/upload.html"
                })
        },
    ]);
})();