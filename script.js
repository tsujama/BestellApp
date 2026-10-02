let sectionContentRef = document.getElementById("content");
let basketRef = document.getElementById("basket-wrapper");

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