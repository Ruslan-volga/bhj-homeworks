// Инициализация переменных
let clickCount = 0; // Счетчик кликов
let lastClickTime = null; // Время последнего клика
let clickSpeed = 0; // Скорость клика

// Получаем элементы из DOM
const cookie = document.getElementById('cookie'); // Элемент печеньки
const clickCountDisplay = document.getElementById('clicker__counter'); // Элемент для отображения счетчика
const clickSpeedDisplay = document.getElementById('clicker__speed'); // Элемент для отображения скорости

// Функция для обработки клика по печеньке
cookie.addEventListener('click', () => {
    clickCount++; // Увеличиваем счетчик кликов

    // Проверяем, достиг ли счетчик 40
    if (clickCount >= 41) {
        
        clickCount = 0; // Сбрасываем счетчик
    }

    clickCountDisplay.textContent = clickCount; // Обновляем отображение счетчика

    // Изменяем размер печеньки случайным образом
    const newSize = Math.random() * (250 - 150) + 150; // Случайный размер от 150 до 250 пикселей
    cookie.style.width = `${newSize}px`; // Устанавливаем новую ширину
    cookie.style.height = `${newSize}px`; // Устанавливаем новую высоту

    // Рассчитываем скорость клика (время между кликами)
    const currentTime = new Date(); // Получаем текущее время
    
    if (lastClickTime) { 
        const timeDiff = currentTime - lastClickTime; // Разница во времени в миллисекундах
        clickSpeed = (timeDiff / 100).toFixed(2); // Скорость клика в сотых долях секунды
        clickSpeedDisplay.textContent = clickSpeed; // Обновляем отображение скорости клика с единицами измерения
    }

    lastClickTime = currentTime; // Обновляем время последнего клика
});



