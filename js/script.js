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
});
