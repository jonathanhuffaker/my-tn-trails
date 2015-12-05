var app = angular.module('tnTrails', ['Authorize', 'firebase', 'ngRoute']);

app.config(
	['$routeProvider',
		function($routeProvider){
			$routeProvider
				.when('/', {
					templateUrl: '/partials/login.html',
					controller: 'authuserCtrl'
				})
				.otherwise({ redirectTo: '/login'});
		}
	]
);