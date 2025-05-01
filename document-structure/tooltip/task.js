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
            const position = this.getAttribute('data-position') || 'bottom';
            setTooltipPosition(this, position);

            // Показываем подсказку
            tooltipElement.classList.toggle('tooltip_active');
        });
    });

    function setTooltipPosition(element, position) {
        const rect = element.getBoundingClientRect();
        const tooltipRect = tooltipElement.getBoundingClientRect();

        switch (position) {
            case 'top':
                tooltipElement.style.left = `${rect.left + (rect.width - tooltipRect.width) / 2}px`;
                tooltipElement.style.top = `${rect.top - tooltipRect.height - 5}px`;
                break;
            case 'left':
                tooltipElement.style.left = `${rect.left - tooltipRect.width - 5}px`;
                tooltipElement.style.top = `${rect.top + (rect.height - tooltipRect.height) / 2}px`;
                break;
            case 'right':
                tooltipElement.style.left = `${rect.right + 5}px`;
                tooltipElement.style.top = `${rect.top + (rect.height - tooltipRect.height) / 2}px`;
                break;
            case 'bottom':
                tooltipElement.style.left = `${rect.left + (rect.width - tooltipRect.width) / 2}px`;
                tooltipElement.style.top = `${rect.bottom + 5}px`;
                break;
        }
    }
});