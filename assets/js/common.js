/**
 * Navigates to the element
 *
 */
$.fn.navigate = function(duration) {
  const elem = this;
  const heightInRem = parseFloat(getComputedStyle(document.body).getPropertyValue('--header-height'));
  const heightInPx = parseFloat(getComputedStyle(document.documentElement).fontSize) * heightInRem;

  $([document.documentElement, document.body]).animate({
    scrollTop: elem.offset().top - heightInPx
  }, duration, 'easeInOutCubic');
}
