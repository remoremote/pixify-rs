function setMobileStyles() {
    nav.style.flexBasis = "100%";
    message.style.width = "90%";
    message.style.borderRadius = "24px 24px 24px 0";
    message.style.padding = "5%";
    button.style.position = "static";
    button.style.fontSize = "24px";
    button.style.marginTop = "3%";
    button.style.padding = "1% 3%";
}

function setDesktopStyles() {
    nav.style.flexBasis = "25%";
    message.style.width = "45%";
    message.style.borderRadius = "96px 96px 96px 0";
    message.style.padding = "3%";
    button.style.position = "absolute";
    button.style.right = "5%";
    button.style.bottom = "5%";
    button.style.fontSize = "36px";
    button.style.padding = "2% 5%";
}

function setResponsiveStyles() {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 768) {
        setMobileStyles();
    } else {
        setDesktopStyles();
    }
}

window.addEventListener("resize", setResponsiveStyles);

// Select the navigation element and set its flex basis to 25%
const nav = document.querySelector("nav");

// Select the container element, and set its position to relative
const container = document.querySelector("#container");
container.style.position = "relative";

// Set the width of the first child element of the container to 100%
container.firstElementChild.style.width = "100%";

// Style the message element (second child of the container)
const message = container.firstElementChild.nextElementSibling;
message.style.position = "absolute";
message.style.bottom = "0";
message.style.left = "0";

// Style the button element
const button = document.querySelector(".button");

// Clear local storage when opening the homepage
localStorage.clear();

// Apply responsive styles depending on the screen size
setResponsiveStyles();