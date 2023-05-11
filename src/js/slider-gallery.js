const carousel = document.querySelector('.gallery__slider .carousel');
const cards = carousel.querySelectorAll('.gallery__slider .slider__cards-item');
const arrowIcons = document.querySelectorAll('.gallery__content .main-button button');


const DRAGGING_CLASS_NAME = 'dragging';

const FLEX_GAP_BETWEEN_CARDS = 32;

let isDragStart = false;
let prevPageX;
let prevScrollLeft;

arrowIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        const firstCard = cards[0];
        const firstCardWidth = firstCard.clientWidth + FLEX_GAP_BETWEEN_CARDS;
        carousel.scrollLeft += icon.classList.contains('prev') ? -firstCardWidth : firstCardWidth;
    })
});

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragRun = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    carousel.classList.add(DRAGGING_CLASS_NAME);
    const positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove(DRAGGING_CLASS_NAME);
}

carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mousemove', dragRun);
carousel.addEventListener('mouseup', dragStop);