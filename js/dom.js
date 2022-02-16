const querySelector = (selector) => {
    return document.querySelector(selector);
};

const createElement = (tagName, className, parent) => {
    let element = document.createElement(tagName);
    element.className = className;
    parent.appendChild(element);
    return element;
};

const navBarList = querySelector("#navbar-list");

const addListener = (selector, eventName, callback) => {
    querySelector(selector).addEventListener(eventName, callback);
};

addListener(".bar", "click", () => {
    navBarList.classList.toggle("nav-list-hide");
});


const handleGeneralInfo = () => {
    let infoContainer = querySelector('.all-info');
    const link = "../images/turkey.svg";

    let infoHead = createElement('div', 'info-head', infoContainer);

    let countryImg = createElement('img', 'country-img', infoHead);
    countryImg.src = link;

    let countryName = createElement('p', 'coun-name', infoHead);
    countryName.textContent = "Turkey";

    // General Div
    let infoDiv = createElement('div', 'info-div', infoContainer);

    // First Row
    let firstRow = createElement('div', 'first-row', infoDiv);

    // Currency
    let rowInfo1 = createElement('div', 'row-info', firstRow);
    createElement('i', 'fas fa-money-bill-wave icons', rowInfo1);
    let currName = createElement('p', 'currency', rowInfo1);
    currName.textContent = "Turkish-lira";

    // Languages
    let rowInfo2 = createElement('div', 'row-info', firstRow);
    createElement('i', 'far fa-comment-dots icons', rowInfo2);
    let langName = createElement('p', 'lange', rowInfo2);
    langName.textContent = "Turkish";

    // Second Row
    let secondRow = createElement('div', 'second-row', infoDiv);

    // Code
    let rowInfo3 = createElement('div', 'row-info', secondRow);
    createElement('i', 'fas fa-phone-alt icons', rowInfo3);
    let code = createElement('p', 'code', rowInfo3);
    code.textContent = "+90";

    // Region
    let rowInfo4 = createElement('div', 'row-info', secondRow);
    createElement('i', 'fas fa-globe-americas icons', rowInfo4);

    let regionName = createElement('p', 'region', rowInfo4);
    regionName.textContent = "Asia";

}

const handleUniCards = () => {
    let uniContainer = querySelector('.uni-container');
    const link = "https://stackoverflow.com/";

    let cardBtn = createElement('button', 'card-btn', uniContainer);
    cardBtn.setAttribute = ("onclick", `location.href = '${link}'`);

    let card = createElement('div', 'card', cardBtn);

    let icon = createElement('i', 'far fa-school', card);

    let uniName = createElement('p', 'uni-name', card);
    uniName.textContent = "Cairo University";
}

handleGeneralInfo();
handleUniCards();
handleUniCards();
handleUniCards();
handleUniCards();
handleUniCards();
handleUniCards();