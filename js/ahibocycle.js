$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: false,
    animateOut: 'slideOutLeft', // Add slide-out effect to the next slide
    animateIn: 'zoomIn', // Add zoom-in effect to the active slide
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    autoplay: true,
    autoplayTimeout: 3000,
    onInitialized: animateCaption,
    onTranslate: zoomIn,
    onTranslated: zoomOut
  });

  function animateCaption(event) {
    var activeCaption = $(event.target).find('.owl-item.active .caption');
    activeCaption.css('opacity', 0);
    setTimeout(function() {
      activeCaption.css('opacity', 1);
    }, 500);
  }

  function zoomIn(event) {
    var carousel = $(event.target);
    carousel.trigger('stop.owl.autoplay');
    carousel.find('.owl-item').removeClass('zoom-in');
    var currentItem = carousel.find('.owl-item').eq(event.item.index);
    currentItem.addClass('zoom-in');
  }

  function zoomOut(event) {
    var carousel = $(event.target);
    var currentItem = carousel.find('.owl-item').eq(event.item.index);
    currentItem.removeClass('zoom-in');
    carousel.trigger('play.owl.autoplay', [3000]);
    animateCaption(event);
  }
});
