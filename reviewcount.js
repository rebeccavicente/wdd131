let count = Number(localStorage.getItem("reviews")) || 0;

count++;

localStorage.setItem("reviews", count);

document.querySelector("#counter").textContent = count;

document.querySelector("#lastModified").textContent =
`Last Modified: ${document.lastModified}`;