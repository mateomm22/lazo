"use strict";

function _defineProperty(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

function asyncGeneratorStep(e, t, n, a, o, r, i) {
  try {
    var s = e[r](i),
        l = s.value;
  } catch (e) {
    return void n(e);
  }

  s.done ? t(l) : Promise.resolve(l).then(a, o);
}

function _asyncToGenerator(s) {
  return function () {
    var e = this,
        i = arguments;
    return new Promise(function (t, n) {
      var a = s.apply(e, i);

      function o(e) {
        asyncGeneratorStep(a, t, n, o, r, "next", e);
      }

      function r(e) {
        asyncGeneratorStep(a, t, n, o, r, "throw", e);
      }

      o(void 0);
    });
  };
}

function delay() {
  var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 2e3;
  return new Promise(function (e) {
    setTimeout(function () {
      e();
    }, t);
  });
}

function pageLeave() {
  gsap.timeline().to(".main-hero-content", {
    opacity: 0,
    duration: .3,
    ease: "power1.out"
  }).to(".main-hero-img", {
    opacity: 0,
    duration: .3,
    ease: "power1.out"
  }, "-=0.2");
}

function pageEnter() {
  gsap.timeline().from(".main-hero-content", {
    opacity: 0,
    duration: .3,
    ease: "power1.in"
  }).from(".main-hero-img", {
    opacity: 0,
    duration: .3,
    ease: "power1.in"
  }, "-=0.2");
}

barba.init({
  sync: !0,
  transitions: [{
    leave: function leave() {
      var n = this;
      return _asyncToGenerator(regeneratorRuntime.mark(function e() {
        var t;
        return regeneratorRuntime.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                return t = n.async(), pageLeave(), e.next = 4, delay(1e3);

              case 4:
                t();

              case 5:
              case "end":
                return e.stop();
            }
          }
        }, e);
      }))();
    },
    enter: function enter() {
      return _asyncToGenerator(regeneratorRuntime.mark(function e() {
        return regeneratorRuntime.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                pageEnter();

              case 1:
              case "end":
                return e.stop();
            }
          }
        }, e);
      }))();
    },
    once: function once() {
      return _asyncToGenerator(regeneratorRuntime.mark(function e() {
        return regeneratorRuntime.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                pageEnter();

              case 1:
              case "end":
                return e.stop();
            }
          }
        }, e);
      }))();
    }
  }]
});
var initScene,
    nosotrosTl,
    nosotrosMobileTl,
    controller,
    scrollScene,
    initScroll,
    productoSlider,
    allSliderTabs,
    $menuTl = gsap.timeline().add(gsap.to(".js-nav-item", {
  duration: .4,
  left: 0,
  stagger: .12,
  ease: "back.out(1.4)"
})).pause();

function animateEl(e, t, n) {
  var a,
      o = "show" === t ? 1 : 0,
      r = "show" === t ? 0 : "-100%";
  return gsap.timeline().to(e, (_defineProperty(a = {
    duration: .5
  }, n, r), _defineProperty(a, "opacity", o), _defineProperty(a, "ease", "Power2.in"), a));
}

$(".js-open-menu").click(function () {
  $(this).toggleClass("active"), $(this).hasClass("active") ? ($(".js-main-menu").fadeIn("fast"), $menuTl.play()) : $menuTl.reverse().then(function () {
    $(".js-main-menu").fadeOut("fast");
  });
}), $(".js-main-menu a").click(function () {
  $menuTl.reverse().then(function () {
    $(".js-main-menu").fadeOut("fast"), $(".js-open-menu").removeClass("active");
  });
}), $(".js-nosotros-trigger").length && (initScene = function initScene() {
  return new ScrollMagic.Scene().triggerElement(".js-nosotros-trigger").duration("300%").triggerHook(0).offset(-70).setPin(".js-wrap-nosotros").setTween(nosotrosTl).addTo(controller);
}, nosotrosTl = gsap.timeline().add(animateEl(".js-title-1", "hide", "left"), 1).add(animateEl(".js-image-1", "hide", "left"), "-=0.3").add(animateEl(".js-text-1", "hide", "right"), "-=0.3").add(animateEl(".js-title-2", "show", "left")).add(animateEl(".js-image-2", "show", "left"), "-=0.3").add(animateEl(".js-text-2", "show", "right"), "-=0.3").add(animateEl(".js-title-2", "hide", "left"), "<2").add(animateEl(".js-image-2", "hide", "left"), "-=0.3").add(animateEl(".js-text-2", "hide", "right"), "-=0.3").add(animateEl(".js-title-3", "show", "left")).add(animateEl(".js-image-3", "show", "left"), "-=0.3").add(animateEl(".js-text-3", "show", "right"), "-=0.3").add(animateEl(".js-title-3", "show", "left")).add(animateEl(".js-image-3", "show", "left")).add(animateEl(".js-text-3", "show", "right")), nosotrosMobileTl = gsap.timeline().add(animateEl(".js-title-2", "show", "left")).add(animateEl(".js-image-2", "show", "left")).add(animateEl(".js-text-2", "show", "right")).add(animateEl(".js-title-3", "show", "left")).add(animateEl(".js-image-3", "show", "left")).add(animateEl(".js-text-3", "show", "right")).pause(), controller = new ScrollMagic.Controller(), scrollScene = initScene(), initScroll = function initScroll() {
  window.innerWidth < 768 ? (scrollScene.destroy(!0), nosotrosMobileTl.restart()) : document.querySelector("[data-scrollmagic-pin-spacer]") || (nosotrosMobileTl.pause(), nosotrosTl.progress(0), scrollScene = initScene());
}, window.onresize = initScroll, window.onload = initScroll), $(".js-producto-slider").length && (productoSlider = $(".js-producto-slider"), allSliderTabs = $(".js-slider-tab"), productoSlider.slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: !0
}), allSliderTabs.click(function () {
  var e = $(this).data("slide-to");
  productoSlider.slick("slickGoTo", e);
}), productoSlider.on("afterChange", function (e, t, n, a) {
  allSliderTabs.removeClass("active"), $('.js-slider-tab[data-slide-to="' + n + '"]').addClass("active");
}));