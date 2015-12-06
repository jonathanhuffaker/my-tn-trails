app.controller('profileCtrl',
	['Auth',
	'$firebaseArray',
	'$location',
	function(Auth, $currentInfo, $location){
		var authData = Auth.$getAuth();
		var ref = new Firebase("https://my-tn-trails.firebaseio.com/users/"+authData.auth.uid);
		this.info = $currentInfo(ref);
		console.log(this.info);
	}
]);