'use strict';

angular.module('EnoticeBoardWebApp.welcome', ['ngRoute', 'firebase'])

.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/welcome',{
		templateUrl: 'welcome/welcome.html',
		controller: 'WelcomeCtrl'
	});
}])

.controller('WelcomeCtrl', ['$scope','CommonProp','$firebaseArray' ,function($scope,CommonProp,$firebaseArray){
	$scope.username = CommonProp.getUser();
var ref = firebase.database().ref().child('posts').child('CSE').child('Deptposts');
$scope.articles  = $firebaseArray(ref);
console.log($scope.articles);

	}])
 