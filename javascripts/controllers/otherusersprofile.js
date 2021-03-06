
app.controller('otherusersprofileCtrl',
	['Auth',
	'$routeParams',
	'$firebaseArray',
	'$location',
	function(Auth, $routeParams, $currentInfo, $location){
		var id = $routeParams.id;
		var ref= new Firebase("https://my-tn-trails.firebaseio.com/users/").orderByChild("uid").equalTo(id);
		this.otherUser = $currentInfo(ref);
		console.log(this.otherUser);
		var photoref = new Firebase("https://my-tn-trails.firebaseio.com/photos/").orderByChild("uid").equalTo(id);
		this.photos = $currentInfo(photoref);
			console.log(this.photos);
		var hikesref= new Firebase("https://my-tn-trails.firebaseio.com/hikes/").orderByChild("uid").equalTo(id);
		this.hikes = $currentInfo(hikesref);	
		var friendsref = new Firebase("https://my-tn-trails.firebaseio.com/friends").orderByChild("uid").equalTo(id);
		this.friends = $currentInfo(friendsref);
		console.log(this.friends);


		// add hike to wishlist

		this.addToHikeWishlist = function(trail, park, location,rating, description){
			console.log(id);
			var authData= Auth.$getAuth();
			console.log(authData);
			var wishlistRef = new Firebase("https://my-tn-trails.firebaseio.com/wishlist/");
			this.wishlist= $currentInfo(wishlistRef);
			this.newWishlist={};
			this.wishlist.$add({
				uid: authData.uid,
				trail: trail,
				park: park,
				location: location,
				rating: rating,
				description: description,
				wishlistID: "wishlist"+((Math.random()*10)+1)

			});
			this.newWishlist = "";
			console.log(this.newWishlist);
			
		};


	}]);