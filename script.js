let sectionContentRef = document.getElementById("content");
let basketRef = document.getElementById("basket-wrapper");
let subtotal = 0;
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
}

function addToBasket(i, j) {
    let articlesWrapper = document.getElementById("basket-articles");
    let button = document.getElementById("article-button");
    let amount = document.getElementById("amount");

    // if (basket.includes(menu[i].dishes[j].id)) {
    //    amount.innerHTML = "2";
   // } else {
        basket.push({
            id: menu[i].dishes[j].id,
            quantity: 1
        });
        
        articlesWrapper.innerHTML += getBasketArticlesTemplate(i, j);
        button.classList.add("added");
        button.innerHTML = "Added 1";
  //  }
    
    calculateBasketPrice(i, j);

    

    console.log(basket[0].quantity);
}

function count(j) {
    let amount = document.getElementById("amount" + j);

    console.log(basket[j].quantity);
}

function calculateBasketPrice(i, j) {
    let subtotalPriceRef = document.getElementById("subtotal-price");
    let shippingPriceRef = document.getElementById("shipping-price");
    let totalPriceRef = document.getElementById("total-price");
    let shipping = 4.99;
    let total = "";

    subtotal = subtotal + menu[i].dishes[j].price;

    total = subtotal + shipping;

    console.log(subtotal);
    console.log(shipping);
    console.log(total);

    subtotalPriceRef.innerHTML = subtotal.toFixed(2) + " €";
    totalPriceRef.innerHTML = total.toFixed(2) + " €";
    
    
}