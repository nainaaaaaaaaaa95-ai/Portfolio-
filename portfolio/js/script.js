/* =========================================================
   NAINA PORTFOLIO
   Main JavaScript
   ========================================================= */


/* =========================
   MOBILE MENU
   ========================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", () => {

    menuToggle.classList.toggle("active");

    navMenu.classList.toggle("active");

    document.body.classList.toggle("menu-open");

});


/* Close mobile menu after clicking a link */

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        menuToggle.classList.remove("active");

        navMenu.classList.remove("active");

        document.body.classList.remove("menu-open");

    });

});


/* =========================
   ACTIVE NAVIGATION
   ========================= */

const sections = document.querySelectorAll("section[id]");

function updateActiveNavigation() {

    const scrollPosition = window.scrollY + 150;

    sections.forEach((section) => {

        const sectionTop = section.offsetTop;

        const sectionHeight = section.offsetHeight;

        const sectionId = section.getAttribute("id");

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            navLinks.forEach((link) => {

                link.classList.remove("active");

            });

            const activeLink =
                document.querySelector(
                    `.nav-link[href="#${sectionId}"]`
                );

            if (activeLink) {

                activeLink.classList.add("active");

            }

        }

    });

}

window.addEventListener("scroll", updateActiveNavigation);


/* =========================
   SCROLL REVEAL
   ========================= */

const revealElements = document.querySelectorAll(
    ".section-heading, .about-grid, .skill-category, .project-card, .education-item, .contact-wrapper"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================
   PROJECT HOVER EFFECT
   ========================= */

const projectCards =
    document.querySelectorAll(".project-card");

projectCards.forEach((card) => {

    const image = card.querySelector(".project-image");

    card.addEventListener("mouseenter", () => {

        image.style.transform = "translateY(-4px)";

        image.style.transition = "transform 0.4s ease";

    });

    card.addEventListener("mouseleave", () => {

        image.style.transform = "translateY(0)";

    });

});


/* =========================
   CURRENT YEAR
   ========================= */

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================
   SMOOTH BACK TO TOP
   ========================= */

const backTop =
    document.querySelector(".back-top");

if (backTop) {

    backTop.addEventListener("click", (event) => {

        event.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =========================
   PREVENT EMPTY PROJECT LINKS
   ========================= */

const projectLinks =
    document.querySelectorAll(".project-arrow");

projectLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        if (link.getAttribute("href") === "#") {

            event.preventDefault();

            alert(
                "Project link will be added soon."
            );

        }

    });

});
