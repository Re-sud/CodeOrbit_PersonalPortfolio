/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");
});

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");
    });
});


/* =====================================================
   HERO NAME "DECRYPT" REVEAL
   A single orchestrated load moment: the name resolves
   out of scrambled characters, echoing the encryption /
   security theme running through the page.
===================================================== */

const heroName = document.getElementById("hero-name");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (heroName && !prefersReducedMotion) {
    const finalText = heroName.dataset.text || heroName.textContent;
    const glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&$*01";
    let frame = 0;
    const totalFrames = 24;

    const scramble = () => {
        const progress = frame / totalFrames;
        const revealCount = Math.floor(progress * finalText.length);

        let output = "";
        for (let i = 0; i < finalText.length; i++) {
            if (finalText[i] === " ") {
                output += " ";
            } else if (i < revealCount) {
                output += finalText[i];
            } else {
                output += glyphs[Math.floor(Math.random() * glyphs.length)];
            }
        }

        heroName.textContent = output;
        frame++;

        if (frame <= totalFrames) {
            requestAnimationFrame(() => setTimeout(scramble, 28));
        } else {
            heroName.textContent = finalText;
        }
    };

    scramble();
}


/* =====================================================
   ACTIVE NAV LINK ON SCROLL
===================================================== */

const sections = document.querySelectorAll("section[id]");

const setActiveLink = () => {
    let currentId = sections[0]?.id;

    sections.forEach((section) => {
        const top = section.offsetTop - 120;
        if (window.scrollY >= top) {
            currentId = section.id;
        }
    });

    navigationLinks.forEach((link) => {
        link.classList.toggle("active-link", link.getAttribute("href") === `#${currentId}`);
    });
};

window.addEventListener("scroll", setActiveLink, { passive: true });
setActiveLink();


/* =====================================================
   SIMPLE CONTACT MESSAGE
===================================================== */

const contactLinks = document.querySelectorAll(".contact-links a");

contactLinks.forEach((link) => {
    link.addEventListener("click", () => {
        console.log("Contact link selected:", link.textContent.trim());
    });
});
