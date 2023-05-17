import '/sass/main.sass'
import './slider-header.js'
import './slider-popular.js'
import './slider-offer.js'
import './slider-planners.js'
import './slider-gallery.js'
import './slider-experiences.js'


// const widthElement = document.querySelector('.wrapper')
// const width = widthElement.offsetWidth

// const menuBtn = document.querySelector('.hamburger');
// const mobileMenu = document.querySelector('.header__nav');
// const hiddenList = document.querySelectorAll('.nav__list');
//
// menuBtn.addEventListener('click', function () {
//     menuBtn.classList.toggle('is-active');
//     mobileMenu.classList.toggle('mobile-nav');
//     hiddenList.forEach(function (item) {
//         item.classList.toggle('none-hidden');
//     });
// });


const menuBtn = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.header__nav');
const hiddenList = document.querySelectorAll('.nav__list');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('is-active');
    mobileMenu.classList.toggle('mobile-nav');
    hiddenList.forEach(function (item) {
        item.classList.toggle('none-hidden');
    });
});

document.addEventListener('click', function (event) {
    const target = event.target;
    if (!target.closest('.header__nav') && !target.closest('.hamburger')) {
        menuBtn.classList.remove('is-active');
        mobileMenu.classList.remove('mobile-nav');
        hiddenList.forEach(function (item) {
            item.classList.remove('none-hidden');
        });
    }
});

window.addEventListener('resize', function () {
    if (window.innerWidth > 768) { // Замените 768 на необходимую ширину
        menuBtn.classList.remove('is-active');
        mobileMenu.classList.remove('mobile-nav');
        hiddenList.forEach(function (item) {
            item.classList.remove('none-hidden');
        });
    }
});

