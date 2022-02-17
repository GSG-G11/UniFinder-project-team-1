// ----- Helper Selector ---------------
const querySelector = (selector) => {
    return document.querySelector(selector);
};

const createElement = (tagName, className, parent) => {
    let element = document.createElement(tagName);
    element.className = className;
    parent.appendChild(element);
    return element;
};

const addListener = (selector, eventName, callback) => {
    querySelector(selector).addEventListener(eventName, callback);
};

const navBarList = querySelector("#navbar-list");
const searchInput = querySelector("#country-input");

// -------------------------- Event Listener  ---------------------------------
addListener(".bar", "click", () => {
    navBarList.classList.toggle("nav-list-hide");
});


const handleGeneralInfo = () => {
    const { name, flag, currency, language, callingCode, region } =
    convertStringToObject(localStorage.getItem("generalInformation"));

    const infoContainer = querySelector(".all-info");

    const infoHead = createElement("div", "info-head", infoContainer);

    const countryImg = createElement("img", "country-img", infoHead);
    countryImg.src = flag;

    const countryName = createElement("p", "coun-name", infoHead);
    countryName.textContent = name;

    // General Div
    const infoDiv = createElement("div", "info-div", infoContainer);

    // First Row
    const firstRow = createElement("div", "first-row", infoDiv);

    // Currency
    const rowInfo1 = createElement("div", "row-info", firstRow);
    createElement("i", "fas fa-money-bill-wave icons", rowInfo1);
    let currName = createElement("p", "currency", rowInfo1);
    currName.textContent = currency;

    // Languages
    const rowInfo2 = createElement("div", "row-info", firstRow);
    createElement("i", "far fa-comment-dots icons", rowInfo2);
    const langName = createElement("p", "lange", rowInfo2);
    langName.textContent = language;

    // Second Row
    const secondRow = createElement("div", "second-row", infoDiv);

    // Code
    const rowInfo3 = createElement("div", "row-info", secondRow);
    createElement("i", "fas fa-phone-alt icons", rowInfo3);
    const code = createElement("p", "code", rowInfo3);
    code.textContent = `+ ${callingCode}`;

    // Region
    const rowInfo4 = createElement("div", "row-info", secondRow);
    createElement("i", "fas fa-globe-americas icons", rowInfo4);

    const regionName = createElement("p", "region", rowInfo4);
    regionName.textContent = region;
};

const handleUniCards = () => {
    const universitiesArray = convertStringToObject(localStorage.getItem("universitiesStorage"));

    universitiesArray.forEach(({ name, website }) => {

        const uniContainer = querySelector(".uni-container");

        const cardBtn = createElement("button", "card-btn", uniContainer);
        cardBtn.setAttribute("onclick", `window.open('${website}', '_blank')`);

        const card = createElement("div", "card", cardBtn);

        createElement("i", "far fa-school", card);

        const uniName = createElement("p", "uni-name", card);
        uniName.textContent = name;
    });
};