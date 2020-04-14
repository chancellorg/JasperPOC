

const otherDoc = document.implementation.createHTMLDocument("Foo").documentElement;

document.querySelector("sect").addEventListener("click", () => {
    fetch("./Japer_POC_2020-03-26_10-06-04.html")
        .then((response) => response.text())
        .then((text) => {

            otherDoc.innerHTML = text;
            document.querySelector(".element_on_main_page").textContent = otherDoc.querySelector(".awesome_external_element").textContent;
        });
});







