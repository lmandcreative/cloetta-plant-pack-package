var controller = new ScrollMagic.Controller();

var tl = gsap.timeline({ repeat: 2, repeatDelay: 4 });

//tl.to("#earth", 1, { rotation: 360, ease: "power3.inOut", delay: 0.5 });
tl.to(".arrow-link", 0.5, { y: -15, ease: "expo" });
tl.to(".arrow-link", 0.5, { y: 0, ease: "expo" });
//tl.to("#earth", 1, { scale: 1.05, ease: "elastic", delay: 2.5 });
//tl.to("#earth", 1, { scale: 1, ease: "elastic" });

//tl.from(inner, 0.5, { duration: 1, yPercent: 20, ease: "power3.inOut" });
//Back.easeOut

new ScrollMagic.Scene({
  triggerElement: this,
  triggerHook: 0.45,
  yoyo: true,
})
  .setTween(tl)
  /*.addIndicators({
      colorTrigger: "white",
      colorStart: "white",
      colorEnd: "white",
      indent: 40,
    })*/
  .addTo(controller);
