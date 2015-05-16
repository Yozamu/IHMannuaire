'use strict';

angular.module('pooIhmExemplesApp')
  .controller('ProjectsCtrl', ['$scope', '$http', 'Projects', function ($scope, $http, Projects) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.getAll = function() {
      Projects.getAll(
          function(data) {
              $scope.projects = data;
          },
          function(data) {
              $scope.error = data;
          }
      );
    }

    $scope.delete = function (projectId) {
      Projects.delete(projectId, function(data){
        $scope.getAll();
      }, function (data) {
        $scope.error = "Can't delete project";
      });
    };

    $scope.getAll();
  }])
  .controller('ProjectsShowCtrl', ['$scope', '$http', '$routeParams', 'Users', 'Projects', function ($scope, $http, $routeParams, Users, Projects) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    if ($routeParams.projectId) {
      $scope.users = new Array();
      Projects.get($routeParams.projectId,
        function (data) {
          $scope.project = data;

          Projects.getUsers($routeParams.projectId,
            function (dataUsers) {
              var users = new Array();
              Projects.getRoles($routeParams.projectId,
                function (dataRoles) {
                  for(var i = 0 ; i < dataRoles.length; ++i){
                    for(var j = 0 ; j < dataUsers.length; ++j){
                      if(dataRoles[i].UserId === dataUsers[j].id){
                        var user = {
                          surname: dataUsers[j].surname,
                          name: dataUsers[j].name,
                          role: dataRoles[i].name
                        }

                        users.push(user);
                        break;
                      }
                    }
                  }
                  $scope.users = users;

                }, function (data) {
                  $scope.error = "Can't get project roles";
                });
            },
            function (data) {
              $scope.error = "Can't get project users";
            });

        },
        function (data) {
          $scope.error = data;
        });
    }
  }])
  .controller('ProjectsAddCtrl',  ['$scope', '$http', 'Projects', '$location', function ($scope, $http, Projects, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.saveData = function () {
      Projects.add($scope.project,
        function (data) {
          $location.path('/projects/' + data.id + '/show');
      }, function (data) {
          $scope.error("Can't save project users");
      });
    }
  }])
  .controller('ProjectsEditCtrl',['$scope', '$http', '$routeParams', '$location', 'Projects', function ($scope, $http, $routeParams, $location, Projects) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    if ($routeParams.projectId) {
      Projects.get($routeParams.projectId,
        function(data) {
          $scope.edit = true;
          $scope.project = data;
        },
        function(data) {
          $scope.error = data;
        });
    }

    $scope.saveData = function () {
      Projects.edit($scope.project,
        function (data) {
        $location.path('/projects/' + data.id + '/show');
      }, function (data) {
        $scope.error("Can't save project users");
      });
    }
  }]);
