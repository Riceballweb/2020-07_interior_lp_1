$( document ).ready(function() {
  $('.namecard').slick({
   arrows: false,
   dots: false,
   infinite: true,
   speed: 300,
   slidesToShow: 1,
   variableWidth: true
  });

  $('.big-gallery').slick({
    centerMode: true,
    arrows: false,
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

});
