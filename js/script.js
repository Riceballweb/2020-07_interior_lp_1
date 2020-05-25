$( document ).ready(function() {


  $(".filter-button").click(function(){
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

  if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");



  $('[data-fancybox="images"]').fancybox({
      afterLoad : function(instance, current) {
          var pixelRatio = window.devicePixelRatio || 1;

          if ( pixelRatio > 1.5 ) {
              current.width  = current.width  / pixelRatio;
              current.height = current.height / pixelRatio;
          }
      }
  });

  // Namecard
  $('.namecard').slick({
   arrows: false,
   dots: false,
   infinite: true,
   speed: 300,
   slidesToShow: 1,
   variableWidth: true
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
          slidesToShow: 3
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
 dots: false,
 infinite: true,
 speed: 300,
 slidesToShow: 1,
 variableWidth: true,
 centerMode: true
});

});
