const carouselXThree = document.querySelector('.planners__slider .slider__cards');
let isDragStartXThree = false, prevPageXXThree, prevScrollLeftXThree;

const dragStartXThree = (e) => {
    isDragStartXThree = true;
    prevPageXXThree = e.pageX;
    prevScrollLeftXThree = carouselXThree.scrollLeft;
}
const draggingXThree = (e) => {
    if (!isDragStartXThree) return;
    e.preventDefault();
    carouselXThree.classList.add('dragging');
    let positionDiffXThree = e.pageX - prevPageXXThree;
    carouselXThree.scrollLeft = prevScrollLeftXThree - positionDiffXThree;
}
const dragStopXThree = () => {
    isDragStartXThree = false;
    carouselXThree.classList.remove('dragging');
}

carouselXThree.addEventListener('mousedown', dragStartXThree);
carouselXThree.addEventListener('mousemove', draggingXThree);
carouselXThree.addEventListener('mouseup', dragStopXThree);