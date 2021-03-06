app.controller('friendsCtrl',
	['Auth',
	'$firebaseArray',
	'$location',
		function(Auth, $allFriendsArray, $location){
			var authData = Auth.$getAuth();
			var me = authData.auth.uid;
			console.log(me);
			console.log("console log for my friends ctrl");
			var ref = new Firebase("https://my-tn-trails.firebaseio.com/friends/").orderByChild("uid").equalTo(me);
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

			// =====Logged in user REMOVAL of friends====

			this.removeFriend = function(id){
				this.friends.$remove(this.friends.$getRecord(id)).then(function(ref){

				});
				// function(error){
				// 	console.log(error);
				// };
			};

// adding the userRef and Userfriend to try and populate profilepic
			var userRef = new Firebase("https://my-tn-trails.firebaseio.com/users/");
			this.userFriend = $allFriendsArray(userRef);


			this.gotoProfile = function(id){
			$location.path("/profile/"+id);
			};
		}
	]
);

