'use strict';

angular.module( 'test', ['spinner'] )
.config( function( $httpProvider ) {
	$httpProvider.interceptors.push( 'loadingSpinnerInterceptor' );
})
.controller( 'MainCtrl', function( $scope, $http ) {
	$scope.getTweets = function() {
		$http.get( 'http://mtaapi.herokuapp.com/stations' ).then( function( response ) {
			$scope.stations = response.data.result;
		});
	};
});
