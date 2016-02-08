/**
 * Created by nme2 on 21.01.2016.
 */
(function(){

    'use strict';

    angular
        .module('formlyApp')
        .factory('kindWalls', kindWalls);

    function kindWalls() {
        function getkindWalls() {
            return [
                {
                    "name": "Papier peint",
                    "value":"Papier peint"
                },
                {
                    "name":"Lino",
                    "value":"Lino"
                },
                {
                    "name":"Carrelage",
                    "value":"Carrelage"
                },
                {
                    "name":"Moquette",
                    "value":"Moquette"
                },
            ];
        }

        return {
            getkindWalls: getkindWalls
        }
    }

})();