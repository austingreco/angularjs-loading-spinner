'use strict';

describe('Spinner interceptor', function() {

	var $httpBackend, $rootScope, $http, $httpProvider, $timeout;

	beforeEach(module('spinner', function(_$httpProvider_) {
		$httpProvider = _$httpProvider_;
		$httpProvider.interceptors.push('loadingSpinnerInterceptor');
	}));

	beforeEach(inject(function(_$httpBackend_, _$rootScope_, _$http_, _$timeout_) {
		$httpBackend = _$httpBackend_;
		$rootScope = _$rootScope_;
		$http = _$http_;
		$timeout = _$timeout_;
	}));

	it('should be injected', inject(function(loadingSpinnerInterceptor) {
		expect(loadingSpinnerInterceptor).toBeDefined();
	}));

	it('should be in the interceptors array', function() {
		expect($httpProvider.interceptors).toContain('loadingSpinnerInterceptor');
	});

	it('should not be loading by default', function() {
		expect($rootScope.loading).toBeFalsy();
	});

	it('should be loading during requests', function() {
		$httpBackend.expectGET('test.json').respond('ok');
		$http.get('test.json');
		$timeout.flush();
		expect($rootScope.loading).toBeTruthy();
		$httpBackend.flush();
	});

	it('should not be loading when request completes', function() {
		$httpBackend.expectGET('test.json').respond('ok');
		$http.get('test.json');
		$httpBackend.flush();
		$timeout.flush();
		expect($rootScope.loading).toBeFalsy();
	});

	it('should not be loading when request fails', function() {
		$httpBackend.expectGET('test.json').respond(500, '');
		$http.get('test.json');
		$httpBackend.flush();
		$timeout.flush();
		expect($rootScope.loading).toBeFalsy();
	});
});