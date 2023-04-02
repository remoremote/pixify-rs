// Select all paragraph tags
const pTags = document.querySelectorAll("p");

// Select the dark mode toggle button
const mode = document.querySelector("button.noBorder.font16");

// Select all elements with the "button" and "noBorder" classes
const borders = document.querySelectorAll(".button.noBorder");

// Add click event listener to the dark mode toggle button
mode.addEventListener("click", () => {
  // Toggle the "theme" class on the body element
  document.body.classList.toggle("theme");

  // Toggle the "noBorder" class on all elements with the "button" and "noBorder" classes
  for (const border of borders) {
    border.classList.toggle("noBorder");
  }

  // Check if the body element has the "theme" class (dark mode is enabled)
  const isDarkMode = document.body.classList.contains("theme");

  // Set the button's text and paragraphs' color based on the current mode
  mode.innerText = isDarkMode ? "Light Mode" : "Dark Mode";
  for (const p of pTags) {
    p.style.color = isDarkMode ? "white" : "black";
  }
});

// Select the hamburger menu button
const hamburger = document.querySelector(".hamburger");

// Add click event listener to the hamburger menu button
hamburger.addEventListener("click", () => {
  // Toggle the "links" and "mobile-menu" classes on the navigation bar elements
  document.querySelector("nav").classList.toggle("links");
  document.querySelector("div.flex").classList.toggle("mobile-menu");
});

// Add click event listener to the window
window.onclick = function (event) {
  // Check if the clicked element is not the hamburger menu button
  if (!event.target.matches("#dropBtn")) {
    // Remove the "links" and "mobile-menu" classes from the navigation bar elements
    document.querySelector("div.flex").classList.remove("mobile-menu");
    document.querySelector("nav").classList.remove("links");
  }
};
