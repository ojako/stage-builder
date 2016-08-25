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
})

.component('stageBuilder', {
    templateUrl: 'views/stage-builder.html',
    bindings: {},
    controller: function() {
        var ctrl = this;

        ctrl.timeOut = true;

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
            '',
            // 'Manual',
            // 'Auto',
            // 'Comments',
            // 'Ratings',
            // 'Views'
        ];

        // Bootstrap some current stages
        ctrl.currentStages = [];

        var randomSelector = function(item) {
            var i = Math.floor((Math.random() * item.length));

            return item[i];
        };
        var bootstrapRandomStages = function() {
            for(var i=0; i<5; i++) {
                var name = randomSelector(ctrl.stageTypes);
                var progression = randomSelector(ctrl.progressionTypes);
                ctrl.currentStages.push({
                    'name': name,
                    'type': name,
                    'progression': progression,
                });
            }
        };
        bootstrapRandomStages();

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

        // ctrl.genDescription = function(stage) {
        //
        // };

        ctrl.helpOpen = true;

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
            // Remove undo index reference
            delete stage.undoIndex;
            // Add to currentStages
            ctrl.currentStages.splice(index, 0, stage);
            // Remove undo reference
            ctrl.deletedStages.splice(0, 1);
        };

        // // Select a stage to inspect
        // ctrl.selectedStage = function(stage) {
        //     ctrl.selected = stage;
        // };
        //
        // // Set the tab for the inspect (on tab index)
        // ctrl.setInspectorTab = function(index) {
        //     ctrl.inspectorTabActive = index;
        // };

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
.component('stageDetailDesc', {
    templateUrl: 'views/stage-detail-desc.html',
    // transclude: true,
    bindings: {

    },
})
// Helper object for advising users
.component('stageBuildHelper', {
    templateUrl: 'views/stage-builder-helper.html',
    // transclude: true,
    bindings: {
        helperObjectCurrentStage: '=',
        helperObjectStages: '<',
        nextHelp: '&',
        helpOpen: '=',
    },
    controller: function () {
        // var ctrl = this;
        // ctrl.helpOpen = true;
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
        addStage: '&',
        selectedStage: '=',
        selectStage: '&',
        inspectorTab: '=',
        stageIndex: '<',
    },
    controller: function() {
        var ctrl = this;
        ctrl.detailsOpen = false;
        ctrl.showMore = false;
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
        ctrl.progress = {
            'votes': 10,
            'views': 10,
            'days': 10,
            'visible': 'visible',
        };
    }
})

;
