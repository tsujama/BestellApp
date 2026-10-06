let sectionContentRef = document.getElementById("content");
let basketRef = document.getElementById("basket-wrapper");
let basket = [];

function init() {
    renderMenue();
    renderBasket();
}

function renderMenue() {
    for (let i = 0; i < menu.length; i++) {
        sectionContentRef.innerHTML += getSectionTemplate(i);

        let articleContentRef = document.getElementById("article"+i);

        for (let j = 0; j < menu[i].dishes.length; j++) {
            articleContentRef.innerHTML += getArticleTemplate(i, j);
        }
    }   
}

function renderBasket() {
    basketRef.innerHTML = getBasketTemplate();

    if(basket.length == 0) {
        let basketArticles = document.getElementById("basket-articles");
        let buyButtonRef = document.getElementById("buy-now-button");
        let basketPriceCalcWrapperRef = document.getElementById("basket-pricecalc-wrapper");

        basketArticles.innerHTML = 
        `
        <div class="empty-basket">Nothing here yet.<br> Go ahead and choose something delicious!</div>
        `;
        buyButtonRef.classList.add("hidden");
        basketPriceCalcWrapperRef.classList.add("hidden");
    }
}

function addToBasket(i, j, id) {
    let articlesWrapper = document.getElementById("basket-articles");
    let button = document.getElementById("article-button"+ id);
    let basketArticles = document.getElementById("basket-articles");
    let buyButtonRef = document.getElementById("buy-now-button");
    let basketPriceCalcWrapperRef = document.getElementById("basket-pricecalc-wrapper");

        basket.push({
            id: menu[i].dishes[j].id,
            price: menu[i].dishes[j].price,
            quantity: 1
        });

        if(basket.length == 1) {
            basketArticles.innerHTML = "";
            buyButtonRef.classList.remove("hidden");
            basketPriceCalcWrapperRef.classList.remove("hidden");
        }

        articlesWrapper.innerHTML += getBasketArticlesTemplate(i, j);
        button.classList.add("added");
        button.innerHTML = "Added 1";
    
    calculateBasketPrice();
}

function deleteFromBasket(id) {
    let basketArticlesWrapper = document.getElementById("basket-article-wrapper" + id);
    let button = document.getElementById("article-button"+ id);

    basketArticlesWrapper.remove();
    button.classList.remove("added");
    button.innerHTML = "Add to basket";

    for (let i = 0; i < basket.length; i++) {
        if (basket[i].id == id) {
            basket.splice(i, 1);
        }
    }

    if(basket.length == 0) {
        let basketArticles = document.getElementById("basket-articles");
        let buyButtonRef = document.getElementById("buy-now-button");
        let basketPriceCalcWrapperRef = document.getElementById("basket-pricecalc-wrapper");

        basketArticles.innerHTML = 
        `
        <div class="empty-basket">Nothing here yet.<br> Go ahead and choose something delicious!</div>
        `;
        buyButtonRef.classList.add("hidden");
        basketPriceCalcWrapperRef.classList.add("hidden");
    }
}

function countDown(id) {
    for (let i = 0; i < basket.length; i++) {
        if (basket[i].id == id) {

            if (basket[i].quantity > 1) {
                basket[i].quantity -= 1;

                let amount = document.getElementById("amount" + id);
                amount.innerHTML = basket[i].quantity;

                toggleTrashIcon(id);
            } else {
                deleteFromBasket(id);
            }

            calculateBasketPrice();
        }
    }
}

function countUp(id) {
    for(let i = 0; i < basket.length; i++) {
        if (basket[i].id == id) {
            basket[i].quantity += 1;

            let amount = document.getElementById("amount" + id);
            amount.innerHTML = basket[i].quantity;

            toggleTrashIcon(id);
            calculateBasketPrice();
        }
    }
}

function toggleTrashIcon(id) {

    let trashIcon = document.getElementById("amount-minus" + id);
    trashIcon.innerHTML = "";

    for (let i = 0; i < basket.length; i++) {
        if (basket[i].id == id) {
            if (basket[i].quantity > 1) {
                trashIcon.innerHTML = "-";
            } else {
                trashIcon.innerHTML = `<i class="fa-solid fa-trash"></i>`;
            }
        }
    }
}

function calculateBasketPrice() {
    let subtotalPriceRef = document.getElementById("subtotal-price");
    let totalPriceRef = document.getElementById("total-price");
    let buyNowButtonRef = document.getElementById("buy-now-button");
    let subtotal = 0;
    let shipping = 4.99;
    let total = 0;

    for (let i = 0; i < basket.length; i++) {
        subtotal += basket[i].price * basket[i].quantity
    }

    total = subtotal + shipping;

    subtotalPriceRef.innerHTML = subtotal.toFixed(2) + " €";
    totalPriceRef.innerHTML = total.toFixed(2) + " €";
    buyNowButtonRef.innerHTML = "Buy now (" + total.toFixed(2) + " €)";
}

function buyMenu() {
    let articlesWrapper = document.getElementById("basket-articles");
    let basketWrapper = document.querySelector(".basket");
    let orderMessage = document.getElementById("order-message");

    articlesWrapper.innerHTML = "";
    basket = [];

    basketWrapper.style.display = "none";
    orderMessage.style.display = "block";
}