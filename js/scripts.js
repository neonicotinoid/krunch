console.log('ok'); 
 
containerEl = document.querySelector('.tiles-wrapper')
var mixer = mixitup(containerEl, {
  selectors: {
      target: '.portfolio-tile'
  },
  animation: {
      duration: 300
  }
});

var menuTrigger = document.querySelector('.hamburger'),
    menu = document.querySelector('.main-menu');

menuTrigger.addEventListener('click', function() {
    menu.classList.toggle('is-open');
    menuTrigger.classList.toggle('is-hamburger-closed');
});


$('.testimonials-wrapper').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
  });
          