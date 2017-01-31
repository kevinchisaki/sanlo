$(document).ready(function(){
    /* jshint ignore:start */
    var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
      });
    }
    /* jshint ignore:end */
});

$(document).ready(function(){

  $(".menu-button").click(
    function() {
      $('.mobile-nav-panel').toggleClass('show-panel');
      $('.mobile-nav-links').toggleClass('show-nav');
    }
  );

  $('#about-mobile').click(
    function() {
      $('.core-link').not(this).addClass('hidden');
      $('.down-arrow').addClass('arrow-show');
      $("#about-mobile-nav").addClass('visible');
    }
  );

  $('.back-arrow').click(
    function() {
      $('.core-link').not(this).removeClass('hidden');
      $('.down-arrow').removeClass('arrow-show');
      $("#about-mobile-nav").removeClass('visible');
    }
  );

  $('#ministries-mobile').click(
    function() {
      $('.core-link').not(this).addClass('hidden');
      $('.down-arrow-ministries').addClass('arrow-show');
      $("#ministries-mobile-nav").addClass('visible');
    }
  );

  $('.back-arrow-ministries').click(
    function() {
      $('.core-link').not(this).removeClass('hidden');
      $('.down-arrow-ministries').removeClass('arrow-show');
      $("#ministries-mobile-nav").removeClass('visible');
    }
  );

});

$(document).ready(function(){

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

$(document).ready(function() {
  $(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 800,
    outDuration: 800,
    linkElement: '.animsition-link',
    loading: true,
    loadingParentElement: 'body',
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
});
