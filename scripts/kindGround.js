/**
 * Created by nme2 on 22.01.2016.
 */
(function(){

    'use strict';

    angular
        .module('formlyApp')
        .factory('kindGround', kindGround);

    function kindGround() {
        function getkindGround() {
            return [
                {
                    "name": "Parquet",
                    "value":"Parquet"
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
            getkindGround: getkindGround
        }
    }

})();