app.controller('addpicCtrl',
	['Auth',
	'$firebaseArray',
	'$location',
		function(Auth, $addPic, $location){
			var authData = Auth.$getAuth();
			console.log(authData);

			var ref = new Firebase("https://my-tn-trails.firebaseio.com/photos/");
			this.pics = $addPic(ref);

				this.newPic = {};

				this.addPic = function(){
					this.pics.$add({
					url: this.newPic.url,
					id: "pic"+((Math.random()*10)+1),
					uid: authData.uid,
					trail: this.newPic.trail
				});
					// this.newPic = "";
					$location.path("/addPic/");
				};
				// .bind(this);

		}
	]);


