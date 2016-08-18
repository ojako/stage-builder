'use strict';

/**
* @ngdoc function
* @name app.controller:ChallengeBuilderCtrl
* @description
* # ChallengeBuilderCtrl
* Controller of the stageBuilderApp
*/
angular.module('app')
.controller('ChallengeCtrl', function () {
    // ctrl as challenge
    var vm = this;
    vm.sectionTitle = 'Create Challenge';
    vm.issues = {
        'Drag and drop': [
            'Drag handles sometimes act as text selectors and thus break dragging temporarily',
            'Reordering the stage list using drag and drop does not update the index. When adding new stages they\'ll insert to the initial index rather than the updated one',
            'Animations likely will NOT work for IE9. Anims need vendor prefixes',
            'Dragging to the very last slot doesn\'t always work as you might expect',
            'Dragging a stage with a dropdown open won\'t close it',
        ],
        'Layout': [
            'Needs media q\'s and slide out toggles',
            'Needs fixed widths for stages builder',
            'Vertical icon stack for the stages when in small screen view and sidebar expanded',
        ],
        'Stages': ['First and last stage should be as proper stage data rather than custom elements/models'],
    };
})

.component('stageBuilder', {
    templateUrl: 'views/stage-builder.html',
    bindings: {},
    controller: function() {
        var ctrl = this;
        // bootstrap some current stages
        ctrl.currentStages = [{
            'name': 'Develop',
            'type': 'Evaluate'
        }, {
            'name': 'Rank',
            'type': 'Rank'
        }, {
            'name': 'Capture',
            'type': 'Capture'
        }, {
            'name': 'Discuss',
            'type': 'Discuss'
        },];

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
            'Evaluate',
            'Rank',
            'Discuss',
            'Develop',
            'Capture',
            'Measure',
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
