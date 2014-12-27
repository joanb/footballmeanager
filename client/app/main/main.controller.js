'use strict';

angular.module('balasApp')
  .controller('MainCtrl', function ($scope, $http, socket, Auth) {
    $scope.isAdmin = Auth.isAdmin;
    $scope.awesomeThings = [];

    $http.get('/api/players').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('player', $scope.awesomeThings);
    });

    $scope.addThing = function() {
      if($scope.newThing.name.trim() === '') {
        return;
      }
      $http.post('/api/players', $scope.newThing);
      $scope.newThing = {};
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/players/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('player');
    });
  });
