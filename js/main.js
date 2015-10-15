var app = angular.module('myApp',['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider

	.when('/',{
		templateUrl: 'http://127.0.0.1/angular-test/pages/main.html',
		controller: 'ApplicationController'
	})
	.when('',{
		templateUrl: 'http://127.0.0.1/angular-test/pages/main.html',
		controller: 'ApplicationController'
	})
	.when('/register',{
		templateUrl : 'http://127.0.0.1/angular-test/pages/register.html',
		controller: 'ApplicationController'
	})

}]);


app.controller('ApplicationController',['$scope', '$http', function($scope, $http){
	$scope.name = "Harsh";
	$scope.list1 = {title: 'AngularJS - Drag Me'};
  	$scope.list2 = {};
}]);