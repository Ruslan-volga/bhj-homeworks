document.addEventListener('DOMContentLoaded', function() {
    const fontSizeLinks = document.querySelectorAll('.font-size');
    const colorLinks = document.querySelectorAll('.color');
    const bgColorLinks = document.querySelectorAll('.color.bg_color_black, .color.bg_color_gray, .color.bg_color_white');
    const bookContent = document.querySelector('.book__content');

    // Изменение размера шрифта
    fontSizeLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Отменяем переход по ссылке

            // Удаляем активный класс у всех элементов
            fontSizeLinks.forEach(item => item.classList.remove('font-size_active'));

            // Добавляем активный класс к текущему элементу
            this.classList.add('font-size_active');

            // Получаем размер шрифта из data-атрибута
            const size = this.dataset.size;
            if (size === 'small') {
                bookContent.style.fontSize = '12px';
            } else if (size === 'big') {
                bookContent.style.fontSize = '20px';
            } else {
                bookContent.style.fontSize = '16px'; // Сброс к значению по умолчанию
            }
        });
    });

    // Изменение цвета текста
    colorLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Отменяем переход по ссылке

            // Удаляем активный класс у всех элементов
            colorLinks.forEach(item => item.classList.remove('color_active'));

            // Добавляем активный класс к текущему элементу
            this.classList.add('color_active');

            // Получаем цвет текста из data-атрибута и применяем его
            const textColor = this.dataset.textColor;
            bookContent.style.color = textColor;
        });
    });

    // Изменение фона
    bgColorLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Отменяем переход по ссылке

            // Удаляем активный класс у всех элементов
            bgColorLinks.forEach(item => item.classList.remove('color_active'));

            // Добавляем активный класс к текущему элементу
            this.classList.add('color_active');

            // Получаем цвет фона из data-атрибута и применяем его
            const bgColor = this.dataset.bgColor;
            document.body.style.backgroundColor = bgColor;  // Меняем фон всего документа
        });
    });
});