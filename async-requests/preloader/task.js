// Функция для загрузки данных о курсе валют
async function fetchCurrencyRates() {
    const loader = document.getElementById('loader');
    const itemsContainer = document.getElementById('items');

    // Показать анимацию загрузки
    loader.classList.add('loader_active');

    try {
        // Отправка GET-запроса
        const response = await fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses');
        const data = await response.json();

        // Очистка контейнера перед добавлением новых данных
        itemsContainer.innerHTML = '';

        // Обработка полученных данных
        const valute = data.response.Valute;
        for (const key in valute) {
            if (valute.hasOwnProperty(key)) {
                const currency = valute[key];

                // Создание элементов для отображения курса валют
                const itemDiv = document.createElement('div');
                itemDiv.className = 'item';

                const codeDiv = document.createElement('div');
                codeDiv.className = 'item__code';
                codeDiv.textContent = currency.CharCode;

                const valueDiv = document.createElement('div');
                valueDiv.className = 'item__value';
                valueDiv.textContent = currency.Value.toFixed(2); // Форматируем значение до 2 знаков после запятой

                const currencyDiv = document.createElement('div');
                currencyDiv.className = 'item__currency';
                currencyDiv.textContent = 'руб.';

                // Добавление элементов в контейнер
                itemDiv.appendChild(codeDiv);
                itemDiv.appendChild(valueDiv);
                itemDiv.appendChild(currencyDiv);
                
                itemsContainer.appendChild(itemDiv);
            }
        }
    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
    } finally {
        // Скрыть анимацию загрузки после завершения запроса
        loader.classList.remove('loader_active');
    }
}

// Вызов функции для загрузки данных при загрузке страницы
window.onload = fetchCurrencyRates;