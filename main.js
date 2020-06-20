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

const nosotrosMobileTl = gsap.timeline()
  .add(animateEl('.js-title-2', 'show', 'left'))
  .add(animateEl('.js-image-2', 'show', 'left'))
  .add(animateEl('.js-text-2', 'show', 'right'))
  .add(animateEl('.js-title-3', 'show', 'left'))
  .add(animateEl('.js-image-3', 'show', 'left'))
  .add(animateEl('.js-text-3', 'show', 'right'))
  .pause();


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
  const windowW = window.innerWidth;
  
  if (windowW < 768) {
    scrollScene.destroy(true);
    nosotrosMobileTl.restart();
  } else if (!document.querySelector('[data-scrollmagic-pin-spacer]')) {
    nosotrosMobileTl.pause();
    nosotrosTl.progress(0);
    scrollScene = initScene();
  }
};

window.onresize = initScroll;
window.onload = initScroll;

