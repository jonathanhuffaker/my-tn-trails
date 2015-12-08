var auth = angular.module('Authorize', ['firebase']);

	var name;
	auth.factory("Auth", ["$firebaseAuth",
	  function($firebaseAuth) {
	    var ref = new Firebase("https://my-tn-trails.firebaseio.com/");

	    return $firebaseAuth(ref);

	  }
	]);

	//create a user
	app.controller('authuserCtrl',
		['$scope',
		'Auth',
		'$firebaseArray',
		'$location',
		function($scope, Auth, $currentAcct, $location){
			$scope.createUser = function(){
				Auth.$createUser({
					email: $scope.email,
					password: $scope.password
				}).then(function(userData){
					
					// Changing what i had originaly to reflect order by child - keeping old for safety
					var ref = new Firebase("https://my-tn-trails.firebaseio.com/users/"+userData.uid);


					ref.set({
						email: $scope.email,
						name: $scope.name,
						uid: userData.uid
					});
					console.log("user created with id:" +userData.uid);
  					$scope.loginUser();
				}).catch(function(error){
					console.log("user not created with error:" +error);
				});
			};
			$scope.loginUser = function(){
				Auth.$authWithPassword({
					email: $scope.email,
					password: $scope.password
				}).then(function(userData){
					var ref = new Firebase("https://my-tn-trails.firebaseio.com/");
					console.log("user logged in with id:" +userData.uid);
					$location.path("/profile/");
				}).catch(function(error){
					console.log("user not logged with error:" +error);
				});
			};

			$scope.logOut = function(){
				Auth.$unauth();
				console.log("user logged out");
				//redirect back to login page
				$location.path("/");
			};
		}]);