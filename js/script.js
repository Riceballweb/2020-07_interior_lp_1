$( document ).ready(function() {


// Chart

var ctx = document.getElementById('salary').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['一居室 60㎡', '二居室 90㎡', '三居室 180㎡', '四居室 350㎡', '獨棟別墅 600㎡'],
        datasets: [{
            label: '新台幣',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [36, 54, 108, 210, 360, ],
            labels: ['1', '2', '33', 'April', 'May', 'June'],
        }]
    },

    // Configuration options go here
    options: {


    }
});

//
// LAZYLOAD
//
  const observer = lozad();
  observer.observe();

//
// Filter Gallery
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


//
// Sliders
//

  $('.namecard').slick({
   arrows: false,
   dots: false,
   infinite: true,
   speed: 300,
   slidesToShow: 1,
   variableWidth: true,
   centerMode: true
  });

  $('.big-gallery').slick({
    centerMode: true,
    arrows: true,
    dots: true,
    centerPadding: '0px',
    slidesToShow: 3,
    infinite: true,

    responsive: [
      {
        breakpoint: 868,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },

    ]
  });

  $('.lazy').slick({
  lazyLoad: 'ondemand',
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
});

$('.feedback-card').slick({
 arrows: false,
 dots: true,
 infinite: true,
 speed: 300,
 slidesToShow: 1,
 variableWidth: true,
 centerMode: true,

});

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

});
