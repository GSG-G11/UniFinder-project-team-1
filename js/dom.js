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
