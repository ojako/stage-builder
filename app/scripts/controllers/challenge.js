'use strict';

/**
* @ngdoc function
* @name app.controller:ChallengeBuilderCtrl
* @description
* # ChallengeBuilderCtrl
* Controller of the stageBuilderApp
*/
angular.module('stageBuilderApp')
.controller('ChallengeCtrl', function () {
    // ctrl as challenge
    var vm = this;
    vm.sectionTitle = 'Create Challenge';
    vm.issues = {
        'Drag and drop': [
            'Drag handles sometimes act as text selectors and thus break dragging temporarily',
            'Animations likely will NOT work for IE9. Anims need vendor prefixes',
            'Dragging to the very last slot doesn\'t always work as you might expect',
            'Dragging a stage with a dropdown open won\'t close it',
            {'Completed': 'Reordering the stage list using drag and drop does not update the index. When adding new stages they\'ll insert to the initial index rather than the updated one'},
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

        ctrl.stageTypes = [
            'Evaluate',
            'Rank',
            'Discuss',
            'Develop',
            'Capture',
            'Measure',
        ];

        ctrl.progressionTypes = [
            'Auto',
            'Manual',
            'Comments',
            'Ratings',
            'Views'
        ];

        // bootstrap some current stages
        ctrl.currentStages = [{
            'name': 'Develop',
            'type': 'Develop',
            'progression': ctrl.progressionTypes[0],
        }, {
            'name': 'Rank',
            'type': 'Rank',
            'progression': ctrl.progressionTypes[0],
        }, {
            'name': 'Capture',
            'type': 'Capture',
            'progression': ctrl.progressionTypes[0],
        }, {
            'name': 'Discuss',
            'type': 'Discuss',
            'progression': ctrl.progressionTypes[0],
        },];

        ctrl.addStage = function(type, stageIndex) {
            console.log(type + ': ' + stageIndex);
            if(type) {
                ctrl.currentStages.splice(stageIndex + 1, 0, {
                    'name': type,
                    'type': type,
                    'progression': ctrl.progressionTypes[0],
                });
            } else {
                ctrl.currentStages.push({
                    'name': '',
                    'type': '',
                    'progression': ctrl.progressionTypes[0],
                });
            }
        };

        ctrl.deleteStage = function(stage) {
            var index = ctrl.currentStages.indexOf(stage);
            ctrl.currentStages.splice(index, 1);
        };

        ctrl.selectedStage = function(stage) {
            ctrl.inspectorTabActive = 3;
            ctrl.selected = stage;
        };

        var stickyElements = document.getElementsByClassName('sticky');

        for (var i = stickyElements.length - 1; i >= 0; i--) {
            Stickyfill.add(stickyElements[i]);
        }
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
.component('stageProgressionOptions', {
    templateUrl: 'views/stage-progression-options.html',
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
