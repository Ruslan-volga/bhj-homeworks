function updateTimer() {
    const timerElement = document.getElementById('timer');
    timerElement.textContent = seconds; 
    if (seconds > 0) {
        seconds--; 
    } else {
        clearInterval(timerInterval); 
        alert('Вы победили в конкурсе!'); 
    }
}

const timerInterval = setInterval(updateTimer, 1000);