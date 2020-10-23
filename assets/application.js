let $windowWidth = $(window).width() + 15;

function initScripts() {
  /**
   * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
   * ·······  Open Menu
   * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
   **/
  const $menuTl = gsap.timeline().add(
    gsap.to(".js-nav-item", {
      duration: 0.4,
      left: 0,
      stagger: 0.12,
      ease: "back.out(1.4)"
    })
  ).pause();


  $('.js-open-menu').click(function() {

    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $('.js-main-menu').fadeIn('fast');
      $menuTl.play();
    } else {
      $menuTl.reverse().then(function() {
        $('.js-main-menu').fadeOut('fast')
      });
    }
  });

  $('.js-main-menu a').click(function() {
    $menuTl.reverse().then(function() {
      $('.js-main-menu').fadeOut('fast')
      $('.js-open-menu').removeClass('active');
    });
  });



  /**
   * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
   * ·······  Waves
   * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
   **/
  if($('.js-wave').length > 0) {    
    const waves1 = document.querySelectorAll('.js-wave');

    waves1.forEach(wave => {
      const warp = new Warp(wave);
      let offset = 0;
    
      warp.interpolate(10);
      warp.transform(([ x, y ]) => [ x, y, y ]);
    
      function animateWaves() {
        warp.transform(([ x, y, oy ]) => [ x, oy + 4 * Math.sin(x / 90 + offset), oy ]);
        offset -= 0.07;
        requestAnimationFrame(animateWaves);
      };
    
      animateWaves();
    })
  }

  if($('.js-wave2').length > 0) {

    const waves2 = document.querySelectorAll('.js-wave2');

    waves2.forEach(wave => {
      const warp = new Warp(wave);
      let offset = 0;
    
      warp.interpolate(10);
      warp.transform(([ x, y ]) => [ x, y, y ]);
    
      function animateWaves2() {
        warp.transform(([ x, y, oy ]) => [ x, oy + 5 * Math.sin(x / 92 + offset), oy ]);
        offset += 0.07;
        requestAnimationFrame(animateWaves2);
      };
    
      animateWaves2();
    })
  }
  
  // Boton comprar
  if($('.js-wave--small').length > 0) {
    const wavesSmall = document.querySelectorAll('.js-wave--small');

    wavesSmall.forEach(wave => {
      const warp = new Warp(wave);
      let offset = 0;
    
      warp.interpolate(5);
      warp.transform(([ x, y ]) => [ x, y, y ]);
    
      function animateWaves() {
        warp.transform(([ x, y, oy ]) => [ x, oy + 2 * Math.sin(x / 90 + offset), oy ]);
        offset += 0.07;
        requestAnimationFrame(animateWaves);
      };
    
      animateWaves();
    })
  }

  /**
   * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
   * ·······  Destacado  page
   * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
   **/

  if ( $('.js-destacado-slider').length ) {
    const productoSlider = $('.js-destacado-slider');
    const allSliderTabs = $('.js-slider-tab');

    productoSlider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<div class="slick-arrow slick-arrow--prev"><i class="icon-arrow-left"></i></div>',
      nextArrow: '<div class="slick-arrow slick-arrow--next"><i class="icon-arrow-right"></i></div>',
    });


    allSliderTabs.click(function() {
      const targetSlide = $(this).data('slide-to');
      productoSlider.slick('slickGoTo', targetSlide);
    })

    productoSlider.on('afterChange', function(e, slick, current, next){
      allSliderTabs.removeClass('active');
      $('.js-slider-tab[data-slide-to="' + current + '"]').addClass('active');
    });
  }


  /**
   * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
   * ·······  Product page
   * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
   **/
  // Add to cart
  let productQuantity = 1;

  function updateQuantity() {
    $('.js-quantity').text(productQuantity);
  }

  $('.js-add').click(function() {
    productQuantity += 1;
    updateQuantity();
  });

  $('.js-remove').click(function() {
    if (productQuantity > 1) {
      productQuantity -= 1;
    }
    updateQuantity();
  });

  $('.js-add-to-cart').click(function() {
    document.getElementById("quantity").value = productQuantity;
  });

  // Open specs and observations
  $('.js-product-detail').click(function(){
    $('.js-product-detail').not($(this)).find('.js-content').slideUp();
    $(this).find('.js-content').slideToggle();

    // change icon
    $('.js-product-detail').not($(this)).removeClass('active');
    $(this).toggleClass('active');
  });


  /**
   * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
   * ·······  Cart page
   * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
   **/
  // Add to cart
  let cartProductQuantity = parseInt($('.js-items').val());

  function updateCartQuantity() {
    $('.js-quantity-cart').text(cartProductQuantity);
    $('.js-items').val(cartProductQuantity);
  }

  $('.js-add-cart').click(function() {
    cartProductQuantity += 1;
    updateCartQuantity();
  });

  $('.js-remove-cart').click(function() {
    if (cartProductQuantity > 0) {
      cartProductQuantity -= 1;
    }
    updateCartQuantity();
  });

  // $('.js-add-to-cart').click(function() {
  //   document.getElementById("quantity").value = cartProductQuantity;
  // });


  /**
   * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
   * ·······  Mask svg effect
   * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
   **/

  // Autores Shapes
  if($('.mask-path-2').length > 0) {
    gsap.timeline({
      defaults: {
        transformOrigin: "50% 50%",
        yoyo: true,
        repeat: -1,
        yoyoEase: "linear"
      }
    })
    .to('.mask-path-2', {
      rotate: '-10deg',
      duration: 8,
    })
    .to('.mask-path-2', {
      scale: 0.95,
      duration: 8,
    }, '<');
  }

  // Contact shape
  if($('.mask-path-3').length > 0) {
    gsap.timeline({
      defaults: {
        transformOrigin: "50% 50%",
        yoyo: true,
        repeat: -1,
        yoyoEase: "linear"
      }
    })
    .to('.mask-path-3', {
      rotate: '12deg',
      duration: 8,
    })
    .to('.mask-path-3', {
      scale: 0.95,
      duration: 6,
    }, '<');
  }

  // Contact shape
  if($('.mask-path-4').length > 0) {
    gsap.timeline({
      defaults: {
        transformOrigin: "50% 50%",
        yoyo: true,
        repeat: -1,
        yoyoEase: "linear"
      }
    })
    .to('.mask-path-4', {
      rotate: '10deg',
      duration: 12,
    })
    .to('.mask-path-4', {
      scale: 0.95,
      duration: 6,
    }, '<');
  }
}

