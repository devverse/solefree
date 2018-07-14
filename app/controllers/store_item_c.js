function storeItemController($scope, $rootScope, $routeParams, store_service, menu_service) {
  $scope.products = [];
  $scope.page = 10;
  $scope.show_loading = true;
  $scope.type = '';
  $scope.searchStr = '';
  $scope.searcher = {
    "sneakers": {
      name: ["nike sneakers", "adidas sneakers", "ysl sneakers", "mens jordans"],
      class: 'bg-shop-sneakers'
    },
    "clothing": {
      name: ["mens shirts", "stussy shirts", "mens sale shirts", "mens t-shirt", "nba jerseys"],
      class: 'bg-shop-clothes'
    },
    "accessories": {
      name: ["mens sunglasses", "mens backpack", "mens ray ban",  "cologne", "mens watches", "mens wallets"],
      class: 'bg-shop-accessories'
    },
    "sale": {
      name: ["mens sale", "mens sneaker sale", "mens clothing sale"],
      class: 'bg-shop-sales'
    },
  };

  $scope.buyProduct = function(event, product) {
    event.preventDefault();
    window.open(product.clickUrl, '_blank', 'location=yes');
  };

  $scope.getCache = function(functionName) {
    return false;

    var retrievedObject = localStorage.getItem(functionName);
    if (typeof retrievedObject === 'string' || typeof retrievedObject == undefined) {
      $scope.show_loading = false;
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
    $scope.page = 10;
    $scope.searchStr = search;
    $scope.category = $scope.searchStr.replace("_", " ");
    var products = $scope.getCache(search);

    if (products !== false) {
      $scope.products = products;
      $scope.show_loading = false;
    } else {
      $scope.completeSearch(search);
    }
  };

  $scope.completeSearch = function(search) {
    store_service.search(search).then(function(data) {
      $scope.products = data;
      $scope.setCache(search, data);
      $scope.show_loading = false;
    }, function(err) {
      window.console.log(err);
    });
  };

  $scope.sortBy = function(field, reverse, primer) {
    var key = primer ?
      function(x) {
        return primer(x[field])
      } :
      function(x) {
        return x[field]
      };

    reverse = !reverse ? 1 : -1;

    return function(a, b) {
      return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
    }
  }

  $scope.paginate = function() {
    $scope.show_loading = true;
    $scope.page = $scope.page + 20;
    var post = "search=" + $scope.searchStr;
    post += "&offset=" + $scope.page;

    store_service.paginate(post).then(function(data) {
      $scope.show_loading = false;
      $scope.completePaginate(data);
    }, function(err) {
      window.console.log(err);
    });
  }

  $scope.completePaginate = function(data) {
    for (var i = 0; i < data.length; i++) {
      $scope.products.push(data[i]);
    }
  };

  $scope.init = (function() {
    $scope.type = $routeParams.type;

    $rootScope.$emit("showback_button", true);
    $scope.searchStr = $scope.searcher[$scope.type].name;
    $scope.searchStr = $scope.searchStr[Math.floor(Math.random() * $scope.searchStr.length)];
    $scope.searchClass = $scope.searcher[$scope.type].class;
    $scope.search($scope.searchStr);
    menu_service.handleMenu();
    menu_service.handleSwiper();
    window.randomInterstitial();
  })();
}

storeItemController.$inject = ['$scope', '$rootScope', '$routeParams', 'store_service', 'menu_service'];
