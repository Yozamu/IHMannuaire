'use strict';

/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pooIhmExemplesApp
 */
angular.module('pooIhmExemplesApp')
    .service('Users', ['$http', function Users($http){
      this.getAll = function(successCB, errorCB) {
        $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/')
          .success(function(data) {
            if (data.status === 'success') {
              successCB(data.data);
            } else {
              errorCB(data.data);
            }
          });
      };

      this.get = function(userId, successCB, errorCB) {
        $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/'+ userId)
          .success(function(data) {
            if (data.status === 'success') {
              successCB(data.data);
            } else {
              errorCB(data.data);
            }
          });
      };

      this.add = function(user, successCB, errorCB) {
        $http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Users', user)
          .success(function(data) {
            if (data.status === 'success') {
              successCB(data.data);
            } else {
              errorCB(data.data);
            }
          });
      }

      this.edit = function(user, successCB, errorCB) {
        $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Users/'+ user.id, user)
          .success(function(data) {
            if (data.status === 'success') {
              successCB(data.data);
            } else {
              errorCB(data.data);
            }
          });
      }

      this.delete = function(userId, successCB, errorCB) {
        $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/Users/'+ userId)
          .success(function(data) {
            if (data.status === 'success') {
              successCB(data.data);
            } else {
              errorCB(data.data);
            }
          });
      }
      this.getProj = function(userId, successCB, errorCB) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/'+ userId + '/Projects/')
        .success(function(data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    }

    this.getRoles = function(userId, successCB, errorCB) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/'+ userId + '/Roles/')
        .success(function(data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
      }
  }])