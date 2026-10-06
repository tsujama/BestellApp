function getSectionTemplate(i) {
    return `
        <section>
            <div class="section-header">
                <div class="img-wrapper">
                    <img class="section-img" src="${menu[i].icon}">
                </div>
                <div class="header-wrapper">
                    <h2>${menu[i].category}</h2>
                </div>
            </div>
            <div id="article${i}" class="articles-wrapper">
                
            </div>
        </section>
    `;
}

function getArticleTemplate(i, j) {
    let dish = menu[i].dishes[j];
    return `
        <article>
            <div>
                <img src="${dish.img}">
            </div>
            <div>
                <h3>${dish.name}</h3>
                <p>${dish.description}</p>
            </div>
            <div class="price-and-button-wrapper">
                <p>${dish.price.toFixed(2)} €</p>
                <button onclick="addToBasket(${i}, ${j}, ${dish.id})" id="article-button${dish.id}" class="pointer">Add to basket</button>
            </div>
        </article>
    `;
}

function getBasketTemplate() {
    return `
        <div class="basket">
            <div class="basket-infos-wrapper">
                <div>
                    <h2>Your Basket</h2>
                </div>
                <div id="basket-articles">
                
                </div>
                <div id="basket-pricecalc-wrapper" class="basket-pricecalc-wrapper">
                    <div class="subtotal">
                        <p>Subtotal</p>
                        <p id="subtotal-price">0,00  €</p>
                    </div>
                    <div class="shipping">
                        <p>Delivery fee</p>
                        <p id="shipping-price">4.99 €</p>
                    </div>
                    <div class="line"></div>
                    <div class="total">
                        <p>Total</p>
                        <p id="total-price">0,00 €</p>
                    </div>
                </div>
            </div>
            <button onclick="buyMenu()" id="buy-now-button" class="pointer">Buy now (0,00 €)</button>
        </div>

         <div id="order-message">
            Testbestellung erfolgreich aufgegeben!
        </div>
    `;
}

function getBasketArticlesTemplate(i, j) {
    let dish = menu[i].dishes[j];
    return `
        <div id="basket-article-wrapper${dish.id}" class="basket-article-wrapper">
            <div>
                <h3>${dish.name}</h3>
            </div>
            <div class="amount-price">
                <div>
                    <p><span onclick="countDown(${dish.id})" id="amount-minus${dish.id}" class="pointer"><i class="fa-solid fa-trash"></i></span> <span id="amount${dish.id}">1</span> <span onclick="countUp(${dish.id})" class="pointer">+</span></p>
                </div>
                <div>
                    <p>${dish.price.toFixed(2)} €</p>
                </div>
            </div>
        </div>
    `;
}