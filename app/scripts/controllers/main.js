'use strict';

/**
* @ngdoc function
* @name stageBuilderApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the stageBuilderApp
*/
angular.module('stageBuilderApp')
.controller('MainCtrl', function ($scope) {
  this.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
  $scope.siteTitle = 'Site Title';
});
