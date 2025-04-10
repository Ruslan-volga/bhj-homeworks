let clickCount = 0; // Счетчик кликов
let lastClickTime = null; // Время последнего клика
let clickSpeed = 0; // Скорость клика
let clicksInLastSecond = 0; // Количество кликов за последнюю секунду

// Получаем элементы из DOM
const cookie = document.getElementById('cookie'); // Элемент печеньки
const clickCountDisplay = document.getElementById('clicker__counter'); // Элемент для отображения счетчика
const clickSpeedDisplay = document.getElementById('clicker__speed'); // Элемент для отображения скорости

// Функция для обработки клика по печеньке
cookie.addEventListener('click', () => {
    clickCount++; // Увеличиваем счетчик кликов
    clicksInLastSecond++; // Увеличиваем количество кликов за последнюю секунду

    // Проверяем, достиг ли счетчик 40
    if (clickCount >= 41) {
        clickCount = 0; // Сбрасываем счетчик
    }

    clickCountDisplay.textContent = clickCount; // Обновляем отображение счетчика

    // Изменяем размер печеньки случайным образом
    const newSize = Math.random() * (250 - 150) + 150; // Случайный размер от 150 до 250 пикселей
    cookie.style.width = `${newSize}px`; // Устанавливаем новую ширину
    cookie.style.height = `${newSize}px`; // Устанавливаем новую высоту

});

// Функция для обновления скорости клика каждую секунду
setInterval(() => {
    clickSpeedDisplay.textContent = clicksInLastSecond; // Обновляем отображение скорости клика с единицами измерения
    clicksInLastSecond = 0; // Сбрасываем количество кликов за последнюю секунду
}, 1000);




