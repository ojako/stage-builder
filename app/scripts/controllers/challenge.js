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
})

.component('stageBuilder', {
    templateUrl: 'views/stage-builder.html',
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

        ctrl.addStage = function(type, stageIndex) {
            console.log(type + ': ' + stageIndex);
            if(type) {
                ctrl.currentStages.splice(stageIndex + 1, 0, {
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

        var el = document.getElementById('stageList');
        var sortable;
        sortable = new Sortable(el, {
            animation: 250,
            scroll: true,
            delay: 10,
            // handle: '.sortable-drag-handle',
            // draggable: 'sortable-item',
            chosenClass: 'sortable-chosen',
            ghostClass: 'sortable-ghost',
            // Not working?
            filter: 'sortable-ignored',
            fallbackOnBody: true,
        });
    }
})
.component('stageBuilderMenu', {
    templateUrl: 'views/stage-builder-menu.html',
    bindings: {
        onAddStage: '&',
        stageTypes: '<',
        stageIndex: '<',
    },
})
.component('stageBuilderOptions', {
    templateUrl: 'views/stage-builder-options.html',
    bindings: {
        type: '<',
    },
})
.component('stageDetail', {
    templateUrl: 'views/stage-detail.html',
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
