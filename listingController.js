angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.newListing = undefined; // create new variable to hold the contents of the new listing

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */
    $scope.addListing = function(newListing) {

      /*
        Function to add a new listing item to the list
      */

      // pushes the new listing to the list
        if($scope.newListing != '' && $scope.newListing != null &&  $scope.newListing != undefined) {
            $scope.listings.push($scope.newListing);
        }
      //resets the value of the new listing
         $scope.newListing = '';
    };
    $scope.deleteListing = function(name) {

      /*
        Function to remove a listing from the list
      */

      var index = -1;
      var entries = eval($scope.listings);

      for(var i = 0; i < entries.length; i++) { // loop through list of names
        if(entries[i].name === name) {
          index = i;
          break;
        }
      }
      if(index != -1) { // If we found the name, delete it
        $scope.listings.splice(index, 1);
      }
    };
    $scope.showDetails = function(index) {

      /*
         This function shows the details of each listing.
      */

      // Set detailed info equal to the element clicked on
      $scope.detailedInfo = $scope.listings[index];


    };
  }
]);
