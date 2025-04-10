let deadCount = 0; // Счетчик убитых кротов
let lostCount = 0; // Счетчик промахов
const maxDead = 10; // Максимальное количество убитых кротов для победы
const maxLost = 5; // Максимальное количество промахов для поражения

// Функция для получения элемента по индексу
function getHole(index) {
    return document.getElementById(`hole${index}`);
}

// Функция для случайного появления крота
function randomHole() {
    const index = Math.floor(Math.random() * 9) + 1; // Случайное число от 1 до 9
    const hole = getHole(index);
    
    // Удаляем класс у всех лунок
    for (let i = 1; i <= 9; i++) {
        getHole(i).classList.remove('hole_has-mole');
    }
    
    // Добавляем класс к случайной лунке
    hole.classList.add('hole_has-mole');
}

// Функция для проверки клика по лунке
function checkHole(event) {
    const hole = event.currentTarget;

    if (hole.classList.contains('hole_has-mole')) {
        deadCount++;
        document.getElementById('dead').textContent = deadCount;

        if (deadCount === maxDead) {
            alert('Вы победили!');
            resetGame();
        }
        
        randomHole(); // Появление нового крота
    } else {
        lostCount++;
        document.getElementById('lost').textContent = lostCount;

        if (lostCount === maxLost) {
            alert('Вы проиграли!');
            resetGame();
        }
        
        randomHole(); // Появление нового крота
    }
}

// Функция для сброса игры
function resetGame() {
    deadCount = 0;
    lostCount = 0;
    
    for (let i = 1; i <= 9; i++) {
    document.getElementById('dead').textContent = deadCount;
    document.getElementById('lost').textContent = lostCount;

   // Удаляем класс у всех лунок
       getHole(i).classList.remove('hole_has-mole');
   }
}

// Регистрация обработчиков событий для каждой лунки
for (let i = 1; i <= 9; i++) {
   const hole = getHole(i);
   hole.addEventListener('click', checkHole);
}

// Запускаем игру с появлением первого крота через некоторое время
setInterval(randomHole, 1000); // Появление нового крота каждые 1000 мс (1 секунда)