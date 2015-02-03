'use strict';


module.exports = ['httpLoadingIndicatorService', function(httpLoadingIndicatorService) {
	return {
		restrict: 'A',
		link: function(scope, el) {
			var activeClassName = 'http-loading-active';

			el.removeClass(activeClassName);

			scope.$watch(function() {
				return httpLoadingIndicatorService.status;
			}, function(a) {

				if(a === true) {
					el.addClass( activeClassName );
				} else {
					el.removeClass( activeClassName );
				}

			});
		}
	};
}];
