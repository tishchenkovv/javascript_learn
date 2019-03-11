'use strcict';

(function () {

    let bodyDocument = document.querySelector("body");
    let divDocument = document.createElement("div");
    let pDocument = document.createElement("p");

    // Ajax запрос
    let queryAjax = new XMLHttpRequest();
    queryAjax.open("GET", "./sorce.json", true);
    queryAjax.send();

    queryAjax.addEventListener("readystatechange", function () {

        if (queryAjax.readyState == 4 && queryAjax.status == "200") {

            let data = JSON.parse(queryAjax.response);
            let textP = document.createTextNode(data.test_1 + " " + data.test_2);
            pDocument.appendChild(textP);
            divDocument.appendChild(pDocument);
            bodyDocument.appendChild(divDocument);
        }


    });

}());