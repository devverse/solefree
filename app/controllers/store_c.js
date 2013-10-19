var soleinsiderApp = angular.module('soleinsiderApp', []);

soleinsiderApp.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
}]);

function storeController($scope, $rootScope, store_service)
{
    $scope.app_name = app_name;
    $scope.page_title = page_title;
    $scope.products = [];
    $scope.category = "Sole Insider Store";

    $scope.getMenu = function(){
        store_service.getMenu().then(function (data) {
            data.sort(orderByNameAscending);
            $scope.menu = data;
        }, function (err) {
            window.console.log(err);
        });
    };

    $scope.getItems = function(){

    };

    $scope.getDefaultItems = function(){
        store_service.getDefaultItems().then(function (data) {
            $scope.products = data;
        }, function (err) {
            window.console.log(err);
        });
    };

     $scope.getCache = function(functionName){
        
        var retrievedObject = localStorage.getItem(functionName);

        if (typeof retrievedObject === 'string' || typeof retrievedObject == undefined){
          return JSON.parse(retrievedObject);
        } else{
            return false;
        }
    };


    $scope.setCache = function(functionName,data){
      localStorage.setItem(functionName, JSON.stringify(data));
    };

    $scope.search = function(search){

        $scope.category = search;
        var products = $scope.getCache(search);
            
        if (products !== false){
            $scope.products = products;
            $('#content-container').toggleClass('active');
            $('#sidemenu').toggleClass('active');
            setTimeout(function() {
                $('#sidemenu-container').toggleClass('active');
            }, 500);
        } else{
            $scope.completeSearch(search);
        }
    };

    $scope.completeSearch = function(search){
        store_service.search(search).then(function (data) {
            $scope.products = data;
            $scope.setCache(search,data);
            $('#content-container').toggleClass('active');
            $('#sidemenu').toggleClass('active');
            setTimeout(function() {
                $('#sidemenu-container').toggleClass('active');
            }, 500);
        }, function (err) {
            window.console.log(err);
        });
    };

     function orderByNameAscending(a,b){
        if (a.name == b.name) {
            return 0;
        } else if (a.name > b.name) {
            return 1;
        }

        return -1;
    };

    $scope.init = (function ()
    {
        $scope.getMenu();
        $scope.getDefaultItems();
    })();
}