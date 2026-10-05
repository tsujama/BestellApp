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
    return `
        <article>
            <div>
                <img src="${menu[i].dishes[j].img}">
            </div>
            <div>
                <h3>${menu[i].dishes[j].name}</h3>
                <p>${menu[i].dishes[j].description}</p>
            </div>
            <div class="price-and-button-wrapper">
                <p>${menu[i].dishes[j].price.toFixed(2)} €</p>
                <button onclick="addToBasket(${i}, ${j})" id="article-button" class="pointer">Add to basket</button>
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
                <div class="basket-pricecalc-wrapper">
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
            <button class="pointer">Buy now (0,00 €)</button>
        </div>
    `;
}

function getBasketArticlesTemplate(i, j, number) {
    return `
        <div class="basket-article-wrapper">
            <div>
                <h3>${menu[i].dishes[j].name}</h3>
            </div>
            <div class="amount-price">
                <div>
                    <p><span class="pointer"><i class="fa-solid fa-trash"></i></span> <span id="amount${j}">1</span> <span onclick="count(${j})" class="pointer">+</span></p>
                </div>
                <div>
                    <p>${menu[i].dishes[j].price.toFixed(2)} €</p>
                </div>
            </div>
        </div>
    `;
}