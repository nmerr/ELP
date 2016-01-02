// app.js

(function() {

    'use strict';

    var app = angular.module('formlyApp', ['formly', 'formlyBootstrap', 'ui.bootstrap'], function config(formlyConfigProvider) {
        var unique = 1;
        formlyConfigProvider.setType({
            name: 'repeatRoomTypes',
            templateUrl: 'repeatRoomTypes.html',
            controller: function($scope) {
                $scope.formOptions = {formState: $scope.formState};
                $scope.addNew = addNew;

                $scope.copyFields = copyFields;


                function copyFields(fields) {
                    fields = angular.copy(fields);
                    addRandomIds(fields);
                    return fields;
                }

                function addNew() {
                    $scope.model[$scope.options.key] = $scope.model[$scope.options.key] || [];
                    var repeatRoomTypes = $scope.model[$scope.options.key];
                    var lastSection = repeatRoomTypes[repeatRoomTypes.length - 1];
                    var newsection = {};
                    if (lastSection) {
                        newsection = angular.copy(lastSection);
                    }
                    repeatRoomTypes.push(newsection);
                }

                function addRandomIds(fields) {
                    unique++;
                    angular.forEach(fields, function(field, index) {
                        if (field.fieldGroup) {
                            addRandomIds(field.fieldGroup);
                            return; // fieldGroups don't need an ID
                        }

                        if (field.templateOptions && field.templateOptions.fields) {
                            addRandomIds(field.templateOptions.fields);
                        }

                        field.id = field.id || (field.key + '_' + index + '_' + unique + getRandomInt(0, 9999));
                    });
                }

                function getRandomInt(min, max) {
                    return Math.floor(Math.random() * (max - min)) + min;
                }
            }
        });
    });


    app.run(function(formlyConfig) {
        var attributes = [
            'date-disabled',
            'custom-class',
            'show-weeks',
            'starting-day',
            'init-date',
            'min-mode',
            'max-mode',
            'format-day',
            'format-month',
            'format-year',
            'format-day-header',
            'format-day-title',
            'format-month-title',
            'year-range',
            'shortcut-propagation',
            'datepicker-popup',
            'show-button-bar',
            'current-text',
            'clear-text',
            'close-text',
            'close-on-date-selection',
            'datepicker-append-to-body'
        ];

        var bindings = [
            'datepicker-mode',
            'min-date',
            'max-date'
        ];

        var ngModelAttrs = {};

        angular.forEach(attributes, function(attr) {
            ngModelAttrs[camelize(attr)] = {attribute: attr};
        });

        angular.forEach(bindings, function(binding) {
            ngModelAttrs[camelize(binding)] = {bound: binding};
        });





        formlyConfig.setType({
            name: 'datepicker',
            template: '<input class="form-control" ng-model="model[options.key]" is-open="to.isOpen" ng-click="open($event)"  datepicker-options="to.datepickerOptions" />',

            wrapper: ['bootstrapLabel', 'bootstrapHasError'],

            controller: ['$scope', function($scope) {
                $scope.open = function($event) {
                    $event.preventDefault();
                    $event.stopPropagation();
                    console.log('controller does a good job!');
                    $scope.opened = true;
                };

            }],

            defaultOptions: {
                ngModelAttrs: ngModelAttrs,
                templateOptions: {

                    addonLeft: {
                        class: 'glyphicon glyphicon-calendar',
                        onClick: function(options, scope) {
                            options.templateOptions.isOpen = !options.templateOptions.isOpen;
                            //console.warn('id is wrong : ' + scope.id);
                            //console.info('isOpen = ' + scope.to.isOpen);
                        }
                    },
                    onFocus: function($viewValue, $modelValue, scope) {
                        scope.to.isOpen = !scope.to.isOpen;
                        //console.dir('formId works : ' + scope.formId);
                        //console.warn('id is wrong : ' + scope.id);
                        //console.info('trying index : ' + scope.index);
                        //console.info('isOpen = ' + scope.to.isOpen);
                    },
                    datepickerOptions: {}
                }
            }
        });

        formlyConfig.setType({
            name:'inputHTML',
            templateUrl: 'input.html'
        });

        function camelize(string) {
            string = string.replace(/[\-_\s]+(.)?/g, function(match, chr) {
                return chr ? chr.toUpperCase() : '';
            });
            // Ensure 1st char is always lowercase
            return string.replace(/^([A-Z])/, function(match, chr) {
                return chr ? chr.toLowerCase() : '';
            });
        }
    });



    app.controller('MainCtrl', function MainCtrl(formlyVersion) {
        var vm = this;
        // function assignment
        vm.onSubmit = onSubmit;

        // variable assignment
        vm.author = {
            name: 'Samuel Mellot',
            url: 'https://twitter.com/zencorp'
        };
        vm.exampleTitle = 'UI Bootstrap Datepicker'; // add this
        vm.env = {
            angularVersion: angular.version.full,
            formlyVersion: formlyVersion
        };

        vm.model = {

        };
        vm.options = {};

       // init();

        vm.originalFields = angular.copy(vm.fields);

        // function definition
        function onSubmit() {
            vm.options.updateInitialValue();
            alert("weiufbewiuvberw");
            //   alert(JSON.stringify(vm.model), null, 2);

        }

        vm.fields = [
            {
                key: 'date_entry',
                type: 'datepicker',
                templateOptions: {
                    label: 'Date',
                    type: 'text',
                    datepickerPopup: 'dd-MMMM-yyyy'
                }


            },


        ];

    });

})();