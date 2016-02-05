/**
 * Created by nme2 on 22.01.2016.
 */
(function(){

    'use strict';

    angular
        .module('formlyApp')
        .factory('kindStore', kindStore);

    function kindStore() {
        function getkindStore() {
            return [
                {
                    "name": "Electrique",
                    "value":"Electrique"
                },
                {
                    "name":"Manuel",
                    "value":"Manuel"
                },
            ];
        }

        return {
            getkindStore: getkindStore
        }
    }

})();