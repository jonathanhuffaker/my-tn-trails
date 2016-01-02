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
					controller: 'profileCtrl as ProfileCtrl'
				})
				.when('/profile/:id', {
					templateUrl: '/partials/otherusersprofile.html',
					controller: 'otherusersprofileCtrl as OtherUsersProfileCtrl'
				})
				.when('/addHike/',{
					templateUrl: '/partials/addHike.html',
					controller: 'addhikeCtrl as AddHikeCtrl'
				})
				.when('/myHikes/',{
					templateUrl: '/partials/myHikes.html',
					controller: 'myhikesCtrl as MyHikesCtrl'
				})
				.when('/allUsers/',{
					templateUrl: '/partials/allusers.html',
					controller:'allusersCtrl as AllUsersCtrl'
				})
				.when('/addPic/',{
					templateUrl: '/partials/add-pic.html',
					controller:'addpicCtrl as AddPicCtrl'
				})
				.when('/myGallery/', {
					templateUrl: '/partials/myGallery.html',
					controller: 'mygalleryCtrl as MyGalleryCtrl'
				})
				.when('/friends/', {
					templateUrl: '/partials/friends.html',
					controller: 'friendsCtrl as FriendsCtrl'
				})
					.when('/wishlist/', {
					templateUrl: '/partials/wishlist.html',
					controller: 'wishlistCtrl as WishlistCtrl'
				})
				.otherwise({ redirectTo: '/login'});
		}
	]
);


// Working on getting bootstrap navbar animation for dropdown

// 	function HeaderController($scope, $location) 
// { 
//     $scope.isActive = function (viewLocation) { 
//         return viewLocation === $location.path();
//     };
// }

// app.controller("HeaderController", "$location", function(){
// 	this.isActive = function(viewLocation) {
// 		return viewLocation ===$location.path();
// 	};
// });
