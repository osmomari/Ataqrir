    $(".our-btn").click(function(){
		$(".our-btn").toggleClass("close");
		    $(".overlaymnu .our-btn").fadeIn();
            $("body").addClass("overflow-hidden");
            $(".navbar-collapse").css("right", "0");
	});
    $(".overlaymnu .our-btn").click(function(){
            $("body").removeClass("overflow-hidden");
            $(".navbar-collapse").css("right", "-100%");
            $(".overlaymnu .our-btn").toggle();
        });

    $(function () {
      'use strict';
      $(window).scroll(function () {
          var nav = $('.dark')
          var nav2 = $('header .container')
          if ($(window).scrollTop() >= ( nav.height() + nav2.height() )-38 ) {
              nav.addClass('fixed-top')
          }else{
              nav.removeClass('fixed-top')
          }
          if (document.getElementById('wpadminbar')) {
            $(".fixed-top").css({"top": "30px "});
          }
      })
  });

$(document).ready(function(){
    $("#loader-wrapper").fadeOut(2000);
});


    $('.bortaria').owlCarousel({
        //loop: true,
        rtl:true,
        margin: 0,
        autoHeight:true,
        dots: false,
        // autoplay:true,
        // autoplayTimeout:5000,
        autoplayHoverPause:true,
        nav: true,
        navText:['<i class="fas fa-long-arrow-alt-right  bg-danger rounded-circle text-white fs-23p d-flex justify-content-center align-items-center w-35p h-35p"></i>','<i class="fas fa-long-arrow-alt-left bg-black bg-danger rounded-circle text-white fs-23p d-flex justify-content-center align-items-center w-35p h-35p"></i>'],
        items: 1,
    });