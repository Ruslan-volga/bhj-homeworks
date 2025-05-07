// Функция для проверки наличия значения в localStorage и отображения модального окна
function checkModal() {
    const modal = document.getElementById('subscribe-modal');
    
    // Проверяем наличие значения 'modalClosed' в localStorage
    if (!localStorage.getItem('modalClosed')) {
        modal.classList.add('modal_active'); // Показываем модальное окно
    }
}

// Функция для закрытия модального окна и установки значения в localStorage
function closeModal() {
    const modal = document.getElementById('subscribe-modal');
    modal.classList.remove('modal_active'); // Скрываем модальное окно
    localStorage.setItem('modalClosed', 'true'); // Устанавливаем значение в localStorage
}

// Добавляем обработчик события на кнопку закрытия
document.querySelector('.modal__close').addEventListener('click', closeModal);

// Проверяем модальное окно при загрузке страницы
window.onload = checkModal;