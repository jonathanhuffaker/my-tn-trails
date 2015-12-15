app.controller('allusersCtrl',
	['Auth',
	'$firebaseArray',
	'$location',
	function(Auth, $allUsersArray, $location){
		
		var authData = Auth.$getAuth();
		var me = authData.auth.uid;

		var ref= new Firebase("https://my-tn-trails.firebaseio.com/users/");
		this.users = $allUsersArray(ref);
		console.log(this.users);
		this.determineUser = function(id){
			var authData = Auth.$getAuth();
			var loggedInUser = authData.auth.uid;
			if(loggedInUser !== id) {
				return true;
			}
			return false;
		};

					//add a friend
			this.addFriend = function(id,name){
				console.log(id);
				var authData = Auth.$getAuth();
				console.log(authData);
				var friendRef = new Firebase("https://my-tn-trails.firebaseio.com/friends/");
				
				this.friends = $allUsersArray(friendRef);

				this.newFriend = {};

				this.friends.$add({
						uid: authData.uid,
						name: name,
						friendID: "friend"+((Math.random()*10)+1)
					});
				this.newfriend = "";
			};
	}]);

// .orderByChild("uid").equalTo(me);