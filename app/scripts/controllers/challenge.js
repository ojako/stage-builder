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

        // Stage Types
        ctrl.stageTypes = [
            'Evaluate',
            'Rank',
            'Discuss',
            'Develop',
            'Capture',
            'Measure',
        ];

        // Types of Progression
        ctrl.progressionTypes = [
            'Auto',
            'Manual',
            'Comments',
            'Ratings',
            'Views'
        ];

        // Bootstrap some current stages
        ctrl.currentStages = [{
            'name': 'Develop',
            'type': 'Develop',
            'progression': 'Closes (3 sep 2016 @ 12:00)',
        }, {
            'name': 'Rank',
            'type': 'Rank',
            'progression': 'Closes when more than 20 comments',
        }, {
            'name': 'Gather',
            'type': 'Gather',
            'progression': ctrl.progressionTypes[0],
        }, {
            'name': 'Review',
            'type': 'Review',
            'progression': ctrl.progressionTypes[0],
        },];

        /* Create Helper Object */
        // Current stage represents the name of the currently active stage
        ctrl.helperObjectCurrentStage = 'bootstrapChallenge';
        // Collection of helper stages with name and status
        ctrl.helperObjectStages = [
            {
                name: 'bootstrapChallenge',
                status: 'incomplete',
            },
            {
                name: 'createStage',
                status: 'incomplete',
            },
            {
                name: 'removeStage',
                status: 'incomplete',
            },
            {
                name: 'editStage',
                status: 'incomplete',
            },
            {
                name: 'editTransition',
                status: 'incomplete',
            },
        ];
        // ctrl.helperObjectProgress = function(stage) {
        //     // if(!ctrl.helperObjectCompleted.indexOf('completed')) {
        //     //     if(!ctrl.helperObjectCompleted.indexOf(stage)) {
        //     //         ctrl.helperObjectCompleted.push(stage);
        //     //     }
        //     // }
        // };

        // Add stage to current list
        ctrl.addStage = function(type, stageIndex) {

            // Add stage
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

        // Remove stage as a current stage
        ctrl.deleteStage = function(stage) {
            var index = ctrl.currentStages.indexOf(stage);
            ctrl.currentStages.splice(index, 1);
            // Add index to stage
            stage.undoIndex = index;
            // Add to undo block at top
            ctrl.deletedStages.splice(0, 0, stage);
        };

        // Deleted Stages
        ctrl.deletedStages = [];
        // Undo the last delete
        ctrl.undoDelete = function() {
            var stage = ctrl.deletedStages[0];
            var index = stage.undoIndex;
            delete stage.undoIndex;
            ctrl.currentStages.splice(index, 0, stage);
            ctrl.deletedStages.splice(0, 1);
        };

        // Select a stage to inspect
        ctrl.selectedStage = function(stage) {
            ctrl.selected = stage;
        };

        // Set the tab for the inspect (on tab index)
        ctrl.setInspectorTab = function(index) {
            ctrl.inspectorTabActive = index;
        };

        // Grab sticky classes
        var stickyElements = document.getElementsByClassName('sticky');

        // Apply sticky stuff
        for (var i = stickyElements.length - 1; i >= 0; i--) {
            Stickyfill.add(stickyElements[i]);
        }
    }
})
// Dropdown adding new stages
.component('stageBuilderMenu', {
    templateUrl: 'views/stage-builder-menu.html',
    bindings: {
        onAddStage: '&',
        stageTypes: '<',
        stageIndex: '<',
    },
})
// Helper object for advising users
.component('stageBuildHelper', {
    templateUrl: 'views/stage-builder-helper.html',
    transclude: true,
    bindings: {
        helperObjectCurrentStage: '=',
        helperObjectStages: '<',
    },
    controllerAs: 'ctrl',
    controller: function() {
        this.nextHelp = function() {
            console.log('fun times');
        };
    },
})
// Stage options/settings displayed in the inspector
.component('stageBuilderOptions', {
    templateUrl: 'views/stage-builder-options.html',
    bindings: {
        type: '<',
    },
})
// Stage progression options/settings displayed in progression tab of the inspector
.component('stageProgressionOptions', {
    templateUrl: 'views/stage-progression-options.html',
    bindings: {
        type: '<',
    },
})
// The detail of individual stages in the stage timeline
.component('stageDetail', {
    templateUrl: 'views/stage-detail.html',
    bindings: {
        stage: '<',
        last: '<',
        onDelete: '&',
        stageTypes: '<',
        selectedStage: '=',
        selectStage: '&',
        inspectorTab: '=',
    },
    controller: function() {
        var ctrl = this;
        ctrl.detailsOpen = false;
        ctrl.delete = function() {
            ctrl.onDelete({
                'stage': ctrl.stage
            });
            // if(ctrl.selectedStage === ctrl.stage) {
            //     ctrl.selectStage({
            //         'stage': '',
            //     });
            // }
        };
        ctrl.heyThere = function() {
            console.log('hey there');
        };
    }
})

;
