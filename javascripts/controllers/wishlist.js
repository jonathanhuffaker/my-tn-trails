
app.controller('wishlistCtrl',
	['Auth',
	'$firebaseArray',
	'$location',
		function(Auth, $myWishlist, $location){
			var authData = Auth.$getAuth();
			var me = authData.auth.uid;
			console.log(me);
			console.log("console log for myWishlist ctrl");
			var ref = new Firebase("https://my-tn-trails.firebaseio.com/wishlist/").orderByChild("uid").equalTo(me);
			this.wishlist = $myWishlist(ref);
			console.log(this.wishlist);


			// remove hike from wishlist
			this.removeHike = function(id){
				this.wishlist.$remove(this.wishlist.$getRecord(id)).then(function(ref){
				});
				// function(error){
				// 	console.log(error);
				// };
			};

		}
	]
);