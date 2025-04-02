// script.js

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector("#navbarNav");
    const dropdownLinks = document.querySelectorAll(".dropdown-toggle");

    // Add event listener for toggler click (mobile only)
    navbarToggler?.addEventListener("click", function () {
        if (window.innerWidth < 992) {
            navbarCollapse.classList.toggle("show");
        }
    });

    // Close navbar when clicking outside (mobile only)
    document.addEventListener("click", function (event) {
        if (window.innerWidth < 992 && !navbarCollapse.contains(event.target) && !navbarToggler.contains(event.target)) {
            navbarCollapse.classList.remove("show");
        }
    });

    // Dropdown toggle for all screens
    dropdownLinks.forEach(function (dropdown) {
        dropdown.addEventListener("click", function (event) {
            event.preventDefault();
            const dropdownMenu = this.nextElementSibling;

            // Mobile dropdown behavior
            if (window.innerWidth < 992) {
                dropdownMenu.classList.toggle("show");
            }

            // Close other dropdowns
            const allDropdownMenus = document.querySelectorAll(".dropdown-menu");
            allDropdownMenus.forEach(function (menu) {
                if (menu !== dropdownMenu && window.innerWidth < 992) {
                    menu.classList.remove("show");
                }
            });
        });
    });

    // Remove bounce class after animation ends
    const bounceElements = document.querySelectorAll(".bounce");
    bounceElements.forEach(function (element) {
        element.addEventListener("animationend", function () {
            element.classList.remove("bounce");
        });
    });
});

function handleSuccess(event) {
    event.preventDefault(); // Prevent default form submission
    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('successMessage').style.display = 'block';
}