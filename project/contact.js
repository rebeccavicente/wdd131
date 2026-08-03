// Navigation

const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
});

// Form

const form = document.querySelector("#contactForm");

const confirmation = document.querySelector("#confirmation");

// Load saved values

const savedName = localStorage.getItem("visitorName");
const savedFavorite = localStorage.getItem("favoriteCookie");

if (savedName) {
    document.querySelector("#name").value = savedName;
}

if (savedFavorite) {
    document.querySelector("#favorite").value = savedFavorite;
}

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.querySelector("#name").value;
    const favorite = document.querySelector("#favorite").value;

    localStorage.setItem("visitorName", name);

    if (favorite !== "") {
        localStorage.setItem("favoriteCookie", favorite);
    }

    confirmation.innerHTML = `
        <h2>Thank You!</h2>

        <p>
        Thanks, ${name}! Your message has been received.
        </p>
    `;

    form.reset();

});