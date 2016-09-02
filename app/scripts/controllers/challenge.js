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
            'Manual',
            'Auto',
            'Comments',
            'Ratings',
            'Views'
        ];

        // Bootstrap some current stages
        ctrl.currentStages = [];

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

        // Start with help open/closed
        ctrl.helpOpen = false;

        // Add stage to current list
        ctrl.addStage = function(type, stageIndex) {
            // Add stage
            ctrl.currentStages.splice(stageIndex + 1, 0, {
                'name': type,
                // stage type e.g. 'Open'
                'type': type,
                // are ideas visible?
                'ideaVisibility': true,
                // can stage be deleted?
                'fixed': false,
                // can stage be sorted?
                'sortable': true,
                'id': Math.floor((Math.random() * 1000)),
                'progression': {
                    'type': ctrl.progressionTypes[0],
                },
            });
        };

        // // Change stage type
        // ctrl.changeType = function(stage, type) {
        //     console.log(stage + type);
        //     if(stage.type === stage.name) {
        //         stage.type = type;
        //         stage.name = type;
        //     } else {
        //         stage.type = type;
        //     }
        // };

        // Remove stage as a current stage
        ctrl.deleteStage = function(stage) {
            // Check if confirm delete
            if (stage.deleted) {
                var index = ctrl.currentStages.indexOf(stage);
                ctrl.currentStages.splice(index, 1);
                // Add index to stage
                stage.undoIndex = index;
                // Add to undo block at top
                ctrl.deletedStages.splice(0, 1, stage);
            // Add deleted flag
            } else {
                stage.deleted = true;
            }
        };

        // Deleted Stages
        ctrl.deletedStages = [];
        // Undo the last delete
        ctrl.undoDelete = function() {
            var stage = ctrl.deletedStages[0];
            var index = stage.undoIndex;
            // Remove undo index reference
            delete stage.undoIndex;
            stage.sortable = true;
            // Add to currentStages
            ctrl.currentStages.splice(index, 0, stage);
            // Remove undo reference
            ctrl.deletedStages.splice(0, 1);
        };

        // Random num gen from item.length
        var randomSelector = function(item) {
            var i = Math.floor((Math.random() * item.length));

            return item[i];
        };
        // Generate initial stages
        var bootstrapStages = function(randomNumber) {
            // Create special stage Open
            ctrl.currentStages.splice(0, 0, {
                name:'Open',
                type: 'Open',
                ideaVisibility: true,
                sortable: false,
                fixed: true,
                id: Math.floor((Math.random() * 1000)),
            });
            // Randomly populate for testing
            for(var i=0; i<randomNumber; i++) {
                var name = randomSelector(ctrl.stageTypes);
                ctrl.addStage(name, 1);
            }
            // Create special stage Close
            ctrl.currentStages.splice(ctrl.currentStages.length, 0, {
                name: 'Close' ,
                type: 'Close',
                ideaVisibility: true,
                sortable: false,
                fixed: true,
                id: Math.floor((Math.random() * 1000)),
            });
        };
        bootstrapStages(3);

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
        numStages: '<',
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
        helpOpen: '=',
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
        changeType: '&',
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
        };

        // Change stage type and preserve name if needs be
        ctrl.changeType = function(type) {
            console.log(type);
            if(ctrl.stage.type === ctrl.stage.name) {
                ctrl.stage.type = type;
                ctrl.stage.name = type;
            } else {
                ctrl.stage.type = type;
            }
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
