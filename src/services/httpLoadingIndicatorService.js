'use strict';


module.exports = ['$rootScope', function($rootScope){

	function sendEvent(name, arg) {
		$rootScope.$broadcast('httpLoadingIndicator'+name, arg);
	}

	this.status = false;
	this.activeRequests = 0;

	this.stats = {
		requests:0,
		responses:0
	};

	this.stats.__defineGetter__('successes', function() {
		return this.stats.requests - this.stats.errors;
	});

	this.stats.__defineGetter__('errors', function() {
		return this.stats.requests - this.stats.responses;
	});

	this.request = function(/* config */) {
		this.stats.requests++;

		if(this.activeRequests === 0) {
			this.loading();
		}

		this.activeRequests++;
	};

	this.response = function(/* response */) {
		this.stats.responses++;

		this.activeRequests--;

		if(this.activeRequests === 0) {
			this.ready();
		}
	};

	this.responseError = function(response) {
		this.response(response);
		sendEvent('ResponseError', response);
	};

	this.loading = function() {
		this.status = true;
		sendEvent('Status', this.status);
	};

	this.ready = function() {
		this.status = false;
		sendEvent('Status', this.status);
	};

}];
