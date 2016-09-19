angular.module('gemApp.controllers', ['ngCordova'])

.controller('AppCtrl', function($scope,$http, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  $scope.createComment = function(part, user, postId) {
  	url ="http://gemmagazines.net/"+part+"/api/respond/submit_comment/?post_id="+postId+"&name="+user.name+"&email="+user.email+"&content="+user.comment;
  	console.log(url);	
  	$http.get(url)
  	.success(
  		function(response) {
  			alert(response.status);
  		});
  };
  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('FatherhoodCtrl', function($scope,$http, $ionicLoading) {
	$ionicLoading.show({
	    template: 'Loading...please wait',
	    animation: 'fade-in',
	    showBackdrop: true,
	    maxWidth: 200,
	    showDelay: 500
	});
 
  $http.get("http://gemmagazines.net/gemman/gem_app_apis/fatherhood.php")
		.success(
			function (response){
				$scope.playlists = response.posts; $ionicLoading.hide()});
	//$ionicLoading.hide();	
})
.controller('SportCtrl', function($scope,$http, $ionicLoading) {
	$ionicLoading.show({
	    template: 'Loading...please wait',
	    animation: 'fade-in',
	    showBackdrop: true,
	    maxWidth: 200,
	    showDelay: 500
	});
 
  $http.get("http://gemmagazines.net/gemman/gem_app_apis/sport.php")
		.success(function (response){$scope.playlists = response.posts; $ionicLoading.hide()});
	//$ionicLoading.hide();	
})
.controller('MRelationshipCtrl', function($scope,$http, $ionicLoading) {
	$ionicLoading.show({
	    template: 'Loading...please wait',
	    animation: 'fade-in',
	    showBackdrop: true,
	    maxWidth: 200,
	    showDelay: 500
	});
 
  $http.get("http://gemmagazines.net/gemman/gem_app_apis/relationships.php")
		.success(function (response){$scope.playlists = response.posts; $ionicLoading.hide()});
	//$ionicLoading.hide();	
})
.controller('MRealtalkCtrl', function($scope,$http, $ionicLoading) {
	$ionicLoading.show({
	    template: 'Loading...please wait',
	    animation: 'fade-in',
	    showBackdrop: true,
	    maxWidth: 200,
	    showDelay: 500
	});
 
  $http.get("http://gemmagazines.net/gemman/gem_app_apis/real-talk.php")
		.success(function (response){$scope.playlists = response.posts; $ionicLoading.hide()});
	//$ionicLoading.hide();	
})
.controller('MLifestyleCtrl', function($scope,$http, $ionicLoading) {
	$ionicLoading.show({
	    template: 'Loading...please wait',
	    animation: 'fade-in',
	    showBackdrop: true,
	    maxWidth: 200,
	    showDelay: 500
	});
 
  $http.get("http://gemmagazines.net/gemman/gem_app_apis/lifestyle.php")
		.success(function (response){$scope.playlists = response.posts; $ionicLoading.hide()});
	//$ionicLoading.hide();	
})
.controller('MInspirationCtrl', function($scope,$http, $ionicLoading) {
	$ionicLoading.show({
	    template: 'Loading...please wait',
	    animation: 'fade-in',
	    showBackdrop: true,
	    maxWidth: 200,
	    showDelay: 500
	});
 
  $http.get("http://gemmagazines.net/gemman/gem_app_apis/inspiration.php")
		.success(function (response){$scope.playlists = response.posts; $ionicLoading.hide()});
	//$ionicLoading.hide();	
})
.controller('MHealthCtrl', function($scope,$http, $ionicLoading) {
	$ionicLoading.show({
	    template: 'Loading...please wait',
	    animation: 'fade-in',
	    showBackdrop: true,
	    maxWidth: 200,
	    showDelay: 500
	});
 
  $http.get("http://gemmagazines.net/gemman/gem_app_apis/health.php")
		.success(function (response){$scope.playlists = response.posts; $ionicLoading.hide()});
	//$ionicLoading.hide();	
})
.controller('MFinanceCtrl', function($scope,$http, $ionicLoading) {
	$ionicLoading.show({
	    template: 'Loading...please wait',
	    animation: 'fade-in',
	    showBackdrop: true,
	    maxWidth: 200,
	    showDelay: 500
	});
 
  $http.get("http://gemmagazines.net/gemman/gem_app_apis/finance.php")
		.success(function (response){$scope.playlists = response.posts; $ionicLoading.hide()});
	//$ionicLoading.hide();	
})

.controller('MFashionCtrl', function($scope,$http, $ionicLoading) {
	$ionicLoading.show({
	    template: 'Loading...please wait',
	    animation: 'fade-in',
	    showBackdrop: true,
	    maxWidth: 200,
	    showDelay: 500
	});
 
  $http.get("http://gemmagazines.net/gemman/gem_app_apis/fashion.php")
		.success(function (response){$scope.playlists = response.posts; $ionicLoading.hide()});
	//$ionicLoading.hide();	
})

.controller('EmotionalIqCtrl', function($scope,$http, $ionicLoading) {
	$ionicLoading.show({
	    template: 'Loading...please wait',
	    animation: 'fade-in',
	    showBackdrop: true,
	    maxWidth: 200,
	    showDelay: 500
	});
 
  $http.get("http://gemmagazines.net/gemman/gem_app_apis/emotional-iq.php")
		.success(function (response){$scope.playlists = response.posts; $ionicLoading.hide()});
	//$ionicLoading.hide();	
})


.controller('AutosCtrl', function($scope,$http, $ionicLoading) {
	$ionicLoading.show({
	    template: 'Loading...please wait',
	    animation: 'fade-in',
	    showBackdrop: true,
	    maxWidth: 200,
	    showDelay: 500
	});
 
  $http.get("http://gemmagazines.net/gemman/gem_app_apis/autos.php")
		.success(function (response){$scope.playlists = response.posts; $ionicLoading.hide()});
	//$ionicLoading.hide();	
})


.controller('BeautyCtrl', function($scope,$http, $ionicLoading) {
	$ionicLoading.show({
	    template: 'Loading...please wait',
	    animation: 'fade-in',
	    showBackdrop: true,
	    maxWidth: 200,
	    showDelay: 500
	});
 
  $http.get("http://gemmagazines.net/gemwoman/gem_app_apis/beauty.php")
		.success(function (response){$scope.playlists = response.posts; $ionicLoading.hide()});
	//$ionicLoading.hide();	
})

.controller('WisdomSeriesCtrl', function($scope,$http, $ionicLoading) {
	$ionicLoading.show({
	    template: 'Loading...please wait',
	    animation: 'fade-in',
	    showBackdrop: true,
	    maxWidth: 200,
	    showDelay: 500
	});
 
  $http.get("http://gemmagazines.net/gemwoman/gem_app_apis/wisdom_series.php")
		.success(function (response){$scope.playlists = response.posts; $ionicLoading.hide()});
	//$ionicLoading.hide();	
})
.controller('WhatsNewCtrl', function($scope,$http, $ionicLoading) {
	$ionicLoading.show({
	    template: 'Loading...please wait',
	    animation: 'fade-in',
	    showBackdrop: true,
	    maxWidth: 200,
	    showDelay: 500
	});
 
  $http.get("http://gemmagazines.net/gemwoman/gem_app_apis/whats_new.php")
		.success(function (response){$scope.playlists = response.posts; $ionicLoading.hide()});
	//$ionicLoading.hide();	
})
.controller('ParentingCtrl', function($scope,$http, $ionicLoading) {
	$ionicLoading.show({
	    template: 'Loading...please wait',
	    animation: 'fade-in',
	    showBackdrop: true,
	    maxWidth: 200,
	    showDelay: 500
	});
 
  $http.get("http://gemmagazines.net/gemwoman/gem_app_apis/parenting.php")
		.success(function (response){$scope.playlists = response.posts; $ionicLoading.hide()});
	//$ionicLoading.hide();	
})
.controller('MotivationalCtrl', function($scope,$http, $ionicLoading) {
	$ionicLoading.show({
	    template: 'Loading...please wait',
	    animation: 'fade-in',
	    showBackdrop: true,
	    maxWidth: 200,
	    showDelay: 500
	});
 
  $http.get("http://gemmagazines.net/gemwoman/gem_app_apis/motivational.php")
		.success(function (response){$scope.playlists = response.posts; $ionicLoading.hide()});
	//$ionicLoading.hide();	
})
.controller('MarthasPlaceCtrl', function($scope,$http, $ionicLoading) {
	$ionicLoading.show({
	    template: 'Loading...please wait',
	    animation: 'fade-in',
	    showBackdrop: true,
	    maxWidth: 200,
	    showDelay: 500
	});
 
  $http.get("http://gemmagazines.net/gemwoman/gem_app_apis/motivational.php")
		.success(function (response){$scope.playlists = response.posts; $ionicLoading.hide()});
	//$ionicLoading.hide();	
})
.controller('KStoriesCtrl', function($scope,$http, $ionicLoading) {
	$ionicLoading.show({
	    template: 'Loading...please wait',
	    animation: 'fade-in',
	    showBackdrop: true,
	    maxWidth: 200,
	    showDelay: 500
	});
 
  $http.get("http://gemmagazines.net/gemkidz/gem_app_apis/stories.php")
		.success(function (response){$scope.playlists = response.posts; $ionicLoading.hide()});
	//$ionicLoading.hide();	
})
.controller('KHealthCtrl', function($scope,$http, $ionicLoading) {
	$ionicLoading.show({
	    template: 'Loading...please wait',
	    animation: 'fade-in',
	    showBackdrop: true,
	    maxWidth: 200,
	    showDelay: 500
	});
 
  $http.get("http://gemmagazines.net/gemkidz/gem_app_apis/health.php")
		.success(function (response){$scope.playlists = response.posts; $ionicLoading.hide()});
	//$ionicLoading.hide();	
})
.controller('KFinanceCtrl', function($scope,$http, $ionicLoading) {
	$ionicLoading.show({
	    template: 'Loading...please wait',
	    animation: 'fade-in',
	    showBackdrop: true,
	    maxWidth: 200,
	    showDelay: 500
	});
 
  $http.get("http://gemmagazines.net/gemkidz/gem_app_apis/finance.php")
		.success(function (response){$scope.playlists = response.posts; $ionicLoading.hide()});
	//$ionicLoading.hide();	
})
.controller('CartoonCtrl', function($scope,$http, $ionicLoading) {
	$ionicLoading.show({
	    template: 'Loading...please wait',
	    animation: 'fade-in',
	    showBackdrop: true,
	    maxWidth: 200,
	    showDelay: 500
	});
 
  $http.get("http://gemmagazines.net/gemkidz/gem_app_apis/cartoon.php")
		.success(function (response){$scope.playlists = response.posts; $ionicLoading.hide()});
	//$ionicLoading.hide();	
})
.controller('LightReflectionsCtrl', function($scope,$http, $ionicLoading) {
	$ionicLoading.show({
	    template: 'Loading...please wait',
	    animation: 'fade-in',
	    showBackdrop: true,
	    maxWidth: 200,
	    showDelay: 500
	});
 
  $http.get("http://gemmagazines.net/gemwoman/gem_app_apis/light_reflections.php")
		.success(function (response){$scope.playlists = response.posts; $ionicLoading.hide()});
	//$ionicLoading.hide();	
})
.controller('HomeYouCtrl', function($scope,$http, $ionicLoading) {
	$ionicLoading.show({
	    template: 'Loading...please wait',
	    animation: 'fade-in',
	    showBackdrop: true,
	    maxWidth: 200,
	    showDelay: 500
	});
 
  $http.get("http://gemmagazines.net/gemwoman/gem_app_apis/home_you.php")
		.success(function (response){$scope.playlists = response.posts; $ionicLoading.hide()});
	//$ionicLoading.hide();	
})
.controller('LifestyleCtrl', function($scope,$http, $ionicLoading) {
	$ionicLoading.show({
	    template: 'Loading...please wait',
	    animation: 'fade-in',
	    showBackdrop: true,
	    maxWidth: 200,
	    showDelay: 500
	});
 
  $http.get("http://gemmagazines.net/gemwoman/gem_app_apis/lifestyle.php")
		.success(function (response){$scope.playlists = response.posts; $ionicLoading.hide()});
	//$ionicLoading.hide();	
})
.controller('HealthFitnessCtrl', function($scope,$http, $ionicLoading) {
	$ionicLoading.show({
	    template: 'Loading...please wait',
	    animation: 'fade-in',
	    showBackdrop: true,
	    maxWidth: 200,
	    showDelay: 500
	});
 
  $http.get("http://gemmagazines.net/gemwoman/gem_app_apis/health_fitness.php")
		.success(function (response){$scope.playlists = response.posts; $ionicLoading.hide()});
	//$ionicLoading.hide();	
})
.controller('FoodCtrl', function($scope,$http, $ionicLoading) {
	$ionicLoading.show({
	    template: 'Loading...please wait',
	    animation: 'fade-in',
	    showBackdrop: true,
	    maxWidth: 200,
	    showDelay: 500
	});
 
  $http.get("http://gemmagazines.net/gemwoman/gem_app_apis/food.php")
		.success(function (response){$scope.playlists = response.posts; $ionicLoading.hide()});
	//$ionicLoading.hide();	
})
.controller('FinanceCtrl', function($scope,$http, $ionicLoading) {
	$ionicLoading.show({
	    template: 'Loading...please wait',
	    animation: 'fade-in',
	    showBackdrop: true,
	    maxWidth: 200,
	    showDelay: 500
	});
 
  $http.get("http://gemmagazines.net/gemwoman/gem_app_apis/finance.php")
		.success(function (response){$scope.playlists = response.posts; $ionicLoading.hide()});
	//$ionicLoading.hide();	
})
.controller('FashionCtrl', function($scope,$http, $ionicLoading) {
	$ionicLoading.show({
	    template: 'Loading...please wait',
	    animation: 'fade-in',
	    showBackdrop: true,
	    maxWidth: 200,
	    showDelay: 500
	});
 
  $http.get("http://gemmagazines.net/gemwoman/gem_app_apis/fashion.php")
		.success(function (response){$scope.playlists = response.posts; $ionicLoading.hide()});
	//$ionicLoading.hide();	
})
.controller('EntertainmentCtrl', function($scope,$http, $ionicLoading) {
	$ionicLoading.show({
	    template: 'Loading...please wait',
	    animation: 'fade-in',
	    showBackdrop: true,
	    maxWidth: 200,
	    showDelay: 500
	});
 
  $http.get("http://gemmagazines.net/gemwoman/gem_app_apis/entertainment.php")
		.success(function (response){$scope.playlists = response.posts; $ionicLoading.hide()});
	//$ionicLoading.hide();	
})
.controller('ControversialCtrl', function($scope,$http, $ionicLoading) {
	$ionicLoading.show({
	    template: 'Loading...please wait',
	    animation: 'fade-in',
	    showBackdrop: true,
	    maxWidth: 200,
	    showDelay: 500
	});
 
  $http.get("http://gemmagazines.net/gemwoman/gem_app_apis/controversial.php")
		.success(function (response){$scope.playlists = response.posts; $ionicLoading.hide()});
	//$ionicLoading.hide();	
})
.controller('CareerCtrl', function($scope,$http, $ionicLoading) {
	$ionicLoading.show({
	    template: 'Loading...please wait',
	    animation: 'fade-in',
	    showBackdrop: true,
	    maxWidth: 200,
	    showDelay: 500
	});
 
  $http.get("http://gemmagazines.net/gemwoman/gem_app_apis/career.php")
		.success(function (response){$scope.playlists = response.posts; $ionicLoading.hide()});
	//$ionicLoading.hide();	
})
.controller('AuntyKkCtrl', function($scope, $http, $ionicLoading, $cordovaNetwork, $cordovaDialogs) {
	//var isOffline = $cordovaNetwork.isOffline();
	//if(isOffline) { $state.go('app.auntykk'); }
	//alert(isOnline);
	$ionicLoading.show({
	    //template: 'LOADING CONTENT <br> this depends on your internet connectivity <br> please wait...',
	    animation: 'fade-in',
	    showBackdrop: true
	});
	/* setTimeout(function () {
		$scope.$apply(function () {
		  $cordovaDialogs.alert('Sorry you do not have internet connection', 'Internet', 'OK');//$ionicLoading.hide();
		});
    }, 5000); */
 
  $http.get("http://gemmagazines.net/gemwoman/gem_app_apis/aunty_kk.php")
		.success(function (response){$scope.playlists = response.posts; $ionicLoading.hide()})
		.error(function (data) {
			//alert ("error"); $ionicLoading.hide()
			$state.go('app.auntykk'); $ionicLoading.hide()
		});
	//$ionicLoading.hide();	
})

.controller('PlaylistsCtrl', function($scope,$http) {
 
  $http.get("http://gemmagazines.net/gemwoman/gem_app_apis/lifestyle.php")
		.success(function (response) {
			$scope.playlists = response.posts;
			console.log($scope.playlists);
		});
		
})

.controller('KPlaylistCtrl', function($scope,$http, $stateParams, $ionicLoading,$cordovaSocialSharing) {
	$ionicLoading.show({
	    template: 'Loading...please wait',
	    animation: 'fade-in',
	    showBackdrop: true,
	    maxWidth: 200,
	    showDelay: 500
	});
	
	$http.get("http://gemmagazines.net/gemkidz/api/get_post/?id="+$stateParams.playlistId)
		.success(function (response) {
			$scope.play = response.post;
			$ionicLoading.hide();
		});
        $scope.share = function() {
            $cordovaSocialSharing.share($scope.play.slug,"GEM",null,$scope.play.url);
        }
})
.controller('MPlaylistCtrl', function($scope,$http, $stateParams, $ionicLoading,$cordovaSocialSharing) {
	$ionicLoading.show({
	    template: 'Loading...please wait',
	    animation: 'fade-in',
	    showBackdrop: true,
	    maxWidth: 200,
	    showDelay: 500
	});
	
	$http.get("http://gemmagazines.net/gemman/api/get_post/?id="+$stateParams.playlistId)
		.success(function (response) {
			$scope.play = response.post; 
			$ionicLoading.hide();
		});
        $scope.share = function() {
            $cordovaSocialSharing.share($scope.play.slug,"GEM",null,$scope.play.url);
        }
		//alert($scope.play);
})
.controller('PlaylistCtrl', function($scope,$http, $stateParams, $ionicLoading,$cordovaSocialSharing) {
	$ionicLoading.show({
	    template: 'Loading...please wait',
	    animation: 'fade-in',
	    showBackdrop: true,
	    maxWidth: 200,
	    showDelay: 500
	});
	
	$scope.comment = false;
	$http.get("http://gemmagazines.net/gemwoman/api/get_post/?id="+$stateParams.playlistId)
		
		.success(function (response) {
			$scope.play = response.post; 
			$ionicLoading.hide();
		});

     $scope.share = function() {
            $cordovaSocialSharing.share($scope.play.slug,"GEM",null,$scope.play.url);
      };
})

.controller('HomeCtrl', function($scope,$http) {
	
	$scope.slides = [
				{ imgurl: "img/sinach.png"},
				{ imgurl: "img/woman1.jpg" },
				{ imgurl: "img/man1.jpg"}
				
			  ];
	
})
.controller('AdCtrl', function($scope,$http) {
	
	$scope.slides = [
					{ imgurl: "img/etisalat_f.png" },
					{ imgurl: "img/fcmb.jpg" },
					{ imgurl: "img/crown.jpg" },

				 ];
})
.controller('mainpageCtrl', function($scope,$http) {
	
	$scope.slides = [
					{ imgurl: "img/etisalat.png" },
					{ imgurl: "img/mainfcmb.jpg" },
					{ imgurl: "img/mainknorr.jpg" },
					
					
				 ];
})
.controller('gemwomanCtrl', function($scope,$http) {
	
	$scope.slides = [
					{ imgurl: "img/mainmtn.jpg" },
					{ imgurl: "img/mainfcmb.jpg" },
					{ imgurl: "img/mainknorr.jpg" }
					
				 ];
})
.controller('gemstoneCtrl', function($scope,$http) {
	
	$scope.slides = [
					{ imgurl: "img/mainmtn.jpg" },
					{ imgurl: "img/mainfcmb.jpg" },
					{ imgurl: "img/mainknorr.jpg" }
					
				 ];
})
.controller('gemmanCtrl', function($scope,$http) {
	
	$scope.slides = [
					{ imgurl: "img/mainmtn.jpg" },
					{ imgurl: "img/mainfcmb.jpg" },
					{ imgurl: "img/mainknorr.jpg" }
					
				 ];
})
.controller('ghaiCtrl', function($scope,$http) {
	
	$scope.slides = [
					{ imgurl: "img/mainmtn.jpg" },
					{ imgurl: "img/mainfcmb.jpg" },
					{ imgurl: "img/mainknorr.jpg" }
					
				 ];
})
.controller('gemkidzCtrl', function($scope,$http) {
	
	$scope.slides = [
					{ imgurl: "img/mainmtn.jpg" },
					{ imgurl: "img/mainfcmb.jpg" },
					{ imgurl: "img/mainknorr.jpg" }
					
				 ];
})
.controller('singleladiesCtrl', function($scope,$http) {
	
	$scope.slides = [
					{ imgurl: "img/mainmtn.jpg" },
					{ imgurl: "img/mainfcmb.jpg" },
					{ imgurl: "img/mainknorr.jpg" }
					
				 ];
})
.controller('PublisherCtrl', function($scope,$http) {
	
	$scope.slides = [
					{ imgurl: "img/mainmtn.jpg" },
					{ imgurl: "img/mainfcmb.jpg" },
					{ imgurl: "img/mainknorr.jpg" }
					
				 ];
})
.controller('ContactCtrl', function($scope,$http) {
	
	$scope.slides = [
					{ imgurl: "img/mainmtn.jpg" },
					{ imgurl: "img/mainfcmb.jpg" },
					{ imgurl: "img/mainknorr.jpg" }
					
				 ];
})
.controller('BssCtrl', function($scope,$http) {
	
	$scope.slides = [
					{ imgurl: "img/mainmtn.jpg" },
					{ imgurl: "img/mainfcmb.jpg" },
					{ imgurl: "img/mainknorr.jpg" }
					
				 ];
});
