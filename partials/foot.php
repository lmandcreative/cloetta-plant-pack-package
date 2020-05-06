        <script src="https://code.jquery.com/jquery-3.5.0.min.js"
          integrity="sha256-xNzN2a4ltkB44Mc/Jz3pT4iU1cmeR0FkXs4pru/JxaQ=" crossorigin="anonymous"></script>

        <!-- animations -->
        <script src="js/gsap.min.js"></script>
 
        <!-- scroll events -->
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
          function toggle() {
            var x = document.getElementById("dropdown");
            if (x.style.opacity === "0") {
              x.style.opacity = "1";
            } else {
              x.style.opacity = "0";
            }
          }
        </script>
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