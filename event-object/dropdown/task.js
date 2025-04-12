document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const dropdownValue = dropdown.querySelector('.dropdown__value');
        const dropdownList = dropdown.querySelector('.dropdown__list');

        // Обработчик клика на элементе dropdownValue
        dropdownValue.addEventListener('click', (event) => {
            event.stopPropagation(); // Останавливаем всплытие события
            dropdownList.classList.toggle('dropdown__list_active'); // Переключаем класс для отображения списка
        });

        // Обработчик клика на элементе dropdownItem
        const items = Array.from(dropdown.querySelectorAll('.dropdown__item'));
        
        items.forEach(item => {
            item.addEventListener('click', (event) => {
                event.preventDefault(); // Запрещаем переход по ссылке
                const selectedValue = item.textContent; // Получаем текст выбранного элемента
                dropdownValue.textContent = selectedValue; // Устанавливаем новое значение в dropdownValue
                dropdownList.classList.remove('dropdown__list_active'); // Закрываем список
            });
        });
    });

    // Закрытие всех открытых списков при клике вне их
    document.addEventListener('click', () => {
        dropdowns.forEach(dropdown => {
            const dropdownList = dropdown.querySelector('.dropdown__list');
            if (dropdownList.classList.contains('dropdown__list_active')) {
                dropdownList.classList.remove('dropdown__list_active');
            }
        });
    });
});