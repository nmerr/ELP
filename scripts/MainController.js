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
                                    {
                                        className: 'col-xs-4',
                                        key: 'EtatMurs',
                                        type: 'select',
                                        templateOptions: {
                                            label: 'Murs',
                                            options: stateOfStuff.getStateOfStuff()

                                        }
                                    },

                                    {
                                        className: 'col-xs-4',
                                        key: 'EtatSol',
                                        type: 'select',
                                        templateOptions: {
                                            label: 'Sol',
                                            options: stateOfStuff.getStateOfStuff()

                                        }
                                    },

                                    {
                                        className: 'col-xs-4',
                                        key: 'EtatParquet',
                                        type: 'select',
                                        templateOptions: {
                                            label: 'Parquet',
                                            options: stateOfStuff.getStateOfStuff()

                                        }
                                    },

                                    {
                                        className: 'col-xs-4',
                                        key: 'Porte',
                                        type: 'select',
                                        templateOptions: {
                                            label: 'Porte',
                                            options: stateOfStuff.getStateOfStuff()

                                        }
                                    },

                                    {
                                        className: 'col-xs-4',
                                        key: 'EtatPrises',
                                        type: 'select',
                                        templateOptions: {
                                            label: 'Prises',
                                            options: stateOfStuff.getStateOfStuff()

                                        }
                                    },

                                    {
                                        className: 'col-xs-4',
                                        key: 'EtatInterrupteurs',
                                        type: 'select',
                                        templateOptions: {
                                            label: 'Interrupteurs',
                                            options: stateOfStuff.getStateOfStuff()

                                        }
                                    },

                                    {
                                        className: 'col-xs-4',
                                        key: 'EtatEclairage',
                                        type: 'select',
                                        templateOptions: {
                                            label: 'Eclairage',
                                            options: stateOfStuff.getStateOfStuff()

                                        }
                                    },

                                    {
                                        className: 'col-xs-4',
                                        key: 'EtatArmoires',
                                        type: 'select',
                                        templateOptions: {
                                            label: 'Armoires',
                                            options: stateOfStuff.getStateOfStuff()

                                        }
                                    },

                                    {
                                        className: 'col-xs-4',
                                        key: 'EtatFenetre',
                                        type: 'select',
                                        templateOptions: {
                                            label: 'Fenetre',
                                            options: stateOfStuff.getStateOfStuff()

                                        }
                                    },

                                    {
                                        className: 'col-xs-4',
                                        key: 'Radiateurs',
                                        type: 'select',
                                        templateOptions: {
                                            label: 'Radiateurs',
                                            options: stateOfStuff.getStateOfStuff()

                                        }
                                    },

                                    {
                                        key: 'Commentaire',
                                        type: 'input',
                                        templateOptions: {
                                            type: 'text',
                                            label: 'Commentaire',
                                            placeholder: 'Commentaire',
                                            required: false

                                        }
                                    }

                                ]
                            },
                            //{
                            //    "type": "radio",
                            //    "key": "type",
                            //    "templateOptions": {
                            //        "options": [
                            //            {
                            //                "name": "Text Field",
                            //                "value": "input"
                            //            },
                            //            {
                            //                "name": "TextArea Field",
                            //                "value": "textarea"
                            //            },
                            //            {
                            //                "name": "Radio Buttons",
                            //                "value": "radio"
                            //            },
                            //            {
                            //                "name": "Checkbox",
                            //                "value": "checkbox"
                            //            }
                            //        ],
                            //        "label": "Field Type",
                            //        "required": true
                            //    }
                            //},
                            //{
                            //    type: 'input',
                            //    key: 'investmentValue',
                            //    templateOptions: {
                            //        label: 'Value:'
                            //    },
                            //    expressionProperties: {
                            //        'templateOptions.disabled': '!model.stockIdentifier'
                            //    }
                            //},
                            {
                                className: 'col-xs-4',
                                type: 'checkbox',
                                model: 'formState',
                                key: 'Kitchen',
                                templateOptions: {
                                    label: 'Electroménager ?'
                                }
                            },
                            {
                                className: 'row',
                                fieldGroup: [
                                    {
                                        hideExpression: '!formState.Kitchen',
                                        fieldGroup: [
                                            {
                                                className: 'col-xs-4',
                                                key: 'Ventillation',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Ventillation',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-4',
                                                key: 'Faiences',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Faiences',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-4',
                                                key: 'Ecoulement',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Ecoulement',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            }
                                        ]
                                    },

                                    {
                                        className: 'row',
                                        hideExpression: '!formState.Kitchen',
                                        fieldGroup: [

                                            {
                                                className: 'col-xs-4',
                                                key: 'Robinetterie',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Robinetterie',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-4',
                                                key: 'Bouchon',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Bouchon',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-4',
                                                key: 'Four',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Four',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            }
                                        ]
                                    },

                                    {
                                        className: 'row',
                                        hideExpression: '!formState.Kitchen',
                                        fieldGroup: [

                                            {
                                                className: 'col-xs-4',
                                                key: 'Plaques',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Plaques',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-4',
                                                key: 'Evier',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Evier',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-4',
                                                key: 'Poubelle',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Poubelle',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            }
                                        ]
                                    },

                                    {
                                        className: 'row',
                                        hideExpression: '!formState.Kitchen',
                                        fieldGroup: [

                                            {
                                                className: 'col-xs-4',
                                                key: 'LaveVaisselle',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Lave Vaisselle',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-4',
                                                key: 'MicroOndes',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Micro Ondes',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-4',
                                                key: 'Frigos',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Frigos',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            }
                                        ]
                                    },

                                    {
                                        className: 'row',
                                        hideExpression: '!formState.Kitchen',
                                        fieldGroup: [

                                            {
                                                className: 'col-xs-4',
                                                key: 'Hotte',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Hotte',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-4',
                                                key: 'Congelateur',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Congelateur',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            }
                                        ]
                                    },

                                    {
                                        key: 'Commentaire',
                                        hideExpression: '!formState.Kitchen',
                                        type: 'input',
                                        templateOptions: {
                                            type: 'text',
                                            label: 'Commentaire',
                                            placeholder: 'Commentaire',
                                            rows: '5',
                                            required: false

                                        }
                                    },
                                ]
                            },
                            {
                                className: 'col-xs-4',
                                type: 'checkbox',
                                model: 'formState',
                                key: 'Bathroom',
                                templateOptions: {
                                    label: 'Accessoires ?'
                                }
                            },
                            {
                                className: 'row',
                                hideExpression: '!formState.Bathroom',
                                fieldGroup: [
                                    //{
                                    //    type: 'input',
                                    //    key: 'relationshipName',
                                    //    templateOptions: {
                                    //        label: 'Name:'
                                    //    }
                                    //},
                                    {
                                        className: 'col-xs-4',
                                        type: 'select',
                                        key: 'AccessoriesInventory',
                                        templateOptions: {
                                            label: 'Accessoires:',
                                            options: [
                                                {
                                                    name: 'Stores électriques',
                                                    value: 'storeElec'
                                                },
                                                {
                                                    name: 'Chauffage électrique',
                                                    value: 'chauffageElec'
                                                }]
                                        }
                                    },
                                    {
                                        className: 'col-xs-4',
                                        type: 'textarea',
                                        key: 'AccessoriesComment',
                                        templateOptions: {
                                            label: 'Notes additionnelles ',
                                            rows: 4
                                        }
                                    }
                                ]
                            }
                        ]
                    }

                },

            ];

        }


    })()