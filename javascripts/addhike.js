app.controller('addhikeCtrl',
	['Auth',
	'$firebaseArray',
	'$location',
	function(Auth, $addHike, $location){
		var authData = Auth.$getAuth();
		console.log(authData);
		var ref = new Firebase("https://my-tn-trails.firebaseio.com/users/"+authData.auth.uid+"/hikes/");

		this.hikes = $addHike(ref);

		this.newHike = {};

		this.addHike = function(){
			this.hikes.$add({
				trail: this.newHike.trail,
				location: this.newHike.location,
				park: this.newHike.park,
				rating: this.newHike.rating,
				description: this.newHike.description
			});
		// 	this.newHike="";
		// 	$location.path("/profile/");
		// .bind(this);
		}
	}]);