// init scrollmagic
var controller = new ScrollMagic.Controller();
// build scenes
var revealElements = document.getElementsByClassName("reveal");
for (var i = 0; i < revealElements.length; i++) {
  // create a scene for each element
  new ScrollMagic.Scene({
    triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
    //offset: 50,												 // start a little later
    triggerHook: 0.8, // show, when scrolled 10% into view
    duration: "90%", // hide 10% before exiting view (80% + 10% from bottom)
  })

    .setClassToggle(revealElements[i], "visible") // add class toggle
    .addIndicators({ name: "digit " + (i + 1) }) // add indicators (requires plugin)
    .addTo(controller);
}
