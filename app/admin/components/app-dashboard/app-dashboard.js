(function () {
    'use strict';

    angular
        .module ('admin')
        .component ('appDashboard', appDashBoard());


    function appDashBoard() {

        function appDashBoardController(){
            var vm = this;
            
            init();

            function init(){

            }
        }

        return {
            bindings: {},
            controller: appDashBoardController,
            templateUrl: 'admin/components/app-dashboard/app-dashboard.html',
            controllerAs: '${ctrl}'
        }
    }

} ());