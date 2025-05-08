// Функция для установки куки
function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/';
}

// Функция для получения значения куки
function getCookie(name) {
    return document.cookie.split('; ').reduce((r, v) => {
        const parts = v.split('=');
        return parts[0] === name ? decodeURIComponent(parts[1]) : r;
    }, '');
}

// Функция для проверки наличия значения в куках и отображения модального окна
function checkModal() {
    const modal = document.getElementById('subscribe-modal');
    
    // Проверяем наличие значения 'modalClosed' в куках
    if (!getCookie('modalClosed')) {
        modal.classList.add('modal_active'); // Показываем модальное окно
    }
}

// Функция для закрытия модального окна и установки значения в куки
function closeModal() {
    const modal = document.getElementById('subscribe-modal');
    modal.classList.remove('modal_active'); // Скрываем модальное окно
    setCookie('modalClosed', 'true', 1); // Устанавливаем значение в куки на 1 дeнь
}

// Добавляем обработчик события на кнопку закрытия
document.querySelector('.modal__close').addEventListener('click', closeModal);

// Проверяем модальное окно при загрузке страницы
window.onload = checkModal;