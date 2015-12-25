// app.controller('otherusersprofileCtrl',
// 	['Auth',
// 	'$routeParams',
// 	'$firebaseArray',
// 	'$location',
// 	function(Auth, $routeParams, $currentInfo, $location){
// 		var uid = $routeParams.uid;
// 		var ref= new Firebase("https://my-tn-trails.firebaseio.com/users/"+uid);
// 		this.info = $currentInfo(ref);
// 		console.log(this.info);
// 		var photoref = new Firebase("https://my-tn-trails.firebaseio.com/photos/"+uid);
// 		this.photos = $currentInfo(photoref);
// 			console.log(this.photos);
// 		var friendsref = new Firebase("https://my-tn-trails.firebaseio.com/friends"+uid);
// 		this.friends = $currentInfo(friendsref);
// 		console.log(this.friends);


// 	}]);
// ===========================
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
		var friendsref = new Firebase("https://my-tn-trails.firebaseio.com/friends").orderByChild("uid").equalTo(id);;
		this.friends = $currentInfo(friendsref);
		console.log(this.friends);


	}]);