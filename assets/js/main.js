$(window).on('scroll', function () {
  if ($(this).scrollTop() >= 542) {
    $('.js--nav').addClass('sticky animated fadeInDown');
    $('.nav__brand-logo').attr('src', './assets/img/logo.png')
  }
  else {
    $('.js--nav').removeClass('sticky fadeInDown');
    $('.nav__brand-logo').attr('src', './assets/img/logo-white.png')

  }
});


$('.nav-btn').on('change', function () {
  $('.body').css({
    'visibility': 'visible',
    'opacity': '1'
  })

  setTimeout(() => {
    $('#nav').css({
      'left': '0'
    })
  }, 300);
})

$('.slide-btn').on('change', function () {
  $('#nav').css({
    'left': '-100rem'
  })
  setTimeout(() => {
    $('.body').css({
      'visibility': 'hidden',
      'opacity': '0'
    })
  }, 300);

})

$('.body').on('click', function () {
  $('#nav').css({
    'left': '-100rem'
  })
  setTimeout(() => {
    $('.body').css({
      'visibility': 'hidden',
      'opacity': '0'
    })
  }, 300);
})

$('.js-scroll-plans').on('click', function () {
  $('html, body').animate({
    scrollTop: $('#products').offset().top
  }, 1000)
})

$('.js-scroll-start').on('click', function () {
  $('html, body').animate({
    scrollTop: $('#features').offset().top
  }, 1000)
})

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist ?
      if (target.length) {
        // Only prevent  default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').
          animate({
            scrollTop: target.offset().top
          }, 1000, function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', ' - 1');
              // Adding tabindex for elements not focusable
              $target.focus();
              // Set focus again
            };
          });
      }
    }
  });
