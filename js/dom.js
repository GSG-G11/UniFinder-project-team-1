const navBarList = document.querySelector("#navbar-list");


const addListener = (selector, eventName, callback) => {
    document.querySelector(selector).addEventListener(eventName, callback);
};



addListener(".bar","click",()=>{
    navBarList.classList.toggle('nav-list-hide')
});