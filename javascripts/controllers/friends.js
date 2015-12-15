app.controller('friendsCtrl',
	['Auth',
	'$firebaseArray',
	'$location',
		function(Auth, $allFriendsArray, $location){
			var authData = Auth.$getAuth();
			var me = authData.auth.uid;
			console.log(me);
			console.log("console log for my friends ctrl");
			var ref = new Firebase("https://my-tn-trails.firebaseio.com/friends/");
			this.friends = $allFriendsArray(ref);
			console.log(this.friends);
			this.determineFriend = function(id){
				var authData = Auth.$getAuth();
				var loggedInUser = authData.auth.uid;
				if(loggedInUser !== id) {
					return true;
				}
					return false;
			};

		}
	]
);

