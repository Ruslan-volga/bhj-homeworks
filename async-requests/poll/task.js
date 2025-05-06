// task.js

/*async function fetchPoll() {
    try {
        const response = await fetch('https://students.netoservices.ru/nestjs-backend/poll');
        const data = await response.json();
        
        // Отображаем вопрос и варианты ответов
        displayPoll(data);
    } catch (error) {
        console.error('Ошибка при загрузке опроса:', error);
    }
}

function displayPoll(data) {
    const titleElement = document.getElementById('poll__title');
    const answersElement = document.getElementById('poll__answers');

    titleElement.textContent = data.data.title;

    // Создаем кнопки для каждого ответа
    data.data.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'poll__answer';
        button.textContent = answer;

        // Обработчик клика на кнопку
        button.addEventListener('click', () => handleVote(data.id, index));
        
        answersElement.appendChild(button);
    });
}

async function handleVote(pollId, answerIndex) {
    try {
        // Отправляем POST-запрос с голосом
        const response = await fetch('https://students.netoservices.ru/nestjs-backend/poll', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `vote=${pollId}&answer=${answerIndex}`
        });

        const result = await response.json();
        
        // Выводим сообщение о том, что голос учтен
        alert('Спасибо, ваш голос засчитан!');
        
        // Здесь можно добавить код для отображения результатов голосования
        displayResults(result.stat);
    } catch (error) {
        console.error('Ошибка при отправке голоса:', error);
    }
}

function displayResults(stat) {
    const answersElement = document.getElementById('poll__answers');
    
    // Очищаем предыдущие ответы
    answersElement.innerHTML = '';

    // Отображаем результаты голосования
    stat.forEach(item => {
        const resultDiv = document.createElement('div');
        resultDiv.textContent = `${item.answer}: ${item.votes} голосов`;
        
        answersElement.appendChild(resultDiv);
    });
}

// Загружаем опрос при загрузке страницы
window.onload = fetchPoll;*/
// task.js

let currentPollId = null;

async function fetchPoll() {
    try {
        const response = await fetch('https://students.netoservices.ru/nestjs-backend/poll');
        const data = await response.json();
        
        // Сохраняем ID текущего опроса
        currentPollId = data.id;

        // Отображаем вопрос и варианты ответов
        displayPoll(data);
    } catch (error) {
        console.error('Ошибка при загрузке опроса:', error);
    }
}

function displayPoll(data) {
    const titleElement = document.getElementById('poll__title');
    const answersElement = document.getElementById('poll__answers');

    titleElement.textContent = data.data.title;

    // Создаем кнопки для каждого ответа
    answersElement.innerHTML = ''; // Очищаем предыдущие ответы
    data.data.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'poll__answer';
        button.textContent = answer;

        // Обработчик клика на кнопку
        button.addEventListener('click', () => handleVote(data.id, index));
        
        answersElement.appendChild(button);
    });
}

async function handleVote(pollId, answerIndex) {
    try {
        // Отправляем POST-запрос с голосом
        const response = await fetch('https://students.netoservices.ru/nestjs-backend/poll', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `vote=${pollId}&answer=${answerIndex}`
        });

        const result = await response.json();
        
        // Выводим сообщение о том, что голос учтен в модальном окне
        displayModalMessage('Спасибо, ваш голос засчитан!');
        
        // Отображаем результаты голосования в процентах
        displayResults(result.stat);
        
    } catch (error) {
        console.error('Ошибка при отправке голоса:', error);
    }
}

function displayModalMessage(message) {
    const modalMessageElement = document.getElementById('modalMessage');
    modalMessageElement.textContent = message;

    const modal = document.getElementById('modal');
    
    // Показываем модальное окно
    modal.style.display = "block";

   // Закрытие модального окна при нажатии на крестик
   const closeModalButton = document.getElementById('closeModal');
   closeModalButton.onclick = function() {
       modal.style.display = "none";
       fetchNewPoll();  // Загружаем новый вопрос после закрытия модального окна
   }

   // Закрытие модального окна при клике вне его содержимого
   window.onclick = function(event) {
       if (event.target == modal) {
           modal.style.display = "none";
           fetchNewPoll();  // Загружаем новый вопрос после закрытия модального окна
       }
   }
}

function displayResults(stat) {
    const answersElement = document.getElementById('poll__answers');
    
    // Очищаем предыдущие ответы
    answersElement.innerHTML = '';

    // Подсчитываем общее количество голосов
    const totalVotes = stat.reduce((sum, item) => sum + item.votes, 0);

    // Отображаем результаты голосования в процентах
    stat.forEach(item => {
        const percentage = totalVotes > 0 ? ((item.votes / totalVotes) * 100).toFixed(2) : 0; // Вычисляем процент
        const resultDiv = document.createElement('div');
        
        resultDiv.textContent = `${item.answer}: ${item.votes} голосов (${percentage}%)`;
        
        answersElement.appendChild(resultDiv);
    });
}

// Функция для загрузки нового опроса
async function fetchNewPoll() {
    await fetchPoll();
}

// Загружаем первый опрос при загрузке страницы
window.onload = fetchPoll;