const convertStringToObject = (object) => {
    return JSON.parse(object);
};

const handleGeneralInfo = () => {
    const { name, flag, currency, language, callingCode, region } =
        convertStringToObject(localStorage.getItem("generalInformation"));

    let infoContainer = querySelector(".all-info");

    let infoHead = createElement("div", "info-head", infoContainer);

    let countryImg = createElement("img", "country-img", infoHead);
    countryImg.src = flag;

    let countryName = createElement("p", "coun-name", infoHead);
    countryName.textContent = name;

    // General Div
    let infoDiv = createElement("div", "info-div", infoContainer);

    // First Row
    let firstRow = createElement("div", "first-row", infoDiv);

    // Currency
    let rowInfo1 = createElement("div", "row-info", firstRow);
    createElement("i", "fas fa-money-bill-wave icons", rowInfo1);
    let currName = createElement("p", "currency", rowInfo1);
    currName.textContent = currency;

    // Languages
    let rowInfo2 = createElement("div", "row-info", firstRow);
    createElement("i", "far fa-comment-dots icons", rowInfo2);
    let langName = createElement("p", "lange", rowInfo2);
    langName.textContent = language;

    // Second Row
    let secondRow = createElement("div", "second-row", infoDiv);

    // Code
    let rowInfo3 = createElement("div", "row-info", secondRow);
    createElement("i", "fas fa-phone-alt icons", rowInfo3);
    let code = createElement("p", "code", rowInfo3);
    code.textContent = `+ ${callingCode}`;

    // Region
    let rowInfo4 = createElement("div", "row-info", secondRow);
    createElement("i", "fas fa-globe-americas icons", rowInfo4);

    let regionName = createElement("p", "region", rowInfo4);
    regionName.textContent = region;
};
handleGeneralInfo();

// -------------- Font awesome script -------------------------
(function fontAwesome() {
    var css = document.createElement("link");
    css.href = "https://pro.fontawesome.com/releases/v5.10.0/css/all.css";
    css.rel = "stylesheet";
    css.type = "text/css";
    document.getElementsByTagName("head")[0].appendChild(css);
})();
