let myWidth = window.innerWidth,
    myHeight = window.innerHeight;
console.log(`width ${myWidth} \n height ${myHeight}`);

window.onload = function () {

    $.fancybox.defaults.loop = true;
    $.fancybox.defaults.animationEffect = 'fade';

    $('.review__content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 300,
        rows: 0,
        arrows: true,
        prevArrow: $('.prev-arrow'),
        nextArrow: $('.next-arrow')
    });

    // /*
    //     change href on mobile
    //  */
    //
    // if(/iPhone|iPod|Android/i.test(navigator.userAgent)){
    //     document.querySelector('a.grande').href = '#formgrande';
    //     document.querySelector('a.lake').href = '#formlake';
    //     document.querySelector('a.lou').href = '#formlou';
    // }
};
