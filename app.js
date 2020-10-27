import './assets/js/common.js';

$(function() {
  const stretchElement = $('.stretch');

  stretchElement.each(function() {
    $(this).strechText();
  });

  $("[id^='nav-']").on('click', function() {
    const divId = this.id.replace('nav-', '');
    const elem = $(`#${divId}`);
    elem.navigate();
    window.location.hash = divId;
  });

  $("#timeline").timeline();
});