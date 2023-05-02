const carousel = document.querySelector('.popular__slider .slider__cards'),
    firstCard = carousel.querySelectorAll('.slider__cards-item')[0],
    arrowIcon = document.querySelectorAll('.popular__slider .main__button button');

let isDragStart = false, prevPageX, prevScrollLeft;
let firstCardWidth = firstCard.clientWidth + 32; // getting first card width & adding 32 gap/margin value
arrowIcon.forEach(icon => {
    icon.addEventListener('click', () => {
        carousel.scrollLeft += icon.classList.contains('prev') ? -firstCardWidth : firstCardWidth;
        console.log(icon)
    })
});
const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    carousel.classList.add('dragging');
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}
const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove('dragging');
}

carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mousemove', dragging);
carousel.addEventListener('mouseup', dragStop);