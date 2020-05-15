<script src="js/gsap.min.js"></script>
<script src="js/ScrollMagic.min.js"></script>
<script src="js/animation.gsap.min.js"></script>
<script type="text/javascript" src="js/lottie.js"></script>
<script type="text/javascript" src="js/lottie-animations.js"></script>
<script type="text/javascript" src="js/section-timeline.js"></script>
<script type="text/javascript" src="js/earth.js"></script>
<script type="text/javascript" src="js/steps.js"></script>
<script type="text/javascript" src="js/leafs.js"></script>
<script type="text/javascript" src="js/scroll.js"></script>
<script type="text/javascript" src="js/localisation.js"></script>

<script>
  window.onscroll = function () {
    myFunction()
  };

  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;

  function myFunction() {
    if (window.pageYOffset > sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }
</script>

</body>

</html>
