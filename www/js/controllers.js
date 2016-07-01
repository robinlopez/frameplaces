angular.module('app.controllers', [])

.controller('loginCtrl', function($scope) {

})

.controller('searchPlacesCtrl', function($scope) {

})

.controller('mapPlacesCtrl', function($scope) {

})

.controller('detailPlacesCtrl', function($scope) {

})

.controller('collectionsCtrl', function($scope) {
  $scope.shouldShowDelete = false;
  $scope.shouldShowReorder = false;
  $scope.listCanSwipe = true
})

.controller('collectionsDetailsCtrl', function($scope) {

})

.controller('newAccountCtrl', function($scope) {

})

.controller('homeCtrl', function($scope, $ionicActionSheet, $timeout) {

  $scope.go = function ( path ) {
    $location.path( path );
  };

  // Triggered on a button click, or some other target
  $scope.showActionsheet = function() {

    // Show the action sheet
    var hideSheet = $ionicActionSheet.show({
      buttons: [
        { text: 'Bibliothèque' },
        { text: 'Nouvelle photo' }
      ],
      titleText: 'NOUVEAU LIEU',

      buttonClicked: function(index) {
        return true;
      }
    });
  };

})
