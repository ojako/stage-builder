'use strict';

/**
* @ngdoc function
* @name app.controller:ChallengeBuilderCtrl
* @description
* # ChallengeBuilderCtrl
* Controller of the stageBuilderApp
*/
angular.module('app')
.controller('ChallengeCtrl', function ($scope) {
    $scope.sectionTitle = 'Create Challenge';
    // var vm = this;
    // vm = {
    //
    // };

    this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];
})

.component('stageBuilder', {
    templateUrl: 'stage-builder.html',
    bindings: {},
    controller: function() {
        var ctrl = this;
        // bootstrap some current stages
        ctrl.currentStages = [{
            'name': 'OP',
            'type': 'Open'
        }, {
            'name': 'Capture',
            'type': 'Capture'
        }, {
            'name': 'Review',
            'type': 'Review'
        }, ];

        ctrl.addStage = function(type) {
            if(type) {
                ctrl.currentStages.push({
                    'name': type,
                    'type': type
                });
            } else {
                ctrl.currentStages.push({
                    'name': '',
                    'type': '',
                });
            }
        };

        ctrl.stageTypes = [
            'Open',
            'Review',
            'Discussion',
            'Open',
            'Development',
            'Capture',
        ];

        ctrl.deleteStage = function(stage) {
            var index = ctrl.currentStages.indexOf(stage);
            ctrl.currentStages.splice(index, 1);
        };

        ctrl.selectedStage = function(stage) {
            ctrl.inspectorTabActive = 3;
            ctrl.selected = stage;
        };

        // var el = document.getElementById('stageList');
        // var sortable = new Sortable(el, {
        //     animation: 250,
        //     scroll: true,
        //     delay: 10,
        //     // handle: '.sortable-drag-handle',
        //     // draggable: 'sortable-item',
        //     chosenClass: 'sortable-chosen',
        //     ghostClass: 'sortable-ghost',
        //     // Not working?
        //     filter: 'sortable-ignored',
        // });
    }
})
.component('stageBuilderMenu', {
    templateUrl: 'stage-builder-menu.html',
    bindings: {
        onAddStage: '&',
        stageTypes: '<',
    },
})
.component('stageDetail', {
    templateUrl: 'stage-detail.html',
    bindings: {
        stage: '<',
        last: '<',
        onAddStage: '&',
        onDelete: '&',
        stageTypes: '<',
        selectedStage: '<',
        selectStage: '&',
    },
    controller: function() {
        var ctrl = this;
        ctrl.detailsOpen = false;
        ctrl.delete = function() {
            ctrl.onDelete({
                'stage': ctrl.stage
            });
        };
    }
})

;
