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
   * ·······  Nosotros scroll Effect
   * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
   **/
  function animateEl ($element, $action, $direction) {
    const $opacity = ($action === 'show') ? 1 : 0;
    const $movement = ($action === 'show') ? 0 : '-100%';
  
    return gsap.timeline().to($element, {
      duration: 0.5,
      [$direction]: $movement,
      opacity: $opacity,
      ease: 'Power2.in',
    });
  }
  
  
  if ( $('.js-nosotros-trigger').length ) {
    const nosotrosTl = gsap.timeline()
      .add(animateEl('.js-title-1', 'hide', 'left'), 1)
      .add(animateEl('.js-image-1', 'hide', 'left'), '-=0.3')
      .add(animateEl('.js-text-1', 'hide', 'right'), '-=0.3')
      .add(animateEl('.js-title-2', 'show', 'left'))
      .add(animateEl('.js-image-2', 'show', 'left'), '-=0.3')
      .add(animateEl('.js-text-2', 'show', 'right'), '-=0.3')
      .add(animateEl('.js-title-2', 'hide', 'left'), '<2')
      .add(animateEl('.js-image-2', 'hide', 'left'), '-=0.3')
      .add(animateEl('.js-text-2', 'hide', 'right'), '-=0.3')
      .add(animateEl('.js-title-3', 'show', 'left'))
      .add(animateEl('.js-image-3', 'show', 'left'), '-=0.3')
      .add(animateEl('.js-text-3', 'show', 'right'), '-=0.3')
      .add(animateEl('.js-title-3', 'show', 'left'))
      .add(animateEl('.js-image-3', 'show', 'left'))
      .add(animateEl('.js-text-3', 'show', 'right'));
  
    // init controller
    var controller = new ScrollMagic.Controller();
  
    function initScene() {
      return new ScrollMagic.Scene()
      .triggerElement('.js-nosotros-trigger')
      .duration('300%')
      .triggerHook(0)
      .offset(-70)
      .setPin('.js-wrap-nosotros')
      .setTween(nosotrosTl)
      .addTo(controller);
    }
  
    var scrollScene = initScene();
  
    const initScroll = function(event) {
      $windowWidth = $(window).width() + 15;
      
      if ($windowWidth < 768) {
        scrollScene.destroy(true);
      } else if (!document.querySelector('[data-scrollmagic-pin-spacer]')) {
        nosotrosTl.progress(0);
        scrollScene = initScene();
      }
    };
  
    window.onresize = initScroll;
    window.onload = initScroll;
  }
  
  
  /**
   * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
   * ·······  Producto page
   * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
   **/
  
  if ( $('.js-producto-slider').length ) {
    const productoSlider = $('.js-producto-slider');
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
}


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
    duration: 1,
    scaleY: 1,
    ease: 'bounce.out'
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
      console.log(data.next.namespace);
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
          })
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

barba.hooks.after(() => {
  initScripts();
});

barba.hooks.afterOnce(() => {
  initScripts();
});
