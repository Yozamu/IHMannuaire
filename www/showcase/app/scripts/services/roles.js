'use strict';

angular.module('pooIhmExemplesApp')
.service('Roles',  ['$http', function Roles($http) {

    //select role corresponding at the id
   this.get = function (roleId, successCB, errorCB) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Roles/' + roleId)
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    }

    //select all roles for the user
    this.getByUser = function (userId, successCB, errorCB) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + userId + '/Roles')
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    }

    //select all user for the project
    this.getByProject = function (projId, successCB, errorCB) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + projId + '/Roles')
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    }

    //add a role
    this.add = function(role, successCB, errorCB) {
      $http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Roles/', role)
        .success(function(data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    }

    //add a role for a project
    this.addRole = function(projId, userId, successCB, errorCB) {
      $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + projId + '/Users/' + userId)
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    }

    //edit the role
    this.edit = function(role, successCB, errorCB) {
      $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Roles/' + role.id, role)
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    }
  }]);