/*global angular:true, MN: true, accountcontroller:true, specialtycontroller:true, themecontroller:true, servicescontroller:true, locationscontroller:true, emrcontroller:true, insurancecontroller:true, policycontroller:true, doctorscontroller:true, staffcontroller: true, sloganscontroller:true, logocontroller:true, billingcontroller:true, specialtycontroller:true, bannerimageController:true, sitemapcontroller:true */


var soleinsiderApp = angular.module('soleinsiderApp', []).
		config(['$routeProvider', function ($routeProvider) {
			"use strict";

				$routeProvider.when('/', {
					templateUrl: admin_url + 'partials/releases.html',
					controller: releasesController
				}).

				when('/releases', {
					templateUrl: admin_url + 'partials/releases.html',
					controller: releasesController
				}).

				when('/past_releases', {
					templateUrl: admin_url + 'partials/past_releases.html',
					controller: pastReleasesController
				}).

				when('/restock_history', {
					templateUrl: admin_url + 'partials/past_restocks.html',
					controller: pastRestocksController
				}).
				
				when('/restocks', {
					templateUrl: admin_url + 'partials/restocks.html',
					controller: restocksController
				}).

				when('/myrestocks', {
					templateUrl: admin_url + 'partials/myrestocks.html',
					controller: myRestocksController
				}).

				when('/myreleases', {
					templateUrl: admin_url + 'partials/myreleases.html',
					controller: myReleasesController
				}).

				when('/avail', {
					templateUrl: admin_url + 'partials/still_avail.html',
					controller: availController	
				}).

				when('/account', {
					templateUrl: admin_url + 'partials/account.html',
					controller: accountController
				}).

				when('/login', {
					templateUrl: admin_url + 'partials/login.html',
					controller: loginController
				}).

				when('/coupons', {
					templateUrl: admin_url + 'partials/coupons.html',
					controller: couponsController
				}).

				when('/twitter', {
					templateUrl: admin_url + 'partials/twitter.html',
					controller: twitterController
				}).

				when('/sales', {
					templateUrl: admin_url + 'partials/sales.html',
					controller: salesController
				});



		

			//.otherwise({redirectTo:'/home'});
		}]);

soleinsiderApp.config(['$httpProvider', function ($httpProvider) {
	"use strict";
	$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
}]);

