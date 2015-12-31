// scripts/Dependances.js
(function(){

    'use strict';

    angular
        .module('formlyApp')
        .factory('dependance', dependance);

    function dependance() {
        function getdependance() {
            return [

                {
                   "name":"Cave",
                    "state":"Dep_Cave"
                },
                {
                    "name":"Grenier",
                    "state":"Dep_Grenier"
                },
                {
                    "name":"Mezzanine",
                    "state":"Dep_Mezzanine"
                },
                {
                    "name":"Local",
                    "state":"Dep_Local"
                },
                {
                    "name":"Casier a Ski",
                    "state":"Dep_Ski"
                },
                {
                    "name":"Parking",
                    "state":"Dep_Parking"
                },
                {
                    "name":"Garage",
                    "state":"Dep_Garage"
                },
                {
                    "name":"Jardin",
                    "state":"Dep_Jardin"
                },
                {
                    "name":"Terrasse",
                    "state":"Dep_Terrasse"
                },
                {
                    "name":"Loggia",
                    "state":"Dep_Loggia"
                },
                {
                    "name":"Cour",
                    "state":"Dep_Cour"
                },
                {
                    "name":"Casier a vin",
                    "state":"Dep_Cas_Vin"
                },
                {
                    "name":"Chaufferie",
                    "state":"Dep_Chaufferie"
                },
                {
                    "name":"Piscine",
                    "state":"Dep_Piscine"
                },
                {
                    "name":"Abris Piscine",
                    "state":"Dep_Abris_Pisc"
                }

            ];
        }
        return {
            getdependance: getdependance
        }
    }
})();
/**
 * Created by nme2 on 05.11.2015.
 */
