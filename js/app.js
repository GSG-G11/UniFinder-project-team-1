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
        event.preventDefault();
        sendRequest();
    }
});

addListener("#search-btn", "click", () => {
    sendRequest();
});

// the function for the most popular countries
const setCountry = (country) => {
    searchInput.value = country;
    sendRequest();
};

// for static countries
addListener("#egypt", "click ", () => {
    setCountry("egypt");
});
addListener("#turkey", "click ", () => {
    setCountry("turkey");
});
addListener("#italy", "click ", () => {
    setCountry("italy");
});
addListener("#emirate", "click ", () => {
    setCountry("emirate");
});
addListener("#spain", "click ", () => {
    setCountry("spain");
});
addListener("#lebanon", "click ", () => {
    setCountry("lebanon");
});


// Font awesome script
(function fontAwesome() {
    var css = document.createElement("link");
    css.href = "https://pro.fontawesome.com/releases/v5.10.0/css/all.css";
    css.rel = "stylesheet";
    css.type = "text/css";
    document.getElementsByTagName("head")[0].appendChild(css);
})();