/**
 * Created by nme2 on 21.01.2016.
 */
(function(){

    'use strict';

    angular
        .module('formlyApp')
        .factory('kindWall', kindWall);

    function kindWall() {
        function getkindWall() {
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
            getkindWall: getkindWall
        }
    }

})();