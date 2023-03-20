(function () {
    'use strict';

    angular
        .module ('app')
        .component ('updateVideo', updateVideo());


    function updateVideo() {

        function updateVideoController(){
            var vm = this;
            
            init();

            function init(){

            }
        }

        return {
            bindings: {},
            controller: updateVideoController,
            templateUrl: 'components/update-video/update-video.html',
            controllerAs: '${ctrl}'
        }
    }

} ());