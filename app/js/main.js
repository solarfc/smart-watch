"use strict";

var myWidth = window.innerWidth,
    myHeight = window.innerHeight;
console.log("width ".concat(myWidth, " \n height ").concat(myHeight));

window.onload = function () {
  /*
      icrease date
   */
  var today = new Date(),
      tomorrow = new Date(),
      day,
      month,
      year,
      i = 3,
      period = document.querySelectorAll('h6.small output');
  tomorrow.setDate(today.getDate() + i);
  day = tomorrow.getDate() > 9 ? tomorrow.getDate() : "0".concat(tomorrow.getDate());
  month = tomorrow.getMonth() + 1 > 9 ? tomorrow.getMonth() + 1 : "0".concat(tomorrow.getMonth() + 1);
  year = tomorrow.getFullYear();

  for (var _i = 0; _i < period.length; _i++) {
    period[_i].innerHTML = "".concat(day, ".").concat(month, ".").concat(year.toString().slice(2));
  }

  document.querySelector('h6.small.address output').innerHTML = year;
  /*
      fancybox settings
   */

  $.fancybox.defaults.loop = true;
  $.fancybox.defaults.animationEffect = 'fade';
  /*
      change active color and watch photo
   */

  var allColor = document.querySelectorAll('.color figure span'),
      watchImg = document.querySelector('.catalog__content-img img');

  var _loop = function _loop(_i2) {
    var _loop2 = function _loop2(j) {
      allColor[j].addEventListener('click', function () {
        var activeColor = allColor[j].className;

        if (allColor[j].classList.contains('active')) {
          allColor[_i2].classList.remove('active');

          allColor[j].classList.add('active');
        } else {
          allColor[_i2].classList.remove('active');

          allColor[j].classList.add('active');
          watchImg.style.opacity = '0';
          setTimeout(function () {
            watchImg.src = "img/catalog/".concat(activeColor, ".png");
          }, 600);
          setTimeout(function () {
            watchImg.style.opacity = '1';
          }, 1100);
        }
      });
    };

    for (var j = 0; j < allColor.length; j++) {
      _loop2(j);
    }
  };

  for (var _i2 = 0; _i2 < allColor.length; _i2++) {
    _loop(_i2);
  }
  /*
      review slider
   */


  $('.review__content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    rows: 0,
    arrows: true,
    prevArrow: $('.prev-arrow'),
    nextArrow: $('.next-arrow')
  });
  /*
      toggle bucket
   */

  var toggleBucket = function toggleBucket() {
    var bucket = document.querySelector('a.bucket'),
        topOfWindow = window.pageYOffset + innerHeight,
        catalogTopPosition = document.querySelector('.catalog').offsetTop,
        galleryTopPosition = document.querySelector('.gallery').offsetTop,
        footerLink = $('.footer__content .to-order').offset().top;

    if (topOfWindow > catalogTopPosition && topOfWindow < galleryTopPosition || topOfWindow > footerLink) {
      bucket.style.opacity = '0';
    } else {
      bucket.style.opacity = '1';
    }
  };
  /*
      slow scroll
   */


  var slowScroll = function slowScroll(href) {
    $('.to-order a, a.bucket').on('click', function () {
      $('html, body').animate({
        scrollTop: href
      }, 800);
    });
  };

  if (/iPhone|iPod|iPad|Android/i.test(navigator.userAgent)) {
    var href = $('#mobile-order').offset().top - innerHeight - 40;
    slowScroll(href);
    window.addEventListener('scroll', function () {
      toggleBucket();
    });
    window.addEventListener('resize', function () {
      toggleBucket();
      href = $('#mobile-order').offset().top - innerHeight;
      slowScroll(href);
    });
  } else {
    var _href = $('#catalog').offset().top;
    slowScroll(_href);
  }
};