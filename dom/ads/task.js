
// Функция для смены объявлений
function startRotators() {
    const rotators = document.querySelectorAll('.rotator');
  
    rotators.forEach(rotator => {
      const cases = rotator.querySelectorAll('.rotator__case');
      let activeIndex = Array.from(cases).findIndex(caseEl => caseEl.classList.contains('rotator__case_active'));
  
      setInterval(() => {
        // Убираем класс активного элемента
        cases[activeIndex].classList.remove('rotator__case_active');
  
        // Вычисляем следующий индекс
        activeIndex = (activeIndex + 1) % cases.length;
  
        // Получаем скорость и цвет из атрибутов
        const nextCase = cases[activeIndex];
        nextCase.classList.add('rotator__case_active');
        nextCase.style.color = nextCase.dataset.color;
  
        // Устанавливаем таймер для следующего объявления
        const speed = parseInt(nextCase.dataset.speed);
        clearInterval(this);
        setTimeout(() => startRotators(), speed);
        
      }, parseInt(cases[activeIndex].dataset.speed));
    });
  }
  
  // Запускаем ротаторы при загрузке страницы
  document.addEventListener('DOMContentLoaded', startRotators);