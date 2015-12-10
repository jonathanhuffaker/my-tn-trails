
app.controller('myhikesCtrl',
	['Auth',
	'$firebaseArray',
	'$location',
		function(Auth, $myHikes, $location){
			var authData = Auth.$getAuth();
			var me = authData.auth.uid;
			console.log(me);
			console.log("console log for myhikes ctrl");
			var ref = new Firebase("https://my-tn-trails.firebaseio.com/hikes/").orderByChild("uid").equalTo(me);
			this.hikes = $myHikes(ref);
			console.log(this.hikes);

		}
	]
);

