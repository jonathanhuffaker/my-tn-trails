app.controller('addhikeCtrl',
	['Auth',
	'$firebaseArray',
	'$location',
	function(Auth, $addHikes, $location){
		var authData = Auth.$getAuth();
		console.log(authData);

		// below is what i have currently and is working but should be flat data structure(hence branch flat_data_structure)
		var ref = new Firebase("https://my-tn-trails.firebaseio.com/users/"+authData.auth.uid+"/hikes/");

		// is the below how it should be?
		// var ref = new Firebase("https://my-tn-trails.firebaseio.com/hikes/"+authData.auth.uid);



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