// init scrollmagic
var controller = new ScrollMagic.Controller();

// init lottie, load svg json, and declare params
var lottieAnimation = lottie.loadAnimation({
  container: document.getElementById("sugar-cane-anim"),
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "../sugar-cane-data.json",
});

// init gsap timeline
//var tl = new TimelineLite();
// declare tween animations
//tl.to(".red", 1, { x: 300 }).to(".blue", 1, { x: 300 });

// init basic scrollmagic scene for debug purpouses
var scene = new ScrollMagic.Scene({
  triggerElement: "#plantpack",
  triggerHook: 0.15,
})
  //.addIndicators({ name: "tl trigger indicator" })
  //.setTween(tl)
  .addTo(controller);

// init gasp timeline to wrap the lottie animation
// lines that are commented out are from: https://youtu.be/HeY9qGUT3zQ
var lottieControl = gsap.timeline(); //gsap 3
lottieControl.to(
  {
    frame: 0,
  },
  1,
  {
    //frame:lottieControl.totalFrames-1,
    onUpdate: function () {
      //lottieAnimation.goToAndStop(Math.round(this.target.frame), true)
      lottieAnimation.play();
    },
    repeat: -1,
    //yoyo: true,
    //ease: Linear.easeNone,
  }
);

// init basic scrollmagic scene for debug purpouses
/*var lottieScene = new ScrollMagic.Scene({
  triggerElement: "#plantpack",
  triggerHook: 0.25,
})
  //.addIndicators({ name: "lottie trigger indicator" })
  .setTween(lottieControl)
  .addTo(controller);*/
