var controller = new ScrollMagic.Controller();

// Create scenes in jQuery each() loop
$(".section").each(function (i) {
  //var inner = $(this).find(".container");
  var outer = $(this).find(".reveal");
  var tl = gsap.timeline();

  tl.from(outer, 0.85, {
    yPercent: 24,
    duration: 0.5,
    opacity: 0,
    ease: "power3.inOut",
  });
  //tl.from("#earth", 0.5, { rotation: 360, ease: "power3.inOut" });
  //tl.from(".arrow-link", 1, { y: 20, ease: "elastic(1, 0.5)" });
  //tl.from(inner, 0.5, { duration: 1, yPercent: 20, ease: "power3.inOut" });
  //Back.easeOut

  new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.45,
  })
    .setTween(tl)
    /*.addIndicators({
      colorTrigger: "white",
      colorStart: "white",
      colorEnd: "white",
      indent: 40,
    })*/
    .addTo(controller);
});
