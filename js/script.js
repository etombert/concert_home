    $('header').css({"background-color" : "none"});
        $(document).ready(function(){
          $(function () {
              $(window).scroll(function () {
                  if ($(this).scrollTop() > 700) {
                      $('header').css({"background-color": "black" , "-webkit-transition": "0.5s"});
                  } else {
                      $('header').css({"background": "none"});
                  }
              });
          });
        });

    //NAVBAR A AFFICHER
        $( ".cross" ).hide();
        $( ".menu" ).hide();
        $( ".hamburger" ).click(function() {
        $( ".menu" ).slideToggle( "slow", function() {
        $( ".hamburger" ).hide();
        $( ".cross" ).show();
        });
        });

        $( ".cross" ).click(function() {
        $( ".menu" ).slideToggle( "slow", function() {
        $( ".cross" ).hide();
        $( ".hamburger" ).show();
        });
        });

    //GSA
    var tl = new TimelineMax({});
    var slogan = $('.slogan');
        slogan.css({"opacity" : "0", "top": "70vh"});
        TweenLite.to(slogan, 0.9, {top:"25vh", opacity:"1" , delay:1.5});

    //SCROLLTO
            $(document).ready(function() {
            $('.scrollTo').click( function() { // Au clic sur un élément
                var page = $(this).attr('href'); // Page cible
                var speed = 750; // Durée de l'animation (en ms)
                $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
                return false;
            });
        });