'use strict';

angular.module('pooIhmExemplesApp')
  .controller('RoleAddCtrl', ['$scope', '$http', '$location', 'Users', 'Projects', 'Roles', function ($scope, $http, $location, Users, Projects, Roles) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    Projects.getAll(
      function (data) {
      $scope.projects = data;
    }, function (data) {
      $scope.error = data;
    });

    Users.getAll(
      function (data) {
      $scope.utils = data;
    }, function (data) {
      $scope.error = data;
    });

    $scope.saveData = function(){
      $scope.role.UserId = $scope.user.id;
      $scope.role.ProjectId = $scope.project.id;
      Roles.add($scope.role,
        function(data){
        $scope.result = data;
        $location.path('/'+ $scope.role.UserId +'/show');
      }, function (data) {
        $scope.result = data;
      });
    };
  }]);
