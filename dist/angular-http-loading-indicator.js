/*
@project	angular-http-loading-indicator
@author		Christian Blaschke <mail@platdesign.de>
@version	0.0.1
@created	2015-02-03 18:10:02
*/
!function t(s,e,r){function n(o,u){if(!e[o]){if(!s[o]){var c="function"==typeof require&&require;if(!u&&c)return c(o,!0);if(i)return i(o,!0);var a=new Error("Cannot find module '"+o+"'");throw a.code="MODULE_NOT_FOUND",a}var h=e[o]={exports:{}};s[o][0].call(h.exports,function(t){var e=s[o][1][t];return n(e?e:t)},h,h.exports,t,s,e,r)}return e[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)n(r[o]);return n}({1:[function(t,s){"use strict";var e;try{e=angular.module("pd")}catch(r){e=angular.module("pd",[])}s.exports=e,e.config(t(1)),e.service("httpLoadingIndicatorService",t(3)),e.directive("httpLoadingIndicator",t(2))},{1:2,2:3,3:4}],2:[function(t,s){"use strict";s.exports=["$httpProvider",function(t){t.interceptors.push(["$q","httpLoadingIndicatorService",function(t,s){return{request:function(e){return s.request(e),e||t.when(e)},response:function(e){return s.response(e),e||t.when(e)},responseError:function(e){return s.responseError(e),t.reject(e)}}}])}]},{}],3:[function(t,s){"use strict";s.exports=["httpLoadingIndicatorService",function(t){return{restrict:"A",link:function(s,e){var r="http-loading-active";e.removeClass(r),s.$watch(function(){return t.status},function(t){t===!0?e.addClass(r):e.removeClass(r)})}}}]},{}],4:[function(t,s){"use strict";s.exports=["$rootScope",function(t){function s(s,e){t.$broadcast("httpLoadingIndicator"+s,e)}this.status=!1,this.activeRequests=0,this.stats={requests:0,responses:0},this.stats.__defineGetter__("successes",function(){return this.stats.requests-this.stats.errors}),this.stats.__defineGetter__("errors",function(){return this.stats.requests-this.stats.responses}),this.request=function(){this.stats.requests++,0===this.activeRequests&&this.loading(),this.activeRequests++},this.response=function(){this.stats.responses++,this.activeRequests--,0===this.activeRequests&&this.ready()},this.responseError=function(t){this.response(t),s("ResponseError",t)},this.loading=function(){this.status=!0,s("Status",this.status)},this.ready=function(){this.status=!1,s("Status",this.status)}}]},{}]},{},[1]);