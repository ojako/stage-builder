'use strict';

/**
* @ngdoc function
* @name app.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the stageBuilderApp
*/
angular.module('app')
.controller('MainCtrl', function ($scope) {
  this.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
  $scope.siteTitle = 'Site Title';
});
