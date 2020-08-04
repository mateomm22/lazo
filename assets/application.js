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
    $('.js-wave').wavify({
      height: 20,
      bones: 4,
      amplitude: 30,
      speed: .15
    });
  }

  if($('.js-wave2').length > 0) {
    $('.js-wave2').wavify({
      height: 20,
      bones: 5,
      amplitude: 25,
      speed: .13
    });
  }

  if($('.js-wave--small').length > 0) {
    $('.js-wave--small').wavify({
      height: 5,
      bones: 7,
      amplitude: 8,
      speed: .13
    });
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
  let productQuantity = 1;

  function updateQuantity() {
    $('.js-quantity').text(productQuantity);
  }

  $('.js-add').click(function() {
    productQuantity += 1;
    updateQuantity();
  });

  $('.js-remove').click(function() {
    if (productQuantity > 0) {
      productQuantity -= 1;
    }
    updateQuantity();
  });

  $('.js-add-to-cart').click(function() {
    document.getElementById("quantity").value = productQuantity;
  });


  /**
   * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
   * ·······  Mask svg effect
   * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
   **/
  gsap.timeline()
  .to('.mask-path', {
    rotate: '30deg',
    scale: 1.02,
    duration: 12,
    transformOrigin:"50% 50%",
    yoyo : true,
    repeat: -1,
    yoyoEase: "linear",
  });

  gsap.timeline()
  .to('.mask-path-2', {
    rotate: '-10deg',
    scale: 1.02,
    duration: 12,
    transformOrigin:"50% 50%",
    yoyo : true,
    repeat: -1,
    yoyoEase: "linear",
  });

  gsap.timeline()
  .to('.mask-path-2a', {
    rotate: '-15deg',
    scale: 1.02,
    duration: 10,
    transformOrigin:"50% 50%",
    yoyo : true,
    repeat: -1,
    yoyoEase: "linear",
  });
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
    duration: 0.3
  }, '+=1.2')
  .to('.js-title-2, .js-image-2', {
    opacity: 1,
    duration: 0.3
  }, '-=0.15')
  .to('.js-title-2, .js-image-2', {
    opacity: 0,
    duration: 0.3
  }, '+=2.3')
  .to('.js-title-3, .js-image-3', {
    opacity: 1,
    duration: 0.3
  }, '-=0.15')
  .to('.js-title-3, .js-image-3', {
    opacity: 1,
    duration: 1
  });

  const scrollTl = gsap.timeline()
  .to('.js-text-1', {
    translateY: '-100%',
    duration: 0.3
  })
  .to('.js-text-2', {
    translateY: '-100%',
    duration: 0.9
  }, '-=0.25')
  .to('.js-text-3', {
    translateY: '0',
    duration: 0.6
  }, '-=0.5');

  ScrollTrigger.create({
    animation: fadeTl,
    trigger: '.js-wrap-nosotros',
    pin: true,
    scrub: true,
    start: 'top 50px',
    end: 'bottom 50px',
    markers: true,
  })

  ScrollTrigger.create({
    animation: scrollTl,
    trigger: '.js-wrap-nosotros',
    pin: true,
    scrub: true,
    start: 'top 50px',
    end: 'bottom 50px',
    markers: true,
  })
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
        case 'home':
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
      pageEnter();
    },
    // If page is reloaded
    once(data) {
      pageEnter();
    }

  }]
});

barba.hooks.beforeEnter(() => {
  window.scrollTo(0, 0);
});

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
