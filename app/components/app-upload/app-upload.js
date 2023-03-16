(function () {
    'use strict';

    angular
        .module ('app')
        .component ('appUpload', appUpload());


    function appUpload() {

        function appUploadController(){
            var vm = this;
            
            init();

            function init(){

            }
        }

        return {
            bindings: {},
            controller: appUploadController,
            templateUrl: 'components/app-upload/app-upload.html'
        }
    }

} ());