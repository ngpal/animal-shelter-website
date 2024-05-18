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
        let name = document.createElement("h3");
        name.innerHTML = dog.name;
        let breed = document.createElement("p");
        breed.innerHTML = dog.breed;
        let age = document.createElement("sub");
        age.innerHTML = getAge(dog.birthday);
        div.appendChild(img);
        div.appendChild(name);
        div.appendChild(age);
        div.appendChild(breed);

        list.appendChild(div);
    });
};

function getAge(birthdayStr) {
  const birthday = new Date(birthdayStr);
  const today = new Date();

  // Calculate years and months, handling edge cases
  let years = today.getFullYear() - birthday.getFullYear();
  let months = today.getMonth() - birthday.getMonth();

  // Adjust for negative months (birthday this year)
  if (months < 0) {
    years--;
    months += 12;
  }

  // Handle cases where birthday falls on the same month in the current year
  if (months === 0 && today.getDate() < birthday.getDate()) {
    months = 11; // Adjust to 11 months for the previous year
    years--;
  }

  const yearText = years === 0 ? "" : `${years} year${years > 1 ? "s" : ""}`;
  const monthText = months === 0 ? "" : `${months} month${months > 1 ? "s" : ""}`;

  // Combine year and month text with proper handling for both
  const ageText = yearText.trim() + (yearText && monthText ? " and " : "") + monthText.trim();

  // Handle "Less than a month old" case
  if (years === 0 && months === 0) {
    return "Less than a month old";
  } else {
    return ageText + " old"; // Add "old" at the end
  }
}

let populateCatList = function (data) {
    let list = document.getElementById("catList");
    data.cats.forEach((cat) => {
        let div = document.createElement("div");
        div.className = "product-card";
        let img = document.createElement("img");
        img.src = cat.image;
        img.alt = cat.name;
        let name = document.createElement("h3");
        name.innerHTML = cat.name;
        let age = document.createElement("sub");
        age.innerHTML = getAge(cat.birthday);
        let breed = document.createElement("p");
        breed.innerHTML = cat.breed;
        div.appendChild(img);
        div.appendChild(name);
        div.appendChild(age);
        div.appendChild(breed);

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
