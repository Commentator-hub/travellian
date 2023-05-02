const carouselXTwo = document.querySelector('.offer__slider .slider__cards'),
    firstCardXTwo = carouselXTwo.querySelectorAll('.offer__slider .slider__cards-item')[0],
    arrowIconXTwo = document.querySelectorAll('.offer__slider .main__button button');

let isDragStartXTwo = false, prevPageXXTwo, prevScrollLeftXTwo; //prevPageX, prevScrollLeft
let firstCardWidthXTwo = firstCardXTwo.clientWidth + 32; // getting first card width & adding 32 gap/margin value
arrowIconXTwo.forEach(icon => {
    icon.addEventListener('click', () => {
        carouselXTwo.scrollLeft += icon.classList.contains('prev') ? -firstCardWidthXTwo : firstCardWidthXTwo;
        console.log(icon)
    })
});
const dragStartXTwo = (e) => {
    isDragStartXTwo = true;
    prevPageXXTwo = e.pageX;
    prevScrollLeftXTwo = carouselXTwo.scrollLeft;
}
const draggingXTwo = (e) => {
    if (!isDragStartXTwo) return;
    e.preventDefault();
    carouselXTwo.classList.add('dragging');
    let positionDiffXTwo = e.pageX - prevPageXXTwo;
    carouselXTwo.scrollLeft = prevScrollLeftXTwo - positionDiffXTwo;
}
const dragStopXTwo = () => {
    isDragStartXTwo = false;
    carouselXTwo.classList.remove('dragging');
}

carouselXTwo.addEventListener('mousedown', dragStartXTwo);
carouselXTwo.addEventListener('mousemove', draggingXTwo);
carouselXTwo.addEventListener('mouseup', dragStopXTwo);