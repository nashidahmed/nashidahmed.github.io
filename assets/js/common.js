
/**
 * Navigates to the element
 *
 */
$.fn.navigate = function(duration) {
  const elem = this;

  $([document.documentElement, document.body]).animate({
    scrollTop: elem.offset().top - $('header').height()
  }, duration, 'easeInOutCubic');
}

/**
 * Streches text to the size of its container
 *
 */
$.fn.strechText = function() {
  const elem = this;
  const contentWidth = elem.width();
  const txt = elem.html();
  const oneLine = $(`<span class="stretch-it">${txt}</span>`);
  const charCount = elem.text().length;
  const spacing = contentWidth / charCount;

  elem.html(oneLine);
  const txtWidth = oneLine.width();

  if (txtWidth < contentWidth) {
    const charWidth = txtWidth / charCount;
    const ltrSpacing = spacing - charWidth + (spacing - charWidth) / charCount;

    oneLine.css({
      'letter-spacing': ltrSpacing
    });
  } else {
    oneLine.contents().unwrap();
    elem.css({
      'text-align': 'justify'
    });
  }
};
