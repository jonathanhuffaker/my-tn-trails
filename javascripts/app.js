var app = angular.module('tnTrails', ['Authorize', 'firebase', 'ngRoute']);

app.config(
	['$routeProvider',
		function($routeProvider){
			$routeProvider
				.when('/', {
					templateUrl: '/partials/login.html',
					controller: 'authuserCtrl'
				})
				.when('/profile/', {
					templateUrl: '/partials/profile.html',
					controller: 'profileCtrl'
				})
				.when('/profile/;id', {
					templateUrl: '/partials/otheruserprofile.html',
					controller: 'userprofileCtrl'
				})
				.when('/addHike/',{
					templateUrl: '/partials/addHike.html',
					controller: 'addhikeCtrl as AddHikeCtrl'
				})
				.otherwise({ redirectTo: '/login'});
		}
	]
);

