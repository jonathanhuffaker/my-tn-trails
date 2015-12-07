app.controller('myhikesCtrl',
	['Auth',
	'$firebaseArray',
	'$location',
		function(Auth, $myHikes, $location){
			var authData = Auth.$getAuth();
			console.log("console log for myhikes ctrl");
			var ref = new Firebase("https://my-tn-trails.firebaseio.com/users/"+authData.auth.uid);
			this.info = $myHikes(ref);
			console.log(this.info);
			var hikeref = new Firebase("https://my-tn-trails.firebaseio.com/users/"+authData.auth.uid+"/hikes");
			this.hikes = $myHikes(hikeref);
			console.log(this.hikes);
		}
	]
);