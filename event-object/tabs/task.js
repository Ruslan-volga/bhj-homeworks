document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab__content');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            // Удаляем активный класс у всех вкладок
            tabs.forEach(t => t.classList.remove('tab_active'));
            // Добавляем активный класс к текущей вкладке
            tab.classList.add('tab_active');

            // Скрываем все содержимое вкладок
            contents.forEach(content => content.classList.remove('tab__content_active'));
            // Показываем содержимое текущей вкладки
            contents[index].classList.add('tab__content_active');
        });
    });
});