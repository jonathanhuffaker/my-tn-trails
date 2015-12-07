app.controller('allusersCtrl',
	['Auth',
	'$firebaseArray',
	'$location',
	function(Auth, $allUsersArray, $location){

		var ref= new Firebase("https://my-tn-trails.firebaseio.com/users/");
		this.users=$allUsersArray(ref);

		this.determineUser = function(id){
			var authData = Auth.$getAuth();
			var loggedInUser = authData.auth.uid;
			if(loggedInUser !== id) {
				return true;
			}
			return false;
		};
	}]);