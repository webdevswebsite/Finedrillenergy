//body preloader
$(window).on('load',function(){
	setTimeout(function(){ // allowing 3 secs to fade out loader
	$('.page-loader').fadeOut('slow');
	},3500);
});

/*  wsmenu */
  arrow='<span class="wsmenu-click"><i class="wsmenu-arrow bi bi-chevron-down"></i></span>';
  
  $(function() {
    $('#wsnavtoggle')['click'](function() {
      $('.wsmenucontainer')['toggleClass']('wsoffcanvasopener')
    });
    $('.overlapblackbg')['click'](function() {
      $('.wsmenucontainer')['removeClass']('wsoffcanvasopener')
    });
    $('.wsmenu-list> li')['has']('.wsmenu-submenu')['prepend'](arrow);
    $('.wsmenu-list > li')['has']('.megamenu')['prepend'](arrow);
    $('.wsmenu-click')['click'](function() {
      $(this)['toggleClass']('ws-activearrow')['parent']()['siblings']()['children']()['removeClass']('ws-activearrow');
      $('.wsmenu-submenu, .megamenu')['not']($(this)['siblings']('.wsmenu-submenu, .megamenu'))['slideUp']('slow');
      $(this)['siblings']('.wsmenu-submenu')['slideToggle']('slow');
      $(this)['siblings']('.megamenu')['slideToggle']('slow')
    });
    $('.wsmenu-list > li > ul > li')['has']('.wsmenu-submenu-sub')['prepend']('<span class="wsmenu-click02"><i class="wsmenu-arrow bi bi-chevron-down"></i></span>');
    $('.wsmenu-list > li > ul > li > ul > li')['has']('.wsmenu-submenu-sub-sub')['prepend']('<span class="wsmenu-click02"><i class="wsmenu-arrow bi bi-chevron-down"></i></span>');
    $('.wsmenu-click02')['click'](function() {
      $(this)['children']('.wsmenu-arrow')['toggleClass']('wsmenu-rotate');
      $(this)['siblings']('.wsmenu-submenu-sub')['slideToggle']('slow');
      $(this)['siblings']('.wsmenu-submenu-sub-sub')['slideToggle']('slow')
    });
  });
//hero slider
$(document).ready(function(){
  $('.carouselhero').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
});
//project slider
$(document).ready(function(){
  $('.carouselProject').slick({
    autoplay: false,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
		slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});
//partner slider
$(document).ready(function(){
  $('.carouselPartner').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        }
      }
    ]
  });
});
//counter function
var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 8000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }
});
//testimonial slider
$(document).ready(function(){
  $('.carouselTestimonials').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});
/*-------------------------------------
    On Scroll back to top
    -------------------------------------*/
    $(window).on('scroll', function () {

      // Back Top Button
      if ($(window).scrollTop() > 500) {
          $('.scrollup').addClass('back-top');
      } else {
          $('.scrollup').removeClass('back-top');
      }
  });
  // On Click Section Switch
    // used for back-top
    $('[data-type="section-switch"]').on('click', function () {
      if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
        var target = $(this.hash);
        if (target.length > 0) {

          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
