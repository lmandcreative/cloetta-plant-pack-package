// init scrollmagic
var controller = new ScrollMagic.Controller();

// init lottie, load svg json, and declare params
var sugarCaneAnimation = bodymovin.loadAnimation({
  container: document.getElementById("sugar-cane-anim"),
  renderer: "svg",
  loop: true,
  autoplay: false,
  path: "/json/sugar-cane-v3-data.json",
});
var recycleAnimation = bodymovin.loadAnimation({
  container: document.getElementById("recycle"),
  renderer: "svg",
  loop: true,
  autoplay: false,
  path: "/json/recycle-data.json",
});
var earthAnimation = lottie.loadAnimation({
  container: document.getElementById("earth"),
  renderer: "svg",
  loop: true,
  autoplay: false,
  path: "/json/earth_data.json",
});

// init gsap timeline to wrap the lottie animation
// lines that are commented out are from: https://youtu.be/HeY9qGUT3zQ
var sugarCaneControl = gsap.timeline();
var recycleControl = gsap.timeline();
var earthControl = gsap.timeline();
sugarCaneAnimation.addEventListener("DOMLoaded", function () {
  sugarCaneControl.to(
    {
      //frame: 0,
    },
    1,
    {
      //frame: sugarCaneControl.totalFrames - 1,
      onUpdate: function () {
        //sugarCaneAnimation.goToAndStop(Math.round(this.target.frame), true);
        sugarCaneAnimation.play();
      },
      //repeat: -1,
      //yoyo: true,
      //ease:Linear.easeNone
    }
  );
});
// init basic scrollmagic scene
var sugarCaneScene = new ScrollMagic.Scene({
  triggerElement: "#plantpack",
  triggerHook: 0.5,
})
  .setTween(sugarCaneControl)
  .addTo(controller);

recycleControl.to({}, 1, {
  //frame:lottieControl.totalFrames-1,
  onUpdate: function () {
    //lottieAnimation.goToAndStop(Math.round(this.target.frame), true)
    recycleAnimation.play();
  },
  //repeat: -1,
  //yoyo: true,
  //ease:Linear.easeNone
});
// init basic scrollmagic scene
var recycleScene = new ScrollMagic.Scene({
  triggerElement: "#procent",
  triggerHook: 0.5,
})
  .setTween(recycleControl)
  .addTo(controller);

earthControl.to({}, 1, {
  //frame:lottieControl.totalFrames-1,
  onUpdate: function () {
    //lottieAnimation.goToAndStop(Math.round(this.target.frame), true)
    earthAnimation.play();
  },
  //repeat: -1,
  //yoyo: true,
  //ease:Linear.easeNone
});
// init basic scrollmagic scene
var earthScene = new ScrollMagic.Scene({
  triggerElement: "#earth",
  triggerHook: 0.5,
})
  .setTween(earthControl)
  .addTo(controller);
