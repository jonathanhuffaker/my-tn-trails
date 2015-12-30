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

// adding the userRef and Userfriend to try and populate profilepic
			var userRef = new Firebase("https://my-tn-trails.firebaseio.com/users/");
			this.userFriend = $allFriendsArray(userRef);




// =========another attempt =================

	// var userRef = new Firebase("https://my-tn-trails.firebaseio.com/users/");
	// 		var userFriend = $allFriendsArray(userRef);
	// 		var pleaseWorkFriend = userFriend.friend.uid;


	// 		this.myFriend = function(id) {
	// 			if(this.determineFriend == pleaseWorkFriend) {
	// 				return true;
	// 			}
	// 				return false;
	// 		};

	// 		console.log(this.myFriend);



// ATTEMPT BELOW WAS A FAILURE -----------------

			// var userRef = new Firebase("https://my-tn-trails.firebaseio.com/users/");
			// this.userFriend = function(id){
			// 	var matchedFriend = $allFriendsArray(userRef);

			// 	console.log(matchedFriend);
			// 	var userPicMatch = matchedFriend;
			// 	if (userPicMatch === id) {
			// 		return true;
			// 	}
			// 		return false;
			// };

			// console.log(this.userFriend);

// ATTEMPT ABOVE WAS A FAILURE -----------------





			this.gotoProfile = function(id){
			$location.path("/profile/"+id);
			};
		}
	]
);

