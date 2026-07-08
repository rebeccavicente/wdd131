console.log("JavaScript is working!");

// Footer copyright year
document.getElementById("currentyear").textContent =
new Date().getFullYear();


// Footer last modified date
document.getElementById("lastModified").textContent =
`Last Modification: ${document.lastModified}`;


// Hamburger menu
const menuButton = document.getElementById("menu");
const navMenu = document.getElementById("nav-menu");


menuButton.addEventListener("click", () => {

    navMenu.classList.toggle("show");

    if (navMenu.classList.contains("show")) {
        menuButton.textContent = "❌";
        menuButton.setAttribute("aria-label", "Close Menu");
    } else {
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-label", "Open Menu");
    }

});