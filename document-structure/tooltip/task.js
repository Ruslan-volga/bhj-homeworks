
document.addEventListener('DOMContentLoaded', function() {
    const tooltips = document.querySelectorAll('.has-tooltip');
    const tooltipElement = document.querySelector('.tooltip');

    tooltips.forEach(tooltip => {
        tooltip.addEventListener('click', function(event) {
            event.preventDefault(); // Предотвращаем переход по ссылке

            // Скрываем все активные подсказки
            const activeTooltip = document.querySelector('.tooltip_active');
            if (activeTooltip && activeTooltip !== tooltipElement) {
                activeTooltip.classList.remove('tooltip_active');
            }

            // Получаем текст подсказки из атрибута title
            const tooltipText = this.getAttribute('title');
            tooltipElement.textContent = tooltipText;

            // Устанавливаем позицию подсказки
            setTooltipPosition(this);

            // Показываем подсказку
            tooltipElement.classList.toggle('tooltip_active');
        });
    });

    // Обработчик клика по документу для скрытия подсказки
    document.addEventListener('click', function(event) {
        const isClickInsideTooltip = tooltipElement.contains(event.target);
        const isClickInsideTooltipLink = Array.from(tooltips).some(tooltip => tooltip.contains(event.target));

        if (!isClickInsideTooltip && !isClickInsideTooltipLink) {
            tooltipElement.classList.remove('tooltip_active'); // Скрываем подсказку
        }
    });

    function setTooltipPosition(element) {
        const rect = element.getBoundingClientRect();
        const tooltipRect = tooltipElement.getBoundingClientRect();

        // Устанавливаем позицию подсказки под элементом
        tooltipElement.style.left = `${rect.left + (rect.width - tooltipRect.width) / 2}px`;
        tooltipElement.style.top = `${rect.bottom + 5}px`;
    }
});