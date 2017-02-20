(function() {
  var app = angular.module("angModule", []);

  var myController = function($scope, github) {

    $scope.message = "Hello and welcome to our site";


    var outputComplete = function(data) {
      $scope.user = data;
      github.getRepos($scope.user).then(outputRepos, onError);
    };

    var outputRepos = function(data) {
      $scope.repos = data;
    };


    var onError = function(response) {
      $scope.error = response.data.message;
    };

    $scope.search = function(username) {
      github.getUser(username).then(outputComplete, onError);
    };

    $scope.repoSortOrder = "-stargazers_count";

  };

  //Useful for minified version of angularJS code
  app.controller("myCntrl", ["$scope", "github", myController]);
}());