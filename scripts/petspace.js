let data = null;
fetch("../sampledata.json").then((response) => {
    response.json().then((sampledata) => {
        const data = sampledata;
        populateDogList(data);
        populateCatList(data);
    });
});

let populateDogList = function (data) {
    let list = document.getElementById("dogList");
    data.dogs.forEach((dog) => {
        let div = document.createElement("div");
        div.className = "product-card";
        let img = document.createElement("img");
        img.src = dog.image;
        img.alt = dog.name;
        let h3 = document.createElement("h3");
        h3.innerHTML = dog.name;
        let p = document.createElement("p");
        p.innerHTML = dog.breed;
        div.appendChild(img);
        div.appendChild(h3);
        div.appendChild(p);

        list.appendChild(div);
    });
};

let populateCatList = function (data) {
    let list = document.getElementById("catList");
    data.cats.forEach((cat) => {
        let div = document.createElement("div");
        div.className = "product-card";
        let img = document.createElement("img");
        img.src = cat.image;
        img.alt = cat.name;
        let h3 = document.createElement("h3");
        h3.innerHTML = cat.name;
        let p = document.createElement("p");
        p.innerHTML = cat.breed;
        div.appendChild(img);
        div.appendChild(h3);
        div.appendChild(p);

        list.appendChild(div);
    });
};

document.addEventListener("DOMContentLoaded", function () {
    const scrollRight = document.getElementsByClassName("scroll-icon");

    Array.from(scrollRight).forEach((scroller) => {
        const productListContainer = scroller.parentElement.querySelector(
            ".product-list-container"
        );
        scroller.addEventListener("click", function () {
            productListContainer.scrollBy({
                top: 0,
                left: 620,
                behavior: "smooth",
            });
        });
    });
});
