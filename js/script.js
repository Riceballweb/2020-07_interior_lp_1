$( document ).ready(function() {
//
//  Back to top btn
//

$(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $('#back-to-top').tooltip('show');


//
//  Gallery
//
  $(".gallery-filter__btn").click(function(){
      var value = $(this).attr('data-filter');

      if(value == "all")
      {
          //$('.filter').removeClass('hidden');
          $('.filter').show('1000');
      }
      else
      {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
          $(".filter").not('.'+value).hide('3000');
          $('.filter').filter('.'+value).show('3000');

      }
  });

  if ($(".gallery-filter__btn").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");




  // Namecard
  $('.namecard').slick({
   arrows: false,
   dots: false,
   infinite: true,
   speed: 300,
   slidesToShow: 1,
   variableWidth: true,
   centerMode: true
  });

  // BigGallery
  $('.big-gallery').slick({
    centerMode: true,
    arrows: true,
    dots: true,
    centerPadding: '0px',
    slidesToShow: 3,
    infinite: true,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.lazy').slick({
  lazyLoad: 'ondemand',
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true
});

$('.feedback-card').slick({
 arrows: false,
 dots: true,
 infinite: true,
 speed: 300,
 slidesToShow: 1,
 variableWidth: true,
 centerMode: true
});

});
