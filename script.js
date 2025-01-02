// script.js

// Toggle the menu visibility and change background color of hamburger
function toggleMenu(element) {
  const menuPopup = document.getElementById("menu-popup");
  menuPopup.style.display =
    menuPopup.style.display === "block" ? "none" : "block";

  // Toggle the background color of the hamburger button (align-center)
  element.classList.toggle("clicked");
}

// Close the menu popup when an item is selected
function closeMenu() {
  const menuPopup = document.getElementById("menu-popup");
  menuPopup.style.display = "none"; // Hide the menu
}

// Scroll to the top of the page when clicking "Home"
document
  .getElementById("home-link")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
  });
// Scroll to the top of the page when clicking "Home"
document
  .getElementById("home-link2")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
  });
// Scroll to the top of the page when clicking "Description"
document
  .getElementById("description-link")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    window.scrollTo({ top: 800, behavior: "smooth" }); // Smooth scroll to top
  });
// Scroll to the top of the page when clicking "Description"
document
  .getElementById("description-link2")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    window.scrollTo({ top: 800, behavior: "smooth" }); // Smooth scroll to top
  });
// Scroll to the top of the page when clicking "Checkout"
document
  .getElementById("checkout-link")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    window.scrollTo({ top: 1500, behavior: "smooth" }); // Smooth scroll to top
  });
// Scroll to the top of the page when clicking "Checkout"
document
  .getElementById("checkout-link2")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    window.scrollTo({ top: 2390, behavior: "smooth" }); // Smooth scroll to top
  });
// Scroll to the top of the page when clicking "Checkout"
document
  .getElementById("store-title")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
  });

function goToCheckout() {
  window.location.href = "checkout.html"; // Ganti dengan URL halaman checkout Anda
}

// Toggle theme options dropdown
function toggleThemeMenu(event) {
  event.stopPropagation(); // Prevent click from propagating to the document

  const themeOptions = document.getElementById("theme-options");

  // Toggle the display of the theme options dropdown
  if (themeOptions.style.display === "block") {
    themeOptions.style.display = "none"; // Hide if it's already open
  } else {
    themeOptions.style.display = "block"; // Show if it's closed
  }
}

// Change the theme based on the selected option
function changeTheme(theme) {
  const body = document.body;
  const navbar = document.querySelector(".navbar");

  // Remove existing theme classes if any
  body.classList.remove(
    "white-theme",
    "aqua-theme",
    "pink-theme",
    "orange-theme"
  );

  // Add the selected theme class

  // Change navbar background color based on the theme
  switch (theme) {
    case "white":
      navbar.style.backgroundColor = "#ffffff"; // White theme background for navbar
      navbar.style.color = "#000"; // Ensure text color contrast
      break;
    case "aqua":
      navbar.style.backgroundColor = "#00bcd4"; // Aqua theme background for navbar
      navbar.style.color = "#fff";
      break;
    case "pink":
      navbar.style.backgroundColor = "#e91e63"; // Pink theme background for navbar
      navbar.style.color = "#fff";
      break;
    case "orange":
      navbar.style.backgroundColor = "#ff9800"; // Orange theme background for navbar
      navbar.style.color = "#fff";
      break;
    default:
      // Fallback to default theme if the theme is invalid
      navbar.style.backgroundColor = "#333"; // Default dark background
      navbar.style.color = "#fff"; // Default white text
  }

  // Close the theme dropdown
  const themeOptions = document.getElementById("theme-options");
  themeOptions.style.display = "none";
}

// Close the theme dropdown when clicking outside of it
document.addEventListener("click", function (event) {
  const themeOptions = document.getElementById("theme-options");

  // If the click is outside the theme options and dropdown is open, close it
  if (
    themeOptions.style.display === "block" &&
    !event.target.closest(".theme-container")
  ) {
    themeOptions.style.display = "none";
  }
});

// Close the menu-popup when clicking outside of it
document.addEventListener("click", function (event) {
  const menuPopup = document.getElementById("menu-popup");

  // If the menu-popup is open and the click is outside, close it
  if (
    menuPopup.style.display === "block" &&
    !event.target.closest("#menu-popup") &&
    !event.target.closest(".hamburger")
  ) {
    menuPopup.style.display = "none";
  }
});

// Set the default theme to white every time the page is loaded
document.addEventListener("DOMContentLoaded", function () {
  feather.replace();
  // Apply the default white theme every time the page loads
  changeTheme("white");
});

// Animasi masuk dari kiri ke kanan dengan jQuery
$(document).ready(function () {
  $(".product-crate").each(function (index) {
    const productCrate = $(this); // Store reference to this element

    // Initially set opacity to 0 and position to the left (off-screen)
    productCrate.css({
      opacity: 0,
      transform: "translateX(-100px)", // Start from off-screen
    });

    // Delay the animation based on index
    productCrate.delay(index * 100).animate(
      {
        opacity: 1,
      },
      500,
      "swing",
      function () {
        // Once the opacity animation is done, trigger the sliding effect
        $(this).css("transform", "translateX(0px)"); // Move to original position
      }
    );
  });
});
