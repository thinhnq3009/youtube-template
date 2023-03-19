(function () {
    'use strict';

    angular
        .module('admin')
        .component('tableUser', tableUser());


    function tableUser() {

        function tableUserController() {
            var vm = this;

            init();

            function init() {

            }
        }

        return {
            bindings: {},
            controller: tableUserController,
            templateUrl: 'admin/components/table-user/table-user.html',
            controllerAs: '${ctrl}'
        }
    }

}());