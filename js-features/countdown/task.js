let seconds = 30; 
function updateTimer() {
    const timerElement = document.getElementById('timer');
    timerElement.textContent = seconds; 
    if (seconds > 0) {

    }
}

const timerInterval = setInterval(updateTimer, 1000); 
