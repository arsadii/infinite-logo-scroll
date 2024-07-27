const logo = document.getElementById("logo").cloneNode(true);

logo.setAttribute("aria-hidden", "true");

document.querySelector(".logo-container").appendChild(logo);
