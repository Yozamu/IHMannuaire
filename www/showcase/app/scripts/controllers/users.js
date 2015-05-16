'use strict';

/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pooIhmExemplesApp
 */
angular.module('pooIhmExemplesApp')
    /**
     * MainCtrl
     * Home list
     */
  .controller('UserCtrl', ['$scope', '$http', 'Users', function ($scope, $http, Users) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.getAll = function() {
      Users.getAll(
      function(data) {
        $scope.users = data;
      },
      function(data) {
        $scope.error = data;
      });  
    }

    $scope.delete = function (userId) {
      Users.delete(userId, function(data){
        $scope.getAll();
      }, function (data) {
        $scope.error = "Can't delete user";
      });
    };

    $scope.getAll();
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
        function (data) {
          $scope.user = data;
          var donneesProj = new Array();
          Users.getProj($routeParams.userId,
            function (data) {
              donneesProj = data;
              var donneesRoles = new Array();
              Users.getRoles($routeParams.userId,
                function(data){
                  donneesRoles = data;
                  for(var i = 0 ; i < donneesRoles.length ; ++i){
                    for(var j = 0 ; j < donneesProj.length ; ++j) {
                      if(donneesRoles[i].ProjectId === donneesProj[j].id){
                        donneesRoles[i].title = donneesProj[j].title;
                        donneesRoles[i].description = donneesProj[j].description;
                        break;
                      }
                    }
                  }
                  $scope.projects = donneesRoles;
                }, function (data) {
                })
            }, function (data){
            })
        },
        function (data) {
          $scope.error = data;
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
  }]);
