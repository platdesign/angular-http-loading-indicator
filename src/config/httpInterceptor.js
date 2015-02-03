'use strict';

module.exports = ['$httpProvider', function($httpProvider) {

	$httpProvider.interceptors.push([
		'$q',
		'httpLoadingIndicatorService',
		function($q, httpLoadingIndicatorService) {

			return {
				request: function(config) {
					httpLoadingIndicatorService.request(config);
					return config || $q.when(config);
				},
				response: function(response) {
					httpLoadingIndicatorService.response(response);
					return response || $q.when(response);
				},
				responseError: function(response) {
					httpLoadingIndicatorService.responseError(response);
					return $q.reject(response);
				}
			};

		}
	]);

}]
