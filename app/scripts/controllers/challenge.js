'use strict';

/**
* @ngdoc function
* @name app.controller:ChallengeBuilderCtrl
* @description
* # ChallengeBuilderCtrl
* Controller of the stageBuilderApp
*/
angular.module('stageBuilderApp')
.controller('ChallengeCtrl', ['users', function ChallengeCtrl(users) {
    // ctrl as challenge
    var vm = this;

    // Set of fake users
    vm.users = users;

    // All the challenge data
    vm.challenge = {
        title: 'New Challenge',
        type: 'parallel',
        stages: [],
    };

    // Types of Progression
    vm.progressionTypes = [
        'Manual',
        'Auto',
        'Comments',
        'Ratings',
        'Views'
    ];

    // Stage Types
    // short desc = desc, long desc = description
    vm.stageTypes = [
        {
            type: 'Evaluate',
            desc: 'Rate and rank ideas',
            description: 'This stage allows a defined group of evaluators assess the ideas against specific criteria. Evaluators can also privately comment on the idea. Lead Evaluators can then decide whether the ideas are progressed or not',
        },
        {
            type: 'Rank',
            desc: 'rate and rank ideas',
            description: 'When dealing with a large volume of comparable ideas, you can rank ideas. You have to options: simple ranking or pairwise voting',
        },
        {
            type: 'Discuss',
            desc: 'short description of stage type',
            description: 'Get the conversation started. People give feedback on ideas by voting, commenting and sharing ideas',
        },
        {
            type: 'Develop',
            desc: 'short description of stage type',
            description: 'Build upon the initial idea, consolidate teams or articulate a more in-depth business case. You can attach additional idea forms. People can still vote, comment or share ideas',
        },
        {
            type: 'Gather',
            desc: 'short description of stage type',
            description: 'Collect ideas from your community. Choose which custom form has to be filled when creating an idea. People can then vote, comment, and share ideas.',
        },
        {
            type: 'Measure',
            desc: 'short description of stage type',
            description: 'Measure the outcome and track the implementation of selected ideas',
        },
    ];

    vm.helpOpen = false;
    /* Helper Object */
    vm.helperObject = {
        // Is open?
        open: true,
        // Current represents the name of the currently active stage
        current: 'bootstrapChallenge',
        // Collection of all help docs
        documents: {
            // The various pages
            pages: {
                // Topics within Pags
                challengeBuilder: {
                    // Title of topic
                    name: 'Challenge Builder',
                    // Main body of topic
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    // Optional image
                    img: '',
                    // Keywords
                    keywords: ['this', 'that', 'something else'],
                    // Articles within page topic
                    articles: [
                        {
                            name: 'Getting Started',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                            img: '',
                            keywords: '',
                        },
                        {
                            name: 'Flow Type',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                            img: '',
                            keywords: '',
                        },
                        {
                            name: 'Adding Stages',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                            img: '',
                            keywords: '',
                        },
                        {
                            name: 'Deleting Stages',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                            img: '',
                            keywords: '',
                        },
                        {
                            name: 'Moving Stages',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                            img: '',
                            keywords: '',
                        },
                        {
                            name: 'Progression Settings',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                            img: '',
                            keywords: '',
                        }
                    ],
                },
            }
        }
    };

}])

.component('stageBuilder', {
    templateUrl: 'views/stage-builder.html',
    bindings: {
        users: '<',
        challenge: '=',
        stageTypes: '<',
        progressionTypes: '<',
    },
    controller: function() {
        var ctrl = this;

        ctrl.sortableConf = {
            animation: 350,
            chosenClass: 'sortable-chosen',
            handle: '.grab-handle',
            forceFallback: true,
        };

        ctrl.timeOut = true;

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
            ctrl.challenge.stages.splice(stageIndex + 1, 0, {
                name: type,
                // stage type e.g. 'Open'
                type: type,
                // are ideas visible?
                ideaVisibility: true,
                // can stage be deleted?
                editSettings: {
                    fixed: false,
                    // can stage be sorted?
                    sortable: true,
                },
                id: Math.floor((Math.random() * 1000)),
                progression: {
                    type: ctrl.progressionTypes[0],
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
                var index = ctrl.challenge.stages.indexOf(stage);
                ctrl.challenge.stages.splice(index, 1);
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
            delete stage.deleted;
            // Add to challenge.stages
            ctrl.challenge.stages.splice(index, 0, stage);
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
            ctrl.challenge.stages.splice(0, 0, {
                name: 'Gather Ideas',
                type: 'Gather',
                ideaVisibility: true,
                editSettings: {
                    sortable: false,
                    fixed: true,
                },
                id: Math.floor((Math.random() * 10000)),
                progression: {
                    type: 'Auto'
                },
            });
            // Randomly populate for testing
            for(var i=0; i<randomNumber; i++) {
                var name = randomSelector(ctrl.stageTypes);
                ctrl.addStage(name.type, 1);
            }
            // Create special stage Close
            ctrl.challenge.stages.splice(ctrl.challenge.stages.length, 0, {
                name: 'Measure Outcome' ,
                type: 'Measure',
                ideaVisibility: true,
                editSettings: {
                    sortable: false,
                    fixed: true,
                },
                id: Math.floor((Math.random() * 1000)),
                progression: {
                    type: 'Auto'
                },
            });
        };
        // 0 = default (just open/close stages)
        bootstrapStages(5);

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
    bindings: {

    },
})
// Helper object for advising users
.component('stageBuildHelper', {
    templateUrl: 'views/stage-builder-helper.html',
    bindings: {
        helperObjectCurrentStage: '=',
        helperObjectStages: '<',
        helpOpen: '=',
        helpObject: '<',
    },
    controller: function() {
        var ctrl = this;
        ctrl.currentArticle = ctrl.helpObject.pages;
        ctrl.showContents = true;

        // // Get the proper doc
        // ctrl.getPage = function(page) {
        //     var y = ctrl.helpObject.documents.pages.find(function(x) {
        //         return x.type === type;
        //     });
        //
        //     return y.description;
        // };
        // ctrl.getPage(ctrl.helpPage);

        ctrl.selectArticle = function(article) {
            ctrl.currentArticle = article;
            ctrl.showContents = false;
        };
        ctrl.showContents = function() {
            ctrl.showContents = true;
        };
        // ctrl.selectArticle(ctrl.helpObject.documents.pages[Object.keys(obj)[0]]);
    }
})
// Stage options/settings displayed in the inspector
.component('stageBuilderOptions', {
    templateUrl: 'views/stage-builder-options.html',
    bindings: {
        stage: '=',
        users: '<',
    },
})
// Stage progression options/settings displayed in progression tab of the inspector
.component('stageProgressionOptions', {
    templateUrl: 'views/stage-progression-options.html',
    bindings: {
        progression: '=',
    },
})
// The detail of individual stages in the stage timeline
.component('stageDetail', {
    templateUrl: 'views/stage-detail.html',
    bindings: {
        stage: '<',
        last: '<',
        first: '<',
        onDelete: '&',
        stageTypes: '<',
        addStage: '&',
        inspectorTab: '=',
        stageIndex: '<',
        users: '<',
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

        // Grab the longtail form of the stage type description
        ctrl.getStageTypeDesc = function(type) {
            var y = ctrl.stageTypes.find(function(x) {
                return x.type === type;
            });

            return y.description;
        };

        // Change stage type and preserve name if needs be
        ctrl.changeType = function(type) {
            // if name === type then change name
            if(ctrl.stage.type === ctrl.stage.name) {
                ctrl.stage.type = type;
                ctrl.stage.name = type;
            // just change type
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
