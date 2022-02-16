const convertObjectToString = (object) => {
    return JSON.stringify(object);
};

const handleGeneralInformation = ({
    name,
    flag,
    currencies,
    languages,
    callingCodes,
    region,
}) => {
    return {
        name,
        flag,
        currency: currencies[0].name,
        language: languages[0].name,
        callingCode: callingCodes[0],
        region,
    };
};

const sendRequest = () => {
    fetch(
        "GET",
        `https://restcountries.com/v2/name/${searchInput.value}`,
        (element) => {
            const localStorageStorage = convertObjectToString(
                handleGeneralInformation(element[0]),
            );
            localStorage.setItem("generalInformation", localStorageStorage);
            window.location.href = "../html/info.html";
        },
    );
};

addListener("#country-input", "keyup", (event) => {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // call the function
        sendRequest();
    }
});

addListener("#search-btn", "click", () => {
    // call the function
    sendRequest();
});

// -------------- Font awesome script -------------------------
(function fontAwesome() {
    var css = document.createElement("link");
    css.href = "https://pro.fontawesome.com/releases/v5.10.0/css/all.css";
    css.rel = "stylesheet";
    css.type = "text/css";
    document.getElementsByTagName("head")[0].appendChild(css);
})();
