    // scripts/MainController.js

    (function () {

        'use strict';

        angular
            .module('formlyApp')
            .controller('MainController', MainController);

        function MainController(inventoryType, floorNumber, numberOfRoom, roomTypes, stateOfStuff) {

            var vm = this;

            var jsonFile;

            vm.onSubmit = export2Json;

            function export2Json() {
                jsonFile = JSON.stringify(vm.inventory), null, "\t";
                alert(jsonFile);

            }


            // Model object referenced in index.html
            vm.inventory = {};


            //Array of form fields with templateOptions
            // Referenced in 'fields' attribute (see index.html)
            vm.inventoryFields = [

                {
                    className: 'row',
                    fieldGroup: [
                        {
                            className: 'col-xs-4',
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
                            className: 'col-xs-4',
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
                            className: 'col-xs-4',
                            key: 'No_objet',
                            type: 'input',
                            templateOptions: {
                                type: 'text',
                                label: 'N Objet',
                                placeholder: 'Entrer le numero d objet',
                                required: false

                            }
                        }
                    ]
                },

                {
                    className: 'row',
                    fieldGroup: [
                        {
                            className: 'col-xs-4',
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
                            className: 'col-xs-4',
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
                            className: 'col-xs-4',
                            key: 'Init_Ass_Tech',
                            type: 'input',
                            templateOptions: {
                                type: 'text',
                                label: 'Initiales Ass Tech',
                                placeholder: 'ex: SAM',
                                required: false
                            }
                        }
                    ]
                },

                {
                    className: 'row',
                    fieldGroup: [
                        {
                            className: 'col-xs-4',
                            key: 'inventoryType',
                            type: 'select',
                            templateOptions: {
                                label: 'Type d' + "'" + 'etat des lieux',
                                // Call inventoryType script to get a list
                                options: inventoryType.getinventoryTypes()
                            }

                        },
                        {
                            className: 'col-xs-4',
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
                            className: 'col-xs-4',
                            key: 'postNumber_Immeuble',
                            type: 'input',
                            templateOptions: {
                                type: 'text',
                                label: 'Numero postal',
                                placeholder: 'ex: 1213',
                                required: false
                            }
                        }
                    ]
                },

                {
                    className: 'row',
                    fieldGroup: [
                        {
                            className: 'col-xs-4',
                            key: 'floorNumber',
                            type: 'select',
                            templateOptions: {
                                label: 'Etage',
                                // Call floorNumber script to get a list
                                options: floorNumber.getfloorNumber()
                            }
                        },
                        {
                            className: 'col-xs-4',
                            key: 'numberOfRoom',
                            type: 'select',
                            templateOptions: {
                                label: 'Nombre de pieces',
                                // Call numberOfRoom script to get a list
                                options: numberOfRoom.getnumberOfRoom()
                            }
                        }
                    ]
                },

                {
                    className: 'row',
                    fieldGroup: [
                        {
                            className: 'col-md-6',
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
                            className: 'col-md-6',
                            key: 'firstnameNewOccupant',
                            type: 'input',
                            templateOptions: {
                                type: 'text',
                                label: 'Prenom Locataire Entrant',
                                placeholder: 'ex: John',
                                required: false
                            }
                        }
                    ]
                },

                {
                    className: 'row',
                    fieldGroup: [
                        {
                            className: 'col-xs-4',
                            key: 'Email_newOccupant',
                            type: 'input',
                            templateOptions: {
                                type: 'email',
                                label: 'Email Locataire Entrant',
                                placeholder: 'Entrez l' + "'" + 'e-mail du nouveau locataire',
                                required: false
                            }
                        },
                        {
                            className: 'col-xs-4',
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
                            className: 'col-xs-4',
                            key: 'entryDateNewOccupant',
                            type: 'datepicker',
                            templateOptions: {
                                type: 'text',
                                label: 'Date entree nouveau locataire',
                                datepickerPopup: 'dd-MMMM-yyyy'
                            }
                        }
                    ]
                },

                {
                    className: 'row',
                    fieldGroup: [
                        {
                            className: 'col-md-6',
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
                            className: 'col-md-6',
                            key: 'firstnameFormerOccupant',
                            type: 'input',
                            templateOptions: {
                                type: 'text',
                                label: 'Prenom Locataire Sortant',
                                placeholder: 'ex: John',
                                required: false
                            }
                        }
                    ]
                },

                {
                    className: 'row',
                    fieldGroup: [
                        {
                            className: 'col-xs-4',
                            key: 'Email_formerOccupant',
                            type: 'input',
                            templateOptions: {
                                type: 'email',
                                label: 'Email Locataire Sortant',
                                placeholder: 'Entrez l' + "'" + 'e-mail du locataire sortant',
                                required: false
                            }
                        },
                        {
                            className: 'col-xs-4',
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
                            className: 'col-xs-4',
                            key: 'exitDateFormerOccupant',
                            type: 'datepicker',
                            templateOptions: {
                                type: 'text',
                                label: 'Date de sortie',
                                datepickerPopup: 'dd-MMMM-yyyy'
                            }
                        }
                    ]
                },

                {
                    className: 'row',
                    fieldGroup: [

                        {
                            className: '',
                            key: 'addressFormerOccupant',
                            type: 'textarea',
                            templateOptions: {
                                type: 'text',
                                label: 'Adresse Locataire sortant',
                                required: false,
                                rows: '5'
                            }
                        }
                    ]
                },

                {
                    type: 'repeatRoomTypes',
                    key: 'roomInventory',
                    templateOptions: {
                        btnText: 'ajouter une piece',
                        fields: [
                            {
                                className: 'row',
                                fieldGroup: [
                                    {

                                        key: 'TypeofRoom',
                                        type: 'select',
                                        templateOptions: {
                                            label: 'Type de pieces',
                                            options: roomTypes.getRoomTypes()
                                        }
                                    },
                                    //===============Champs Plafond=================
                                    {
                                        className: 'col-xs-6 col-md-4',
                                        key: 'EtatPlafond',
                                        type: 'select',
                                        templateOptions: {
                                            label: 'Plafond',
                                            options: stateOfStuff.getStateOfStuff(),
                                            hide: '!(model.TypeofRoom === )'
                                        }
                                    },
                                    {
                                        className: 'col-xs-12 col-sm-6 col-md-8',
                                        key: 'EtatPlafondCommentaire',
                                        type: 'textarea',
                                        templateOptions: {
                                            type: 'text',
                                            label: 'Commentaire',
                                            required: false,
                                            rows: '1'


                                        }
                                    },
                                    //=============Fin Champs plafond =============

                                    //=============Champs Murs ====================

                                    {
                                        className: 'col-xs-6 col-md-4',
                                        key: 'EtatMurs',
                                        type: 'select',
                                        templateOptions: {
                                            label: 'Murs',
                                            options: stateOfStuff.getStateOfStuff(),
                                            hide: '!(model.TypeofRoom === )'
                                        }
                                    },
                                    {
                                        className: 'col-xs-12 col-sm-6 col-md-8',
                                        key: 'EtatMursCommentaire',
                                        type: 'textarea',
                                        templateOptions: {
                                            type: 'text',
                                            label: 'Commentaire',
                                            required: false,
                                            rows: '1'


                                        }
                                    },

                                    //=============Fin Champs Murs =================

                                    //=============Champs Sol ======================

                                    {
                                        className: 'col-xs-6 col-md-4',
                                        key: 'EtatSol',
                                        type: 'select',
                                        templateOptions: {
                                            label: 'Sol',
                                            options: stateOfStuff.getStateOfStuff(),
                                            hide: '!(model.TypeofRoom === )'
                                        }
                                    },
                                    {
                                        className: 'col-xs-12 col-sm-6 col-md-8',
                                        key: 'EtatSolCommentaire',
                                        type: 'textarea',
                                        templateOptions: {
                                            type: 'text',
                                            label: 'Commentaire',
                                            required: false,
                                            rows: '1'


                                        }
                                    },

                                    //============Fin Champs Sol ===================

                                    //==============Champs Armoires ===============

                                    {
                                        className: 'col-xs-6 col-md-4',
                                        key: 'EtatArmoires',
                                        type: 'select',
                                        templateOptions: {
                                            label: 'Armoires',
                                            options: stateOfStuff.getStateOfStuff(),
                                            hide: '!(model.TypeofRoom === )'
                                        }
                                    },
                                    {
                                        className: 'col-xs-12 col-sm-6 col-md-8',
                                        key: 'EtatArmoiresCommentaire',
                                        type: 'textarea',
                                        templateOptions: {
                                            type: 'text',
                                            label: 'Commentaire',
                                            required: false,
                                            rows: '1'


                                        }
                                    },

                                    //===========Fin Champs Armoires ===============

                                    //============Champs Clé Armoires ==============
                                    {
                                        className: 'col-xs-6 col-md-4',
                                        key: 'EtatCleArmoires',
                                        type: 'select',
                                        templateOptions: {
                                            label: 'Clé Armoires',
                                            options: stateOfStuff.getStateOfStuff(),
                                            hide: '!(model.TypeofRoom === )'
                                        }
                                    },
                                    {
                                        className: 'col-xs-12 col-sm-6 col-md-8',
                                        key: 'EtatCleArmoiresCommentaire',
                                        type: 'textarea',
                                        templateOptions: {
                                            type: 'text',
                                            label: 'Commentaire',
                                            required: false,
                                            rows: '1'


                                        }
                                    },

                                    //===========Fin Champs Clé Armoires ===========


                                    //============Champs Radiateur==================

                                    {
                                        className: 'col-xs-6 col-md-4',
                                        key: 'EtatRadiateur',
                                        type: 'select',
                                        templateOptions: {
                                            label: 'Radiateurs',
                                            options: stateOfStuff.getStateOfStuff(),
                                            hide: '!(model.TypeofRoom === )'
                                        }
                                    },
                                    {
                                        className: 'col-xs-12 col-sm-6 col-md-8',
                                        key: 'EtatRadiateursCommentaire',
                                        type: 'textarea',
                                        templateOptions: {
                                            type: 'text',
                                            label: 'Commentaire',
                                            required: false,
                                            rows: '1'


                                        }
                                    },

                                    //==========Fin Champs Radiateurs================


                                    //===========Champs Interrupteurs ===============

                                    {
                                        className: 'col-xs-6 col-md-4',
                                        key: 'EtatInterrupteurs',
                                        type: 'select',
                                        templateOptions: {
                                            label: 'Interrupteurs',
                                            options: stateOfStuff.getStateOfStuff(),
                                            hide: '!(model.TypeofRoom === )'
                                        }
                                    },
                                    {
                                        className: 'col-xs-12 col-sm-6 col-md-8',
                                        key: 'EtatInterrupteursCommentaire',
                                        type: 'textarea',
                                        templateOptions: {
                                            type: 'text',
                                            label: 'Commentaire',
                                            required: false,
                                            rows: '1'


                                        }
                                    },

                                    //===========Fin Champs Interrupteurs ===========


                                    //============Champs Prises======================

                                    {
                                        className: 'col-xs-6 col-md-4',
                                        key: 'EtatPrises',
                                        type: 'select',
                                        templateOptions: {
                                            label: 'Prises',
                                            options: stateOfStuff.getStateOfStuff(),
                                            hide: '!(model.TypeofRoom === )'
                                        }
                                    },
                                    {
                                        className: 'col-xs-12 col-sm-6 col-md-8',
                                        key: 'EtatPrisesCommentaire',
                                        type: 'textarea',
                                        templateOptions: {
                                            type: 'text',
                                            label: 'Commentaire',
                                            required: false,
                                            rows: '1'


                                        }
                                    },

                                    //=========Fin Champs Prises ====================


                                    //=========Champs Portes ========================

                                    {
                                        className: 'col-xs-6 col-md-4',
                                        key: 'EtatPorte',
                                        type: 'select',
                                        templateOptions: {
                                            label: 'Porte',
                                            options: stateOfStuff.getStateOfStuff(),
                                            hide: '!(model.TypeofRoom === )'
                                        }
                                    },
                                    {
                                        className: 'col-xs-12 col-sm-6 col-md-8',
                                        key: 'EtatPorteCommentaire',
                                        type: 'textarea',
                                        templateOptions: {
                                            type: 'text',
                                            label: 'Commentaire',
                                            required: false,
                                            rows: '1'


                                        }
                                    },

                                    //==========Fin Champs Portes ===================

                                    //=========Champs Aisselier ========================

                                    {
                                        className: 'col-xs-6 col-md-4',
                                        key: 'EtatPorte',
                                        type: 'select',
                                        templateOptions: {
                                            label: 'Porte',
                                            options: stateOfStuff.getStateOfStuff(),
                                            hide: '!(model.TypeofRoom === )'
                                        }
                                    },
                                    {
                                        className: 'col-xs-12 col-sm-6 col-md-8',
                                        key: 'EtatPorteCommentaire',
                                        type: 'textarea',
                                        templateOptions: {
                                            type: 'text',
                                            label: 'Commentaire',
                                            required: false,
                                            rows: '1'


                                        }
                                    },

                                    //==========Fin Champs Aisselier ===================


                                    //============Champs Clé Portes =================

                                    {
                                        className: 'col-xs-6 col-md-4',
                                        key: 'EtatClePorte',
                                        type: 'select',
                                        templateOptions: {
                                            label: 'Clé Porte',
                                            options: stateOfStuff.getStateOfStuff(),
                                            hide: '!(model.TypeofRoom === )'
                                        }
                                    },
                                    {
                                        className: 'col-xs-12 col-sm-6 col-md-8',
                                        key: 'EtatClePorteCommentaire',
                                        type: 'textarea',
                                        templateOptions: {
                                            type: 'text',
                                            label: 'Commentaire',
                                            required: false,
                                            rows: '1'


                                        }
                                    },

                                    //============Fin Champs Clé Portes =============

                                    //============Champs Fenêtres ===================

                                    {
                                        className: 'col-xs-6 col-md-4',
                                        key: 'EtatFenetres',
                                        type: 'select',
                                        templateOptions: {
                                            label: 'Fenêtres',
                                            options: stateOfStuff.getStateOfStuff(),
                                            hide: '!(model.TypeofRoom === )'
                                        }
                                    },
                                    {
                                        className: 'col-xs-12 col-sm-6 col-md-8',
                                        key: 'EtatFenetreCommentaire',
                                        type: 'textarea',
                                        templateOptions: {
                                            type: 'text',
                                            label: 'Commentaire',
                                            required: false,
                                            rows: '1'


                                        }
                                    },

                                    //==========Fin Champs Fenêtres =================

                                    //==========Champs Stores =======================

                                    {
                                        className: 'col-xs-6 col-md-4',
                                        key: 'EtatStores',
                                        type: 'select',
                                        templateOptions: {
                                            label: 'Stores',
                                            options: stateOfStuff.getStateOfStuff(),
                                            hide: '!(model.TypeofRoom === )'
                                        }
                                    },
                                    {
                                        className: 'col-xs-12 col-sm-6 col-md-8',
                                        key: 'EtatStoresCommentaire',
                                        type: 'textarea',
                                        templateOptions: {
                                            type: 'text',
                                            label: 'Commentaire',
                                            required: false,
                                            rows: '1'


                                        }
                                    },

                                    //==========Fin Champs Stores ===================


                                    //=========== Champs Manivelle ==================

                                    {
                                        className: 'col-xs-6 col-md-4',
                                        key: 'EtatManivelle',
                                        type: 'select',
                                        templateOptions: {
                                            label: 'Manivelle',
                                            options: stateOfStuff.getStateOfStuff(),
                                            hide: '!(model.TypeofRoom === )'
                                        }
                                    },
                                    {
                                        className: 'col-xs-12 col-sm-6 col-md-8',
                                        key: 'EtatManivelleCommentaire',
                                        type: 'textarea',
                                        templateOptions: {
                                            type: 'text',
                                            label: 'Commentaire',
                                            required: false,
                                            rows: '1'


                                        }
                                    },

                                    //==========Fin Champs Manivelle ================


                                    //===========Champs Ventillation ================

                                    {
                                        className: 'col-xs-6 col-md-4',
                                        key: 'EtatVentillation',
                                        type: 'select',
                                        templateOptions: {
                                            label: 'Ventillation',
                                            options: stateOfStuff.getStateOfStuff(),
                                            hide: '!(model.TypeofRoom === )'
                                        }
                                    },
                                    {
                                        className: 'col-xs-12 col-sm-6 col-md-8',
                                        key: 'EtatVentillationCommentaire',
                                        type: 'textarea',
                                        templateOptions: {
                                            type: 'text',
                                            label: 'Commentaire',
                                            required: false,
                                            rows: '1'

                                        }
                                    },

                                    //=========Fin CHamps Ventillation ==============

                                    //======================================
                                    //              Fin Saisi Commune
                                    //======================================
                                ]
                            },


                            {
                                className: '',
                                type: 'checkbox',
                                model: 'formState',
                                key: 'Kitchen',
                                templateOptions: {
                                    label: 'Cuisine ?'
                                }
                            },
                            {
                                className: '',
                                type: 'checkbox',
                                model: 'formState',
                                key: 'Bathroom',
                                templateOptions: {
                                    label: 'Salle de Bain ?'
                                }
                            },
                            {
                                className: '',
                                type: 'checkbox',
                                model: 'formState',
                                key: 'Hall',
                                templateOptions: {
                                    label: 'Hall ?'
                                }
                            },
                            {
                                className: '',
                                type: 'checkbox',
                                model: 'formState',
                                key: 'Diningroom',
                                templateOptions: {
                                    label: 'Salle à manger ?'
                                }
                            },
                            {
                                className: '',
                                type: 'checkbox',
                                model: 'formState',
                                key: 'Livingroom',
                                templateOptions: {
                                    label: 'Salon ou Pièce Principale ?'
                                }
                            },
                            {
                                className: '',
                                type: 'checkbox',
                                model: 'formState',
                                key: 'WC',
                                templateOptions: {
                                    label: 'WC ?'
                                }
                            },
                            {
                                className: '',
                                type: 'checkbox',
                                model: 'formState',
                                key: 'Bedroom',
                                templateOptions: {
                                    label: 'Chambre ?'
                                }
                            },
                            //=============================================================================================================================
                            //===================Début Saisi Cuisine====================
                            //=============================================================================================================================
                            {
                                //className: 'row',
                                fieldGroup: [
                                    {
                                        hideExpression: '!formState.Kitchen',
                                        fieldGroup: [

                                            //=========Dàbut saisi Faiencese=============

                                            {
                                                className: 'col-xs-6 col-md-4',
                                                key: 'EtatFaiences',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Faïences',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-12 col-sm-6 col-md-8',
                                                key: 'EtatFaillencesCommentaire',
                                                type: 'textarea',
                                                templateOptions: {
                                                    type: 'text',
                                                    label: 'Commentaire',
                                                    required: false,
                                                    rows: '1'

                                                }
                                            },
                                            //======Fin saisi Faiences===================

                                            //======= Début Saisie Gaz===================

                                            {
                                                className: 'col-xs-6 col-md-4',
                                                key: 'EtatGaz',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Gaz',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-12 col-sm-6 col-md-8',
                                                key: 'EtatGazCommentaire',
                                                type: 'textarea',
                                                templateOptions: {
                                                    type: 'text',
                                                    label: 'Commentaire',
                                                    required: false,
                                                    rows: '1'

                                                }
                                            },

                                            //======Fin Saisie Gaz ======================
                                            //======= Début Saisie Evier===================

                                            {
                                                className: 'col-xs-6 col-md-4',
                                                key: 'EtatEvier',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Evier',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-12 col-sm-6 col-md-8',
                                                key: 'EtatEvierCommentaire',
                                                type: 'textarea',
                                                templateOptions: {
                                                    type: 'text',
                                                    label: 'Commentaire',
                                                    required: false,
                                                    rows: '1'

                                                }
                                            },

                                            //======Fin Saisie Evier ======================
                                            //======= Début Saisie Robinetterie===================

                                            {
                                                className: 'col-xs-6 col-md-4',
                                                key: 'EtatRobinetterie',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Robinetterie',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-12 col-sm-6 col-md-8',
                                                key: 'EtatRobinetterieCommentaire',
                                                type: 'textarea',
                                                templateOptions: {
                                                    type: 'text',
                                                    label: 'Commentaire',
                                                    required: false,
                                                    rows: '1'

                                                }
                                            },

                                            //======Fin Saisie Robinnetterie ======================
                                            //======= Début Saisie Bouche-Evier===================

                                            {
                                                className: 'col-xs-6 col-md-4',
                                                key: 'EtatBoucheEvier',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Bouche-évier',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-12 col-sm-6 col-md-8',
                                                key: 'EtatBoucheEvierCommentaire',
                                                type: 'textarea',
                                                templateOptions: {
                                                    type: 'text',
                                                    label: 'Commentaire',
                                                    required: false,
                                                    rows: '1'

                                                }
                                            },

                                            //======Fin Saisie Bouche-Evier ======================
                                            //======= Début Saisie Ecoulement===================

                                            {
                                                className: 'col-xs-6 col-md-4',
                                                key: 'EtatEcoulement',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Ecoulement',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-12 col-sm-6 col-md-8',
                                                key: 'EtatEcoulementCommentaire',
                                                type: 'textarea',
                                                templateOptions: {
                                                    type: 'text',
                                                    label: 'Commentaire',
                                                    required: false,
                                                    rows: '1'

                                                }
                                            },

                                            //======Fin Saisie Ecoulement ======================
                                            //======= Début Saisie Cuisinière===================

                                            {
                                                className: 'col-xs-6 col-md-4',
                                                key: 'EtatCuisiniere',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Cuisinière',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-12 col-sm-6 col-md-8',
                                                key: 'EtatCuisiniereCommentaire',
                                                type: 'textarea',
                                                templateOptions: {
                                                    type: 'text',
                                                    label: 'Commentaire',
                                                    required: false,
                                                    rows: '1'

                                                }
                                            },

                                            //======Fin Saisie Cuisinière ======================
                                            //======= Début Saisie Four===================

                                            {
                                                className: 'col-xs-6 col-md-4',
                                                key: 'EtatFour',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Four',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-12 col-sm-6 col-md-8',
                                                key: 'EtatFourCommentaire',
                                                type: 'textarea',
                                                templateOptions: {
                                                    type: 'text',
                                                    label: 'Commentaire',
                                                    required: false,
                                                    rows: '1'

                                                }
                                            },

                                            //======Fin Saisie Four ======================
                                            //======= Début Saisie Frigo===================

                                            {
                                                className: 'col-xs-6 col-md-4',
                                                key: 'EtatFrigo',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Frigo',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-12 col-sm-6 col-md-8',
                                                key: 'EtatFrigoCommentaire',
                                                type: 'textarea',
                                                templateOptions: {
                                                    type: 'text',
                                                    label: 'Commentaire',
                                                    required: false,
                                                    rows: '1'

                                                }
                                            },

                                            //======Fin Saisie Frigo ======================
                                            //======= Début Saisie Congelateur===================

                                            {
                                                className: 'col-xs-6 col-md-4',
                                                key: 'EtatCongelateur',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Congélateur',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-12 col-sm-6 col-md-8',
                                                key: 'EtatCongelateurCommentaire',
                                                type: 'textarea',
                                                templateOptions: {
                                                    type: 'text',
                                                    label: 'Commentaire',
                                                    required: false,
                                                    rows: '1'

                                                }
                                            },

                                            //======Fin Saisie Congelateur ======================
                                            //======= Début Saisie Lave-vaisselle===================

                                            {
                                                className: 'col-xs-6 col-md-4',
                                                key: 'EtatLaveVaisseulle',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Lave-Vaisselle',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-12 col-sm-6 col-md-8',
                                                key: 'EtatLaveVaisselleCommentaire',
                                                type: 'textarea',
                                                templateOptions: {
                                                    type: 'text',
                                                    label: 'Commentaire',
                                                    required: false,
                                                    rows: '1'

                                                }
                                            },

                                            //======Fin Saisie Lave-Vaisselle ======================
                                            //======= Début Saisie Hotte===================

                                            {
                                                className: 'col-xs-6 col-md-4',
                                                key: 'EtatHotte',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Hotte',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-12 col-sm-6 col-md-8',
                                                key: 'EtatHotteCommentaire',
                                                type: 'textarea',
                                                templateOptions: {
                                                    type: 'text',
                                                    label: 'Commentaire',
                                                    required: false,
                                                    rows: '1'

                                                }
                                            },

                                            //======Fin Saisie Hotte ======================
                                            //======= Début Saisie Micro-ondes===================

                                            {
                                                className: 'col-xs-6 col-md-4',
                                                key: 'EtatMicroOndes',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Micro-ondes',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-12 col-sm-6 col-md-8',
                                                key: 'EtatMicroOndesCommentaire',
                                                type: 'textarea',
                                                templateOptions: {
                                                    type: 'text',
                                                    label: 'Commentaire',
                                                    required: false,
                                                    rows: '1'

                                                }
                                            },

                                            //======Fin Saisie Micro-ondes ======================
                                            //======= Début Saisie Plaques===================

                                            {
                                                className: 'col-xs-6 col-md-4',
                                                key: 'EtatPlaques',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Plaques',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-12 col-sm-6 col-md-8',
                                                key: 'EtatPlaquesCommentaire',
                                                type: 'textarea',
                                                templateOptions: {
                                                    type: 'text',
                                                    label: 'Commentaire',
                                                    required: false,
                                                    rows: '1'

                                                }
                                            },

                                            //======Fin Saisie Plaques ======================
                                            //======= Début Saisie Balcon===================

                                            {
                                                className: 'col-xs-6 col-md-4',
                                                key: 'EtatBalcon',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Plaques',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-12 col-sm-6 col-md-8',
                                                key: 'EtatBalconCommentaire',
                                                type: 'textarea',
                                                templateOptions: {
                                                    type: 'text',
                                                    label: 'Commentaire',
                                                    required: false,
                                                    rows: '1'

                                                }
                                            },

                                            //======Fin Saisie Plaques ======================

                                            //======= Début Saisie Plaques===================

                                            {
                                                className: 'col-xs-6 col-md-4',
                                                key: 'EtatTenture',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Tenture',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-12 col-sm-6 col-md-8',
                                                key: 'EtatTentureCommentaire',
                                                type: 'textarea',
                                                templateOptions: {
                                                    type: 'text',
                                                    label: 'Commentaire',
                                                    required: false,
                                                    rows: '1'

                                                }
                                            },

                                            //======Fin Saisie Plaques ======================

                                        ]
                                    },

                                ]
                            },
                            //=====================================================================================================================
                            //===========================Fin Saisie Cuisine ==================
                            //=====================================================================================================================

                            //=====================================================================================================================
                            //===================Début Saisi Salle de Bain====================
                            //=====================================================================================================================
                            {
                                //className: 'row',
                                fieldGroup: [
                                    {
                                        hideExpression: '!formState.Bathroom',
                                        fieldGroup: [

                                            //=========Dàbut saisi Faiencese=============

                                            {
                                                className: 'col-xs-6 col-md-4',
                                                key: 'EtatFaiences',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Faïences',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-12 col-sm-6 col-md-8',
                                                key: 'EtatFaiencesCommentaire',
                                                type: 'textarea',
                                                templateOptions: {
                                                    type: 'text',
                                                    label: 'Commentaire',
                                                    required: false,
                                                    rows: '1'

                                                }
                                            },
                                            //======Fin saisi Faiences===================

                                            //======= Début Saisie Tablette===================

                                            {
                                                className: 'col-xs-6 col-md-4',
                                                key: 'EtatTablette',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Tablette',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-12 col-sm-6 col-md-8',
                                                key: 'EtatTabletteCommentaire',
                                                type: 'textarea',
                                                templateOptions: {
                                                    type: 'text',
                                                    label: 'Commentaire',
                                                    required: false,
                                                    rows: '1'

                                                }
                                            },

                                            //======Fin Saisie Tablette ======================
                                            //======= Début Saisie Baignoire===================

                                            {
                                                className: 'col-xs-6 col-md-4',
                                                key: 'EtatBaignoire',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Baignoire',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-12 col-sm-6 col-md-8',
                                                key: 'EtatBaignoireCommentaire',
                                                type: 'textarea',
                                                templateOptions: {
                                                    type: 'text',
                                                    label: 'Commentaire',
                                                    required: false,
                                                    rows: '1'

                                                }
                                            },

                                            //======Fin Saisie Baignoire ======================
                                            //======= Début Saisie Robinetterie Baignoire===================

                                            {
                                                className: 'col-xs-6 col-md-4',
                                                key: 'EtatRobinetterieBaignoire',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Robinetterie baignoire',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-12 col-sm-6 col-md-8',
                                                key: 'EtatRobinetterieBaignoireCommentaire',
                                                type: 'textarea',
                                                templateOptions: {
                                                    type: 'text',
                                                    label: 'Commentaire',
                                                    required: false,
                                                    rows: '1'

                                                }
                                            },

                                            //======Fin Saisie Robinetterie Baignoire ======================
                                            //======= Début Saisie Lavabo===================

                                            {
                                                className: 'col-xs-6 col-md-4',
                                                key: 'EtatLavabo',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Lavabo',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-12 col-sm-6 col-md-8',
                                                key: 'EtatLavaboCommentaire',
                                                type: 'textarea',
                                                templateOptions: {
                                                    type: 'text',
                                                    label: 'Commentaire',
                                                    required: false,
                                                    rows: '1'

                                                }
                                            },

                                            //======Fin Saisie Lavabo ======================
                                            //======= Début Saisie Robinetterie Lavabo===================

                                            {
                                                className: 'col-xs-6 col-md-4',
                                                key: 'EtatRobinetterieLavabo',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Robinetterie lavabo',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-12 col-sm-6 col-md-8',
                                                key: 'EtatRobinetterieLavaboCommentaire',
                                                type: 'textarea',
                                                templateOptions: {
                                                    type: 'text',
                                                    label: 'Commentaire',
                                                    required: false,
                                                    rows: '1'

                                                }
                                            },

                                            //======Fin Saisie Robinetterie Lavabo ======================
                                            //======= Début Saisie Bidet===================

                                            {
                                                className: 'col-xs-6 col-md-4',
                                                key: 'EtatBidet',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Bidet',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-12 col-sm-6 col-md-8',
                                                key: 'EtatBidetCommentaire',
                                                type: 'textarea',
                                                templateOptions: {
                                                    type: 'text',
                                                    label: 'Commentaire',
                                                    required: false,
                                                    rows: '1'

                                                }
                                            },

                                            //======Fin Saisie Lavabo ======================

                                        ]
                                    },

                                ]
                            },
                            //==========================================================================================================
                            //===========================Fin Saisie Cuisine =================
                            //==========================================================================================================
                            //==========================================================================================================
                            //===================Début Saisi Hall====================
                            //==========================================================================================================
                            {
                                //className: 'row',
                                fieldGroup: [
                                    {
                                        hideExpression: '!formState.Hall',
                                        fieldGroup: [

                                            //=========Dàbut saisi Porte Palière=============

                                            {
                                                className: 'col-xs-6 col-md-4',
                                                key: 'EtatPortePaliere',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Porte Palière',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-12 col-sm-6 col-md-8',
                                                key: 'EtatPortePaliereCommentaire',
                                                type: 'textarea',
                                                templateOptions: {
                                                    type: 'text',
                                                    label: 'Commentaire',
                                                    required: false,
                                                    rows: '1'

                                                }
                                            },
                                            //======Fin saisi Portes Palières===================

                                            //======= Début Saisie Sonnette===================

                                            {
                                                className: 'col-xs-6 col-md-4',
                                                key: 'EtatSonnette',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Sonnette',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-12 col-sm-6 col-md-8',
                                                key: 'EtatSonnetteCommentaire',
                                                type: 'textarea',
                                                templateOptions: {
                                                    type: 'text',
                                                    label: 'Commentaire',
                                                    required: false,
                                                    rows: '1'

                                                }
                                            },

                                            //======Fin Saisie Sonnette ======================


                                        ]
                                    },

                                ]
                            },
                            //==============================================================================================================
                            //===========================Fin Saisie Hall ==================
                            //==============================================================================================================


                            //==============================================================================================================
                            //===================Début Saisi WC====================
                            //==============================================================================================================
                            {
                                //className: 'row',
                                fieldGroup: [
                                    {
                                        hideExpression: '!formState.WC',
                                        fieldGroup: [

                                            //=========Dàbut saisi Faiences=============

                                            {
                                                className: 'col-xs-6 col-md-4',
                                                key: 'EtatFaiences',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Faïences',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-12 col-sm-6 col-md-8',
                                                key: 'EtatFaiencesCommentaire',
                                                type: 'textarea',
                                                templateOptions: {
                                                    type: 'text',
                                                    label: 'Commentaire',
                                                    required: false,
                                                    rows: '1'

                                                }
                                            },
                                            //======Fin saisi Faiences===================

                                            //======= Début Saisie Glace===================

                                            {
                                                className: 'col-xs-6 col-md-4',
                                                key: 'EtatGlace',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Glace',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-12 col-sm-6 col-md-8',
                                                key: 'EtatGlaceCommentaire',
                                                type: 'textarea',
                                                templateOptions: {
                                                    type: 'text',
                                                    label: 'Commentaire',
                                                    required: false,
                                                    rows: '1'

                                                }
                                            },

                                            //======Fin Saisie Glace ======================


                                        ]
                                    },

                                ]
                            },
                            //=========================================================================================================
                            //===========================Fin Saisie WC ==================
                            //=========================================================================================================



                            //===========================================================================================================
                            //===================Début Saisi Chambre====================
                            //===========================================================================================================
                            {
                                //className: 'row',
                                fieldGroup: [
                                    {
                                        hideExpression: '!formState.Bedroom',
                                        fieldGroup: [

                                            //=========Dàbut saisi Prise TV=============

                                            {
                                                className: 'col-xs-6 col-md-4',
                                                key: 'EtatPrisesTV',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Prises TV',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-12 col-sm-6 col-md-8',
                                                key: 'EtatPrisesTVCommentaire',
                                                type: 'textarea',
                                                templateOptions: {
                                                    type: 'text',
                                                    label: 'Commentaire',
                                                    required: false,
                                                    rows: '1'

                                                }
                                            },
                                            //======Fin saisi Prises TV===================

                                            //======= Début Saisie Balcon===================

                                            {
                                                className: 'col-xs-6 col-md-4',
                                                key: 'EtatBalcon',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Balcon',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-12 col-sm-6 col-md-8',
                                                key: 'EtatBalconCommentaire',
                                                type: 'textarea',
                                                templateOptions: {
                                                    type: 'text',
                                                    label: 'Commentaire',
                                                    required: false,
                                                    rows: '1'

                                                }
                                            },

                                            //======Fin Saisie Balcon ======================


                                        ]
                                    },

                                ]
                            },
                            //=================================================================================================================
                            //===========================Fin Saisie Chambre ==================
                            //================================================================================================================


                            //================================================================================================================
                            //===================Début Saisi Salon====================
                            //================================================================================================================
                            {
                                //className: 'row',
                                fieldGroup: [
                                    {
                                        hideExpression: '!formState.Livingroom',
                                        fieldGroup: [

                                            //=========Dàbut saisi Prise TV=============

                                            {
                                                className: 'col-xs-6 col-md-4',
                                                key: 'EtatPrisesTV',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Prises TV',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-12 col-sm-6 col-md-8',
                                                key: 'EtatPrisesTVCommentaire',
                                                type: 'textarea',
                                                templateOptions: {
                                                    type: 'text',
                                                    label: 'Commentaire',
                                                    required: false,
                                                    rows: '1'

                                                }
                                            },
                                            //======Fin saisi Prises TV===================

                                            //======= Début Saisie Balcon===================

                                            {
                                                className: 'col-xs-6 col-md-4',
                                                key: 'EtatBalcon',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Balcon',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-12 col-sm-6 col-md-8',
                                                key: 'EtatBalconCommentaire',
                                                type: 'textarea',
                                                templateOptions: {
                                                    type: 'text',
                                                    label: 'Commentaire',
                                                    required: false,
                                                    rows: '1'

                                                }
                                            },

                                            //======Fin Saisie Balcon ======================


                                        ]
                                    },

                                ]
                            },
                            //=========================================================================================================
                            //===========================Fin Saisie Salon ==================
                            //========================================================================================================
                            //========================================================================================================
                            //===================Début Saisi Salle à manger====================
                            //========================================================================================================
                            {
                                //className: 'row',
                                fieldGroup: [
                                    {
                                        hideExpression: '!formState.Diningroom',
                                        fieldGroup: [

                                            //=========Dàbut saisi Prise TV=============

                                            {
                                                className: 'col-xs-6 col-md-4',
                                                key: 'EtatPrisesTV',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Prises TV',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-12 col-sm-6 col-md-8',
                                                key: 'EtatPrisesTVCommentaire',
                                                type: 'textarea',
                                                templateOptions: {
                                                    type: 'text',
                                                    label: 'Commentaire',
                                                    required: false,
                                                    rows: '1'

                                                }
                                            },
                                            //======Fin saisi Prises TV===================

                                            //======= Début Saisie Balcon===================

                                            {
                                                className: 'col-xs-6 col-md-4',
                                                key: 'EtatBalcon',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Balcon',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-12 col-sm-6 col-md-8',
                                                key: 'EtatBalconCommentaire',
                                                type: 'textarea',
                                                templateOptions: {
                                                    type: 'text',
                                                    label: 'Commentaire',
                                                    required: false,
                                                    rows: '1'

                                                }
                                            },

                                            //======Fin Saisie Balcon ======================


                                        ]
                                    },

                                ]
                            },
                            //================================================================
                            //===========================Fin Saisie Salle à manger ==================
                            //================================================================

                        ]
                    }

                },

            ];

        }


    })()