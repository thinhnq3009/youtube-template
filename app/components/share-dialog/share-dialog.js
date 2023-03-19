(function () {
    'use strict';

    angular
        .module ('app')
        .component ('shareDialog', shareDialog());


    function shareDialog() {

        function shareDialogController(){
            var vm = this;
            
            init();

            function init(){

            }
        }

        return {
            bindings: {},
            controller: shareDialogController,
            templateUrl: 'components/share-dialog/share-dialog.html',
            controllerAs: '${ctrl}'
        }
    }

} ());