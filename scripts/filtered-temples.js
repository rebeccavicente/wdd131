// Footer

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent =
`Last Modified: ${document.lastModified}`;


// Hamburger Menu

const menuButton = document.querySelector("#menu");
const nav = document.querySelector("#nav-menu");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("show");
    menuButton.textContent = nav.classList.contains("show") ? "✖" : "☰";
});


// Temple Data

const temples = [
{
templeName: "Aba Nigeria",
location: "Aba, Nigeria",
dedicated: "2005, August, 7",
area: 11500,
imageUrl:
"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
},

{
templeName: "Manti Utah",
location: "Manti, Utah, United States",
dedicated: "1888, May, 21",
area: 74792,
imageUrl:
"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
},

{
templeName: "Payson Utah",
location: "Payson, Utah, United States",
dedicated: "2015, June, 7",
area: 96630,
imageUrl:
"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
},

{
templeName: "Yigo Guam",
location: "Yigo, Guam",
dedicated: "2020, May, 2",
area: 6861,
imageUrl:
"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
},

{
templeName: "Washington D.C.",
location: "Kensington, Maryland, United States",
dedicated: "1974, November, 19",
area: 156558,
imageUrl:
"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
},

{
templeName: "Lima Perú",
location: "Lima, Perú",
dedicated: "1986, January, 10",
area: 9600,
imageUrl:
"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
},

{
templeName: "Mexico City Mexico",
location: "Mexico City, Mexico",
dedicated: "1983, December, 2",
area: 116642,
imageUrl:
"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
},

// Three additional temples

{
  templeName: "Asunción Paraguay",
  location: "Asunción, Paraguay",
  dedicated: "2002, May, 19",
  area: 10700,
  imageUrl:
  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/asuncion-paraguay/800x500/1-68dfd881f93cb86e99828aa547eac056189c55ff.jpeg"
},,

{
  templeName: "Anchorage Alaska",
  location: "Anchorage, Alaska, United States",
  dedicated: "1999, January, 9",
  area: 11937,
  imageUrl:
  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/anchorage-alaska/800x450/anchorage-temple-lds-253274-wallpaper.jpg"
},
{
  templeName: "Adelaide Australia",
  location: "Adelaide, Australia",
  dedicated: "2000, June, 15",
  area: 10700,
  imageUrl:
  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/adelaide-australia/800x500/adelaide-australia-temple-lds-675332-wallpaper.jpg"
},
];

const gallery = document.querySelector(".gallery");

function displayTemples(filteredTemples){

    gallery.innerHTML = "";

    filteredTemples.forEach((temple)=>{

        const card = document.createElement("section");

        const name = document.createElement("h3");
        const location = document.createElement("p");
        const dedicated = document.createElement("p");
        const area = document.createElement("p");
        const image = document.createElement("img");

        name.textContent = temple.templeName;

        location.innerHTML = `<strong>Location:</strong> ${temple.location}`;
        dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;
        area.innerHTML = `<strong>Size:</strong> ${temple.area} sq ft`;

        image.src = temple.imageUrl;
        image.alt = temple.templeName;
        image.loading = "lazy";
        image.width = 400;
        image.height = 250;

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);

        gallery.appendChild(card);

    });

}

displayTemples(temples);


// Navigation Filters

const links = document.querySelectorAll("nav a");
const title = document.querySelector("main h2");

links.forEach(link=>{

link.addEventListener("click",(e)=>{

e.preventDefault();

const choice = link.textContent;

title.textContent = choice;

switch(choice){

case "Home":
displayTemples(temples);
break;

case "Old":
displayTemples(
temples.filter(temple=>parseInt(temple.dedicated) < 1900)
);
break;

case "New":
displayTemples(
temples.filter(temple=>parseInt(temple.dedicated) > 2000)
);
break;

case "Large":
displayTemples(
temples.filter(temple=>temple.area > 90000)
);
break;

case "Small":
displayTemples(
temples.filter(temple=>temple.area < 10000)
);
break;

}

});

});