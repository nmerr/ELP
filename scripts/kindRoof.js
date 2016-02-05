/**
 * Created by nme2 on 21.01.2016.
 */
(function(){

    'use strict';

    angular
        .module('formlyApp')
        .factory('kindRoof', kindRoof);

    function kindRoof() {
        function getkindRoof() {
            return [
                {
                    "name": "Papier Peint",
                    "value":"Papier Peint"
                },
                {
                    "name":"Peinture",
                    "value":"Peinture"
                },
                {
                    "name":"Suspendu",
                    "value":"Suspendu"
                },
                {
                    "name":"Metallique",
                    "value":"Metallique"
                },
            ];
        }

        return {
            getkindRoof: getkindRoof
        }
    }

})();