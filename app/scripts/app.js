'use strict';

/**
 * @ngdoc overview
 * @name stageBuilderApp
 * @description
 * # stageBuilderApp
 *
 * Main module of the application.
 */
angular
  .module('app', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ui.bootstrap',
    'ngTouch',
    'sticky',
    'ng-sortable',
  ])
  .config(function ($routeProvider, $interpolateProvider) {
    $interpolateProvider.startSymbol('{$');
    $interpolateProvider.endSymbol('$}');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/challenge', {
        templateUrl: 'views/challenge.html',
        controller: 'ChallengeCtrl',
        controllerAs: 'challenge'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
