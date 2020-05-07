// init scrollmagic

var controller = new ScrollMagic.Controller();
var select = function (s) {
    return document.querySelector(s);
  },
  selectAll = function (s) {
    return document.querySelectorAll(s);
  },
  sugarcane = select("#sugar-cane-anim"),
  animData = {
    wrapper: sugarcane,
    animType: "svg",
    loop: true,
    prerender: true,
    autoplay: true,
    path: "sugar-cane-data.json",
    rendererSettings: {
      //context: canvasContext, // the canvas context
      //scaleMode: 'noScale',
      //clearCanvas: false,
      //progressiveLoad: false, // Boolean, only svg renderer, loads dom elements when needed. Might speed up initialization for large number of elements.
      //hideOnTransparent: true //Boolean, only svg renderer, hides elements when opacity reaches 0 (defaults to true)
    },
  },
  anim,
  tl;

var recycle = select("#recycle"),
  animData2 = {
    wrapper: recycle,
    animType: "svg",
    loop: true,
    prerender: true,
    autoplay: true,
    path: "recycle-data.json",
    rendererSettings: {
      //context: canvasContext, // the canvas context
      //scaleMode: 'noScale',
      //clearCanvas: false,
      //progressiveLoad: false, // Boolean, only svg renderer, loads dom elements when needed. Might speed up initialization for large number of elements.
      //hideOnTransparent: true //Boolean, only svg renderer, hides elements when opacity reaches 0 (defaults to true)
    },
  },
  anim,
  tl;

anim = bodymovin.loadAnimation(animData);
anim2 = bodymovin.loadAnimation(animData2);
anim.addEventListener("DOMLoaded", onDOMLoaded);
anim2.addEventListener("DOMLoaded", onDOMLoaded);
anim.setSpeed(1);
anim2.setSpeed(1);

function onDOMLoaded(e) {
  //anim.addEventListener("complete", function () {});
  tl = gsap.timeline({ repeat: -1 });
  tl.to({ frame: 0 }, 7, {
    frame: anim.totalFrames - 1,
    onUpdate: function () {
      anim.goToAndStop(Math.round(this.target.frame), true);
    },
  });
}
