document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы

    const formData = new FormData(this); // Создаем объект FormData из формы
    const xhr = new XMLHttpRequest(); // Создаем новый XMLHttpRequest

    xhr.open('POST', this.action); // Открываем соединение с сервером

    // Обработчик события для отслеживания прогресса загрузки
    xhr.upload.addEventListener('progress', function(event) {
        if (event.lengthComputable) {
            const percentComplete = (event.loaded / event.total) * 100; // Вычисляем процент загрузки
            document.getElementById('progress').value = percentComplete; // Обновляем значение прогресс-бара
        }
    });

    // Обработчик события для завершения загрузки
    xhr.onload = function() {
        if (xhr.status === 200) {
            alert('Файл успешно загружен!'); // Успешная загрузка
        } else {
            alert(`Ошибка при загрузке файла: ${xhr.status} ${xhr.statusText}`); // Ошибка при загрузке с кодом статуса
        }
        document.getElementById('progress').value = 0; // Сбрасываем прогресс-бар после завершения
    };

    xhr.onerror = function() {
        alert('Ошибка сети! Проверьте ваше интернет-соединение.'); // Ошибка сети
        document.getElementById('progress').value = 0; // Сбрасываем прогресс-бар при ошибке
    };

    xhr.send(formData); // Отправляем данные на сервер
});