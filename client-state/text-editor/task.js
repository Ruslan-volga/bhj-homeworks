// Получаем элементы
const editor = document.getElementById('editor');
const clearButton = document.getElementById('clearButton');

// Восстанавливаем текст из локального хранилища при загрузке страницы
window.onload = function() {
    const savedText = localStorage.getItem('editorContent');
    if (savedText) {
        editor.value = savedText; // Восстанавливаем текст в textarea
    }
};

// Сохраняем текст в локальное хранилище при изменении текста
editor.addEventListener('input', function() {
    localStorage.setItem('editorContent', editor.value);
});

// Очистка содержимого textarea и локального хранилища
clearButton.addEventListener('click', function() {
    editor.value = ''; // Очищаем textarea
    localStorage.removeItem('editorContent'); // Удаляем сохраненный текст из локального хранилища
});