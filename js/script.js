$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    loop: true,
    items: 4,
    autoplay: true,
    autoplayTimeout: 2000,
    pagination: true,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 5
      },
      938: {
        items: 5
      }
    }
  });

  var skillsTopOffset = $('.skillsSection').offset().top;
  $(window).scroll(function() {
    if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
      $('.chart').easyPieChart({
        easing: 'easeInOut',
        barColor: '#fff',
        trackColor: false,
        scaleColor: false,
        lineWidth: 4,
        size: 152,
        onStep: function(from, to, percent) {
          $(this.el)
            .find('.percent')
            .text(Math.round(percent));
        }
      });
    }
  });

  (function() {
    'use strict';

    var items = document.querySelectorAll('.timeline li');

    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add('in-view');
        }
      }
    }

    window.addEventListener('load', callbackFunc);
    window.addEventListener('resize', callbackFunc);
    window.addEventListener('scroll', callbackFunc);
  })();

  $(window).scroll(function() {
    var scroolPosition = $(window).scrollTop();
    if (scroolPosition > 0) {
      $('nav').addClass('myNavScrolled');
    } else {
      $('nav').removeClass('myNavScrolled');
    }
  });

  $(window).scroll(function() {
    var scroolPosition = $(window).scrollTop();
    if (scroolPosition > 0) {
      $('.go-to-top').css('display', 'block');
      $('.scroll-down').css('display', 'none');
    } else if (scroolPosition == 0) {
      $('.go-to-top').css('display', 'none');
      $('.scroll-down').css('display', 'block');
    }
  });

  $('[data-toggle="tooltip"]').tooltip({});

  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (
        location.pathname.replace(/^\//, '') ==
          this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate(
            {
              scrollTop: target.offset().top
            },
            1000
          );
          return false;
        }
      }
    });
  });
});
