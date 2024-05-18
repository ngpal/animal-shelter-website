let data = null;
fetch("../sampledata.json").then((response) => {
    response.json().then((sampledata) => {
        const data = sampledata;
        let list = document.getElementById("productList");
        data.dogs.forEach((dog) => {
            let div = document.createElement("div");
            div.className = "product-card";
            let img = document.createElement("img");
            img.src = dog.image;
            img.alt = dog.name;
            let h3 = document
                .createElement("h3")
                .appendChild(document.createTextNode(dog.name));
            let p = document
                .createElement("p")
                .appendChild(document.createTextNode(dog.breed));

            div.appendChild(img);
            div.appendChild(h3);
            div.appendChild(p);

            list.appendChild(div);
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const scrollRight = document.getElementById("scrollRight");
    const productListContainer = document.querySelector(
        ".product-list-container"
    );

    console.log("Initial Scroll Left:", productListContainer.scrollLeft);

    scrollRight.addEventListener("click", function () {
        console.log("Clicked!");
        productListContainer.scrollBy({
            top: 0,
            left: 620,
            behavior: "smooth",
        });
        console.log("Scroll Left After:", productListContainer.scrollLeft);
    });
});
