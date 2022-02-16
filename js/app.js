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

const handleUniversities = ({ name, web_pages }) => {
    return {
        name,
        website: web_pages
    };
};

const sendRequestInfo = () => {
    if(searchInput.value === undefined || searchInput.value === ''  || searchInput.value === null ){
        window.location.href = "../html/error.html";
        return;
    }
    fetch(
        "GET",
        `https://restcountries.com/v2/name/${searchInput.value}`,
        (element) => {
            if (element.length <= 0 || element.status === 404 ) {
                window.location.href = "../html/error.html";
                return;
            }
            const generalInformation = convertObjectToString(
                handleGeneralInformation(element[0]),
            );
            localStorage.setItem("generalInformation", generalInformation);
            window.location.href = "../html/info.html";
        },
    );
};

const sendRequestUni = () => {
    if(searchInput.value === undefined || searchInput.value === ''  || searchInput.value === null ){
        window.location.href = "../html/error.html";
        return;
    }
    // To solve palestine name in 2 differents APIs
    if (searchInput.value === "palestine") {
        searchInput.value = "Palestine, State of";
    }
    fetch("GET", `https://api.codetabs.com/v1/proxy/?quest=http://universities.hipolabs.com/search?&country=${searchInput.value}`, (element) => {
        if (element.length <= 0 ) {
            window.location.href = "../html/error.html";
            return;
        }
        let universities = [];
        element.forEach((university) => {
            universities.push(handleUniversities(university));
        })
        const universitiesStorage = convertObjectToString(universities);
        localStorage.setItem("universitiesStorage", universitiesStorage);
    });
}

addListener("#country-input", "keyup", (event) => {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        event.preventDefault();
        sendRequestInfo();
        sendRequestUni();
    }
});

addListener("#search-btn", "click", () => {
    sendRequestInfo();
    sendRequestUni();
});

// the function for the most popular countries
const setCountry = (country) => {
    searchInput.value = country;
    sendRequestInfo();
    sendRequestUni();
};

// for static countries
addListener("#egypt", "click", () => {
    setCountry("egypt");
});
addListener("#turkey", "click", () => {
    setCountry("turkey");
});
addListener("#italy", "click", () => {
    setCountry("italy");
});
addListener("#emirate", "click", () => {
    setCountry("emirate");
});
addListener("#spain", "click", () => {
    setCountry("spain");
});
addListener("#lebanon", "click", () => {
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