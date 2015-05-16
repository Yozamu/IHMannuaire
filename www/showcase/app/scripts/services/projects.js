'use strict';

/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pooIhmExemplesApp
 */
angular.module('pooIhmExemplesApp')
.service('Projects',  ['$http', function Projects($http) {
    // Get all
    this.getAll = function (successCB, errorCB) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/')
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    };

    // Get one project by id
    this.get = function (projetId, successCB, errorCB) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + projetId)
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    }

    // add project
    this.add = function(project, successCB, errorCB) {
      $http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/', project)
        .success(function(data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    }

    //delete one project
    this.delete = function(projId, successCB, errorCB) {
      $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/'+ projId)
        .success(function(data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    }

    // Edit project with projectId
    this.edit = function(project, successCB, errorCB) {
      $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/'+ project.id, project)
        .success(function(data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    }

    // Get users by project id
    this.getUsers = function (projectId, successCB, errorCB) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + projectId + '/Users/')
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    }

    // Get roles by project id
    this.getRoles = function (projectId, successCB, errorCB) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + projectId + '/Roles/')
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    }
}]);