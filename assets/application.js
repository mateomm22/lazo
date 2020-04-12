// Put your applicaiton javascript here


// window.addEventListener('DOMContentLoaded', function(){
//   var myWave = wavify( document.querySelector('.wave-one'), {
//     height: 80,
//     bones: 8,
//     amplitude: 20,
//     color: 'rgba(254, 227, 153, 1)',
//     speed: .15
//   })


//   var myWave2 = wavify( document.querySelector('.wave-two'), {
//     height: 80,
//     bones: 8,
//     amplitude: 20,
//     color: 'rgba(121, 202, 221, 1)',
//     speed: .12
//   })
// })


barba.init({
  transitions: [{
    name: "fade",
    leave() {

    },
    enter() {

    }
  }],
  debug: true
});





if ( $('.producto-slider-big').length ) {
  var $slider = $('.producto-slider-big')
      .on('init', function(slick) {
          $('.producto-slider-big').fadeIn(1000);
      })
      .slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          autoplay: true,
          lazyLoad: 'ondemand',
          autoplaySpeed: 3000,
          asNavFor: '.producto-slider-small'
      });

var $slider2 = $('.producto-slider-small')
      .on('init', function(slick) {
          $('.producto-slider-small').fadeIn(1000);
      })
      .slick({
          slidesToShow: 5,
          slidesToScroll: 1,
          lazyLoad: 'ondemand',
          asNavFor: '.producto-slider-big',
          dots: false,
          centerMode: false,
          focusOnSelect: true
      });

//remove active class from all thumbnail slides
$('.producto-slider-small .slick-slide').removeClass('slick-active');

//set active class to first thumbnail slides
$('.producto-slider-small .slick-slide').eq(0).addClass('slick-active');

// On before slide change match active thumbnail to current slide
$('.producto-slider-big').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
var mySlideNumber = nextSlide;
$('.producto-slider-small .slick-slide').removeClass('slick-active');
$('.producto-slider-small .slick-slide').eq(mySlideNumber).addClass('slick-active');
});
$("#producto .producto-slider-right .slick-track ").height($(".producto-slider-big > div").height());


}
