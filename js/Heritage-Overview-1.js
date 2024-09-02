$(function() {
    $('#show-heritage-tab').click(function() {
        $('div[id^=color-]').hide();
        $('#color-heritage').show();
    });
    $('#show-titan-tab').click(function() {
        $('div[id^=color-]').hide();
        $('#color-titan').show();
    });

    $('#show-stormFighter-tab').click(function() {
        $('div[id^=color-]').hide();
        $('#color-stormFighter').show();
    });

    $('#show-elite-tab').click(function() {
        $('div[id^=color-]').hide();
        $('#color-elite').show();
    });
    $('#show-vintage-tab').click(function() {
        $('div[id^=color-]').hide();
        $('#color-vintage').show();
    });

    $('#show-woodgate-tab').click(function() {
        $('div[id^=color-]').hide();
        $('#color-woodgate').show();
    });
    $('#show-astonwood-tab').click(function() {
        $('div[id^=color-]').hide();
        $('#color-astonwood').show();
    });
    $('#show-slate-tab').click(function() {
        $('div[id^=color-]').hide();
        $('#color-slate').show();
    });
    $('#show-tile-tab').click(function() {
        $('div[id^=color-]').hide();
        $('#color-tile').show();
    });

})

function parallaxVert(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translateX(${distance * speed}px)`
  }
  
  window.addEventListener('scroll', function () {
  
    parallaxVert('#classic-img', window.scrollY, 0.2);
    parallaxVert('#classic-text', window.scrollY, 0.3);
    parallaxVert('#americas-img', window.scrollY, -0.2);
    parallaxVert('#americas-text', window.scrollY, -0.3);
    parallaxVert('#section1-header-top', window.scrollY, -0.1);
    parallaxVert('#section1-header-btm', window.scrollY, -0.2);
    parallaxVert('#section1-header-para', window.scrollY, -0.3);
  })