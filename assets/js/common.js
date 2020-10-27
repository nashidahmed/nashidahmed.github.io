
/**
 * Navigates to the element
 *
 */
$.fn.navigate = function() {
  const elem = this;

  $([document.documentElement, document.body]).animate({
    scrollTop: elem.offset().top - $('header').height()
  }, 2000, 'easeInOutCubic');
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

/**
 * Creates an animation timeline
 *
 */
$.fn.timeline = function() {
  const offset = 240;
  const selectors = {
    id: $(this),
    item: $(this).find(".timeline-item"),
    activeClass: "timeline-item-active",
  };

  selectors.item.eq(0).addClass(selectors.activeClass);
  const itemCount = selectors.item.length;

  $(window).scroll(function() {
    const pos = $(this).scrollTop();

    selectors.item.each(function(i) {
      const min = $(this).offset().top - offset;
      const max = $(this).height() + $(this).offset().top - offset;
      console.log(i, pos);
      if (i == itemCount - 2 && pos > min + $(this).height() / 2) {
        selectors.item.removeClass(selectors.activeClass);
        selectors.item.last().addClass(selectors.activeClass);
      } else if (pos <= max && pos >= min) {
        selectors.item.removeClass(selectors.activeClass);
        $(this).addClass(selectors.activeClass);
      }
    });
  });
};