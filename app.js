import './assets/js/common.js';

$(function() {
  const stretchElement = $('.stretch');
  const minScrollDuration = 1000;

  stretchElement.each(function() {
    $(this).strechText();
  });

  $('a[href^="#"]').each(function () {
    $(this).on('click', function (e) {
      e.preventDefault();
      const id = $(this).attr('href');
      const elem = $(id);
      const duration = Math.abs(elem.offset().top - $(window).scrollTop()) * (2/3);

      if (elem) {
        elem.navigate(duration > minScrollDuration ? duration : minScrollDuration);
      }
    });
  });

  function doAnimations() {
    // Calc current offset and get all animatables
    const bottomOffset = $(window).scrollTop() + $(window).height();
    const animatables = $('.animatable');
    
    // Unbind scroll handler if we have no animatables
    if (animatables.length === 0) {
      console.log('turned off');
      $(window).off('scroll', doAnimations);
    }

    console.log(bottomOffset);
    
    // Check all animatables and animate them if necessary
    animatables.each(function(i) {
      const animatable = $(this);
      if ((animatable.offset().top + animatable.height() - 20) < bottomOffset || (animatable.offset().top + 120) < bottomOffset) {
        animatable.removeClass('animatable').addClass('animated');
      }
    });
  }

  $(window).on('scroll', doAnimations);
  $(window).trigger('scroll');
});