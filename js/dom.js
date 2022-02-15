const navBarList = document.querySelector("#navbar-list");

const addListener = (selector, eventName, callback) => {
    document.querySelector(selector).addEventListener(eventName, callback);
};

addListener(".bar", "click", () => {    
    navBarList.classList.toggle("nav-list-hide");
});

const querySelector = (selector) => {
    return document.querySelector(selector);
};

const createElement = (tagName) => {
    return document.createElement(tagName);
};

const handleGeneralInfo = () => {
    let infoContainer = querySelector('.all-info');
    const link = "../images/turkey.svg";

    let infoHead = createElement('div');
    infoHead.className = "info-head";

    let countryImg = createElement('img');
    countryImg.className = "country-img";
    countryImg.src = link;

    let countryName = createElement('p');
    countryName.className = "country-name";
    countryName.textContent = "Turkey";

    // General Div
    let infoDiv = createElement('div');
    infoDiv.className = "info-div";

    // First Row
    let firstRow = createElement('div');
    firstRow.className = "first-row";

    // Currency
    let rowInfo1 = createElement('div');
    rowInfo1.className = "row-info";

    let currIcon = createElement('i');
    currIcon.className = "fas fa-money-bill-wave icons";

    let currName = createElement('p');
    currName.className = "currency";
    currName.textContent = "Turkish-lira";

    // Languages
    let rowInfo2 = createElement('div');
    rowInfo2.className = "row-info";

    let langIcon = createElement('i');
    langIcon.className = "far fa-comment-dots icons";

    let langName = createElement('p');
    langName.className = "lange";
    langName.textContent = "Turkish";

    // Second Row
    let secondRow = createElement('div');
    secondRow.className = "second-row";

    // Code
    let rowInfo3 = createElement('div');
    rowInfo3.className = "row-info";

    let codeIcon = createElement('i');
    codeIcon.className = "fas fa-phone-alt icons";

    let code = createElement('p');
    code.className = "code";
    code.textContent = "+90";

    // Region
    let rowInfo4 = createElement('div');
    rowInfo4.className = "row-info";

    let regionIcon = createElement('i');
    regionIcon.className = "fas fa-globe-americas icons";

    let regionName = createElement('p');
    regionName.className = "region";
    regionName.textContent = "Asia";


    infoContainer.appendChild(infoHead);
    infoContainer.appendChild(infoDiv);

    infoHead.appendChild(countryImg);
    infoHead.appendChild(countryName);

    infoDiv.appendChild(firstRow);
    infoDiv.appendChild(secondRow);

    firstRow.appendChild(rowInfo1);
    firstRow.appendChild(rowInfo2);

    rowInfo1.appendChild(currIcon);
    rowInfo1.appendChild(currName);

    rowInfo2.appendChild(langIcon);
    rowInfo2.appendChild(langName);

    secondRow.appendChild(rowInfo3);
    secondRow.appendChild(rowInfo4);

    rowInfo3.appendChild(codeIcon);
    rowInfo3.appendChild(code);

    rowInfo4.appendChild(regionIcon);
    rowInfo4.appendChild(regionName);

}

const handleUniCards = () => {
    let uniContainer = querySelector('.uni-container');
    const link = "https://stackoverflow.com/";

    let cardBtn = createElement('button');
    cardBtn.className = "card-btn";
    cardBtn.setAttribute = ("onclick", `location.href = '${link}'`);

    let card = createElement('div');
    card.className = "card";

    let icon = createElement('i');
    icon.className = "far fa-school";

    let uniName = createElement('p');
    uniName.textContent = "Cairo University";

    uniContainer.appendChild(cardBtn);
    cardBtn.appendChild(card);
    card.appendChild(icon);
    card.appendChild(uniName);
}

handleGeneralInfo();
handleUniCards();
