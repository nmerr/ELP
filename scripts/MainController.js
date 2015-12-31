// scripts/MainController.js

(function() {

    'use strict';

    angular
        .module('formlyApp')
        .controller('MainController', MainController);

    function MainController(inventoryType,floorNumber,numberOfRoom, roomTypes, stateOfStuff ) {

        var vm = this;


        // Model object referenced in index.html
        vm.inventory = {};


        //Array of form fields with templateOptions
        // Referenced in 'fields' attribute (see index.html)
        vm.inventoryFields = [

            {
                key: 'Email_rr',
                type: 'input',
                templateOptions: {
                    type: 'email',
                    label: 'Email Collaborateur',
                    placeholder: 'Entrez votre e-mail',
                    required: false

                }
            },
            {
                key: 'No_Immeuble',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'N Immeuble',
                    placeholder: 'Entrer le numero d immeuble',
                    required: false

                }
            },
            {
                key: 'No_objet',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'N Objet',
                    placeholder: 'Entrer le numero d objet',
                    required: false

                }
            },
            {
                key: 'No_Sequence',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'N Sequence',
                    placeholder: 'Entrer le numero de sequence',
                    required: false

                }
            },

            {
                key: 'Groupe',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'Groupe',
                    placeholder: 'Entrez le groupe',
                    required: false
                }
            },
            {
                key: 'Init_Ass_Tech',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'Initiales Ass Tech',
                    placeholder: 'ex: SAM',
                    required: false

                }
            },
            {
                key: 'inventoryType',
                type: 'select',
                templateOptions: {
                    label: 'Type d'+"'"+'etat des lieux',
                    // Call inventoryType script to get a list
                    options: inventoryType.getinventoryTypes()
                }

            },
            {
                key: 'Adresse_Immeuble',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'Adresse Immeuble',
                    placeholder: 'ex: Chemin des Olliquettes 10',
                    required: false
                }
            },
            {
                key: 'postNumber_Immeuble',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'Numero postal',
                    placeholder: 'ex: 1213',
                    required: false
                }
            },
            {
                key: 'floorNumber',
                type: 'select',
                templateOptions: {
                    label: 'Etage',
                    // Call floorNumber script to get a list
                    options: floorNumber.getfloorNumber()
                }
            },
            {
                key: 'numberOfRoom',
                type: 'select',
                templateOptions: {
                    label: 'Nombre de pieces',
                    // Call numberOfRoom script to get a list
                    options: numberOfRoom.getnumberOfRoom()
                }
            },
            {
                key: 'nameNewOccupant',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'Nom Locataire Entrant',
                    placeholder: 'ex: Smith',
                    required: false
                }
            },
            {
                key: 'firstnameNewOccupant',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'Prenom Locataire Entrant',
                    placeholder: 'ex: John',
                    required: false
                }
            },
            {
                key: 'Email_newOccupant',
                type: 'input',
                templateOptions: {
                    type: 'email',
                    label: 'Email Locataire Entrant',
                    placeholder: 'Entrez l'+"'"+'e-mail du nouveau locataire',
                    required: false
                }
            },
            {
                key: 'telephoneNewOccupant',
                type: 'input',
                templateOptions: {
                    type: 'number',
                    label: 'Telephone Locataire entrant',
                    placeholder: 'ex: 0041 79 544 32 25',
                    required: false
                }
            },
            {
                key: 'entryDateNewOccupant',
                type: 'datepicker',
                templateOptions: {
                    type: 'text',
                    label: 'Date entree nouveau locataire',
                    datepickerPopup: 'dd-MMMM-yyyy'
                }
            },
            {
                key: 'nameFormerOccupant',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'Nom Locataire Sortant',
                    placeholder: 'ex: Smith',
                    required: false
                }
            },
            {
                key: 'firstnameFormerOccupant',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'Prenom Locataire Sortant',
                    placeholder: 'ex: John',
                    required: false
                }
            },
            {
                key: 'Email_formerOccupant',
                type: 'input',
                templateOptions: {
                    type: 'email',
                    label: 'Email Locataire Sortant',
                    placeholder: 'Entrez l'+"'"+'e-mail du locataire sortant',
                    required: false
                }
            },
            {
                key: 'telephoneFormerOccupant',
                type: 'input',
                templateOptions: {
                    type: 'number',
                    label: 'Telephone Locataire sortant',
                    placeholder: 'ex: 0041 79 544 32 25',
                    required: false
                }
            },
            {
                key: 'exitDateFormerOccupant',
                type: 'datepicker',
                templateOptions: {
                    type: 'text',
                    label: 'Date de sortie',
                    datepickerPopup: 'dd-MMMM-yyyy'
                }
            },
            {
                key: 'addressFormerOccupant',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'Adresse Locataire sortant',
                    required: false
                }
            },
            {
                key: 'TypeofRoomPi1',
                type: 'select',
                templateOptions: {
                    label: 'Type de pieces',
                    options: roomTypes.getRoomTypes()
                }
            },

