'use strict';

/**
 * @ngdoc overview
 * @name pooIhmExemplesApp
 * @description
 * # pooIhmExemplesApp
 *
 * Main module of the application.
 */
angular
  .module('pooIhmExemplesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/Users/list.html',
        controller: 'UserCtrl'
      })
      .when('/:userId/show', {
        templateUrl: 'views/Users/show.html',
        controller: 'UserShowCtrl'
      })
      .when('/adduser', {
        templateUrl: 'views/Users/add.html',
        controller: 'UserAddCtrl'
      })
      .when('/:userId/edit', {
        templateUrl: 'views/Users/edit.html',
        controller: 'UserEditCtrl'
      })
      .when('/addrole', {
        templateUrl: 'views/Role/add.html',
        controller: 'RoleAddCtrl'
      })
      .when('/projects', {
        templateUrl: 'views/Projects/list.html',
        controller: 'ProjectsCtrl'
      })
      .when('/projects/:projectId/show', {
        templateUrl: 'views/Projects/show.html',
        controller: 'ProjectsShowCtrl'
      })
      .when('/projects/add', {
        templateUrl: 'views/Projects/add.html',
        controller: 'ProjectsAddCtrl'
      })
      .when('/projects/:projectId/edit', {
        templateUrl: 'views/Projects/add.html',
        controller: 'ProjectsEditCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
