document.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach(reveal => {
        const rect = reveal.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Проверяем, находится ли верхняя часть элемента в середине окна
        if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            reveal.classList.add('reveal_active');
        } else {
            reveal.classList.remove('reveal_active');
        }
    });
});