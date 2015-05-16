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
      this.getAll = function(userId, successCB, errorCB) {
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
      };
  }])

    /**
     * MainCtrl
     * Home list
     */
  .controller('MainCtrl', ['$scope', '$http', '$routeParams', 'Users', function ($scope, $http, $routeParams, Users) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    Users.getAll($routeParams.userId,
      function(data) {
        $scope.users = data;
      },
      function(data) {
        $scope.error = data;
      });
  }])

    /**
     * UserShowCtrl
     * Show user
     */
  .controller('UserShowCtrl', ['$scope', '$http', '$routeParams', 'Users', function ($scope, $http, $routeParams, Users) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

      if ($routeParams.userId) {
        Users.get($routeParams.userId,
          function(data) {
            $scope.user = data;
          },
          function(data) {
            $scope.error = data;
          });

        $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Roles/'+ $routeParams.userId)
          .success(function(data) {
            $scope.userRole = data.data;

            $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/'+ $scope.userRole.ProjectId)
              .success(function(data) {
                $scope.userProject = data.data;
              });
          });
      }
  }])

    /**
     * UserAddCtrl
     * Add user
     */
  .controller('UserAddCtrl', ['$scope', '$http', '$location', 'Users', function ($scope, $http, $location, Users) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.sendData = function() {
        Users.add($scope.user,
          function(data) {
            $location.path('/'+ data.id +'/show');
          },
          function() {
            $scope.error = data;
          });
    };
  }])

    /**
     * UserEditCtrl
     * Edit user
     */
  .controller('UserEditCtrl', ['$scope', '$http', '$routeParams', '$location', 'Users', function ($scope, $http, $routeParams, $location, Users) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    if ($routeParams.userId) {
        Users.get($routeParams.userId,
          function(data) {
            $scope.user = data;
          },
          function(data) {
            $scope.error = data;
          });      
      }

      $scope.sendData = function() {
            Users.edit($scope.user,
              function(data) {
                $location.path('/'+ data.id +'/show');
              },
              function(data) {
                $scope.error = data;
              });
        };  
  }])

    /**
     * UserDeleteCtrl
     * Delete user
     */
  .controller('UserDeleteCtrl', ['$scope', '$http', '$routeParams', 'Users', function ($scope, $http, $routeParams, Users) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    if ($routeParams.userId) {
        Users.delete($routeParams.userId,
          function(data) {
            $scope.msg = "Utiliseur supprimé.";
          },
          function(data) {
            $scope.msg = "Failed";
          });
    }
  }])
  ;
