$( document ).ready(function() {



//Datetimepicker
$.datetimepicker.setLocale('ch');
$('#datetimepicker').datetimepicker({
step: 60,
minDate:'-2020/01/00',
maxDate:'+1970/04/01',
minTime: '10:00',
maxTime: '22:00',
});

// Form
  var $form = $("form.form-distribution");
  loadLocation({
    city: {
      element: $form.find("[name=city]"),
      defaultLabel: "請選縣市",
      errorMessage: "無法載入縣市資料"
    },
    area: {
      element: $form.find("[name=area]"),
      defaultLabel: "請選地區",
      errorMessage: "無法載入地區資料"
    }
  });

  $form
    .submit(function(e) {
      e.preventDefault();
    })
    .validate({
      // debug: true,
      submitHandler: distributionSubmitHandler({
        successMessage: "資料已送出，將安排專人與您聯絡",
        errorMessage: "您輸入的資料有誤或者已輸入過相同資料"
      }),
      rules: {
        name: "required",
        email: { required: true, email: true },
        cellphone: { required: true, cellphone: true },
        city: "required",
        area: "required",
        remark: "required",
        course: "required",
        agreement: "required"
      },
      messages: {
        name: "請輸入您的姓名",
        email: {
          required: "請輸入您的E-mail信箱",
          email: "請輸入有效的E-mail信箱"
        },
        cellphone: {
          required: "請輸入您的聯絡電話",
          cellphone: "請輸入有效的聯絡電話"
        },
        city: "請選擇縣市",
        area: "請選擇地區",
        remark: "請選擇您從哪裡得知資訊",
        course: "請選擇想學課程",
        agreement: "您尚未接受隱私權使用條款"
      }
    });

// Chart

var ctx = document.getElementById('salary').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['一居室 60㎡', '二居室 90㎡', '三居室 180㎡', '四居室 350㎡', '獨棟別墅 600㎡'],
        datasets: [{
            label: '新台幣(萬元)',
            backgroundColor: 'rgb(248, 129, 50)',
            borderColor: 'rgb(16, 61, 101)',
            data: [36, 54, 108, 210, 360, ],
            labels: ['1', '2', '33', 'April', 'May', 'June'],
        }]
    },

    // Configuration options go here
    options: {
        tooltips: {
            enabled: true,
            mode: 'single',
            callbacks: {
                label: function(tooltipItems, data) {
                    return '新台幣：' + tooltipItems.yLabel + '萬元';
                }
            }
        },
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
   autoplay: true,
   autoplaySpeed: 2000,
   dots: false,
   infinite: true,
   speed: 300,
   slidesToShow: 1,
   variableWidth: true,
   centerMode: true,
  });

  $('.big-gallery').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    arrows: true,
    dots: true,
    centerPadding: '0px',
    slidesToShow: 3,
    infinite: true,



    responsive: [
      {
        breakpoint: 1100,
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
  lazyLoad: 'progressive',
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,


});

$('.feedback-card').slick({
 arrows: false,
 autoplay: true,
 autoplaySpeed: 2000,
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
            $('#form-shortcut').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
            $('#form-shortcut').fadeOut();
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
