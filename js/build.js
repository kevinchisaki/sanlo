$(document).ready(function(){

    var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
      });
    }

});

$(document).ready(function(){

    $(".menu-button").click(
      function() {
        $('.mobile-nav-panel').toggleClass('show-panel');
        $('.mobile-nav-links').toggleClass('show-nav');
      }
    );

    $('.mobile-sub-nav').hide();

    $('#about-mobile').click(
      function() {
        $('.down-arrow').toggleClass('arrow-show');

        $("#about-mobile-nav").animate({
          height: 'toggle'}, 
         {easing: 'easeOutQuint', 
          duration: 1000});
      }
    );

    $('#ministries-mobile').click(
      function() {
        $('.down-arrow-ministries').toggleClass('arrow-show');

        $("#ministries-mobile-nav").animate({
          height: 'toggle'}, 
         {easing: 'easeOutQuint', 
          duration: 1000});
      }
    );
   
    $('#about-link, #about-panel').mouseenter(function() {
      $('#about-link').addClass('nav-selected');
      $('#about-panel').addClass('show-drop');

        $('#about-link, #about-panel').mouseleave(function(){
          $('#about-link').removeClass('nav-selected');
          $('#about-panel').removeClass('show-drop');
        });
    });

    $('#ministries-link, #ministries-panel').mouseenter(function() {
      $('#ministries-link').addClass('nav-selected');
      $('#ministries-panel').addClass('show-drop');

        $('#ministries-link, #ministries-panel').mouseleave(function(){
          $('#ministries-link').removeClass('nav-selected');
          $('#ministries-panel').removeClass('show-drop');
        });
    });

});