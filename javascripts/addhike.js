app.controller('addhikeCtrl',
	['Auth',
	'$firebaseArray',
	'$location',
	function(Auth, $addHikes, $location){
		var authData = Auth.$getAuth();
		console.log(authData);
		var ref = new Firebase("https://my-tn-trails.firebaseio.com/users/"+authData.auth.uid+"/hikes/");

		this.hikes = $addHikes(ref);

		this.newHike = {};

		this.addHike = function(){
			this.hikes.$add({
				trail: this.newHike.trail,
				location: this.newHike.location,
				park: this.newHike.park,
				rating: this.newHike.rating,
				description: this.newHike.description,
				id: "hike"+((Math.random()*10)+1)
			});

			// clarify that I need the below - creating new branch before going off on another tangent
		// 	this.newHike="";
		// 	$location.path("/myHikes/");
		// }.bind(this);
		}
	}]);