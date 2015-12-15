app.controller('profileCtrl',
	['Auth',
	'$firebaseArray',
	'$location',

	function(Auth, $currentInfo, $location){
		var authData = Auth.$getAuth();
		var me = authData.auth.uid;
		console.log(me);
		var ref = new Firebase("https://my-tn-trails.firebaseio.com/users/"+authData.auth.uid);
		var ref2 = new Firebase("https://my-tn-trails.firebaseio.com/photos/").orderByChild("uid").equalTo(me);
		this.photos = $currentInfo(ref2);
		this.profileInfo= $currentInfo(ref);
		console.log(this.profileInfo);

		// this.info = $currentInfo(ref2);
		// console.log(this.info);


		// this.profilePhoto = function(profileObject) {
		// 	var newProfilePic;
		// 	if(profileObject.profilePic == "N/A") {
		// 		newProfilePic = {
		// 			profilePic: "../images/images.jpeg"
		// 		};
		// 	}else {

		// 	}


		// 		}
		// 	}

		// 	$currentInfo(ref);



	}
]);