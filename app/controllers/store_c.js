function storeController($scope, $rootScope, store_service) {
  $scope.app_name = app_name;
  $scope.page_title = page_title;
  $scope.products = [];
  $scope.menu = [];
  $scope.category = "";
  $scope.page = 10;
  $scope.searchStr = "nike";
  $scope.showLoading = true;

  $scope.buyProduct = function(product) {
    window.open(product.clickUrl, '_blank', 'location=yes');
  };

  $scope.getMenu = function() {
    store_service.getMenu().then(function(data) {
      data.sort($scope.sortBy('name', false, function(a){return a.toUpperCase()}))
      $scope.menu = data;
    }, function(err) {
      window.console.log(err);
    });
  };

  $scope.getDefaultItems = function() {
    $scope.completeSearch('adidas sale');
  };

  $scope.getCache = function(functionName) {
    var retrievedObject = localStorage.getItem(functionName);
    if (typeof retrievedObject === 'string' || typeof retrievedObject == undefined) {
      $scope.showLoading = false;
      return JSON.parse(retrievedObject);
    } else {
      return false;
    }
  };

  $scope.setCache = function(functionName, data) {
    localStorage.setItem(functionName, JSON.stringify(data));
  };

  $scope.search = function(search) {
    $scope.products = [];
    $scope.showLoading = true;
    $scope.page = 10;
    $scope.searchStr = search;
    $scope.category = $scope.searchStr.replace("_", " ");
    var products = $scope.getCache(search);

    if (products !== false) {
      $scope.products = products;
      $scope.showLoading = false;
      $scope.$apply();
    } else {
      $scope.completeSearch(search);
    }
  };

  $scope.completeSearch = function(search) {

    $('#content-container').toggleClass('active');
    $('#sidemenu').toggleClass('active');
    setTimeout(function() {
      $('#sidemenu-container').toggleClass('active');
    }, 500);

    store_service.search(search).then(function(data) {
      $scope.products = data;
      $scope.setCache(search, data);
      $scope.showLoading = false;
    }, function(err) {
      window.console.log(err);
    });
  };

  $scope.sortBy = function(field, reverse, primer){
    var key = primer ? 
      function(x) {return primer(x[field])} : 
      function(x) {return x[field]};

    reverse = !reverse ? 1 : -1;

    return function (a, b) {
      return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
    } 
  }

  $scope.paginate = function(){
    $scope.showLoading = true;
    $scope.page = $scope.page + 20;
    var post = "search=" + $scope.searchStr;
    post += "&offset=" + $scope.page;

    store_service.paginate(post).then(function (data) {
      $scope.showLoading = false;
        $scope.completePaginate(data);
    }, function (err) {
        window.console.log(err);
    });
  }

  $scope.completePaginate = function(data) {
    for (var i = 0; i < data.length; i++) {
      $scope.products.push(data[i]);
    }
  };

  $scope.init = (function() {
    $scope.getMenu();
    $scope.getDefaultItems();
    $rootScope.$emit("featured", false);
    $rootScope.$emit("showback_button", true);
    window.removeBannerAd();
    window.randomInterstitial();

    $(".menu-dropdown").change(function() {
      $scope.search(this.value);
    });
  })();
}

storeController.$inject = ['$scope', '$rootScope', 'store_service'];