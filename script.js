/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


/* =====================================================
   CLOSE MOBILE MENU AFTER CLICKING A LINK
===================================================== */

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


/* =====================================================
   SIMPLE CONTACT MESSAGE
===================================================== */

const contactLinks = document.querySelectorAll(".contact-links a");

contactLinks.forEach((link) => {
    link.addEventListener("click", () => {
        console.log("Contact link selected:", link.textContent);
    });
});