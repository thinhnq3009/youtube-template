(function () {
    'use strict';

    angular
        .module ('admin')
        .component ('tableVideo', tableVideo());


    function tableVideo() {

        function tableVideoController(){
            var vm = this;
            
            init();

            function init(){

            }
        }

        return {
            bindings: {},
            controller: tableVideoController,
            templateUrl: 'admin/components/table-video/table-video.html',
            controllerAs: '${ctrl}'
        }
    }

} ());