const sliderDots = document.querySelectorAll('.slider__dot');
const prevButton = document.querySelector('.prev-slide');
const nextButton = document.querySelector('.next-slide');
let currentIndex = 0;
const dotCurrenColorClassName = 'slider__dot--current';
const backgroundImage = [1, 2, 3, 4, 5];
const headerSection = document.querySelector('.header-section');

// Функция для удаления класса "current" у всех элементов
function removeCurrentClass() {
    sliderDots.forEach((dot) => {
        dot.classList.remove(dotCurrenColorClassName);
    });
}

function updateBackgroundImage() {
    // Создаем новый путь к фоновому изображению
    const newBackgroundImagePath = `/img/background-image-header-${backgroundImage[currentIndex]}.jpg`;

    // Получаем текущее значение атрибута "style" у элемента
    let styleAttribute = headerSection.getAttribute('style');

    // Изменяем путь к фоновому изображению в значении атрибута "style"
    styleAttribute = styleAttribute.replace(/url\('\/img\/background-image-header-\d+\.jpg'\)/, `url('${newBackgroundImagePath}');`);

    // Задаем новое значение атрибута "style" у элемента
    headerSection.setAttribute('style', styleAttribute);
}

// Вызываем функцию обновления фонового изображения при каждом переключении слайдера
sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        removeCurrentClass();
        dot.classList.add(dotCurrenColorClassName);
        currentIndex = index;
        updateBackgroundImage();
    });
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        removeCurrentClass();
        sliderDots[currentIndex].classList.add(dotCurrenColorClassName);
        updateBackgroundImage();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < sliderDots.length - 1) {
        currentIndex++;
        removeCurrentClass();
        sliderDots[currentIndex].classList.add(dotCurrenColorClassName);
        updateBackgroundImage();
    }
});