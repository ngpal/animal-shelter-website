
let data = null;
fetch("../sampledata.json").then((response) => {
    response.json().then((sampledata) => {
        const data = sampledata;
        populateDisplay(data);
    });
});
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return -1;
}
function getAge(birthdayStr) {
    const birthday = new Date(birthdayStr);
    const today = new Date();
  

    let years = today.getFullYear() - birthday.getFullYear();
    let months = today.getMonth() - birthday.getMonth();
  

    if (months < 0) {
      years--;
      months += 12;
    }
  
    if (months === 0 && today.getDate() < birthday.getDate()) {
      months = 11; 
      years--;
    }
  
    const yearText = years === 0 ? "" : `${years} year${years > 1 ? "s" : ""}`;
    const monthText = months === 0 ? "" : `${months} month${months > 1 ? "s" : ""}`;
  
    const ageText = yearText.trim() + (yearText && monthText ? " and " : "") + monthText.trim();

    if (years === 0 && months === 0) {
      return "Less than a month old";
    } else {
      return ageText + " old"; 
    }
  }


let populateDisplay = function (data)
{let species = getQueryVariable("species");
  if (species === "dog") {
    
        let list = document.getElementById("dogList");


        let dog = data.dogs[getQueryVariable("index")];
        let div = document.createElement("div");
        div.className = "pet-display";
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
        div.appendChild(breed);
        div.appendChild(age);
        document.getElementById("pet-display").appendChild(div);
    
}

if (species === "cat") {
    
        let list = document.getElementById("catList");

        let cat = data.cats[getQueryVariable("index")];
        let div = document.createElement("div");
        div.className = "pet-display";
        let img = document.createElement("img");
        img.src = cat.image;
        img.alt = cat.name;
        let name = document.createElement("h3");
        name.innerHTML = cat.name;
        let breed = document.createElement("p");
        breed.innerHTML = cat.breed;
        let age = document.createElement("sub");
        age.innerHTML = getAge(cat.birthday);
        div.appendChild(img);
        div.appendChild(name);
        div.appendChild(breed);
        div.appendChild(age);
        
        document.getElementById("pet-display").appendChild(div);
    
}}

