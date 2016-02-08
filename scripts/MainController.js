    // scripts/MainController.js

    (function () {

        'use strict';

        angular
            .module('formlyApp')
            .controller('MainController', MainController);

        function MainController(inventoryType, floorNumber, numberOfRoom, roomTypes, stateOfStuff, kindWalls, kindRoof,kindStore,kindGround) {

            var vm = this;

            var jsonFile;

            vm.onSubmit = export2Json;

            function export2Json() {
                jsonFile = JSON.stringify(vm.inventory), null, "\t";
                //alert(jsonFile);



                saveJsonToFile();
                createPDF();

            }

            function saveJsonToFile(){

                var dataStr = "data:/text/json;charset=utf-8"+
                    encodeURIComponent(jsonFile);

                var dlAnchorElem = document.getElementById('downloadAnchorElem');
                dlAnchorElem.setAttribute("href", dataStr);
                dlAnchorElem.setAttribute("download","scene.json");
                dlAnchorElem.click();

                var myWindow = window.open("","MsgWindow");
                myWindow.document.write("<p>"+jsonFile+"</p>");


            }

            function createPDF(){
                var doc = new jsPDF();
                var dateofDay = new Date();
                var nameoffile;
                var DateLocIn;
                var txtDateLocIn;

                doc.setFontSize(8);
                doc.setFont("helvetica");

                //nameoffile =dateofDay.getDate();

                //DateLocIn = String(vm.inventory.entryDateNewOccupant);
                //txtDateLocIn = DateLocIn.slice(7,DateLocIn.length);
                //alert(txtDateLocIn);


                //alert(DateLocIn);

                doc.setFontSize(22);
                doc.text(80,30,"Etat des Lieux");
                doc.setFontSize(8);
                doc.setFontType("bold");
                doc.text(20,40, 'Mail du Collaborateur :');
                doc.setFontType("normal");
                doc.text(55,40, vm.inventory.Email_rr);
                doc.setFontType("bold");
                doc.text(110,40,"Numéro d'immeuble :");
                doc.setFontType("normal");
                doc.text(145,40,vm.inventory.No_Immeuble);
                doc.setFontType("bold");
                doc.text(20,45,"Numéro d'objet:");
                doc.setFontType("normal");
                doc.text(55,45,vm.inventory.No_objet);
                doc.setFontType("bold");
                doc.text(110,45,"Numéro de séquence:");
                doc.setFontType("normal");
                doc.text(145,45,vm.inventory.No_Sequence);
                doc.setFontType("bold");
                doc.text(20,50,"Groupe :");
                doc.setFontType("normal");
                doc.text(55,50,vm.inventory.Groupe);
                doc.setFontType("bold");
                doc.text(110,50,"Initiales Ass. Tech:");
                doc.setFontType("normal");
                doc.text(145,50,vm.inventory.Init_Ass_Tech);
                doc.setFontType("bold");
                doc.text(20,55,"Type Etat des Lieux :");
                doc.setFontType("normal");
                doc.text(55,55,vm.inventory.inventoryType);
                doc.setFontType("bold");
                doc.text(110,55,"Adresse de l'immeuble :");
                doc.setFontType("normal");
                doc.text(145,55,vm.inventory.Adresse_Immeuble);

                doc.setFontType("bold");
                doc.text(20,60,"Numéro Postale:");
                doc.setFontType("normal");
                doc.text(55,60,vm.inventory.postNumber_Immeuble);
                doc.setFontType("bold");
                doc.text(110,60,"Etage :");
                doc.setFontType("normal");
                doc.text(145,60,vm.inventory.floorNumber);

                doc.setFontType("bold");
                doc.text(20,65,"Nombre de Pièces :");
                doc.setFontType("normal");
                doc.text(55,65,vm.inventory.numberOfRoom);
                doc.setFontType("bold");
                doc.text(110,65,"Nom Locataire Entrant :");
                doc.setFontType("normal");
                doc.text(145,65,vm.inventory.nameNewOccupant);

                doc.setFontType("bold");
                doc.text(20,70,"Prenom Locataire Entrant :");
                doc.setFontType("normal");
                doc.text(55,70,vm.inventory.firstnameNewOccupant);
                doc.setFontType("bold");
                doc.text(110,70,"Email Locataire Entrant");
                doc.setFontType("normal");
                doc.text(145,70,vm.inventory.Email_newOccupant);

                /*doc.setFontType("bold");
                doc.text(20,110,"Téléphone Locataire Entrant");
                doc.setFontType("normal");
                doc.text(55,110,vm.inventory.telephoneNewOccupant);*/


                /*doc.setFontType("bold");
                doc.text(110,110,"Date Entree Nouveau Locataire");
                doc.setFontType("normal");
                doc.text(145,110,DateLocIn);*/


                //var SigImg = document.getElementById("sig-image");
                //08doc.addImage(SigImg, 'png', 20, 20, 100, 40)

                doc.output('datauri');

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
                                        className: 'col-xs-3 col-md-3',
                                        key: 'EtatPlafond',
                                        type: 'select',
                                        templateOptions: {
                                            label: 'Plafond',
                                            options: stateOfStuff.getStateOfStuff(),
                                            hide: '!(model.TypeofRoom === )'
                                        }
                                    },
                                    {
                                        className: 'col-xs-3 col-md-3',
                                        key: 'TypePlafond',
                                        type: 'select',
                                        templateOptions: {
                                            label: 'Revêtement Plafond',
                                            options: kindRoof.getkindRoof(),
                                            hide: '!(model.TypeofRoom === )'
                                        }
                                    },
                                    {
                                        className: 'col-xs-10 col-sm-6 col-md-6',
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
                                        className: 'col-xs-3 col-md-3',
                                        key: 'EtatMurs',
                                        type: 'select',
                                        templateOptions: {
                                            label: 'Murs',
                                            options: stateOfStuff.getStateOfStuff(),
                                            hide: '!(model.TypeofRoom === )'
                                        }
                                    },
                                    {
                                        className: 'col-xs-3 col-md-3',
                                        key: 'TypeMurs',
                                        type: 'select',
                                        templateOptions: {
                                            label: 'Revêtement Murs',
                                            options: kindWalls.getkindWalls(),
                                            hide: '!(model.TypeofRoom === )'
                                        }
                                    },

                                    {
                                        className: 'col-xs-10 col-sm-6 col-md-6',
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
                                        className: 'col-xs-3 col-md-3',
                                        key: 'EtatSol',
                                        type: 'select',
                                        templateOptions: {
                                            label: 'Sol',
                                            options: stateOfStuff.getStateOfStuff(),
                                            hide: '!(model.TypeofRoom === )'
                                        }
                                    },
                                    {
                                        className: 'col-xs-3 col-md-3',
                                        key: 'TypeSol',
                                        type: 'select',
                                        templateOptions: {
                                            label: 'Type de Sol',
                                            options: kindGround.getkindGround(),
                                            hide: '!(model.TypeofRoom === )'
                                        }
                                    },
                                    {
                                        className: 'col-xs-10 col-sm-6 col-md-6',
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
                                        className: 'col-xs-3 col-md-3',
                                        key: 'EtatStores',
                                        type: 'select',
                                        templateOptions: {
                                            label: 'Stores',
                                            options: stateOfStuff.getStateOfStuff(),
                                            hide: '!(model.TypeofRoom === )'
                                        }
                                    },
                                    {
                                        className: 'col-xs-3 col-md-3',
                                        key: 'TypeStore',
                                        type: 'select',
                                        templateOptions: {
                                            label: 'Type de Store',
                                            options: kindStore.getkindStore(),
                                            hide: '!(model.TypeofRoom === )'
                                        }
                                    },
                                    {
                                        className: 'col-xs-10 col-sm-6 col-md-6',
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

                                            //======Fin Saisie Bidet ======================
                                            //======= Début Saisie Robinetterie Bidet===================

                                            {
                                                className: 'col-xs-6 col-md-4',
                                                key: 'EtatRobinetterieBidet',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Robinetterie Bidet',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-12 col-sm-6 col-md-8',
                                                key: 'EtatRobinetterieBidetCommentaire',
                                                type: 'textarea',
                                                templateOptions: {
                                                    type: 'text',
                                                    label: 'Commentaire',
                                                    required: false,
                                                    rows: '1'

                                                }
                                            },

                                            //======Fin Saisie Robinetterie Bidet ======================
                                            //======= Début Saisie Cuvette WC==================

                                            {
                                                className: 'col-xs-6 col-md-4',
                                                key: 'EtatCuvetteWC',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Cuvette WC',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-12 col-sm-6 col-md-8',
                                                key: 'EtatCuvetteWCCommentaire',
                                                type: 'textarea',
                                                templateOptions: {
                                                    type: 'text',
                                                    label: 'Commentaire',
                                                    required: false,
                                                    rows: '1'

                                                }
                                            },

                                            //======Fin Saisie Cuvette WC ======================

                                            //======= Début Saisie Siege===================

                                            {
                                                className: 'col-xs-6 col-md-4',
                                                key: 'EtatSiege',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Siège',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-12 col-sm-6 col-md-8',
                                                key: 'EtatSiegeCommentaire',
                                                type: 'textarea',
                                                templateOptions: {
                                                    type: 'text',
                                                    label: 'Commentaire',
                                                    required: false,
                                                    rows: '1'

                                                }
                                            },

                                            //======Fin Saisie Siege ======================

                                            //======= Début Saisie Réservoir d'eau===================

                                            {
                                                className: 'col-xs-6 col-md-4',
                                                key: 'EtatReservoirEau',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Réservoir d\'eau',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-12 col-sm-6 col-md-8',
                                                key: 'EtatReservoirEauCommentaire',
                                                type: 'textarea',
                                                templateOptions: {
                                                    type: 'text',
                                                    label: 'Commentaire',
                                                    required: false,
                                                    rows: '1'

                                                }
                                            },

                                            //======Fin Saisie Réservoir d'eau ======================

                                            //======= Début Saisie Porte Papier===================

                                            {
                                                className: 'col-xs-6 col-md-4',
                                                key: 'EtatPortePapier',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Porte papier',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-12 col-sm-6 col-md-8',
                                                key: 'EtatPortePapierCommentaire',
                                                type: 'textarea',
                                                templateOptions: {
                                                    type: 'text',
                                                    label: 'Commentaire',
                                                    required: false,
                                                    rows: '1'

                                                }
                                            },

                                            //======Fin Saisie Porte Papier ======================

                                            //======= Début Saisie Pharmacie===================

                                            {
                                                className: 'col-xs-6 col-md-4',
                                                key: 'EtatPharmacie',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Pharmacie',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-12 col-sm-6 col-md-8',
                                                key: 'EtatPharmacieCommentaire',
                                                type: 'textarea',
                                                templateOptions: {
                                                    type: 'text',
                                                    label: 'Commentaire',
                                                    required: false,
                                                    rows: '1'

                                                }
                                            },

                                            //======Fin Saisie Pharmacie ======================

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

                                            //======= Début Saisie Porte Verres===================

                                            {
                                                className: 'col-xs-6 col-md-4',
                                                key: 'EtatPorteVerres',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Porte Verres',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-12 col-sm-6 col-md-8',
                                                key: 'EtatPorteVerresCommentaire',
                                                type: 'textarea',
                                                templateOptions: {
                                                    type: 'text',
                                                    label: 'Commentaire',
                                                    required: false,
                                                    rows: '1'

                                                }
                                            },

                                            //======Fin Saisie Portes Verres ======================

                                            //======= Début Saisie Porte Savon===================

                                            {
                                                className: 'col-xs-6 col-md-4',
                                                key: 'EtatPorteSavon',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Porte Savon',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-12 col-sm-6 col-md-8',
                                                key: 'EtatPorteSavonCommentaire',
                                                type: 'textarea',
                                                templateOptions: {
                                                    type: 'text',
                                                    label: 'Commentaire',
                                                    required: false,
                                                    rows: '1'

                                                }
                                            },

                                            //======Fin Saisie Porte Savon ======================

                                            //======= Début Saisie Eclairage===================

                                            {
                                                className: 'col-xs-6 col-md-4',
                                                key: 'EtatEclairage',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Eclairage',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-12 col-sm-6 col-md-8',
                                                key: 'EclairageCommentaire',
                                                type: 'textarea',
                                                templateOptions: {
                                                    type: 'text',
                                                    label: 'Commentaire',
                                                    required: false,
                                                    rows: '1'

                                                }
                                            },

                                            //======Fin Saisie Eclairage ======================

                                            //======= Début Saisie Porte Linge===================

                                            {
                                                className: 'col-xs-6 col-md-4',
                                                key: 'EtatPorteLinge',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Porte-linge',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-12 col-sm-6 col-md-8',
                                                key: 'EtatPorteLingeCommentaire',
                                                type: 'textarea',
                                                templateOptions: {
                                                    type: 'text',
                                                    label: 'Commentaire',
                                                    required: false,
                                                    rows: '1'

                                                }
                                            },

                                            //======Fin Saisie Porte Linge ======================

                                            //======= Début Saisie Bouchon===================

                                            {
                                                className: 'col-xs-6 col-md-4',
                                                key: 'EtatBouchon',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Bouchon',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-12 col-sm-6 col-md-8',
                                                key: 'EtatBouchonCommentaire',
                                                type: 'textarea',
                                                templateOptions: {
                                                    type: 'text',
                                                    label: 'Commentaire',
                                                    required: false,
                                                    rows: '1'

                                                }
                                            },

                                            //======Fin Saisie Bouchon======================





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

                                            //==================Fin saisie Lavabo=======================

                                            //======= Début Saisie Robinnetterie Lavabo===================

                                            {
                                                className: 'col-xs-6 col-md-4',
                                                key: 'EtatRobinetterieLavabo',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Robinetterie Lavabo',
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

                                            //==================Fin saisie RobinetterieLavabo=======================

                                            //======= Début Saisie Cuvette WC===================

                                            {
                                                className: 'col-xs-6 col-md-4',
                                                key: 'EtatCuvetteWC',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Cuvette WC',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-12 col-sm-6 col-md-8',
                                                key: 'EtatCuvetteWCCommentaire',
                                                type: 'textarea',
                                                templateOptions: {
                                                    type: 'text',
                                                    label: 'Commentaire',
                                                    required: false,
                                                    rows: '1'

                                                }
                                            },

                                            //==================Fin saisie Cuvette WC=======================

                                            //======= Début Saisie Siège===================

                                            {
                                                className: 'col-xs-6 col-md-4',
                                                key: 'EtatSiege',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Siège',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-12 col-sm-6 col-md-8',
                                                key: 'EtatSiegeCommentaire',
                                                type: 'textarea',
                                                templateOptions: {
                                                    type: 'text',
                                                    label: 'Commentaire',
                                                    required: false,
                                                    rows: '1'

                                                }
                                            },

                                            //==================Fin saisie Siège=======================

                                            //======= Début Saisie Reservoir d'eau===================

                                            {
                                                className: 'col-xs-6 col-md-4',
                                                key: 'EtatReservoirEau',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Réservoir d\'eau',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-12 col-sm-6 col-md-8',
                                                key: 'EtatReservoirEauCommentaire',
                                                type: 'textarea',
                                                templateOptions: {
                                                    type: 'text',
                                                    label: 'Commentaire',
                                                    required: false,
                                                    rows: '1'

                                                }
                                            },

                                            //==================Fin saisie Réservoir d'eau=======================

                                            //======= Début Saisie Porte Papier===================

                                            {
                                                className: 'col-xs-6 col-md-4',
                                                key: 'EtatPortePapier',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Porte Papier',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-12 col-sm-6 col-md-8',
                                                key: 'EtatPortePapierCommentaire',
                                                type: 'textarea',
                                                templateOptions: {
                                                    type: 'text',
                                                    label: 'Commentaire',
                                                    required: false,
                                                    rows: '1'

                                                }
                                            },

                                            //==================Fin saisie Porte Papier=======================

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

                                            //==================Fin saisie Ecoulement=======================

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

                                            //==================Fin saisie Tablette=======================

                                            //======= Début Saisie Porte-Savon===================

                                            {
                                                className: 'col-xs-6 col-md-4',
                                                key: 'EtatPorteSavon',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'PorteSavon',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-12 col-sm-6 col-md-8',
                                                key: 'EtatPorteSavonCommentaire',
                                                type: 'textarea',
                                                templateOptions: {
                                                    type: 'text',
                                                    label: 'Commentaire',
                                                    required: false,
                                                    rows: '1'

                                                }
                                            },

                                            //==================Fin saisie Porte-Savon=======================

                                            //======= Début Saisie INterrupteurs===================

                                            {
                                                className: 'col-xs-6 col-md-4',
                                                key: 'EtatInterrupteurs',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Interrupteurs',
                                                    options: stateOfStuff.getStateOfStuff()

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

                                            //==================Fin saisie Interrupteurs=======================

                                            //======= Début Saisie Eclairage===================

                                            {
                                                className: 'col-xs-6 col-md-4',
                                                key: 'EtatEclairage',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Eclairage',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-12 col-sm-6 col-md-8',
                                                key: 'EtatEclairageCommentaire',
                                                type: 'textarea',
                                                templateOptions: {
                                                    type: 'text',
                                                    label: 'Commentaire',
                                                    required: false,
                                                    rows: '1'

                                                }
                                            },

                                            //==================Fin saisie Eclairage=======================

                                            //======= Début Saisie Bac===================

                                            {
                                                className: 'col-xs-6 col-md-4',
                                                key: 'EtatBac',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Bac',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-12 col-sm-6 col-md-8',
                                                key: 'EtatBacCommentaire',
                                                type: 'textarea',
                                                templateOptions: {
                                                    type: 'text',
                                                    label: 'Commentaire',
                                                    required: false,
                                                    rows: '1'

                                                }
                                            },

                                            //==================Fin saisie Bac=======================

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

                                            {
                                                className: '',
                                                key: 'NomChambre',
                                                type: 'textarea',
                                                templateOptions: {
                                                    type: 'text',
                                                    label: 'Nom de la Pièce',
                                                    required: false,
                                                    rows: '1'

                                                }
                                            },

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
                                            //======= Début Saisie Tenture===================

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

                                            //======Fin Saisie Tenture ======================


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
                                            //======= Début Saisie Tenture===================

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

                                            //======Fin Saisie Tenture ======================

                                            //======= Début Saisie Cheminée===================

                                            {
                                                className: 'col-xs-6 col-md-4',
                                                key: 'EtatCheminee',
                                                type: 'select',
                                                templateOptions: {
                                                    label: 'Cheminée',
                                                    options: stateOfStuff.getStateOfStuff()

                                                }
                                            },

                                            {
                                                className: 'col-xs-12 col-sm-6 col-md-8',
                                                key: 'EtatChemineeCommentaire',
                                                type: 'textarea',
                                                templateOptions: {
                                                    type: 'text',
                                                    label: 'Commentaire',
                                                    required: false,
                                                    rows: '1'

                                                }
                                            },

                                            //======Fin Saisie Cheminée ======================



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

                                            //======= Début Saisie Tenture===================

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

                                            //======Fin Saisie Tenture ======================



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