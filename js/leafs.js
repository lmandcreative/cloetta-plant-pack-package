var controller = new ScrollMagic.Controller();

$(".leafs").each(function (i) {
  var tl = gsap.timeline();
  var child = $(this).find(".fall-1");
  tl.to(child, 1, {
    y: 200,
    x: gsap.utils.random(-30, 30),
    rotationX: 60,
    rotationY: 15,
  });
  new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.25,
    duration: "120%",
  })
    .setTween(tl)
    /*.addIndicators({
      colorTrigger: "black",
      colorStart: "black",
      colorEnd: "black",
      indent: 10,
    })*/
    .addTo(controller);
});

$(".leafs").each(function () {
  var tl = gsap.timeline();
  var child = $(this).find(".fall-2");
  tl.to(child, 1, {
    y: 165,
  });
  new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.25,
    duration: "120%",
  })
    .setTween(tl)
    /*.addIndicators({
      colorTrigger: "black",
      colorStart: "black",
      colorEnd: "black",
      indent: 10,
    })*/
    .addTo(controller);
});
