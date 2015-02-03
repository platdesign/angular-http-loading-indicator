'use strict';

var ngModule;

try {
	ngModule = angular.module('pd');
} catch(err) {
	ngModule = angular.module('pd', []);
}

module.exports = ngModule;





ngModule.config( require('./config/httpInterceptor.js') );


ngModule.service(
	'httpLoadingIndicatorService',
	require('./services/httpLoadingIndicatorService.js')
);

ngModule.directive(
	'httpLoadingIndicator',
	require('./directives/httpLoadingIndicator.js')
);
