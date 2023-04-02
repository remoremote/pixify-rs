// Declare and initialize variables
let imageSets;
let count = 0;
let currentId;
let gallery;
let display;

// Select elements from the DOM
const main = document.querySelector("main");
const buttons = document.querySelector("div.textCenter");
const next = document.querySelector("#next");
const previous = document.querySelector("#prev");

window.onload = function () {
  // Load image sets from local storage
  imageSets = JSON.parse(localStorage.getItem("imageSets"));

  // Get the current album ID from the URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  currentId = urlParams.get("id");

  // Set button container styles
  buttons.style.width = "30%";
  buttons.style.margin = "3% 0 8% 0";

  // Get the current album object
  const currentAlbum = imageSets.find(album => album.id == currentId);
  gallery = currentAlbum.images;

  // Create and insert the album HTML content
  const pic = `
    <p class="font36 bold">${currentAlbum.title}</p>
    <p class="font36">${currentAlbum.name}</p>
    <img src=${gallery[0]} alt=${currentAlbum.title} class="focused">
    <p>${count + 1} of ${gallery.length}</p>
  `;
  main.firstElementChild.innerHTML = pic;

  // Set margin top style for child elements
  const childNodes = document.querySelectorAll("p, img");
  for (const x of childNodes) {
    x.style.marginTop = "3%";
  }

  // Get the display image element
  display = document.querySelector("img");
};

// Add functionality to Next button, disabling when limit is reached
next.addEventListener("click", () => {
  previous.disabled = false;

  if (count < gallery.length - 1) {
    count++;
    updateDisplay();
  }
  if (count >= gallery.length - 1) {
    next.disabled = true;
  }
});

// Add functionality to Previous button, disabling when limit is reached
previous.disabled = true;
previous.addEventListener("click", () => {
  next.disabled = false;

  if (count > 0) {
    count--;
    updateDisplay();
  }
  if (count <= 0) {
    previous.disabled = true;
  }
});

// Function to update the display image and counter
function updateDisplay() {
  display.src = gallery[count];
  display.nextElementSibling.innerText = `${count + 1} of ${gallery.length}`;
}
