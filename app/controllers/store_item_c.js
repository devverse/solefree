function storeItemController($scope, $rootScope, $routeParams, store_service, menu_service) {
  $scope.products = [];
  $scope.page = 10;
  $scope.show_loading = true;
  $scope.type = '';
  $scope.searchStr = '';
  $scope.searcher = {
    "sneakers": "nike sneakers",
    "clothing": "mens clothing",
    "accessories": "mens watches",
    "sale": "mens sale"
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
    $scope.searchStr = $scope.searcher[$scope.type];
    $scope.search($scope.searchStr);
    $rootScope.$emit("showback_button", true);
    menu_service.handleMenu();
  })();
}

storeItemController.$inject = ['$scope', '$rootScope', '$routeParams', 'store_service', 'menu_service'];
