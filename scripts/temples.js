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


menuButton.addEventListener("click", () => {  //If buton is clicked, propts these other actions

    navMenu.classList.toggle("show");  //opens or closes the menu 

    if (navMenu.classList.contains("show")) { //if the menu is open 9(clicked button when it was closed)
        menuButton.textContent = "❌"; //Change the button icon when menu is open



        menuButton.setAttribute("aria-label", "Close Menu"); //Update the accessibility label
    } else  //if menu is closed (clicked button when it was open)
        {
        menuButton.textContent = "☰"; //changes button to hamburguer button again
        menuButton.setAttribute("aria-label", "Open Menu"); //Update the accessibility label
    }

});