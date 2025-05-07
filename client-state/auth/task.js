document.addEventListener('DOMContentLoaded', () => {
    const signinForm = document.getElementById('signin__form');
    const welcomeBlock = document.getElementById('welcome');
    const userIdSpan = document.getElementById('user_id');
    
    // Проверяем наличие user_id в localStorage
    const storedUserId = localStorage.getItem('user_id');
    if (storedUserId) {
        showWelcome(storedUserId);
    }

    // Обработчик отправки формы
    signinForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Отменяем стандартное поведение формы

        const formData = new FormData(signinForm);

        fetch(signinForm.action, {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Успешная авторизация
                localStorage.setItem('user_id', data.user_id); // Сохраняем user_id в localStorage
                showWelcome(data.user_id);
            } else {
                // Неверные данные для входа
                alert('Неверный логин/пароль');
            }
        })
        .catch(error => {
            console.error('Ошибка:', error);
        });
        
        // Очищаем поля формы после отправки
        signinForm.reset();
    });

    function showWelcome(userId) {
        welcomeBlock.classList.add('welcome_active'); // Показываем блок приветствия
        userIdSpan.textContent = userId; // Устанавливаем id пользователя
        document.getElementById('signin').classList.remove('signin_active'); // Скрываем форму входа
    }

    // Обработчик выхода из системы
    document.getElementById('logout__btn').addEventListener('click', function() {
        localStorage.removeItem('user_id'); // Удаляем user_id из localStorage
        welcomeBlock.classList.remove('welcome_active'); // Скрываем блок приветствия
        document.getElementById('signin').classList.add('signin_active'); // Показываем форму входа
    });
});