// -------------- fetch method -------------------------
/*
    to Use it ===> fetch(YourMethod,YourUrl,YourCallback)
    Ex: fetch("GET","http://example.com",(element)=>{
        console.log(element)
    });
*/
const fetch = (method, url, callback) => {
    let xhr = new XMLHttpRequest();

    xhr.addEventListener("load", function () {
        if (xhr.readyState == 4 && xhr.status === 200) {
            let { data } = JSON.parse(xhr.responseText);
            return callback(data);
        } else {
            console.log("Status Code: " + xhr.status);
        }
    });

    xhr.open(method, url, false);
    xhr.send();
};