/**
 * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
 * ·······  Nosotros Scripts
 * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
 **/
function initNosotros() {
  gsap.registerPlugin(ScrollTrigger);

  const fadeTl = gsap.timeline()
  .to('.js-title-1, .js-image-1', {
    opacity: 0,
    duration: 0.5
  }, '+=2.5')
  .to('.js-title-2, .js-image-2', {
    opacity: 1,
    duration: 0.5
  }, '-=0.15')
  .to('.js-title-2, .js-image-2', {
    opacity: 0,
    duration: 0.5
  }, '+=2.3')
  .to('.js-title-3, .js-image-3', {
    opacity: 1,
    duration: 0.5
  }, '-=0.15')
  .to('.js-title-3, .js-image-3', {
    opacity: 1,
    duration: 1
  });

  
  ScrollTrigger.matchMedia({
    "(min-width: 992px)": function() {
      ScrollTrigger.create({
        animation: fadeTl,
        trigger: '.js-wrap-nosotros',
        pin: '.js-nosotros-left',
        scrub: true,
        start: 'top 35px',
        end: '60% top',
        toggleActions: "play complete resume reset",
      });
    }
  });

  
}

/**
 * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
 * ·······  Reload if resize
 * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
 **/
$(window).on('load resize', function () {
  var isReloaded = localStorage.getItem('reloaded');
  $windowWidth = $(this).width() + 15;

  if($windowWidth < 768){
    if (isReloaded === 'No') {
      window.location.reload();
    }
    localStorage.setItem('reloaded', 'Yes');
  }
   else {
    if (isReloaded === 'Yes') {
      window.location.reload();
    }
    localStorage.setItem('reloaded', 'No');
  }
});

/**
 * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
 * ·······  Barba Config
 * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
 **/
function overlay(bgColor) {
  gsap.timeline()
  .set('.animated', {
    backgroundColor: bgColor
  })
  .to('.animated', {
    duration: 0.75,
    scaleY: 1,
    ease: 'power2.out'
  });
}

function pageLeave() {
  gsap.timeline()
  .to('.main-hero-content, .hero-link', {
    opacity: 0,
    duration: 0.3,
    ease: "power1.out"
  })
  .to('.main-hero-img', {
    opacity: 0,
    duration: 0.3,
    ease: "power1.out"
  }, "-=0.2");
}

function pageEnter() {
  gsap.timeline()
  .from('.main-hero-content, .hero-link', {
    opacity: 0,
    duration: 0.3,
    ease: "power1.in"
  }, '+=0.5')
  .from('.main-hero-img', {
    opacity: 0,
    duration: 0.3,
    ease: "power1.in"
  }, "-=0.2");
}

function delay(n = 2000) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, n);
  });
}

function setActiveMenu(page) {
  $('.js-nav-item a').removeClass('current');

  if($(`.js-nav-item a[data-page="${page}"]`).length > 0)
    $(`.js-nav-item a[data-page="${page}"]`).addClass('current');
}

barba.init({
  transitions: [{

    // Leave current page
    leave(data) {
      const done = this.async();

      pageLeave();
      delay(600).then(() => {
        done();
      });
    },

    afterLeave(data) {
      const done = this.async();
      setActiveMenu(data.next.namespace);

      let bgColor;
      switch (data.next.namespace) {
        case 'inicio':
        case 'blog':
          // Blue
          bgColor = '#79cadd';
          break;

        case 'nosotros':
        case 'contacto':
          // Yellow
          bgColor = '#ffcd67';
          break;

        case 'libros':
          // Red
          bgColor = '#eea78e';
          gsap.timeline()
            .set('.animated', {
              height: '60vh'
            });
          break;

        case 'single-blog':
          setActiveMenu('blog');
          break;

        default:
          bgColor = '#ffffff';
          break;
      }

      overlay(bgColor);
      delay(900).then(() => {
        done();
      });
    },
    // Enter new page
    enter(data) {
      window.scrollTo(0, 0);
      pageEnter();
    },
    // If page is reloaded
    once(data) {
      window.scrollTo(0, 0);
      pageEnter();
    }

  }]
});

// barba.hooks.beforeEnter(() => {
//   window.scrollTo(0, 0);
// });

barba.hooks.after((data) => {
  switch (data.next.namespace) {
    case 'nosotros':
      initNosotros();
      initScripts();
      break;
    default:
      initScripts();
      break;
  }
});

barba.hooks.afterOnce((data) => {
  switch (data.next.namespace) {
    case 'nosotros':
      initNosotros();
      initScripts();
      break;
    default:
      initScripts();
      break;
  }
});
