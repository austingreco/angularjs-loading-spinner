'use strict';

angular.module( 'spinner', [] )
.factory( 'loadingSpinnerInterceptor', function( $rootScope, $q ) {
	var pendingRequests = 0;
	function pendingRequest( modifier ) {
		pendingRequests += modifier;
		$rootScope.loading = pendingRequests > 0;
	}
	return {
		request: function( config ) {
			pendingRequest( 1 );
			return config || $q.when( config );
		},
		requestError: function( rejection ) {
			pendingRequest( -1 );
			return $q.reject( rejection );
		},
		response: function( response ) {
			pendingRequest( -1 );
			return response || $q.when( response );
		},
		responseError: function( rejection ) {
			pendingRequest( -1 );
			return $q.reject( rejection );
		}
	};
});
