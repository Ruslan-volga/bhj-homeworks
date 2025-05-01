document.addEventListener('DOMContentLoaded', () => {
    const cartProductsContainer = document.querySelector('.cart__products');
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const quantityControls = product.querySelector('.product__quantity-controls');
        const quantityValue = product.querySelector('.product__quantity-value');
        const addButton = product.querySelector('.product__add');

        // Увеличение количества
        product.querySelector('.product__quantity-control_inc').addEventListener('click', () => {
            quantityValue.textContent = parseInt(quantityValue.textContent) + 1;
        });

        // Уменьшение количества
        product.querySelector('.product__quantity-control_dec').addEventListener('click', () => {
            if (parseInt(quantityValue.textContent) > 1) {
                quantityValue.textContent = parseInt(quantityValue.textContent) - 1;
            }
        });

        // Добавление товара в корзину
        addButton.addEventListener('click', () => {
            const productId = product.dataset.id;
            const productImageSrc = product.querySelector('.product__image').src;
            const quantity = parseInt(quantityValue.textContent);

            let cartProduct = cartProductsContainer.querySelector(`.cart__product[data-id="${productId}"]`);

            if (cartProduct) {
                // Если товар уже есть в корзине, увеличиваем количество
                const cartProductCount = cartProduct.querySelector('.cart__product-count');
                cartProductCount.textContent = parseInt(cartProductCount.textContent) + quantity;
            } else {
                // Если товара нет в корзине, добавляем новый элемент
                cartProduct = document.createElement('div');
                cartProduct.classList.add('cart__product');
                cartProduct.dataset.id = productId;

                cartProduct.innerHTML = `
                    <img class="cart__product-image" src="${productImageSrc}">
                    <div class="cart__product-count">${quantity}</div>
                    <div class="cart__remove">Удалить</div>
                `;

                // Добавляем обработчик для удаления товара из корзины
                cartProduct.querySelector('.cart__remove').addEventListener('click', () => {
                    cartProductsContainer.removeChild(cartProduct);
                    if (cartProductsContainer.children.length === 0) {
                        document.querySelector('.cart').style.display = 'none';
                    }
                });

                // Анимация перемещения товара в корзину
                animateAddToCart(productImageSrc, product);
                
                cartProductsContainer.appendChild(cartProduct);
            }

            // Показываем корзину, если она пуста
            if (cartProductsContainer.children.length > 0) {
                document.querySelector('.cart').style.display = 'block';
            }
        });
    });

    function animateAddToCart(imageSrc, productElement) {
        const imgClone = document.createElement('img');
        imgClone.src = imageSrc;
        imgClone.classList.add('product-shadow');
        
        document.body.appendChild(imgClone);

        const { top: startY, left: startX } = productElement.getBoundingClientRect();
        const { top: endY, left: endX } = document.querySelector('.cart').getBoundingClientRect();

        imgClone.style.position = 'absolute';
        imgClone.style.top = `${startY}px`;
        imgClone.style.left = `${startX}px`;
        
        const distanceX = endX - startX;
        const distanceY = endY - startY;

        let steps = 30; // Количество шагов анимации
        let stepX = distanceX / steps;
        let stepY = distanceY / steps;

        let currentStep = 0;

        function move() {
            if (currentStep < steps) {
                currentStep++;
                imgClone.style.transform = `translate(${stepX * currentStep}px, ${stepY * currentStep}px)`;
                requestAnimationFrame(move);
            } else {
                document.body.removeChild(imgClone); // Удаляем изображение после завершения анимации
            }
        }

        move();
    }
});