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
  transitions : [{
    name : "fade",
    leave() {

    },
    enter() {
      
    }
  }],
  debug : true
});