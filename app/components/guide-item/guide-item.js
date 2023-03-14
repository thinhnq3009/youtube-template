
(function () {
    'use strict';

    angular
        .module ('app')
        .component ('guideItem', guideItem());


    function guideItem() {

        function guideItemController(){
           
        }

        return {
            controller: guideItemController,
            templateUrl: 'components/guide-item/guide-item.html',
        }
    }

} ());