// Mobile Navigation

const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
});


// Cookie Objects

const cookies = [
    {
        name: "Classic Chocolate Chip",
        description: "Made with Belgian chocolate and real butter.",
        image: "images/chocolate.jpg"
    },

    {
        name: "Oatmeal Raisin",
        description: "Soft oatmeal cookies with plump raisins and cinnamon.",
        image: "images/oatmeal.jpg"
    },

    {
        name: "Sugar Cookie",
        description: "Traditional buttery sugar cookie topped with sparkling sugar.",
        image: "images/sugar.jpg"
    }
];


// Display Featured Cookie

function displayFeaturedCookie() {

    const featured = document.querySelector("#featuredCookie");

    if (!featured) return;

    const randomCookie = cookies[Math.floor(Math.random() * cookies.length)];

    featured.innerHTML = `
        <h3>${randomCookie.name}</h3>

        <img src="${randomCookie.image}"
             alt="${randomCookie.name}"
             loading="lazy">

        <p>${randomCookie.description}</p>

        <button id="favoriteButton">
            Save as Favorite
        </button>
    `;

    const favoriteButton = document.querySelector("#favoriteButton");

    favoriteButton.addEventListener("click", () => {

        localStorage.setItem("favoriteCookie", randomCookie.name);

        alert(`${randomCookie.name} saved as your favorite cookie!`);

    });

}


// Show Favorite Cookie

function showFavoriteCookie() {

    const favorite = localStorage.getItem("favoriteCookie");

    if (favorite) {

        const featured = document.querySelector("#featuredCookie");

        featured.insertAdjacentHTML(
            "beforeend",
            `<p><strong>Your favorite cookie:</strong> ${favorite}</p>`
        );

    }

}


// Run Functions

displayFeaturedCookie();

showFavoriteCookie();