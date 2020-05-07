var sugarCaneanimData = {
    container: document.getElementById("sugar-cane-anim"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "sugar-cane-v2-data.json",
  },
  anim,
  tl;

anim = bodymovin.loadAnimation(sugarCaneanimData);
anim.addEventListener("DOMLoaded", function () {
  tl = gsap.timeline();
  tl.to({ frame: 0 }, 1, {
    frame: anim.totalFrames - 1,
    onUpdate: function () {
      anim.gotoAndStop(Math.round(this.target.frame), true);
    },
  });
});

var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
  triggerElement: "#plantpack",
  triggerHook: 0.5,
})
  .setTween(tl)
  .addTo(controller);
