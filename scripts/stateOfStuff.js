// scripts/StateofStuff.js
(function(){

    'use strict';

    angular
        .module('formlyApp')
        .factory('stateOfStuff', stateOfStuff);

    function stateOfStuff() {
        function getStateOfStuff() {
            return [



                {
                    "name":"A Neuf",
                    "state":"State_Neuf"
                },
                {
                    "name":"En ordre",
                    "state":"State_Ordre"
                },
                {
                    "name":"Abime par locataire",
                    "state":"State_Abim_Loc"
                },
                {
                    "name":"Usage normale",
                    "state":"State_Normal"
                },
                {
                    "name":"Defraichi",
                    "state":"State_Defraichi"
                },
                {
                    "name":"Legerement defraichi",
                    "state":"State_Leg_Defraichi"
                },
                {
                    "name":"Neant",
                    "state":"State_Neant"
                },


            ];
        }
        return {
            getStateOfStuff: getStateOfStuff
        }
    }
})();
