
app.controller('mygalleryCtrl',
	['Auth',
	'$firebaseArray',
	'$location',
		function(Auth, $myGallery, $location){
			var authData = Auth.$getAuth();
			var me = authData.auth.uid;
			console.log(me);
			console.log('console log for my Gallery');
			var ref = new Firebase("https://my-tn-trails.firebaseio.com/photos/").orderByChild("uid").equalTo(me);
			this.photos = $myGallery(ref);

			// to delete photo
			this.deletePhoto = function(id) {
				this.photos.$remove(this.photos.$getRecord(id)).then(function(ref){
				}),
				function(error){
					console.log(error);
				};
			};
		}
	]
);

