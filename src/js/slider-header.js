const sliderDots = document.querySelectorAll('.slider__dot');
const prevButton = document.querySelector('.prev-slide');
const nextButton = document.querySelector('.next-slide');

const DOT_CURRENT_COLOR_CLASS_NAME = 'slider__dot--current';

const backgroundImage = [1, 2, 3, 4, 5];

// Код запустится сразу же, как весь DOM загрузится в браузере...
document.addEventListener('DOMContentLoaded', runReadyPage);


const headerSection = document.querySelector('.header-section');

// Текущий выбранный индекс элемента
let currentIndex = 0;


function runReadyPage()  {
    updateBackgroundImage(currentIndex)
}

// Функция для удаления класса "current" у всех элементов
function removeCurrentClass(index) {
    sliderDots[index]
        .classList
        .remove(DOT_CURRENT_COLOR_CLASS_NAME)
}

function updateBackgroundImage(index) {
    // Создаем новый путь к фоновому изображению
    const newBackgroundImagePath =
        `/img/background-image-header-${backgroundImage[index]}.jpg`;

    // Перезаписываем конкретное свойство!
    headerSection.style.backgroundImage = `url(${newBackgroundImagePath})`
}


// Логика обработки клика на точку
// -> 1. удаление текущего актиного элемента
// -> 2. добаление нового активного элемента
// -> 3. update изображения
function handleChangeSlide(index) {
    removeCurrentClass(currentIndex);
    sliderDots[index].classList.add(DOT_CURRENT_COLOR_CLASS_NAME);
    currentIndex = index;
    updateBackgroundImage(index);
}


// Вешаем обработчики клика на кнопки (точки в слайдере)
sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        handleChangeSlide(index);
    });
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        const prevIndex = currentIndex - 1;
        handleChangeSlide(prevIndex);
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < sliderDots.length - 1) {
        const nextIndex = currentIndex + 1;
        handleChangeSlide(nextIndex);
    }
});