//==================================================================================
//---------------------------Saisie etat Hall Piece 1-------------------------------
//==================================================================================

            {
                key: 'PI1HAEtatPlafond',
                type: 'select',
                templateOptions: {
                    label: 'Plafond',
                    options: stateOfStuff.getStateOfStuff(),
                    hide: '!(model.TypeofRoom === )'
                }
            },

            {
                key: 'PI1HAEtatMurs',
                type: 'select',
                templateOptions: {
                    label: 'Murs',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1HAEtatSol',
                type: 'select',
                templateOptions: {
                    label: 'Sol',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1HAEtatParquet',
                type: 'select',
                templateOptions: {
                    label: 'Parquet',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1HAPorte',
                type: 'select',
                templateOptions: {
                    label: 'Porte',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1HAEtatSeuil',
                type: 'select',
                templateOptions: {
                    label: 'Seuil',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1HAEtatPalier',
                type: 'select',
                templateOptions: {
                    label: 'Palier',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1HAEtatPrises',
                type: 'select',
                templateOptions: {
                    label: 'Prises',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1HAEtatSonnettes',
                type: 'select',
                templateOptions: {
                    label: 'Sonnettes',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1HAEtatInterrupteurs',
                type: 'select',
                templateOptions: {
                    label: 'Interrupteurs',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1HAEtatEclairage',
                type: 'select',
                templateOptions: {
                    label: 'Eclairage',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1HAEtatArmoires',
                type: 'select',
                templateOptions: {
                    label: 'Armoires',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1HAEtatFenetre',
                type: 'select',
                templateOptions: {
                    label: 'Fenetre',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1HARadiateurs',
                type: 'select',
                templateOptions: {
                    label: 'Radiateurs',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1HACommentaire',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'Commentaire',
                    placeholder: 'Commentaire',
                    required: false

                }
            },
//=======================================================================================
//-----------------------Fin Saisi Info Hall Piece 1 ------------------------------------
//=======================================================================================
//-----------------------Début Saisi Info Cuisine Piece 1--------------------------------
//=======================================================================================

            {
                key: 'PI1CUPlafond',
                type: 'select',
                templateOptions: {
                    label: 'Plafond',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1CUMurs',
                type: 'select',
                templateOptions: {
                    label: 'Murs',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1CUSol',
                type: 'select',
                templateOptions: {
                    label: 'Sol',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1CUPorte',
                type: 'select',
                templateOptions: {
                    label: 'Porte',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1CUSeuil',
                type: 'select',
                templateOptions: {
                    label: 'Seuil',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1CUCles',
                type: 'select',
                templateOptions: {
                    label: 'Clefs',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1CUAisselier',
                type: 'select',
                templateOptions: {
                    label: 'Aisselier',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1CUVitre',
                type: 'select',
                templateOptions: {
                    label: 'Vitre',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1CUFenetres',
                type: 'select',
                templateOptions: {
                    label: 'Fenetres',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1CURadiateurs',
                type: 'select',
                templateOptions: {
                    label: 'Radiateurs',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1CUPlacards',
                type: 'select',
                templateOptions: {
                    label: 'Placards',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1CUArmoires',
                type: 'select',
                templateOptions: {
                    label: 'Armoires',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1CUPortesArmoires',
                type: 'select',
                templateOptions: {
                    label: 'Porte Armoires',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1CUCleArmoires',
                type: 'select',
                templateOptions: {
                    label: 'Clefs Armoires',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1CUPrises',
                type: 'select',
                templateOptions: {
                    label: 'Prises',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1CUInterrupteurs',
                type: 'select',
                templateOptions: {
                    label: 'Interrupteurs',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1CUEclairage',
                type: 'select',
                templateOptions: {
                    label: 'Eclairage',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1CUStores',
                type: 'select',
                templateOptions: {
                    label: 'Stores',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1CUVentillation',
                type: 'select',
                templateOptions: {
                    label: 'Ventillation',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1CUFaiences',
                type: 'select',
                templateOptions: {
                    label: 'Faiences',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1CUEcoulement',
                type: 'select',
                templateOptions: {
                    label: 'Ecoulement',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1CURobinetterie',
                type: 'select',
                templateOptions: {
                    label: 'Robinetterie',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1CUBouchon',
                type: 'select',
                templateOptions: {
                    label: 'Bouchon',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1CUFour',
                type: 'select',
                templateOptions: {
                    label: 'Four',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1CUPlaques',
                type: 'select',
                templateOptions: {
                    label: 'Plaques',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1CUEvier',
                type: 'select',
                templateOptions: {
                    label: 'Evier',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1CUPoubelle',
                type: 'select',
                templateOptions: {
                    label: 'Poubelle',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1CULaveVaisselle',
                type: 'select',
                templateOptions: {
                    label: 'Lave Vaisselle',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1CUMicroOndes',
                type: 'select',
                templateOptions: {
                    label: 'Micro Ondes',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1CUFrigos',
                type: 'select',
                templateOptions: {
                    label: 'Frigos',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1CUHotte',
                type: 'select',
                templateOptions: {
                    label: 'Hotte',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1CUCongelateur',
                type: 'select',
                templateOptions: {
                    label: 'Congelateur',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1CUCommentaire',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'Commentaire',
                    placeholder: 'Commentaire',
                    required: false

                }
            },

//-----------------------FIN Saisi Info Cuisine Piece 1--------------------------------

//-----------------------Début Saisi Info Salle de Bain Piece 1--------------------------------




            {
                key: 'PI1SBPlafond',
                type: 'select',
                templateOptions: {
                    label: 'Plafond',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1SBMurs',
                type: 'select',
                templateOptions: {
                    label: 'Murs',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1SBSol',
                type: 'select',
                templateOptions: {
                    label: 'Sol',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1SBPorte',
                type: 'select',
                templateOptions: {
                    label: 'Porte',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1SBSeuil',
                type: 'select',
                templateOptions: {
                    label: 'Seuil',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1SBCles',
                type: 'select',
                templateOptions: {
                    label: 'Clefs',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1SBAisselier',
                type: 'select',
                templateOptions: {
                    label: 'Aisselier',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1SBVitre',
                type: 'select',
                templateOptions: {
                    label: 'Vitre',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1SBFenetres',
                type: 'select',
                templateOptions: {
                    label: 'Fenetres',
                    options: stateOfStuff.getStateOfStuff()

                }
            },
            {
                key: 'PI1SBStore',
                type: 'select',
                templateOptions: {
                    label: 'Store',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1SBManivelle',
                type: 'select',
                templateOptions: {
                    label: 'Manivelle',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1SBRadiateurs',
                type: 'select',
                templateOptions: {
                    label: 'Radiateurs',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1SBPharmacie',
                type: 'select',
                templateOptions: {
                    label: 'Pharmacie',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1SBPrises',
                type: 'select',
                templateOptions: {
                    label: 'Prises',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1SBPriseFI',
                type: 'select',
                templateOptions: {
                    label: 'PriseFI',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1SBInterrupteurs',
                type: 'select',
                templateOptions: {
                    label: 'Interrupteurs',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1SBVentillation',
                type: 'select',
                templateOptions: {
                    label: 'Ventillation',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1SBFaiences',
                type: 'select',
                templateOptions: {
                    label: 'Faiences',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1SBEcoulement',
                type: 'select',
                templateOptions: {
                    label: 'Ecoulement',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1SBRobinetterie',
                type: 'select',
                templateOptions: {
                    label: 'Robinetterie',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1SBBouchons',
                type: 'select',
                templateOptions: {
                    label: 'Bouchons',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1SBReservoir',
                type: 'select',
                templateOptions: {
                    label: 'Reservoir',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1SBBaignoire',
                type: 'select',
                templateOptions: {
                    label: 'Baignoire',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1SBTopDouche',
                type: 'select',
                templateOptions: {
                    label: 'Top de Douche',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1SBLavabo1',
                type: 'select',
                templateOptions: {
                    label: 'Lavabo 1',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1SBLavabo2',
                type: 'select',
                templateOptions: {
                    label: 'Lavabo 2',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1SBPorteLinge',
                type: 'select',
                templateOptions: {
                    label: 'Porte Linge',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1SBBidet',
                type: 'select',
                templateOptions: {
                    label: 'Bidet',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1SBWC',
                type: 'select',
                templateOptions: {
                    label: 'WC',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1SBPortePapier',
                type: 'select',
                templateOptions: {
                    label: 'Porte Papier',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1SBSiege',
                type: 'select',
                templateOptions: {
                    label: 'Siege',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1SBPorteSavon',
                type: 'select',
                templateOptions: {
                    label: 'Porte Savon',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1SBPorteVerre',
                type: 'select',
                templateOptions: {
                    label: 'PorteVerre',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1SBGlace',
                type: 'select',
                templateOptions: {
                    label: 'Glace',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1SBEclairage',
                type: 'select',
                templateOptions: {
                    label: 'Eclairage',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1SBCommentaire',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'Commentaire',
                    placeholder: 'Commentaire',
                    required: false

                }
            },


//-----------------------FIN Saisi Info Salle de Bain Piece 1--------------------------------

//-----------------------Début Saisi Info WC Piece 1--------------------------------



            {
                key: 'PI1CHPlafond',
                type: 'select',
                templateOptions: {
                    label: 'Plafond',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1CHMurs',
                type: 'select',
                templateOptions: {
                    label: 'Murs',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1CHSol',
                type: 'select',
                templateOptions: {
                    label: 'Sol',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1CHPorte',
                type: 'select',
                templateOptions: {
                    label: 'Porte',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1CHSeuil',
                type: 'select',
                templateOptions: {
                    label: 'Seuil',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1CHCles',
                type: 'select',
                templateOptions: {
                    label: 'Clefs',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1CHAisselier',
                type: 'select',
                templateOptions: {
                    label: 'Aisselier',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1CHVitre',
                type: 'select',
                templateOptions: {
                    label: 'Vitre',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1CHFenetres',
                type: 'select',
                templateOptions: {
                    label: 'Fenetres',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1CHStores',
                type: 'select',
                templateOptions: {
                    label: 'Stores',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1CHManivelles',
                type: 'select',
                templateOptions: {
                    label: 'Manivelles',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1CHRadiateurs',
                type: 'select',
                templateOptions: {
                    label: 'Radiateurs',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1CHArmoires',
                type: 'select',
                templateOptions: {
                    label: 'Armoires',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1CHPortesArmoires',
                type: 'select',
                templateOptions: {
                    label: 'Portes Armoires',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1CHClésArmoire',
                type: 'select',
                templateOptions: {
                    label: 'Clés Armoire',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1CHRayons',
                type: 'select',
                templateOptions: {
                    label: 'Rayons',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1CHInterrupteur',
                type: 'select',
                templateOptions: {
                    label: 'Interrupteur',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1CHPrisesTV',
                type: 'select',
                templateOptions: {
                    label: 'Prises TV',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1CHPrises',
                type: 'select',
                templateOptions: {
                    label: 'Prises',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1CHEclairages',
                type: 'select',
                templateOptions: {
                    label: 'Eclairages',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1CHTenture',
                type: 'select',
                templateOptions: {
                    label: 'Tenture',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1CHBalcon',
                type: 'select',
                templateOptions: {
                    label: 'Balcon',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1CHCommentaire',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'Commentaire',
                    placeholder: 'Commentaire',
                    required: false

                }
            },


//-----------------------Fin Saisi Info CHambre Piece 1--------------------------------

//-----------------------Début saisi Info WC Piece 1 ---------------------------------


            {
                key: 'PIWCBPlafond',
                type: 'select',
                templateOptions: {
                    label: 'Plafond',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1WCMurs',
                type: 'select',
                templateOptions: {
                    label: 'Murs',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1WCSol',
                type: 'select',
                templateOptions: {
                    label: 'Sol',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1WCPorte',
                type: 'select',
                templateOptions: {
                    label: 'Porte',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1WCSeuil',
                type: 'select',
                templateOptions: {
                    label: 'Seuil',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1WCCles',
                type: 'select',
                templateOptions: {
                    label: 'Clefs',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1WCAisselier',
                type: 'select',
                templateOptions: {
                    label: 'Aisselier',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1WCVitre',
                type: 'select',
                templateOptions: {
                    label: 'Vitre',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1WCFenetres',
                type: 'select',
                templateOptions: {
                    label: 'Fenetres',
                    options: stateOfStuff.getStateOfStuff()

                }
            },
            {
                key: 'PI1WCStore',
                type: 'select',
                templateOptions: {
                    label: 'Store',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1WCManivelle',
                type: 'select',
                templateOptions: {
                    label: 'Manivelle',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1WCRadiateurs',
                type: 'select',
                templateOptions: {
                    label: 'Radiateurs',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1WCPharmacie',
                type: 'select',
                templateOptions: {
                    label: 'Pharmacie',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1WCPrises',
                type: 'select',
                templateOptions: {
                    label: 'Prises',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1WCPriseFI',
                type: 'select',
                templateOptions: {
                    label: 'PriseFI',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1WCInterrupteurs',
                type: 'select',
                templateOptions: {
                    label: 'Interrupteurs',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1WCVentillation',
                type: 'select',
                templateOptions: {
                    label: 'Ventillation',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1WCFaiences',
                type: 'select',
                templateOptions: {
                    label: 'Faiences',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1WCEcoulement',
                type: 'select',
                templateOptions: {
                    label: 'Ecoulement',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1WCRobinetterie',
                type: 'select',
                templateOptions: {
                    label: 'Robinetterie',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1WCBouchons',
                type: 'select',
                templateOptions: {
                    label: 'Bouchons',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1WCReservoir',
                type: 'select',
                templateOptions: {
                    label: 'Reservoir',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1WCBaignoire',
                type: 'select',
                templateOptions: {
                    label: 'Baignoire',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1WCTopDouche',
                type: 'select',
                templateOptions: {
                    label: 'Top de Douche',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1WCLavabo1',
                type: 'select',
                templateOptions: {
                    label: 'Lavabo 1',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1WCLavabo2',
                type: 'select',
                templateOptions: {
                    label: 'Lavabo 2',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1WCPorteLinge',
                type: 'select',
                templateOptions: {
                    label: 'Porte Linge',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1WCBidet',
                type: 'select',
                templateOptions: {
                    label: 'Bidet',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1WCWC',
                type: 'select',
                templateOptions: {
                    label: 'WC',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1WCPortePapier',
                type: 'select',
                templateOptions: {
                    label: 'Porte Papier',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1WCSiege',
                type: 'select',
                templateOptions: {
                    label: 'Siege',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1WCPorteSavon',
                type: 'select',
                templateOptions: {
                    label: 'Porte Savon',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1WCPorteVerre',
                type: 'select',
                templateOptions: {
                    label: 'PorteVerre',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1WCGlace',
                type: 'select',
                templateOptions: {
                    label: 'Glace',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1WCEclairage',
                type: 'select',
                templateOptions: {
                    label: 'Eclairage',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1WCCommentaire',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'Commentaire',
                    placeholder: 'Commentaire',
                    required: false

                }
            },


//---------------Fin saisi WC Pièce 1-------------------------------------

//----------------Début saisi Pièce Principal Pièce 1 ------------------------------

            {
                key: 'PIPPPlafond',
                type: 'select',
                templateOptions: {
                    label: 'Plafond',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PIPPMurs',
                type: 'select',
                templateOptions: {
                    label: 'Murs',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PIPPSol',
                type: 'select',
                templateOptions: {
                    label: 'Sol',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PIPPPortes',
                type: 'select',
                templateOptions: {
                    label: 'Portes',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PIPPClefs',
                type: 'select',
                templateOptions: {
                    label: 'Clefs',
                    options: stateOfStuff.getStateOfStuff()

                }
            },
            {
                key: 'PIPPAisselier',
                type: 'select',
                templateOptions: {
                    label: 'Aisselier',
                    options: stateOfStuff.getStateOfStuff()

                }
            },
            {
                key: 'PIPPFenetres',
                type: 'select',
                templateOptions: {
                    label: 'Fenêtres',
                    options: stateOfStuff.getStateOfStuff()

                }
            },
            {
                key: 'PIPPVitres',
                type: 'select',
                templateOptions: {
                    label: 'Vitres',
                    options: stateOfStuff.getStateOfStuff()

                }
            },
            {
                key: 'PIPPStores',
                type: 'select',
                templateOptions: {
                    label: 'Stores',
                    options: stateOfStuff.getStateOfStuff()

                }
            },
            {
                key: 'PIPPManivelles',
                type: 'select',
                templateOptions: {
                    label: 'Manivelles',
                    options: stateOfStuff.getStateOfStuff()

                }
            },
            {
                key: 'PIPPRadiateurs',
                type: 'select',
                templateOptions: {
                    label: 'Radiateurs',
                    options: stateOfStuff.getStateOfStuff()

                }
            },
            {
                key: 'PIPPArmoires',
                type: 'select',
                templateOptions: {
                    label: 'Armoires',
                    options: stateOfStuff.getStateOfStuff()

                }
            },
            {
                key: 'PIPPCleArmoire',
                type: 'select',
                templateOptions: {
                    label: 'Clé Armoires',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PIPPRayons',
                type: 'select',
                templateOptions: {
                    label: 'Rayons',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PIPPInterrupteurs',
                type: 'select',
                templateOptions: {
                    label: 'Interrupteurs',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PIPPPrisesTV',
                type: 'select',
                templateOptions: {
                    label: 'Prises TV',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PIPPPrises',
                type: 'select',
                templateOptions: {
                    label: 'Prises',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PIPPEclairage',
                type: 'select',
                templateOptions: {
                    label: 'Eclairage',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PIPPTenture',
                type: 'select',
                templateOptions: {
                    label: 'Tenture',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PIPPBalcon',
                type: 'select',
                templateOptions: {
                    label: 'Balcon',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PI1PPCommentaire',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'Commentaire',
                    placeholder: 'Commentaire',
                    required: false

                }
            },

//-------------------Fin saisi Pièce Principale Pièce 1-----------------------------

//-------------------Début Saisi Salle à Manger Pièce 1-----------------------------

            {
                key: 'PISMPlafond',
                type: 'select',
                templateOptions: {
                    label: 'Plafond',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PISMMurs',
                type: 'select',
                templateOptions: {
                    label: 'Murs',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PISMSol',
                type: 'select',
                templateOptions: {
                    label: 'Sol',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PISMPortes',
                type: 'select',
                templateOptions: {
                    label: 'Portes',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PISMClefs',
                type: 'select',
                templateOptions: {
                    label: 'Clefs',
                    options: stateOfStuff.getStateOfStuff()

                }
            },
            {
                key: 'PISMAisselier',
                type: 'select',
                templateOptions: {
                    label: 'Aisselier',
                    options: stateOfStuff.getStateOfStuff()

                }
            },
            {
                key: 'PISMFenetres',
                type: 'select',
                templateOptions: {
                    label: 'Fenêtres',
                    options: stateOfStuff.getStateOfStuff()

                }
            },
            {
                key: 'PISMVitres',
                type: 'select',
                templateOptions: {
                    label: 'Vitres',
                    options: stateOfStuff.getStateOfStuff()

                }
            },
            {
                key: 'PISMStores',
                type: 'select',
                templateOptions: {
                    label: 'Stores',
                    options: stateOfStuff.getStateOfStuff()

                }
            },
            {
                key: 'PISMManivelles',
                type: 'select',
                templateOptions: {
                    label: 'Manivelles',
                    options: stateOfStuff.getStateOfStuff()

                }
            },
            {
                key: 'PISMRadiateurs',
                type: 'select',
                templateOptions: {
                    label: 'Radiateurs',
                    options: stateOfStuff.getStateOfStuff()

                }
            },
            {
                key: 'PISMArmoires',
                type: 'select',
                templateOptions: {
                    label: 'Armoires',
                    options: stateOfStuff.getStateOfStuff()

                }
            },
            {
                key: 'PISMCleArmoire',
                type: 'select',
                templateOptions: {
                    label: 'Clé Armoires',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PISMRayons',
                type: 'select',
                templateOptions: {
                    label: 'Rayons',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PISMInterrupteurs',
                type: 'select',
                templateOptions: {
                    label: 'Interrupteurs',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PISMPrisesTV',
                type: 'select',
                templateOptions: {
                    label: 'Prises TV',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PISMPrises',
                type: 'select',
                templateOptions: {
                    label: 'Prises',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PISMEclairage',
                type: 'select',
                templateOptions: {
                    label: 'Eclairage',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PISMTenture',
                type: 'select',
                templateOptions: {
                    label: 'Tenture',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PISMBalcon',
                type: 'select',
                templateOptions: {
                    label: 'Balcon',
                    options: stateOfStuff.getStateOfStuff()

                }
            },

            {
                key: 'PISMPCommentaire',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'Commentaire',
                    placeholder: 'Commentaire',
                    required: false

                }
            }
            


        ];

    }




})()