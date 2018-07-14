function storyController($scope, $rootScope, menu_service)
{

    $scope.init = (function () {

      new Swiper('.slider-jordan', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        autoplay: 5000,
        loop: true
      });

	    $rootScope.$emit("featured", false);
	    $rootScope.$emit("showback_button", true);
	    window.randomInterstitial();
    })();
}

storyController.$inject = ['$scope', '$rootScope', 'menu_service'];
