// Mobile Navigation

const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
});

// Cookie Data

const cookies = [
    {
        name: "Classic Chocolate Chip",
        flavor: "Rich Belgian chocolate with real butter.",
        image: "images/chocolate.jpg"
    },
    {
        name: "Oatmeal Raisin",
        flavor: "Old-fashioned oats, cinnamon, and juicy raisins.",
        image: "images/oatmeal.jpg"
    },
    {
        name: "Sugar Cookie",
        flavor: "Soft buttery cookie finished with sparkling sugar.",
        image: "images/sugar.jpg"
    },
    {
        name: "Double Chocolate",
        flavor: "Chocolate cookie packed with chocolate chips.",
        image: "images/double.jpg"
    },
    {
        name: "Peanut Butter",
        flavor: "Creamy peanut butter cookie with a soft center.",
        image: "images/peanut.jpg"
    },
    {
        name: "Snickerdoodle",
        flavor: "Cinnamon sugar cookie baked until perfectly soft.",
        image: "images/snickerdoodle.jpg"
    }
];

// Display Cookies

function displayCookies() {

    const container = document.querySelector("#cookieContainer");

    cookies.forEach(cookie => {

        container.innerHTML += `
            <article class="cookie-card">

                <img src="${cookie.image}"
                     alt="${cookie.name}"
                     loading="lazy">

                <h3>${cookie.name}</h3>

                <p>${cookie.flavor}</p>

                <button class="learnMore">
                    Learn More
                </button>

            </article>
        `;

    });

    const buttons = document.querySelectorAll(".learnMore");

    buttons.forEach((button, index) => {

        button.addEventListener("click", () => {

            alert(`Our ${cookies[index].name} is baked fresh every day using premium ingredients!`);

        });

    });

}

displayCookies();