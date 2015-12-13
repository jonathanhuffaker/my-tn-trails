app.controller('profileCtrl',
	['Auth',
	'$firebaseArray',
	'$location',

	function(Auth, $currentInfo, $location){
		var authData = Auth.$getAuth();
		var me = authData.auth.uid;
		console.log(me);
		// var ref = new Firebase("https://my-tn-trails.firebaseio.com/users/"+authData.auth.uid);
		var ref = new Firebase("https://my-tn-trails.firebaseio.com/photos/").orderByChild("uid").equalTo(me);
		this.photos = $currentInfo(ref);

		// this.info = $currentInfo(ref2);
		// console.log(this.info);
	}


]);